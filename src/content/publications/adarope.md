---
title: "AdaRoPE: Not All Attention Heads Should Rotate and Scale Equally"
selected: true
author: "Shaowen Wang, Yuke Zheng, Tansheng Zhu, Shuang Chen, Shaofan Liu, Suncong Zheng, Jian Li"
date: "2026-07-01"
journal: "ICML 2026"
external_url: "https://icml.cc/virtual/2026/poster/60704"
description: "A head-specific RoPE variant with learnable rotation frequencies and length-aware scaling for stronger long-context extrapolation."
description_zh: "RoPE 不该一刀切：为每个注意力头配备可学习的旋转频率与长度缩放，长上下文外推更强。"
abstract: >-
  Rotary Position Embeddings (RoPE) are widely adopted in Transformers to encode positional information, yet standard implementations enforce a uniform frequency schedule and scaling across all attention heads. Using simplified retrieval tasks and length generalization scenarios, we show--both empirically and theoretically--that heads with different functional roles require distinct frequency ranges and scaling factors to operate effectively. Ignoring this structure leads to suboptimal utilization of embedding dimensions and degraded performance, particularly under long-context settings. To address these limitations, we propose AdaRoPE, which equips each attention head with learnable rotation frequencies and scaling factors. Pretrained LLM with AdaRoPE consistently outperforms existing RoPE variants, including partial-RoPE and NoPE baselines. For context extension, we further show that uniform frequency and attention scaling, used in methods such as YaRN, are suboptimal. By applying head-specific scaling, AdaRoPE enables better context extension while better preserving short-context performance in both extrapolation setting and long context continued pretrain setting. These results highlight the importance of optimizing rotary position embeddings at the level of individual attention heads.
abstract_zh: >-
  旋转位置编码（RoPE）已被 Transformer 广泛采用以编码位置信息，但标准实现对所有注意力头施加统一的频率调度与缩放策略。通过简化的检索任务和长度泛化实验，我们从实验和理论两方面证明：承担不同功能的注意力头需要不同的频率范围和缩放因子才能高效工作。忽视这一结构将导致嵌入维度利用率不足和性能下降，在长上下文场景下尤为明显。为此，我们提出 AdaRoPE，为每个注意力头配备可学习的旋转频率和缩放因子。使用 AdaRoPE 预训练的 LLM 在各项评测中一致优于已有的 RoPE 变体，包括 partial-RoPE 和 NoPE 基线。在上下文扩展方面，我们进一步证明 YaRN 等方法采用的统一频率和注意力缩放并非最优。通过逐头缩放，AdaRoPE 在外推设定和长上下文续训设定中均能实现更好的上下文扩展，同时更好地保持短上下文性能。这些结果突显了在单个注意力头层面优化旋转位置编码的重要性。
tags:
  - "Long Context"
  - "RoPE"
  - "Architecture"
---
