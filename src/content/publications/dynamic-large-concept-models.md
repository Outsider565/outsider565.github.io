---
title: "Dynamic Large Concept Models: Latent Reasoning in an Adaptive Semantic Space"
selected: true
author: "Xingwei Qu, Shaowen Wang, Zihao Huang, Kai Hua, Fan Yin, Rui-Jie Zhu, Jundong Zhou, Qiyang Min, Zihao Wang, Yizhi Li, Tianyu Zhang, He Xing, Zheng Zhang, Yuxuan Song, Tianyu Zheng, Zhiyuan Zeng, Chenghua Lin, Ge Zhang, Wenhao Huang"
date: "2026-01-01"
journal: "Best Paper, LIT@ICLR2026"
external_url: "https://arxiv.org/abs/2512.24617"
description: "A hierarchical language modeling framework that learns variable-length semantic concepts and reallocates computation from tokens to a compressed concept space."
abstract: >-
  Large Language Models (LLMs) apply uniform computation to all tokens, despite language exhibiting highly non-uniform information density. This token-uniform regime wastes capacity on locally predictable spans while under-allocating computation to semantically critical transitions. We propose Dynamic Large Concept Models (DLCM), a hierarchical language modeling framework that learns semantic boundaries from latent representations and shifts computation from tokens to a compressed concept space where reasoning is more efficient. DLCM discovers variable-length concepts end-to-end without relying on predefined linguistic units. Hierarchical compression fundamentally changes scaling behavior. We introduce the first compression-aware scaling law, which disentangles token-level capacity, concept-level reasoning capacity, and compression ratio, enabling principled compute allocation under fixed FLOPs. To stably train this heterogeneous architecture, we further develop a decoupled μP parametrization that supports zero-shot hyperparameter transfer across widths and compression regimes. At a practical setting (R=4, corresponding to an average of four tokens per concept), DLCM reallocates roughly one-third of inference compute into a higher-capacity reasoning backbone, achieving a +2.69% average improvement across 12 zero-shot benchmarks under matched inference FLOPs.
tags:
  - "Concept Models"
  - "Latent Reasoning"
  - "Efficiency"
---
