webpackJsonp([40,186],{485:function(n,t){"use strict";n.exports={content:["section",["p","\u5c55\u793a\u884c\u5217\u6570\u636e\u3002"],["h2","\u4f55\u65f6\u4f7f\u7528"],["ul",["li",["p","\u5f53\u6709\u5927\u91cf\u7ed3\u6784\u5316\u7684\u6570\u636e\u9700\u8981\u5c55\u73b0\u65f6\uff1b"]],["li",["p","\u5f53\u9700\u8981\u5bf9\u6570\u636e\u8fdb\u884c\u6392\u5e8f\u3001\u641c\u7d22\u3001\u5206\u9875\u3001\u81ea\u5b9a\u4e49\u64cd\u4f5c\u7b49\u590d\u6742\u884c\u4e3a\u65f6\u3002"]]],["h2","\u5982\u4f55\u4f7f\u7528"],["p","\u6307\u5b9a\u8868\u683c\u7684\u6570\u636e\u6e90 ",["code","dataSource"]," \u4e3a\u4e00\u4e2a\u6570\u7ec4\u3002"],["pre",{lang:"jsx",highlighted:'<span class="token keyword">const</span> dataSource <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'1\'</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'\u80e1\u5f66\u658c\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token number">32</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'2\'</span><span class="token punctuation">,</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'\u80e1\u5f66\u7956\'</span><span class="token punctuation">,</span>\n  age<span class="token punctuation">:</span> <span class="token number">42</span><span class="token punctuation">,</span>\n  address<span class="token punctuation">:</span> <span class="token string">\'\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> columns <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u59d3\u540d\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'name\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u5e74\u9f84\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'age\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  title<span class="token punctuation">:</span> <span class="token string">\'\u4f4f\u5740\'</span><span class="token punctuation">,</span>\n  dataIndex<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n  key<span class="token punctuation">:</span> <span class="token string">\'address\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>v-table</span> <span class="token attr-name">:data-source</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>dataSource<span class="token punctuation">"</span></span> <span class="token attr-name">:columns</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>columns<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>v-table</span><span class="token punctuation">></span></span>'},["code","const dataSource = [{\n  key: '1',\n  name: '\u80e1\u5f66\u658c',\n  age: 32,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7'\n}, {\n  key: '2',\n  name: '\u80e1\u5f66\u7956',\n  age: 42,\n  address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7'\n}];\n\nconst columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  key: 'name',\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  key: 'age',\n}, {\n  title: '\u4f4f\u5740',\n  dataIndex: 'address',\n  key: 'address',\n}];\n\n<v-table :data-source=\"dataSource\" :columns=\"columns\"></v-table>"]]],meta:{category:"Components",chinese:"\u8868\u683c",cols:1,type:"Views",english:"Table",filename:"src/components/Table/index.md"},toc:["ul",["li",["a",{href:"#\u4f55\u65f6\u4f7f\u7528"},"\u4f55\u65f6\u4f7f\u7528"]],["li",["a",{href:"#\u5982\u4f55\u4f7f\u7528"},"\u5982\u4f55\u4f7f\u7528"]],["li",["a",{href:"#API"},"API"]],["li",["a",{href:"#\u6ce8\u610f"},"\u6ce8\u610f"]]],api:["section",["h2","API"],["h3","Table"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","rowSelection"],["td","\u5217\u8868\u9879\u662f\u5426\u53ef\u9009\u62e9\uff0c",["a",{title:null,href:"#rowSelection"},"\u914d\u7f6e\u9879"]],["td","Object"],["td","null"]],["tr",["td","pagination"],["td","\u5206\u9875\u5668\uff0c\u914d\u7f6e\u9879\u53c2\u8003 ",["a",{title:null,href:"/components/pagination"},"pagination"],"\uff0c\u8bbe\u4e3a false \u65f6\u4e0d\u663e\u793a\u5206\u9875"],["td","Object"],["td"]],["tr",["td","size"],["td","\u6b63\u5e38\u6216\u8ff7\u4f60\u7c7b\u578b\uff0c",["code","default"]," or ",["code","small"]],["td","String"],["td","default"]],["tr",["td","dataSource"],["td","\u6570\u636e\u6570\u7ec4"],["td","Array"],["td"]],["tr",["td","columns"],["td","\u8868\u683c\u5217\u7684\u914d\u7f6e\u63cf\u8ff0\uff0c\u5177\u4f53\u9879\u89c1\u4e0b\u8868"],["td","Array"],["td","-"]],["tr",["td","rowKey"],["td","\u8868\u683c\u884c key \u7684\u53d6\u503c\uff0c\u53ef\u4ee5\u662f\u5b57\u7b26\u4e32\u6216\u4e00\u4e2a\u51fd\u6570"],["td","String or Function(record, index):string"],["td","'key'"]],["tr",["td","@change"],["td","\u5206\u9875\u3001\u6392\u5e8f\u3001\u7b5b\u9009\u53d8\u5316\u65f6\u89e6\u53d1"],["td","Function(pagination, filters, sorter)"],["td"]],["tr",["td","@row-click"],["td","\u8868\u683c\u884c\u70b9\u51fb\u4e8b\u4ef6"],["td","Function(rowIndex, record)"],["td"]],["tr",["td","expandedRowRender"],["td","\u989d\u5916\u7684\u5c55\u5f00\u884c"],["td","Function(record)"],["td"]],["tr",["td","rowExpandable"],["td","\u51b3\u5b9a\u8be5\u884c\u662f\u5426\u53ef\u5c55\u5f00,\u8fd4\u56defalse\u8868\u793a\u4e0d\u652f\u6301\u5c55\u5f00"],["td","Function(record, rowIndex)"],["td"]],["tr",["td","loading"],["td","\u9875\u9762\u662f\u5426\u52a0\u8f7d\u4e2d"],["td","Boolean"],["td","false"]]]],["h3","Column"],["p","\u5217\u63cf\u8ff0\u6570\u636e\u5bf9\u8c61\uff0c\u662f columns \u4e2d\u7684\u4e00\u9879\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","key"],["td","React \u9700\u8981\u7684 key\uff0c\u5efa\u8bae\u8bbe\u7f6e"],["td","String"],["td","-"]],["tr",["td","dataIndex"],["td","\u5217\u6570\u636e\u5728\u6570\u636e\u9879\u4e2d\u5bf9\u5e94\u7684 key\uff0c\u652f\u6301 ",["code","a.b.c"]," \u7684\u5d4c\u5957\u5199\u6cd5"],["td","String"],["td","-"]],["tr",["td","render"],["td","\u751f\u6210\u590d\u6742\u6570\u636e\u7684\u6e32\u67d3\u51fd\u6570\uff0c\u53c2\u6570\u5206\u522b\u4e3a\u5f53\u524d\u884c\u7684\u503c\uff0c\u5f53\u524d\u884c\u6570\u636e\uff0c\u884c\u7d22\u5f15\uff0c@return\u91cc\u9762\u53ef\u4ee5\u8bbe\u7f6e\u8868\u683c",["a",{title:null,href:"#demo-colspan-rowspan"},"\u884c/\u5217\u5408\u5e76"]],["td","Function(text, record, index) {}"],["td","-"]],["tr",["td","filters"],["td","\u8868\u5934\u7684\u7b5b\u9009\u83dc\u5355\u9879"],["td","Array"],["td","-"]],["tr",["td","onFilter"],["td","\u786e\u5b9a\u7b5b\u9009\u7684\u8fd0\u884c\u51fd\u6570,filterMultiple\u4e3atrue\u65f6value\u4e3a\u6570\u7ec4,\u51fd\u6570\u8fd4\u56detrue\u8868\u793a\u8be5\u6761\u8bb0\u5f55\u901a\u8fc7\u7b5b\u9009"],["td","Function(value, record)"],["td","-"]],["tr",["td","filterMultiple"],["td","\u662f\u5426\u591a\u9009"],["td","Boolean"],["td","true"]],["tr",["td","sorter"],["td","\u6392\u5e8f\u51fd\u6570\uff0c\u672c\u5730\u6392\u5e8f\u4f7f\u7528\u4e00\u4e2a\u51fd\u6570\uff0c\u9700\u8981\u670d\u52a1\u7aef\u6392\u5e8f\u53ef\u8bbe\u4e3a true"],["td","Function or Boolean"],["td","-"]],["tr",["td","width"],["td","\u5217\u5bbd\u5ea6"],["td","String or Number"],["td","-"]],["tr",["td","className"],["td","\u5217className"],["td","String"],["td","-"]],["tr",["td","sortOrder"],["td","\u6392\u5e8f\u7684\u53d7\u63a7\u5c5e\u6027\uff0c\u5916\u754c\u53ef\u7528\u6b64\u63a7\u5236\u5217\u7684\u6392\u5e8f\uff0c\u53ef\u8bbe\u7f6e\u4e3a ",["code","'ascend'"]," ",["code","'descend'"]," ",["code","false"]],["td","Boolean or String"],["td","-"]]]],["h3","rowSelection"],["p","\u9009\u62e9\u529f\u80fd\u7684\u914d\u7f6e\u3002"],["table",["thead",["tr",["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u7c7b\u578b"],["th","\u9ed8\u8ba4\u503c"]]],["tbody",["tr",["td","type"],["td","\u591a\u9009/\u5355\u9009\uff0c",["code","checkbox"]," or ",["code","radio"]],["td","String"],["td",["code","checkbox"]]],["tr",["td","selectedRowKeys"],["td","\u6307\u5b9a\u9009\u4e2d\u9879\u7684 key \u6570\u7ec4\uff0c\u9700\u8981\u548c onChange \u8fdb\u884c\u914d\u5408"],["td","Array"],["td","[]"]],["tr",["td","onChange"],["td","\u9009\u4e2d\u9879\u53d1\u751f\u53d8\u5316\u7684\u65f6\u7684\u56de\u8c03"],["td","Function(selectedRowKeys, selectedRows)"],["td","-"]],["tr",["td","getCheckboxProps"],["td","\u9009\u62e9\u6846\u7684\u9ed8\u8ba4\u5c5e\u6027\u914d\u7f6e"],["td","Function(record)"],["td","-"]],["tr",["td","onSelect"],["td","\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u67d0\u5217\u7684\u56de\u8c03"],["td","Function(record, selected, selectedRows)"],["td","-"]],["tr",["td","onSelectAll"],["td","\u7528\u6237\u624b\u52a8\u9009\u62e9/\u53d6\u6d88\u9009\u62e9\u6240\u6709\u5217\u7684\u56de\u8c03"],["td","Function(selected, selectedRows, changeRows)"],["td","-"]]]],["h2","\u6ce8\u610f"]]}}});