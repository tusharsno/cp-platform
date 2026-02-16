// there have no error:
import { arrayProblems } from "./array";
import { stringProblems } from "./string";
import { recursionProblems } from "./recursion";
import { linkedListProblems } from "./linkedList";
import { stackQueueProblems } from "./stackQueue";
import { binaryTreeProblems } from "./binaryTree";
import { bstProblems } from "./bst";
import { dpProblems } from "./dp";
import { graphProblems } from "./graph";
import { greedyProblems } from "./greedy";
import { Problem } from "@/types";

// The Map of all problems grouped by topic
export const problemsByTopic: Record<string, Problem[]> = {
  array: arrayProblems,
  string: stringProblems,
  recursion: recursionProblems,
  linkedList: linkedListProblems,
  stackQueue: stackQueueProblems,
  binaryTree: binaryTreeProblems,
  bst: bstProblems,
  dp: dpProblems,
  graph: graphProblems,
  greedy: greedyProblems,
};

export const allProblems = Object.values(problemsByTopic).flat();
