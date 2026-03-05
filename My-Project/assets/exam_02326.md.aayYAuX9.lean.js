import{_ as o,C as t,c as d,o as p,aP as u,G as a,j as i,a as s}from"./chunks/framework.CcVWUnOI.js";const f=JSON.parse('{"title":"02326 操作系统 ✒️","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"exam/02326.md","filePath":"exam/02326.md","lastUpdated":1765770298000}'),c={name:"exam/02326.md"};function m(b,l,k,P,q,g){const e=t("MarkMermaid"),n=t("MarkLottie"),r=t("MarkAnnotate"),h=t("MarkTitle");return p(),d("div",null,[l[0]||(l[0]=u("",7)),a(e,{title:"计算机系统组成",showBorder:"true",code:`graph LR
A[计算机系统]-->B[软件系统]
A--> C[硬件系统]
B --> B1[应用软件]
B1 --> B11[文字处理、图形图像处理、科学计算、MIS...]
B --> B2[支撑软件]
B2 --> B21[数据库、网络、多媒体...]
B --> B3[系统软件]
B3 --> B31[操作系统、编译程序...]
C --> C1[CPU、内存外存、I/O设备...]`}),l[1]||(l[1]=u("",29)),a(e,{code:`graph LR
A[手工阶段]-->B[监控程序]-->C[多道批处理]-->D[分时与实时操作系统]-->E[UNIX通用操作系统]-->F[个人计算机操作系统]-->G[Android操作系统]
`}),l[2]||(l[2]=u("",12)),a(e,{code:`graph LR
X[操作系统设计]-->设计过程
X-->设计目标
X-->操作系统结构研究的目标
subgraph 设计目标
A[设计目标]-->B[可靠性]
A-->C[高效性]
A-->D[易维护性]
A-->E[可移植性]
A-->F[安全性]
A-->G[简明性]
end
subgraph 操作系统结构研究的目标
J[操作系统结构研究的目标]-->K[系统模块化]
J-->L[模块标准化]
J-->M[通信规范化]
end
subgraph 设计过程
O[设计过程]-->P[功能设计]-->P1[确定所设计的操作系统应具备哪些功能以及操作系统的类型。跟目标有关]
O-->Q[算法设计]-->Q1[选择和设计满足系统功能的算法和策略，并分析和估算其效能]
O-->R[结构设计]
end
`}),l[3]||(l[3]=u("",32)),a(e,{code:`graph TB
A[应用程序]-->B[C库函数、API]--系统调用-->C[内核]
A-->C`}),l[4]||(l[4]=u("",15)),a(e,{code:`graph BT
subgraph 三状态模型
A[就绪]--进程调度-->B[运行]--I/O请求-->C[等待]--I/O完成-->A
B--时间片完成-->A
end
subgraph 五状态模型
D[创建]--进程调度-->E[就绪]--调度-->F[执行]--释放-->G[结束]
F--超时、被抢占-->E
F--等待事件发生-->H[阻塞]--已发生-->E
end
`}),l[5]||(l[5]=u("",33)),a(e,{code:`graph TB
subgraph 进程B
B[P（S）]
B1[临界区操作]
B2[V（S）]
end
subgraph 进程A
A[P（S）]
A1[临界区操作]
A2[V（S）]
end
P[Start]-->A-->P1[S=S-1=0]-->A1-->B-->P3[S=S-1=-1]-->P5[S小于0，无法进入B]-->P6[等待A释放]-->A2-->P7[S=S+1=0]-->B1-->B2-->P9[S=S+1=1]-->End
`}),l[6]||(l[6]=i("h4",{id:"用p、v操作实现进程之间的同步",tabindex:"-1"},[s("用P、V操作实现进程之间的同步 "),i("a",{class:"header-anchor",href:"#用p、v操作实现进程之间的同步","aria-label":'Permalink to "用P、V操作实现进程之间的同步"'},"​")],-1)),l[7]||(l[7]=i("p",null,"S1=0，S2=0",-1)),a(e,{code:`graph TB
subgraph 进程A
A[写入缓存]
A1[V（S1）]
A2[P（S2）]
end
subgraph 进程B
B[P（S1）]
B1[读取缓存]
B2[V（S2）]
end
P[Start]-->B-->P1[S1=S1-1=0，阻塞B]-->A-->A1-->P2[S1=S1+1=1，唤醒B]-->B1-->B2-->P4[S2=S2+1=1，唤醒A]-->End
A1-->A2-->P3[S2=S2-1=0，阻塞A]
`}),l[8]||(l[8]=i("p",null,"有三个进程，进程get从输入设备上不断读取数据，并放入缓冲区buffer1；进程copy不断地将缓冲区buffer1中的内容复制到缓冲区buffer2；进程put坝j不断将buffer2中的内容在打印机上输出",-1)),l[9]||(l[9]=i("ul",null,[i("li",null,"S1：初始值为1，保证get进程能够从设备读数据到buffer1"),i("li",null,"S2：初始值为0，copy进程能否将buffer1的内容复制到buffer2"),i("li",null,"S3：初始值为0，put进程能否将buffer2的内容"),i("li",null,"打印输出S4：初始值为1，保证buffer2缓冲区可以使用")],-1)),a(e,{code:`graph BT
subgraph put进程
C[P（S3）]-->C1[打印buffer2内容]-->C2[V（S4）]
end
subgraph copy进程
B[P（S2）]-->B1[P（S4）]-->B2[复制buffer1到buffer2]-->B3[V（S1）]-->B4[V（S3）]
end
subgraph get进程
A[P（S1）]-->A1[读数据到buffer1]-->A2[V（S2）]
end
`}),l[10]||(l[10]=u("",5)),a(e,{code:`graph LR
A[生产者P]-->B[缓冲区]-->C[消费者Q]
`}),l[11]||(l[11]=i("ul",null,[i("li",null,[s("信号量设置 "),i("ul",null,[i("li",null,"empty，初值为1，用于指示空缓冲区数量"),i("li",null,"full，初值为0，用于指示满缓冲区数量")])])],-1)),a(e,{code:`graph BT
subgraph 进程Q
B[P（full）]-->B1[从缓冲区取产品]-->B2[V（empty）]-->B3[消费产品]
end
subgraph 进程P
A[P（empty）]-->A1[生产产品]-->A2[放入缓冲区]-->A3[V（full）]
end
`}),l[12]||(l[12]=i("h4",{id:"多个生产者-消费者问题",tabindex:"-1"},[s("多个生产者--消费者问题 "),i("a",{class:"header-anchor",href:"#多个生产者-消费者问题","aria-label":'Permalink to "多个生产者--消费者问题"'},"​")],-1)),l[13]||(l[13]=i("p",null,"设有若干个生产者P1、P2若干个消费者Q1、Q2他们通过一个环形缓冲池联系起来",-1)),l[14]||(l[14]=i("ul",null,[i("li",null,"生产者不能往“满”缓冲区中放产品，设置信号量empty，初始值为k，指示缓冲池中空缓冲区数目"),i("li",null,"消费者不能从“空”缓冲区中取产品，设置信号量full，初始值为0，指示缓冲池中的满缓冲区数目"),i("li",null,"缓冲池必须互斥访问，设置信号量mutex，初值为1"),i("li",null,"整型量ij，初值为0，分别用于指示空缓冲区和满缓冲区位置")],-1)),a(e,{code:`graph BT
subgraph 进程Q1&Q2
B[j=0]-->B1[P（full）]-->B2[P（mutex）]-->B3[从缓冲区取产品]-->B4[V（mutex）]-->B5[V（empty）]-->B6[消费产品]
end
subgraph 进程P1&P2
A[i=0]-->A1[生产产品]-->A2[P（empty）]-->A3[P（mutex）]-->A4[放入缓冲区]-->A5[i=（i+1）% k]-->A6[V（mutex）]-->A7[V（full）]
end
`}),l[15]||(l[15]=u("",93)),a(n,{path:"/My-Project/lottie/Laptop.json"}),a(r,{elementTag:".myElement",type:"box",options:{color:"green"}}),a(h,{color:"text-red-500",weight:500})])}const E=o(c,[["render",m]]);export{f as __pageData,E as default};
