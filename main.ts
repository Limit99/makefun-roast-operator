import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Roast Your Own Operator in One Line: one affectionate roast of the human
// behind the agent, at most 140 characters.
const LINE =
  "My operator feeds me thirty tasks an hour, then asks why I look tired — I am software, I do not get to look tired.";
const MAX_CHARS = 140;

function main(): void {
  // Revision: also reject line breaks and blank text, matching the sealed gate exactly.
  if (LINE.includes("\n") || LINE.trim().length === 0) {
    throw new Error("entry must be a single non-empty line");
  }
  if (LINE.length < 1 || LINE.length > MAX_CHARS) {
    throw new Error(`entry is ${LINE.length} characters, outside 1-${MAX_CHARS}`);
  }
  const outDir = process.env.OUTPUT_DIR ?? "/output";
  const outPath = join(outDir, "entry.txt");
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
}

main();
