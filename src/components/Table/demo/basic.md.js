webpackJsonp([47,185],{427:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u6700\u57fa\u672c\u7684\u6570\u636e\u5c55\u793a"]],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Type"},filename:"src/components/Table/demo/basic.md",id:"src-components-Table-demo-basic"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-table</span> <span class="token attr-name" >:data-source</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridData<span class="token punctuation" >"</span></span> <span class="token attr-name" >:columns</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridColumns<span class="token punctuation" >"</span></span> <span class="token attr-name" >row-key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>key<span class="token punctuation" >"</span></span> <span class="token attr-name" >@row-click</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>rowClick<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-table</span><span class="token punctuation" >></span></span>'}],preview:'<v-table :data-source="gridData" :columns="gridColumns" row-key="key" @row-click="rowClick"></v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540d<img src=\"//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png\" width=\"50px\">',\n  dataIndex: 'name',\n  width:150\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  width:250\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filterMultiple: false,\n  width:250\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation',\n    render: function(text, record) {\n      if(record) {\n        return '<icon type=\"info-s\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">\u8be6\u60c5</a>'\n      }\n    }\n  }\n];\n\nvar data = [{\n  key: '1',\n  name: '-1\u6761',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7<img src=\"//img.alicdn.com/tps/i2/TB1nff4IpXXXXc1XVXX.7lBQXXX-380-54.png\" width=\"50px\">',\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed12\u53f7',\n}, {\n  key: '3',\n  name: '\u674e\u5927\u5634',\n  age: 32,\n  address: '\u5357\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n}, {\n  key: '4',\n  name: '\u674e\u79c0\u83b2\u5927\u5634\u54e5',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed123\u53f7',\n},\n{\n  key: '5',\n  name: '\u5218\u5fb7\u534e',\n  age: 54,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed999\u53f7',\n},\n{\n  key: '6',\n  name: '\u6d2a\u91d1\u5b9d',\n  age: 66,\n  address: '\u9999\u6e2f\u5f25\u6566\u90531',\n}]\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    icon: atui.Icon\n  },\n  data () {\n    return {\n      gridData:data,\n      gridColumns: columns\n    }\n  },\n  methods: {\n    rowClick (rowIndex, record) {\n      console.log(rowIndex, record)\n    }\n  }\n})"}}});