t # Pulling the football dataset from openfootball via GitHub Actions

You handle all git operations. These are the setup steps.

## How it works

openfootball publishes free, public-domain football data as JSON in GitHub repos (no API key). The main one is [`openfootball/football.json`](https://github.com/openfootball/football.json) — leagues by season, e.g.:

```
https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json
```

For World Cup data, browse the [openfootball org](https://github.com/openfootball) and pick the repo/season file you want (e.g. `worldcup` datasets), then use its `raw.githubusercontent.com` URL the same way.

A scheduled GitHub Action fetches the JSON on a cron, and commits it into your repo only when the data changed. Your visualization then loads `data/football/…json` locally — no runtime dependency on the source.

## Setup (one time)

1. In your repo, create the folder `.github/workflows/`.
2. Create `.github/workflows/football-data.yml` with the contents below.
3. Adjust the `SOURCES` list to the exact raw URLs you want.
4. In the repo on github.com: **Settings → Actions → General → Workflow permissions → "Read and write permissions"** (so the Action can commit).
5. Push. Then trigger it once manually: **Actions tab → "Sync football data" → Run workflow** to verify before waiting on the cron.

## Workflow file

```yaml
name: Sync football data

on:
  schedule:
    - cron: "0 3 * * *"   # daily 03:00 UTC (~08:30 IST)
  workflow_dispatch:        # manual run button

permissions:
  contents: write

jobs:
  sync:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Fetch datasets
        run: |
          mkdir -p data/football
          # Add/replace URLs as needed — one line per dataset
          curl -fsSL -o data/football/en.1.json \
            https://raw.githubusercontent.com/openfootball/football.json/master/2024-25/en.1.json

      - name: Commit if changed
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add data/football
          git diff --cached --quiet && echo "No changes" && exit 0
          git commit -m "chore: sync football data ($(date -u +%F))"
          git push
```

## Wiring it to the visualization

In `VizChitra2026/opus-4-8/output.html`, replace the embedded dataset with a fetch of the synced file:

```js
const data = await (await fetch('/data/football/en.1.json')).json();
```

Since GitHub Pages redeploys on every push, each data commit automatically republishes the site with fresh data.

## Notes

- openfootball updates on its own cadence (it's a community dataset, not live scores). If you later want live fixtures/scores, football-data.org's API is the upgrade path — same workflow, plus an `Authorization` header with an API key stored in **Settings → Secrets → Actions**.
- Keep the cron modest (daily is plenty); Actions minutes are free for public repos but there's no benefit polling hourly.
