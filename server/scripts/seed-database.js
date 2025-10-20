const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const dbPath = process.env.DATABASE_PATH || "./data/workouts.db";

// Check if database exists
if (!fs.existsSync(dbPath)) {
  console.error("❌ Database not found. Please run 'yarn db:setup' first.");
  process.exit(1);
}

// Initialize database
const db = new Database(dbPath);

try {
  console.log("Seeding database with additional data...");

  // Check if data already exists
  const userCount = db.prepare("SELECT COUNT(*) as count FROM users").get();
  const workoutCount = db
    .prepare("SELECT COUNT(*) as count FROM workouts")
    .get();

  if (userCount.count > 0 || workoutCount.count > 0) {
    console.log("⚠️  Database already contains data.");
    console.log("   - Users:", userCount.count);
    console.log("   - Workouts:", workoutCount.count);

    const readline = require("readline");
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(
      "Do you want to clear existing data and re-seed? (y/N): ",
      (answer) => {
        if (answer.toLowerCase() === "y" || answer.toLowerCase() === "yes") {
          console.log("🗑️  Clearing existing data...");

          // Clear existing data
          db.prepare("DELETE FROM workouts").run();
          db.prepare("DELETE FROM users").run();

          // Re-seed with fresh data
          seedFreshData();
        } else {
          console.log("✅ Keeping existing data. Exiting.");
          db.close();
          rl.close();
        }
      }
    );
  } else {
    // No existing data, seed fresh
    seedFreshData();
  }

  function seedFreshData() {
    try {
      // Read and execute seed data
      const seedPath = path.join(__dirname, "../src/database/seed-data.sql");
      const seedData = fs.readFileSync(seedPath, "utf8");
      db.exec(seedData);

      console.log("✅ Seed data inserted successfully");

      // Verify data
      const newUserCount = db
        .prepare("SELECT COUNT(*) as count FROM users")
        .get();
      const newWorkoutCount = db
        .prepare("SELECT COUNT(*) as count FROM workouts")
        .get();

      console.log(`📊 Database now contains:`);
      console.log(`   - ${newUserCount.count} users`);
      console.log(`   - ${newWorkoutCount.count} workouts`);

      console.log("🎉 Database seeding completed successfully!");
    } catch (error) {
      console.error("❌ Error seeding database:", error);
      process.exit(1);
    } finally {
      db.close();
      if (typeof rl !== "undefined") {
        rl.close();
      }
    }
  }
} catch (error) {
  console.error("❌ Error accessing database:", error);
  process.exit(1);
}
