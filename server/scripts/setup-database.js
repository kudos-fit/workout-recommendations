const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

const dbPath = process.env.DATABASE_PATH || "./data/workouts.db";
const dataDir = path.dirname(dbPath);

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database
const db = new Database(dbPath);

try {
  console.log("Setting up database...");

  // Read and execute schema
  const schemaPath = path.join(__dirname, "../src/database/schema.sql");
  const schema = fs.readFileSync(schemaPath, "utf8");
  db.exec(schema);

  console.log("✅ Database schema created successfully");

  // Read and execute seed data
  const seedPath = path.join(__dirname, "../src/database/seed-data.sql");
  const seedData = fs.readFileSync(seedPath, "utf8");
  db.exec(seedData);

  console.log("✅ Seed data inserted successfully");

  // Verify data
  const userCount = db.prepare("SELECT COUNT(*) as count FROM users").get();
  const workoutCount = db
    .prepare("SELECT COUNT(*) as count FROM workouts")
    .get();

  console.log(`📊 Database contains:`);
  console.log(`   - ${userCount.count} users`);
  console.log(`   - ${workoutCount.count} workouts`);

  console.log("🎉 Database setup completed successfully!");
} catch (error) {
  console.error("❌ Error setting up database:", error);
  process.exit(1);
} finally {
  db.close();
}
