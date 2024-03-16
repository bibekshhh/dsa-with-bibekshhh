// Leetcode: https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150
// My Submission: https://leetcode.com/problems/merge-sorted-array/submissions/1190391881?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums2[j] > nums1[i]) {
      nums1[k--] = nums2[j--];
    } else {
      nums1[k--] = nums1[i--];
    }
  }

  // if there are remaining elements in nums2 array
  while (j >= 0) {
    nums1[k--] = nums2[j--];
  }
};

const test_cases = [
  {
    nums1: [1, 2, 3, 0, 0, 0],
    m: 3,
    nums2: [2, 5, 6],
    n: 3,
    expected: [1, 2, 2, 3, 5, 6],
  },
  {
    nums1: [1],
    m: 1,
    nums2: [],
    n: 0,
    expected: [1],
  },
  {
    nums1: [0],
    m: 0,
    nums2: [1],
    n: 1,
    expected: [1],
  },
  {
    nums1: [4, 5, 6, 0, 0, 0],
    m: 3,
    nums2: [1, 2, 3],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6],
  },
  {
    nums1: [1, 2, 3, 7, 8, 9, 0, 0, 0],
    m: 6,
    nums2: [4, 5, 6],
    n: 3,
    expected: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
];

for (const test_case of test_cases) {
  const { nums1, m, nums2, n, expected } = test_case;
  merge(nums1, m, nums2, n);

  console.log(
    JSON.stringify(nums1) === JSON.stringify(expected)
      ? "Test Passed"
      : "Test Failed"
  );
}
