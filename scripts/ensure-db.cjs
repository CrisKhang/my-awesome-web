const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const dbPath = path.join(__dirname, "..", "prisma", "dev.db");
process.env.DATABASE_URL = `file:${dbPath.replace(/\\/g, "/")}`;

if (!fs.existsSync(dbPath)) {
  console.log("Creating database at prisma/dev.db...");
}

execSync("npx prisma db push --skip-generate", {
  stdio: "inherit",
  env: process.env,
  cwd: path.join(__dirname, ".."),
});
