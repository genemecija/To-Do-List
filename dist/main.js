!function(t){var e={};function s(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=e,s.d=function(t,e,i){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},s.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(i,r,function(e){return t[e]}.bind(null,r));return i},s.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s(s.s=0)}([function(t,e,s){"use strict";s.r(e);var i=function(t){for(var e=[],s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",i=s.length,r=t||32,n=0;n<r;n++)e[n]=s.charAt(Math.floor(Math.random()*i));return e.join("")};let r=[];var n=class{constructor(t){this.title=t,this.taskList=[],this.id=i(),r.push(this)}static getAllLists(){return r}static getTaskForTaskID(t){for(let e in this.taskList)if(this.taskList[e].id==t)return this.taskList[e]}static getListForListID(t){for(let e in r)if(r[e].id==t)return r[e]}static addTask(t){this.taskList.push(t)}static deleteTask(t){this.taskList.splice(t,1)}static moveTaskToAnotherList(t,e){const s=this.getTaskForTaskID(t);this.getListForListID(e).addTask(s),this.deleteTask(this.getTaskForTaskID(s))}};var a=class{constructor(t,e,s){this.id=i(),this.description=t,this.dueDate=e,this.category=s,this.completionStatus=!1}static setDescription(t){this.description=t}static setDueDate(t){}static toggleCompletionStatus(){this.completionStatus=!this.completionStatus}};var o=t=>{let e=document.createElement("div");e.id=t,e.classList.add("list");let s=document.createElement("input");s.setAttribute("type","button"),s.setAttribute("value","Add Task"),s.id=t;const i=n.getListForListID(t);s.addEventListener("click",()=>{let t=new a("testDesc","Today","Event");i.addTask(t)}),e.appendChild(s);let r="";for(let t in i.taskList)r+=i.taskList[t].description,r+=i.taskList[t].dueDate,r+=i.taskList[t].category;return e.innerText=e.title,e};let l=new n("Fruits"),c=new a("testDesc","Today","Event");l.taskList.push(c);let u=new a("testDesc1","Today1","Event1");l.taskList.push(u);let d=new n("Vegetables"),p=new a("vegDesc","Tomorrow","Birthday");d.taskList.push(p);let f=n.getAllLists();for(let t in f){let e="",s=o(f[t].id);for(let s in f[t].taskList)e+=f[t].taskList[s].description,e+=f[t].taskList[s].dueDate,e+=f[t].taskList[s].category;s.innerText=f[t].taskList.title+" "+e,document.querySelector("body").appendChild(s)}}]);