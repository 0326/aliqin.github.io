webpackJsonp([61,192],{470:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u5e26\u6709\u8f93\u5165\u6846\u7684\u6ed1\u5757","en-US":"Type"},filename:"src/components/Slider/demo/input.md",id:"src-components-Slider-demo-input"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-row</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>14<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>slider</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sliderValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>slider</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-col</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-col</span> <span class="token attr-name">span</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text<span class="token punctuation">"</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sliderValue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-input</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-col</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-row</span><span class="token punctuation">></span></span>'}],preview:'<v-row>\n  <v-col span="14">\n    <slider v-model="sliderValue"></slider>\n  </v-col>\n  <v-col span="10">\n    <v-input type="text" v-model="sliderValue"></v-input>\n  </v-col>\n</v-row>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    slider: atui.Slider,\n    vRow: atui.Layout.Row,\n    vCol: atui.Layout.Col,\n    vInput: atui.Input\n  },\n  data: {\n    sliderValue : 5\n  }\n})"}}});