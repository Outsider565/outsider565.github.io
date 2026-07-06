---
title: "When Bias Pretends to Be Truth: How Spurious Correlations Undermine Hallucination Detection in LLMs"
author: "Shaowen Wang, Yiqi Dong, Ruinian Chang, Tansheng Zhu, Yuebo Sun, Kaifeng Lyu, Jian Li"
date: "2025-11-01"
journal: "Principled Design for Trustworthy AI @ ICLR 2026"
external_url: "https://arxiv.org/abs/2511.07318"
description: "Shows how spurious correlations can produce confident hallucinations that survive model scaling and evade common detection methods."
description_zh: "偏见伪装成事实：伪相关驱动的幻觉信心十足、骗过检测、不随规模消失——揭示一类被忽视的失效模式。"
abstract: >-
  Despite substantial advances, large language models (LLMs) continue to exhibit hallucinations, generating plausible yet incorrect responses. In this paper, we highlight a critical yet previously underexplored class of hallucinations driven by spurious correlations -- superficial but statistically prominent associations between features (e.g., surnames) and attributes (e.g., nationality) present in the training data. We demonstrate that these spurious correlations induce hallucinations that are confidently generated, immune to model scaling, evade current detection methods, and persist even after refusal fine-tuning. Through systematically controlled synthetic experiments and empirical evaluations on state-of-the-art open-source and proprietary LLMs (including GPT-5), we show that existing hallucination detection methods, such as confidence-based filtering and inner-state probing, fundamentally fail in the presence of spurious correlations. Our theoretical analysis further elucidates why these statistical biases intrinsically undermine confidence-based detection techniques. Our findings thus emphasize the urgent need for new approaches explicitly designed to address hallucinations caused by spurious correlations.
abstract_zh: >-
  尽管取得了长足进步，大语言模型仍会产生幻觉——生成看似合理却不正确的回复。本文揭示了一类此前被忽视但至关重要的幻觉类型：由伪相关驱动的幻觉——训练数据中表面但统计上显著的特征-属性关联（例如姓氏与国籍之间的关联）。我们证明伪相关导致的幻觉具有以下特征：生成时置信度极高、不随模型规模增大而消退、能够躲避现有检测方法，且在拒答微调后依然顽固存在。通过系统控制的合成实验以及对最先进开源和闭源 LLM（包括 GPT-5）的实证评估，我们表明现有幻觉检测方法——如基于置信度的过滤和内部状态探测——在伪相关面前从根本上失效。理论分析进一步阐明了为什么这些统计偏差在本质上会瓦解基于置信度的检测技术。这些发现凸显了亟需开发专门针对伪相关幻觉的新型检测方法。
tags:
  - "Hallucination"
  - "Trustworthy AI"
  - "Data Bias"
---
