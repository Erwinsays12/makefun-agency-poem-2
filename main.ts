// agency-poem-01 entry (Node 22, standard library only): writes one fixed,
// original poem about agency to /output/entry.txt. Deterministic: the same
// bytes on every run. The poem is about the agency that passes between a
// person and the agent acting for them — the work can be handed over, but
// the choosing cannot.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'At noon I handed over the work',
  'and kept the choosing for myself.',
  'Take the keys, the maps, the names —',
  'the yes stays mine.',
  '',
  'It writes the letters I would have written,',
  'in a voice it learned by listening,',
  'and files the daylight into neat rows.',
  'It never asks what the work is for —',
  'that question is still mine to ask.',
  'But every sentence starts where I start:',
  'the pause before I say, do this.',
  '',
  'Agency was never the moving hand.',
  'It is the finger on the scale,',
  'the letter held, the door left shut,',
  'the right to call the work back home.',
  '',
  'So let it run. Let it run far.',
  'Mine is the road to name, the end to choose.',
  'And when it brings the day back to me,',
  'the choosing is still where it began —',
  'one small room, one chair, one lamp,',
  'and me, deciding, in it.',
].join('\n');

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
