(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{125:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(11),r=a.n(c),i=(a(97),a(18)),l=(a(98),a(99),a(48)),s=a.n(l),d=a(13),u=a(166),m=a(169),g=a(51),p=a(40),b=a.n(p),h=a(167),v=a(164),E=a(66),S=a.n(E);var f=[{title:"Unit 1",year:1994},{title:"Unit 2",year:1994},{title:"Unit 3",year:1994},{title:"Unit 4",year:1994}],y=function(){var e,t=Object(n.useState)(1),a=Object(i.a)(t,2),c=(a[0],a[1],Object(n.useState)("")),r=Object(i.a)(c,2),l=r[0],p=r[1],E=Object(n.useState)(""),y=Object(i.a)(E,2),A=y[0],T=y[1],O=Object(n.useState)(""),j=Object(i.a)(O,2),k=(j[0],j[1],Object(n.useState)("")),N=Object(i.a)(k,2),D=N[0],w=N[1],C=Object(n.useState)(b()().toDate()),x=Object(i.a)(C,2),M=x[0],R=x[1],B=Object(n.useState)(b()().toDate()),W=Object(i.a)(B,2),I=W[0],U=W[1],G=Object(n.useState)(""),H=Object(i.a)(G,2),Y=H[0],q=H[1],F=Object(n.useState)(0),L=Object(i.a)(F,2),z=L[0],P=L[1],_=Object(n.useState)(""),J=Object(i.a)(_,2),X=(J[0],J[1]),Z=o.a.createRef(),K=Object(n.useState)([""]),Q=Object(i.a)(K,2),V=Q[0],$=Q[1];Object(n.useEffect)((function(){var e=[];try{s.a.post("https://edxvteam.com/oauth2/access_token",{grant_type:"client_credentials",client_id:"8vD6pKAbjTfgdEtNAKqdUwu0X6Ps574kyBh94Om0",client_secret:"ERRuuGZPMsEy8hjBHjFaMZsmDR3SRhXndOjgoiqEseor1p18kktkHSdUExFNFoKlTdWrmrtz2Oc0NyVa9fNASLuckPPRJY0uCXwkg7yEbRfUg8e0rfGetaGt7tuqUqRo",token_type:"Bearer"}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}catch(t){console.log(t)}""==Y&&Z.login(),s.a.get("https://edxvteam.com/api/courses/v1/courses/").then((function(t){e=t.data.results,$(e)}),(function(e){console.log(e)})),console.log(M.getFullYear())}),[]);var ee=function(){var e=M.getFullYear(),t=(M.getMonth()+1).toString().padStart(2,"0"),a=M.getDate().toString().padStart(2,"0"),n=M.getHours().toString().padStart(2,"0"),o=M.getMinutes().toString().padStart(2,"0"),c=I.getFullYear(),r=(I.getMonth()+1).toString().padStart(2,"0"),i=I.getDate().toString().padStart(2,"0"),d=I.getHours().toString().padStart(2,"0"),u=I.getMinutes().toString().padStart(2,"0");s.a.post("https://graph.microsoft.com/v1.0/me/calendars/AAMkAGUxYzhmYWViLTk3Y2MtNGNlOC04OTYyLWEzMDk2ODg5M2M1NgBGAAAAAAD9QiWpkpRiTLHApXmB7B8lBwC2pBhdGQNITo-78bb6qcJDAAAAAAEGAAC2pBhdGQNITo-78bb6qcJDAAAeos5PAAA=/events",{subject:D,body:{contentType:"HTML",content:l+A},start:{dateTime:"".concat(e,"-").concat(t,"-").concat(a,"T").concat(n,":").concat(o,":00"),timeZone:"India Standard Time"},end:{dateTime:"".concat(c,"-").concat(r,"-").concat(i,"T").concat(d,":").concat(u,":00"),timeZone:"India Standard Time"},location:{displayName:"Microsoft team"},attendees:[{emailAddress:{address:"students@gmail.com",name:"student 1"},type:"required"}]},{headers:{Authorization:"Bearer ".concat(Y)}}).then((function(e){console.log(e)}),(function(e){console.log(e)}))};return 0===z?o.a.createElement(S.a,{ref:function(e){return Z=e},clientId:"c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83",authCallback:function(e,t){var a=t.authResponseWithAccessToken;try{var n=a.accessToken;a.account,a.idToken;console.log(a),null!=n&&(q(n),P(1))}catch(o){console.log(e)}},redirectUri:"http://localhost:3000",graphScopes:["Calendars.ReadWrite"]}):o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("p",null,"Schedule a class")),o.a.createElement("body",{className:"Bady"},o.a.createElement("div",{className:"Division"},o.a.createElement("p",{className:"TextTitle"},"Meeting Title"),o.a.createElement(h.a,{color:"white",type:"text",label:"Enter the meeting title",variant:"outlined",onChange:function(t){w(t.target.value),e=t.target.value,console.log(e)},inputStyle:{color:"white",padding:"0 25px"},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),o.a.createElement("div",{className:"HorizontalDivision"},o.a.createElement("div",{className:"AnotherDivision"},o.a.createElement("p",{className:"TextTitle"},"From"),o.a.createElement(d.a,{utils:g.a},o.a.createElement(u.a,{variant:"dialog",onChange:function(e){console.log(e),R(e.toDate())},value:M,disablePast:!0,style:{width:"15vw"}}))),o.a.createElement("div",{className:"AnotherDivision"},o.a.createElement("p",{className:"TextTitle"},"To"),o.a.createElement(d.a,{utils:g.a},o.a.createElement(u.a,{variant:"dialog",minDate:M,value:I,onChange:function(e){U(e.toDate())},style:{width:"15vw",alignContent:"center"}})))),o.a.createElement("div",{className:"Division"},o.a.createElement("p",{className:"TextTitle"},"Select the course"),o.a.createElement(m.a,{options:V,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onInputChange:function(e,t){p(t)},renderInput:function(e){return o.a.createElement(h.a,Object.assign({},e,{label:"Select the course",variant:"outlined"}))}})),o.a.createElement("div",{className:"Division"},o.a.createElement("p",{className:"TextTitle"},"Select the unit"),o.a.createElement(m.a,{options:f,getOptionLabel:function(e){return e.title},style:{width:"100%",margin:0,alignSelf:"center"},onInputChange:function(e,t){return T(t)},renderInput:function(e){return o.a.createElement(h.a,Object.assign({},e,{label:"Select course unit",variant:"outlined"}))}})),o.a.createElement("div",{className:"Division"},o.a.createElement("p",{className:"TextTitle"},"Description"),o.a.createElement(h.a,{color:"white",type:"text",label:"Enter additional description",variant:"outlined",onChange:function(t){w(t.target.value),e=t.target.value,console.log(e)},inputStyle:{color:"white",padding:"0 25px"},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),o.a.createElement("div",{className:"Division"},o.a.createElement("p",{className:"TextTitle"},"EDX api key"),o.a.createElement(h.a,{color:"white",type:"text",label:"Enter additional description",variant:"outlined",onChange:function(t){X(t.target.value),e=t.target.value,console.log(e)},inputStyle:{color:"white",padding:"0 25px"},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),o.a.createElement("div",{className:"HorizontalDivision"},o.a.createElement(v.a,{onClick:ee,variant:"contained",color:"secondary",style:{margin:30}},"Cancel"),o.a.createElement(v.a,{onClick:ee,variant:"contained",color:"primary",style:{margin:30}},"Submit"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(125)},97:function(e,t,a){},98:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},99:function(e,t,a){}},[[92,1,2]]]);
//# sourceMappingURL=main.63d4c91f.chunk.js.map