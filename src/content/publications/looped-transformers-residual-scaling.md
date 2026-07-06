---
title: "On the Residual Scaling of Looped Transformers: Stability and Transferability"
selected: true
author: "Shaowen Wang, Bingrui Li, Ge Zhang, Wenhao Huang, Shen Yan, Jian Li"
date: "2026-06-16"
journal: "LIT@ICLR2026"
external_url: "https://arxiv.org/abs/2606.18524"
description: "Analyzes looped, weight-tied Transformers and derives residual scaling rules for stable training and loop-count transfer."
description_zh: "权重共享让残差更新产生相关性，需要更强的缩放规则——推导后训练更稳，超参数还能跨循环次数直接迁移。"
abstract: >-
  Looped (weight-tied) Transformers apply a shared residual block N times (h <- h + epsilon f(h), same f at each step), increasing effective depth without adding parameters. Prior depth-scaling analyses prescribe epsilon = 1/sqrt(L) for depth-L residual networks. We show that this is insufficient for looped architectures: weight sharing makes residual updates correlated across iterations, requiring the stronger scaling epsilon = 1/N. For multi-layer blocks (L unique layers looped N times), we derive a factored parameterization epsilon = lambda/(N sqrt(L)) that separates the two sources of growth: 1/N controls the within-layer loop correlation, and 1/sqrt(L) controls the across-layer variance. A key consequence is that the optimal learning rate depends only on the number of unique layers L, not on the loop count N, enabling direct hyperparameter transfer from small to large N without retuning. Experiments on looped Transformers confirm that 1/N scaling improves trainability and yields better loss than 1/sqrt(N) scaling across loop counts.
abstract_zh: >-
  循环（权重共享）Transformer 将同一残差块重复执行 N 次（h ← h + εf(h)，每步 f 相同），在不增加参数的前提下提升有效深度。已有的深度缩放分析建议对深度为 L 的残差网络取 ε = 1/√L。我们证明这对循环架构是不够的：权重共享导致残差更新在迭代间产生相关性，需要更强的缩放 ε = 1/N。对于多层块（L 个不同层循环 N 次）的情形，我们推导出分解参数化 ε = λ/(N√L)，将两个增长来源分离：1/N 控制层内循环相关性，1/√L 控制层间方差。一个关键推论是最优学习率仅取决于独立层数 L 而非循环次数 N，这意味着超参数可以从小 N 直接迁移到大 N 而无需重新调参。在 looped Transformer 上的实验证实，1/N 缩放在各循环次数下均改善可训练性并取得更优的损失值。
tags:
  - "Transformers"
  - "Scaling"
  - "Stability"
---
