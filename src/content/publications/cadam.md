---
title: "CAdam: Confidence-Based Optimization for Online Learning"
author: "Shaowen Wang, Anan Liu, Jian Xiao, Huan Liu, Yuekui Yang, Cong Xu, Qianqian Pu, Suncong Zheng, Wei Zhang, Di Wang, Jie Jiang, Jian Li"
date: "2024-11-01"
journal: "CAO @ ICLR 2026"
external_url: "https://arxiv.org/abs/2411.19647"
description: "A confidence-based optimizer that selectively updates parameters using momentum-gradient consistency for robust online learning."
description_zh: "在线学习数据变幻莫测——CAdam 先看动量与梯度是否一致，分清分布漂移与噪声后再决定更新。"
abstract: >-
  Modern recommendation systems frequently employ online learning to dynamically update their models with freshly collected data. The most commonly used optimizer for updating neural networks in these contexts is the Adam optimizer, which integrates momentum ($m_t$) and adaptive learning rate ($v_t$). However, the volatile nature of online learning data, characterized by its frequent distribution shifts and presence of noise, poses significant challenges to Adam's standard optimization process: (1) Adam may use outdated momentum and the average of squared gradients, resulting in slower adaptation to distribution changes, and (2) Adam's performance is adversely affected by data noise. To mitigate these issues, we introduce CAdam, a confidence-based optimization strategy that assesses the consistency between the momentum and the gradient for each parameter dimension before deciding on updates. If momentum and gradient are in sync, CAdam proceeds with parameter updates according to Adam's original formulation; if not, it temporarily withholds updates and monitors potential shifts in data distribution in subsequent iterations. This method allows CAdam to distinguish between the true distributional shifts and mere noise, and to adapt more quickly to new data distributions. In various settings with distribution shift or noise, our experiments demonstrate that CAdam surpasses other well-known optimizers, including the original Adam. Furthermore, in large-scale A/B testing within a live recommendation system, CAdam significantly enhances model performance compared to Adam, leading to substantial increases in the system's gross merchandise volume (GMV).
abstract_zh: >-
  现代推荐系统广泛采用在线学习来动态更新模型。这一场景中最常用的优化器是 Adam，它整合了动量（mₜ）和自适应学习率（vₜ）。然而在线学习数据的易变特性——频繁的分布漂移和噪声——给 Adam 的标准优化过程带来了两大挑战：（1）Adam 可能使用过时的动量和梯度平方均值，导致对分布变化的适应变慢；（2）Adam 的性能会受到数据噪声的不利影响。为此我们提出 CAdam，一种基于置信度的优化策略：在每个参数维度上，先评估动量与当前梯度的方向一致性，再决定是否更新。若二者方向一致，CAdam 按 Adam 原有公式更新参数；若不一致，则暂缓更新，并在后续迭代中观察是否出现真实的分布漂移。这使 CAdam 能够区分真实分布变化与纯粹的噪声，从而更快地适应新数据分布。在包含分布漂移或噪声的多种设定下，实验表明 CAdam 超越了包括原始 Adam 在内的多个知名优化器。此外，在一个大规模线上推荐系统的 A/B 测试中，CAdam 相比 Adam 显著提升了模型性能，带来了 GMV 的可观增长。
tags:
  - "Optimization"
  - "Online Learning"
  - "Robustness"
---
