// Bridson's Poisson disk sampling keeps particles apart without a visible grid.
// The 500-unit field and distance mapping match the saved effect.
export function sampleParticles(density, random = Math.random) {
  const size = 500;
  const minDistance = 10 - (density / 300) * 8;
  const maxDistance = minDistance + 1;
  const cellSize = minDistance / Math.SQRT2;
  const columns = Math.ceil(size / cellSize);
  const grid = new Int32Array(columns * columns).fill(-1);
  const points = [];
  const active = [];

  function add(x, y) {
    const index = points.length / 2;
    points.push(x, y);
    active.push(index);
    grid[Math.floor(y / cellSize) * columns + Math.floor(x / cellSize)] = index;
  }

  function isClear(x, y) {
    const column = Math.floor(x / cellSize);
    const row = Math.floor(y / cellSize);
    for (let gy = Math.max(0, row - 2); gy <= Math.min(columns - 1, row + 2); gy++) {
      for (let gx = Math.max(0, column - 2); gx <= Math.min(columns - 1, column + 2); gx++) {
        const index = grid[gy * columns + gx];
        if (index < 0) continue;
        const dx = x - points[index * 2];
        const dy = y - points[index * 2 + 1];
        if (dx * dx + dy * dy < minDistance * minDistance) return false;
      }
    }
    return true;
  }

  add(random() * size, random() * size);
  let cursor = 0;
  while (cursor < active.length) {
    const index = active[cursor];
    let found = false;
    for (let attempt = 0; attempt < 20; attempt++) {
      const distance = minDistance + (maxDistance - minDistance) * random();
      const angle = random() * Math.PI * 2;
      const x = points[index * 2] + Math.cos(angle) * distance;
      const y = points[index * 2 + 1] + Math.sin(angle) * distance;
      if (x >= 0 && x < size && y >= 0 && y < size && isClear(x, y)) {
        add(x, y);
        found = true;
        break;
      }
    }
    if (!found) cursor++;
  }
  return Float32Array.from(points, (value) => (value - size / 2) / (size / 2));
}

export function createNoise1D(random = Math.random) {
  const values = Float32Array.from({ length: 256 }, random);
  return (time) => {
    const index = Math.floor(time);
    const fraction = time - index;
    const blend = fraction * fraction * (3 - 2 * fraction);
    const first = values[index & 255];
    return first + (values[(index + 1) & 255] - first) * blend;
  };
}
