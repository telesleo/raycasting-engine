function normalize(x, y) {
  const length = Math.sqrt(x * x + y * y);
  if (length !== 0) {
    return { x: x / length, y: y / length };
  } else {
    return { x: 0, y: 0 };
  }
}
