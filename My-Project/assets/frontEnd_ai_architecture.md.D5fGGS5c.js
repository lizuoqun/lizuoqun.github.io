import{_ as t,C as i,c as n,o as d,j as e,G as o,a as r}from"./chunks/framework.CcVWUnOI.js";const C=JSON.parse('{"title":"AI架构","description":"","frontmatter":{},"headers":[],"relativePath":"frontEnd/ai/architecture.md","filePath":"frontEnd/ai/architecture.md","lastUpdated":1774874255000}'),s={name:"frontEnd/ai/architecture.md"};function p(u,a,c,m,h,f){const l=i("MarkMermaid");return d(),n("div",null,[a[0]||(a[0]=e("h1",{id:"ai架构",tabindex:"-1"},[r("AI架构 "),e("a",{class:"header-anchor",href:"#ai架构","aria-label":'Permalink to "AI架构"'},"​")],-1)),a[1]||(a[1]=e("h2",{id:"raw-model",tabindex:"-1"},[r("Raw Model "),e("a",{class:"header-anchor",href:"#raw-model","aria-label":'Permalink to "Raw  Model"'},"​")],-1)),o(l,{code:`graph LR
A[Token List]-->B[Raw Model]-->C[概率分布]
B<--GPU-->D[权重矩阵]
E[Dev]--训练微调-->D
`}),a[2]||(a[2]=e("h2",{id:"model-service",tabindex:"-1"},[r("Model Service "),e("a",{class:"header-anchor",href:"#model-service","aria-label":'Permalink to "Model Service"'},"​")],-1)),o(l,{code:`graph LR
A[USER]--用户消息-->Model
subgraph Model
subgraph 前处理
C1[权限认证]-->C2[提示词注入]-->C3[Tokenization分词]
end
subgraph 自回归
D1[调用Raw Model]-->D2[temperature]-->D3[top_k、top_p]
end
subgraph 后处理
E1[生成结果]-->E2[合规性检查]
end
前处理-->自回归-->后处理
end
Model --AI回复--> F[USER]
`}),a[3]||(a[3]=e("h2",{id:"ai-application",tabindex:"-1"},[r("AI Application "),e("a",{class:"header-anchor",href:"#ai-application","aria-label":'Permalink to "AI Application"'},"​")],-1)),a[4]||(a[4]=e("ul",null,[e("li",null,"应用开发：概念、开发框架（LangChain、LangGraph、DeepAgent）"),e("li",null,"工具使用：概念（MCP、Skill、Tools）")],-1)),a[5]||(a[5]=e("blockquote",null,[e("p",null,"用户 --> Claude Code -- 用户输入+提示词(skill) --> 模型 -- 使用技能 --> JSON（技能调用）--> Claude Code -- Skill 完整文档 --> 模型 --> Claude Code --> 用户")],-1))])}const M=t(s,[["render",p]]);export{C as __pageData,M as default};
