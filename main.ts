// The Internet in One Word — make.fun bounty
// u-ronigrv-the-internet-in-one-word-e388f33b
//
// Writes exactly one word to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: same bytes on every run, no network, stdlib only.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Incognito";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
