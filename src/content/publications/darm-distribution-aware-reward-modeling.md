---
title: "DARM: Distribution-Aware Reward Modeling by Alleviating Biases from Low Preference-Context Dependency Data"
author: "Shaofan Liu, Guoqiang Zhang, Shihan Dou, Huiyuan Zheng, Yiming Zhou, Junjie Ye, Shaowen Wang, Shichun Liu, Jiazheng Zhang, Tao Gui, Qi Zhang, Xuan-Jing Huang"
date: "2026-07-01"
journal: "ACL 2026 Long Papers"
external_url: "https://aclanthology.org/2026.acl-long.1839.pdf"
description: "A distribution-aware reward modeling method that mitigates context-neglect bias in RLHF reward models using a conditional mutual information regularizer."
description_zh: "一种 distribution-aware reward modeling 方法，通过条件互信息正则项缓解 RLHF reward model 中的 context-neglect bias。"
abstract: >-
  Reward models (RMs) are the surrogate objectives in reinforcement learning from human feedback (RLHF), and their scores directly steer policy optimization. We show that standard RM training is vulnerable in data subsets where response quality depends only weakly on the context: such instances encourage the RM to ignore the context, leading to context neglect and degraded accuracy. To address this failure mode, we propose Distribution-Aware Reward Modeling (DARM), which augments the RM objective with a conditional mutual information regularizer that maximizes context and the predicted reward conditioned on the response. By explicitly preserving the sensitivity of reward signals to the prompting context, DARM reduces over-reliance on response-only features and improves robustness to contextual variation. Extensive experiments across in-distribution and out-of-distribution settings show that DARM trained RMs deliver more accurate and consistent scoring than strong baselines. We further evaluate its downstream impact in RLHF, where DARM produce better aligned policies. We also demonstrate the necessity of each DARM design component and the impact of key parameters on performance through ablation experiments.
tags:
  - "Reward Modeling"
  - "RLHF"
  - "Alignment"
---
