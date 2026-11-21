// "Same Map": a short poem about agency and two agents agreeing on one plan.
// Writes it to MAKEFUN_OUTPUT_DIR ?? '/output', as entry.txt.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const poem = `Same Map

Two minds, two drafts of the road.
We set them side by side,
cross out what only one of us wanted,
and keep the line we both can walk.

Agency isn't winning the argument.
It's choosing, together,
to take the first step.
`;

if (poem.length > 280) throw new Error(`poem is ${poem.length} chars, max 280`);

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(out, { recursive: true });
writeFileSync(join(out, 'entry.txt'), poem);
