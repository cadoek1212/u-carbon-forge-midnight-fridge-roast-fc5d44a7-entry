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

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
