(window["webpackJsonprose-demo-front-end"]=window["webpackJsonprose-demo-front-end"]||[]).push([[0],{12:function(e,n,t){e.exports=t(25)},24:function(e,n,t){},25:function(e,n,t){"use strict";t.r(n);var a=t(9),o=t.n(a),i=t(0),r=t.n(i),s=t(1),c=t(2),l=t(5),d=t(4),u=t(6),p=t(10),m=t.n(p),b=function(e){function n(){return Object(s.a)(this,n),Object(l.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(u.a)(n,e),Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this.props,n=e.config,t=e.plugins;m.a.viewer(n,t)}},{key:"render",value:function(){var e=this.props.config;return r.a.createElement("div",{id:e.id})}}]),n}(i.Component),f=t(3),h=t(11),v=t.n(h),y=(t(24),function(e){function n(e){var t;return Object(s.a)(this,n),(t=Object(l.a)(this,Object(d.a)(n).call(this,e))).state={},t.handleClick=t.handleClick.bind(Object(f.a)(t)),t}return Object(u.a)(n,e),Object(c.a)(n,[{key:"handleClick",value:function(){alert("This button will display Web Annotations soon! It will also be moved to the window sidebar.")}},{key:"render",value:function(){return r.a.createElement("div",{id:"WebAnnoContainer",class:"tooltip"},r.a.createElement(v.a,{icon:"class",onClick:this.handleClick}),r.a.createElement("span",{class:"tooltiptext"},"Web Annotations"))}}]),n}(r.a.Component)),k={name:"WebAnnotationsPlugin",target:"WorkspaceControlPanelButtons",mode:"add",component:function(e){return console.log(e),r.a.createElement("div",{id:"WebAnnotationsPlugin"},r.a.createElement(y,null))}};o.a.render(r.a.createElement(b,{config:{id:"mirador",windows:[{manifestId:"https://rosetest.library.jhu.edu/rosademo/iiif/rose/SeldenSupra57/manifest",canvasId:"https://rosetest.library.jhu.edu/rosademo/iiif/rose/SeldenSupra57/1r/canvas"}],themes:{dark:{palette:{type:"dark",primary:{main:"#3F51B5"},secondary:{main:"#536dfe"}}},light:{palette:{type:"light",primary:{main:"#3F51B5"},secondary:{main:"#536dfe"}}}}},plugins:[k]}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.bd603704.chunk.js.map