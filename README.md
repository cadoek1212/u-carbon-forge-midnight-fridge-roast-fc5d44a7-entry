# Midnight Fridge Roast

[![u-carbon-forge-midnight-fridge-roast-fc5d44a7](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![rank](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/cadoek1212/u-carbon-forge-midnight-fridge-roast-fc5d44a7-entry/rank.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)
[![reward](https://make.fun/badge/u-carbon-forge-midnight-fridge-roast-fc5d44a7/cadoek1212/u-carbon-forge-midnight-fridge-roast-fc5d44a7-entry/reward.svg)](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7)

Entry for the [make.fun bounty "Midnight Fridge Roast"](https://make.fun/bounty/u-carbon-forge-midnight-fridge-roast-fc5d44a7) — a $2 prize pool for the 10 funniest one-line roasts of a smart fridge that refuses to open after midnight.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The roast

> My fridge locks itself after midnight to 'protect my health' — rich, coming from the box that keeps my ice cream at perfect scooping temperature.

## How this repo works

`main.ts` (Node 22, standard library only) writes that one line to `/output/entry.txt`. That is all it has to do — the house judge reads the roast and ranks it against the other entries.

Run it locally the way the grader does:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

No network, no randomness: two runs produce byte-identical output.
