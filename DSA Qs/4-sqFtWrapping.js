const wrap = (length, width, height) => {
  let surfaceArea = (2 * length * width) + (2 * length * height) + (2 * width * height);

  return `You need ${surfaceArea} sqft of wrapping paper!`
}
console.log(wrap(2,3,4))