(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["highlight/groovy-js-js","highlight/groovy"],{54658:e=>{function n(e,n={}){return n.variants=e,n}e.exports=function(e){const a=e.regex,t="[A-Za-z0-9_$]+",i=n([e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE,e.COMMENT("/\\*\\*","\\*/",{relevance:0,contains:[{begin:/\w+@/,relevance:0},{className:"doctag",begin:"@[A-Za-z]+"}]})]),s={className:"regexp",begin:/~?\/[^\/\n]+\//,contains:[e.BACKSLASH_ESCAPE]},l=n([e.BINARY_NUMBER_MODE,e.C_NUMBER_MODE]),r=n([{begin:/"""/,end:/"""/},{begin:/'''/,end:/'''/},{begin:"\\$/",end:"/\\$",relevance:10},e.APOS_STRING_MODE,e.QUOTE_STRING_MODE],{className:"string"}),o={match:[/(class|interface|trait|enum|record|extends|implements)/,/\s+/,e.UNDERSCORE_IDENT_RE],scope:{1:"keyword",3:"title.class"}};return{name:"Groovy",keywords:{"variable.language":"this super",literal:"true false null",type:["byte","short","char","int","long","boolean","float","double","void"],keyword:["def","as","in","assert","trait","abstract","static","volatile","transient","public","private","protected","synchronized","final","class","interface","enum","if","else","for","while","switch","case","break","default","continue","throw","throws","try","catch","finally","implements","extends","new","import","package","return","instanceof","var"]},contains:[e.SHEBANG({binary:"groovy",relevance:10}),i,r,s,l,o,{className:"meta",begin:"@[A-Za-z]+",relevance:0},{className:"attr",begin:t+"[ \t]*:",relevance:0},{begin:/\?/,end:/:/,relevance:0,contains:[i,r,s,l,"self"]},{className:"symbol",begin:"^[ \t]*"+a.lookahead(t+":"),excludeBegin:!0,end:t+":",relevance:0}],illegal:/#|<\//}}},56464:(e,n,a)=>{!function e(){e.warned||(e.warned=!0,console.log('Deprecation (warning): Using file extension in specifier is deprecated, use "highlight.js/lib/languages/groovy" instead of "highlight.js/lib/languages/groovy.js"'))}(),e.exports=a(54658)}}]);
//# sourceMappingURL=groovy-js-js.js.map?v=4dc3a184f5fecef89600