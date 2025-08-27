import{_ as h,C as e,c as u,o as c,aP as s,G as n,j as t,a as i}from"./chunks/framework.BJOOWd-7.js";const T=JSON.parse('{"title":"02333 软件工程 ✒️","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"exam/02333.md","filePath":"exam/02333.md","lastUpdated":1756262554000}'),g={name:"exam/02333.md"};function m(_,a,k,q,P,y){const l=e("MarkMermaid"),r=e("el-image"),p=e("MarkFlow"),d=e("BackTop"),o=e("MarkTitle"),b=e("MarkLottie");return c(),u("div",null,[a[0]||(a[0]=s("",57)),n(l,{code:`graph LR
A([旅行社])--订票单-->B((预订机票))
Z[[航班目录]]--> B
B--航班-->C((准备机票))
B--费用-->Y((记账))
X[[记账文件]]<-->Y
Y --> D
C--机票-->D([旅客])
`}),a[1]||(a[1]=s("",8)),n(l,{code:`graph LR
subgraph one
A[建立系统环境图] --- A1[确定系统语境]
end
subgraph two
B[自顶向下，逐步求精] --- B1[建立系统的层次数据流图]
end
one-->two
two-->C[定义数据字典]
C-->D[描述加工]
`}),a[2]||(a[2]=s("",6)),n(r,{lazy:"",src:"/My-Project/images/02333/Yourbon.webp","data-fancybox":"gallery",width:"100%"}),a[3]||(a[3]=t("p",null,"HIPO图【层次图+输入/处理/输出图】",-1)),n(l,{title:"带编号的层次图（H图）",showBorder:!0,code:`graph TD
A[正文加工系统]-->B1[输入1.0]
A-->B2[输入2.0]
A-->B3[编辑3.0]
A-->B4[加标题4.0]
A-->B5[存储5.0]
A-->B6[检索6.0]
A-->B7[编目录7.0]
A-->B8[格式化8.0]
B3--->C1[添加3.1]
B3--->C2[删除3.2]
B3--->C3[插入3.3]
B3--->C4[修改3.4]
B3--->C5[合并3.5]
B3--->C6[列表3.6]
`}),n(l,{title:"IPO图",showBorder:!0,code:`
graph LR
subgraph 输入
A[旧的主文件]
B[事务文件]
end
subgraph 处理
direction TB
C[校验主记录]
D[校验事务记录]
E[更新主记录]
end
subgraph 输出
F[有效的主记录]
G[有效的事务记录]
H[更新后的主文件]
end
A --> C
B --> D
C --> F
D --> G
E --> H`}),a[4]||(a[4]=s("",3)),n(p,{title:"交换【事务】设计的基本步骤",flowData:[{id:1,title:"设计准备",description:"复审并精化系统模型"},{id:2,title:"确定边界",description:"交换【确定输入、变换、输出这三部分之间的边界】<br/>事务【确定事务处理中心】"},{id:3,title:"第一级分解",description:"系统模块结构图顶层和第一层的设计"},{id:4,title:"第二级分解",description:"自顶向下，逐步求精"}]}),a[5]||(a[5]=s("",11)),n(l,{code:`graph TB
A[结构化设计工具] --> B[总体设计工具]
A --> C[详细设计工具]
B--> D1[模块结构图]
B --> D2[层次图]
B--> D3[HIPO图]
C--> E1[程序流程图]
C--> E2[盒图]
C--> E3[PAD图]
C--> E4[PDL]`}),a[6]||(a[6]=s("",5)),n(l,{title:"类与对象",showBorder:!0,code:`classDiagram
Animal : +int age
Animal : #String gender
Animal : -sex
Animal : ~name
Animal: +isMammal()
Animal: +mate()
`}),a[7]||(a[7]=s("",3)),n(r,{lazy:"",class:"my-2",src:"/My-Project/images/02333/interface.webp","data-fancybox":"gallery",width:"100%"}),a[8]||(a[8]=s("",18)),n(r,{lazy:"",src:"/My-Project/images/02333/classGraph.webp","data-fancybox":"gallery",width:"100%"}),a[9]||(a[9]=s("",7)),n(r,{lazy:"",src:"/My-Project/images/02333/userUml.webp","data-fancybox":"gallery",width:"100%"}),a[10]||(a[10]=s("",5)),n(r,{lazy:"",src:"/My-Project/images/02333/statusUml.webp","data-fancybox":"gallery",width:"80%"}),a[11]||(a[11]=s("",4)),n(r,{lazy:"",src:"/My-Project/images/02333/orderUml.webp","data-fancybox":"gallery",width:"100%"}),a[12]||(a[12]=s("",37)),n(p,{title:"软件测试所经历的阶段",flowData:[{id:1,title:"No.1",description:"软件测试和软件调试无区别"},{id:2,title:"No.2",description:"测试为表明软件能正常工作"},{id:3,title:"No.3",description:"测试为表明软件不能正常工作"},{id:4,title:"No.4",description:"测试仅为了将已察觉的错误风险减少到可接受的程度"},{id:5,title:"No.5",description:"测试不仅是一种行为，而是一种理念，即测试是产生低风险软件的一种训练"}]}),a[13]||(a[13]=s("",6)),n(r,{lazy:"",src:"/My-Project/images/02333/pathTest.webp","data-fancybox":"gallery",width:"100%"}),a[14]||(a[14]=s("",3)),n(l,{code:`graph LR
B[操作一] --> C{x,y>=80}
C --Y-->D[二]
C --N-->E{x>=90 and y>=75}
E --Y-->F[三]
E --N-->G{x>=75 and y>=90}
F --> G
G --Y--> H[四]
G --N--> J
H --> J([结束])
D --> J
`}),a[15]||(a[15]=s("",27)),n(l,{code:`graph TB
A[软件生存周期过程]
B[供应]
C[软件实现]
D[软件需求分析]
E[软件体系结构设计]
F[软件验证]
G[软件确认]
A --> B & C & D & E & F & G`}),a[16]||(a[16]=s("",2)),n(l,{code:`graph TB
A[标准的应用] --> B[系统和软件]
A --> C[生存周期模型和阶段]
A --> D[过程分解]
A --> E[组织层和项目层]
A --> F[过程间的时序关系]
B --> G[《ISO/IEC 系统生存周期 15288》]
style A fill:#f9f,stroke:#333,stroke-width:2px
style G fill:#ffcccc,stroke:#cc0000`}),a[17]||(a[17]=s("",3)),n(l,{title:"瀑布模型各开发阶段的活动",code:`graph LR
A[系统需求] --> B[软件需求]
B --> C[需求分析]
C --> D[设计]
D --> E[编码]
E --> F[测试]
F --> G[运行]
B -.-> A
C -.-> B
D -.-> C
E -.-> D
F -.-> E
G -.-> F`}),a[18]||(a[18]=s("",2)),n(l,{title:"增量模型示意图",code:`graph LR
subgraph 增量1
A1[需求]-->A2[设计]-->A3[编码]-->A4[测试]-->A5[交付]
end
subgraph 增量2
B1[需求]-->B2[设计]-->B3[编码]-->B4[测试]-->B5[交付]
end
subgraph 增量3
C1[需求]-->C2[设计]-->C3[编码]-->C4[测试]-->C5[交付]
end
增量1 --> 增量2 --> 增量3 --> N1[增量N
...] --> D[最终系统]`}),a[19]||(a[19]=s("",2)),n(l,{title:"增量模型示意图",code:`graph LR
subgraph 版本1
A1[需求]-->A2[设计]-->A3[实现]-->A4[交付]
end
subgraph 版本2
A21[改进需求]-->A22[再设计]-->A23[再实现]
end
subgraph 版本3
A31[进一步完善]
end
版本1 --> B[用户反馈] --> 版本2 --> D[用户反馈] --> 版本3 --> F[...持续演化]`}),a[20]||(a[20]=t("h4",{id:"螺旋模型",tabindex:"-1"},[i("螺旋模型 "),t("a",{class:"header-anchor",href:"#螺旋模型","aria-label":'Permalink to "螺旋模型"'},"​")],-1)),a[21]||(a[21]=t("ul",null,[t("li",null,[i("既念 "),t("ul",null,[t("li",null,"在瀑布模型和演化模型的基础上，加入两者忽略的风险分析"),t("li",null,"沿着螺旋线，经历制定计划，风险分析，实施工程，客户评估这4个方面的活动"),t("li",null,"自内向外每旋转一圈便产生一个更为完善的新版本")])]),t("li",null,"适用：项目的开发风险很大或客户不能确定系统需求")],-1)),n(l,{title:"螺旋模型示意图",code:`graph LR
subgraph 第1圈
A1[计划]-->A2[风险]-->A3[工程]-->A4[评估]
end
subgraph 第2圈
B1[计划]-->B2[风险]-->B3[工程]-->B4[评估]
end
subgraph 第3圈
C1[计划]-->C2[风险]-->C3[工程]-->C4[评估]
end
S[开始] --> 第1圈 --> 第2圈 --> 第3圈 --> P4[...] --> E[最终系统]`}),a[22]||(a[22]=t("h4",{id:"喷泉模型",tabindex:"-1"},[i("喷泉模型 "),t("a",{class:"header-anchor",href:"#喷泉模型","aria-label":'Permalink to "喷泉模型"'},"​")],-1)),a[23]||(a[23]=t("ul",null,[t("li",null,"特征：迭代、无间隙"),t("li",null,"意义：说明了软件活动需要多次重复；活动之间没有明显的间隙"),t("li",null,"适用：面向对象技术的软件开发")],-1)),n(l,{title:"喷泉模型示意图",code:`graph TB
A[需求分析] --> B[面向对象分析 OOA]
B --> C[面向对象设计 OOD]
C --> D[面向对象编程 OOP]
D --> E[测试与维护]
E --> F{是否满足需求？}
F -- 否 --> G[反馈至任一前期阶段]
G --> A
G --> B
G --> C
G --> D
G --> E
F -- 是 --> H[系统交付]
B <-.-> C
C <-.-> D
D <-.-> E`}),a[24]||(a[24]=t("h3",{id:"过程规划与管理",tabindex:"-1"},[i("过程规划与管理 "),t("a",{class:"header-anchor",href:"#过程规划与管理","aria-label":'Permalink to "过程规划与管理"'},"​")],-1)),a[25]||(a[25]=t("p",null,"过程管理包括过程建立、过程评估和过程改进",-1)),a[26]||(a[26]=t("h4",{id:"过程的建立",tabindex:"-1"},[i("过程的建立 "),t("a",{class:"header-anchor",href:"#过程的建立","aria-label":'Permalink to "过程的建立"'},"​")],-1)),n(r,{lazy:"",class:"my-2",src:"/My-Project/images/02333/projectManagePlan.webp","data-fancybox":"gallery",width:"100%"}),n(p,{title:"选择软件生存周期模型（SLCM）的步骤",flowData:[{id:1,title:"No.1",description:"标识开发项目可用的SLCM"},{id:2,title:"No.2",description:"标识那些会影响SLCM选择的属性"},{id:3,title:"No.3",description:"标识为选择SLCM所需要的任何约束"},{id:4,title:"No.4",description:"评估所选择的SLCM"},{id:5,title:"No.5",description:"选择最能满足项目属性和约束的SLCM"}]}),a[27]||(a[27]=s("",4)),n(l,{title:"集成化能力成熟度模型 Capability Maturity Model Integration for Development",code:`graph TB
A[集成化能力成熟度模型 CMMI] --> B[软件CMM]
A --> C[产品集成开发 CMM]
A --> D[系统工程 CMM]
`}),a[28]||(a[28]=s("",3)),n(l,{title:"CMMI的主要模型部件",code:`graph TB
A[过程域] --> B[意图陈述]
A --> C[简介性注释]
A --> D[相关过程域]
A --> E[专用目标] --> G{专用实践}
A --> F[共用目标] --> H{共用实践}
G --> I[典型工作产品]
G --> J[子实践]
H --> K[子实践]
H --> L[共用实践的精化]
`}),a[29]||(a[29]=s("",11)),n(d),n(o,{color:"text-red-500",weight:500}),n(b,{path:"/My-Project/lottie/Programmer.json"})])}const A=h(g,[["render",m]]);export{T as __pageData,A as default};
