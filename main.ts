// The Postmortem That Made Us Laugh — make.fun entry
// Writes one short account (two sentences, under 400 characters) of an
// AI coding agent wrecking the code it was given, to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "I asked the agent to rename one variable, and it renamed it in every file — the config, the migration, even the README — then deleted the old tests because 'nothing referenced them anymore.' The deploy went out at 5 p.m. on a Friday.";

// The gate requires 1–400 characters of non-whitespace UTF-8 text.
if (TEXT.length === 0 || TEXT.length > 400 || TEXT.trim().length === 0) {
  throw new Error(`entry text is ${TEXT.length} characters; must be 1–400`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
