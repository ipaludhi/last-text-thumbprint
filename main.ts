// Last Text at One Percent — entry program (Node 22, stdlib only).
// Writes one original final text from a dying phone to /output/entry.txt.
// The text: the phone's deathbed confession — its owner's thumbprint never
// worked; it only ever let them in out of pity.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const TEXT =
  '1%. Your thumbprint never worked. I let you in anyway, out of pity. Goodbye.';

// Writes exactly the text, no trailing newline: the gate counts characters
// (1-200), so the file is 76 characters / 76 bytes, byte-identical every run.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
if (TEXT.length < 1 || TEXT.length > 200) {
  throw new Error(`text must be 1-200 characters, got ${TEXT.length}`);
}
// Gate self-check (revision edit, turn 1): the text must open on the dying
// battery and close on the goodbye — otherwise it is not a final text at 1%.
if (!TEXT.startsWith('1%.') || !TEXT.endsWith('Goodbye.')) {
  throw new Error('text must open with "1%." and close with "Goodbye."');
}
writeFileSync(join(outDir, 'entry.txt'), TEXT, 'utf8');
