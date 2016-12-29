webpackJsonp([16,185],{458:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Tree/demo/basic.md",id:"src-components-Tree-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-tree</span> <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>myTree<span class="token punctuation">"</span></span> <span class="token attr-name">@expand</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onExpand<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-tree</span><span class="token punctuation">></span></span>'}],preview:'<v-tree :data-source="dataSource" ref="myTree" @expand="onExpand"></v-tree>',vueScript:"let treeData = {\n  name: 'My Tree',\n  children: [\n    { name: 'hello' },\n    { name: 'wat' },\n    {\n      name: 'child folder',\n      children: [\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        },\n        { name: 'hello' },\n        { name: 'wat' },\n        {\n          name: 'child folder',\n          children: [\n            { name: 'hello' },\n            { name: 'wat' }\n          ]\n        }\n      ]\n    }\n  ]\n}\nnew Vue({\n  el: 'body',\n  components: {\n    vTree: atui.Tree\n  },\n  data: {\n    dataSource: treeData\n  },\n  methods: {\n    onExpand () {\n      console.log(arguments)\n    }\n  }\n})"}}});