// https://www.codewars.com/kata/find-the-smallest-integer-in-the-array/train/javascript
class GetMinNumb {
  findSmallestInt = args => Math.min(...args);
}

// https://www.codewars.com/kata/geometry-basics-circle-circumference-in-2d/train/javascript
function circleCircumference(circle) {
  const radius = circle.radius;
  const circumference = 2 * Math.PI * radius;
  return Number(circumference.toFixed(6));
}