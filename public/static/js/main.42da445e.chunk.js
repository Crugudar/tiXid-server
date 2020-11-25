(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{130:function(e,t,a){},131:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(70),l=a.n(o),s=a(7),c=a(2),i=a(3),u=a(5),m=a(4),d=(a(44),a(8)),p=a(1),h=a.n(p),v=a(6),g=a(33),f=a.n(g),E=new(function(){function e(){Object(c.a)(this,e),this.auth=f.a.create({baseURL:"https://tixid.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.email,n=e.password;return this.auth.post("/auth/signup",{username:t,email:a,password:n}).then((function(e){return e.data}))}},{key:"login",value:function(e){var t=e.email,a=e.password;return this.auth.post("/auth/login",{email:t,password:a}).then((function(e){return e.data}))}},{key:"logout",value:function(){return this.auth.get("/auth/logout",{}).then((function(e){return e.data}))}},{key:"me",value:function(){return this.auth.get("/auth/me").then((function(e){return e.data}))}},{key:"bringDeck",value:function(){return this.auth.get("/game/deck").then((function(e){return e.data}))}}]),e}()),b=r.a.createContext(),y=b.Consumer,C=b.Provider,O=function(e){return function(t){Object(u.a)(n,t);var a=Object(m.a)(n);function n(){return Object(c.a)(this,n),a.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(y,null,(function(a){var n=a.login,o=a.signup,l=a.user,s=a.logout,c=a.isLoggedin;return r.a.createElement(e,Object.assign({login:n,signup:o,user:l,logout:s,isLoggedin:c},t.props))}))}}]),n}(r.a.Component)},k=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={isLoggedin:!1,user:null,isLoading:!0,message:"",cards:""},e.signup=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,o,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.username,r=a.email,o=a.password,t.prev=1,t.next=4,E.signup({username:n,email:r,password:o});case 4:l=t.sent,e.setState({isLoggedin:!0,user:l}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.login=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,o;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=a.email,r=a.password,t.prev=1,t.next=4,E.login({email:n,password:r});case 4:o=t.sent,e.setState({isLoggedin:!0,user:o}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}(),e.logout=Object(v.a)(h.a.mark((function t(){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.logout();case 3:e.setState({isLoggedin:!1,user:null}),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])}))),e.bringDeck=Object(v.a)(h.a.mark((function t(){var a;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,E.bringDeck();case 3:a=t.sent,e.setState({cards:a}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:return t.abrupt("return",e.auth.get("/game/deck").then((function(e){return e.data})));case 11:case"end":return t.stop()}}),t,null,[[0,7]])}))),e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.me().then((function(t){t.email&&e.setState({isLoggedin:!0,user:t,isLoading:!1})})).catch((function(t){return e.setState({isLoggedin:!1,user:null,isLoading:!1,message:t.message})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;t.isLoggedin!==this.state.isLoggedin&&E.me().then((function(e){e.email&&a.state.isLoggedin&&a.setState({isLoggedin:!0,user:e,isLoading:!1})})).catch((function(e){return a.setState({isLoggedin:!1,user:null,isLoading:!1,message:e.message})}))}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user,o=this.login,l=this.logout,s=this.signup;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(C,{value:{isLoggedin:a,user:n,login:o,logout:l,signup:s}},this.props.children)}}]),a}(r.a.Component),w=a(14),j=O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={username:"",email:"",password:""},e.handleFormSubmit=function(){var t=Object(v.a)(h.a.mark((function t(a){var n,r,o,l;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a.preventDefault(),n=e.state,r=n.username,o=n.email,l=n.password,console.log("Signup -> form submit",{username:r,email:o,password:l}),e.props.signup({username:r,email:o,password:l});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(w.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password;return r.a.createElement("div",{className:"authform"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"enterForm"},r.a.createElement("div",{className:"inputs"},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{type:"text",name:"username",value:t,placeholder:"Dixiter123",onChange:this.handleChange}),r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",value:a,placeholder:"welcometo@dixit.com",onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",value:n,placeholder:"******",onChange:this.handleChange}),r.a.createElement("input",{className:"signupbttn",type:"submit",value:"Signup"}),r.a.createElement(s.b,{className:"link",to:"/login"},r.a.createElement("p",null,"Already have account?")))))}}]),a}(n.Component)),S=O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={email:"",password:""},e.handleFormSubmit=function(t){t.preventDefault();var a=e.state,n=a.email,r=a.password;console.log("Login -> form submit",{email:n,password:r}),e.props.login({email:n,password:r})},e.handleChange=function(t){var a=t.target,n=a.name,r=a.value;e.setState(Object(w.a)({},n,r))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"authform"},r.a.createElement("div",{className:"inputs"},r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"enterForm"},r.a.createElement("label",null,"Email:"),r.a.createElement("input",{type:"text",name:"email",placeholder:"welcometo@dixit.com",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{type:"password",name:"password",placeholder:"******",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Login"}),r.a.createElement("div",null,r.a.createElement(s.b,{to:"/signup",className:"link"},"Don't have an account?")))))}}]),a}(n.Component)),x=(a(99),O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=(e.user,e.logout);return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"nav"},r.a.createElement("div",{className:"nav-links"}),r.a.createElement("button",{className:"navbar-button",onClick:t},"Logout"),r.a.createElement(s.b,{to:"/profile",id:"home-btn"},r.a.createElement("button",{className:"navbar-button"},"Profile")),r.a.createElement(s.b,{to:"/",id:"home-btn"},r.a.createElement("button",{className:"navbar-button"},"Game"))))}}]),a}(n.Component))),N=(a(55),a(23)),L=a.n(N);var F=O((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:" authform"},r.a.createElement("div",{className:"enterForm2"},r.a.createElement("h2",null,"Welcome to Dixit!"),r.a.createElement(s.b,{className:"loginlink",to:"/login"},"Log In!"),r.a.createElement("p",{className:"signuptext"},"Don't have an account? ",r.a.createElement(s.b,{className:"signuplink",to:"/signup"}," Sign Up! ")))))}));var T=O((function(e){return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement("div",{className:L.a.Container},r.a.createElement("video",{autoPlay:"autoplay",loop:"loop",muted:!0,className:L.a.Video},r.a.createElement("source",{src:"https://res.cloudinary.com/lemonade292/video/upload/v1606155635/videos%20tixid/VIDEO_Dixit_Boxart_seafhb.mp4",type:"video/mp4"}),"Your browser does not support the video tag."),r.a.createElement("div",{className:L.a.Content},r.a.createElement("div",{className:L.a.SubContent},r.a.createElement("p",null,"Welcome to Dixit ",e.user.username&&e.user.username,"!"),r.a.createElement("br",null),r.a.createElement(s.b,{to:"/game"},r.a.createElement("button",null,"Let's Play!")))))))})),R=new(function(){function e(){var t=this;Object(c.a)(this,e),this.handleUpload=function(){var e=Object(v.a)(h.a.mark((function e(a){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("file in service: ",a),e.prev=1,e.next=4,t.profile.post("/profile/upload",a);case 4:return n=e.sent,e.abrupt("return",n.data);case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),this.profile=f.a.create({baseURL:"https://tixid.herokuapp.com",withCredentials:!0})}return Object(i.a)(e,[{key:"addCard",value:function(e){var t=e.image,a=e.name,n=e.author;return this.profile.post("/profile/addCard",{image:t,name:a,author:n}).then((function(e){return e.data}))}},{key:"editCard",value:function(e){var t=e.id,a=e.image,n=e.name;return console.log("aqu\xed ha llegado a service",t),this.profile.post("/profile/editCard/".concat(t),{id:t,image:a,name:n}).then((function(e){return e.data}))}},{key:"deleteCard",value:function(e,t){return console.log("serviceeeeeeeeeeeeeeeeeeeee",t),this.profile.delete("/profile/deleteCard/".concat(t,"/").concat(e),{cardId:e,userId:t}).then((function(e){return e.data}))}},{key:"cardList",value:function(e){return this.profile.get("/profile/cardList/".concat(e),{author:e}).then((function(e){return e.data}))}},{key:"addPhoto",value:function(e){var t=e.image,a=e.author;return console.log("serviceeeeeeeeeeeeeeeeeeeee",a,t),this.profile.post("/profile/addPhoto/".concat(a),{author:a,image:t}).then((function(e){return e.data}))}}]),e}()),D=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.handleFileUpload=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("the file to be uploaded is: ",t.target.files[0]),(a=new FormData).append("image",t.target.files[0]),e.prev=3,e.next=6,R.handleUpload(a);case 6:r=e.sent,console.log("response is",r),n.setState({image:r.secure_url}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("while uploading",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),n.handleFormSubmit=function(){var e=Object(v.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,R.addCard(n.state);case 4:a=e.sent,console.log("added",a),n.setState({image:"",name:""}),console.log(n.props.history),window.location.reload(),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("while adding the movie error",e.t0);case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}(),n.state={image:"",name:"",author:e.user._id},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=(t.image,t.name);return r.a.createElement("div",null,r.a.createElement("h1",null,"Create your Card"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Image:"),r.a.createElement("input",{type:"file",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"Save the new Card")))}}]),a}(n.Component),_=O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log(e),(n=t.call(this,e)).handleFormSubmit=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,r,o,l;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=n.state,r=a.id,o=a.image,l=a.name,console.log("esto es lo que hay en el estado",n.state),console.log("uploadimage -> form submit",{id:r,image:o,name:l}),R.editCard({id:r,image:o,name:l}),n.setState({image:"",name:""}),n.props.history.push("/profile"),console.log(n.props);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.state={name:"",image:"",id:n.props.match.params.id},console.log("esto viene de props",n.props.match.params.id),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.image,a=e.name;return r.a.createElement("div",null,r.a.createElement("h1",null,"Edit"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Name:"),r.a.createElement("input",{type:"text",name:"name",value:a,onChange:this.handleChange}),r.a.createElement("label",null,"Image:"),r.a.createElement("input",{type:"file",name:"image",value:t,onChange:this.handleChange}),r.a.createElement("input",{type:"submit",value:"Upload"})))}}]),a}(n.Component)),P=a(26),I=a(32),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(w.a)({},a,r))},n.votesFunction=Object(v.a)(h.a.mark((function e(){var t,a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=0,a=0,r=0,o=0,console.log("FUNCTION 22222222222222222222222222222"),console.log("arr1votedto ON F2",n.state.arr1votedTo),console.log("arr2votedto ON F2",n.state.arr2votedTo),console.log("arr3votedto ON F2",n.state.arr3votedTo),0==n.state.arr1votedTo?t++:2==n.state.arr1votedTo?r++:3==n.state.arr1votedTo&&o++,0==n.state.arr2votedTo?t++:1==n.state.arr2votedTo?a++:3==n.state.arr2votedTo&&o++,0==n.state.arr3votedTo?t++:2==n.state.arr3votedTo?r++:1==n.state.arr3votedTo&&a++,console.log("FUNCTION votes function"),console.log("arr0temp",t),console.log("arr1temp",a),console.log("arr2temp",r),console.log("arr3temp",o),n.setState({arr0votesReceived:t,arr1votesReceived:a,arr2votesReceived:r,arr3votesReceived:o}),console.log(" after set state",Object(I.a)(n)),console.log("arr0votesReceived",n.state.arr0votesReceived),console.log("arr1votesReceived",n.state.arr1votesReceived),console.log("arr2votesReceived",n.state.arr2votesReceived),console.log("arr3votesReceived",n.state.arr3votesReceived);case 22:case"end":return e.stop()}}),e)}))),n.givePoints=function(){console.log("FUNCTION GIVE POINTS"),console.log("arr1votedto",n.state.arr1votedTo),console.log("arr2votedto",n.state.arr2votedTo),console.log("arr3votedto",n.state.arr3votedTo),console.log("arr0votesReceived",n.state.arr0votesReceived),console.log("arr1votesReceived",n.state.arr1votesReceived),console.log("arr2votesReceived",n.state.arr2votesReceived),console.log("arr3votesReceived",n.state.arr3votesReceived);var e=0,t=0,a=0,r=0;0==n.state.arr0votesReceived||3==n.state.arr0votesReceived?(t+=2,a+=2,r+=2):(e+=3,0==n.state.arr1votedTo&&(t+=3),0==n.state.arr2votedTo&&(a+=3),0==n.state.arr3votedTo&&(r+=3)),t+=n.state.arr1votesReceived,a+=n.state.arr2votesReceived,r+=n.state.arr3votesReceived;var o=n.state.players[0].points+e,l=n.state.players[1].points+t,s=n.state.players[2].points+a,c=n.state.players[3].points+r,i=Object(P.a)(n.state.players);i[0].points=o,i[1].points=l,i[2].points=s,i[3].points=c,console.log("hola",o),i.push(i[0]),i.shift(),n.setState({players:i})},n.bothFunctions=function(){var e=Object(v.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,n.votesFunction();case 3:n.givePoints();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={players:[{name:"Player1",image:"",points:0,id:""},{name:"Player2",image:"",points:0,id:""},{name:"Player3",image:"",points:0,id:""},{name:"Player4",image:"",points:0,id:""}],arr1votedTo:0,arr2votedTo:0,arr3votedTo:0,arr0votesReceived:0,arr1votesReceived:0,arr2votesReceived:0,arr3votesReceived:0},n}return Object(i.a)(a,[{key:"render",value:function(){this.state.players;return r.a.createElement("div",null,r.a.createElement("form",{className:"pointsform",onSubmit:this.bothFunctions},r.a.createElement("div",null,r.a.createElement("p",null,this.state.players[0].name),r.a.createElement("p",null,this.state.players[0].points),r.a.createElement("h2",null,"Initial player")),r.a.createElement("div",null,r.a.createElement("label",null,this.state.players[1].name),r.a.createElement("p",null,this.state.players[1].points),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr1votedTo",value:"0",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[0].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr1votedTo",value:"2",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[2].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr1votedTo",value:"3",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[3].name))),r.a.createElement("div",null,r.a.createElement("label",null,this.state.players[2].name),r.a.createElement("p",null,this.state.players[2].points),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr2votedTo",value:"0",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[0].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr2votedTo",value:"1",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[1].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr2votedTo",value:"3",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[3].name))),r.a.createElement("div",null,r.a.createElement("label",null,this.state.players[3].name),r.a.createElement("p",null,this.state.players[3].points),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr3votedTo",value:"0",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[0].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr3votedTo",value:"1",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[1].name)),r.a.createElement("div",null,r.a.createElement("input",{type:"radio",name:"arr3votedTo",value:"2",onChange:this.handleChange}),r.a.createElement("p",null,this.state.players[2].name))),r.a.createElement("button",null,"Let's Vote!")))}}]),a}(n.Component),M=O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log("props del perfil",e),(n=t.call(this,e)).handleFileUpload=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("the file to be uploaded is: ",t.target.files[0]),(a=new FormData).append("image",t.target.files[0]),e.prev=3,e.next=6,R.handleUpload(a);case 6:r=e.sent,console.log("response is",r),n.setState({image:r.secure_url}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log("while uploading",e.t0);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})));return function(t){return e.apply(this,arguments)}}(),n.handlePhotoSubmit=function(){var e=Object(v.a)(h.a.mark((function e(t){var a,r,o;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,a=n.state.user._id,r=n.state.image,console.log("JHOLA CLAUDIA",r,a),e.next=7,R.addPhoto({image:r,author:a});case 7:o=e.sent,console.log("added",o),n.setState({image:""}),console.log("pastanaga"),window.location.reload(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("while adding the movie error",e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),n.state={cards:[],user:e.user,image:"",userId:e.user._id},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;return R.cardList(this.state.user._id).then((function(t){e.setState({cards:t})})).catch((function(e){return console.log(e)}))}},{key:"delete",value:function(e,t){console.log(this.state.user._id),R.deleteCard(t.eachCard._id,this.state.userId),console.log("props del profile",this.props),this.props.history.push("/profile"),window.location.reload()}},{key:"edit",value:function(){R.editCard()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement("h1",null,"Profile of ",this.state.user.username),r.a.createElement("div",null,r.a.createElement("img",{src:this.state.user.image,alt:"perfil"}),r.a.createElement("form",{onSubmit:this.handlePhotoSubmit},r.a.createElement("label",null,"Image:"),r.a.createElement("input",{type:"file",name:"image",onChange:function(t){return e.handleFileUpload(t)}}),r.a.createElement("button",{type:"submit"},"New Profile Photo"))),r.a.createElement("div",null,this.state.cards&&this.state.cards.map((function(t){return r.a.createElement("div",{key:t._id},r.a.createElement("img",{src:t.image,alt:"peine"}),r.a.createElement("h1",null,t.name),r.a.createElement("button",{onClick:function(a){return e.delete(a,{eachCard:t})}},"Delete"),r.a.createElement(s.b,{to:"/editCard/".concat(t._id)},r.a.createElement("button",null,"Edit")))}))),r.a.createElement(D,Object.assign({user:this.state.user},this.props)),r.a.createElement(U,null))}}]),a}(n.Component)),V=a(72),A=a.n(V),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("table",null,r.a.createElement("tbody",null,this.props.messages.map((function(e){return r.a.createElement("tr",{key:e.key},r.a.createElement("td",null,e.name,":"),r.a.createElement("td",null,e.message))}))))}}]),a}(n.Component),B=(a(130),A()("https://tixid.herokuapp.com",{transports:["websocket","polling"]})),J=O(function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log(e),(n=t.call(this,e)).dealHand=function(e,t){return function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}}(e),Array.prototype.chunk=function(e){return this.length?[this.slice(0,e)].concat(this.slice(e).chunk(e)):[]},e.chunk(e.length/4)},n.state={name:null,messages:[],newMessage:"",user:n.props.user,cards:[],playerhands:{player1:[],player2:[],player3:[],player4:[]},yourhand:[],selected:[],info:[],currentplayer:0,theChosenOne:"",players:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("Hola"),B.emit("hola",this.props.user),B.on("welcome",function(){var t=Object(v.a)(h.a.mark((function t(a){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("Hello ".concat(a.data," you are in room ").concat(a.room,", and are player ").concat(a.player)),e.setState({currentplayer:a.player}),console.log(e.state.currentplayer);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),B.on("otherusers",(function(e){console.log(e)})),B.on("players",(function(t){console.log("hola",t),e.setState({players:t})})),B.on("chat",(function(t){t.key=JSON.stringify(t),console.log(t),e.setState({messages:[].concat(Object(P.a)(e.state.messages),[t])})})),B.on("selectedcards",(function(t){console.log("cartitaaaaaaaaaaaaaaaaas",t),e.setState({selected:t}),console.log("estaditoooooooooooooooo",e.state.selected)}))}},{key:"getCards",value:function(){var e=Object(v.a)(h.a.mark((function e(){var t,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.bringDeck();case 2:t=e.sent,this.setState({cards:t}),a=this.dealHand(this.state.cards,4),this.setState({playerhands:{player1:a[0],player2:a[1],player3:a[2],player4:a[3]}}),console.log(this.state.currentplayer),this.assignHand();case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){B.close()}},{key:"handleSubmit",value:function(e){e.preventDefault(),B.emit("chat",{userId:this.props.user._id,name:this.props.user.username,message:this.state.newMessage,timestamp:(new Date).toISOString()}),this.setState({newMessage:""})}},{key:"setNewMessage",value:function(e){this.setState({newMessage:e.target.value})}},{key:"assignHand",value:function(){1===this.state.currentplayer?this.setState({yourhand:this.state.playerhands.player1}):2===this.state.currentplayer?this.setState({yourhand:this.state.playerhands.player2}):3===this.state.currentplayer?this.setState({yourhand:this.state.playerhands.player3}):4===this.state.currentplayer&&this.setState({yourhand:this.state.playerhands.player4})}},{key:"selectCard",value:function(e){var t=e.target,a=t.name,n=t.index;this.setState({theChosenOne:{index:n,name:a}}),console.log(a)}},{key:"sumbitTheChosenOne",value:function(){var e=Object(P.a)(this.state.yourhand);B.emit("cardselected",this.state.theChosenOne.name),e.splice(this.state.theChosenOne.index,1),this.setState({yourhand:e})}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,this.state.currentplayer?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",null,this.state.info),r.a.createElement("div",{className:"player"},this.state.selected.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:this.state.selected[0],alt:""}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:this.state.selected[1],alt:""}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:this.state.selected[2],alt:""}))),r.a.createElement("div",{className:"card"},r.a.createElement("div",null,r.a.createElement("img",{src:this.state.selected[3],alt:""})))):r.a.createElement("p",null,"Wait for it")),r.a.createElement("button",{onClick:function(){return e.getCards()}}," Get cards"),r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,this.state.yourhand.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"allhands"},r.a.createElement("div",{className:"player"},r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.yourhand[0].url,alt:""}),r.a.createElement("button",{name:this.state.yourhand[0].url,index:0,onClick:function(t){return e.selectCard(t)}},"Select")),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.yourhand[1].url,alt:""}),r.a.createElement("button",{name:this.state.yourhand[1].url,index:1,onClick:function(t){return e.selectCard(t)}},"Select")),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.yourhand[2].url,alt:""}),r.a.createElement("button",{name:this.state.yourhand[2].url,index:2,onClick:function(t){return e.selectCard(t)}},"Select")),r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:this.state.yourhand[3].url,alt:""}),r.a.createElement("button",{name:this.state.yourhand[3].url,index:3,onClick:function(t){return e.selectCard(t)}},"Select"))),r.a.createElement("button",{onClick:function(){return e.sumbitTheChosenOne()}},"Enviar"))):r.a.createElement("p",null,"Loading"))),r.a.createElement("div",{className:"ChatRoom"},r.a.createElement("div",null,r.a.createElement("form",{action:"",onSubmit:function(t){return e.handleSubmit(t)}},r.a.createElement("label",{htmlFor:""}," Message"),r.a.createElement("input",{id:"message",type:"text",label:"Message",placeholder:"Enter your Message",onChange:function(t){return e.setNewMessage(t)},value:this.state.newMessage,autoComplete:"off"}),r.a.createElement("button",{type:"submit"},"Send")),r.a.createElement(H,{messages:this.state.messages,user:this.state.user}),r.a.createElement(U,{players:this.state.players})))),r.a.createElement(s.b,{to:"/"},r.a.createElement("button",null,"Get out"))):null)}}]),a}(n.Component)),G=a(22);var W=O((function(e){var t=e.component,a=e.isLoggedin,n=Object(G.a)(e,["component","isLoggedin"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(d.a,{to:"/"}):r.a.createElement(t,e)}}))}));var q=O((function(e){var t=e.component,a=e.isLoggedin,n=Object(G.a)(e,["component","isLoggedin"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/"})}}))}));var Y=O((function(e){var t=e.component,a=e.isLoggedin,n=Object(G.a)(e,["component","isLoggedin"]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(d.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(d.a,{to:"/home"}):r.a.createElement(t,e)}})))})),z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(k,null,r.a.createElement(d.d,null,r.a.createElement(Y,{exact:!0,path:"/",component:F}),r.a.createElement(W,{exact:!0,path:"/signup",component:j}),r.a.createElement(W,{exact:!0,path:"/login",component:S}),r.a.createElement(q,{exact:!0,path:"/home",component:T}),r.a.createElement(q,{exact:!0,path:"/profile",component:M}),r.a.createElement(q,{exact:!0,path:"/editCard/:id",component:_}),r.a.createElement(d.b,{exact:!0,path:"/game",render:function(e){return r.a.createElement(J,e)}})))}}]),a}(n.Component);l.a.render(r.a.createElement(s.a,null,r.a.createElement(z,null)),document.getElementById("root"))},23:function(e,t,a){e.exports={Container:"BackgroundVideo_Container__JFldr",Video:"BackgroundVideo_Video__2L7Yu",Content:"BackgroundVideo_Content__2TMIO",SubContent:"BackgroundVideo_SubContent__3ub3H"}},44:function(e,t,a){},55:function(e,t,a){},73:function(e,t,a){e.exports=a(131)},99:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.42da445e.chunk.js.map