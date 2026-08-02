const prompts = [
  {
    category: "marketing",
    label: "Marketing",
    ratio: "4:5",
    title: "Clean ecommerce hero",
    summary: "A controlled studio brief with accurate geometry and headline space.",
    prompt: "Create a premium ecommerce hero for {product} aimed at {audience}. Place one product at a three-quarter angle on a seamless {background color} studio sweep. Use a large softbox from upper left, subtle rim light, realistic contact shadow, and controlled reflections. Leave 35% clean negative space on the {left/right}. Preserve exact product proportions. Avoid extra products, invented text, distorted packaging, and hard glare.",
  },
  {
    category: "marketing",
    label: "Marketing",
    ratio: "16:9",
    title: "Product launch key visual",
    summary: "A cinematic reveal that communicates one benefit without fake copy.",
    prompt: "Create a launch key visual for {product} communicating {single benefit} through the scene, not text. Place the product emerging from {visual metaphor}; keep its form completely readable. Use cinematic backlight, one accent color, deep tonal range, and center-safe composition for 16:9 and 9:16 crops. Avoid explosions, clutter, fake UI, unreadable lettering, and altered product design.",
  },
  {
    category: "social",
    label: "Social video",
    ratio: "9:16",
    title: "Vertical hook frame",
    summary: "An opening frame designed for immediate mobile readability.",
    prompt: "Create the opening frame for a 9:16 short video about {topic}. Show {subject} performing {clear action} with an immediate visual question. Use strong foreground, midground, and background separation with bright focal lighting. Keep upper 20% and lower 18% free for interface overlays. No text, watermarks, distorted hands, or tiny clutter.",
  },
  {
    category: "social",
    label: "Social video",
    ratio: "9:16",
    title: "Three-frame transformation",
    summary: "A continuity-aware brief for before, middle, and after edits.",
    prompt: "Create three consistent 9:16 frames showing {subject} changing from {before state} to {middle state} to {after state}. Lock the camera, lens, lighting direction, background, identity, clothing, and product geometry. Change only {intended transformation}. Leave the center clear enough for a match cut. No captions or borders.",
  },
  {
    category: "portrait",
    label: "Portrait editing",
    ratio: "4:5",
    title: "Natural professional headshot",
    summary: "Conservative retouching with explicit identity protection.",
    prompt: "Turn the supplied portrait into a natural professional headshot. Preserve exact identity, age, facial structure, skin texture, hairline, and expression. Use a neutral {background}, soft window-style key light, subtle fill, realistic catchlights, and an 85 mm lens look. Retouch temporary blemishes only. Do not reshape features, whiten skin, change eye color, or create plastic texture.",
  },
  {
    category: "portrait",
    label: "Portrait editing",
    ratio: "Source",
    title: "Background replacement",
    summary: "A constrained edit that matches perspective and lighting.",
    prompt: "Replace only the background with {new environment}. Keep the person, clothing, hair strands, accessories, pose, crop, lens perspective, and identity unchanged. Match horizon, depth of field, light direction, color temperature, and contact shadows. No halos, cutout edges, objects crossing the subject, or changes to hands and face.",
  },
  {
    category: "concept",
    label: "Concept art",
    ratio: "3:2",
    title: "Editorial technology metaphor",
    summary: "One strong conceptual image without labels or named-artist imitation.",
    prompt: "Create an editorial illustration about {technology topic} using the metaphor of {physical scene}. Use one clear focal idea, a limited {three-color palette}, bold geometric shapes, subtle paper texture, and thoughtful negative space. Communicate tension between {two concepts} without literal labels. No text, corporate logos, or imitation of a named artist.",
  },
  {
    category: "concept",
    label: "Concept art",
    ratio: "16:9",
    title: "Near-future workspace",
    summary: "Grounded world-building based on plausible design evolution.",
    prompt: "Design a believable near-future workspace for {profession} in {location}. Technology should feel like an incremental evolution of current tools: practical interfaces, ergonomic hardware, repairable materials, and visible human use. Use natural morning light and grounded industrial design. Avoid hologram clichés, impossible screens, logos, and sterile empty rooms.",
  },
];

const grid = document.querySelector("#prompt-grid");
const template = document.querySelector("#prompt-card-template");
const search = document.querySelector("#prompt-search");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");
const filterButtons = [...document.querySelectorAll(".filter")];
let activeCategory = "all";

function normalized(value) {
  return value.trim().toLocaleLowerCase();
}

async function copyPrompt(button, prompt) {
  try {
    await navigator.clipboard.writeText(prompt);
    button.textContent = "Copied";
  } catch {
    button.textContent = "Select and copy above";
  }
  window.setTimeout(() => {
    button.textContent = "Copy prompt";
  }, 1600);
}

function render() {
  const query = normalized(search.value);
  const visible = prompts.filter((item) => {
    const inCategory = activeCategory === "all" || item.category === activeCategory;
    const haystack = normalized(`${item.title} ${item.summary} ${item.prompt} ${item.label}`);
    return inCategory && (!query || haystack.includes(query));
  });

  grid.replaceChildren();
  for (const item of visible) {
    const card = template.content.cloneNode(true);
    card.querySelector(".category").textContent = item.label;
    card.querySelector(".ratio").textContent = item.ratio;
    card.querySelector("h3").textContent = item.title;
    card.querySelector(".summary").textContent = item.summary;
    card.querySelector("code").textContent = item.prompt;
    const copyButton = card.querySelector(".copy-button");
    copyButton.addEventListener("click", () => copyPrompt(copyButton, item.prompt));
    grid.append(card);
  }

  resultCount.textContent = `${visible.length} prompt${visible.length === 1 ? "" : "s"} shown`;
  emptyState.hidden = visible.length !== 0;
}

search.addEventListener("input", render);
for (const button of filterButtons) {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    for (const candidate of filterButtons) {
      candidate.classList.toggle("is-active", candidate === button);
    }
    render();
  });
}

render();
