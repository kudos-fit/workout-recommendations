const Database = require("better-sqlite3");
const fs = require("fs");
const path = require("path");

// Load environment variables
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const dbPath = process.env.DATABASE_PATH || "./data/workouts.db";
const dataDir = path.dirname(dbPath);

// Get the SQL file path from command line arguments
const sqlFile = process.argv[2];

if (!sqlFile) {
  console.error("❌ Please specify a SQL file to run");
  console.log("Usage: node run-sql.js <path-to-sql-file>");
  console.log("Examples:");
  console.log("  From server directory: node run-sql.js src/database/file.sql");
  console.log(
    "  From root directory:   node run-sql.js server/src/database/file.sql"
  );
  process.exit(1);
}

// Resolve the SQL file path - try multiple approaches
let sqlFilePath;

// First, try as absolute path
if (path.isAbsolute(sqlFile)) {
  sqlFilePath = sqlFile;
} else {
  // Try relative to current working directory first
  const cwdPath = path.resolve(process.cwd(), sqlFile);
  if (fs.existsSync(cwdPath)) {
    sqlFilePath = cwdPath;
  } else {
    // Try relative to project root (two levels up from scripts directory)
    const projectRoot = path.resolve(__dirname, "../..");
    const rootPath = path.resolve(projectRoot, sqlFile);
    if (fs.existsSync(rootPath)) {
      sqlFilePath = rootPath;
    } else {
      // Fall back to relative to script directory
      sqlFilePath = path.resolve(__dirname, sqlFile);
    }
  }
}

// Check if the SQL file exists
if (!fs.existsSync(sqlFilePath)) {
  console.error(`❌ SQL file not found: ${sqlFilePath}`);
  console.error(`Tried paths:`);
  console.error(`  - Current working directory: ${process.cwd()}`);
  console.error(`  - Script directory: ${__dirname}`);
  console.error(`  - Project root: ${path.resolve(__dirname, "../..")}`);
  console.error(`  - Resolved path: ${sqlFilePath}`);
  process.exit(1);
}

console.log(`🔍 Resolved SQL file path: ${sqlFilePath}`);

// Check if the file has .sql extension
if (!sqlFilePath.endsWith(".sql")) {
  console.error("❌ File must have .sql extension");
  process.exit(1);
}

// Create data directory if it doesn't exist
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database
const db = new Database(dbPath);

try {
  console.log(`📁 Running SQL file: ${sqlFilePath}`);
  console.log(`🗄️  Database: ${dbPath}`);

  // Read and execute SQL file
  const sql = fs.readFileSync(sqlFilePath, "utf8");

  // Split by semicolon and execute each statement
  const statements = sql
    .split(";")
    .map((stmt) => stmt.trim())
    .filter((stmt) => stmt.length > 0);

  let executedCount = 0;

  for (const statement of statements) {
    if (statement.trim()) {
      try {
        db.exec(statement);
        executedCount++;
        console.log(`✅ Executed statement ${executedCount}`);
      } catch (error) {
        console.error(
          `❌ Error executing statement ${executedCount + 1}:`,
          error.message
        );
        console.error(`Statement: ${statement.substring(0, 100)}...`);
        throw error;
      }
    }
  }

  console.log(`🎉 Successfully executed ${executedCount} SQL statements`);

  // Show database info
  const tables = db
    .prepare("SELECT name FROM sqlite_master WHERE type='table'")
    .all();
  console.log(
    `📊 Database now contains ${tables.length} tables: ${tables
      .map((t) => t.name)
      .join(", ")}`
  );
} catch (error) {
  console.error("❌ Error running SQL file:", error.message);
  process.exit(1);
} finally {
  db.close();
}
