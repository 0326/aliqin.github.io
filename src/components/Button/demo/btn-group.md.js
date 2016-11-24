webpackJsonp([129,182],{342:function(n,a){"use strict";n.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:5,title:{"zh-CN":"\u6309\u94ae\u7ec4","en-US":"Type"},filename:"src/components/Button/demo/btn-group.md",id:"src-components-Button-demo-btn-group"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button-group</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >secondary</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>cancel<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >primary</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>ok<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button-group</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span><span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button-group</span> <span class="token attr-name" >large</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >primary</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>L<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >secondary</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>M<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >tertiary</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>M<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button-group</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span><span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button-group</span> <span class="token attr-name" >small</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>L<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>M<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>M<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span> <span class="token attr-name" >disabled</span> <span class="token attr-name" >value</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>R<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button-group</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span><span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button-group</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>prev<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>icon</span><span class="token punctuation" >></span></span>\u4e0a\u4e00\u9875\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span><span class="token punctuation" >></span></span>\n    \u4e0b\u4e00\u9875<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>next<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>icon</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button-group</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>br</span><span class="token punctuation" >/></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>button-group</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>head<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>icon</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-button</span><span class="token punctuation" >></span></span>\n    <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>icon</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>tail<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>icon</span><span class="token punctuation" >></span></span>\n  <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-button</span><span class="token punctuation" >></span></span>\n<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>button-group</span><span class="token punctuation" >></span></span>'}],preview:'<button-group>\n  <v-button secondary value="cancel"></v-button>\n  <v-button primary value="ok"></v-button>\n</button-group>\n<br/>\n<button-group large>\n  <v-button primary value="L"></v-button>\n  <v-button secondary value="M"></v-button>\n  <v-button tertiary value="M"></v-button>\n</button-group>\n<br/>\n<button-group small>\n  <v-button disabled value="L"></v-button>\n  <v-button disabled value="M"></v-button>\n  <v-button disabled value="M"></v-button>\n  <v-button disabled value="R"></v-button>\n</button-group>\n<br/>\n<button-group>\n  <v-button>\n    <icon type="prev"></icon>\u4e0a\u4e00\u9875\n  </v-button>\n  <v-button>\n    \u4e0b\u4e00\u9875<icon type="next"></icon>\n  </v-button>\n</button-group>\n<br/>\n<button-group>\n  <v-button>\n    <icon type="head"></icon>\n  </v-button>\n  <v-button>\n    <icon type="tail"></icon>\n  </v-button>\n</button-group>',vueScript:"new Vue({\n  el: 'body',\n  components: {\n    vButton: atui.Button,\n    buttonGroup: atui.Button.Group,\n    icon: atui.Icon\n  }\n})"}}});