webpackJsonp([64,185],{410:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","tags(\u8f93\u5165\u56de\u8f66\u65f6\u53d8\u6210\u4e00\u4e2atag)"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u6807\u7b7e","en-US":"Type"},filename:"src/components/Select/demo/tag.md",id:"src-components-Select-demo-tag"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-select</span> <span class="token attr-name" >tags</span> <span class="token attr-name" >placeholder</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>\u8bf7\u8f93\u5165<span class="token punctuation" >"</span></span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Banana<span class="token punctuation" >"</span></span><span class="token style-attr language-css" ><span class="token attr-name" > <span class="token attr-name" >style</span></span><span class="token punctuation" >="</span><span class="token attr-value" ><span class="token property" >width</span><span class="token punctuation" >:</span><span class="token number" >100%</span><span class="token punctuation" >;</span></span><span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Apple<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Apple<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Banana<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Banana<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Cherry<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Cherry<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Orange<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Orange<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-option</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>Grape<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>Grape<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-option</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-select</span><span class="token punctuation" >></span></span>'}],preview:'<v-select tags placeholder="\u8bf7\u8f93\u5165" value="Banana" style="width:100%;">\n  <v-option value="Apple">Apple</v-option>\n  <v-option value="Banana">Banana</v-option>\n  <v-option value="Cherry">Cherry</v-option>\n  <v-option value="Orange">Orange</v-option>\n  <v-option value="Grape">Grape</v-option>\n</v-select>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vSelect: atui.Select,\n    vOption: atui.Select.Option\n  },\n  data() {\n    return {\n      single: ''\n    }\n  },\n  methods: {\n    onSlectChange (obj) {\n      this.single = obj.value;\n    }\n  }\n})"}}});