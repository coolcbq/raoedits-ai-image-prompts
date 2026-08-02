# Prompt Iteration Log Template

Image generation becomes easier to control when every revision has a written hypothesis. A prompt
iteration log prevents random changes, preserves successful settings, and gives collaborators a
clear record of why one result was selected. This template works for text-to-image generation and
reference-image editing.

## The rule: change one variable per pass

Begin with a baseline that states the goal, subject, composition, light, visual language, output,
and exclusions. For the next pass, change only one major variable such as camera angle, palette,
background, or light softness. If several variables change together, you cannot tell which change
improved or damaged the result.

## Project header

```text
Project: {short name}
Asset goal: {what the image must accomplish}
Audience and channel: {who and where}
Required size/aspect ratio: {dimensions}
Source rights: {owned / licensed / permission recorded}
Protected elements: {identity, product geometry, logo, pose, crop}
Deadline and approver: {date and person}
```

## Baseline prompt

```text
Goal: Create {asset type} for {audience and channel}.
Subject: {main subject, action, protected attributes}.
Composition: {camera, framing, hierarchy, negative space}.
Lighting: {source, direction, softness, temperature, contrast}.
Visual language: {medium, palette, texture, material behavior}.
Output: {ratio, crop, background, resolution intent}.
Avoid: {artifacts, extra objects, text, logos, identity drift}.
```

## Revision entry

Copy this block for every controlled pass:

```text
Version: v{number}
Date/time: {timestamp}
Starting image or seed: {file/reference}
Hypothesis: Changing {one variable} should improve {measurable quality}.
Exact change: {old instruction} -> {new instruction}
Everything held constant: {protected instructions}
Output files: {filenames}

Review scores (1-5):
- Goal fit:
- Composition:
- Identity/geometry preservation:
- Lighting and physical consistency:
- Artifact control:
- Crop and channel readiness:

Decision: {keep / revise / reject}
Reason: {one or two evidence-based sentences}
Next single variable to test: {instruction}
```

## Useful controlled experiments

Run small comparison sets instead of asking for many random variants:

1. **Composition:** eye level versus top-down while holding subject and light constant.
2. **Lighting:** large soft key versus hard directional key with the same camera and scene.
3. **Palette:** neutral base with one accent color versus a two-color complementary palette.
4. **Negative space:** left-side copy area versus top copy area at the same subject scale.
5. **Reference strength:** stronger preservation language versus a more permissive transformation.
6. **Artifact prevention:** baseline exclusions versus a short list derived from the first failure.

## Stop conditions

More iterations do not always produce a better image. Stop when the result meets the written goal,
protected details pass side-by-side comparison, artifacts are below the agreed threshold, and the
asset fits its final crop. Also stop if a revision introduces safety, rights, or disclosure concerns
that cannot be resolved by a controlled change.

## Final selection record

```text
Approved file: {filename}
Approved prompt version: {version}
Why it won: {evidence tied to the project goal}
Known limitations: {remaining issues}
Required finishing work: {retouching, typography, color, export}
Disclosure or credit: {if required}
Final approver/date: {name and timestamp}
```

This log is tool-neutral and can be kept in Markdown, a spreadsheet, or a project tracker. For a
browser-based place to test image prompts and reference edits, you can use
[Rao Edits](https://raoedits.top/). Disclosure: Rao Edits maintains this open template, which is
designed to remain portable to other image systems.
