---
title: "RLPgR: Reinforcement Learning from Dependency-Aware Progress Rewards"
selected: false
author: "Shaofan Liu, Tingyi Yang, Shihan Dou, Zhiheng Xi, Junjie Ye, Junlin Shang, Yuming Yang, Shaowen Wang, Jiayi Chen, Jiazheng Zhang, Guoqiang Zhang, Huaibing Xie, Pluto Zhou, Tao Gui, Qi Zhang, Xuanjing Huang"
date: "2026-10-01"
journal: "EMNLP 2026 Findings"
external_url: "https://aclanthology.org/2026.findings-emnlp.1745/"
description: "Refines GRPO credit assignment using dependency-aware progress graphs and bounded, sign-preserving advantage rescaling for mathematical reasoning."
abstract: >-
  Group-relative policy optimization (GRPO) provides a stable recipe for outcome-based RL on language model reasoning, but its credit assignment is coarse: it broadcasts a single trajectory advantage to every token, regardless of how individual steps contribute to the outcome. We call this the uniform-broadcast failure mode and address it with RLPgR, a dependency-aware rescaling of the existing GRPO advantage. RLPgR parses each rollout into a Progress Dependency Graph (PDG), where each node groups a contiguous span of steps into a milestone-level unit with a locally validatable artifact, and directed edges connect a node to the artifacts it depends on. Using the PDG, RLPgR rescales the group-relative advantage by a small, bounded, sign-preserving factor at the node level. This preserves the outcome-governed rollout direction while each step’s update better reflects its dependency role, avoiding the reward-hacking drift of densely shaped process rewards. To reduce PDG construction cost, we train an open Qwen3-8B progress annotator amortizing a one-time proprietary bootstrap. Across model families and sizes on five math reasoning benchmarks, RLPgR is competitive with strong outcome-RL and process-RL baselines under matched training budget. Three controlled studies (scaling-strength sensitivity, segment-level baselines, and PDG label perturbation) support the view that the gain comes from structured credit assignment rather than incidental tuning.
tags:
  - "Reinforcement Learning"
  - "Credit Assignment"
  - "Reasoning"
---
