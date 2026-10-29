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

I work on the science of large language model pre-training. Standard Transformers apply uniform computation and representation across every token, layer, and attention head, while critical pre-training decisions—architecture, parameterization, and compute allocation—are still largely settled by expensive trial and error. My research aims to replace trial and error with a closed loop: build a quantitative understanding of how models turn data and compute into capability, derive non-uniform architectures and scalable parameterizations from those principles, and verify that they hold at scale under strictly matched resource budgets.

## Research Focus

**1. Theoretical Foundation: Learning as Compression.**
To guide architecture design, we first model how LLMs acquire capability from data. Grounded in Kolmogorov structure functions and rate-distortion theory, our work on [learning as compression](/publications/understanding-llm-behaviors-compression) formulates pre-training as a two-part coding process that progresses from pervasive syntax to long-tail knowledge, deriving model and data scaling laws from first principles and explaining when [spurious correlations induce persistent hallucinations](/publications/spurious-correlations-hallucination). A key architectural takeaway is that information density and functional demand in natural language are highly non-uniform—motivating architectures that allocate compute adaptively rather than uniformly.

**2. Reallocating Compute Across Sequence and Depth.**
Guided by this insight, my recent work reallocates pre-training computation along two orthogonal axes while solving the accompanying stability and scaling-law challenges:
- **Sequence Axis (Semantic Compression):** Because local predictability varies widely across a sequence, [Dynamic Large Concept Models (DLCM)](/publications/dynamic-large-concept-models) learn variable-length semantic boundaries end-to-end and shift backbone computation from tokens into a compressed concept space, paired with a decoupled $\mu$P parameterization and the first compression-aware scaling law for fixed-FLOP compute allocation.
- **Depth Axis (Looped Recurrence):** Weight-tied looped Transformers increase effective depth without adding parameters, but weight sharing induces positively correlated residual updates across loops that break standard $1/\sqrt{L}$ depth scaling. [Loop-$\mu$P](/publications/looped-transformers-residual-scaling) derives the factored residual scaling rule $\varepsilon = \lambda / (N\sqrt{L})$ to decouple optimal learning rates from loop count $N$, enabling zero-shot hyperparameter transfer up to 8 loops (384 executed layers). Building on stable training, [SMELT](/publications/smelt) tests whether depth reuse yields genuine architectural gains when per-token FLOPs, non-embedding parameters, and KV cache are all strictly matched—scaling looped MoE Transformers up to 54B non-embedding parameters and demonstrating 6.8%–18.0% training-FLOP savings on the compute-optimal frontier via iterative refinement.

**3. Fine-Grained Inductive Biases and Optimization Dynamics.**
The same principle—deriving structural or algorithmic improvements from mechanistic analysis—extends to model components and parameter updates. Showing that attention heads specialize into distinct retrieval and aggregation roles yields [AdaRoPE](/publications/adarope), which learns head-specific rotary frequency ranges and extrapolation scales for long-context modeling. Analyzing why low-rank adaptation lags behind full fine-tuning in early optimization yields [LoRA-GA](/publications/lora-ga), which aligns initial low-rank gradients with full-parameter updates via SVD to accelerate convergence without extra training cost.

## Current Work & Next Directions

Looking ahead, I am interested in unifying sequence-level semantic compression and depth-level recurrence into **dynamic, adaptive latent-space computation**—enabling models to extrapolate reasoning depth at test time without growing the KV cache, and theoretically disentangling how independent parameter capacity (knowledge storage) interacts with recurrent computation depth (multi-step reasoning).

I am currently a research intern on the **Hunyuan** team at Tencent, and previously interned on the **Seed** team at ByteDance and at **Microsoft Research Asia (MSRA)**, bringing principled architecture and scaling-law research into large-scale pre-training. If you are working on foundation model pre-training, scaling laws, or efficient architectures, I would love to talk—feel free to reach out.
