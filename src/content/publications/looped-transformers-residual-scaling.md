---
title: "Loop-μP: Residual Scaling and Hyperparameter Transfer in Looped Transformers"
selected: true
author: "Shaowen Wang, Bingrui Li, Tansheng Zhu, Ge Zhang, Wenhao Huang, Shen Yan, Jian Li"
date: "2026-06-16"
journal: "LIT@ICLR2026"
external_url: "https://arxiv.org/abs/2606.18524"
description: "Derives a factored residual scaling rule for weight-tied looped Transformers that enables stable training and zero-shot learning-rate transfer up to 8 loops and 384 executed layers."
abstract: >-
  Looped Transformers have drawn growing attention because looping improves multi-step reasoning and increases the executed depth of a model without adding parameters. They achieve this by reusing a stack of L layers for N loops. However, increasing the loop count N not only destabilizes training but also shifts the best hyperparameters, so they must be searched again for every loop count. Inspired by Depth-μP, which multiplies each residual branch by L^{-1/2} for depth L so that a learning rate tuned on a shallow untied network transfers to a deep one, we study how the residual branches and the learning rate should scale with the loop count N. We find that loops cannot simply be treated as extra depth, because the loops share weights. At initialization, distinct layers add nearly uncorrelated increments to the residual stream, so their sum grows as \sqrt{L}, whereas a shared layer adds positively correlated increments at every loop, so their sum grows linearly in N. For a single layer looped N times, we show in the infinite-width limit that multiplying the residual branch by 1/N and keeping the learning rate independent of N is the only parameterization with both a stable forward pass and maximal residual-stream updates. We then generalize the analysis to a stack of L distinct layers looped N times to obtain a parameterization we call Loop-μP, in which the loop factor 1/N combines with the depth factor L^{-1/2}. Empirically, we find in language modeling that the base learning rate tuned on the smallest model stays best under Loop-μP for loop counts up to 8 and executed depths up to 384 layers. These results make Loop-μP a practical recipe for scaling looped Transformers.
tags:
  - "Transformers"
  - "Scaling"
  - "Stability"
---
