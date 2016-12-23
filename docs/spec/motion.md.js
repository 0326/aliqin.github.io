webpackJsonp([150,185],{324:function(n,s){"use strict";n.exports={content:["article",["p","\u4f9d\u636e\u300e\u5de7\u7528\u8fc7\u6e21\u300f\u7684\u8bbe\u8ba1\u539f\u5219\uff0cAnt Design \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9884\u8bbe\u7684\u7ec4\u4ef6\u52a8\u753b\u548c\u7f13\u52a8\u51fd\u6570\u3002"],["blockquote",["p","\u793a\u4f8b\u5ef6\u957f\u4e86\u52a8\u753b\u65f6\u957f\u4ee5\u4fbf\u5c55\u793a\u3002"]],["pre",{lang:"__react",highlighted:'<span class="token keyword" >const</span> cssAnimation <span class="token operator" >=</span> <span class="token function" >require</span><span class="token punctuation" >(</span><span class="token string" >\'css-animation\'</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword" >const</span> antd <span class="token operator" >=</span> <span class="token function" >require</span><span class="token punctuation" >(</span><span class="token string" >\'antd\'</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword" >const</span> <span class="token keyword" >Select</span> <span class="token operator" >=</span> antd<span class="token punctuation" >.</span><span class="token keyword" >Select</span><span class="token comment" spellcheck="true">;</span>\n<span class="token keyword" >const</span> Option <span class="token operator" >=</span> <span class="token keyword" >Select</span><span class="token punctuation" >.</span>Option<span class="token comment" spellcheck="true">;</span>\n<span class="token keyword" >const</span> OptGroup <span class="token operator" >=</span> <span class="token keyword" >Select</span><span class="token punctuation" >.</span>OptGroup<span class="token comment" spellcheck="true">;</span>\n\nlet motions <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token punctuation" >]</span><span class="token comment" spellcheck="true">;</span>\nmotions <span class="token operator" >=</span> motions<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token punctuation" >[</span>{\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u6de1\u5165\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'fade\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u6e10\u9690\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u6de1\u51fa\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'fade\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u6e10\u9690\'</span>\n}<span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\nmotions <span class="token operator" >=</span> motions<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token punctuation" >[</span>{\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u5fc3\u653e\u5927\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e2d\u5fc3\u7f29\u5c0f\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u653e\u5927\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u7f29\u5c0f\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u653e\u5927\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u7f29\u5c0f\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u653e\u5927\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u7f29\u5c0f\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u653e\u5927\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u7f29\u5c0f\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'zoom-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u7f29\u653e\'</span>\n}<span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\nmotions <span class="token operator" >=</span> motions<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token punctuation" >[</span>{\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u6ed1\u5165\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u6ed1\u51fa\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u6ed1\u5165\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u6ed1\u51fa\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u6ed1\u5165\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u6ed1\u51fa\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u6ed1\u5165\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u6ed1\u51fa\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'move-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u79fb\u52a8\'</span>\n}<span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\nmotions <span class="token operator" >=</span> motions<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token punctuation" >[</span>{\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u5c55\u5f00\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0a\u65b9\u7f29\u56de\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-up\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u5c55\u5f00\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u4e0b\u65b9\u7f29\u56de\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-down\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u5c55\u5f00\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u5de6\u65b9\u7f29\u56de\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-left\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u5c55\u5f00\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >,</span> {\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u53f3\u65b9\u7f29\u56de\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'slide-right\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'leave\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u4f38\u7f29\'</span>\n}<span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\nmotions <span class="token operator" >=</span> motions<span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span><span class="token punctuation" >[</span><span class="token punctuation" >[</span>{\n  name<span class="token punctuation" >:</span> <span class="token string" >\'\u6447\u6446\'</span><span class="token punctuation" >,</span>\n  value<span class="token punctuation" >:</span> <span class="token string" >\'swing\'</span><span class="token punctuation" >,</span>\n  direction<span class="token punctuation" >:</span> <span class="token string" >\'enter\'</span><span class="token punctuation" >,</span>\n  type<span class="token punctuation" >:</span> <span class="token string" >\'\u5176\u4ed6\'</span>\n}<span class="token punctuation" >]</span><span class="token punctuation" >]</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n\nvar leave <span class="token operator" >=</span> <span class="token string" >\'-leave\'</span><span class="token comment" spellcheck="true">;</span>\nvar Test <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span>{\n  <span class="token function" >handleChange</span><span class="token punctuation" >(</span>e<span class="token punctuation" >)</span> {\n    var value <span class="token operator" >=</span> e<span class="token comment" spellcheck="true">;</span>\n    <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >)</span> {\n      this<span class="token punctuation" >.</span>demoNode<span class="token punctuation" >.</span>style<span class="token punctuation" >.</span>visibility <span class="token operator" >=</span> <span class="token string" >\'\'</span><span class="token comment" spellcheck="true">;</span>\n      <span class="token function" >cssAnimation</span><span class="token punctuation" >(</span>this<span class="token punctuation" >.</span>demoNode<span class="token punctuation" >,</span> value<span class="token punctuation" >,</span> <span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token operator" >=</span><span class="token operator" >></span> {\n        <span class="token keyword" >if</span> <span class="token punctuation" >(</span>value<span class="token punctuation" >.</span><span class="token function" >slice</span><span class="token punctuation" >(</span><span class="token operator" >-</span>leave<span class="token punctuation" >.</span>length<span class="token punctuation" >)</span> <span class="token operator" >==</span><span class="token operator" >=</span> leave<span class="token punctuation" >)</span> {\n          this<span class="token punctuation" >.</span>demoNode<span class="token punctuation" >.</span>style<span class="token punctuation" >.</span>visibility <span class="token operator" >=</span> <span class="token string" >\'hidden\'</span><span class="token comment" spellcheck="true">;</span>\n        }\n      }<span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n    }\n  }<span class="token punctuation" >,</span>\n  <span class="token function" >componentDidMount</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> {\n    this<span class="token punctuation" >.</span>demoNode <span class="token operator" >=</span> ReactDOM<span class="token punctuation" >.</span><span class="token function" >findDOMNode</span><span class="token punctuation" >(</span>this<span class="token punctuation" >.</span>refs<span class="token punctuation" >.</span>demo<span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n  }<span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> {\n    <span class="token keyword" >const</span> options <span class="token operator" >=</span> <span class="token punctuation" >[</span><span class="token operator" >&lt;</span>Option value<span class="token operator" >=</span><span class="token string" >""</span> key<span class="token operator" >=</span><span class="token string" >"placeholder"</span><span class="token operator" >></span>\u8bf7\u9009\u62e9\u9884\u8bbe\u52a8\u753b<span class="token operator" >&lt;</span><span class="token operator" >/</span>Option<span class="token operator" >></span><span class="token punctuation" >]</span><span class="token punctuation" >.</span><span class="token function" >concat</span><span class="token punctuation" >(</span>motions<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>function <span class="token punctuation" >(</span>m<span class="token punctuation" >,</span> groupIndex<span class="token punctuation" >)</span> {\n      <span class="token keyword" >const</span> opts <span class="token operator" >=</span> m<span class="token punctuation" >.</span><span class="token function" >map</span><span class="token punctuation" >(</span>function <span class="token punctuation" >(</span>m2<span class="token punctuation" >,</span> optIndex<span class="token punctuation" >)</span> {\n        return <span class="token operator" >&lt;</span>Option key<span class="token operator" >=</span>{optIndex} value<span class="token operator" >=</span>{m2<span class="token punctuation" >.</span>value <span class="token operator" >+</span> <span class="token string" >"-"</span> <span class="token operator" >+</span> m2<span class="token punctuation" >.</span>direction}<span class="token operator" >></span>{m2<span class="token punctuation" >.</span>name <span class="token operator" >+</span> <span class="token string" >" "</span> <span class="token operator" >+</span> m2<span class="token punctuation" >.</span>value}<span class="token operator" >&lt;</span><span class="token operator" >/</span>Option<span class="token operator" >></span>\n      }<span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n      return <span class="token operator" >&lt;</span>OptGroup key<span class="token operator" >=</span>{groupIndex} label<span class="token operator" >=</span>{m<span class="token punctuation" >[</span><span class="token number" >0</span><span class="token punctuation" >]</span><span class="token punctuation" >.</span>type}<span class="token operator" >></span>{opts}<span class="token operator" >&lt;</span><span class="token operator" >/</span>OptGroup<span class="token operator" >></span><span class="token comment" spellcheck="true">;</span>\n    }<span class="token punctuation" >)</span><span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n    return <span class="token operator" >&lt;</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div className<span class="token operator" >=</span><span class="token string" >"motion-container"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span>div ref<span class="token operator" >=</span><span class="token string" >"demo"</span> className<span class="token operator" >=</span><span class="token string" >"motion-example"</span><span class="token operator" >></span><span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n      <span class="token operator" >&lt;</span>div className<span class="token operator" >=</span><span class="token string" >"motion-select-wrapper"</span><span class="token operator" >></span>\n        <span class="token operator" >&lt;</span><span class="token keyword" >Select</span> value<span class="token operator" >=</span><span class="token string" >""</span> className<span class="token operator" >=</span><span class="token string" >\'motion-select\'</span> onChange<span class="token operator" >=</span>{this<span class="token punctuation" >.</span>handleChange}<span class="token operator" >></span>{options}<span class="token operator" >&lt;</span><span class="token operator" >/</span><span class="token keyword" >Select</span><span class="token operator" >></span>\n      <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span>\n    <span class="token operator" >&lt;</span><span class="token operator" >/</span>div<span class="token operator" >></span><span class="token comment" spellcheck="true">;</span>\n  }\n}<span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token operator" >&lt;</span>Test key<span class="token operator" >=</span><span class="token string" >"motion"</span> <span class="token operator" >/</span><span class="token operator" >></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token comment" spellcheck="true">;</span>'},["code","const cssAnimation = require('css-animation');\nconst antd = require('antd');\nconst Select = antd.Select;\nconst Option = Select.Option;\nconst OptGroup = Select.OptGroup;\n\nlet motions = [];\nmotions = motions.concat([[{\n  name: '\u6de1\u5165',\n  value: 'fade',\n  direction: 'enter',\n  type: '\u6e10\u9690'\n}, {\n  name: '\u6de1\u51fa',\n  value: 'fade',\n  direction: 'leave',\n  type: '\u6e10\u9690'\n}]]);\nmotions = motions.concat([[{\n  name: '\u4e2d\u5fc3\u653e\u5927',\n  value: 'zoom',\n  direction: 'enter',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u4e2d\u5fc3\u7f29\u5c0f',\n  value: 'zoom',\n  direction: 'leave',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u4e0a\u65b9\u653e\u5927',\n  value: 'zoom-up',\n  direction: 'enter',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u4e0a\u65b9\u7f29\u5c0f',\n  value: 'zoom-up',\n  direction: 'leave',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u4e0b\u65b9\u653e\u5927',\n  value: 'zoom-down',\n  direction: 'enter',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u4e0b\u65b9\u7f29\u5c0f',\n  value: 'zoom-down',\n  direction: 'leave',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u5de6\u65b9\u653e\u5927',\n  value: 'zoom-left',\n  direction: 'enter',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u5de6\u65b9\u7f29\u5c0f',\n  value: 'zoom-left',\n  direction: 'leave',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u53f3\u65b9\u653e\u5927',\n  value: 'zoom-right',\n  direction: 'enter',\n  type: '\u7f29\u653e'\n}, {\n  name: '\u53f3\u65b9\u7f29\u5c0f',\n  value: 'zoom-right',\n  direction: 'leave',\n  type: '\u7f29\u653e'\n}]]);\nmotions = motions.concat([[{\n  name: '\u4e0a\u65b9\u6ed1\u5165',\n  value: 'move-up',\n  direction: 'enter',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u4e0a\u65b9\u6ed1\u51fa',\n  value: 'move-up',\n  direction: 'leave',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u4e0b\u65b9\u6ed1\u5165',\n  value: 'move-down',\n  direction: 'enter',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u4e0b\u65b9\u6ed1\u51fa',\n  value: 'move-down',\n  direction: 'leave',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u5de6\u65b9\u6ed1\u5165',\n  value: 'move-left',\n  direction: 'enter',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u5de6\u65b9\u6ed1\u51fa',\n  value: 'move-left',\n  direction: 'leave',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u53f3\u65b9\u6ed1\u5165',\n  value: 'move-right',\n  direction: 'enter',\n  type: '\u79fb\u52a8'\n}, {\n  name: '\u53f3\u65b9\u6ed1\u51fa',\n  value: 'move-right',\n  direction: 'leave',\n  type: '\u79fb\u52a8'\n}]]);\nmotions = motions.concat([[{\n  name: '\u4e0a\u65b9\u5c55\u5f00',\n  value: 'slide-up',\n  direction: 'enter',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u4e0a\u65b9\u7f29\u56de',\n  value: 'slide-up',\n  direction: 'leave',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u4e0b\u65b9\u5c55\u5f00',\n  value: 'slide-down',\n  direction: 'enter',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u4e0b\u65b9\u7f29\u56de',\n  value: 'slide-down',\n  direction: 'leave',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u5de6\u65b9\u5c55\u5f00',\n  value: 'slide-left',\n  direction: 'enter',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u5de6\u65b9\u7f29\u56de',\n  value: 'slide-left',\n  direction: 'leave',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u53f3\u65b9\u5c55\u5f00',\n  value: 'slide-right',\n  direction: 'enter',\n  type: '\u4f38\u7f29'\n}, {\n  name: '\u53f3\u65b9\u7f29\u56de',\n  value: 'slide-right',\n  direction: 'leave',\n  type: '\u4f38\u7f29'\n}]]);\nmotions = motions.concat([[{\n  name: '\u6447\u6446',\n  value: 'swing',\n  direction: 'enter',\n  type: '\u5176\u4ed6'\n}]]);\n\nvar leave = '-leave';\nvar Test = React.createClass({\n  handleChange(e) {\n    var value = e;\n    if (value) {\n      this.demoNode.style.visibility = '';\n      cssAnimation(this.demoNode, value, () => {\n        if (value.slice(-leave.length) === leave) {\n          this.demoNode.style.visibility = 'hidden';\n        }\n      });\n    }\n  },\n  componentDidMount() {\n    this.demoNode = ReactDOM.findDOMNode(this.refs.demo);\n  },\n  render() {\n    const options = [<Option value=\"\" key=\"placeholder\">\u8bf7\u9009\u62e9\u9884\u8bbe\u52a8\u753b</Option>].concat(motions.map(function (m, groupIndex) {\n      const opts = m.map(function (m2, optIndex) {\n        return <Option key={optIndex} value={m2.value + \"-\" + m2.direction}>{m2.name + \" \" + m2.value}</Option>\n      });\n      return <OptGroup key={groupIndex} label={m[0].type}>{opts}</OptGroup>;\n    }));\n    return <div>\n      <div className=\"motion-container\">\n        <div ref=\"demo\" className=\"motion-example\"></div>\n      </div>\n      <div className=\"motion-select-wrapper\">\n        <Select value=\"\" className='motion-select' onChange={this.handleChange}>{options}</Select>\n      </div>\n    </div>;\n  }\n});\n\nReactDOM.render(<Test key=\"motion\" />, mountNode);"]],["h2","\u7ec4\u4ef6\u52a8\u753b"],["table",["thead",["tr",["th","\u7ec4\u4ef6"],["th","\u4e2d\u6587\u540d"],["th","\u91c7\u7528\u52a8\u753b"]]],["tbody",["tr",["td","Popover"],["td","\u6c14\u6ce1\u6d6e\u51fa"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Popconfirm"],["td","\u6c14\u6ce1\u786e\u8ba4"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Tooltip"],["td","\u6587\u5b57\u63d0\u793a"],["td",["code","zoom-up"]," ",["code","zoom-down"]," ",["code","zoom-left"]," ",["code","zoom-right"]]],["tr",["td","Modal"],["td","\u5f39\u51fa\u6846"],["td",["code","zoom"]]],["tr",["td","Badge"],["td","\u5fbd\u6807\u6570"],["td",["code","zoom"]]],["tr",["td","message"],["td","\u4fe1\u606f\u63d0\u793a\u6761"],["td",["code","move-up"]]],["tr",["td","notification"],["td","\u901a\u77e5\u6846"],["td",["code","move-right"]," & ",["code","slide-up"]]],["tr",["td","Dropdown"],["td","\u4e0b\u62c9\u83dc\u5355"],["td",["code","slide-up"]]],["tr",["td","Select"],["td","\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","Cascader"],["td","\u7ea7\u8054\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","TreeSelect"],["td","\u6811\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","DatePicker"],["td","\u65e5\u671f\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","TatePicker"],["td","\u65e5\u671f\u9009\u62e9\u6846"],["td",["code","slide-up"]]],["tr",["td","Alert"],["td","\u8b66\u544a\u63d0\u793a"],["td",["code","slide-up"]]],["tr",["td","Menu"],["td","\u5bfc\u822a\u83dc\u5355"],["td",["code","slide-up"]]]]],["p","\u5728 React \u7684\u524d\u7aef\u5b9e\u73b0\u4e2d\uff0c\u53ef\u4ee5\u4f7f\u7528 ",["a",{
title:null,href:"https://github.com/react-component/animate"},"rc-animate"]," \u7684 ",["a",{title:null,href:"http://react-component.github.io/animate/examples/simple.html"},"transitionName"]," \u5c5e\u6027\u6765\u7ed9\u4efb\u610f\u5143\u7d20\u6307\u5b9a\u52a8\u753b\u3002"],["h2","\u7f13\u52a8\u51fd\u6570"],["blockquote",["p",["code","move@enter"]," \u8868\u793a ",["code","\u79fb\u52a8@\u8fdb\u5165"],"\u3002"]],["table",["thead",["tr",["th","\u540d\u79f0"],["th","\u53c2\u6570"],["th","\u8bf4\u660e"],["th","\u5e94\u7528\u52a8\u753b"]]],["tbody",["tr",["td","@ease-out"],["td",["code","cubic-bezier(0.215,0.61,0.355,1);"]],["td","\u9ed8\u8ba4\u540e\u7f13\u52a8"],["td"]],["tr",["td","@ease-in"],["td",["code","cubic-bezier(0.55,0.055,0.675,0.19);"]],["td","\u9ed8\u8ba4\u524d\u7f13\u52a8"],["td"]],["tr",["td","@ease-in-out"],["td",["code","cubic-bezier(0.645,0.045,0.355,1);"]],["td","\u9ed8\u8ba4\u524d\u540e\u7f13\u52a8"],["td"]],["tr",["td","@ease-out-back"],["td",["code","cubic-bezier(0.18,0.89,0.32,1.28);"]],["td","\u7ed3\u675f\u56de\u52a8"],["td"]],["tr",["td","@ease-in-back"],["td",["code","cubic-bezier(0.6,-0.3,0.74,0.05);"]],["td","\u5f00\u59cb\u56de\u52a8"],["td"]],["tr",["td","@ease-in-out-back"],["td",["code","cubic-bezier(0.68,-0.55,0.27,1.55);"]],["td","\u524d\u540e\u56de\u52a8"],["td"]],["tr",["td","@ease-out-circ"],["td",["code","cubic-bezier(0.08,0.82,0.17,1);"]],["td","\u5706\u5f62\u540e\u7f13\u52a8"],["td",["code","move@enter"]," ",["code","zoom@enter"]]],["tr",["td","@ease-in-circ"],["td",["code","cubic-bezier(0.6,0.04,0.98,0.34);"]],["td","\u5706\u5f62\u524d\u7f13\u52a8"],["td",["code","move@leave"]]],["tr",["td","@ease-in-out-circ"],["td",["code","cubic-bezier(0.78,0.14,0.15,0.86);"]],["td","\u5706\u5f62\u524d\u540e\u7f13\u52a8"],["td",["code","zoom@leave"]]],["tr",["td","@ease-out-quint"],["td",["code","cubic-bezier(0.23, 1, 0.32, 1);"]],["td","quint \u540e\u7f13\u52a8"],["td",["code","slide@enter"]]],["tr",["td","@ease-in-quint"],["td",["code","cubic-bezier(0.755, 0.05, 0.855, 0.06);"]],["td","quint \u524d\u7f13\u52a8"],["td",["code","slide@leave"]]],["tr",["td","@ease-in-out-quint"],["td",["code","cubic-bezier(0.86, 0, 0.07, 1);"]],["td","quint \u524d\u540e\u7f13\u52a8"],["td"]]]]],meta:{category:"\u8bbe\u8ba1\u57fa\u7840",order:5,chinese:"\u7ec4\u4ef6\u52a8\u753b",english:"Motion",filename:"docs/spec/motion.md"},toc:["ul",["li",["a",{href:"#\u7ec4\u4ef6\u52a8\u753b"},"\u7ec4\u4ef6\u52a8\u753b"]],["li",["a",{href:"#\u7f13\u52a8\u51fd\u6570"},"\u7f13\u52a8\u51fd\u6570"]]]}}});