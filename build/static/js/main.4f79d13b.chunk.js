(this["webpackJsonpproject-3-frontend"]=this["webpackJsonpproject-3-frontend"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(21),s=a.n(r),l=(a(71),a(10)),i=a(9),o=a(8),j=a.n(o),b=a(11),d=a(6),u=a(123),h=a(117),m=a(118),O=a(1);var x=function(e){var t=e.item;return Object(O.jsxs)("div",{className:"card",children:[Object(O.jsx)("div",{className:"card-header",children:t.teamName}),Object(O.jsx)("img",{className:"card-img-top",src:t.image,alt:t.playerName}),Object(O.jsxs)("div",{className:"card-body",children:[Object(O.jsx)("h5",{className:"card-title",children:t.playerName}),Object(O.jsxs)("p",{className:"card-text",children:["\xa3",t.price]})]})]})},p=a(19),v=a.n(p),f=Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_CLOUDINARY_URL:"https://api.cloudinary.com/v1_1/duvjsiszz/image/upload",REACT_APP_CLOUDINARY_UPLOAD_PRESET:"yidgti3t"}).REACT_APP_PROD_URL;function N(){return window.localStorage.getItem("token")}function g(){var e=N();if(!e)return!1;var t=e.split(".");return!(t.length<3)&&JSON.parse(atob(t[1]))}function C(){var e=g();return!!e&&Math.round(Date.now()/1e3)<e.exp}function w(){return{headers:{Authorization:"Bearer ".concat(N())}}}function k(){return v.a.get("".concat(f,"/items/"))}function y(e){return v.a.get("".concat(f,"/items/").concat(e,"/"))}function S(e){return v.a.post("".concat(f,"/items/new/"),e,w())}function F(e,t){return v.a.post("".concat(f,"/items/").concat(e,"/comments/"),t,w())}function P(e){return v.a.post("".concat(f,"/items/").concat(e,"/like/"),null,w())}function A(e){return v.a.post("".concat(f,"/auth/register/"),e)}function L(e){return v.a.post("".concat(f,"/auth/login/"),e)}function E(){return v.a.get("".concat(f,"/auth/profile/"),w())}var I=function(){var e=n.a.useState(""),t=Object(d.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(d.a)(r,2),i=s[0],o=s[1],p=!a&&!i,v=[];return n.a.useEffect((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),a?(a.sort((function(e,t){return e.id<t.id})),v.push(a)):console.log("no items"),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(u.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://www.gannett-cdn.com/-mm-/7222ab99f5f32771edbbf8a0663d8c9407320dad/c=0-227-4455-2744/local/-/media/2016/12/16/Bergen/NorthJersey/636174848685852947-AP-457130363469.jpg?width=2560",alt:"First slide"}),Object(O.jsxs)(u.a.Caption,{className:"title-wrapper",children:[Object(O.jsx)(l.Link,{className:"title-text-link",to:"/items",children:Object(O.jsx)("h1",{className:"title-text",children:"SWAPxSHOP"})}),Object(O.jsx)("p",{children:"Post A Kit, Sell A Kit, Buy A Kit"})]})]}),Object(O.jsxs)(u.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://www.gannett-cdn.com/-mm-/147222021a4df3ce80871baf403b0602b2fc3b03/c=0-70-2292-1365/local/-/media/2015/06/21/USATODAY/USATODAY/635705006182852176-USP-SOCCER-WOMEN-S-WORLD-CUP-SPAIN-AT-COSTA-RICA-73669516.JPG?width=2560",alt:"Second slide"}),Object(O.jsxs)(u.a.Caption,{className:"title-wrapper",children:[Object(O.jsx)(l.Link,{className:"title-text-link",to:"/items",children:Object(O.jsx)("h1",{className:"title-text",children:"SWAPxSHOP"})}),Object(O.jsx)("p",{children:"Post A Kit, Sell A Kit, Buy A Kit"})]})]}),Object(O.jsxs)(u.a.Item,{children:[Object(O.jsx)("img",{className:"d-block w-100",src:"https://www.belfasttelegraph.co.uk/sport/football/premier-league/4fb90/34528347.ece/AUTOCROP/w1240/PANews%20BT_P-702dd505-ba02-456d-bf8b-d1682fea5deb_I1.jpg",alt:"Third slide"}),Object(O.jsxs)(u.a.Caption,{className:"title-wrapper",children:[Object(O.jsx)(l.Link,{className:"title-text-link",to:"/items",children:Object(O.jsx)("h1",{className:"title-text",children:"SWAPxSHOP"})}),Object(O.jsx)("p",{children:"Post A Kit, Sell A Kit, Buy A Kit"})]})]})]}),Object(O.jsxs)(h.a,{children:[Object(O.jsxs)("div",{className:"row",children:[i&&Object(O.jsx)("p",{children:"Oops! Something went wrong \ud83d\ude22"}),p&&Object(O.jsx)("p",{children:"...loading"})]}),Object(O.jsx)(m.a,{className:"justify-content-center",children:Object(O.jsx)("p",{children:"Recently Added Kits:"})}),Object(O.jsx)("div",{className:"card-deck",children:a&&v.map((function(e){return e.slice(0,3).map((function(e){return Object(O.jsx)(l.Link,{to:"items/".concat(e.id,"/"),children:Object(O.jsx)(x,{item:e})},e.id)}))}))})]})]})},T=a(39),U=a(63),B=a(119);var W=function(){var e=n.a.useState(null),t=Object(d.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(d.a)(r,2),o=s[0],u=s[1],p=!a&&!o,v=n.a.useState(""),f=Object(d.a)(v,2),N=f[0],g=f[1],C=Object(i.k)(),w=document.documentElement;n.a.useEffect((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,k();case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),u(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var y=function(e,t){return e.id>t.id?1:-1};return Object(O.jsxs)(h.a,{className:"Container",children:[Object(O.jsxs)(m.a,{className:"search-bar-row",children:[Object(O.jsx)(U.a,{className:"search-bar-col",children:Object(O.jsxs)(U.a,{className:"search-bar player",children:[Object(O.jsx)("label",{htmlFor:"header-search",children:"Find a player or team"}),Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"text",id:"header-search",placeholder:"Search",name:"s",onChange:function(e){g(e.target.value)}})})]})}),Object(O.jsx)(U.a,{className:"search-bar-col",children:Object(O.jsxs)("div",{className:"form-group search-bar",children:[Object(O.jsx)("label",{htmlFor:"teamName",children:"Search by Team"}),Object(O.jsx)(T.a,{options:[{value:"",label:"All Teams"},{value:"arsenal",label:"Arsenal Football Club"},{value:"aston",label:"Aston Villa Football Club"},{value:"brentford",label:"Brentford Football Club"},{value:"brighton",label:"Brighton & Hove Albion Football Club"},{value:"burnley",label:"Burnley Football Club"},{value:"chelsea",label:"Chelsea Football Club"},{value:"crystal",label:"Crystal Palace Football Club"},{value:"everton",label:"Everton Football Club"},{value:"leeds",label:"Leeds United Football Club"},{value:"leicester",label:"Leicester City Football Club"},{value:"liverpool",label:"Liverpool Football Club"},{value:"manchester city",label:"Manchester City Football Club"},{value:"manchester united",label:"Manchester United Football Club"},{value:"newcastle",label:"Newcastle United Football Club"},{value:"norwich",label:"Norwich City Football Club"},{value:"southampton",label:"Southampton Football Club"},{value:"tottenham",label:"Tottenham Hotspur Football Club"},{value:"watford",label:"Watford Football Club"},{value:"west",label:"West Ham United Football Club"},{value:"wolverhampton",label:"Wolverhampton Football Club"}],defaultValue:"Search by Team",onChange:function(e){g(e.value)}})]})})]}),Object(O.jsxs)("div",{className:"card-deck",children:[p&&Object(O.jsx)("p",{children:"...loading"}),a&&a.sort(y).filter((function(e){return e.playerName.toLowerCase().includes(N.toLocaleLowerCase())||e.teamName.toLowerCase().includes(N)})).map((function(e){return Object(O.jsx)(l.Link,{to:"/items/".concat(e.id,"/"),children:Object(O.jsx)(x,{item:e})},e.id)}))]}),Object(O.jsx)(h.a,{children:Object(O.jsxs)(m.a,{className:"bottom-buttons",children:[Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary",onClick:function(){C.push("/")},children:"Home"}),Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary",onClick:function(){w.scrollTo({top:0,behavior:"smooth"})},children:"\u2191 to top"})]})})]})},_=a(16),H=a(12),D=a(120);var R=function(e){var t=e.value,a=e.onChange,c=function(){var e=Object(b.a)(j.a.mark((function e(t){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(c=new FormData).append("file",t.target.files[0]),c.append("upload_preset","yidgti3t"),e.next=5,v.a.post("https://api.cloudinary.com/v1_1/duvjsiszz/image/upload",c);case 5:n=e.sent,a(n.data.url);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)("div",{className:"form-group",children:[t&&Object(O.jsx)("div",{style:{width:"300px"},children:Object(O.jsx)("img",{src:t,alt:"selected",style:{width:"100%",height:"auto"}})}),!t&&Object(O.jsx)("div",{children:Object(O.jsx)("input",{type:"file",className:"form-control",id:"image",placeholder:"Upload a pic of your kit",onChange:c,name:"image",value:t.image})})]})};var K=function(){return[{value:"Arsenal Football Club",label:"Arsenal Football Club"},{value:"Aston Villa Football Club",label:"Aston Villa Football Club"},{value:"Brentford Football Club",label:"Brentford Football Club"},{value:"Brighton & Hove Football Club",label:"Brighton & Hove Albion Football Club"},{value:"Burnley Football Club",label:"Burnley Football Club"},{value:"Chelsea Football Club",label:"Chelsea Football Club"},{value:"Crystal Palace Football Club",label:"Crystal Palace Football Club"},{value:"Everton Football Club",label:"Everton Football Club"},{value:"Leeds United Football Club",label:"Leeds United Football Club"},{value:"Leicester Football Club",label:"Leicester City Football Club"},{value:"Liverpool Football Club",label:"Liverpool Football Club"},{value:"Manchester City Football Club",label:"Manchester City Football Club"},{value:"Manchester United Football Club",label:"Manchester United Football Club"},{value:"Newcastle United Football Club",label:"Newcastle United Football Club"},{value:"Norwich City Football Club",label:"Norwich City Football Club"},{value:"Southampton Football Club",label:"Southampton Football Club"},{value:"Tottenham Football Club",label:"Tottenham Hotspur Football Club"},{value:"Watford Football Club",label:"Watford Football Club"},{value:"West Ham United Football Club",label:"West Ham United Football Club"},{value:"Wolverhampton Football Club",label:"Wolverhampton Football Club"}]};var q=function(){var e={playerName:"",teamName:"",image:"",price:"",description:"",condition:""},t=Object(i.k)(),a=n.a.useState(e),c=Object(d.a)(a,2),r=c[0],s=c[1],l=n.a.useState(e),o=Object(d.a)(l,2),u=o[0],x=o[1],p=n.a.useState(!1),v=Object(d.a)(p,2),f=v[0],N=v[1],g=K(),C=function(e){s(Object(H.a)(Object(H.a)({},r),{},Object(_.a)({},e.target.name,e.target.value))),x(Object(H.a)(Object(H.a)({},u),{},Object(_.a)({},e.target.name,"")))},w=function(){var e=Object(b.a)(j.a.mark((function e(a){var c,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,S(r);case 4:c=e.sent,n=c.data,t.push("/items/".concat(n.id)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),N(!0),x(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(O.jsxs)(h.a,{className:"form-container",children:[Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h1",{className:"comment-title",children:"Sell your kit!"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsxs)("form",{onSubmit:w,className:"form-wrapper",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"teamName",children:"Team"}),Object(O.jsx)(T.a,{options:g,onChange:function(e){return function(e,t){var a=e?e.value:[];s(Object(H.a)(Object(H.a)({},r),{},Object(_.a)({},t,a)))}(e,"teamName")}})]}),u&&u.teamName&&Object(O.jsx)("p",{className:"text-danger",children:"Team name required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"playerName",children:"Player Name"}),Object(O.jsx)("input",{type:"text",className:"form-control",id:"playerName",placeholder:"Player Name - if none, state None. ",onChange:C,name:"playerName",value:r.playerName})]}),u&&u.playerName&&Object(O.jsx)("p",{className:"text-danger",children:"Player name required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"description",children:"Description"}),Object(O.jsx)(D.a.Control,{type:"textarea",as:"textarea",rows:3,className:"form-control textarea",id:"description",placeholder:"Describe your kit.",onChange:C,name:"description",value:r.description})]}),u&&u.description&&Object(O.jsx)("p",{className:"text-danger",children:"Description required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"condition",children:"Condition"}),Object(O.jsxs)("div",{children:[Object(O.jsx)(D.a.Check,{inline:!0,label:"Good",name:"condition",value:"good",onChange:C,checked:"good"===r.condition}),Object(O.jsx)(D.a.Check,{inline:!0,label:"Very Good",name:"condition",value:"veryGood",onChange:C,checked:"veryGood"===r.condition}),Object(O.jsx)(D.a.Check,{inline:!0,label:"Excellent",name:"condition",value:"excellent",onChange:C,checked:"excellent"===r.condition}),Object(O.jsx)(D.a.Check,{inline:!0,label:"Mint",name:"condition",value:"mint",onChange:C,checked:"mint"===r.condition}),Object(O.jsx)(D.a.Check,{inline:!0,label:"Match Worn",name:"condition",value:"matchWorn",onChange:C,checked:"matchWorn"===r.condition})]})]}),u&&u.condition&&Object(O.jsx)("p",{className:"text-danger",children:"Condition required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"image",children:"Kit Pic"}),Object(O.jsx)(R,{value:r.image,onChange:function(e){s(Object(H.a)(Object(H.a)({},r),{},{image:e})),x(Object(H.a)(Object(H.a)({},u),{},{image:""}))}})]}),u&&u.image&&Object(O.jsx)("p",{className:"text-danger",children:"Image required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"price",children:"Price"}),Object(O.jsx)("input",{type:"number",className:"form-control",id:"price",placeholder:"Price",onChange:C,name:"price",value:r.price})]}),u&&u.price&&Object(O.jsx)("p",{className:"text-danger",children:"Price required"}),f&&Object(O.jsx)("p",{className:"text-danger",children:"You missed a required field"}),Object(O.jsx)("div",{className:"field",children:Object(O.jsx)(B.a,{variant:"secondary",type:"submit",className:"btn btn-block",children:"Sell my kit!"})})]})})]})},M=a(66),Y=a(122),J=a(64),V=a.n(J);var z=function(){var e=Object(i.m)().itemId,t=Object(i.k)(),a=C(),c=n.a.useState(null),r=Object(d.a)(c,2),s=r[0],o=r[1],u=n.a.useState(null),p=Object(d.a)(u,2),v=p[0],f=p[1],N=n.a.useState(null),g=Object(d.a)(N,2),w=g[0],S=g[1],F=n.a.useState(!1),A=Object(d.a)(F,2),L=A[0],I=A[1],T=!s&&!L,W=n.a.useState((function(){var e=localStorage.getItem("cartItem");return e?JSON.parse(e):[]})),_=Object(d.a)(W,2),H=_[0],D=_[1],R=[],K=n.a.useState(!1),q=Object(d.a)(K,2),J=q[0],z=q[1];n.a.useEffect((function(){(function(){var t=Object(b.a)(j.a.mark((function t(){var a,c,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:return a=t.sent,o(a.data),t.next=7,k();case 7:return c=t.sent,f(c.data),t.next=11,E();case 11:n=t.sent,S(n.data),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),I(!0);case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(){return t.apply(this,arguments)}})()()}),[e]),n.a.useEffect((function(){localStorage.setItem("cartItem",JSON.stringify(H))}),[H]);var G=function(){return z(!J)},Q=function(){t.push("/auth/login/")},X=null===s||void 0===s?void 0:s.likedBy.some((function(e){return null!==w?e.id===(null===w||void 0===w?void 0:w.id):void 0})),Z=function(){var t=Object(b.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P(e);case 3:return t.next=5,y(e);case 5:a=t.sent,o(a.data),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(){return t.apply(this,arguments)}}();return v?function(e,t){var a=[];e.filter((function(e){return e.teamName.includes(t)})).map((function(e){a.push(e)})),a.filter((function(e){return e.playerName!==s.playerName})).map((function(e){return R.push(e)}))}(v,s.teamName):console.log("no items"),Object(O.jsxs)("div",{children:[L&&Object(O.jsx)("p",{children:"Sorry, something went wrong."}),T&&Object(O.jsx)("p",{children:"...loading"}),s&&Object(O.jsxs)(h.a,{fluid:!0,children:[Object(O.jsx)(m.a,{children:Object(O.jsx)(U.a,{className:"name-col text-center",children:Object(O.jsx)("h1",{className:"title",children:s.teamName})})}),Object(O.jsxs)(m.a,{children:[Object(O.jsx)(U.a,{className:"image-col",children:Object(O.jsx)("img",{className:"show-image",src:s.image,alt:s.name})}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)("h2",{children:s.playerName}),Object(O.jsx)("h3",{children:"About this kit:"}),Object(O.jsx)("p",{children:s.description}),Object(O.jsxs)("p",{children:["Condition: ",s.condition]}),Object(O.jsxs)("h2",{children:["\xa3",s.price]}),Object(O.jsx)(U.a,{xs:6,className:"my-1",children:Object(O.jsxs)(Y.a,{onClose:G,show:J,animation:!1,children:[Object(O.jsx)(Y.a.Header,{children:Object(O.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""})}),Object(O.jsx)(Y.a.Body,{children:"Your item has been added to the cart"})]})}),Object(O.jsx)(B.a,{className:"btn-outline-secondary show-btn",variant:"light",onClick:function(){D([].concat(Object(M.a)(H),[s])),G()},children:"Add to cart"}),a?Object(O.jsx)(B.a,{onClick:Z,className:"btn-outline-secondary show-btn",variant:"light",children:X?"unlike":"Like"}):Object(O.jsx)(B.a,{onClick:Q,className:"btn-outline-secondary show-btn",variant:"light",children:"login to like"})]})]})]}),Object(O.jsx)(h.a,{children:Object(O.jsxs)(m.a,{children:[Object(O.jsx)(U.a,{children:v&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("p",{children:"You might also like:"}),Object(O.jsx)("div",{className:"card-deck",children:R.map((function(e){return Object(O.jsx)(l.Link,{to:"/items/".concat(e.id,"/"),children:Object(O.jsx)(x,{item:e,className:"liked-card"})},e.id)}))})]})}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)("p",{className:"comment-title",children:"Comments:"}),a&&Object(O.jsx)("div",{children:Object(O.jsx)(B.a,{className:"btn-outline-secondary show-btn",variant:"light",onClick:function(){t.push("/items/".concat(e,"/comments"))},children:"Leave a Comment"})}),!a&&Object(O.jsx)("div",{children:Object(O.jsx)(B.a,{className:"btn-outline-secondary show-btn",variant:"light",onClick:Q,children:"Login to Comment"})}),0===(null===s||void 0===s?void 0:s.comments.length)?Object(O.jsx)("p",{children:"No comments yet"}):null===s||void 0===s?void 0:s.comments.map((function(e){return Object(O.jsxs)("div",{className:"comment",children:[Object(O.jsx)("p",{className:"comment-text",children:e.text}),Object(O.jsx)("p",{children:e.owner.username}),Object(O.jsx)("p",{children:Object(O.jsx)(V.a,{fromNow:!0,children:e.createdAt})})]},e.id)}))]})]})}),Object(O.jsx)(U.a,{xs:6})]})},G=a(124),Q=a(121),X=a(29);var Z=function(){var e=C(),t=Object(i.k)();return Object(O.jsx)(G.a,{bg:"light",expand:"lg",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(X.LinkContainer,{to:"/",children:Object(O.jsx)(G.a.Brand,{children:"SWAPxSHOP"})}),Object(O.jsx)(G.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(O.jsx)(G.a.Collapse,{id:"basic-navbar-nav",children:Object(O.jsxs)(Q.a,{className:"ml-auto",children:[Object(O.jsx)(X.LinkContainer,{to:"/items/",children:Object(O.jsxs)(Q.a.Link,{children:[Object(O.jsx)("i",{className:"fas fa-tshirt"}),"Shop"]})}),Object(O.jsx)(X.LinkContainer,{to:"/cart",children:Object(O.jsxs)(Q.a.Link,{children:[Object(O.jsx)("i",{className:"fas fa-shopping-cart"}),"Cart"]})}),!e&&Object(O.jsx)(X.LinkContainer,{to:"/auth/login",children:Object(O.jsxs)(Q.a.Link,{children:[Object(O.jsx)("i",{className:"fas fa-user"}),"Sign In"]})}),e&&Object(O.jsx)(X.LinkContainer,{to:"/items/new/",children:Object(O.jsx)(Q.a.Link,{children:"Sell My Kit"})}),e&&Object(O.jsx)(X.LinkContainer,{to:"/auth/profile/",children:Object(O.jsx)(Q.a.Link,{children:"My Account"})}),e&&Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary",onClick:function(){window.localStorage.removeItem("token"),t.push("/")},children:"Log Out"})]})})]})})};var $=function(){return Object(O.jsxs)("div",{className:"footer-dark",children:[Object(O.jsx)("hr",{}),Object(O.jsx)("footer",{children:Object(O.jsxs)("div",{className:"container",children:[Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)("div",{className:"col-sm-6 col-md-3 item",children:[Object(O.jsx)("h3",{children:"Services"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Web design"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Development"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Hosting"})})]})]}),Object(O.jsxs)("div",{className:"col-sm-6 col-md-3 item",children:[Object(O.jsx)("h3",{children:"About"}),Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/Uwaks",rel:"noreferrer",target:"_blank",children:"Nnanna"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"https://github.com/MaggieLiz",rel:"noreferrer",target:"_blank",children:"Maggie"})}),Object(O.jsx)("li",{children:Object(O.jsx)("a",{href:"#",children:"Careers"})})]})]}),Object(O.jsxs)("div",{className:"col-md-6 item text",children:[Object(O.jsx)("h3",{children:"SWAPxSHOP"}),Object(O.jsx)("p",{children:"Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit pulvinar dictum vel in justo."})]}),Object(O.jsxs)("div",{className:"col item social",children:[Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{className:"fab fa-facebook-f"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{className:"fab fa-twitter"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{className:"fab fa-linkedin-in"})}),Object(O.jsx)("a",{href:"#",children:Object(O.jsx)("i",{className:"fab fa-instagram"})})]})]}),Object(O.jsx)("p",{className:"copyright",children:"SWAPxSHOP \xa9 2021"})]})})]})};var ee=function(){var e=Object(i.k)(),t=n.a.useState(JSON.parse(localStorage.getItem("cartItem"))||[]),a=Object(d.a)(t,2),c=a[0],r=a[1],s=n.a.useState(!0),o=Object(d.a)(s,2),j=o[0],b=o[1];return n.a.useEffect((function(){0!==c.length&&b(!j)}),[]),Object(O.jsxs)("section",{children:[Object(O.jsx)("div",{children:0===c.length&&Object(O.jsx)(h.a,{children:Object(O.jsx)("h1",{children:"Your cart is empty"})})}),Object(O.jsxs)(h.a,{className:"cart-wrapper",children:[Object(O.jsx)("div",{className:"cart-left",children:c.map((function(e){return Object(O.jsx)(h.a,{className:"cart",children:Object(O.jsxs)(m.a,{className:"cart-item",children:[Object(O.jsx)(U.a,{children:Object(O.jsx)(l.Link,{to:"/items/".concat(e.id,"/"),children:Object(O.jsx)("img",{src:e.image,alt:e.playerName,className:"cart-image"})})}),Object(O.jsxs)(U.a,{children:[Object(O.jsx)("div",{children:e.playerName}),Object(O.jsx)("div",{children:e.teamName}),Object(O.jsx)("div",{children:e.price}),Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary show-btn",onClick:function(){return function(e){var t=c.filter((function(t){return t.id!==e}));r(t),localStorage.setItem("cartItem",JSON.stringify(t))}(e.id)},children:"Remove from Cart"})]})]})},e.id)}))}),Object(O.jsx)("div",{className:"cart-right",children:Object(O.jsxs)(U.a,{children:[!j&&Object(O.jsx)("div",{children:Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary show-btn",onClick:function(){e.push("/cart/checkout")},children:"Proceed to Checkout"})}),Object(O.jsx)("div",{children:Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary show-btn",onClick:function(){e.push("/items")},children:"Continue Shopping"})}),Object(O.jsxs)("div",{className:"price-wrapper",children:["Total: \xa3",Object(O.jsxs)("span",{className:"price",children:[" ",c.reduce((function(e,t){return e+Number(t.price)}),0)]})]})]})})]})]})},te={username:"",email:"",password:"",passwordConfirmation:"",profileImage:""};var ae=function(){var e=Object(i.k)(),t=n.a.useState(te),a=Object(d.a)(t,2),c=a[0],r=a[1],s=n.a.useState(te),l=Object(d.a)(s,2),o=l[0],u=l[1],x=n.a.useState(!1),p=Object(d.a)(x,2),v=p[0],f=p[1],N=function(e){var t="checkbox"===e.target.type?e.target.checked:e.target.value;r(Object(H.a)(Object(H.a)({},c),{},Object(_.a)({},e.target.name,t))),u(Object(H.a)(Object(H.a)({},o),{},Object(_.a)({},e.target.name,"")))},g=function(){var t=Object(b.a)(j.a.mark((function t(a){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,A(c);case 4:e.push("/auth/login"),t.next=11;break;case 7:t.prev=7,t.t0=t.catch(1),u(t.t0.response.data),f(!0);case 11:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)(h.a,{className:"form-container",children:[Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h1",{className:"comment-title",children:"Register"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsxs)("form",{onSubmit:g,className:"form-wrapper",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"username",children:"Username"}),Object(O.jsx)("input",{type:"username",className:"form-control",id:"username",placeholder:"Username",onChange:N,name:"username",value:c.username})]}),o&&o.username&&Object(O.jsx)("p",{className:"text-danger",children:"Username is required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"email",children:"Email"}),Object(O.jsx)("input",{type:"email",className:"form-control","aria-describedby":"emailHelp",placeholder:"Enter Email",onChange:N,name:"email",value:c.email}),Object(O.jsx)("small",{className:"form-text text-muted",children:"We never share your email with anyone else."})]}),o&&o.email&&Object(O.jsx)("p",{className:"text-danger",children:"Email is required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",onChange:N,name:"password",value:c.password})]}),o&&o.password&&Object(O.jsx)("p",{className:"text-danger",children:"Password is required"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"inputPassword",children:"Confirm Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Confirm Password",onChange:N,name:"passwordConfirmation",value:c.passwordConfirmation})]}),o&&o.passwordConfirmation&&Object(O.jsx)("p",{className:"text-danger",children:"Passwords must match"}),v&&Object(O.jsx)("p",{className:"text-danger",children:"You missed a required field."}),Object(O.jsx)("div",{className:"btn-group btn-block",children:Object(O.jsx)(B.a,{className:"btn btn-block",type:"submit",variant:"secondary",children:"Sign me up!"})})]})})]})};var ce=function(){var e=Object(i.k)(),t=n.a.useState({email:"",password:""}),a=Object(d.a)(t,2),c=a[0],r=a[1],s=n.a.useState(!1),o=Object(d.a)(s,2),u=o[0],x=o[1],p=function(e){r(Object(H.a)(Object(H.a)({},c),{},Object(_.a)({},e.target.name,e.target.value)))},v=function(){var t=Object(b.a)(j.a.mark((function t(a){var n,r;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.prev=1,t.next=4,L(c);case 4:n=t.sent,r=n.data,s=r.token,window.localStorage.setItem("token",s),e.push("/items"),t.next=13;break;case 10:t.prev=10,t.t0=t.catch(1),x(!0);case 13:case"end":return t.stop()}var s}),t,null,[[1,10]])})));return function(e){return t.apply(this,arguments)}}();return Object(O.jsxs)(h.a,{className:"form-container",children:[Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h1",{className:"comment-title",children:"Login"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsxs)("form",{onSubmit:v,className:"form-wrapper",children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"inputPassword",children:"Username"}),Object(O.jsx)("input",{type:"username",className:"form-control",id:"username",placeholder:"Username",onChange:p,name:"username",value:c.username})]}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"inputPassword",children:"Password"}),Object(O.jsx)("input",{type:"password",className:"form-control",id:"inputPassword",placeholder:"Password",onChange:p,name:"password",value:c.password})]}),u&&Object(O.jsx)("p",{children:"Incorrect Email or Password"}),Object(O.jsx)("div",{className:"btn-group btn-block",children:Object(O.jsx)(B.a,{className:"btn btn-block",variant:"secondary",type:"submit",children:"Login"})}),Object(O.jsxs)("p",{className:"text-center",children:["No account? Sign up ",Object(O.jsx)(l.Link,{to:"/auth/register",children:"here"}),"."]})]})})]})};var ne=function(){var e=C(),t=Object(i.k)(),a=JSON.parse(localStorage.getItem("cartItem"))||[],c=n.a.useState(null),r=Object(d.a)(c,2),s=(r[0],r[1]),l=n.a.useState(!1),o=Object(d.a)(l,2),u=o[0],m=o[1];n.a.useEffect((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,s(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var x=function(){return m(!u)};return Object(O.jsxs)(h.a,{className:"checkout-wrapper",children:[Object(O.jsx)("div",{className:"checkout-left",children:a.map((function(e){return Object(O.jsxs)("div",{className:"checkout-card",children:[Object(O.jsx)("img",{src:e.image,alt:e.playerName,className:"checkout-image"}),Object(O.jsxs)("div",{className:"checkout-card-right",children:[Object(O.jsxs)("div",{className:"check-item",children:["Player Name: ",e.playerName]}),Object(O.jsxs)("div",{className:"check-item",children:["Price \xa3: ",e.price]})]})]},e.id)}))}),Object(O.jsxs)("div",{className:"checkout-right",children:[Object(O.jsxs)("div",{className:"price-wrapper",children:["Total To Pay: \xa3",Object(O.jsxs)("span",{className:"price",children:[" ",a.reduce((function(e,t){return e+Number(t.price)}),0)]})]}),e&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(U.a,{xs:6,className:"my-1",children:Object(O.jsxs)(Y.a,{onClose:x,show:u,animation:!1,children:[Object(O.jsxs)(Y.a.Header,{children:[Object(O.jsx)("img",{src:"holder.js/20x20?text=%20",className:"rounded me-2",alt:""}),Object(O.jsx)("strong",{className:"me-auto",children:"Click to close"})]}),Object(O.jsx)(Y.a.Body,{children:"Thank You for your purchase. Stripe/Paypal Integration"})]})}),Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary show-btn",onClick:function(){x()},children:"Buy"})]}),!e&&Object(O.jsx)(B.a,{variant:"light",className:"btn-outline-secondary show-btn",onClick:function(){t.push("/auth/login/")},children:"Login to Buy"})]})]})};var re=function(){var e=Object(i.m)().itemId,t=Object(i.k)(),a=n.a.useState(null),c=Object(d.a)(a,2),r=c[0],s=c[1],l=n.a.useState(!1),o=Object(d.a)(l,2),u=o[0],p=o[1],v=!r&&!u,f=n.a.useState({text:""}),N=Object(d.a)(f,2),g=N[0],C=N[1];n.a.useEffect((function(){(function(){var t=Object(b.a)(j.a.mark((function t(){var a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y(e);case 3:a=t.sent,s(a.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),p(!0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}})()()}),[]);var w=function(){var a=Object(b.a)(j.a.mark((function a(c){return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,a.next=4,F(e,g);case 4:t.push("/items/".concat(e)),a.next=10;break;case 7:a.prev=7,a.t0=a.catch(1),console.log(a.t0);case 10:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e){return a.apply(this,arguments)}}();return Object(O.jsx)(h.a,{children:Object(O.jsxs)(m.a,{className:"comments-container",children:[Object(O.jsxs)(U.a,{children:[Object(O.jsx)("h1",{children:"Comments"}),Object(O.jsxs)("form",{onSubmit:w,children:[Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{htmlFor:"leave a comment",children:"Leave a comment"}),Object(O.jsx)(D.a.Control,{type:"textarea",as:"textarea",rows:3,className:"form-control textarea",id:"comment",placeholder:"What do you think of this kit?",onChange:function(e){C(Object(H.a)(Object(H.a)({},g),{},Object(_.a)({},e.target.name,e.target.value)))},name:"text",value:g.text})]}),Object(O.jsx)("div",{className:"field",children:Object(O.jsx)(B.a,{variant:"light",type:"submit",className:"btn-outline-secondary show-btn",children:"Submit"})})]})]}),Object(O.jsxs)(U.a,{children:[u&&Object(O.jsx)("p",{children:"Something went wrong."}),v&&Object(O.jsx)("p",{children:"...loading"}),r&&Object(O.jsx)(h.a,{className:"item-card-container",children:Object(O.jsx)(x,{item:r,className:"comment-card"})})]})]})})};var se=function(){var e=n.a.useState(null),t=Object(d.a)(e,2),a=t[0],c=t[1],r=n.a.useState(!1),s=Object(d.a)(r,2),i=s[0],o=s[1],u=!a&&!i;return n.a.useEffect((function(){(function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,E();case 3:t=e.sent,c(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),o(!0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(O.jsxs)(h.a,{children:[i&&Object(O.jsx)("p",{children:"Something went wrong."}),u&&Object(O.jsx)("p",{children:"...loading"}),a&&Object(O.jsxs)("div",{className:"container",children:[Object(O.jsx)("hr",{}),Object(O.jsxs)(m.a,{className:"account-wrapper",children:[Object(O.jsx)(U.a,{className:"profile-col",children:Object(O.jsx)("h1",{children:a.username})}),Object(O.jsx)(U.a,{className:"profile-col",children:Object(O.jsx)("h1",{children:a.email})})]}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h3",{className:"comment-title",children:"Favorites"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:0===a.likedItems.length?Object(O.jsx)("p",{children:"No favorites yet."}):Object(O.jsx)("div",{className:"liked-card-deck",children:a.likedItems.map((function(e){return Object(O.jsx)(l.Link,{to:"/items/".concat(e.id),children:Object(O.jsx)("div",{className:"liked-card",children:Object(O.jsx)(x,{item:e})})},e.id)}))})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h3",{className:"comment-title",children:"Previous Purchases"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:0===a.itemBought.length?Object(O.jsx)("p",{className:"text-center",children:"No purchases yet."}):Object(O.jsx)("div",{className:"liked-card-deck",children:a.itemBought.map((function(e){return Object(O.jsx)(l.Link,{to:"/items/".concat(e.id),children:Object(O.jsx)("div",{className:"liked-card",children:Object(O.jsx)(x,{item:e})})},e.id)}))})}),Object(O.jsx)("hr",{}),Object(O.jsx)(m.a,{className:"register-wrapper",children:Object(O.jsx)("h3",{className:"comment-title",children:"Kits you have listed for sale:"})}),Object(O.jsx)(m.a,{className:"register-wrapper",children:0===a.itemToSell.length?Object(O.jsx)("p",{children:"You have not listed any kits yet."}):Object(O.jsx)("div",{className:"liked-card-deck",children:a.itemToSell.map((function(e){return Object(O.jsx)(l.Link,{to:"/items/".concat(e.id),children:Object(O.jsx)("div",{className:"liked-card",children:Object(O.jsx)(x,{item:e})})},e.id)}))})}),Object(O.jsx)("hr",{})]})]})};var le=function(){return Object(O.jsxs)(l.BrowserRouter,{children:[Object(O.jsx)(Z,{}),Object(O.jsxs)(i.g,{children:[Object(O.jsx)(i.d,{exact:!0,path:"/",children:Object(O.jsx)(I,{})}),Object(O.jsx)(i.d,{exact:!0,path:"/items/new/",children:Object(O.jsx)(q,{})}),Object(O.jsx)(i.d,{exact:!0,path:"/items/:itemId/comments/",children:Object(O.jsx)(re,{})}),Object(O.jsx)(i.d,{path:"/items/:itemId",children:Object(O.jsx)(z,{})}),Object(O.jsx)(i.d,{path:"/items",children:Object(O.jsx)(W,{})}),Object(O.jsx)(i.d,{path:"/cart/checkout",children:Object(O.jsx)(ne,{})}),Object(O.jsx)(i.d,{path:"/cart",children:Object(O.jsx)(ee,{})}),Object(O.jsx)(i.d,{path:"/auth/register",children:Object(O.jsx)(ae,{})}),Object(O.jsx)(i.d,{path:"/auth/login/",children:Object(O.jsx)(ce,{})}),Object(O.jsx)(i.d,{path:"/auth/profile/",children:Object(O.jsx)(se,{})})]}),Object(O.jsx)($,{})]})},ie=a(65);s.a.render(Object(O.jsx)(ie.a,{children:Object(O.jsx)(le,{})}),document.getElementById("root"))},71:function(e,t,a){}},[[115,1,2]]]);
//# sourceMappingURL=main.4f79d13b.chunk.js.map