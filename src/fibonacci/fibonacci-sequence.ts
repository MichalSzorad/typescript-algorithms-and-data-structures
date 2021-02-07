export default function fibonacciSequence(n: number) {
 const sequence = [0, 1];
 
 while(n > 1) {
   sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
   n--;
 }

 const [, ...result] = sequence;
 return result;
}
