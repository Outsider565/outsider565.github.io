---
title: "CAdam: Confidence-Based Optimization for Online Learning"
author: "Shaowen Wang, Anan Liu, Jian Xiao, Huan Liu, Yuekui Yang, Cong Xu, Qianqian Pu, Suncong Zheng, Wei Zhang, Di Wang, Jie Jiang, Jian Li"
date: "2024-11-01"
journal: "CAO @ ICLR 2026"
external_url: "https://arxiv.org/abs/2411.19647"
description: "A confidence-based optimizer that selectively updates parameters using momentum-gradient consistency for robust online learning."
description_zh: "一种基于置信度的优化器，通过 momentum-gradient consistency 选择性更新参数，以提升在线学习鲁棒性。"
abstract: >-
  Modern recommendation systems frequently employ online learning to dynamically update their models with freshly collected data. The most commonly used optimizer for updating neural networks in these contexts is the Adam optimizer, which integrates momentum ($m_t$) and adaptive learning rate ($v_t$). However, the volatile nature of online learning data, characterized by its frequent distribution shifts and presence of noise, poses significant challenges to Adam's standard optimization process: (1) Adam may use outdated momentum and the average of squared gradients, resulting in slower adaptation to distribution changes, and (2) Adam's performance is adversely affected by data noise. To mitigate these issues, we introduce CAdam, a confidence-based optimization strategy that assesses the consistency between the momentum and the gradient for each parameter dimension before deciding on updates. If momentum and gradient are in sync, CAdam proceeds with parameter updates according to Adam's original formulation; if not, it temporarily withholds updates and monitors potential shifts in data distribution in subsequent iterations. This method allows CAdam to distinguish between the true distributional shifts and mere noise, and to adapt more quickly to new data distributions. In various settings with distribution shift or noise, our experiments demonstrate that CAdam surpasses other well-known optimizers, including the original Adam. Furthermore, in large-scale A/B testing within a live recommendation system, CAdam significantly enhances model performance compared to Adam, leading to substantial increases in the system's gross merchandise volume (GMV).
tags:
  - "Optimization"
  - "Online Learning"
  - "Robustness"
---
