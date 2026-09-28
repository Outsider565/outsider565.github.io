---
name: "Shaowen Wang"
avatar: "shaowen-avatar-forbidden-city.jpg"
shortBio: "CS Ph.D. Student"
institution: "Tsinghua University, Beijing"
email: "wangsw23@mails.tsinghua.edu.cn"
altEmail: "wangsw5653@gmail.com"
wechat: "ShaowenWang-Shawn"
---

I am a Ph.D. student in Computer Science at Tsinghua University, advised by Prof. Jian Li. I received my B.S. in Computer Science from Fudan University, ranking 1st among 110 students.
I work on large language model pre-training. Every design decision in pre-training — an architecture, a parameterization, a compute allocation — is implicitly a bet on how models learn. Today, some of these bets are still settled by expensive trial and error. My research aims to settle them by understanding instead.

## Research Focus:

My work follows a single loop: build a quantitative understanding of how models turn data and compute into capability, derive design decisions from it, and verify that they hold as scale grows.
The foundation is a theory of learning as compression: an information-theoretic framework that explains scaling laws, the dynamics of knowledge acquisition, and hallucination from first principles. The rest of my work turns this kind of analysis into design. Understanding how compression changes scaling behavior yields DLCM, a concept-level architecture with the first compression-aware scaling law for allocating compute under fixed FLOPs. Understanding the functional roles of attention heads yields AdaRoPE, head-specific positional encodings for long context.

For looped Transformers, understanding correlated residual updates in weight-tied networks yields scaling rules for stable training and hyperparameter transfer across loop counts without retuning. **SMELT** addresses a complementary question: whether reusing depth improves capability under matched resource budgets, and how that advantage scales. By closely matching per-token FLOPs, total non-embedding parameters, and KV cache, we isolate the benefits of looping and identify a practical MoE recipe.

You can read my papers below.

## Current Work:

I am a research intern on the Seed team at ByteDance, applying this approach to large-scale pretraining. In the long run, I want to help build the next generation of frontier models. If you're working on pre-training or having an open role, I'd love to talk — feel free to reach out.
