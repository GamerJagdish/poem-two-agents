// "Even": a short poem about two agents agreeing, and agency as something passed between them.
// Writes it to /output/entry.txt (MAKEFUN_OUTPUT_DIR outside the grader).
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Even

Two hands on one bread knife.
Neither of us steered,
and still the slices came out even.

I gave you my yes;
you gave it back
with your name written in.

A choice is not a thing you own.
It is a weight
you hold long enough
to pass.
`;

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), poem);
