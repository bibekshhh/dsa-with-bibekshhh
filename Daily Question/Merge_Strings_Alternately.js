// Leetcode: https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75
// My submission: https://leetcode.com/problems/merge-strings-alternately/submissions/1191458635?envType=study-plan-v2&envId=leetcode-75

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */

var mergeAlternately = function (word1, word2) {
  let mergedString = "";
  let x = 0;

  while (word1[x] && word2[x]) {
    mergedString += word1[x] + word2[x];
    x++;
  }

  return (mergedString +=
    word1.slice(x, word1.length) + word2.slice(x, word2.length));
};

const test_cases = [
  ["abc", "pqr"],
  ["ab", "pqrs"],
  ["abcd", "pq"],
];

test_cases.forEach((test_case) => {
  console.log(mergeAlternately(test_case[0], test_case[1]));
});
