(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{175:function(t,e,o){o(176),t.exports=o(177)},224:function(t,e,o){var content=o(225);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(103).default)("f52d43e0",content,!0,{sourceMap:!1})},225:function(t,e,o){var n=o(102)(!1);n.push([t.i,'a,abbr,acronym,address,applet,big,blockquote,body,caption,cite,code,dd,del,dfn,div,dl,dt,em,fieldset,font,form,h1,h2,h3,h4,h5,h6,html,iframe,img,ins,kbd,label,legend,li,object,ol,p,pre,q,s,samp,small,span,strike,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,tt,ul,var{margin:0;padding:0;border:0;outline:0;font-weight:inherit;font-style:inherit;font-size:100%;font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif;vertical-align:baseline}:focus{outline:0}body{line-height:1;color:#000;background:#fff}ol,ul{list-style:none}table{border-collapse:separate;border-spacing:0}caption,td,th{text-align:left;font-weight:400}blockquote:after,blockquote:before,q:after,q:before{content:""}blockquote,q{quotes:"" ""}',""]),t.exports=n},226:function(t,e,o){"use strict";o.r(e),o.d(e,"state",(function(){return l})),o.d(e,"mutations",(function(){return r}));var n=o(174),l=(o(90),o(167),function(){return{tasks:[]}}),r={ADD_TASK:function(t,data){t.tasks=[{title:data.title,author:data.author,task:data.task,done:!1}].concat(Object(n.a)(t.tasks))},REMOVE_TASK:function(t,e){console.log("rm",t.tasks.indexOf(e)),t.tasks.splice(t.tasks.indexOf(e),1)},TOGGLE_TASK:function(t,e){e.done=!e.done},EDIT_TASK:function(t,data){var e=t.tasks.indexOf(data.task);t.tasks[e].task=data.newContent}}}},[[175,4,1,5]]]);