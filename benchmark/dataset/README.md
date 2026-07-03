# Benchmark dataset

Place your benchmark dataset files in this folder.

The benchmark page links here at [benchmark/dataset/](../benchmark.html).

## Expected contents

- Source data files used for both models (CSV, JSON, images, etc.)
- A short `README.md` describing the dataset, license, and how prompts were applied

## Prompting styles

| Style | Folder | Philosophy |
|-------|--------|------------|
| Carving with Stone | `style-1/` | Subtractive, precision-first — fixed schema, strict constraints, exact output format defined upfront |
| Carving with Clay | `style-2/` | Additive, iterative — open direction, context-rich prompts, room for the model to explore and reshape |

Both **Opus 4.8** and **Fable 5** should be run on the same dataset with both styles for a fair comparison.
