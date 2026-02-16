// src/lib/judge.ts

export type JudgeResult = {
  passed: boolean;
  actual: unknown; // 'any' er bodole 'unknown' use kora better practice
  expected: unknown;
  error?: string;
};

// Properly typed function for the judge
type JudgeFunction = (fn: (...args: unknown[]) => unknown) => JudgeResult;

export const problemJudges: Record<string, JudgeFunction> = {
  "two-sum": (fn) => {
    try {
      const nums = [2, 7, 11, 15];
      const target = 9;
      const expected = [0, 1];
      const actual = fn(nums, target) as number[]; // result-ke array type-e cast kora hoyeche

      return {
        passed: JSON.stringify(actual) === JSON.stringify(expected),
        actual,
        expected,
      };
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "Execution Error";
      return {
        passed: false,
        actual: null,
        expected: [0, 1],
        error: errorMessage,
      };
    }
  },

  "best-time-to-buy-and-sell-stock": (fn) => {
    try {
      const prices = [7, 1, 5, 3, 6, 4];
      const expected = 5;
      const actual = fn(prices) as number; // result-ke number type-e cast kora hoyeche

      return {
        passed: actual === expected,
        actual,
        expected,
      };
    } catch (e: unknown) {
      const errorMessage = e instanceof Error ? e.message : "Execution Error";
      return {
        passed: false,
        actual: null,
        expected: 5,
        error: errorMessage,
      };
    }
  },
};
