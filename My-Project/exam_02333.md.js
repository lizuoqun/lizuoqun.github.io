import{_ as b,C as e,c as h,o as u,aP as s,G as n,j as t,a as i}from"./framework.js";const x=JSON.parse('{"title":"02333 软件工程 ✒️","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"exam/02333.md","filePath":"exam/02333.md","lastUpdated":1760579576000}'),c={name:"exam/02333.md"};function g(m,a,_,q,k,P){const l=e("MarkMermaid"),r=e("el-image"),p=e("MarkFlow"),d=e("MarkTitle"),o=e("MarkLottie");return u(),h("div",null,[a[0]||(a[0]=s(`<h1 id="_02333-软件工程-✒️" tabindex="-1">02333 软件工程 ✒️ <a class="header-anchor" href="#_02333-软件工程-✒️" aria-label="Permalink to &quot;02333 软件工程 ✒️&quot;">​</a></h1><h2 id="绪论" tabindex="-1">绪论 <a class="header-anchor" href="#绪论" aria-label="Permalink to &quot;绪论&quot;">​</a></h2><h3 id="软件工程概念的提出与发展" tabindex="-1">软件工程概念的提出与发展 <a class="header-anchor" href="#软件工程概念的提出与发展" aria-label="Permalink to &quot;软件工程概念的提出与发展&quot;">​</a></h3><p>从事软件开发实践和软件工程项目管理的<strong>思想基础</strong>：正确认识软件开发</p><h4 id="软件危机" tabindex="-1">软件危机 <a class="header-anchor" href="#软件危机" aria-label="Permalink to &quot;软件危机&quot;">​</a></h4><p>20世纪60年代以来，随着计算机的广泛应用，软件生产率、软件质量满足不了社会发展的需求，成为社会、经济发展的<strong>制约因素</strong> ，人们通常把这些现象称为软件危机</p><h4 id="软件工程概念的提出" tabindex="-1">软件工程概念的提出 <a class="header-anchor" href="#软件工程概念的提出" aria-label="Permalink to &quot;软件工程概念的提出&quot;">​</a></h4><p>其目的是倡导<strong>以工程的原理、原则和方法</strong>进行软件开发以期解决出现的“软件危机&quot;</p><p>软件工程这一术语首次出现在<strong>1968</strong>年的 <strong>NATO（北大西洋公约组织）</strong> 会议上</p><h4 id="软件工程的定义" tabindex="-1">软件工程的定义 <a class="header-anchor" href="#软件工程的定义" aria-label="Permalink to &quot;软件工程的定义&quot;">​</a></h4><p>软件工程是应用<strong>计算机科学理论和技术以及工程管理原则和方法</strong>，按预算和进度实现满足用户要求的软件产品的<strong>工程</strong>，或以此为研究对象的 <strong>学科</strong></p><h4 id="软件工程的发展" tabindex="-1">软件工程的发展 <a class="header-anchor" href="#软件工程的发展" aria-label="Permalink to &quot;软件工程的发展&quot;">​</a></h4><p>20世纪60年代末到80年代初</p><ul><li>主要成果：提出<strong>瀑布模型</strong>，开发了诸多<strong>过程式语言</strong>（如c语言、Pascal语言）和<strong>开发方法</strong> （如Jackson方法、结构化方法）、开发了一些<strong>支持工具</strong>（调试工具、测试工具）等</li><li>特征：前期主要研究<strong>系统实现技术</strong>，后期开始关注<strong>软件质量和软件工程管理</strong></li></ul><p>20世纪80年代以来</p><ul><li>主要成果：提出 <strong>《软件生存周期过程》</strong>、开展<strong>计算机辅助工程（CASE）</strong>、<strong>面向对象语言</strong>（如Smalltalk、C++）、 提出<strong>面向对象软件开发方法</strong>等</li><li>特征：开展了一系列有关软件生产技术，特别是<strong>软件复用技术和软件生产管理</strong>的研究和实践</li></ul><h3 id="软件开发的本质" tabindex="-1">软件开发的本质 <a class="header-anchor" href="#软件开发的本质" aria-label="Permalink to &quot;软件开发的本质&quot;">​</a></h3><h4 id="计算机软件" tabindex="-1">计算机软件 <a class="header-anchor" href="#计算机软件" aria-label="Permalink to &quot;计算机软件&quot;">​</a></h4><p>一般是指计算机系统中的<strong>程序及其文档</strong></p><ul><li>程序是对计算机任务的<strong>处理对象和处理规则</strong>的描述</li><li>文档是为了理解程序所需的<strong>阐述性资料</strong></li></ul><h4 id="本质" tabindex="-1">本质 <a class="header-anchor" href="#本质" aria-label="Permalink to &quot;本质&quot;">​</a></h4><p>客户需求 <span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mo>⇒</mo></mrow><annotation encoding="application/x-tex">\\Rightarrow</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.36687em;vertical-align:0em;"></span><span class="mrel">⇒</span></span></span></span> 具体实现</p><p>软件开发的目标是将<strong>问题域</strong>中的概念映射为<strong>运行平台</strong>层面上的概念，把问题域中的处理逻辑映射为运行平台层面上的处理逻辑</p><p>软件开发就是要弥补问题域与运行平台之间的<strong>距离</strong>，人从而在二者之间直接进行映射</p><h4 id="系统建模" tabindex="-1">系统建模 <a class="header-anchor" href="#系统建模" aria-label="Permalink to &quot;系统建模&quot;">​</a></h4><ul><li>概念：不同抽象层术语之间的<strong>映射</strong>，以及不同抽象层处理逻辑之间的<strong>映射</strong>，实现这一映射的基本途径</li><li>内容： <ul><li>一是如何<strong>实现</strong>这样的映射，这是技术层面的问题</li><li>二是如何<strong>管理</strong>这样的映射，以保障映射的有效性和正确性，这是管理层面的问题</li></ul></li></ul><h4 id="模型" tabindex="-1">模型 <a class="header-anchor" href="#模型" aria-label="Permalink to &quot;模型&quot;">​</a></h4><p>简单地说，是<strong>待建系统的任意抽象</strong>，其中包括所有的基本能力、特性或其他一些方面，而没有任何冗余的细节</p><p>进一步说，模型是在特定意图下所确定的角度和抽象层次上<strong>对物理系统的描述</strong>，通常包含对该系统边界的描述、对系统内各模型元素以及它们之间关系的语义描述</p><p>在软件开发中，软件系统模型大体上可分为两类：<strong>概念模型</strong>和<strong>软件模型</strong>。分层的<strong>基本动机</strong>是为了控制开发的复杂性</p><ul><li>在需求层上创建的系统<strong>概念模型</strong>是对客观事物系统的抽象即标识要解决的问题，或称问题定义</li><li>软件模型又可进一步分为<strong>设计模型、实现模型和部署模型</strong>等</li></ul><h2 id="软件需求及其规约" tabindex="-1">软件需求及其规约 <a class="header-anchor" href="#软件需求及其规约" aria-label="Permalink to &quot;软件需求及其规约&quot;">​</a></h2><h3 id="需求及其获取" tabindex="-1">需求及其获取 <a class="header-anchor" href="#需求及其获取" aria-label="Permalink to &quot;需求及其获取&quot;">​</a></h3><p>软件需求是任何软件工程项目的<strong>基础</strong>！</p><h4 id="定义" tabindex="-1">定义 <a class="header-anchor" href="#定义" aria-label="Permalink to &quot;定义&quot;">​</a></h4><p>一个需求描述了待开发产品、系统<strong>功能上的能力、性能参数或其他性质</strong></p><p>5个基本性质</p><ol><li>必要的：该需求是用户所要求的</li><li>无歧义的：该需求只能用一种方式解释</li><li>可测的：该需求是可进行测试的</li><li>可跟踪的：该需求可从一个开发阶段跟踪到另一个阶段</li><li>可测量的：该需求是可测量的</li></ol><h4 id="分类" tabindex="-1">分类 <a class="header-anchor" href="#分类" aria-label="Permalink to &quot;分类&quot;">​</a></h4><table tabindex="0"><thead><tr><th>需求分类</th><th>细分</th><th>描述</th></tr></thead><tbody><tr><td>功能需求</td><td></td><td>规约了系统或系统构件必须执行的能力，是整个需求的<strong>主体</strong></td></tr><tr><td>非功能需求</td><td>性能需求</td><td>规约了一个系统或构件在<strong>性能</strong>方面必须具有的一些特性</td></tr><tr><td></td><td>外部接口需求</td><td>规约了系统或构件<strong>必须与之交互</strong>的用户、硬件、软件或数据库元素，其中也可能规约交互格式、时间或其他因素</td></tr><tr><td></td><td>设计约束</td><td>限制了软件系统或构件的设计方案的<strong>范围</strong>，需考虑<strong>法规政策</strong>、硬件限制等</td></tr><tr><td></td><td>质量属性</td><td>规约了软件产品所具有的一个性质（包括功能和其他需求），必须达到其<strong>质量方面</strong>一个所<strong>期望</strong>的水平</td></tr></tbody></table><h4 id="需求发现技术" tabindex="-1">需求发现技术 <a class="header-anchor" href="#需求发现技术" aria-label="Permalink to &quot;需求发现技术&quot;">​</a></h4><ul><li>自悟：需求人员把自己<strong>作为系统的最终用户</strong>，审视该系统并提出问题：如果是我使用这一系统，则我需要...</li><li>交谈：为确定系统应该提供的功能，需求人员通过<strong>提出问题/用户回答</strong>这一方式，直接询问用户需要的是一个什么样的系统</li><li>观察：通过<strong>观察用户</strong>执行其现行的任务和过程，或通过观察他们如何操作与所期望的新系统有关的现有系统，了解系统运行的环境，特别是了解要建立的新系统与现存系统、过程以及工作方法间必须进行的交互</li><li>小组会：举行客户和开发人员的<strong>联席会议</strong>，与客户组织的一些代表共同开发需求</li><li>提炼：<strong>复审技术文档</strong>，并提取相关信息</li></ul><h3 id="需求规约" tabindex="-1">需求规约 <a class="header-anchor" href="#需求规约" aria-label="Permalink to &quot;需求规约&quot;">​</a></h3><h4 id="定义-1" tabindex="-1">定义 <a class="header-anchor" href="#定义-1" aria-label="Permalink to &quot;定义&quot;">​</a></h4><p>需求规约是一个软件产项/产品/系统<strong>所有需求陈述的正式文档</strong>，它表达了一个软件产项/产品/系统的概念模型</p><p>4个基本性质</p><ul><li>重要性和稳定性程度：按需求的重要性和稳定性对需求进行分级，如基本需求、可选需求和期望需求</li><li>可修改的：在不过多地影响其他需求的前提下，可以容易地修改一个单一需求</li><li>完整的：没有被遗漏的需求</li><li>一致的：不存在互斥的需求</li></ul><h4 id="格式" tabindex="-1">格式 <a class="header-anchor" href="#格式" aria-label="Permalink to &quot;格式&quot;">​</a></h4><div class="language-markdown vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">markdown</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">1.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 引言</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   1.1 目的</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   1.2 范围</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   1.3 定义，缩略语</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   1.4 参考文献</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   1.5 概述</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">2.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 总体描述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   2.1 产品概述</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   2.2 产品功能</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   2.3 用户特性</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   2.4 约束</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">   2.5 假设和依赖</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">3.</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 特定需求 【文档的技术核心】</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">附录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">索引</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><h4 id="表达" tabindex="-1">表达 <a class="header-anchor" href="#表达" aria-label="Permalink to &quot;表达&quot;">​</a></h4><ol><li>非形式化的需求规约： <ul><li>以一种<strong>自然语言</strong>来表达需求规约，如同使用一种自然语言写了一篇文章。适用于规模比较小的、复杂程度不大高的小型软件项目，或在获取SRS（草案）时使用的</li></ul></li><li>半形式化的需求规约： <ul><li>以<strong>半形式化符号体系</strong>（包括术语表、标准化的表达格式等）来表达需求规约，一些有能力的组织针对大型复杂项目，在开发需求文档时往往使用系统化的需求获取、分析技术和工具</li></ul></li><li>形式化的需求规约： <ul><li>以一种基于良构数学概念的符号体系来编制需求规约，一般常伴有解释性注释的支持，主要针对质量（特别是安全性）要求比较高的软件产品/系统或其中某一部分</li></ul></li></ol><h4 id="作用" tabindex="-1">作用 <a class="header-anchor" href="#作用" aria-label="Permalink to &quot;作用&quot;">​</a></h4><ul><li>需求规约是软件开发组织和用户之间一份事实上的<strong>技术合同书</strong>，是<strong>产品功能及其环境的体现</strong></li><li>对于项目的其余大多数工作，需求规约是一个<strong>管理控制点</strong></li><li>对于产品／系统的设计，需求规约是一个<strong>正式的、受控的起始点</strong></li><li>需求规约是创建产品验收测试计划和用户指南的基础，即基于需求规约一般还会产生另外两个文档—— <strong>初始测试计划和用户系统操作描述</strong></li></ul><h2 id="结构化方法" tabindex="-1">结构化方法 <a class="header-anchor" href="#结构化方法" aria-label="Permalink to &quot;结构化方法&quot;">​</a></h2><h3 id="结构化需求分析" tabindex="-1">结构化需求分析 <a class="header-anchor" href="#结构化需求分析" aria-label="Permalink to &quot;结构化需求分析&quot;">​</a></h3><h4 id="基本术语" tabindex="-1">基本术语 <a class="header-anchor" href="#基本术语" aria-label="Permalink to &quot;基本术语&quot;">​</a></h4><ul><li>数据流：是<strong>数据的流动</strong></li><li>加工：是<strong>数据的变换单元</strong>， <ul><li>即接受输入的数据，对其进行处理并产生输出；在使用中，一般给出标识且标识为动宾结构</li></ul></li><li>数据存储：是<strong>数据的静态结构</strong></li><li>数据源、数据潭：数据源是<strong>数据流的起点</strong>，数据潭是<strong>数据流的归宿地</strong><ul><li>数据流和数据潭是系统之外的实体，可以是人、物或者其他软件系统</li></ul></li></ul>`,57)),n(l,{code:`graph LR
A([旅行社])--订票单-->B((预订机票))
Z[[航班目录]]--> B
B--航班-->C((准备机票))
B--费用-->Y((记账))
X[[记账文件]]<-->Y
Y --> D
C--机票-->D([旅客])
`}),a[1]||(a[1]=s('<h4 id="系统功能模型表示" tabindex="-1">系统功能模型表示 <a class="header-anchor" href="#系统功能模型表示" aria-label="Permalink to &quot;系统功能模型表示&quot;">​</a></h4><p>需求分析的首要任务是<strong>建立系统功能模型</strong></p><p>结构化分析方法给出一种能<strong>表达功能模型的工具</strong>，即<strong>数据流图</strong>，简称DFD图</p><ul><li>是一种<strong>描述数据变换</strong>的图形化工具</li><li>是一种<strong>表达待建系统功能模型</strong>的工具</li></ul><p>软件工程分析工具</p><table tabindex="0"><thead><tr><th>工具名称</th><th>工具作用</th></tr></thead><tbody><tr><td>HIPO图</td><td>总体设计的工具</td></tr><tr><td>N-S图</td><td>详细设计的工具</td></tr><tr><td>PAD图</td><td>详细设计的工具</td></tr><tr><td>DFD图</td><td>结构化分析方法的表达功能模型的工具</td></tr></tbody></table><h4 id="建模过程" tabindex="-1">建模过程 <a class="header-anchor" href="#建模过程" aria-label="Permalink to &quot;建模过程&quot;">​</a></h4><p>自顶向下，功能分解（助记：建图、求精、字典、加工）</p>',8)),n(l,{code:`graph LR
subgraph one
A[建立系统环境图] --- A1[确定系统语境]
end
subgraph two
B[自顶向下，逐步求精] --- B1[建立系统的层次数据流图]
end
one-->two
two-->C[定义数据字典]
C-->D[描述加工]
`}),a[2]||(a[2]=s('<p>可采用结构化自然语言、判定表和判定树描述加工</p><h3 id="结构化设计" tabindex="-1">结构化设计 <a class="header-anchor" href="#结构化设计" aria-label="Permalink to &quot;结构化设计&quot;">​</a></h3><p><strong>主要任务</strong>：在需求分析的基础上，定义满足需求所需要的结构，即针对给定的问题，给出该问题的软件解决方案，确定定“怎么做”的问题</p><h4 id="总体设计" tabindex="-1">总体设计 <a class="header-anchor" href="#总体设计" aria-label="Permalink to &quot;总体设计&quot;">​</a></h4><p><strong>基本任务</strong>：把系统的功能需求分配到一个特定软件体系结构中，建立系统的模块结构，只声明其作用或功能</p><p>Yourdon提出的模块结构图</p>',6)),n(r,{lazy:"",src:"/My-Project/images/02333/Yourbon.webp","data-fancybox":"gallery",width:"100%"}),a[3]||(a[3]=t("p",null,"HIPO图【层次图+输入/处理/输出图】",-1)),n(l,{title:"带编号的层次图（H图）",showBorder:!0,code:`graph TD
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
E --> H`}),a[4]||(a[4]=s("<p>其中：【有效的主记录--&gt;更新主记录、有效的事务记录--&gt;更新主记录】这个没在mermaid上画出来，画上去会导致图混乱</p><p>总体设计步骤</p><ul><li>系统的DFD图 <ul><li>变换型数据流图：具有较明显的输入部分和变换（或称主加工）部分之间的界面、变换部分和输出部分之间界面的DFD图</li><li>事务型数据流图：数据到达一个加工T，该加工T根据输入数据的值，在其后的<strong>若干动作序列</strong> （或称一个事务）中<strong>选出一个</strong>来执行。处理T称为事务中心，完成以下任务： <ul><li>接收输入数据</li><li>分析并确定对应的事务</li><li>选取与该事务对应的一条活动路径</li><li>事务型数据流图所描述系统的数据处理模式为<strong>集中一发散式</strong></li></ul></li></ul></li><li>初始的模块结构图【基于 高内聚低耦合 这一软件设计原理模块化】</li><li>最终的、可供详细设计使用的模块结构图</li></ul>",3)),n(p,{title:"交换【事务】设计的基本步骤",flowData:[{id:1,title:"设计准备",description:"复审并精化系统模型"},{id:2,title:"确定边界",description:"交换【确定输入、变换、输出这三部分之间的边界】<br/>事务【确定事务处理中心】"},{id:3,title:"第一级分解",description:"系统模块结构图顶层和第一层的设计"},{id:4,title:"第二级分解",description:"自顶向下，逐步求精"}]}),a[5]||(a[5]=s('<p>变换设计与事务设计的区别及联系</p><table><tr><td></td><td>区别（目的、组成、任务）</td><td>联系</td></tr><tr><td>变换设计</td><td>将变换型数据流图映射为模块结构图<br>组成：获取数据、变换数据（核心）和输出数据<br>设计一个主控模块来协调和控制其他模块，比较机械</td><td rowspan="2">以变换设计为主<br>事务设计为辅</td></tr><tr><td>事务设计</td><td>将事务型数据流图映射为模块结构图<br>事务中心需完成3个任务：接收数据、分析并确定事务和选取活动路径</td><td></td></tr></table><p>耦合</p><ul><li>内容耦合：一个模块<strong>直接修改或操作</strong>另一个模块的数据。耦合程度最高，尽量避免使用</li><li>公共耦合：两个或两个以上的模块共同引用一个<strong>全局数据项</strong></li><li>控制耦合：一个模块通过接口向另一个模块传递<strong>一个控制信号</strong>（如开关、标志），接收信号的模块根据信号值进行适当的动作</li><li>标记耦合：模块A通过接口向模块B和C传递一个<strong>公共参数</strong>，称模块B和C间存在一个标记耦合</li><li>数据耦合：模块之间通过<strong>参数</strong>来传递数据。<strong>耦合程度最低，存在普遍</strong></li></ul><p>内聚</p><ul><li>偶然内聚：<strong>各成分之间不存在关系</strong></li><li>逻辑内聚：各成分逻辑上相关</li><li>时间内聚：各成分因时间因素关联在一起</li><li>过程内聚：模块内部处理成分相关且必须以特定次序处理</li><li>通信内聚：模块的所有程序都操作或生成同一数据集</li><li>顺序内聚：一个成分的输出作为另一个成分的输入</li><li>功能内聚：模块对完成其功能而言是充分必要的（<strong>最理想的</strong>）</li></ul><p>实现高内聚低耦合的<strong>启发式规则</strong>：</p><ul><li>改进软件结构，提高模块独立性；</li><li>力求模块规模适中(不超过60行)</li><li>力求深度、宽度、扇出和扇入适中（扇出3或4） <ul><li><strong>深度</strong>：控制的层数，粗略标志一个系统的规模和复杂程度</li><li><strong>宽度</strong>：同一个层次上模块总数的最大值（受扇出影响）</li><li><strong>扇入</strong>：表明有多少个上级模块直接调用它</li><li><strong>扇出</strong>：一个模块直接调用的下级模块数目</li></ul></li><li>尽力使模块的作用域在其控制域之内 <ul><li><strong>控制域</strong>：模块本身以及所有直接或间接从属于它的模块集合</li><li><strong>作用域</strong>：受该模块内一个判定所影响的所有模块的集合</li></ul></li><li>尽力降低模块接口的复杂度</li><li>力求模块功能可以预测</li></ul><h4 id="详细设计" tabindex="-1">详细设计 <a class="header-anchor" href="#详细设计" aria-label="Permalink to &quot;详细设计&quot;">​</a></h4><ul><li>目标：将总体设计阶段产生的系统<strong>高层结构</strong>映射为以这些术语所表达的<strong>低层结构</strong>，即系统的最终结构</li><li>任务：具体描述模块结构图中的每一个模块，即给出<strong>实现模块功能的实施机制</strong>，包括一组例程和数据结构，从而精确地定义了满足需求规约的结构</li><li>结构化程序设计方法：是一种基于结构的编程方法，采用<strong>顺序结构、选择结构以及重复结构</strong>进行编程，每一结构只允许一个入口和一个出口</li><li>工具：程序流程图（程序框图）、盒图(N-S图)、PAD图、类程序设计语言PDL</li></ul><h4 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h4>',11)),n(l,{code:`graph TB
A[结构化设计工具] --> B[总体设计工具]
A --> C[详细设计工具]
B--> D1[模块结构图]
B --> D2[层次图]
B--> D3[HIPO图]
C--> E1[程序流程图]
C--> E2[盒图]
C--> E3[PAD图]
C--> E4[PDL]`}),a[6]||(a[6]=s('<h2 id="面向对象方法-uml" tabindex="-1">面向对象方法 UML <a class="header-anchor" href="#面向对象方法-uml" aria-label="Permalink to &quot;面向对象方法 UML&quot;">​</a></h2><h3 id="uml术语表" tabindex="-1">UML术语表 <a class="header-anchor" href="#uml术语表" aria-label="Permalink to &quot;UML术语表&quot;">​</a></h3><h4 id="表达客观事物的术语" tabindex="-1">表达客观事物的术语 <a class="header-anchor" href="#表达客观事物的术语" aria-label="Permalink to &quot;表达客观事物的术语&quot;">​</a></h4><p>8个术语：<strong>类与对象、接口、协作、用况、主动类、构件、制品、节点</strong></p><h5 id="类与对象" tabindex="-1">类与对象 <a class="header-anchor" href="#类与对象" aria-label="Permalink to &quot;类与对象&quot;">​</a></h5>',5)),n(l,{title:"类与对象",showBorder:!0,code:`classDiagram
Animal : +int age
Animal : #String gender
Animal : -sex
Animal : ~name
Animal: +isMammal()
Animal: +mate()
`}),a[7]||(a[7]=s('<ul><li><code>+</code> Public 公共的</li><li><code>-</code> Private 私有的</li><li><code>#</code> Protected 受保护的</li><li><code>~</code> Package/Internal 包/内部的</li></ul><h5 id="接口" tabindex="-1">接口 <a class="header-anchor" href="#接口" aria-label="Permalink to &quot;接口&quot;">​</a></h5><p>接口是<strong>操作的一个集合</strong>，其中每个操作描述了类、构件或子系统的一个服务</p>',3)),n(r,{lazy:"",class:"my-2",src:"/My-Project/images/02333/interface.webp","data-fancybox":"gallery",width:"100%"}),a[8]||(a[8]=s('<h5 id="协作-用况-主动类-构件-制品-节点" tabindex="-1">协作 &amp; 用况 &amp; 主动类 &amp; 构件 &amp; 制品 &amp;节点 <a class="header-anchor" href="#协作-用况-主动类-构件-制品-节点" aria-label="Permalink to &quot;协作 &amp; 用况 &amp; 主动类 &amp; 构件 &amp; 制品 &amp;节点&quot;">​</a></h5><table tabindex="0"><thead><tr><th>术语</th><th>说明</th></tr></thead><tbody><tr><td>协作</td><td>是一个<strong>交互</strong>，涉及交互的三要素：<strong>交互各方、交互方式以及交互内容</strong>，交互各方之间的相互作用，提供了某种协作性行为</td></tr><tr><td>用况</td><td>是<strong>对一组动作序列的描述</strong>，系统执行这些动作应产生对特定参与者有值的、可观察到的结果</td></tr><tr><td>主动类</td><td>是一种<strong>至少具有一个进程或线程</strong>的类</td></tr><tr><td>构件</td><td>是系统设计中的一种<strong>模块化部件</strong>，通过外部接口隐藏了它的内部实现</td></tr><tr><td>制品</td><td>是系统中包含物理信息的、可替代的物理部件</td></tr><tr><td>节点</td><td>是运行时存在的<strong>物理元素</strong>，通常表示一种具有记忆能力和处理能力的计算机资源</td></tr></tbody></table><h4 id="表达关系的术语" tabindex="-1">表达关系的术语 <a class="header-anchor" href="#表达关系的术语" aria-label="Permalink to &quot;表达关系的术语&quot;">​</a></h4><p>4个术语： <strong>关联、泛化、细化、依赖</strong></p><h5 id="关联" tabindex="-1">关联 <a class="header-anchor" href="#关联" aria-label="Permalink to &quot;关联&quot;">​</a></h5><p>是<strong>类目之间的一种结构关系</strong>，是对一组具有相同结构、相同链的描述</p><ul><li>链是对象之间具有特定语义关系的抽象，实现之后的链通常称为对象之间的连接</li></ul><table tabindex="0"><thead><tr><th>术语</th><th>说明</th></tr></thead><tbody><tr><td>关联名</td><td>用于描述关联的一定内涵</td></tr><tr><td>导航</td><td>对于一个给定的类目，可以找到与之关联的另一个类目</td></tr><tr><td>角色</td><td>是关联一端的类目对两一段的类目的一种呈现</td></tr><tr><td>可见性</td><td><code>+ # - ~</code></td></tr><tr><td>多重性</td><td>类中对象参与一个关联的数目</td></tr><tr><td>限定符</td><td>是一个关联的属性或属性表，这些属性的值将与该关联相关类的对象集做了一个划分</td></tr><tr><td>聚合</td><td>通过一个类是另一类的一部分这一性质，对关联集进行分类，凡满足这一性质的关联，都称为一个聚合<br>表达的是一种“整体/部分”的关系。</td></tr><tr><td>组合</td><td>是聚合的一种特殊形式，如果在一个时间段内，整体类的实例中至少包含一个部分类的实例，并且该整体类的实例负责创建<br>和消除部分类的实例，那么这样的聚合称为组合</td></tr><tr><td>关联类</td><td>一种具有关联和类特性的模型元素。一个关联类可以被看做一个关联但还有类的特性，或被看做一个类但有关联的特性。</td></tr><tr><td>约束</td><td>有序：表明类中实例是有序的<br>无重复对象：表明类中对象是没有重复的<br>有重复对象：表明类中对象是有重复的<br>有序集合：表明类中对象有序且重复<br>列表或序列：表明类中对象有序但可重复<br>只读：表明一旦一个链由于对象而被填加到所参与的关联中<br>即作为该关联的一个实例时，该链不能修改和删除</td></tr></tbody></table><h5 id="泛化" tabindex="-1">泛化 <a class="header-anchor" href="#泛化" aria-label="Permalink to &quot;泛化&quot;">​</a></h5><p>是<strong>一般性类目</strong>（称为超类或父类）和它的较为<strong>特殊性类目</strong>（称为子类）之间的一种<strong>关系</strong></p><table tabindex="0"><thead><tr><th>约束</th><th>说明</th></tr></thead><tbody><tr><td>完整</td><td>表明已经在模型中给出了泛化中的所有子类，尽管在表达的图形中有所省略，但也不允许增加新的子类</td></tr><tr><td>不完整</td><td>表明在模型中没有给出泛化中的所有子类，因此可以增加新的子类</td></tr><tr><td>互斥</td><td>表明父类的对象最多允许该泛化中的一个子类作为它的类型</td></tr><tr><td>重叠</td><td>表明父类的对象可能具有该泛化中的多个子类作为它的类型</td></tr></tbody></table><h5 id="细化-依赖" tabindex="-1">细化 &amp; 依赖 <a class="header-anchor" href="#细化-依赖" aria-label="Permalink to &quot;细化 &amp; 依赖&quot;">​</a></h5><table tabindex="0"><thead><tr><th>术语</th><th>说明</th></tr></thead><tbody><tr><td>细化</td><td>是类目之间的语义关系，其中一个类目规约了保证另一个类目执行的契约</td></tr><tr><td>依赖</td><td>是一种<strong>使用关系</strong>，用于描述一个类目使用另一类目的信息和服务</td></tr></tbody></table><h4 id="表达组合信息的术语——包" tabindex="-1">表达组合信息的术语——包 <a class="header-anchor" href="#表达组合信息的术语——包" aria-label="Permalink to &quot;表达组合信息的术语——包&quot;">​</a></h4><p>为控制信息组织的复杂性，UML提供了组织信息的一种通用机制一包，支持形成一些可管理的部分。换言之，包可以作为“模块化”和“构件化”的一种机制</p><h3 id="uml的模型表达格式" tabindex="-1">UML的模型表达格式 <a class="header-anchor" href="#uml的模型表达格式" aria-label="Permalink to &quot;UML的模型表达格式&quot;">​</a></h3><h4 id="类图" tabindex="-1">类图 <a class="header-anchor" href="#类图" aria-label="Permalink to &quot;类图&quot;">​</a></h4><p>类图是可视化地表达系统<strong>静态结构模型</strong>的工具，通常包含类、 接口、关联、泛化和依赖关系等</p>',18)),n(r,{lazy:"",src:"/My-Project/images/02333/classGraph.webp","data-fancybox":"gallery",width:"100%"}),a[9]||(a[9]=s(`<ul><li>组合（实心菱形）</li><li>聚合（空心菱形）</li><li>依赖（虚线）</li></ul><table tabindex="0"><thead><tr><th>多重性表达</th><th>含义说明</th><th>举例</th></tr></thead><tbody><tr><td>1</td><td>精确1个</td><td>每个借阅记录（Loan）必须属于 1个 读者（Member）</td></tr><tr><td>0..1</td><td>0个或1个</td><td>一个人可能 有或没有 驾照</td></tr><tr><td>* 或 0..*</td><td>零个或多个（任意数量）</td><td>一个图书馆可以有 任意数量的图书</td></tr><tr><td>1..*</td><td>至少1个，可以更多</td><td>一个班级必须有 至少1名学生，可以更多</td></tr><tr><td>2..5</td><td>2到5个之间</td><td>一个双人游戏房间必须有 2到5人</td></tr></tbody></table><details class="details custom-block"><summary>PlantUML类图代码 <a href="https://www.plantuml.com/plantuml/uml" target="_blank" rel="noreferrer">在线预览</a></summary><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>&#39; 设置中文字体（可选）</span></span>
<span class="line"><span>skinparam defaultFontName SimSun</span></span>
<span class="line"><span>skinparam classAttributeIcon false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 定义类</span></span>
<span class="line"><span>class Library {</span></span>
<span class="line"><span>    - name: String</span></span>
<span class="line"><span>    - address: String</span></span>
<span class="line"><span>    + addBook(book: Book): void</span></span>
<span class="line"><span>    + removeBook(book: Book): void</span></span>
<span class="line"><span>    + registerMember(m: Member): void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Member {</span></span>
<span class="line"><span>    - memberId: String</span></span>
<span class="line"><span>    - name: String</span></span>
<span class="line"><span>    - phone: String</span></span>
<span class="line"><span>    + borrowBook(): Loan</span></span>
<span class="line"><span>    + returnBook(): void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Loan {</span></span>
<span class="line"><span>    - loanDate: Date</span></span>
<span class="line"><span>    - dueDate: Date</span></span>
<span class="line"><span>    + borrow(): void</span></span>
<span class="line"><span>    + returnBook(): void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class Book {</span></span>
<span class="line"><span>    - isbn: String</span></span>
<span class="line"><span>    - title: String</span></span>
<span class="line"><span>    - author: String</span></span>
<span class="line"><span>    - status: String</span></span>
<span class="line"><span>    + getTitle(): String</span></span>
<span class="line"><span>    + setStatus(s: String): void</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 定义关系</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Library 与 Book 之间是组合关系：图书属于图书馆，图书馆销毁则图书也应被管理清除（强生命周期依赖）</span></span>
<span class="line"><span>Library &quot;1&quot; *-- &quot;0..*&quot; Book : contains &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Library 与 Member 之间是聚合关系：读者可以独立存在，不是图书馆的组成部分</span></span>
<span class="line"><span>Library &quot;1&quot; o-- &quot;0..*&quot; Member : has &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Member 与 Loan 之间是组合关系：借阅记录由读者创建，通常随读者删除而清除</span></span>
<span class="line"><span>Member &quot;1&quot; *-- &quot;0..*&quot; Loan : manages &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; Member 和 Book 之间是依赖关系：借书时需要使用 Book 对象</span></span>
<span class="line"><span>Member ..&gt; Book : borrows &gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 可选：添加注释说明组合 vs 聚合</span></span>
<span class="line"><span>note right of Library::contains</span></span>
<span class="line"><span>    组合（Composition）：</span></span>
<span class="line"><span>    图书馆“拥有”图书，</span></span>
<span class="line"><span>    图书生命周期依赖于图书馆。</span></span>
<span class="line"><span>    若图书馆关闭，图书也被清空。</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of Library::has</span></span>
<span class="line"><span>    聚合（Aggregation）：</span></span>
<span class="line"><span>    读者注册到图书馆，</span></span>
<span class="line"><span>    但读者可独立存在。</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of Member::manages</span></span>
<span class="line"><span>    组合（Composition）：</span></span>
<span class="line"><span>    借阅记录完全属于读者，</span></span>
<span class="line"><span>    删除读者时应删除其所有借阅记录。</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br></div></div></details><h4 id="用况图" tabindex="-1">用况图 <a class="header-anchor" href="#用况图" aria-label="Permalink to &quot;用况图&quot;">​</a></h4><p>用况图是一种表达<strong>系统功能模型</strong>的图形化工具</p><p>一个用况图通常包含6个模型元素：主题、用况、参与者、关联、泛化、依赖</p><table tabindex="0"><thead><tr><th>模型元素</th><th>说明</th></tr></thead><tbody><tr><td>主题</td><td>是由一组用况所描述的一个类，通常是一个系统或子系统</td></tr><tr><td>参与者</td><td>表达了一组高内聚的角色，当用户与用况交互时，该用户扮演这组角色</td></tr><tr><td>用况</td><td>外延：，用况表达了参与者使用系统的一种方式<br>内涵：一个用况规约了系统可以执行的一个动作序列</td></tr><tr><td>关联</td><td>是一种参与关系，即参与者参与一个用况。用况之间的3种关系：泛化、扩展、包含</td></tr><tr><td>泛化</td><td>指用况A和用况B之间具有一般/特殊关系</td></tr><tr><td>依赖</td><td>包含：是指用况A的一个实例包含用况B所规约的行为<br>扩展：是指一个用况A的实例在特定的条件下可以由另一用况B所规约的行为予以扩展，并依据定义的扩展点位置，B的行为被插入到A的实例中</td></tr></tbody></table>`,7)),n(r,{lazy:"",src:"/My-Project/images/02333/userUml.webp","data-fancybox":"gallery",width:"100%"}),a[10]||(a[10]=s('<ul><li>关联关系（实线箭头）</li><li>泛化关系（空心箭头）</li></ul><h5 id="作用-1" tabindex="-1">作用 <a class="header-anchor" href="#作用-1" aria-label="Permalink to &quot;作用&quot;">​</a></h5><ul><li>可以为系统建模，描述软件系统行为的功能结构</li><li>可以对业务建模，描述企业或组织的业务过程结构</li></ul><h4 id="状态图" tabindex="-1">状态图 <a class="header-anchor" href="#状态图" aria-label="Permalink to &quot;状态图&quot;">​</a></h4><p>是显示一个<strong>状态机</strong>的图，其中强调了<strong>从一个状态到另一状态</strong>的控制流</p>',5)),n(r,{lazy:"",src:"/My-Project/images/02333/statusUml.webp","data-fancybox":"gallery",width:"80%"}),a[11]||(a[11]=s(`<table tabindex="0"><thead><tr><th>元素</th><th>图形表示</th><th>含义</th></tr></thead><tbody><tr><td>初始状态</td><td>实心圆 ●</td><td>对象生命周期开始</td></tr><tr><td>最终状态</td><td>内黑圆圈 ◉</td><td>对象生命周期结束</td></tr><tr><td>状态</td><td>圆角矩形</td><td>对象在某一时刻的条件或状况</td></tr><tr><td>转换</td><td>带箭头的线</td><td>从一个状态到另一个状态的变化</td></tr><tr><td>事件</td><td>转换线上文字（如“支付成功”）</td><td>触发状态变化的动作或信号</td></tr><tr><td>监护条件</td><td>[条件]（本例未用）</td><td>条件满足才可转换，如 [金额&gt;0]</td></tr></tbody></table><details class="details custom-block"><summary>PlantUML类图代码 <a href="https://www.plantuml.com/plantuml/uml" target="_blank" rel="noreferrer">在线预览</a></summary><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>&#39; 设置中文字体（可选）</span></span>
<span class="line"><span>skinparam defaultFontName SimSun</span></span>
<span class="line"><span>skinparam state {</span></span>
<span class="line"><span>    BackgroundColor&lt;&lt;initial&gt;&gt; LightGreen</span></span>
<span class="line"><span>    BackgroundColor&lt;&lt;final&gt;&gt; LightGray</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 定义状态图标题</span></span>
<span class="line"><span>title 订单状态图 - UML State Diagram</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 定义所有状态（使用中文显示名 + 英文别名）</span></span>
<span class="line"><span>state &quot;待支付&quot; as pendingPayment</span></span>
<span class="line"><span>state &quot;已支付&quot; as paid</span></span>
<span class="line"><span>state &quot;已发货&quot; as shipped</span></span>
<span class="line"><span>state &quot;已完成&quot; as completed</span></span>
<span class="line"><span>state &quot;已取消&quot; as cancelled</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 初始状态 → 待支付</span></span>
<span class="line"><span>[*] --&gt; pendingPayment : 提交订单</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 状态转换</span></span>
<span class="line"><span>pendingPayment --&gt; paid : 支付成功</span></span>
<span class="line"><span>paid --&gt; shipped : 发货</span></span>
<span class="line"><span>shipped --&gt; completed : 确认收货</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 取消路径</span></span>
<span class="line"><span>pendingPayment --&gt; cancelled : 取消订单</span></span>
<span class="line"><span>paid --&gt; cancelled : 申请退款并批准</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 最终状态</span></span>
<span class="line"><span>completed --&gt; [*]</span></span>
<span class="line"><span>cancelled --&gt; [*]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 添加注释说明</span></span>
<span class="line"><span>note right of pendingPayment</span></span>
<span class="line"><span>    订单已创建但未支付</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of paid</span></span>
<span class="line"><span>    款项已到账</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of shipped</span></span>
<span class="line"><span>    物流已发出</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div></details><h4 id="顺序图" tabindex="-1">顺序图 <a class="header-anchor" href="#顺序图" aria-label="Permalink to &quot;顺序图&quot;">​</a></h4><p>是一种<strong>交互图</strong>，即由一组对象以及按时序组织的对象之间的关系组成，其中还包含这些对象之间所发送的消息</p>`,4)),n(r,{lazy:"",src:"/My-Project/images/02333/orderUml.webp","data-fancybox":"gallery",width:"100%"}),a[12]||(a[12]=s(`<details class="details custom-block"><summary>PlantUML类图代码 <a href="https://www.plantuml.com/plantuml/uml" target="_blank" rel="noreferrer">在线预览</a></summary><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>@startuml</span></span>
<span class="line"><span>&#39; 设置中文字体和兼容性</span></span>
<span class="line"><span>skinparam defaultFontName SimSun</span></span>
<span class="line"><span>skinparam sequence {</span></span>
<span class="line"><span>ArrowColor #003399</span></span>
<span class="line"><span>ActivationBackground LightBlue</span></span>
<span class="line"><span>ParticipantPadding 20</span></span>
<span class="line"><span>SpaceWidth 50</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 定义参与者（对象）</span></span>
<span class="line"><span>actor &quot;顾客&quot; as Customer</span></span>
<span class="line"><span>participant &quot;购物车系统&quot; as ShoppingCart</span></span>
<span class="line"><span>participant &quot;订单系统&quot; as OrderSystem</span></span>
<span class="line"><span>participant &quot;库存系统&quot; as InventorySystem</span></span>
<span class="line"><span>participant &quot;支付网关&quot; as PaymentGateway</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 标题</span></span>
<span class="line"><span>title 顺序图：顾客下单流程</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 交互消息</span></span>
<span class="line"><span>Customer -&gt; ShoppingCart: 提交订单请求</span></span>
<span class="line"><span>activate ShoppingCart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ShoppingCart -&gt; OrderSystem: 创建订单(商品列表)</span></span>
<span class="line"><span>activate OrderSystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OrderSystem -&gt; InventorySystem: 检查库存(商品ID)</span></span>
<span class="line"><span>activate InventorySystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>InventorySystem --&gt; OrderSystem: 库存充足</span></span>
<span class="line"><span>deactivate InventorySystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OrderSystem -&gt; PaymentGateway: 发起支付(金额)</span></span>
<span class="line"><span>activate PaymentGateway</span></span>
<span class="line"><span></span></span>
<span class="line"><span>PaymentGateway --&gt; OrderSystem: 支付成功</span></span>
<span class="line"><span>deactivate PaymentGateway</span></span>
<span class="line"><span></span></span>
<span class="line"><span>OrderSystem --&gt; ShoppingCart: 订单创建成功</span></span>
<span class="line"><span>deactivate OrderSystem</span></span>
<span class="line"><span></span></span>
<span class="line"><span>ShoppingCart --&gt; Customer: 下单成功，等待发货</span></span>
<span class="line"><span>deactivate ShoppingCart</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&#39; 可选：添加注释</span></span>
<span class="line"><span>note right of PaymentGateway</span></span>
<span class="line"><span>调用第三方支付平台\\n如支付宝、微信</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span></span></span>
<span class="line"><span>note right of InventorySystem</span></span>
<span class="line"><span>检查商品是否可售\\n数量是否足够</span></span>
<span class="line"><span>end note</span></span>
<span class="line"><span>@enduml</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div></details><table tabindex="0"><thead><tr><th>元素</th><th>图形表示</th><th>含义</th></tr></thead><tbody><tr><td>对象</td><td>矩形框</td><td>参与交互的类或系统组件</td></tr><tr><td>生命线</td><td>垂直虚线</td><td>对象在时间上的存在</td></tr><tr><td>激活条</td><td>垂直矩形</td><td>对象正在执行操作</td></tr><tr><td>消息</td><td>水平箭头</td><td>对象间的通信</td></tr><tr><td>- 同步消息</td><td>实线 + 实心箭头</td><td>调用后等待返回</td></tr><tr><td>- 返回消息</td><td>虚线 + 空心箭头</td><td>返回结果</td></tr><tr><td>自关联消息</td><td>自己调用自己</td><td>如循环或内部处理</td></tr></tbody></table><h2 id="面向对象方法-rup" tabindex="-1">面向对象方法 Rup <a class="header-anchor" href="#面向对象方法-rup" aria-label="Permalink to &quot;面向对象方法 Rup&quot;">​</a></h2><p>RUP（Rational Unified Process 统一开发过程）的突出特点：<strong>以一种用况为驱动的、以体系结构为中心的迭代增量式开发</strong></p><h3 id="rup的特点" tabindex="-1">RUP的特点 <a class="header-anchor" href="#rup的特点" aria-label="Permalink to &quot;RUP的特点&quot;">​</a></h3><h4 id="以用况为驱动" tabindex="-1">以用况为驱动 <a class="header-anchor" href="#以用况为驱动" aria-label="Permalink to &quot;以用况为驱动&quot;">​</a></h4><p>指在系统的生存周期中，<strong>以用况作为基础</strong>，驱动系统有关人员对要建立系统的功能需求进行交流， <strong>驱动系统分析、设计、实现和测试等活动</strong></p><p>用况是分析、设计、实现和测试的<strong>基本输入</strong>，分析、设计、实现和测试的结果都可以跟踪到相应的情况</p><h4 id="以体系结构为中心" tabindex="-1">以体系结构为中心 <a class="header-anchor" href="#以体系结构为中心" aria-label="Permalink to &quot;以体系结构为中心&quot;">​</a></h4><p>指在系统的生存周期中，开发的任何阶段都要<strong>给出相关模型视角下有关体系结构的描述</strong>，作为构思、构造、管理和改善系统的主要制品</p><h4 id="迭代、增量式开发" tabindex="-1">迭代、增量式开发 <a class="header-anchor" href="#迭代、增量式开发" aria-label="Permalink to &quot;迭代、增量式开发&quot;">​</a></h4><p>指通过开发活动的迭代，<strong>不断地产生相应的增量</strong></p><p>在RUP中，规定了4个开发阶段：<strong>初始阶段、精化阶段、构造阶段</strong>和<strong>移交阶段</strong></p><h3 id="核心工作流" tabindex="-1">核心工作流 <a class="header-anchor" href="#核心工作流" aria-label="Permalink to &quot;核心工作流&quot;">​</a></h3><h4 id="需求获取" tabindex="-1">需求获取 <a class="header-anchor" href="#需求获取" aria-label="Permalink to &quot;需求获取&quot;">​</a></h4><p>工具：采用<strong>Use Case</strong>（用例）技术获取需求</p><p>目标：使用UML中的用况、参与者及依赖等术语<strong>抽象客观实际问题</strong>，形成系统的<strong>需求获取模型</strong> —— 一种特定的<strong>系统/产品模型</strong> ，并产生该模型视角下的体系结构描述。</p><p>RUP要做的工作</p><table tabindex="0"><thead><tr><th>要做的工作</th><th>说明</th><th>产生的制品</th></tr></thead><tbody><tr><td>1 列出候选的需求</td><td>从客(用)户、计划(开发)者的想法和意愿中搜取特征形成特征表，特征是一个新的项及其简要描述</td><td>特征列表</td></tr><tr><td>2 理解系统语境</td><td>业务用况模型：用用况图表达<br>为精化业务用况模型中的每一个业务用况，表达其的3个术语：<strong>工作人员、业务实体、工作单元</strong></td><td>领域模型/业务模型</td></tr><tr><td>3 捕获功能需求</td><td><strong>目标</strong>：<strong>创建系统的用况模型</strong>，以表达客户认可的需求——系统必须满足的条件和能力<br>作为客户和开发人员间的一种共识<br><br><strong>用况模型</strong>：系统的一种<strong>概念模型</strong>，是对系统功能的抽象，包括系统参与者、系统用况以及它们之间的关系</td><td>用况模型</td></tr><tr><td>4 捕获非功能需求</td><td></td><td>补充需求<br>针对些特定需求的用况</td></tr></tbody></table><h4 id="需求分析" tabindex="-1">需求分析 <a class="header-anchor" href="#需求分析" aria-label="Permalink to &quot;需求分析&quot;">​</a></h4><ul><li>目标：在系统<strong>用况模型的基础上</strong>，创建<strong>系统分析模型</strong>及在该分析模型视角下的<strong>体系结构描述</strong></li><li>分析模型：是系统的一种<strong>概念模型</strong>，解决系统用况模型中存在的二义性和不一致性等问题，以一种系统化的形式准确表达用户需求 <ul><li>分析模型由<strong>分析系统</strong>定义，该分析系统包含<strong>一组具有层次结构的包</strong>，每个包中可包含<strong>一些分析类和用况细化</strong>[分析]</li></ul></li><li>用况细化：一个<strong>协作</strong>。针对一个用况，其行为用<strong>多个分析类间相互作用来细化</strong></li><li>分析包：一种<strong>控制信息组织复杂性的机制</strong>，提供分析制品的一种组织手段，形成可管理的部分</li><li>分析的主要活动： <ul><li>体系结构分析：通过标识分析包和分析类，建立分析模型和体系结构“骨架”，标识有关分析包和分析类的特定需求</li><li>用况分析： <ul><li>标识那些在用况事件执行流中所需要的分析类和对象</li><li>将用况的行为，分布到参与交互的各个分析对象</li><li>捕获用况细化上的特定需求</li></ul></li><li>类的分析： <ul><li>标识并维护分析类的责任</li><li>基于它们在用况细化中的角色，标识并维护分析类的属性和关系</li><li>捕获分析类细化中的特殊需求</li></ul></li><li>包的分析： <ul><li>确保分析包含尽可能与其他包相对独立</li><li>确保分析包实现了它的目标，即细化了某些领域类或用况</li><li>描述依赖，以利于可以估计未来的变化</li></ul></li></ul></li></ul><table><thead><tr><td rowspan="3">分析类</td><td>边界类</td><td>封装一些重要的通信接口和用户界面机制</td></tr><tr><td>实体类</td><td>封装问题域中的一个重要现象</td></tr><tr><td>控制类</td><td>封装一些重要的定序</td></tr></thead></table><h4 id="设计" tabindex="-1">设计 <a class="header-anchor" href="#设计" aria-label="Permalink to &quot;设计&quot;">​</a></h4><p>目标：定义满足系统/产品分析模型所规约需求的软件结构</p><ul><li>设计类：对系统实现中<strong>一个类</strong>或类似构造的一个无缝<strong>抽象</strong></li><li>用况细化[设计]：设计模型中的一个<strong>协作</strong>，使用设计类及其对象，描述一个<strong>特定用况是如何细化</strong>、执行的。表达协作的工具：类图、交互图和正文事件流等</li><li>设计子系统：包含设计类，用况细化，接口，及其他子系统，通过对其操作来显示功能</li><li>接口： <ul><li>用于规约由设计类和设计子系统提供的操作</li><li>为设计类/设计子系统提供一种<strong>分离功能</strong>的手段</li><li>一个接口的重要关联是<strong>细化</strong></li></ul></li></ul><p>设计的主要活动</p><ul><li>体系结构设计 <ul><li>创建设计模型和部署模型，及其视角下的体系结构描述</li></ul></li><li>用况的设计 <ul><li>分析模型的用况细化[分析]是该活动的输入，对应输出用况细化[设计]</li></ul></li><li>类的设计 <ul><li>完成用况细化[设计]中每一类的角色设计，完成有关每一类的非功能需求设计</li></ul></li><li>子系统设计 <ul><li>确保子系统尽可能独立于其他子系统或其接口</li><li>确保子系统提供正确接口</li><li>确保子系统实现了目标，即给出该子系统提供的接口定义的操作的细化</li></ul></li></ul><table tabindex="0"><thead><tr><th>分析模型</th><th>设计模型</th></tr></thead><tbody><tr><td>概念模型，对系统的抽象，无实现细节</td><td>软件模型，对系统的抽象，无实现细节</td></tr><tr><td>可用于不同设计</td><td>特定于一个实现</td></tr><tr><td>用3个衍型类：控制类、实体类、边界类</td><td>用多个衍型类，依赖于实现语言</td></tr><tr><td>几乎非形式化</td><td>较形式化</td></tr><tr><td>开发费用少（相对于设计是1:5）</td><td>开发费用高（相对于分析是5:1）</td></tr><tr><td>结构层次少</td><td>结构层次多</td></tr><tr><td>动态的，很少关注定序</td><td>动态的，更多关注定序</td></tr><tr><td>概括地给出了系统设计，包括系统的体系结构</td><td>表明了系统设计，包括设计视角下的系统体系结构</td></tr><tr><td>软件生存周期中不能修改、增加等</td><td>软件生存周期中应维护</td></tr><tr><td>为构建系统包括创建设计模型，定义一个结构是一个基本输入</td><td>构建系统时，尽可能保留分析模型所定义结构</td></tr></tbody></table><h4 id="实现-测试" tabindex="-1">实现&amp;测试 <a class="header-anchor" href="#实现-测试" aria-label="Permalink to &quot;实现&amp;测试&quot;">​</a></h4><p>RUP实现的目标：</p><ul><li>基于设计类和子系统生成构件</li><li>对构件进行单元测试、集成、连接</li><li>把可执行的构件映射到部署模型</li></ul><p>RUP实现的活动</p><table tabindex="0"><thead><tr><th>活动步骤</th><th>输入</th><th>执行者</th><th>输出</th></tr></thead><tbody><tr><td>设计模型<br>部署模型<br>体系结构描述<br>[设计模型、部署模型角度]</td><td>实现体体系结构</td><td>体系结构设计者</td><td>构件[概述]<br>体系结构<br>描述<br>[实现模型、部署、模型角度]</td></tr><tr><td>补充需求<br>用况模型<br>设计模型<br>实现模型[当前建造]</td><td>集成系统</td><td>系统集成者</td><td>集成建造计划<br>实现模型[连续的建造]</td></tr><tr><td>集成建造计划<br>体系结构描述<br>[实现模型角度]<br>设计子系统[已设计]<br>接口[已设计]</td><td>实现子系统</td><td>构件工程师</td><td>实现子系统[建造完成]<br>接口[建造完成]</td></tr><tr><td>设计类[已设计]<br>接口[由设计类提供]</td><td>实现类</td><td>构件工程师</td><td>构件[完成]</td></tr><tr><td>构件[完成]、接口</td><td>完成单元测试</td><td>构件工程师</td><td>构件[已完成单元测试]</td></tr></tbody></table><h2 id="软件测试" tabindex="-1">软件测试 <a class="header-anchor" href="#软件测试" aria-label="Permalink to &quot;软件测试&quot;">​</a></h2><h3 id="测试目标-过程" tabindex="-1">测试目标&amp;过程 <a class="header-anchor" href="#测试目标-过程" aria-label="Permalink to &quot;测试目标&amp;过程&quot;">​</a></h3><p>软件评估：<strong>静态评估</strong>（评审、走查和形式化证明）、<strong>动态评估</strong> (软件测试)</p><p>测试目标：首要目标：预防错误（几乎不可实现），第二目标：发现错误</p>`,37)),n(p,{title:"软件测试所经历的阶段",flowData:[{id:1,title:"No.1",description:"软件测试和软件调试无区别"},{id:2,title:"No.2",description:"测试为表明软件能正常工作"},{id:3,title:"No.3",description:"测试为表明软件不能正常工作"},{id:4,title:"No.4",description:"测试仅为了将已察觉的错误风险减少到可接受的程度"},{id:5,title:"No.5",description:"测试不仅是一种行为，而是一种理念，即测试是产生低风险软件的一种训练"}]}),a[13]||(a[13]=s('<p>标准概念：使用<strong>人工或自动</strong>手段，运行或测定某个系统的过程，目的是检验它是否满足规定的需求，清楚了解预期结果与实际结果间的差异</p><table tabindex="0"><thead><tr><th>软件测试（Test）</th><th>软件调试（Debug）</th></tr></thead><tbody><tr><td>从侧面证明程序员的失败</td><td>为证明程序员的正确</td></tr><tr><td>从已知条件开始，使用预先定义的程序且有预知结果，不可预见的仅是程序是否通过测试</td><td>以不可知的内部条件开始，除统计性 调试外，结果不可预见</td></tr><tr><td>有计划、要进行测试设计</td><td>不受时间约束</td></tr><tr><td>一个发现错误、改正错误、重新调试的过</td><td>一个推理过程</td></tr><tr><td>执行有规程</td><td>执行要求程序要进行必要推理</td></tr><tr><td>由独立的组在不了解软件设计条件下完成</td><td>必须由了解详细设计的程序员完成</td></tr><tr><td>多数测试的执行和设计可由工具支持</td><td>程序员能利用的工具主要是调试器</td></tr></tbody></table><p>软件测试是一个有程序的过程，包括测试设计、测试执行、测试结果比较等</p><h3 id="软件测试技术" tabindex="-1">软件测试技术 <a class="header-anchor" href="#软件测试技术" aria-label="Permalink to &quot;软件测试技术&quot;">​</a></h3><h4 id="路径测试技术" tabindex="-1">路径测试技术 <a class="header-anchor" href="#路径测试技术" aria-label="Permalink to &quot;路径测试技术&quot;">​</a></h4><ul><li>用<strong>控制流程图</strong>表达被测程序模型，揭示程序的<strong>控制结构</strong><ul><li>控制流程图：表示程序控制结构的图形化工具</li></ul></li><li>合理选择一组穿过程序的路径，达到某种测试度量</li></ul>',6)),n(r,{lazy:"",src:"/My-Project/images/02333/pathTest.webp","data-fancybox":"gallery",width:"100%"}),a[14]||(a[14]=s('<ul><li>过程块：没被判定和（或）被节点分开的一组程序语句</li><li>判定：一个程序点，此处控制流出现分叉</li><li>节点：一个程序点，此处控制流进行汇合</li><li>链：判定、节点、过程块之间一种具有特定语义的关系</li><li>路径：一个有程序入口和出口的链的集合</li><li>路径命名方式：用相关的链命名</li></ul><table tabindex="0"><thead><tr><th></th><th>概念</th><th>特点</th></tr></thead><tbody><tr><td>语句覆盖</td><td>至少执行程序中所有语句一次</td><td>度量最低</td></tr><tr><td>路径覆盖</td><td>执行所有可能穿过程序控制流程的路径</td><td>度量最强，不可实现</td></tr><tr><td>分支覆盖</td><td>确保每个判断的“真”和“假”结果都至少被执行一次</td><td></td></tr><tr><td>条件覆盖</td><td>确保每个布尔子条件（如 A &gt; 0、B == 1）都取过 true 和 false</td><td></td></tr><tr><td>条件组合覆盖</td><td>覆盖所有子条件的可能组合（如两个条件有 2²=4 种组合）检测条件之间的相互影响</td><td></td></tr></tbody></table><blockquote><p><em>语句覆盖 &lt; 分支 &lt; 条件 &lt; 条件组合 &lt; 路径</em></p></blockquote>',3)),n(l,{code:`graph LR
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
`}),a[15]||(a[15]=s('<table tabindex="0"><thead><tr><th></th><th>取值</th><th>说明</th></tr></thead><tbody><tr><td>语句覆盖</td><td>x=85,y=85<br>x=95,y=80<br>x=80,y=95</td><td>覆盖操作一、二<br>覆盖操作一、三<br>覆盖操作一、四</td></tr><tr><td>路径覆盖</td><td>x=85,y=85<br>x=95,y=80<br>x=80,y=95<br>x=70,y=70</td><td>走操作二（路径）<br>走操作三<br>走操作四<br>什么都不做</td></tr><tr><td>分支覆盖</td><td>x=85,y=85<br>x=95,y=80<br>x=80,y=95<br>x=70,y=70</td><td>真 - -<br>假 真 - <br>假 假 真<br>假 假 假</td></tr><tr><td>条件覆盖</td><td>x=85,y=85<br>x=95,y=70<br>x=70,y=95</td><td>A真,B真,C假,D真,E真,F假<br>A真,B假,C真,D假,E真,F假<br> A假,B真,C假,D真,E假,F真</td></tr><tr><td>条件组合覆盖</td><td>x=85,y=85<br>x=85,y=75<br>x=75,y=85<br>x=75,y=75（覆盖C1）</td><td>真,真<br>真,假<br>假,真<br>假,假</td></tr></tbody></table><h4 id="基于事务流的测试技术" tabindex="-1">基于事务流的测试技术 <a class="header-anchor" href="#基于事务流的测试技术" aria-label="Permalink to &quot;基于事务流的测试技术&quot;">​</a></h4><ul><li>事务：指从系统用户角度出发所见到的个工作单元，由一系列操作组成</li><li>事务流程图：一种表达被测软件模型的工具</li></ul><h4 id="其他功能测试技术简述" tabindex="-1">其他功能测试技术简述 <a class="header-anchor" href="#其他功能测试技术简述" aria-label="Permalink to &quot;其他功能测试技术简述&quot;">​</a></h4><p>等价类划分</p><ul><li>等价类：把软件所有可能输入数据分成若干部分，一个部分中各数据发现软件错误的概率一样</li><li>有效等价类：合理、有意义的输入数据集合</li><li>无效等价类：不合理、无意义的输入数据集合</li><li>等价类划分：从等价类中选取数据作为测试用例进行软件测试</li></ul><table tabindex="0"><thead><tr><th>情况</th><th>划分原则</th></tr></thead><tbody><tr><td>输入条件规定了输入数据取值范围</td><td>1个有效等价类、2个无效等价类</td></tr><tr><td>输入条件规定了输入数据的个数</td><td>1个有效等价类、2个无效等价类</td></tr><tr><td>输入条件规定了输入数据的一组可能取值</td><td>每一个输入值确定1个有效等价类，针对这组值确定1个无效等价类</td></tr><tr><td>输入条件是一个布尔量</td><td>1个有效等价类、1个无效等价类</td></tr><tr><td>输入条件规定了必须符合的条件</td><td>1个有效等价类、1个无效等价类</td></tr><tr><td>已划分的某一等价类中各元素在程序中的处理方式不同</td><td>将此等价类进一步划分为更小的等价类</td></tr></tbody></table><p>边界值分析</p><p>使用等于、小于或大于边界值的数据对软件进行测试，<strong>发现错误的概率较大</strong>。故在设计测试用例时应选择一些边界值</p><table tabindex="0"><thead><tr><th>情况</th><th>测试数据</th></tr></thead><tbody><tr><td>输入条件规定了输入值的范围</td><td>等于边界值的数据，刚刚超过边界值的数据</td></tr><tr><td>输入条件规定了值的个数</td><td>最大个数、最小个数、比最大个数多1、比最小个数少1的数</td></tr><tr><td>输入域或输出域是有序集合</td><td>选取集合的第1个元素、典型元素、最后1个元素</td></tr><tr><td>程序中使用了内部数据结构</td><td>选择此内部数据结构边界上的值</td></tr></tbody></table><p>黑盒测试</p><ul><li>概念：将被测软件看作盒子，只通过外部输入、输出发现软件错误，完全不考虑稠序内部结构</li><li>别称：功能测试技术</li><li>典型：事务处理流程技术、状态测试技术、定义域测试技术</li><li>包括：事务流测试、等价类划分、边界值分析等</li><li>依据：软件行为的描述</li></ul><h3 id="测试步骤" tabindex="-1">测试步骤 <a class="header-anchor" href="#测试步骤" aria-label="Permalink to &quot;测试步骤&quot;">​</a></h3><h4 id="单元测试" tabindex="-1">单元测试 <a class="header-anchor" href="#单元测试" aria-label="Permalink to &quot;单元测试&quot;">​</a></h4><ul><li>关注：每个独立的<strong>模块</strong></li><li>任务：检验软件设计的最小单元模块</li><li>指导：详细设计文档</li><li>技术：白盒测试技术</li></ul><p>测试中，模块不是独立程序，须为每个模块单元测试开发驱动模块和承接模块</p><ul><li><strong>驱动模块</strong>：模拟“主程序”接受测试用例的数据，将这些数据传送给要测试的模块并打印结果</li><li><strong>承接模块</strong>：代替被测模块的下属模块，打印入口检查信息，并将控制返回到它的上级模块</li></ul><h4 id="集成测试" tabindex="-1">集成测试 <a class="header-anchor" href="#集成测试" aria-label="Permalink to &quot;集成测试&quot;">​</a></h4><ul><li>任务：关注接口有关错误，发现与接口有关的错误，将经过单元测试的模块构成一个满足设计要求的软件结构</li><li>驱动模块：主控模块，设计承接模块替代其直接的下属模块，按选取的测试方式（先深度/先宽度），在组合模块时进行测试</li></ul><h4 id="有效性测试" tabindex="-1">有效性测试 <a class="header-anchor" href="#有效性测试" aria-label="Permalink to &quot;有效性测试&quot;">​</a></h4><ul><li>技术：黑盒测试技术</li><li>验证：软件需求的可追溯性</li><li>任务：关注检验是否符合用户的文档</li><li>目标：发现软件实现的功能与<strong>需求规格说明书</strong>不一致的错误</li></ul><h4 id="系统测试" tabindex="-1">系统测试 <a class="header-anchor" href="#系统测试" aria-label="Permalink to &quot;系统测试&quot;">​</a></h4><ul><li><strong>关注</strong>检验系统中所有元素（包括硬件信息等）间的协作是否合适，整个系统的性能、功能是否达到要求</li><li><strong>验证</strong>将软件融于更大系统时整个系统的有效性</li></ul><h2 id="软件生命周期过程与管理" tabindex="-1">软件生命周期过程与管理 <a class="header-anchor" href="#软件生命周期过程与管理" aria-label="Permalink to &quot;软件生命周期过程与管理&quot;">​</a></h2><h3 id="概述" tabindex="-1">概述 <a class="header-anchor" href="#概述" aria-label="Permalink to &quot;概述&quot;">​</a></h3><ul><li>软件生存周期：软件产品/系统的一系列相关活动的<strong>全周期</strong>，从形成概念开始，历经开发、交付使用、在使用中不断修订和演化，直到最后被淘汰，让位于新的软件产品</li><li>软件工程标准的基础文件：《ISO/IEC软件生存周期过程12207一1995》</li><li>软件生存周期过程的3个过程： <ul><li>基本过程（获取、供应、开发、运行、维护）</li><li>支持过程（文档、配置管理、质量保证、验证、确认、联合评审、审计、问题解决）</li><li>组织过程（管理、基础设施、培训、改进）</li></ul></li></ul><h3 id="过程描述" tabindex="-1">过程描述 <a class="header-anchor" href="#过程描述" aria-label="Permalink to &quot;过程描述&quot;">​</a></h3>',27)),n(l,{code:`graph TB
A[软件生存周期过程]
B[供应]
C[软件实现]
D[软件需求分析]
E[软件体系结构设计]
F[软件验证]
G[软件确认]
A --> B & C & D & E & F & G`}),a[16]||(a[16]=s('<table tabindex="0"><thead><tr><th></th><th>验证</th><th>确认</th></tr></thead><tbody><tr><td>定义</td><td>证实<strong>产品</strong>是否正确反映规约的需求</td><td>证实<strong>使用的软件</strong>是否满足需求</td></tr><tr><td>作用</td><td>证实是否正确的反映了所规约的需求</td><td>证实所期望使用的软件工作产品是否满足其需求</td></tr><tr><td>区别</td><td>与该产品所要求的<strong>特征</strong>进行比较</td><td>反映特定期望使用的<strong>特殊需求</strong></td></tr></tbody></table><h3 id="应用说明" tabindex="-1">应用说明 <a class="header-anchor" href="#应用说明" aria-label="Permalink to &quot;应用说明&quot;">​</a></h3>',2)),n(l,{code:`graph TB
A[标准的应用] --> B[系统和软件]
A --> C[生存周期模型和阶段]
A --> D[过程分解]
A --> E[组织层和项目层]
A --> F[过程间的时序关系]
B --> G[《ISO/IEC 系统生存周期 15288》]
style A fill:#f9f,stroke:#333,stroke-width:2px
style G fill:#ffcccc,stroke:#cc0000`}),a[17]||(a[17]=s('<h3 id="软件生存周期模型" tabindex="-1">软件生存周期模型 <a class="header-anchor" href="#软件生存周期模型" aria-label="Permalink to &quot;软件生存周期模型&quot;">​</a></h3><h4 id="瀑布模型" tabindex="-1">瀑布模型 <a class="header-anchor" href="#瀑布模型" aria-label="Permalink to &quot;瀑布模型&quot;">​</a></h4><ul><li>概念：将软件生存周期的各项活动规定为按<strong>固定顺序</strong>而连接的若干阶段工作，形如瀑布流水，最终得到软件产品</li><li>作用：<strong>支持</strong>结构化软件开发、<strong>控制</strong>软件开发的复杂性、<strong>促进</strong>软件开发工程化</li><li>适用：需求已被很好的理解，且开发组织非常熟悉为实现这一模型所需要的过程</li></ul>',3)),n(l,{title:"瀑布模型各开发阶段的活动",code:`graph LR
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
G -.-> F`}),a[18]||(a[18]=s('<h4 id="增量模型" tabindex="-1">增量模型 <a class="header-anchor" href="#增量模型" aria-label="Permalink to &quot;增量模型&quot;">​</a></h4><ul><li>概念：指<strong>需求</strong>可以分组，形成一个个的<strong>增量</strong>，并可形成一个<strong>结构</strong>，即该模型有一个前提，需求可结构化，在此条件下，对每一增量实施 <strong>瀑布式开发</strong></li><li>适用：“技术驱动”的软件产品开发，常被工业界所采用</li><li>优点： <ul><li>第一个可交付版本需时间和成本较少</li><li>减少用户需求的变更</li><li>增量投资</li></ul></li><li>缺点： <ul><li>初始增量可能会造成后来增量的不稳定</li><li>一些增量就可能需要重新开发</li><li>增大管理成本</li></ul></li></ul>',2)),n(l,{title:"增量模型示意图",code:`graph LR
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
...] --> D[最终系统]`}),a[19]||(a[19]=s('<h4 id="演化模型" tabindex="-1">演化模型 <a class="header-anchor" href="#演化模型" aria-label="Permalink to &quot;演化模型&quot;">​</a></h4><ul><li>类型：迭代、增量式开发模型</li><li>概念 <ul><li>基础：用户提出待开发系统的核心需求</li><li>过程： <ul><li>根据需求，开发一个核心系统并投入运行，以便用户能够有效提出反馈</li><li>软件开发人员根据用户反馈</li><li>实施开发的迭代过程</li></ul></li></ul></li><li>选代：由需求、设计、编码、测试、集成组成</li><li>增量：通过增加或修正，产生软件产品的增量，最终完成软件产品的开发</li><li>适用：事先不能完整定义需求的软件</li></ul>',2)),n(l,{title:"增量模型示意图",code:`graph LR
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
D <-.-> E`}),a[24]||(a[24]=t("h3",{id:"过程规划与管理",tabindex:"-1"},[i("过程规划与管理 "),t("a",{class:"header-anchor",href:"#过程规划与管理","aria-label":'Permalink to "过程规划与管理"'},"​")],-1)),a[25]||(a[25]=t("p",null,"过程管理包括过程建立、过程评估和过程改进",-1)),a[26]||(a[26]=t("h4",{id:"过程的建立",tabindex:"-1"},[i("过程的建立 "),t("a",{class:"header-anchor",href:"#过程的建立","aria-label":'Permalink to "过程的建立"'},"​")],-1)),n(r,{lazy:"",class:"my-2",src:"/My-Project/images/02333/projectManagePlan.webp","data-fancybox":"gallery",width:"100%"}),n(p,{title:"选择软件生存周期模型（SLCM）的步骤",flowData:[{id:1,title:"No.1",description:"标识开发项目可用的SLCM"},{id:2,title:"No.2",description:"标识那些会影响SLCM选择的属性"},{id:3,title:"No.3",description:"标识为选择SLCM所需要的任何约束"},{id:4,title:"No.4",description:"评估所选择的SLCM"},{id:5,title:"No.5",description:"选择最能满足项目属性和约束的SLCM"}]}),a[27]||(a[27]=s('<h4 id="关于软件生存周期过程的监控" tabindex="-1">关于软件生存周期过程的监控 <a class="header-anchor" href="#关于软件生存周期过程的监控" aria-label="Permalink to &quot;关于软件生存周期过程的监控&quot;">​</a></h4><ul><li>软件生存周期过程——回答软件开发需要做哪些工作</li><li>软件生存周期模型——回答软件开发活动或任务如何组织</li><li>软件项目过程管理——回答软件过程如何管理 <ul><li>软件生存周期过程是软件生存周期模型和软件项目过程管理的基础</li><li>软件生存周期模型为软件项目过程管理提供支持</li></ul></li></ul><h2 id="集成化能力成熟度模型-cmmi" tabindex="-1">集成化能力成熟度模型 CMMI <a class="header-anchor" href="#集成化能力成熟度模型-cmmi" aria-label="Permalink to &quot;集成化能力成熟度模型 CMMI&quot;">​</a></h2><h3 id="背景与原理" tabindex="-1">背景与原理 <a class="header-anchor" href="#背景与原理" aria-label="Permalink to &quot;背景与原理&quot;">​</a></h3>',4)),n(l,{title:"集成化能力成熟度模型 Capability Maturity Model Integration for Development",code:`graph TB
A[集成化能力成熟度模型 CMMI] --> B[软件CMM]
A --> C[产品集成开发 CMM]
A --> D[系统工程 CMM]
`}),a[28]||(a[28]=s('<p>CMMI提出所基于的基本思想</p><ul><li>CMMI模型基于<strong>过程途径</strong>思想，把软件质量的3个支撑点：<strong>受训的人员</strong>、<strong>规程和方法</strong>、<strong>工具和设备</strong>进行集成，以开发所期望的系统产品</li><li>CMMI紧紧围绕<strong>开发</strong>、<strong>维护和运行</strong>，把经过证明的最佳实践放在一个结构中</li><li>该结构<strong>有助于</strong>指导组织确定其过程的改善优先次序；<strong>有助于</strong>指导这些改善的实施，以提高其过程能力和成熟度，还<strong>支持</strong> 其他领域能力成熟度模型的开发</li></ul><h3 id="cmmi的模型部件" tabindex="-1">CMMI的模型部件 <a class="header-anchor" href="#cmmi的模型部件" aria-label="Permalink to &quot;CMMI的模型部件&quot;">​</a></h3>',3)),n(l,{title:"CMMI的主要模型部件",code:`graph TB
A[过程域] --> B[意图陈述]
A --> C[简介性注释]
A --> D[相关过程域]
A --> E[专用目标] --> G{专用实践}
A --> F[共用目标] --> H{共用实践}
G --> I[典型工作产品]
G --> J[子实践]
H --> K[子实践]
H --> L[共用实践的精化]
`}),a[29]||(a[29]=s('<h3 id="cmmi等级" tabindex="-1">CMMI等级 <a class="header-anchor" href="#cmmi等级" aria-label="Permalink to &quot;CMMI等级&quot;">​</a></h3><h4 id="能力等级" tabindex="-1">能力等级 <a class="header-anchor" href="#能力等级" aria-label="Permalink to &quot;能力等级&quot;">​</a></h4><ul><li>过程能力：是指遵循一个过程可达到的预期结果的程度。</li><li>能力等级：一种<strong>过程改善路径</strong>，该路径可使组织针对<strong>单一过程域</strong>不断改善该过程域，即指在单一过程域中已达到的过程改善。 能力等级是为了管理，对过程改善程度所设定的几个“台阶”</li><li>CMMI有6个共用目标，用于表征过程制度化的程度，能力等级<strong>1~5</strong>分别对应共用目标1～5的过程，代表着过程制度化程度的提高。故共用目标编号越小，制度化程度越低。</li></ul><table tabindex="0"><thead><tr><th>等级</th><th>说明</th></tr></thead><tbody><tr><td>0级</td><td>未完成级</td></tr><tr><td>1级</td><td>已执行级</td></tr><tr><td>2级</td><td>已管理级</td></tr><tr><td>3级</td><td>已定义级</td></tr><tr><td>4级</td><td>已定量管理级</td></tr><tr><td>5级</td><td>持续优化级</td></tr></tbody></table><h4 id="组织成熟度等级" tabindex="-1">组织成熟度等级 <a class="header-anchor" href="#组织成熟度等级" aria-label="Permalink to &quot;组织成熟度等级&quot;">​</a></h4><ul><li>成熟度等级：一种<strong>过程改善路径</strong>，该路径可使组织通过关注<strong>一组</strong>过程域不断改善一组相关过程域；意在改进组织的整体性能</li><li>成熟度等级的组成：由预先定义的<strong>一组过程域集</strong>及其相关的一些<strong>专用实践和共用实践</strong>。<strong>能力等级和成熟度等级</strong> 可用于评定活动、估算，作为过程评估的结果</li></ul><table tabindex="0"><thead><tr><th>等级</th><th>说明</th></tr></thead><tbody><tr><td>1级</td><td>初始级</td></tr><tr><td>2级</td><td>已管理级</td></tr><tr><td>3级</td><td>已定义级</td></tr><tr><td>4级</td><td>已定量管理级</td></tr><tr><td>5级</td><td>持续优化级</td></tr></tbody></table><h3 id="过程域举例" tabindex="-1">过程域举例 <a class="header-anchor" href="#过程域举例" aria-label="Permalink to &quot;过程域举例&quot;">​</a></h3><ul><li><strong>项目规划过程域</strong>：建立并维护项目活动计划的定义</li><li><strong>需求开发过程域</strong>：生成并分析客户、产品和产品部件需求</li></ul><hr><table tabindex="0"><thead><tr><th>题型</th><th>个数</th><th>分值</th><th>总分</th></tr></thead><tbody><tr><td>单选</td><td>15</td><td>2</td><td>30</td></tr><tr><td>填空</td><td>20</td><td>1</td><td>20</td></tr><tr><td>简答</td><td>6</td><td>5</td><td>30</td></tr><tr><td>综合应用</td><td>2</td><td>10</td><td>20</td></tr></tbody></table><hr><h2 id="总结-1" tabindex="-1">总结 <a class="header-anchor" href="#总结-1" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>Jackson方法根据<strong>数据结构</strong>来导出程序结构</li><li>软件可靠性的定量指标，常借用<strong>硬件可靠性的定量度量</strong>方法来度量软件的可靠性</li><li>SA方法用DFD描述<strong>系统的功能</strong></li><li>在遵循软件工程原则开发软件的过程中，计划阶段应该依次完成：<strong>系统定义、软件计划、需求分析</strong></li><li>估算规模的工作产品。类型有：可交付的和不用交付的工作产品、文档和文件、运行和支持的硬件固件和软件</li><li>在项目的开发风险很大或客户不能确定系统需求的情况下，最好选择<strong>演化模型</strong></li><li>螺旋模型与瀑布模型、演化模型相比，主要优势在于螺旋模型加入了后两者所忽略的<strong>风险分析</strong></li><li><strong>软件开发环境</strong>是工作台的发展，其目的在于为软件开发提供完整的和一致的支持</li><li>需求规约的基本性质：可修改的、完整的、一致的、重要性和稳定性程度。<strong>无歧义</strong>的属于需求的基本特性</li><li>详细设计工具有程序流程图、<strong>盒图</strong>、PAD图、PDL</li><li>Rumbangh等人提出的对象模型技术OMT把分析时收集的信息构造在<strong>对象模型</strong>、动态模型和<strong>功能模型</strong></li><li>定义了数据流图中每一个图形元素的结构化分析方法的描述工具是：<strong>数据字典</strong></li><li>分层数据流图的顶层图描述了系统的<strong>输入与输出</strong></li><li>确认测试计划通常是在<strong>需求分析</strong>阶段完成的</li><li><strong>等价类划分</strong>是用的最多的一种黑盒测试方法</li><li>单元测试要根据在<strong>详细设计阶段</strong>中的规格说明进行</li><li>抽取和整理用户需求并建立问题域精确模型的过程叫<strong>面向对象分析</strong></li><li>在配置管理中，<strong>检出和登入</strong>处理实现了两个重要的变更控制要素，即<strong>存取控制和同步控制</strong></li><li>内聚：偶然&lt;逻辑&lt;时间&lt;过程&lt;通信&lt;顺序&lt;功能</li><li>设计质量评审的对象是 <ul><li>在需求分析阶段产生的软件需求规格说明</li><li>数据需求规格说明</li><li>在软件概要设计阶段产生的软件概要设计说明书等</li></ul></li></ul><h2 id="_2025-04" tabindex="-1">2025-04 <a class="header-anchor" href="#_2025-04" aria-label="Permalink to &quot;2025-04&quot;">​</a></h2>',15)),n(r,{src:"/My-Project/images/02333/2025-04-1.webp","data-fancybox":"gallery",lazy:""}),n(r,{src:"/My-Project/images/02333/2025-04-2.webp","data-fancybox":"gallery",lazy:""}),n(r,{src:"/My-Project/images/02333/2025-04-3.webp","data-fancybox":"gallery",lazy:""}),a[30]||(a[30]=s('<p>30： 单元测试是对软件最小可测试单元（通常是函数、方法或类）进行的测试，主要内容包括</p><ul><li>功能验证：检查该单元是否按设计要求正确执行功能</li><li>边界值测试：测试输入参数的边界情况（如最大值、最小值、空值等）</li><li>异常处理测试：验证单元在非法输入或异常条件下能否正确处理并返回合理错误信息</li><li>路径覆盖测试：设计测试用例覆盖单元内的所有分支和语句路径（白盒测试技术）</li><li>回归测试支持：单元测试脚本应在代码修改后自动运行，确保新代码未破坏原有功能</li></ul><p>31：</p><ul><li>项目规模与复杂度： 小型项目可用松散协作模式；大型复杂项目需分组、分层管理（如项目经理、架构师、开发组、测试组）</li><li>项目工期与进度要求： 时间紧的项目需增加人力或采用并行开发，团队结构需支持快速响应</li><li>技术难度与专业分工： 若涉及多种技术（如前端、后端、数据库、AI），需配备相应专业人员，结构上体现职能分工</li><li>团队成员技能与经验： 新手多则需加强指导与监督；资深工程师可承担核心模块或架构设计</li><li>沟通与协作效率： 团队规模不宜过大（通常建议5~9人），减少沟通成本；可采用敏捷小组（Scrum Team）模式</li><li>项目风险与质量要求： 高风险或高可靠性项目（如医疗、航空系统）需设置独立的质量保证（QA）角色和评审机制</li></ul><h2 id="_2024-10" tabindex="-1">2024-10 <a class="header-anchor" href="#_2024-10" aria-label="Permalink to &quot;2024-10&quot;">​</a></h2><h2 id="_2024-04" tabindex="-1">2024-04 <a class="header-anchor" href="#_2024-04" aria-label="Permalink to &quot;2024-04&quot;">​</a></h2>',6)),n(d,{color:"text-red-500",weight:500}),n(o,{path:"/My-Project/lottie/Programmer.json"})])}const T=b(c,[["render",g]]);export{x as __pageData,T as default};
