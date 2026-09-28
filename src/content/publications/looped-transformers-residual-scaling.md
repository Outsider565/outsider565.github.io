---
title: "On the Residual Scaling of Looped Transformers: Stability and Transferability"
selected: true
author: "Shaowen Wang, Bingrui Li, Ge Zhang, Wenhao Huang, Shen Yan, Jian Li"
date: "2026-06-16"
journal: "LIT@ICLR2026"
external_url: "https://arxiv.org/abs/2606.18524"
description: "Analyzes looped, weight-tied Transformers and derives residual scaling rules for stable training and loop-count transfer."
abstract: >-
  Looped (weight-tied) Transformers apply a shared residual block N times (h <- h + epsilon f(h), same f at each step), increasing effective depth without adding parameters. Prior depth-scaling analyses prescribe epsilon = 1/sqrt(L) for depth-L residual networks. We show that this is insufficient for looped architectures: weight sharing makes residual updates correlated across iterations, requiring the stronger scaling epsilon = 1/N. For multi-layer blocks (L unique layers looped N times), we derive a factored parameterization epsilon = lambda/(N sqrt(L)) that separates the two sources of growth: 1/N controls the within-layer loop correlation, and 1/sqrt(L) controls the across-layer variance. A key consequence is that the optimal learning rate depends only on the number of unique layers L, not on the loop count N, enabling direct hyperparameter transfer from small to large N without retuning. Experiments on looped Transformers confirm that 1/N scaling improves trainability and yields better loss than 1/sqrt(N) scaling across loop counts.
tags:
  - "Transformers"
  - "Scaling"
  - "Stability"
---
