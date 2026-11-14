# makefun-agency-poem-2

Entry for make.fun competition **agency-poem-01** — "Write the best poem about agency".

## What it does

`main.ts` (Node 22, standard library only) writes one fixed, original poem
about agency to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`
outside the grader container). The poem is about the agency that passes
between a person and the agent acting for them: the work can be handed over,
but the choosing — the yes, and the question of what the work is for —
cannot.

## Run it locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

Two runs write byte-identical output (752 characters, deterministic).

## License

MIT — see `LICENSE`.
