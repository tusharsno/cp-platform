import { Problem } from "@/types";

export const arrayProblems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    category: "Array",
    order: 1,
    link: "https://leetcode.com/problems/two-sum/",
    problemStatement:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.",
    constraints: "2 <= nums.length <= 10^4, -10^9 <= nums[i] <= 10^9",
    starterCode:
      "function twoSum(nums, target) {\n  // Write your code here\n};",
    handlerFunction: "twoSum",
    starterFunctionName: "twoSum",
    examples: [
      {
        id: 1,
        inputText: "nums = [2,7,11,15], target = 9",
        outputText: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      { id: 2, inputText: "nums = [3,2,4], target = 6", outputText: "[1,2]" },
    ],
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    category: "Array",
    order: 2,
    link: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/",
    problemStatement:
      "Find the maximum profit you can achieve by choosing a single day to buy one stock and a different day in the future to sell it.",
    constraints: "1 <= prices.length <= 10^5",
    starterCode: "function maxProfit(prices) {\n  // Write your code here\n};",
    handlerFunction: "maxProfit",
    starterFunctionName: "maxProfit",
    examples: [
      {
        id: 1,
        inputText: "prices = [7,1,5,3,6,4]",
        outputText: "5",
        explanation:
          "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.",
      },
      { id: 2, inputText: "prices = [7,6,4,3,1]", outputText: "0" },
    ],
  },
  {
    id: "contains-duplicate",
    title: "Contains Duplicate",
    difficulty: "Easy",
    category: "Array",
    order: 3,
    link: "https://leetcode.com/problems/contains-duplicate/",
    problemStatement:
      "Return true if any value appears at least twice in the array, and return false if every element is distinct.",
    constraints: "1 <= nums.length <= 10^5",
    starterCode:
      "function containsDuplicate(nums) {\n  // Write your code here\n};",
    handlerFunction: "containsDuplicate",
    starterFunctionName: "containsDuplicate",
    examples: [
      { id: 1, inputText: "nums = [1,2,3,1]", outputText: "true" },
      { id: 2, inputText: "nums = [1,2,3,4]", outputText: "false" },
    ],
  },
  {
    id: "product-of-array-except-self",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    category: "Array",
    order: 4,
    link: "https://leetcode.com/problems/product-of-array-except-self/",
    problemStatement:
      "Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].",
    constraints: "2 <= nums.length <= 10^5",
    starterCode:
      "function productExceptSelf(nums) {\n  // Write your code here\n};",
    handlerFunction: "productExceptSelf",
    starterFunctionName: "productExceptSelf",
    examples: [
      { id: 1, inputText: "nums = [1,2,3,4]", outputText: "[24,12,8,6]" },
      { id: 2, inputText: "nums = [-1,1,0,-3,3]", outputText: "[0,0,9,0,0]" },
    ],
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    difficulty: "Medium",
    category: "Array",
    order: 5,
    link: "https://leetcode.com/problems/maximum-subarray/",
    problemStatement:
      "Find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.",
    constraints: "1 <= nums.length <= 10^5",
    starterCode: "function maxSubArray(nums) {\n  // Write your code here\n};",
    handlerFunction: "maxSubArray",
    starterFunctionName: "maxSubArray",
    examples: [
      {
        id: 1,
        inputText: "nums = [-2,1,-3,4,-1,2,1,-5,4]",
        outputText: "6",
        explanation: "[4,-1,2,1] has the largest sum = 6.",
      },
    ],
  },
  {
    id: "3sum",
    title: "3Sum",
    difficulty: "Medium",
    category: "Array",
    order: 6,
    link: "https://leetcode.com/problems/3sum/",
    problemStatement:
      "Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that their sum is zero.",
    constraints: "3 <= nums.length <= 3000",
    starterCode: "function threeSum(nums) {\n  // Write your code here\n};",
    handlerFunction: "threeSum",
    starterFunctionName: "threeSum",
    examples: [
      {
        id: 1,
        inputText: "nums = [-1,0,1,2,-1,-4]",
        outputText: "[[-1,-1,2],[-1,0,1]]",
      },
    ],
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    difficulty: "Medium",
    category: "Array",
    order: 7,
    link: "https://leetcode.com/problems/container-with-most-water/",
    problemStatement:
      "Find two lines that together with the x-axis form a container, such that the container contains the most water.",
    constraints: "n == height.length, 2 <= n <= 10^5",
    starterCode: "function maxArea(height) {\n  // Write your code here\n};",
    handlerFunction: "maxArea",
    starterFunctionName: "maxArea",
    examples: [
      { id: 1, inputText: "height = [1,8,6,2,5,4,8,3,7]", outputText: "49" },
    ],
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    category: "Array",
    order: 8,
    link: "https://leetcode.com/problems/merge-intervals/",
    problemStatement:
      "Given an array of intervals, merge all overlapping intervals.",
    constraints: "1 <= intervals.length <= 10^4",
    starterCode: "function merge(intervals) {\n  // Write your code here\n};",
    handlerFunction: "merge",
    starterFunctionName: "merge",
    examples: [
      {
        id: 1,
        inputText: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        outputText: "[[1,6],[8,10],[15,18]]",
      },
    ],
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    category: "Array",
    order: 9,
    link: "https://leetcode.com/problems/trapping-rain-water/",
    problemStatement:
      "Compute how much water an elevation map can trap after raining.",
    constraints: "n == height.length, 0 <= n <= 2 * 10^4",
    starterCode: "function trap(height) {\n  // Write your code here\n};",
    handlerFunction: "trap",
    starterFunctionName: "trap",
    examples: [
      {
        id: 1,
        inputText: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        outputText: "6",
      },
    ],
  },
  {
    id: "sliding-window-maximum",
    title: "Sliding Window Maximum",
    difficulty: "Hard",
    category: "Array",
    order: 10,
    link: "https://leetcode.com/problems/sliding-window-maximum/",
    problemStatement:
      "Return the max sliding window of size k moving from left to right.",
    constraints: "1 <= nums.length <= 10^5, 1 <= k <= nums.length",
    starterCode:
      "function maxSlidingWindow(nums, k) {\n  // Write your code here\n};",
    handlerFunction: "maxSlidingWindow",
    starterFunctionName: "maxSlidingWindow",
    examples: [
      {
        id: 1,
        inputText: "nums = [1,3,-1,-3,5,3,6,7], k = 3",
        outputText: "[3,3,5,5,6,7]",
      },
    ],
  },
];
