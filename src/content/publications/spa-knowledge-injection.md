---
title: "SPA: A Simple but Tough-to-Beat Baseline for Knowledge Injection"
author: "Kexian Tang, Jiani Wang, Shaowen Wang, Kaifeng Lyu"
date: "2026-03-23"
journal: "ICML 2026"
external_url: "https://arxiv.org/abs/2603.22213"
description: "A simple prompt-engineered augmentation baseline for knowledge injection that scales synthetic data generation with carefully designed prompts."
description_zh: "一种用于 knowledge injection 的简单 prompt-engineered augmentation baseline，通过精心设计的 prompts 扩展合成数据生成。"
abstract: >-
  While large language models (LLMs) are pretrained on massive amounts of data, their knowledge coverage remains incomplete in specialized, data-scarce domains, motivating extensive efforts to study synthetic data generation for knowledge injection. We propose SPA (Scaling Prompt-engineered Augmentation), a simple but tough-to-beat baseline that uses a small set of carefully designed prompts to generate large-scale synthetic data for knowledge injection. Through systematic comparisons, we find that SPA outperforms several strong baselines. Furthermore, we identify two key limitations of prior approaches: (1) while RL-based methods may improve the token efficiency of LLM-based data augmentation at small scale, they suffer from diversity collapse as data scales, leading to diminishing returns; and (2) while multi-stage prompting may outperform simple augmentation methods, their advantages can disappear after careful prompt tuning. Our results suggest that, for knowledge injection, careful prompt design combined with straightforward large-scale augmentation can be surprisingly effective, and we hope SPA can serve as a strong baseline for future studies in this area. Our code is available at https://github.com/Tangkexian/SPA.
tags:
  - "Knowledge Injection"
  - "Synthetic Data"
  - "LLM"
---
