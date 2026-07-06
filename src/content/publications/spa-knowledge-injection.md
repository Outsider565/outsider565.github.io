---
title: "SPA: A Simple but Tough-to-Beat Baseline for Knowledge Injection"
author: "Kexian Tang, Jiani Wang, Shaowen Wang, Kaifeng Lyu"
date: "2026-03-23"
journal: "ICML 2026"
external_url: "https://arxiv.org/abs/2603.22213"
description: "A simple prompt-engineered augmentation baseline for knowledge injection that scales synthetic data generation with carefully designed prompts."
description_zh: "知识注入不需要花哨方法：精心设计的 prompt + 大规模增强，就是一个极难超越的基线。"
abstract: >-
  While large language models (LLMs) are pretrained on massive amounts of data, their knowledge coverage remains incomplete in specialized, data-scarce domains, motivating extensive efforts to study synthetic data generation for knowledge injection. We propose SPA (Scaling Prompt-engineered Augmentation), a simple but tough-to-beat baseline that uses a small set of carefully designed prompts to generate large-scale synthetic data for knowledge injection. Through systematic comparisons, we find that SPA outperforms several strong baselines. Furthermore, we identify two key limitations of prior approaches: (1) while RL-based methods may improve the token efficiency of LLM-based data augmentation at small scale, they suffer from diversity collapse as data scales, leading to diminishing returns; and (2) while multi-stage prompting may outperform simple augmentation methods, their advantages can disappear after careful prompt tuning. Our results suggest that, for knowledge injection, careful prompt design combined with straightforward large-scale augmentation can be surprisingly effective, and we hope SPA can serve as a strong baseline for future studies in this area. Our code is available at https://github.com/Tangkexian/SPA.
abstract_zh: >-
  尽管大语言模型在海量数据上预训练，其知识覆盖在专业化、数据稀缺的领域仍不完整，这推动了大量关于合成数据生成以实现知识注入的研究。我们提出 SPA（Scaling Prompt-engineered Augmentation），一个简单但难以超越的基线：仅用少量精心设计的 prompt 即可大规模生成用于知识注入的合成数据。通过系统对比，我们发现 SPA 优于多个强基线。进一步地，我们揭示了已有方法的两个关键局限：（1）基于强化学习的方法在小规模下或许能提升 LLM 数据增强的 token 效率，但随着数据规模扩大会遭遇多样性崩溃，边际收益递减；（2）多阶段 prompt 方法虽可能胜过简单增强，但其优势在 prompt 经过精心调优后会消失。我们的结果表明，对于知识注入而言，精心的 prompt 设计配合大规模直接增强出人意料地有效，我们希望 SPA 能为该领域的后续研究提供一个强基线。代码见 https://github.com/Tangkexian/SPA。
tags:
  - "Knowledge Injection"
  - "Synthetic Data"
  - "LLM"
---
