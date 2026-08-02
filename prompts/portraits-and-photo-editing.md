# Portrait and photo-editing prompts

When editing a supplied photo, explicitly state which identity and scene attributes must not
change. Only use images you have permission to modify.

## 1. Natural professional headshot

```text
Turn the supplied portrait into a natural professional headshot. Preserve the person’s exact
identity, age, facial structure, skin texture, hairline, and expression. Use a neutral
{warm-gray/office/environmental} background, soft window-style key light, subtle fill, realistic
catchlights, and an 85 mm portrait-lens look. Crop from upper chest, 4:5. Retouch temporary
blemishes only; do not reshape features, whiten skin, change eye color, or create plastic texture.
```

## 2. Environmental creator portrait

```text
Create an environmental portrait of {creator role} in {workspace}. Show the person engaged in
{authentic task}, surrounded by only three relevant objects. Natural mixed lighting, relaxed pose,
documentary detail, realistic skin and hands, medium-wide 3:2 composition. Leave subtle negative
space for editorial copy. Avoid staged gestures, excessive equipment, and visible brand logos.
```

## 3. Relight without changing identity

```text
Relight the supplied portrait with a soft key from camera left, a low-intensity warm rim light,
and gentle background falloff. Preserve identity, pose, clothing, framing, skin tone, hair,
background structure, and camera perspective. Improve highlight roll-off and shadow detail only.
Do not replace facial features, add makeup, smooth all pores, or alter body proportions.
```

## 4. Background replacement

```text
Replace only the background of the supplied image with {new environment}. Keep the person,
clothing, hair strands, accessories, pose, crop, lens perspective, and original facial identity
unchanged. Match the new background’s horizon, depth of field, light direction, color temperature,
and contact shadows to the subject. No halos, cutout edges, added objects crossing the subject,
or changes to hands and face.
```

## 5. Restore an old family photo

```text
Restore this scanned photograph conservatively. Remove dust, fold marks, color cast, and scanning
noise while preserving facial identity, period clothing, original grain, composition, and every
documented object. Reconstruct only clearly damaged pixels from nearby evidence. Keep the result
historically plausible; do not modernize hairstyles, invent jewelry, sharpen into artificial detail,
or colorize unless requested separately.
```

## 6. Editorial monochrome portrait

```text
Create a refined monochrome editorial portrait of {subject}. Use directional side light, rich but
open shadows, visible natural skin texture, a simple dark background, and restrained film grain.
Medium close-up with asymmetrical negative space, 4:5. Preserve identity and realistic anatomy.
Avoid crushed blacks, over-sharpening, glamour retouching, and imitation of a named photographer.
```

## 7. Outfit color variation

```text
Change only the main garment color from {original} to {target color}. Preserve fabric weave,
seams, folds, highlights, shadows, body shape, pose, skin, hair, accessories, background, and all
other colors. The dye response should match the material under the existing light. No new patterns,
logos, altered neckline, or texture smearing.
```

## 8. Group portrait cleanup

```text
Clean up the supplied group portrait while preserving every person’s identity, age, expression,
pose, clothing, and relative position. Correct exposure and white balance, reduce distracting
background objects, and harmonize lighting without merging faces or hands. Maintain natural skin
variation and realistic depth. Do not remove people, change body shapes, or invent missing limbs.
```

## Common fixes

- Put all “must remain unchanged” attributes in one sentence near the start.
- Use conservative language for restoration; do not ask the model to “reimagine” evidence.
- Check hair edges, earrings, glasses, fingers, teeth, and repeated background patterns.
- Compare the edit with the source at the same zoom before export.

## Put the prompts into practice

Use only portraits you have permission to edit and review every result for identity drift. These
briefs can be used in any compatible editor; a browser-based option for reference-image editing is
[Rao Edits](https://raoedits.top/). Disclosure: Rao Edits maintains this open prompt collection,
while the safety and quality checks are designed to remain useful with other tools as well.
