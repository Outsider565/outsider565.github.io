---
title: "LoRA-GA: Low-Rank Adaptation with Gradient Approximation"
selected: true
author: "Shaowen Wang, Linxi Yu, Jian Li"
date: "2024-07-01"
journal: "NeurIPS 2024"
external_url: "https://arxiv.org/abs/2407.05000"
description: "A LoRA initialization method that aligns low-rank gradients with full fine-tuning, accelerating convergence without increasing training cost."
description_zh: "初始化就对齐全量微调的梯度方向——不改架构、不加开销，LoRA 收敛提速数倍。"
abstract: >-
  Fine-tuning large-scale pretrained models is prohibitively expensive in terms of computational and memory costs. LoRA, as one of the most popular Parameter-Efficient Fine-Tuning (PEFT) methods, offers a cost-effective alternative by fine-tuning an auxiliary low-rank model that has significantly fewer parameters. Although LoRA reduces the computational and memory requirements significantly at each iteration, extensive empirical evidence indicates that it converges at a considerably slower rate compared to full fine-tuning, ultimately leading to increased overall compute and often worse test performance. In our paper, we perform an in-depth investigation of the initialization method of LoRA and show that careful initialization (without any change of the architecture and the training algorithm) can significantly enhance both efficiency and performance. In particular, we introduce a novel initialization method, LoRA-GA (Low Rank Adaptation with Gradient Approximation), which aligns the gradients of low-rank matrix product with those of full fine-tuning at the first step. Our extensive experiments demonstrate that LoRA-GA achieves a convergence rate comparable to that of full fine-tuning (hence being significantly faster than vanilla LoRA as well as various recent improvements) while simultaneously attaining comparable or even better performance. For example, on the subset of the GLUE dataset with T5-Base, LoRA-GA outperforms LoRA by 5.69% on average. On larger models such as Llama 2-7B, LoRA-GA shows performance improvements of 0.34, 11.52%, and 5.05% on MT-bench, GSM8K, and Human-eval, respectively. Additionally, we observe up to 2-4 times convergence speed improvement compared to vanilla LoRA, validating its effectiveness in accelerating convergence and enhancing model performance. Code is available at https://github.com/Outsider565/LoRA-GA.
abstract_zh: >-
  全量微调大规模预训练模型在计算和内存上代价高昂。LoRA 作为最流行的参数高效微调（PEFT）方法之一，通过微调一个参数量大幅减少的辅助低秩模型来降低成本。尽管 LoRA 显著降低了每次迭代的计算和内存开销，大量实验证据表明其收敛速度远慢于全量微调，最终反而增加总计算量且测试性能往往更差。本文深入研究了 LoRA 的初始化方法，发现精心设计的初始化（不改变架构和训练算法）即可显著提升效率与性能。我们提出 LoRA-GA（Low Rank Adaptation with Gradient Approximation），在第一步就将低秩矩阵乘积的梯度与全量微调的梯度对齐。大量实验表明，LoRA-GA 的收敛速度可与全量微调媲美（因而显著快于原始 LoRA 及其各类改进），同时取得相当甚至更优的性能。例如，在 T5-Base 的 GLUE 子集上，LoRA-GA 较 LoRA 平均高出 5.69%；在 Llama 2-7B 等更大模型上，LoRA-GA 在 MT-bench、GSM8K 和 Human-eval 上分别提升 0.34、11.52% 和 5.05%。此外，相比原始 LoRA 观察到 2–4 倍的收敛加速。代码见 https://github.com/Outsider565/LoRA-GA。
tags:
  - "PEFT"
  - "LoRA"
  - "Fine-tuning"
---
