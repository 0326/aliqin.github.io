webpackJsonp([43,182],{428:function(n,a){"use strict";n.exports={content:{"zh-CN":[["p","\u589e\u52a0pagination\u5c5e\u6027\u4ee5\u5206\u9875\uff0c"],["pre",{lang:null,highlighted:'<span class="token keyword" >const</span> pagination <span class="token operator" >=</span> {\n  total<span class="token punctuation" >:</span> data<span class="token punctuation" >.</span>length\n}'},["code","const pagination = {\n  total: data.length\n}"]]],"en-US":[]},meta:{order:2,title:{"zh-CN":"\u5206\u9875","en-US":"Pagination"},filename:"src/components/Table/demo/pagination.md",id:"src-components-Table-demo-pagination"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>v-table</span> <span class="token attr-name" >:data-source</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridData<span class="token punctuation" >"</span></span> <span class="token attr-name" >:columns</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>gridColumns<span class="token punctuation" >"</span></span> <span class="token attr-name" >row-key</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>key<span class="token punctuation" >"</span></span> <span class="token attr-name" >:pagination</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>pagination<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>v-table</span><span class="token punctuation" >></span></span>'}],preview:'<v-table :data-source="gridData" :columns="gridColumns" row-key="key" :pagination="pagination"></v-table>',vueScript:"var columns = [{\n  title: '\u59d3\u540d',\n  dataIndex: 'name',\n  filters: [{\n    text: '\u59d3\u674e\u7684\u7684',\n    value: '\u674e',\n  }, {\n    text: '\u59d3\u80e1\u7684',\n    value: '\u80e1',\n  }],\n  sorter:true,\n  width:150\n}, {\n  title: '\u5e74\u9f84',\n  dataIndex: 'age',\n  sorter: function(a, b) { return a.age - b.age },\n  render: function(text, record, index) {\n    return '<input v-model=\"gridData['+ index +'].age\"/>'\n  },\n  width:250\n}, {\n  title: '\u5730\u5740',\n  dataIndex: 'address',\n  filters: [{\n    text: '\u5357\u6e56',\n    value: '\u5357\u6e56',\n  }, {\n    text: '\u897f\u6e56',\n    value: '\u897f\u6e56',\n  }],\n  filterMultiple: false,\n  width:250\n\n},{\n    title: '\u64cd\u4f5c',\n    key: 'operation',\n    render: function(text, record) {\n      if(record) {\n        return '<icon type=\"info-s\"></icon><a href=\"'+ record.key+'.html\" target=\"_blank\">\u8be6\u60c5</a>'\n      }\n    }\n  }\n]\n\nconst data = [];\nfor (let i = 0; i < 46; i++) {\n  data.push({\n    key: i,\n    name: `\u674e\u5927\u5634${i}`,\n    age: 32,\n    address: `\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed${i}\u53f7`,\n  });\n}\n\nconst pagination = {\n  total: data.length\n}\n\n// \u914d\u7f6e\u9009\u62e9\u6570\u636e\u7684\u9009\u9879\nvar rowSelection = {\n  getCheckboxProps: function(record) {\n    return {\n      disabled: record.name === '\u80e1\u5f66\u7956'    // \u914d\u7f6e\u65e0\u6cd5\u52fe\u9009\u7684\u5217\n    };\n  },\n  onChange: function(selectedRowKeys, selectedRows) {\n    console.log('rowSelection.onChange',selectedRowKeys, selectedRows);\n  },\n  onSelect: function(record, selected, selectedRows) {\n    console.log('rowSelection.onSelect',record, selected, selectedRows);\n  },\n  onSelectAll: function(selected, selectedRows, changeRows) {\n    console.log('rowSelection.onSelectAll',selected, selectedRows, changeRows);\n  }\n};\n\n\nnew Vue({\n  el: 'body',\n  components: {\n    vTable: atui.Table,\n    icon: atui.Icon\n  },\n  data () {\n    return {\n      loading: false,\n      gridData: data,\n      gridColumns: columns,\n      rowSelection: rowSelection,\n      pagination: pagination\n    }\n  }\n})"}}});