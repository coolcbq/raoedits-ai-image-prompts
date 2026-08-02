# Rao Edits AI Image Prompt Cookbook

A practical, generator-agnostic collection of reusable prompts for product visuals,
social posts, CapCut projects, portraits, photo editing, concept art, and editorial
illustration.

The examples are written as production briefs instead of one-line magic words.
Replace the values in `{braces}` with your subject, brand, format, and constraints.
They can be used with any capable image model. If you want a browser-based place to
generate and refine the results, try [Rao Edits](https://raoedits.top/).

## Prompt collections

- [Marketing and product photography](prompts/marketing-and-product.md)
- [Social media and CapCut assets](prompts/social-and-capcut.md)
- [Portraits and photo editing](prompts/portraits-and-photo-editing.md)
- [Concept art and editorial illustration](prompts/concept-art-and-editorial.md)
- [Machine-readable prompt library](prompt-library.json)
- [Image generation and reference-editing quality checklist](guides/image-generation-quality-checklist.md)

## A reliable prompt structure

Use this order when adapting a prompt:

1. **Goal** — what the image must accomplish.
2. **Subject** — the main object, person, or scene.
3. **Composition** — framing, camera angle, negative space, and hierarchy.
4. **Lighting** — direction, softness, color temperature, and contrast.
5. **Materials and detail** — surfaces, texture, clothing, props, environment.
6. **Visual language** — photography, 3D, collage, illustration, or mixed media.
7. **Output constraints** — aspect ratio, background, text-safe areas, and exclusions.

## Base template

```text
Create {asset type} for {audience and channel}.

Subject: {primary subject and action}.
Composition: {camera angle, framing, focal hierarchy, negative space}.
Lighting: {source, direction, softness, temperature, contrast}.
Art direction: {medium, palette, texture, references described in plain language}.
Output: {aspect ratio, resolution intent, background, crop-safe requirements}.
Avoid: {unwanted objects, artifacts, text, logos, visual clichés}.
```

## Iteration workflow

1. Generate a broad first pass with only the subject, composition, and lighting.
2. Select the strongest composition before adding surface detail.
3. Change one variable at a time: palette, lens, lighting, or background.
4. Lock important constraints with explicit language such as “keep the product shape
   unchanged” or “preserve the person’s facial identity.”
5. For social and video work, request clean negative space before adding text in a
   design or editing tool.
6. Export a small set of intentional variants instead of dozens of near-duplicates.

## Responsible use

- Use only images, logos, and identities you have permission to edit.
- Do not imitate a living artist by name; describe the visual characteristics you need.
- Review generated hands, text, product geometry, reflections, and safety-critical details.
- Clearly label synthetic or materially edited images when the context could mislead people.
- Check the model and platform license before commercial use.

## Contributing

Contributions are welcome when they add a reusable workflow, explain the intended use,
and avoid trademark stuffing or copied proprietary prompts. Please include:

- the asset goal;
- a parameterized prompt;
- two or three useful variations;
- common failure modes and fixes.

## License

Code and structured examples are released under the [MIT License](LICENSE). Prompt text
may be reused and adapted under the same terms.
