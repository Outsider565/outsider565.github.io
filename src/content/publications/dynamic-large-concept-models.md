---
title: "Dynamic Large Concept Models: Latent Reasoning in an Adaptive Semantic Space"
selected: true
author: "Xingwei Qu, Shaowen Wang, Zihao Huang, Kai Hua, Fan Yin, Rui-Jie Zhu, Jundong Zhou, Qiyang Min, Zihao Wang, Yizhi Li, Tianyu Zhang, He Xing, Zheng Zhang, Yuxuan Song, Tianyu Zheng, Zhiyuan Zeng, Chenghua Lin, Ge Zhang, Wenhao Huang"
date: "2026-01-01"
journal: "Best Paper, LIT@ICLR2026"
external_url: "https://arxiv.org/abs/2512.24617"
description: "A hierarchical language modeling framework that learns variable-length semantic concepts and reallocates computation from tokens to a compressed concept space."
description_zh: "语言信息密度参差不齐，算力分配却一视同仁。DLCM 学习语义边界，把推理搬到压缩的概念空间，附带首个 compression-aware scaling law。"
abstract: >-
  Large Language Models (LLMs) apply uniform computation to all tokens, despite language exhibiting highly non-uniform information density. This token-uniform regime wastes capacity on locally predictable spans while under-allocating computation to semantically critical transitions. We propose Dynamic Large Concept Models (DLCM), a hierarchical language modeling framework that learns semantic boundaries from latent representations and shifts computation from tokens to a compressed concept space where reasoning is more efficient. DLCM discovers variable-length concepts end-to-end without relying on predefined linguistic units. Hierarchical compression fundamentally changes scaling behavior. We introduce the first compression-aware scaling law, which disentangles token-level capacity, concept-level reasoning capacity, and compression ratio, enabling principled compute allocation under fixed FLOPs. To stably train this heterogeneous architecture, we further develop a decoupled μP parametrization that supports zero-shot hyperparameter transfer across widths and compression regimes. At a practical setting (R=4, corresponding to an average of four tokens per concept), DLCM reallocates roughly one-third of inference compute into a higher-capacity reasoning backbone, achieving a +2.69% average improvement across 12 zero-shot benchmarks under matched inference FLOPs.
abstract_zh: >-
  大语言模型对所有 token 施加均匀的计算量，然而自然语言的信息密度分布极不均匀。这种 token 粒度的均匀计算在可局部预测的片段上浪费了容量，却在语义关键的转折处分配不足。我们提出 Dynamic Large Concept Models（DLCM），一种层次化语言建模框架：从隐表示中学习语义边界，将计算从 token 空间转移到压缩的概念空间，让推理在更高效的粒度上进行。DLCM 以端到端方式发现可变长度的概念，无需依赖预定义的语言单元。层次化压缩从根本上改变了 scaling 行为。我们提出首个 compression-aware scaling law，将 token 级容量、concept 级推理容量和压缩比解耦，使固定 FLOPs 下的算力分配有据可依。为稳定训练这一异构架构，我们进一步开发了解耦 μP 参数化方案，支持跨宽度和压缩配置的零样本超参数迁移。在实用设定下（R=4，即平均每个概念对应四个 token），DLCM 将约三分之一的推理算力重新分配到更高容量的推理主干，在匹配推理 FLOPs 下于 12 项零样本基准上取得 +2.69% 的平均提升。
tags:
  - "Concept Models"
  - "Latent Reasoning"
  - "Efficiency"
---
