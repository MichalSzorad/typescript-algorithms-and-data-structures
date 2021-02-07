export default function hammingDistance(a: string, b: string) {
  if (a.length !== b.length) {
    throw new Error('Strings must have the same length');
  }

  let distance = 0;

  a.split('').forEach((letter, index) => {
    if (b[index] !== letter) {
      distance++;
    }
  })

  return distance;
}
