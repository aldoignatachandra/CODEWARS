const assert = require("assert");

// Aldo Ignata Chandra
// Complementary DNA

/* TASK
Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries 
the "instructions" for the development and functioning of living organisms.

If you want to know more: http://en.wikipedia.org/wiki/DNA

In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". 
Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. 
DNA strand is never empty or there is no DNA at all (again, except for Haskell).

More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

Example: (input --> output)

"ATTGC" --> "TAACG"
"GTAT" --> "CATA"
*/

// SOLUTION
const dnaStrand = (dna) => {
  const mapping = { A: "T", T: "A", G: "C", C: "G" };
  return dna.replace(/[ATCG]/g, (c) => mapping[c]);
};

// TEST CASE
const test1 = dnaStrand("AAAA");
console.log("result test1 =>", test1);
assert.strictEqual(test1, "TTTT", "String AAAA is");

const test2 = dnaStrand("ATTGC");
console.log("result test2 =>", test2);
assert.strictEqual(test2, "TAACG", "String ATTGC is");

const test3 = dnaStrand("GTAT");
console.log("result test3 =>", test3);
assert.strictEqual(test3, "CATA", "String GTAT is");

console.log("All tests passed!");
