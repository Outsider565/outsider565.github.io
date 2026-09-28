---
title: "Understanding LLM Behaviors via Compression: Data Generation, Knowledge Acquisition and Scaling Laws"
selected: true
author: "Zhixuan Pan, Shaowen Wang, Jian Li"
date: "2025-05-01"
journal: "NeurIPS 2025"
external_url: "https://arxiv.org/abs/2504.09597"
description: "An information-theoretic framework connecting compression, prediction, data generation, knowledge acquisition, scaling laws, and hallucination mechanisms."
abstract: >-
  Large Language Models (LLMs) have demonstrated remarkable capabilities across numerous tasks, yet principled explanations for their underlying mechanisms and several phenomena, such as scaling laws, hallucinations, and related behaviors, remain elusive. In this work, we revisit the classical relationship between compression and prediction, grounded in Kolmogorov complexity and Shannon information theory, to provide deeper insights into LLM behaviors. By leveraging the Kolmogorov Structure Function and interpreting LLM compression as a two-part coding process, we offer a detailed view of how LLMs acquire and store information across increasing model and data scales -- from pervasive syntactic patterns to progressively rarer knowledge elements. Motivated by this theoretical perspective and natural assumptions inspired by Heap's and Zipf's laws, we introduce a simplified yet representative hierarchical data-generation framework called the Syntax-Knowledge model. Under the Bayesian setting, we show that prediction and compression within this model naturally lead to diverse learning and scaling behaviors observed in LLMs. In particular, our theoretical analysis offers intuitive and principled explanations for both data and model scaling laws, the dynamics of knowledge acquisition during training and fine-tuning, factual knowledge hallucinations in LLMs. The experimental results validate our theoretical predictions.
tags:
  - "Scaling Laws"
  - "Compression"
  - "LLM Behavior"
---
