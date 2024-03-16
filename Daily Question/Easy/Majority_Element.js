// Leetcode: https://leetcode.com/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
// My submission:

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const filteredArr = nums.filter((num) => num !== nums[0]);

  const numsLen = nums.length;

  // base condition
  if (numsLen - filteredArr.length >= numsLen / 2) return nums[0];

  // recursive condition
  return majorityElement(filteredArr);
};

let test_cases = [
  [3, 2, 3],
  [2, 2, 1, 1, 1, 2, 2],
];

test_cases.forEach((item) => {
  console.log(majorityElement(item));
});
