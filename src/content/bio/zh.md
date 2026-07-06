---
name: "王少文"
lang: "zh"
avatar: "shaowen-avatar-forbidden-city.jpg"
shortBio: "计算机科学博士生"
institution: "清华大学，北京"
email: "wangsw23@mails.tsinghua.edu.cn"
altEmail: "wangsw5653@gmail.com"
wechat: "ShaowenWang-Shawn"
---

我是清华大学计算机科学博士生，师从李建教授，本科毕业于复旦大学计算机系（专业排名 1/110）。

我的研究方向是大语言模型的预训练。架构怎么选、参数怎么设、算力怎么分——预训练里的每个设计决策，说到底都是在押注模型会怎样学习。而直到今天，很多决策仍靠代价不菲的试错来拍板。我想做的事很简单：**用理解取代试错**。

## 研究主线：

我的工作围绕一个闭环展开：定量地理解模型如何将数据和算力转化为能力，据此推导设计决策，再验证它们经得起规模增长的考验。

起点是一套"学习即压缩"的理论——一个信息论框架，从第一性原理推导出 scaling laws、知识获取规律和 hallucination 的成因。后续工作逐步将这种理解转化为设计：

弄懂压缩如何改变 scaling 行为，催生了 **DLCM**——一种 concept-level 架构，附带首个 compression-aware scaling law，指导固定 FLOPs 下的算力分配。弄懂注意力头各自承担的功能角色，催生了 **AdaRoPE**——为长上下文量身定制的 head-specific 位置编码。弄懂权重共享网络中残差更新的相关结构，催生了 looped Transformer 的 scaling rules，让训练更稳定、超参数可在不同循环次数间直接迁移。

详见下方论文。

## 近况：

目前在字节跳动 Seed 团队做研究实习，将上述思路应用于大规模预训练。长远来看，我希望参与打造下一代前沿模型。如果你也在做预训练，或有合适的岗位，欢迎随时联系。
