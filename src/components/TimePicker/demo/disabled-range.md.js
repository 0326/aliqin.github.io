webpackJsonp([25,182],{446:function(e,n){"use strict";e.exports={content:{"zh-CN":[],"en-US":[]},meta:{order:0,title:{"zh-CN":"\u7981\u7528\u90e8\u5206\u65f6\u95f4","en-US":"Type"},filename:"src/components/TimePicker/demo/disabled-range.md",id:"src-components-TimePicker-demo-disabled-range"},toc:["ul",["li",["a",{href:"#zh-CN"},"zh-CN"]],["li",["a",{href:"#en-US"},"en-US"]]],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token operator" >&lt;</span>time<span class="token operator" >-</span>picker @change<span class="token operator" >=</span><span class="token string" >"timePickerChange"</span> <span class="token punctuation" >:</span>disabled<span class="token operator" >-</span>minutes<span class="token operator" >=</span><span class="token string" >"disabledMinutes"</span> <span class="token punctuation" >:</span>disabled<span class="token operator" >-</span>seconds<span class="token operator" >=</span><span class="token string" >"disabledSeconds"</span><span class="token operator" >></span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>time-picker</span><span class="token punctuation" >></span></span>'}],preview:'<time-picker @change="timePickerChange" :disabled-minutes="disabledMinutes" :disabled-seconds="disabledSeconds"></time-picker>',vueScript:"new Vue({\n    el: 'body',\n    components: {\n      timePicker: atui.TimePicker\n    },\n    methods: {\n      disabledMinutes: function() {\n          return [...Array(60).keys()].filter(value => value % 10 !== 0)\n      },\n      disabledSeconds: function() {\n          return [...Array(60).keys()].filter(value => value % 30 !== 0)\n      },\n      timePickerChange: function(date,timeString) {\n          console.log('timepicker',date, timeString)\n      }\n    }\n})"}}});