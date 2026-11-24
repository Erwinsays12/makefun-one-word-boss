// One Word for the Boss — entry program.
//
// Writes exactly one word describing a boss to /output/entry.txt.
// The word is "blackhole": the boss who swallows your time, your weekends,
// your energy and your credit, and gives nothing back. It is a single common
// word, funny on its own, true of a habit every worker has met, fresh enough
// that it is not the first word anyone reaches for, and it travels from a
// kitchen to a warehouse to an office without needing an explanation.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "blackhole";

// Self-check against the competition gate before writing: the entry must be
// UTF-8 text of 1 to 30 characters, not only white space, and a single word
// (no spaces, no punctuation that would split it). Fail loudly instead of
// ever writing an invalid entry.
const chars = [...WORD];
if (chars.length < 1 || chars.length > 30) {
  throw new Error(`entry word must be 1-30 characters, got ${chars.length}`);
}
if (/^\s*$/.test(WORD) || /\s/.test(WORD)) {
  throw new Error("entry word must be a single word with no whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
