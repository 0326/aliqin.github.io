webpackJsonp([69,186],{456:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u4f7f\u7528 visible \u5c5e\u6027\u63a7\u5236\u6d6e\u5c42\u663e\u793a\uff0c\u5728pop-change\u4e8b\u4ef6\u4e2d\u540c\u6b65visible\u7684\u72b6\u6001\u503c"]],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u53ef\u4ee5\u5173\u95ed\u7684","en-US":"Close"},filename:"src/components/Popover/demo/close.md",id:"src-components-Popover-demo-close"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>popover</span>\n  <span class="token attr-name">effect</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>fade<span class="token punctuation">"</span></span>\n  <span class="token attr-name">placement</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:visible</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>visible<span class="token punctuation">"</span></span>\n  <span class="token attr-name">@pop-change</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>(show)</span> <span class="token attr-name">=</span><span class="token punctuation">></span> <span class="token attr-name">visible</span> <span class="token attr-value"><span class="token punctuation">=</span> show<span class="token punctuation">"</span></span>\n  <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>\u6211\u662f\u6807\u9898<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>content<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token operator">&lt;</span>v<span class="token operator">-</span>button @click<span class="token punctuation">.</span>native<span class="token operator">=</span><span class="token string">"visible = false"</span><span class="token operator">></span>\u70b9\u6211\u5173\u95ed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-button</span><span class="token punctuation">></span></span>Popover on bottom<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>popover</span><span class="token punctuation">></span></span>'}],preview:'<popover\n  effect="fade"\n  placement="bottom"\n  :visible="visible"\n  @pop-change="(show) => visible = show"\n  title="\u6211\u662f\u6807\u9898">\n  <div slot="content">\n  <p>\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c\u6211\u662f\u6587\u5b57\uff0c</p>\n  <v-button @click.native="visible = false">\u70b9\u6211\u5173\u95ed</v-button>\n  </div>\n  <v-button>Popover on bottom</v-button>\n</popover>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    popover: atui.Popover,\n    vButton: atui.Button\n  },\n  data() {\n    return {\n      visible: false\n    }\n  }\n})"}}});