---
title: "DARM: Distribution-Aware Reward Modeling by Alleviating Biases from Low Preference-Context Dependency Data"
author: "Shaofan Liu, Guoqiang Zhang, Shihan Dou, Huiyuan Zheng, Yiming Zhou, Junjie Ye, Shaowen Wang, Shichun Liu, Jiazheng Zhang, Tao Gui, Qi Zhang, Xuan-Jing Huang"
date: "2026-07-01"
journal: "ACL 2026 Long Papers"
external_url: "https://aclanthology.org/2026.acl-long.1839.pdf"
description: "A distribution-aware reward modeling method that mitigates context-neglect bias in RLHF reward models using a conditional mutual information regularizer."
description_zh: "奖励模型容易'看答案不看题'——用条件互信息正则让 reward model 重新关注上下文。"
abstract: >-
  Reward models (RMs) are the surrogate objectives in reinforcement learning from human feedback (RLHF), and their scores directly steer policy optimization. We show that standard RM training is vulnerable in data subsets where response quality depends only weakly on the context: such instances encourage the RM to ignore the context, leading to context neglect and degraded accuracy. To address this failure mode, we propose Distribution-Aware Reward Modeling (DARM), which augments the RM objective with a conditional mutual information regularizer that maximizes context and the predicted reward conditioned on the response. By explicitly preserving the sensitivity of reward signals to the prompting context, DARM reduces over-reliance on response-only features and improves robustness to contextual variation. Extensive experiments across in-distribution and out-of-distribution settings show that DARM trained RMs deliver more accurate and consistent scoring than strong baselines. We further evaluate its downstream impact in RLHF, where DARM produce better aligned policies. We also demonstrate the necessity of each DARM design component and the impact of key parameters on performance through ablation experiments.
abstract_zh: >-
  奖励模型（RM）是基于人类反馈的强化学习（RLHF）中的代理目标，其评分直接引导策略优化。我们发现标准 RM 训练在回复质量仅弱依赖上下文的数据子集上存在脆弱性：这些样本会诱导 RM 忽视上下文，导致 context neglect 并降低准确率。为应对这一失效模式，我们提出 Distribution-Aware Reward Modeling（DARM），在 RM 目标中加入条件互信息正则项，最大化上下文与预测奖励在给定回复条件下的互信息。通过显式保持奖励信号对上下文的敏感性，DARM 减少了对仅依赖回复特征的过度依赖，提升了对上下文变化的鲁棒性。在分布内和分布外设定下的大量实验表明，DARM 训练的 RM 比强基线提供更准确、更一致的评分。我们进一步在 RLHF 的下游任务中验证了其效果：使用 DARM 的 RM 能产生对齐程度更高的策略。消融实验也证明了 DARM 各设计组件的必要性及关键参数对性能的影响。
tags:
  - "Reward Modeling"
  - "RLHF"
  - "Alignment"
---
