webpackJsonp([116,184],{357:function(n,a){"use strict";n.exports={content:["section",["h2","\u4f7f\u7528\u51c6\u5907"],["p","\u9700\u8981\u4e00\u4e2a\u6570\u636e\u6e90\u6765\u7ed1\u5b9a,\u6bd4\u5982"],["pre",{lang:"js",highlighted:'<span class="token keyword" >var</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6d59\u6c5f\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u676d\u5dde\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u897f\u6e56\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >,</span> <span class="token punctuation" >{</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'jiangsu\'</span><span class="token punctuation" >,</span>\n  label<span class="token punctuation" >:</span> <span class="token string" >\'\u6c5f\u82cf\'</span><span class="token punctuation" >,</span>\n  children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n    value<span class="token punctuation" >:</span> <span class="token string" >\'nanjing\'</span><span class="token punctuation" >,</span>\n    label<span class="token punctuation" >:</span> <span class="token string" >\'\u5357\u4eac\'</span><span class="token punctuation" >,</span>\n    children<span class="token punctuation" >:</span> <span class="token punctuation" >[</span><span class="token punctuation" >{</span>\n      value<span class="token punctuation" >:</span> <span class="token string" >\'zhonghuamen\'</span><span class="token punctuation" >,</span>\n      label<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u534e\u95e8\'</span><span class="token punctuation" >,</span>\n    <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >]</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >]</span>\n\n<span class="token keyword" >var</span> defaultValue <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token string" >\'zhejiang\'</span><span class="token punctuation" >,</span> <span class="token string" >\'hangzhou\'</span><span class="token punctuation" >,</span> <span class="token string" >\'xihu\'</span><span class="token punctuation" >]</span>\n\n<span class="token keyword" >new</span> <span class="token class-name" >Vue</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  el<span class="token punctuation" >:</span> <span class="token string" >\'body\'</span><span class="token punctuation" >,</span>\n  components<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    cascader<span class="token punctuation" >:</span> atui<span class="token punctuation" >.</span>Cascader\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  data <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >{</span>\n      options<span class="token punctuation" >:</span> options<span class="token punctuation" >,</span>\n      defaultValue<span class="token punctuation" >:</span> defaultValue\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  methods<span class="token punctuation" >:</span> <span class="token punctuation" >{</span>\n    <span class="token function" >selectChange</span><span class="token punctuation" >(</span>selectedValue<span class="token punctuation" >,</span> option<span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n      console<span class="token punctuation" >.</span><span class="token function" >log</span><span class="token punctuation" >(</span>selectedValue<span class="token punctuation" >)</span>\n    <span class="token punctuation" >}</span>\n  <span class="token punctuation" >}</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span>'},["code","var options = [{\n  value: 'zhejiang',\n  label: '\u6d59\u6c5f',\n  children: [{\n    value: 'hangzhou',\n    label: '\u676d\u5dde',\n    children: [{\n      value: 'xihu',\n      label: '\u897f\u6e56',\n    }],\n  }],\n}, {\n  value: 'jiangsu',\n  label: '\u6c5f\u82cf',\n  children: [{\n    value: 'nanjing',\n    label: '\u5357\u4eac',\n    children: [{\n      value: 'zhonghuamen',\n      label: '\u4e2d\u534e\u95e8',\n    }],\n  }],\n}]\n\nvar defaultValue = ['zhejiang', 'hangzhou', 'xihu']\n\nnew Vue({\n  el: 'body',\n  components: {\n    cascader: atui.Cascader\n  },\n  data () {\n    return {\n      options: options,\n      defaultValue: defaultValue\n    }\n  },\n  methods: {\n    selectChange(selectedValue, option) {\n      console.log(selectedValue)\n    }\n  }\n})"]]],meta:{category:"Components",type:"Form Controls",title:"Cascader",subtitle:"\u7ea7\u8054\u9009\u62e9\u5668",filename:"src/components/Cascader/index.md"},toc:["ul",["li",["a",{href:"#\u4f7f\u7528\u51c6\u5907"},"\u4f7f\u7528\u51c6\u5907"]],["li",["a",{href:"#API"},"API"]]],api:["section",["h2","API"],["table",["thead",["tr",["th","\u5c5e\u6027"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","options"],["td","\u663e\u793a\u7684\u6781\u8054\u6570\u636e\u9009\u9879\uff0c\u5fc5\u4f20"],["td","Array"],["td","[]"]],["tr",["td","placeholder"],["td","\u5360\u4f4d\u7b26"],["td","String"],["td","\u8bf7\u9009\u62e9"]],["tr",["td","width"],["td","\u5bbd\u5ea6"],["td","String"]],["tr",["td","displayRender"],["td","\u663e\u793a\u683c\u5f0f\u5f0f\u5316\u51fd\u6570"],["td","Function"],["td","function(label) { return label.join(' / ') }"]],["tr",["td","defaultValue"],["td","\u9ed8\u8ba4\u663e\u793a\u7684\u6570\u636e"],["td","Array"],["td","[]"]]]]]}}});