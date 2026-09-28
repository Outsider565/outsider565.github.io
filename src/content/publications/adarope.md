---
title: "AdaRoPE: Not All Attention Heads Should Rotate and Scale Equally"
selected: true
author: "Shaowen Wang, Yuke Zheng, Tansheng Zhu, Shuang Chen, Shaofan Liu, Suncong Zheng, Jian Li"
date: "2026-07-01"
journal: "ICML 2026"
external_url: "https://icml.cc/virtual/2026/poster/60704"
description: "A head-specific RoPE variant with learnable rotation frequencies and length-aware scaling for stronger long-context extrapolation."
abstract: >-
  Rotary Position Embeddings (RoPE) are widely adopted in Transformers to encode positional information, yet standard implementations enforce a uniform frequency schedule and scaling across all attention heads. Using simplified retrieval tasks and length generalization scenarios, we show--both empirically and theoretically--that heads with different functional roles require distinct frequency ranges and scaling factors to operate effectively. Ignoring this structure leads to suboptimal utilization of embedding dimensions and degraded performance, particularly under long-context settings. To address these limitations, we propose AdaRoPE, which equips each attention head with learnable rotation frequencies and scaling factors. Pretrained LLM with AdaRoPE consistently outperforms existing RoPE variants, including partial-RoPE and NoPE baselines. For context extension, we further show that uniform frequency and attention scaling, used in methods such as YaRN, are suboptimal. By applying head-specific scaling, AdaRoPE enables better context extension while better preserving short-context performance in both extrapolation setting and long context continued pretrain setting. These results highlight the importance of optimizing rotary position embeddings at the level of individual attention heads.
tags:
  - "Long Context"
  - "RoPE"
  - "Architecture"
---
