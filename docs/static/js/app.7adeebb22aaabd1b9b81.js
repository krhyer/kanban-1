webpackJsonp([1],[,,,,,,function(t,e,s){s(88);var a=s(2)(s(68),s(112),"data-v-3ea8ba35",null);t.exports=a.exports},,function(t,e,s){s(90);var a=s(2)(s(69),s(114),"data-v-734e3687",null);t.exports=a.exports},,,,,,,function(t,e,s){"use strict";var a=s(9),o=s.n(a),i=s(119),n=s(104),r=s.n(n),c=s(103),d=s.n(c),u=s(106),l=(s.n(u),s(8)),m=s.n(l),v=s(6),p=s.n(v);o.a.use(i.a),e.a=new i.a({routes:[{path:"/boards",name:"Boards",component:r.a},{path:"/boards/:id",name:"Board",component:d.a},{path:"/",name:"Login",component:p.a},{path:"/register",name:"Register",component:m.a}]})},,,,,,,,,,,,,,,,,,,function(t,e,s){s(85);var a=s(2)(s(70),s(109),"data-v-1e5d4269",null);t.exports=a.exports},,,,function(t,e,s){"use strict";var a=s(43),o=s.n(a),i=s(15),n=s(9),r=s.n(n),c=s(121);r.a.use(c.a);var d=o.a.create({baseURL:"https://youcankanban.herokuapp.com/api/",timeout:2e3,withCredentials:!0}),u=o.a.create({baseURL:"https://youcankanban.herokuapp.com/",timeout:2e3,withCredentials:!0}),l={boards:[],activeBoard:{},activeLists:[],activeTasks:{},error:{},user:{},comments:{}},m=function(t,e){t.error=e};e.a=new c.a.Store({state:l,mutations:{setBoards:function(t,e){t.boards=e},setActiveBoard:function(t,e){t.activeBoard=e},setUser:function(t,e){t.user=e||{}},setListTasks:function(t,e){r.a.set(t.activeTasks,e.listId,e.tasks)},setActiveLists:function(t,e){t.activeLists=e},setComments:function(t,e){r.a.set(t.comments,e.taskId,e.comments)}},actions:{login:function(t,e){var s=t.commit;t.dispatch;u.post("login",e).then(function(t){s("setUser",t.data.data),i.a.push("/boards")}).catch(m)},register:function(t,e){var s=t.commit;t.dispatch;u.post("register",e).then(function(t){if(t.data.error)return m(t.data.error);s("setUser",t.data.data),i.a.push("/boards")}).catch(m)},getAuth:function(t){var e=t.commit;t.dispatch;u("authenticate").then(function(t){e("setUser",t.data.data),t.data.data?i.a.push("/boards"):i.a.push("/")}).catch(function(t){})},logout:function(t,e){t.commit,t.dispatch;u.delete("logout",e).then(function(t){i.a.push("/")}).catch(m)},clearError:function(){l.error={}},getBoards:function(t){var e=t.commit;t.dispatch;d("boards").then(function(t){e("setBoards",t.data.data)}).catch(m)},getBoard:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId).then(function(t){s("setActiveBoard",t.data.data)}).catch(m)},createBoard:function(t,e){var s=(t.commit,t.dispatch);d.post("boards/",e).then(function(t){s("getBoards")}).catch(m)},removeBoard:function(t,e){var s=(t.commit,t.dispatch);d.delete("boards/"+e._id).then(function(t){s("getBoards")}).catch(m)},getLists:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists").then(function(t){s("setActiveLists",t.data.data)}).catch(m)},createList:function(t,e){var s=(t.commit,t.dispatch);d.post("lists/",e).then(function(t){s("getLists",e.boardId)}).catch(m)},removeList:function(t,e){var s=(t.commit,t.dispatch);d.delete("lists/"+e._id).then(function(t){s("getLists",e)}).catch(m)},getTasks:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists/"+e.listId+"/tasks").then(function(t){var a={listId:e.listId,tasks:t.data.data};s("setListTasks",a)}).catch(m)},createTask:function(t,e){var s=(t.commit,t.dispatch);d.post("tasks/",e).then(function(t){s("getTasks",e)}).catch(m)},moveTask:function(t,e){var s=(t.commit,t.dispatch);d.put("tasks/"+e._id,e).then(function(t){s("getTasks",{boardId:e.boardId,listId:e.listId})}).catch(m)},removeTask:function(t,e){var s=(t.commit,t.dispatch);d.delete("tasks/"+e._id).then(function(t){s("getTasks",e)}).catch(m)},createComment:function(t,e){var s=(t.commit,t.dispatch);d.post("comments",e).then(function(t){s("getComments",e)}).catch(m)},removeComment:function(t,e){var s=(t.commit,t.dispatch);d.delete("comments/"+e._id).then(function(){s("getComments",{boardId:e.boardId,taskId:e.taskId,listId:e.listId})})},getComments:function(t,e){var s=t.commit;t.dispatch;d("boards/"+e.boardId+"/lists/"+e.listId+"/tasks/"+e.taskId+"/comments").then(function(t){var a={taskId:e.taskId,comments:t.data.data};s("setComments",a)}).catch(m)}}})},,function(t,e,s){s(89);var a=s(2)(s(61),s(113),null,null);t.exports=a.exports},,,,,,,,,,,,,,,,,,,,,function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(8),o=s.n(a),i=s(6),n=s.n(i),r=s(105),c=s.n(r);e.default={name:"app",components:{Error:c.a,Register:o.a,Login:n.a},mounted:function(){this.$store.dispatch("getAuth")}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(108),o=s.n(a);e.default={name:"board",data:function(){return{name:""}},mounted:function(){this.$store.dispatch("getBoard",{boardId:this.$route.params.id}),this.$store.dispatch("getLists",{boardId:this.$route.params.id})},computed:{board:function(){return this.$store.state.activeBoard},lists:function(){return this.$store.state.activeLists}},components:{List:o.a},methods:{createList:function(){this.$store.dispatch("createList",{name:this.name,boardId:this.$route.params.id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(6);s.n(a);e.default={name:"boards",data:function(){return{boardForm:!1,name:"",description:"",collaborators:""}},mounted:function(){this.$store.dispatch("getBoards")},computed:{boards:function(){return this.$store.state.boards},user:function(){return this.$store.state.user}},methods:{toggleTrue:function(){this.boardForm=!0},createBoard:function(){this.$store.dispatch("createBoard",{name:this.name,description:this.description}),this.boardForm=!1,this.name="",this.description=""},toggleFalse:function(){this.boardForm=!1},logout:function(t){this.$store.dispatch("logout",this.user)},removeBoard:function(t){this.$store.dispatch("removeBoard",t)}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"error",computed:{error:function(){return this.$store.state.error}},methods:{clearError:function(){this.$store.dispatch("clearError")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(21),o=s.n(a),i=s(34),n=s.n(i),r=s(35);s.n(r);e.default={name:"list",data:function(){return{name:""}},mounted:function(){console.log("mounting: ",this.list._id),this.$store.dispatch("getTasks",{boardId:this.$route.params.id,listId:this.list._id})},computed:{tasks:function(){return this.$store.state.activeTasks[this.list._id]}},props:["list"],components:{Task:n.a},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,boardId:this.$route.params.id,listId:this.list._id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)},moveTask:function(){var t=this.tasks.indexOf(this.tasks);this.tasks.splice(t,1),this$store.dispatch("moveTask",tasks),console.log("we have lift-off")},moving:function(t){var e=this.tasks[t.target.id];t.dataTransfer.setData("text/javascript",o()(e)),console.log("this is shifty")},createTasks:function(t){var e=JSON.parse(t.dataTransfer.getData("text/javascript"));e.listId=this.list._id,this.$store.dispatch("moveTasks",e),console.log("it is alive!")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"comment",props:["comment"],computed:{},methods:{removeComment:function(t){this.$store.dispatch("removeComment",t)}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(21),o=s.n(a),i=s(34),n=s.n(i),r=s(35);s.n(r);e.default={name:"list",data:function(){return{name:""}},mounted:function(){console.log("mounting: ",this.list._id),this.$store.dispatch("getTasks",{boardId:this.$route.params.id,listId:this.list._id})},computed:{tasks:function(){return this.$store.state.activeTasks[this.list._id]}},props:["list"],components:{Task:n.a},methods:{createTask:function(){this.$store.dispatch("createTask",{name:this.name,boardId:this.$route.params.id,listId:this.list._id}),this.name=""},removeList:function(t){this.$store.dispatch("removeList",t)},moveTask:function(){var t=this.tasks.indexOf(this.tasks);this.tasks.splice(t,1),this$store.dispatch("moveTask",tasks),console.log("we have lift-off")},moving:function(t){var e=this.tasks[t.target.id];t.dataTransfer.setData("text/javascript",o()(e)),console.log("this is shifty")},createTasks:function(t){var e=JSON.parse(t.dataTransfer.getData("text/javascript"));e.listId=this.list._id,this.$store.dispatch("moveTasks",e),console.log("it is alive!")}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"login",data:function(){return{user:{}}},computed:{},methods:{login:function(){this.$store.dispatch("login",this.user)}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"register",data:function(){return{user:{}}},computed:{},methods:{register:function(){this.$store.dispatch("register",this.user)}},components:{}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(107),o=s.n(a);e.default={name:"task",data:function(){return{name:"",boardId:"",listId:"",taskId:""}},mounted:function(){console.log("mounted: ",this.task._id),this.$store.dispatch("getComments",{boardId:this.$route.params.id,listId:this.task.listId,taskId:this.task._id})},props:["task"],components:{Comment:o.a},computed:{comments:function(){return this.$store.state.comments[this.task._id]}},methods:{removeTask:function(){this.$store.dispatch("removeTask",this.task)},createComment:function(){this.$store.dispatch("createComment",{name:this.name,boardId:this.$route.params.id,listId:this.task.listId,taskId:this.task._id}),this.name=""}}}},function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(9),o=s.n(a),i=s(40),n=s.n(i),r=s(15),c=s(39),d=s.n(c),u=s(38),l=s(8),m=(s.n(l),s(6)),v=(s.n(m),d()("https://youcankanban.herokuapp.com"));v.on("CONNECTED",function(t){console.log(t),v.emit("update",{data:"blarg",boardId:"3289748320"})}),new o.a({el:"#app",store:u.a,router:r.a,template:"<App/>",components:{App:n.a}})},,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,,,function(t,e,s){s(91);var a=s(2)(s(62),s(115),"data-v-865059dc",null);t.exports=a.exports},function(t,e,s){s(87);var a=s(2)(s(63),s(111),"data-v-3c639f5e",null);t.exports=a.exports},function(t,e,s){s(86);var a=s(2)(s(64),s(110),"data-v-30395534",null);t.exports=a.exports},function(t,e,s){s(93);var a=s(2)(s(65),s(117),"data-v-ea4225bc",null);t.exports=a.exports},function(t,e,s){s(92);var a=s(2)(s(66),s(116),"data-v-b54c1daa",null);t.exports=a.exports},function(t,e,s){s(94);var a=s(2)(s(67),s(118),"data-v-f1f6edfc",null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"task"},[t._v("\n  "+t._s(t.task.name)+"   "),s("a",{on:{click:t.removeTask}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),s("div",{staticClass:"card"},[t._l(t.comments,function(t){return s("Comment",{staticClass:"well",attrs:{comment:t}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createComment(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a comment..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.error.message?s("div",{staticClass:"custom-error",on:{click:t.clearError}},[t._v("\n    Error: "+t._s(t.error.message)+"\n  ")]):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row setcolor"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-10"}),t._v(" "),s("div",{staticClass:"col-md-1"},[s("button",{staticClass:"button logout",on:{click:function(e){t.logout(t.user)}}},[t._v("logout")])])]),t._v(" "),s("div",{staticClass:"row setsize"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("div",{staticClass:"boards"},[s("h1",[t._v("hello "+t._s(t.user.name)+",")]),t._v(" "),s("div",{staticClass:"well"},[s("h3",[t._v(" Choose a board to view:")]),t._v(" "),s("div",{staticClass:"well"},[s("ul",t._l(t.boards,function(e){return s("li",[s("router-link",{attrs:{to:"/boards/"+e._id}},[t._v(t._s(e.name)+"       ")]),s("a",{on:{click:function(s){t.removeBoard(e)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})])],1)}))])]),t._v(" "),t.boardForm?s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createBoard(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"board name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.description,expression:"description"}],attrs:{type:"text",require:"",placeholder:"description of board"},domProps:{value:t.description},on:{input:function(e){e.target.composing||(t.description=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")]),t._v(" "),s("button",{attrs:{type:"button"},on:{click:t.toggleFalse}},[t._v("close this form")])])]):s("div",[s("button",{attrs:{type:"button"},on:{click:t.toggleTrue}},[t._v("add a board!")])])])])]),t._v(" "),s("div",{staticClass:"cole-md-3"})])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:"http://i44.photobucket.com/albums/f3/suhmantha/bberrylogo%20copy_zpsu6amhbml.png",alt:"bBerry"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"login"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row topborder"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-2"}),t._v(" "),s("div",{staticClass:"col-md-8"},[s("div",{staticClass:"row"}),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"row"},[s("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"text",required:"",placeholder:"user email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",require:"",placeholder:"password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("login")])])]),t._v(" "),s("div",{staticClass:"row"},[s("h5",[t._v("don't have an account?... register "),s("router-link",{attrs:{to:"/register"}},[t._v("here")]),t._v("!")],1)])]),t._v(" "),s("div",{staticClass:"col-md-2"})]),t._v(" "),s("div",{staticClass:"row bottom bumper"}),t._v(" "),t._m(1)])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("h1",{staticClass:"pacifico"},[t._v("Welcome to")]),s("h1",{staticClass:"ubuntu"},[t._v("banana"),s("img",{attrs:{src:"http://i44.photobucket.com/albums/f3/suhmantha/bananaBerry_zps9iycff8c.png?t=1495668108",alt:"Berry"}})])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row bottom"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h4",[t._v("bananaBerry is a simple Kanban board application that allows you visually plan and organize projects.")]),t._v(" "),s("div",{staticClass:"col-md-3"})])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("error"),t._v(" "),s("router-view")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"register"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-9"}),t._v(" "),s("div",{staticClass:"col-md-2"},[s("button",{staticClass:"button topmargin",on:{click:function(t){}}},[s("router-link",{attrs:{to:"/"}},[t._v("return to login")])],1)])]),t._v(" "),s("div",{staticClass:"row"}),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-3"}),t._v(" "),s("div",{staticClass:"col-md-6"},[s("h2",[t._v("Register")]),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.register(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{type:"text",required:"",placeholder:"name"},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||(t.user.name=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{type:"email",required:"",placeholder:"email"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||(t.user.email=e.target.value)}}}),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],attrs:{type:"password",required:"",placeholder:"set password"},domProps:{value:t.user.password},on:{input:function(e){e.target.composing||(t.user.password=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("submit!")])])]),t._v(" "),s("div",{staticClass:"col-md-3"})]),t._v(" "),s("div",{staticClass:"row bottom"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:"http://i44.photobucket.com/albums/f3/suhmantha/bberrylogo%20copy_zpsu6amhbml.png",alt:"bBerry"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"board"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[t._m(0),t._v(" "),s("div",{staticClass:"col-md-9"}),t._v(" "),s("div",{staticClass:"col-md-2"},[s("h5",[s("button",{attrs:{type:"button"}},[s("router-link",{attrs:{to:"/boards/"}},[t._v("return to boards list...")])],1)])]),t._v(" "),s("div",{staticClass:"row topline"},[s("h2",[t._v(t._s(t.board.name))])]),t._v(" "),s("div",{staticClass:"row"},[t._l(t.lists,function(t){return s("List",{staticClass:"col-md-3 boxA",attrs:{list:t}})}),t._v(" "),s("div",{staticClass:"col-md-3"},[s("form",{on:{submit:function(e){e.preventDefault(),t.createList(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"title of new list..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)]),t._v(" "),s("div",{staticClass:"row bottom"})])])},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"col-md-1"},[s("img",{attrs:{src:"http://i44.photobucket.com/albums/f3/suhmantha/bberrylogo%20copy_zpsu6amhbml.png",alt:"bBerry"}})])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"comment"},[t._v("\n  "+t._s(t.comment.name)+"    "),s("a",{on:{click:function(e){t.removeComment(t.comment)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(e){t.createTasks(e)}}},[s("div",{staticClass:"well"},[t._v("\n          "+t._s(t.list.name)+"      "),s("a",{on:{click:function(e){t.removeList(t.list)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),t._l(this.tasks,function(e,a){return s("Task",{key:a,staticClass:"well tasks",attrs:{task:e,"task-index":a,id:a,dragable:"true"},on:{"!dragstart":function(e){t.moving(e)}}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a task..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"list",attrs:{droppable:"true",ondragover:"event.preventDefault()"},on:{"!drop":function(e){t.createTasks(e)}}},[s("div",{staticClass:"well"},[t._v("\n          "+t._s(t.list.name)+"      "),s("a",{on:{click:function(e){t.removeList(t.list)}}},[s("i",{staticClass:"glyphicon glyphicon-trash"})]),t._v(" "),t._l(this.tasks,function(e,a){return s("Task",{key:a,staticClass:"well tasks",attrs:{task:e,"task-index":a,id:a,dragable:"true"},on:{"!dragstart":function(e){t.moving(e)}}})}),t._v(" "),s("div",[s("form",{on:{submit:function(e){e.preventDefault(),t.createTask(e)}}},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],attrs:{type:"text",required:"",placeholder:"add a task..."},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),t._v(" "),s("button",{attrs:{type:"submit"}},[t._v("+")])])])],2)])},staticRenderFns:[]}},,,,,,function(t,e){}],[71]);
//# sourceMappingURL=app.7adeebb22aaabd1b9b81.js.map