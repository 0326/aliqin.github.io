webpackJsonp([149,192],{382:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Accordion/demo/basic.md",id:"src-components-Accordion-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>accordion</span> <span class="token attr-name">open-one</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>panel</span> <span class="token attr-name">open</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>panel-header<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Panel #<span class="token number">1</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    \u5185\u5bb9\u4e00\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>panel-header<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Panel #<span class="token number">2</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    \u5185\u5bb9\u4e8c\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>panel-header<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Panel #<span class="token number">3</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    \u5185\u5bb9\u4e09\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>panel</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>panel</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>panel-header<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>custom-class<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Panel #<span class="token number">4</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    \u5185\u5bb9\u56db\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>panel</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>accordion</span><span class="token punctuation">></span></span>'}],preview:'<accordion open-one>\n  <panel open>\n    <div slot="panel-header" class="custom-class">Panel #1</div>\n    \u5185\u5bb9\u4e00\n  </panel>\n  <panel>\n    <div slot="panel-header" class="custom-class">Panel #2</div>\n    \u5185\u5bb9\u4e8c\n  </panel>\n  <panel>\n    <div slot="panel-header" class="custom-class">Panel #3</div>\n    \u5185\u5bb9\u4e09\n  </panel>\n  <panel>\n    <div slot="panel-header" class="custom-class">Panel #4</div>\n    \u5185\u5bb9\u56db\n  </panel>\n</accordion>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    accordion: atui.Accordion,\n    panel: atui.Accordion.Panel\n  }\n})"}}});