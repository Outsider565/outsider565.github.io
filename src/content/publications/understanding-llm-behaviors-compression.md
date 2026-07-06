---
title: "Understanding LLM Behaviors via Compression: Data Generation, Knowledge Acquisition and Scaling Laws"
selected: true
author: "Zhixuan Pan, Shaowen Wang, Jian Li"
date: "2025-05-01"
journal: "NeurIPS 2025"
external_url: "https://arxiv.org/abs/2504.09597"
description: "An information-theoretic framework connecting compression, prediction, data generation, knowledge acquisition, scaling laws, and hallucination mechanisms."
description_zh: "从压缩的视角重新理解 LLM：一个信息论框架，从第一性原理统一解释 scaling laws、知识获取与幻觉的成因。"
abstract: >-
  Large Language Models (LLMs) have demonstrated remarkable capabilities across numerous tasks, yet principled explanations for their underlying mechanisms and several phenomena, such as scaling laws, hallucinations, and related behaviors, remain elusive. In this work, we revisit the classical relationship between compression and prediction, grounded in Kolmogorov complexity and Shannon information theory, to provide deeper insights into LLM behaviors. By leveraging the Kolmogorov Structure Function and interpreting LLM compression as a two-part coding process, we offer a detailed view of how LLMs acquire and store information across increasing model and data scales -- from pervasive syntactic patterns to progressively rarer knowledge elements. Motivated by this theoretical perspective and natural assumptions inspired by Heap's and Zipf's laws, we introduce a simplified yet representative hierarchical data-generation framework called the Syntax-Knowledge model. Under the Bayesian setting, we show that prediction and compression within this model naturally lead to diverse learning and scaling behaviors observed in LLMs. In particular, our theoretical analysis offers intuitive and principled explanations for both data and model scaling laws, the dynamics of knowledge acquisition during training and fine-tuning, factual knowledge hallucinations in LLMs. The experimental results validate our theoretical predictions.
abstract_zh: >-
  大语言模型在众多任务上展现了出色能力，但对其底层机制及 scaling laws、幻觉等现象的系统性解释仍付之阙如。本文重新审视压缩与预测之间的经典关系——以 Kolmogorov 复杂度和 Shannon 信息论为基础——来深入剖析 LLM 的行为规律。借助 Kolmogorov 结构函数，将 LLM 的压缩过程诠释为一种两部分编码，我们得以细致刻画 LLM 在模型和数据规模增长过程中如何获取和存储信息——从普遍的句法模式到逐渐稀有的知识元素。在此理论视角与 Heap 定律和 Zipf 定律所启发的自然假设驱动下，我们提出了一个简化但具有代表性的层次化数据生成框架——Syntax-Knowledge 模型。在贝叶斯框架下，我们证明该模型中的预测与压缩过程自然产生了 LLM 中观察到的多种学习与 scaling 行为。具体而言，我们的理论分析为以下现象提供了直观且有原理支撑的解释：数据和模型 scaling laws、训练与微调中知识获取的动态过程，以及 LLM 的事实性幻觉。实验结果验证了理论预测。
tags:
  - "Scaling Laws"
  - "Compression"
  - "LLM Behavior"
---
