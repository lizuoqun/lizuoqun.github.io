import{_ as l,C as e,c as p,o as t,aP as i,G as n}from"./chunks/framework.CcVWUnOI.js";const y=JSON.parse('{"title":"LangChain","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"frontEnd/ai/langchain.md","filePath":"frontEnd/ai/langchain.md","lastUpdated":1786867947000}'),h={name:"frontEnd/ai/langchain.md"};function k(r,s,d,E,g,o){const a=e("MarkMermaid");return t(),p("div",null,[s[0]||(s[0]=i("",27)),n(a,{code:`graph LR
subgraph 模型列表
direction TB
D1[OpenAI]<-->D2[DeepSeek]<-->D3[TongYi]<-->D4[Ollama]
end
A[用户提问]-->B[init_chat_model 统一初始化接口]-->C[model_provider 选择模型]-->模型列表-->E[invoke 统一调用]-->F[AI Respones 模型处理]-->G[输出结果]
`}),s[1]||(s[1]=i("",80)),n(a,{code:`graph TB
A[用户提问]-->B[LLM推理]--决定调用工具-->C[执行工具]
C--返回观察结果-->B
B--决定完成并生成答案-->D[输出结果]
`}),s[2]||(s[2]=i("",70))])}const u=l(h,[["render",k]]);export{y as __pageData,u as default};
