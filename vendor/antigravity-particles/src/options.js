const palettes = {
  light: ["#2c64ed", "#f84242", "#ffcf03"],
  dark: ["#7189ff", "#3074f9", "#000000"],
};

export const defaults = Object.freeze({
  theme: "light",
  colors: null,
  background: null,
  density: 230,
  particleSize: 0.59,
  ringWidth: 0.006,
  ringWidth2: 0.107,
  displacement: 0.62,
  speed: 1,
  interactive: true,
  maxPixelRatio: 2,
  respectReducedMotion: true,
  autoStart: true,
});

const ranges = {
  density: [0, 300],
  particleSize: [0.01, 10],
  ringWidth: [0.001, 1],
  ringWidth2: [0.001, 1],
  displacement: [0, 2],
  speed: [0, 10],
  maxPixelRatio: [0.5, 4],
};

export function parseColor(value) {
  if (typeof value !== "string" || !/^#(?:[\da-f]{3}|[\da-f]{6})$/i.test(value)) {
    throw new TypeError("Particle colors must be #rgb or #rrggbb strings.");
  }
  const hex = value.length === 4
    ? [...value.slice(1)].map((digit) => digit + digit).join("")
    : value.slice(1);
  return [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255);
}

export function normalizeOptions(patch = {}, previous = defaults) {
  if (!patch || typeof patch !== "object" || Array.isArray(patch)) {
    throw new TypeError("Particle options must be an object.");
  }
  for (const key of Object.keys(patch)) {
    if (!Object.hasOwn(defaults, key)) throw new TypeError(`Unknown particle option: ${key}`);
  }
  const options = { ...previous, ...patch };
  if (typeof options.theme !== "string" || !Object.hasOwn(palettes, options.theme)) {
    throw new TypeError('theme must be "light" or "dark".');
  }
  for (const [key, [min, max]] of Object.entries(ranges)) {
    if (!Number.isFinite(options[key]) || options[key] < min || options[key] > max) {
      throw new RangeError(`${key} must be a number between ${min} and ${max}.`);
    }
  }
  for (const key of ["interactive", "respectReducedMotion", "autoStart"]) {
    if (typeof options[key] !== "boolean") throw new TypeError(`${key} must be a boolean.`);
  }
  if (options.colors !== null) {
    if (!Array.isArray(options.colors) || options.colors.length !== 3) {
      throw new TypeError("colors must be an array of three hex colors, or null for the theme palette.");
    }
    for (const color of options.colors) parseColor(color);
    options.colors = Object.freeze([...options.colors]);
  }
  if (options.background !== null && options.background !== "transparent") {
    parseColor(options.background);
  }
  return Object.freeze(options);
}

export function getColors(options) {
  return (options.colors ?? palettes[options.theme]).map(parseColor);
}

export function getBackground(options) {
  if (options.background === "transparent") return [0, 0, 0, 0];
  const color = options.background ?? (options.theme === "dark" ? "#000000" : "#ffffff");
  return [...parseColor(color), 1];
}
