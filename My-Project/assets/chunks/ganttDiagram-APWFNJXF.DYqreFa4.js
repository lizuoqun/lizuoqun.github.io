import{aC as ae,aD as re,_ as c,g as ne,s as ce,t as oe,q as le,a as ue,b as de,c as K,d as dt,aE as fe,aF as he,aG as ke,e as ye,S as me,aH as ge,aI as O,l as kt,aJ as pe,aK as Pt,aL as Rt,aM as ve,aN as Te,aO as be,aP as xe,aQ as _e,aR as we,aS as De,aT as Yt,aU as Bt,aV as Nt,aW as zt,aX as jt,aY as Ce,k as Ee,j as Se,z as Ie,u as Ae,aZ as Fe,a_ as Le}from"./theme.H7v9YJgx.js";import"./framework.BJOOWd-7.js";var Gt={exports:{}};(function(t,s){(function(i,r){t.exports=r()})(ae,function(){var i="day";return function(r,n,k){var h=function(E){return E.add(4-E.isoWeekday(),i)},F=n.prototype;F.isoWeekYear=function(){return h(this).year()},F.isoWeek=function(E){if(!this.$utils().u(E))return this.add(7*(E-this.isoWeek()),i);var D,I,W,M,P=h(this),b=(D=this.isoWeekYear(),I=this.$u,W=(I?k.utc:k)().year(D).startOf("year"),M=4-W.isoWeekday(),W.isoWeekday()>4&&(M+=7),W.add(M,i));return P.diff(b,"week")+1},F.isoWeekday=function(E){return this.$utils().u(E)?this.day()||7:this.day(this.day()%7?E:E-7)};var Y=F.startOf;F.startOf=function(E,D){var I=this.$utils(),W=!!I.u(D)||D;return I.p(E)==="isoweek"?W?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(E,D)}}})})(Gt);var We=Gt.exports;const Me=re(We);var bt=function(){var t=c(function(_,o,u,f){for(u=u||{},f=_.length;f--;u[_[f]]=o);return u},"o"),s=[6,8,10,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,29,30,31,33,35,36,38,40],i=[1,26],r=[1,27],n=[1,28],k=[1,29],h=[1,30],F=[1,31],Y=[1,32],E=[1,33],D=[1,34],I=[1,9],W=[1,10],M=[1,11],P=[1,12],b=[1,13],Z=[1,14],$=[1,15],tt=[1,16],et=[1,19],st=[1,20],it=[1,21],at=[1,22],rt=[1,23],m=[1,25],T=[1,35],p={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,start:3,gantt:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NL:10,weekday:11,weekday_monday:12,weekday_tuesday:13,weekday_wednesday:14,weekday_thursday:15,weekday_friday:16,weekday_saturday:17,weekday_sunday:18,weekend:19,weekend_friday:20,weekend_saturday:21,dateFormat:22,inclusiveEndDates:23,topAxis:24,axisFormat:25,tickInterval:26,excludes:27,includes:28,todayMarker:29,title:30,acc_title:31,acc_title_value:32,acc_descr:33,acc_descr_value:34,acc_descr_multiline_value:35,section:36,clickStatement:37,taskTxt:38,taskData:39,click:40,callbackname:41,callbackargs:42,href:43,clickStatementDebug:44,$accept:0,$end:1},terminals_:{2:"error",4:"gantt",6:"EOF",8:"SPACE",10:"NL",12:"weekday_monday",13:"weekday_tuesday",14:"weekday_wednesday",15:"weekday_thursday",16:"weekday_friday",17:"weekday_saturday",18:"weekday_sunday",20:"weekend_friday",21:"weekend_saturday",22:"dateFormat",23:"inclusiveEndDates",24:"topAxis",25:"axisFormat",26:"tickInterval",27:"excludes",28:"includes",29:"todayMarker",30:"title",31:"acc_title",32:"acc_title_value",33:"acc_descr",34:"acc_descr_value",35:"acc_descr_multiline_value",36:"section",38:"taskTxt",39:"taskData",40:"click",41:"callbackname",42:"callbackargs",43:"href"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[11,1],[19,1],[19,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,2],[37,2],[37,3],[37,3],[37,4],[37,3],[37,4],[37,2],[44,2],[44,3],[44,3],[44,4],[44,3],[44,4],[44,2]],performAction:c(function(o,u,f,d,g,a,l){var e=a.length-1;switch(g){case 1:return a[e-1];case 2:this.$=[];break;case 3:a[e-1].push(a[e]),this.$=a[e-1];break;case 4:case 5:this.$=a[e];break;case 6:case 7:this.$=[];break;case 8:d.setWeekday("monday");break;case 9:d.setWeekday("tuesday");break;case 10:d.setWeekday("wednesday");break;case 11:d.setWeekday("thursday");break;case 12:d.setWeekday("friday");break;case 13:d.setWeekday("saturday");break;case 14:d.setWeekday("sunday");break;case 15:d.setWeekend("friday");break;case 16:d.setWeekend("saturday");break;case 17:d.setDateFormat(a[e].substr(11)),this.$=a[e].substr(11);break;case 18:d.enableInclusiveEndDates(),this.$=a[e].substr(18);break;case 19:d.TopAxis(),this.$=a[e].substr(8);break;case 20:d.setAxisFormat(a[e].substr(11)),this.$=a[e].substr(11);break;case 21:d.setTickInterval(a[e].substr(13)),this.$=a[e].substr(13);break;case 22:d.setExcludes(a[e].substr(9)),this.$=a[e].substr(9);break;case 23:d.setIncludes(a[e].substr(9)),this.$=a[e].substr(9);break;case 24:d.setTodayMarker(a[e].substr(12)),this.$=a[e].substr(12);break;case 27:d.setDiagramTitle(a[e].substr(6)),this.$=a[e].substr(6);break;case 28:this.$=a[e].trim(),d.setAccTitle(this.$);break;case 29:case 30:this.$=a[e].trim(),d.setAccDescription(this.$);break;case 31:d.addSection(a[e].substr(8)),this.$=a[e].substr(8);break;case 33:d.addTask(a[e-1],a[e]),this.$="task";break;case 34:this.$=a[e-1],d.setClickEvent(a[e-1],a[e],null);break;case 35:this.$=a[e-2],d.setClickEvent(a[e-2],a[e-1],a[e]);break;case 36:this.$=a[e-2],d.setClickEvent(a[e-2],a[e-1],null),d.setLink(a[e-2],a[e]);break;case 37:this.$=a[e-3],d.setClickEvent(a[e-3],a[e-2],a[e-1]),d.setLink(a[e-3],a[e]);break;case 38:this.$=a[e-2],d.setClickEvent(a[e-2],a[e],null),d.setLink(a[e-2],a[e-1]);break;case 39:this.$=a[e-3],d.setClickEvent(a[e-3],a[e-1],a[e]),d.setLink(a[e-3],a[e-2]);break;case 40:this.$=a[e-1],d.setLink(a[e-1],a[e]);break;case 41:case 47:this.$=a[e-1]+" "+a[e];break;case 42:case 43:case 45:this.$=a[e-2]+" "+a[e-1]+" "+a[e];break;case 44:case 46:this.$=a[e-3]+" "+a[e-2]+" "+a[e-1]+" "+a[e];break}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(s,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:17,12:i,13:r,14:n,15:k,16:h,17:F,18:Y,19:18,20:E,21:D,22:I,23:W,24:M,25:P,26:b,27:Z,28:$,29:tt,30:et,31:st,33:it,35:at,36:rt,37:24,38:m,40:T},t(s,[2,7],{1:[2,1]}),t(s,[2,3]),{9:36,11:17,12:i,13:r,14:n,15:k,16:h,17:F,18:Y,19:18,20:E,21:D,22:I,23:W,24:M,25:P,26:b,27:Z,28:$,29:tt,30:et,31:st,33:it,35:at,36:rt,37:24,38:m,40:T},t(s,[2,5]),t(s,[2,6]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),t(s,[2,25]),t(s,[2,26]),t(s,[2,27]),{32:[1,37]},{34:[1,38]},t(s,[2,30]),t(s,[2,31]),t(s,[2,32]),{39:[1,39]},t(s,[2,8]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),t(s,[2,15]),t(s,[2,16]),{41:[1,40],43:[1,41]},t(s,[2,4]),t(s,[2,28]),t(s,[2,29]),t(s,[2,33]),t(s,[2,34],{42:[1,42],43:[1,43]}),t(s,[2,40],{41:[1,44]}),t(s,[2,35],{43:[1,45]}),t(s,[2,36]),t(s,[2,38],{42:[1,46]}),t(s,[2,37]),t(s,[2,39])],defaultActions:{},parseError:c(function(o,u){if(u.recoverable)this.trace(o);else{var f=new Error(o);throw f.hash=u,f}},"parseError"),parse:c(function(o){var u=this,f=[0],d=[],g=[null],a=[],l=this.table,e="",C=0,x=0,w=2,V=1,S=a.slice.call(arguments,1),A=Object.create(this.lexer),j={yy:{}};for(var gt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,gt)&&(j.yy[gt]=this.yy[gt]);A.setInput(o,j.yy),j.yy.lexer=A,j.yy.parser=this,typeof A.yylloc>"u"&&(A.yylloc={});var pt=A.yylloc;a.push(pt);var se=A.options&&A.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ie(B){f.length=f.length-2*B,g.length=g.length-B,a.length=a.length-B}c(ie,"popStack");function Vt(){var B;return B=d.pop()||A.lex()||V,typeof B!="number"&&(B instanceof Array&&(d=B,B=d.pop()),B=u.symbols_[B]||B),B}c(Vt,"lex");for(var R,X,N,vt,H={},lt,q,Ot,ut;;){if(X=f[f.length-1],this.defaultActions[X]?N=this.defaultActions[X]:((R===null||typeof R>"u")&&(R=Vt()),N=l[X]&&l[X][R]),typeof N>"u"||!N.length||!N[0]){var Tt="";ut=[];for(lt in l[X])this.terminals_[lt]&&lt>w&&ut.push("'"+this.terminals_[lt]+"'");A.showPosition?Tt="Parse error on line "+(C+1)+`:
`+A.showPosition()+`
Expecting `+ut.join(", ")+", got '"+(this.terminals_[R]||R)+"'":Tt="Parse error on line "+(C+1)+": Unexpected "+(R==V?"end of input":"'"+(this.terminals_[R]||R)+"'"),this.parseError(Tt,{text:A.match,token:this.terminals_[R]||R,line:A.yylineno,loc:pt,expected:ut})}if(N[0]instanceof Array&&N.length>1)throw new Error("Parse Error: multiple actions possible at state: "+X+", token: "+R);switch(N[0]){case 1:f.push(R),g.push(A.yytext),a.push(A.yylloc),f.push(N[1]),R=null,x=A.yyleng,e=A.yytext,C=A.yylineno,pt=A.yylloc;break;case 2:if(q=this.productions_[N[1]][1],H.$=g[g.length-q],H._$={first_line:a[a.length-(q||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(q||1)].first_column,last_column:a[a.length-1].last_column},se&&(H._$.range=[a[a.length-(q||1)].range[0],a[a.length-1].range[1]]),vt=this.performAction.apply(H,[e,x,C,j.yy,N[1],g,a].concat(S)),typeof vt<"u")return vt;q&&(f=f.slice(0,-1*q*2),g=g.slice(0,-1*q),a=a.slice(0,-1*q)),f.push(this.productions_[N[1]][0]),g.push(H.$),a.push(H._$),Ot=l[f[f.length-2]][f[f.length-1]],f.push(Ot);break;case 3:return!0}}return!0},"parse")},v=function(){var _={EOF:1,parseError:c(function(u,f){if(this.yy.parser)this.yy.parser.parseError(u,f);else throw new Error(u)},"parseError"),setInput:c(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:c(function(o){var u=o.length,f=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),f.length-1&&(this.yylineno-=f.length-1);var g=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:f?(f.length===d.length?this.yylloc.first_column:0)+d[d.length-f.length].length-f[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[g[0],g[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(o){this.unput(this.match.slice(o))},"less"),pastInput:c(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:c(function(o,u){var f,d,g;if(this.options.backtrack_lexer&&(g={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(g.yylloc.range=this.yylloc.range.slice(0))),d=o[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],f=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),f)return f;if(this._backtrack){for(var a in g)this[a]=g[a];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,f,d;this._more||(this.yytext="",this.match="");for(var g=this._currentRules(),a=0;a<g.length;a++)if(f=this._input.match(this.rules[g[a]]),f&&(!u||f[0].length>u[0].length)){if(u=f,d=a,this.options.backtrack_lexer){if(o=this.test_match(f,g[a]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,g[d]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var u=this.next();return u||this.lex()},"lex"),begin:c(function(u){this.conditionStack.push(u)},"begin"),popState:c(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:c(function(u){this.begin(u)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:c(function(u,f,d,g){switch(d){case 0:return this.begin("open_directive"),"open_directive";case 1:return this.begin("acc_title"),31;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),33;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:break;case 9:break;case 10:break;case 11:return 10;case 12:break;case 13:break;case 14:this.begin("href");break;case 15:this.popState();break;case 16:return 43;case 17:this.begin("callbackname");break;case 18:this.popState();break;case 19:this.popState(),this.begin("callbackargs");break;case 20:return 41;case 21:this.popState();break;case 22:return 42;case 23:this.begin("click");break;case 24:this.popState();break;case 25:return 40;case 26:return 4;case 27:return 22;case 28:return 23;case 29:return 24;case 30:return 25;case 31:return 26;case 32:return 28;case 33:return 27;case 34:return 29;case 35:return 12;case 36:return 13;case 37:return 14;case 38:return 15;case 39:return 16;case 40:return 17;case 41:return 18;case 42:return 20;case 43:return 21;case 44:return"date";case 45:return 30;case 46:return"accDescription";case 47:return 36;case 48:return 38;case 49:return 39;case 50:return":";case 51:return 6;case 52:return"INVALID"}},"anonymous"),rules:[/^(?:%%\{)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:weekend\s+friday\b)/i,/^(?:weekend\s+saturday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^\n]+)/i,/^(?:[^:\n]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},callbackargs:{rules:[21,22],inclusive:!1},callbackname:{rules:[18,19,20],inclusive:!1},href:{rules:[15,16],inclusive:!1},click:{rules:[24,25],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,17,23,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],inclusive:!0}}};return _}();p.lexer=v;function y(){this.yy={}}return c(y,"Parser"),y.prototype=p,p.Parser=y,new y}();bt.parser=bt;var Ve=bt;O.extend(Me);O.extend(Fe);O.extend(Le);var qt={friday:5,saturday:6},z="",Dt="",Ct=void 0,Et="",nt=[],ct=[],St=new Map,It=[],yt=[],Q="",At="",Ht=["active","done","crit","milestone"],Ft=[],ot=!1,Lt=!1,Wt="sunday",mt="saturday",xt=0,Oe=c(function(){It=[],yt=[],Q="",Ft=[],ft=0,wt=void 0,ht=void 0,L=[],z="",Dt="",At="",Ct=void 0,Et="",nt=[],ct=[],ot=!1,Lt=!1,xt=0,St=new Map,Ie(),Wt="sunday",mt="saturday"},"clear"),Pe=c(function(t){Dt=t},"setAxisFormat"),Re=c(function(){return Dt},"getAxisFormat"),Ye=c(function(t){Ct=t},"setTickInterval"),Be=c(function(){return Ct},"getTickInterval"),Ne=c(function(t){Et=t},"setTodayMarker"),ze=c(function(){return Et},"getTodayMarker"),je=c(function(t){z=t},"setDateFormat"),qe=c(function(){ot=!0},"enableInclusiveEndDates"),Ue=c(function(){return ot},"endDatesAreInclusive"),Xe=c(function(){Lt=!0},"enableTopAxis"),Ge=c(function(){return Lt},"topAxisEnabled"),He=c(function(t){At=t},"setDisplayMode"),Ke=c(function(){return At},"getDisplayMode"),Je=c(function(){return z},"getDateFormat"),Qe=c(function(t){nt=t.toLowerCase().split(/[\s,]+/)},"setIncludes"),Ze=c(function(){return nt},"getIncludes"),$e=c(function(t){ct=t.toLowerCase().split(/[\s,]+/)},"setExcludes"),ts=c(function(){return ct},"getExcludes"),es=c(function(){return St},"getLinks"),ss=c(function(t){Q=t,It.push(t)},"addSection"),is=c(function(){return It},"getSections"),as=c(function(){let t=Ut();const s=10;let i=0;for(;!t&&i<s;)t=Ut(),i++;return yt=L,yt},"getTasks"),Kt=c(function(t,s,i,r){return r.includes(t.format(s.trim()))?!1:i.includes("weekends")&&(t.isoWeekday()===qt[mt]||t.isoWeekday()===qt[mt]+1)||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(t.format(s.trim()))},"isInvalidDate"),rs=c(function(t){Wt=t},"setWeekday"),ns=c(function(){return Wt},"getWeekday"),cs=c(function(t){mt=t},"setWeekend"),Jt=c(function(t,s,i,r){if(!i.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=O(t.startTime):n=O(t.startTime,s,!0),n=n.add(1,"d");let k;t.endTime instanceof Date?k=O(t.endTime):k=O(t.endTime,s,!0);const[h,F]=os(n,k,s,i,r);t.endTime=h.toDate(),t.renderEndTime=F},"checkTaskDates"),os=c(function(t,s,i,r,n){let k=!1,h=null;for(;t<=s;)k||(h=s.toDate()),k=Kt(t,i,r,n),k&&(s=s.add(1,"d")),t=t.add(1,"d");return[s,h]},"fixTaskDates"),_t=c(function(t,s,i){i=i.trim();const n=/^after\s+(?<ids>[\d\w- ]+)/.exec(i);if(n!==null){let h=null;for(const Y of n.groups.ids.split(" ")){let E=G(Y);E!==void 0&&(!h||E.endTime>h.endTime)&&(h=E)}if(h)return h.endTime;const F=new Date;return F.setHours(0,0,0,0),F}let k=O(i,s.trim(),!0);if(k.isValid())return k.toDate();{kt.debug("Invalid date:"+i),kt.debug("With date format:"+s.trim());const h=new Date(i);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+i);return h}},"getStartDate"),Qt=c(function(t){const s=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return s!==null?[Number.parseFloat(s[1]),s[2]]:[NaN,"ms"]},"parseDuration"),Zt=c(function(t,s,i,r=!1){i=i.trim();const k=/^until\s+(?<ids>[\d\w- ]+)/.exec(i);if(k!==null){let D=null;for(const W of k.groups.ids.split(" ")){let M=G(W);M!==void 0&&(!D||M.startTime<D.startTime)&&(D=M)}if(D)return D.startTime;const I=new Date;return I.setHours(0,0,0,0),I}let h=O(i,s.trim(),!0);if(h.isValid())return r&&(h=h.add(1,"d")),h.toDate();let F=O(t);const[Y,E]=Qt(i);if(!Number.isNaN(Y)){const D=F.add(Y,E);D.isValid()&&(F=D)}return F.toDate()},"getEndDate"),ft=0,J=c(function(t){return t===void 0?(ft=ft+1,"task"+ft):t},"parseId"),ls=c(function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const r=i.split(","),n={};Mt(r,n,Ht);for(let h=0;h<r.length;h++)r[h]=r[h].trim();let k="";switch(r.length){case 1:n.id=J(),n.startTime=t.endTime,k=r[0];break;case 2:n.id=J(),n.startTime=_t(void 0,z,r[0]),k=r[1];break;case 3:n.id=J(r[0]),n.startTime=_t(void 0,z,r[1]),k=r[2];break}return k&&(n.endTime=Zt(n.startTime,z,k,ot),n.manualEndTime=O(k,"YYYY-MM-DD",!0).isValid(),Jt(n,z,ct,nt)),n},"compileData"),us=c(function(t,s){let i;s.substr(0,1)===":"?i=s.substr(1,s.length):i=s;const r=i.split(","),n={};Mt(r,n,Ht);for(let k=0;k<r.length;k++)r[k]=r[k].trim();switch(r.length){case 1:n.id=J(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:r[0]};break;case 2:n.id=J(),n.startTime={type:"getStartDate",startData:r[0]},n.endTime={data:r[1]};break;case 3:n.id=J(r[0]),n.startTime={type:"getStartDate",startData:r[1]},n.endTime={data:r[2]};break}return n},"parseData"),wt,ht,L=[],$t={},ds=c(function(t,s){const i={section:Q,type:Q,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:s},task:t,classes:[]},r=us(ht,s);i.raw.startTime=r.startTime,i.raw.endTime=r.endTime,i.id=r.id,i.prevTaskId=ht,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,i.order=xt,xt++;const n=L.push(i);ht=i.id,$t[i.id]=n-1},"addTask"),G=c(function(t){const s=$t[t];return L[s]},"findTaskById"),fs=c(function(t,s){const i={section:Q,type:Q,description:t,task:t,classes:[]},r=ls(wt,s);i.startTime=r.startTime,i.endTime=r.endTime,i.id=r.id,i.active=r.active,i.done=r.done,i.crit=r.crit,i.milestone=r.milestone,wt=i,yt.push(i)},"addTaskOrg"),Ut=c(function(){const t=c(function(i){const r=L[i];let n="";switch(L[i].raw.startTime.type){case"prevTaskEnd":{const k=G(r.prevTaskId);r.startTime=k.endTime;break}case"getStartDate":n=_t(void 0,z,L[i].raw.startTime.startData),n&&(L[i].startTime=n);break}return L[i].startTime&&(L[i].endTime=Zt(L[i].startTime,z,L[i].raw.endTime.data,ot),L[i].endTime&&(L[i].processed=!0,L[i].manualEndTime=O(L[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Jt(L[i],z,ct,nt))),L[i].processed},"compileTask");let s=!0;for(const[i,r]of L.entries())t(i),s=s&&r.processed;return s},"compileTasks"),hs=c(function(t,s){let i=s;K().securityLevel!=="loose"&&(i=Se(s)),t.split(",").forEach(function(r){G(r)!==void 0&&(ee(r,()=>{window.open(i,"_self")}),St.set(r,i))}),te(t,"clickable")},"setLink"),te=c(function(t,s){t.split(",").forEach(function(i){let r=G(i);r!==void 0&&r.classes.push(s)})},"setClass"),ks=c(function(t,s,i){if(K().securityLevel!=="loose"||s===void 0)return;let r=[];if(typeof i=="string"){r=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let k=0;k<r.length;k++){let h=r[k].trim();h.startsWith('"')&&h.endsWith('"')&&(h=h.substr(1,h.length-2)),r[k]=h}}r.length===0&&r.push(t),G(t)!==void 0&&ee(t,()=>{Ae.runFunc(s,...r)})},"setClickFun"),ee=c(function(t,s){Ft.push(function(){const i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){s()})},function(){const i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){s()})})},"pushFun"),ys=c(function(t,s,i){t.split(",").forEach(function(r){ks(r,s,i)}),te(t,"clickable")},"setClickEvent"),ms=c(function(t){Ft.forEach(function(s){s(t)})},"bindFunctions"),gs={getConfig:c(()=>K().gantt,"getConfig"),clear:Oe,setDateFormat:je,getDateFormat:Je,enableInclusiveEndDates:qe,endDatesAreInclusive:Ue,enableTopAxis:Xe,topAxisEnabled:Ge,setAxisFormat:Pe,getAxisFormat:Re,setTickInterval:Ye,getTickInterval:Be,setTodayMarker:Ne,getTodayMarker:ze,setAccTitle:de,getAccTitle:ue,setDiagramTitle:le,getDiagramTitle:oe,setDisplayMode:He,getDisplayMode:Ke,setAccDescription:ce,getAccDescription:ne,addSection:ss,getSections:is,getTasks:as,addTask:ds,findTaskById:G,addTaskOrg:fs,setIncludes:Qe,getIncludes:Ze,setExcludes:$e,getExcludes:ts,setClickEvent:ys,setLink:hs,getLinks:es,bindFunctions:ms,parseDuration:Qt,isInvalidDate:Kt,setWeekday:rs,getWeekday:ns,setWeekend:cs};function Mt(t,s,i){let r=!0;for(;r;)r=!1,i.forEach(function(n){const k="^\\s*"+n+"\\s*$",h=new RegExp(k);t[0].match(h)&&(s[n]=!0,t.shift(1),r=!0)})}c(Mt,"getTaskTags");var ps=c(function(){kt.debug("Something is calling, setConf, remove the call")},"setConf"),Xt={monday:De,tuesday:we,wednesday:_e,thursday:xe,friday:be,saturday:Te,sunday:ve},vs=c((t,s)=>{let i=[...t].map(()=>-1/0),r=[...t].sort((k,h)=>k.startTime-h.startTime||k.order-h.order),n=0;for(const k of r)for(let h=0;h<i.length;h++)if(k.startTime>=i[h]){i[h]=k.endTime,k.order=h+s,h>n&&(n=h);break}return n},"getMaxIntersections"),U,Ts=c(function(t,s,i,r){const n=K().gantt,k=K().securityLevel;let h;k==="sandbox"&&(h=dt("#i"+s));const F=k==="sandbox"?dt(h.nodes()[0].contentDocument.body):dt("body"),Y=k==="sandbox"?h.nodes()[0].contentDocument:document,E=Y.getElementById(s);U=E.parentElement.offsetWidth,U===void 0&&(U=1200),n.useWidth!==void 0&&(U=n.useWidth);const D=r.db.getTasks();let I=[];for(const m of D)I.push(m.type);I=rt(I);const W={};let M=2*n.topPadding;if(r.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const m={};for(const p of D)m[p.section]===void 0?m[p.section]=[p]:m[p.section].push(p);let T=0;for(const p of Object.keys(m)){const v=vs(m[p],T)+1;T+=v,M+=v*(n.barHeight+n.barGap),W[p]=v}}else{M+=D.length*(n.barHeight+n.barGap);for(const m of I)W[m]=D.filter(T=>T.type===m).length}E.setAttribute("viewBox","0 0 "+U+" "+M);const P=F.select(`[id="${s}"]`),b=fe().domain([he(D,function(m){return m.startTime}),ke(D,function(m){return m.endTime})]).rangeRound([0,U-n.leftPadding-n.rightPadding]);function Z(m,T){const p=m.startTime,v=T.startTime;let y=0;return p>v?y=1:p<v&&(y=-1),y}c(Z,"taskCompare"),D.sort(Z),$(D,U,M),ye(P,M,U,n.useMaxWidth),P.append("text").text(r.db.getDiagramTitle()).attr("x",U/2).attr("y",n.titleTopMargin).attr("class","titleText");function $(m,T,p){const v=n.barHeight,y=v+n.barGap,_=n.topPadding,o=n.leftPadding,u=me().domain([0,I.length]).range(["#00B9FA","#F95002"]).interpolate(ge);et(y,_,o,T,p,m,r.db.getExcludes(),r.db.getIncludes()),st(o,_,T,p),tt(m,y,_,o,v,u,T),it(y,_),at(o,_,T,p)}c($,"makeGantt");function tt(m,T,p,v,y,_,o){const f=[...new Set(m.map(l=>l.order))].map(l=>m.find(e=>e.order===l));P.append("g").selectAll("rect").data(f).enter().append("rect").attr("x",0).attr("y",function(l,e){return e=l.order,e*T+p-2}).attr("width",function(){return o-n.rightPadding/2}).attr("height",T).attr("class",function(l){for(const[e,C]of I.entries())if(l.type===C)return"section section"+e%n.numberSectionStyles;return"section section0"});const d=P.append("g").selectAll("rect").data(m).enter(),g=r.db.getLinks();if(d.append("rect").attr("id",function(l){return l.id}).attr("rx",3).attr("ry",3).attr("x",function(l){return l.milestone?b(l.startTime)+v+.5*(b(l.endTime)-b(l.startTime))-.5*y:b(l.startTime)+v}).attr("y",function(l,e){return e=l.order,e*T+p}).attr("width",function(l){return l.milestone?y:b(l.renderEndTime||l.endTime)-b(l.startTime)}).attr("height",y).attr("transform-origin",function(l,e){return e=l.order,(b(l.startTime)+v+.5*(b(l.endTime)-b(l.startTime))).toString()+"px "+(e*T+p+.5*y).toString()+"px"}).attr("class",function(l){const e="task";let C="";l.classes.length>0&&(C=l.classes.join(" "));let x=0;for(const[V,S]of I.entries())l.type===S&&(x=V%n.numberSectionStyles);let w="";return l.active?l.crit?w+=" activeCrit":w=" active":l.done?l.crit?w=" doneCrit":w=" done":l.crit&&(w+=" crit"),w.length===0&&(w=" task"),l.milestone&&(w=" milestone "+w),w+=x,w+=" "+C,e+w}),d.append("text").attr("id",function(l){return l.id+"-text"}).text(function(l){return l.task}).attr("font-size",n.fontSize).attr("x",function(l){let e=b(l.startTime),C=b(l.renderEndTime||l.endTime);l.milestone&&(e+=.5*(b(l.endTime)-b(l.startTime))-.5*y),l.milestone&&(C=e+y);const x=this.getBBox().width;return x>C-e?C+x+1.5*n.leftPadding>o?e+v-5:C+v+5:(C-e)/2+e+v}).attr("y",function(l,e){return e=l.order,e*T+n.barHeight/2+(n.fontSize/2-2)+p}).attr("text-height",y).attr("class",function(l){const e=b(l.startTime);let C=b(l.endTime);l.milestone&&(C=e+y);const x=this.getBBox().width;let w="";l.classes.length>0&&(w=l.classes.join(" "));let V=0;for(const[A,j]of I.entries())l.type===j&&(V=A%n.numberSectionStyles);let S="";return l.active&&(l.crit?S="activeCritText"+V:S="activeText"+V),l.done?l.crit?S=S+" doneCritText"+V:S=S+" doneText"+V:l.crit&&(S=S+" critText"+V),l.milestone&&(S+=" milestoneText"),x>C-e?C+x+1.5*n.leftPadding>o?w+" taskTextOutsideLeft taskTextOutside"+V+" "+S:w+" taskTextOutsideRight taskTextOutside"+V+" "+S+" width-"+x:w+" taskText taskText"+V+" "+S+" width-"+x}),K().securityLevel==="sandbox"){let l;l=dt("#i"+s);const e=l.nodes()[0].contentDocument;d.filter(function(C){return g.has(C.id)}).each(function(C){var x=e.querySelector("#"+C.id),w=e.querySelector("#"+C.id+"-text");const V=x.parentNode;var S=e.createElement("a");S.setAttribute("xlink:href",g.get(C.id)),S.setAttribute("target","_top"),V.appendChild(S),S.appendChild(x),S.appendChild(w)})}}c(tt,"drawRects");function et(m,T,p,v,y,_,o,u){if(o.length===0&&u.length===0)return;let f,d;for(const{startTime:x,endTime:w}of _)(f===void 0||x<f)&&(f=x),(d===void 0||w>d)&&(d=w);if(!f||!d)return;if(O(d).diff(O(f),"year")>5){kt.warn("The difference between the min and max time is more than 5 years. This will cause performance issues. Skipping drawing exclude days.");return}const g=r.db.getDateFormat(),a=[];let l=null,e=O(f);for(;e.valueOf()<=d;)r.db.isInvalidDate(e,g,o,u)?l?l.end=e:l={start:e,end:e}:l&&(a.push(l),l=null),e=e.add(1,"d");P.append("g").selectAll("rect").data(a).enter().append("rect").attr("id",function(x){return"exclude-"+x.start.format("YYYY-MM-DD")}).attr("x",function(x){return b(x.start)+p}).attr("y",n.gridLineStartPadding).attr("width",function(x){const w=x.end.add(1,"day");return b(w)-b(x.start)}).attr("height",y-T-n.gridLineStartPadding).attr("transform-origin",function(x,w){return(b(x.start)+p+.5*(b(x.end)-b(x.start))).toString()+"px "+(w*m+.5*y).toString()+"px"}).attr("class","exclude-range")}c(et,"drawExcludeDays");function st(m,T,p,v){let y=pe(b).tickSize(-v+T+n.gridLineStartPadding).tickFormat(Pt(r.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const o=/^([1-9]\d*)(millisecond|second|minute|hour|day|week|month)$/.exec(r.db.getTickInterval()||n.tickInterval);if(o!==null){const u=o[1],f=o[2],d=r.db.getWeekday()||n.weekday;switch(f){case"millisecond":y.ticks(jt.every(u));break;case"second":y.ticks(zt.every(u));break;case"minute":y.ticks(Nt.every(u));break;case"hour":y.ticks(Bt.every(u));break;case"day":y.ticks(Yt.every(u));break;case"week":y.ticks(Xt[d].every(u));break;case"month":y.ticks(Rt.every(u));break}}if(P.append("g").attr("class","grid").attr("transform","translate("+m+", "+(v-50)+")").call(y).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),r.db.topAxisEnabled()||n.topAxis){let u=Ce(b).tickSize(-v+T+n.gridLineStartPadding).tickFormat(Pt(r.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(o!==null){const f=o[1],d=o[2],g=r.db.getWeekday()||n.weekday;switch(d){case"millisecond":u.ticks(jt.every(f));break;case"second":u.ticks(zt.every(f));break;case"minute":u.ticks(Nt.every(f));break;case"hour":u.ticks(Bt.every(f));break;case"day":u.ticks(Yt.every(f));break;case"week":u.ticks(Xt[g].every(f));break;case"month":u.ticks(Rt.every(f));break}}P.append("g").attr("class","grid").attr("transform","translate("+m+", "+T+")").call(u).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}c(st,"makeGrid");function it(m,T){let p=0;const v=Object.keys(W).map(y=>[y,W[y]]);P.append("g").selectAll("text").data(v).enter().append(function(y){const _=y[0].split(Ee.lineBreakRegex),o=-(_.length-1)/2,u=Y.createElementNS("http://www.w3.org/2000/svg","text");u.setAttribute("dy",o+"em");for(const[f,d]of _.entries()){const g=Y.createElementNS("http://www.w3.org/2000/svg","tspan");g.setAttribute("alignment-baseline","central"),g.setAttribute("x","10"),f>0&&g.setAttribute("dy","1em"),g.textContent=d,u.appendChild(g)}return u}).attr("x",10).attr("y",function(y,_){if(_>0)for(let o=0;o<_;o++)return p+=v[_-1][1],y[1]*m/2+p*m+T;else return y[1]*m/2+T}).attr("font-size",n.sectionFontSize).attr("class",function(y){for(const[_,o]of I.entries())if(y[0]===o)return"sectionTitle sectionTitle"+_%n.numberSectionStyles;return"sectionTitle"})}c(it,"vertLabels");function at(m,T,p,v){const y=r.db.getTodayMarker();if(y==="off")return;const _=P.append("g").attr("class","today"),o=new Date,u=_.append("line");u.attr("x1",b(o)+m).attr("x2",b(o)+m).attr("y1",n.titleTopMargin).attr("y2",v-n.titleTopMargin).attr("class","today"),y!==""&&u.attr("style",y.replace(/,/g,";"))}c(at,"drawToday");function rt(m){const T={},p=[];for(let v=0,y=m.length;v<y;++v)Object.prototype.hasOwnProperty.call(T,m[v])||(T[m[v]]=!0,p.push(m[v]));return p}c(rt,"checkUnique")},"draw"),bs={setConf:ps,draw:Ts},xs=c(t=>`
  .mermaid-main-font {
        font-family: ${t.fontFamily};
  }

  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    font-family: ${t.fontFamily};
  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
  }

  .grid .tick text {
    font-family: ${t.fontFamily};
    fill: ${t.textColor};
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    font-family: ${t.fontFamily};
  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
  }


  /* Special case clickable */

  .task.clickable {
    cursor: pointer;
  }

  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }


  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.titleColor||t.textColor};
    font-family: ${t.fontFamily};
  }
`,"getStyles"),_s=xs,Cs={parser:Ve,db:gs,renderer:bs,styles:_s};export{Cs as diagram};
