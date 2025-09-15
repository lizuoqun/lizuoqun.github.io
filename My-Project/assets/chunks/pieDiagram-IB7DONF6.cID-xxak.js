import{p as N}from"./chunk-4BMEZGHF.DltiZlR6.js";import{_ as i,g as B,s as U,a as q,b as H,t as K,q as V,l as C,c as Z,F as j,K as J,M as Q,N as z,O as X,e as Y,z as ee,P as te,H as ae}from"./theme.DKzlzQEP.js";import{p as re}from"./radar-MK3ICKWK.CPkMmJsD.js";import"./framework.BJOOWd-7.js";var ie=ae.pie,D={sections:new Map,showData:!1},h=D.sections,w=D.showData,se=structuredClone(ie),ne=i(()=>structuredClone(se),"getConfig"),oe=i(()=>{h=new Map,w=D.showData,ee()},"clear"),le=i(({label:e,value:a})=>{h.has(e)||(h.set(e,a),C.debug(`added new section: ${e}, with value: ${a}`))},"addSection"),ce=i(()=>h,"getSections"),de=i(e=>{w=e},"setShowData"),pe=i(()=>w,"getShowData"),F={getConfig:ne,clear:oe,setDiagramTitle:V,getDiagramTitle:K,setAccTitle:H,getAccTitle:q,setAccDescription:U,getAccDescription:B,addSection:le,getSections:ce,setShowData:de,getShowData:pe},ge=i((e,a)=>{N(e,a),a.setShowData(e.showData),e.sections.map(a.addSection)},"populateDb"),ue={parse:i(async e=>{const a=await re("pie",e);C.debug(a),ge(a,F)},"parse")},fe=i(e=>`
  .pieCircle{
    stroke: ${e.pieStrokeColor};
    stroke-width : ${e.pieStrokeWidth};
    opacity : ${e.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${e.pieOuterStrokeColor};
    stroke-width: ${e.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${e.pieTitleTextSize};
    fill: ${e.pieTitleTextColor};
    font-family: ${e.fontFamily};
  }
  .slice {
    font-family: ${e.fontFamily};
    fill: ${e.pieSectionTextColor};
    font-size:${e.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${e.pieLegendTextColor};
    font-family: ${e.fontFamily};
    font-size: ${e.pieLegendTextSize};
  }
`,"getStyles"),he=fe,me=i(e=>{const a=[...e.entries()].map(s=>({label:s[0],value:s[1]})).sort((s,o)=>o.value-s.value);return te().value(s=>s.value)(a)},"createPieArcs"),Se=i((e,a,G,s)=>{C.debug(`rendering pie chart
`+e);const o=s.db,y=Z(),T=j(o.getConfig(),y.pie),$=40,n=18,p=4,c=450,m=c,S=J(a),l=S.append("g");l.attr("transform","translate("+m/2+","+c/2+")");const{themeVariables:r}=y;let[A]=Q(r.pieOuterStrokeWidth);A??(A=2);const _=T.textPosition,g=Math.min(m,c)/2-$,M=z().innerRadius(0).outerRadius(g),O=z().innerRadius(g*_).outerRadius(g*_);l.append("circle").attr("cx",0).attr("cy",0).attr("r",g+A/2).attr("class","pieOuterCircle");const b=o.getSections(),v=me(b),P=[r.pie1,r.pie2,r.pie3,r.pie4,r.pie5,r.pie6,r.pie7,r.pie8,r.pie9,r.pie10,r.pie11,r.pie12],d=X(P);l.selectAll("mySlices").data(v).enter().append("path").attr("d",M).attr("fill",t=>d(t.data.label)).attr("class","pieCircle");let E=0;b.forEach(t=>{E+=t}),l.selectAll("mySlices").data(v).enter().append("text").text(t=>(t.data.value/E*100).toFixed(0)+"%").attr("transform",t=>"translate("+O.centroid(t)+")").style("text-anchor","middle").attr("class","slice"),l.append("text").text(o.getDiagramTitle()).attr("x",0).attr("y",-400/2).attr("class","pieTitleText");const x=l.selectAll(".legend").data(d.domain()).enter().append("g").attr("class","legend").attr("transform",(t,u)=>{const f=n+p,R=f*d.domain().length/2,I=12*n,L=u*f-R;return"translate("+I+","+L+")"});x.append("rect").attr("width",n).attr("height",n).style("fill",d).style("stroke",d),x.data(v).append("text").attr("x",n+p).attr("y",n-p).text(t=>{const{label:u,value:f}=t.data;return o.getShowData()?`${u} [${f}]`:u});const W=Math.max(...x.selectAll("text").nodes().map(t=>(t==null?void 0:t.getBoundingClientRect().width)??0)),k=m+$+n+p+W;S.attr("viewBox",`0 0 ${k} ${c}`),Y(S,c,k,T.useMaxWidth)},"draw"),ve={draw:Se},ye={parser:ue,db:F,renderer:ve,styles:he};export{ye as diagram};
