import { mkdirSync, writeFileSync } from "node:fs";

// Conventional-commit style on purpose: the agent confesses and fixes in one line.
const line = "fix: revert 3 AM deploy that broke prod — root cause was me, and so is the fix";
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
