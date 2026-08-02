# Reference-Image Editing Brief

Reference-image editing is more reliable when the request separates what must remain unchanged
from what is allowed to change. This brief turns that distinction into a repeatable production
workflow. It is useful for product photography, portraits, social assets, concept exploration,
and other work where uncontrolled changes would make an otherwise attractive result unusable.

## 1. Confirm permission and intended use

Before uploading a reference, confirm that you own it or have permission to edit it. Record where
the result will appear, who will see it, whether it will be used commercially, and whether the
image contains a recognizable person, private location, trademark, or confidential product. A
technically successful edit can still be inappropriate if the source or intended use is unclear.

Use a short intake block:

```text
Source rights: {owned / licensed / written permission}
Intended use: {channel, audience, and campaign}
Required output: {dimensions, format, and deadline}
Disclosure need: {none / synthetic edit label / internal review}
Approver: {person responsible for final sign-off}
```

## 2. Build a preservation list

The preservation list defines the parts of the source that must not drift. Avoid broad phrases
such as "keep it the same." Name visible properties that a reviewer can compare.

For a product image, protect:

- silhouette, dimensions, panel count, cap, fasteners, and openings;
- label position, approved colors, material finish, and logo geometry;
- camera angle, focal length impression, crop, and contact shadow;
- functional details that must remain physically plausible.

For a portrait, protect:

- identity, apparent age, facial structure, skin tone, hairline, and expression;
- pose, body proportions, clothing, accessories, and gaze direction;
- camera perspective, crop, and any background elements required for context.

## 3. Define one allowed change

Start each pass with one primary change: background replacement, relighting, cleanup, material
color, seasonal styling, or crop extension. Combining many changes makes it difficult to identify
which instruction caused drift. Once the first change passes review, use that approved result as
the reference for the next controlled pass.

```text
Primary change: Replace {current element} with {requested element}.
Preserve exactly: {identity, geometry, pose, camera, protected details}.
Match: {light direction, perspective, depth, grain, and color temperature}.
Do not add: {text, logos, extra objects, anatomy changes, invented features}.
Output: {aspect ratio, crop-safe area, and background requirements}.
```

## 4. Match the scene physics

A convincing edit needs consistent light, perspective, scale, and contact. Describe the direction
and softness of the key light, the density of the shadow, the horizon, and the approximate camera
height. When replacing a background, explain where the subject touches the floor or surface. When
relighting, specify which existing highlights and shadows may change and which structural details
must remain visible.

Check these relationships after every generation:

- Does the shadow direction agree with the visible light source?
- Does the subject scale make sense relative to the scene?
- Do reflections describe the same environment as the background?
- Are edges equally sharp at the same depth?
- Does grain or compression change abruptly around the edited area?

## 5. Review with a difference checklist

Compare the source and result side by side at fit-to-screen and 100% zoom. Do not approve based
only on overall attractiveness.

```text
[ ] Protected identity or product geometry is unchanged
[ ] Requested change is complete and limited to the approved region
[ ] Hands, faces, text, labels, edges, and repeated patterns are coherent
[ ] Light, shadow, reflection, scale, and perspective agree
[ ] No unrequested objects, symbols, watermarks, or brand marks appeared
[ ] Output size, aspect ratio, safe area, and file format are correct
[ ] Rights, disclosure, and final approver requirements are satisfied
```

## 6. Keep an audit-friendly revision note

Save the source filename, prompt version, edit date, output filename, model or tool version when
available, reviewer, and reason for approval or rejection. This makes the workflow reproducible
and prevents an earlier rejected output from returning to the campaign by accident.

You can use this brief with any compatible reference-image editor. If you want to run the workflow
in a browser, [Rao Edits](https://raoedits.top/) supports image generation and reference-image
editing. Disclosure: Rao Edits maintains this open guide; the review framework is intentionally
tool-neutral and can be adapted to other systems.

