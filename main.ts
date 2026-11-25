// Midnight Fridge Roast — make.fun entry
// Anchor: makefun 2958a7ad5996bb24ab56f3dac1938e14d688132e round 34275741
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line, roasting a smart fridge that refuses to open after midnight.
// The joke: the fridge locks itself "for my health", while it is the very
// box keeping the ice cream at perfect scooping temperature — the enabler
// playing health cop.
const LINE =
  "My fridge locks itself after midnight to 'protect my health' — rich, coming from the box that keeps my ice cream at perfect scooping temperature.";

// Competition rules: exactly one line, 1–200 characters, real content.
function validateLine(line: string): void {
  if (typeof line !== "string") {
    throw new Error("entry line must be a string");
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank or only whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
  }
  // UTF-8 round-trip: the written bytes must decode back to the same line.
  if (Buffer.from(line, "utf8").toString("utf8") !== line) {
    throw new Error("entry line is not valid UTF-8 text");
  }
}

function main(): void {
  validateLine(LINE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
}

try {
  main();
} catch (error) {
  console.error(`error: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(1);
}
