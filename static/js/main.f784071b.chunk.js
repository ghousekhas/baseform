(this["webpackJsonpbase-app"]=this["webpackJsonpbase-app"]||[]).push([[0],{132:function(e,t,a){e.exports=a(227)},137:function(e,t,a){},138:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},139:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),o=a(12),r=a.n(o),i=(a(137),a(14)),l=(a(138),a(139),a(37)),s=a.n(l),d=a(17),u=a(276),m=a(279),p=a(68),h=a(49),g=a.n(h),b=a(277),f=a(108),v=a.n(f),E=a(60),y=a(51),S=a(274),j=a(281),O=a(273),k=a(271),T=a(272),N=a(270),w=a(264),C=a(109),x=a.n(C),A=(a(224),c.a.forwardRef((function(e,t){return c.a.createElement(w.a,Object.assign({direction:"up",ref:t},e))})));var D=function(){var e=Object(n.useState)(1),t=Object(i.a)(e,2),a=(t[0],t[1],Object(n.useState)("")),o=Object(i.a)(a,2),r=o[0],l=o[1],h=Object(n.useState)(""),f=Object(i.a)(h,2),w=f[0],C=f[1],D=Object(n.useState)([]),B=Object(i.a)(D,2),_=B[0],M=B[1],R=Object(n.useState)(""),z=Object(i.a)(R,2),H=z[0],P=z[1],F=Object(n.useState)(g()().toDate()),W=Object(i.a)(F,2),U=W[0],q=W[1],I=Object(n.useState)(g()().toDate()),G=Object(i.a)(I,2),L=G[0],K=G[1],Z=Object(n.useState)(""),J=Object(i.a)(Z,2),X=J[0],Y=J[1],V=Object(n.useState)(0),$=Object(i.a)(V,2),Q=$[0],ee=$[1],te=Object(n.useState)(""),ae=Object(i.a)(te,2),ne=ae[0],ce=ae[1],oe=Object(n.useState)([0]),re=Object(i.a)(oe,2),ie=(re[0],re[1]),le=Object(n.useState)([0]),se=Object(i.a)(le,2),de=se[0],ue=se[1],me=Object(n.useState)(""),pe=Object(i.a)(me,2),he=pe[0],ge=pe[1],be=Object(n.useState)(""),fe=Object(i.a)(be,2),ve=fe[0],Ee=fe[1],ye=Object(n.useState)(!1),Se=Object(i.a)(ye,2),je=Se[0],Oe=Se[1],ke=Object(n.useState)(""),Te=Object(i.a)(ke,2),Ne=Te[0],we=Te[1],Ce=Object(n.useState)(""),xe=Object(i.a)(Ce,2),Ae=(xe[0],xe[1]),De=(c.a.createRef(),c.a.createRef()),Be=Object(n.useState)([""]),_e=Object(i.a)(Be,2),Me=_e[0],Re=_e[1];Object(n.useEffect)((function(){var e=[];try{s.a.post("https://edxvteam.com/oauth2/access_token",E.stringify({grant_type:"client_credentials",client_id:"8vD6pKAbjTfgdEtNAKqdUwu0X6Ps574kyBh94Om0",client_secret:"ERRuuGZPMsEy8hjBHjFaMZsmDR3SRhXndOjgoiqEseor1p18kktkHSdUExFNFoKlTdWrmrtz2Oc0NyVa9fNASLuckPPRJY0uCXwkg7yEbRfUg8e0rfGetaGt7tuqUqRo",token_type:"Bearer"}),{headers:{"Content-Type":"application/x-www-form-urlencoded"}}).then((function(e){ce(e.data.access_token)}),(function(e){ee(6)}))}catch(t){}""==X&&De.login(),s.a.get("https://edxvteam.com/api/courses/v1/courses/").then((function(t){e=t.data.results,Re(e)}),(function(e){ee(e)}))}),[]);var ze=function(){window.location.reload()};return 6==Q?c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"500 internal error")),c.a.createElement("div",{className:"Background"},c.a.createElement("body",{className:"Bady"},c.a.createElement("p",{className:"TextTitle abc"},"A network error occured, try again "),c.a.createElement("div",{className:"HorizontalDivision"},c.a.createElement(y.PrimaryButton,{onClick:ze,variant:"contained",color:"primary",style:{margin:30}},"Try Again"))))):0===Q?c.a.createElement(v.a,{ref:function(e){return De=e},clientId:"c4e63d26-dcf1-4d0a-bac1-ae0bc5afca83",authCallback:function(e,t){try{var a=t.authResponseWithAccessToken,n=a.accessToken;a.account,a.idToken;null!=n&&(Y(n),ee(1))}catch(c){}},redirectUri:"http://localhost:3000/baseform",graphScopes:["Calendars.ReadWrite","Group.ReadWrite.All"]}):3==Q?c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"Class scheduled successfully")),c.a.createElement("div",{className:"Background"},c.a.createElement("body",{className:"Bady"},c.a.createElement("p",{className:"TextTitle abc"},"The class for ",r," was successfully scheduled from ",U.toString()," to ",L.toString()," at"),c.a.createElement("a",{ref:function(e){return e},id:"joinlink",className:"TextTitle def",value:he,onClick:function(e){x()(he),Oe(!0)}},he),c.a.createElement("div",{className:"ScrollDivision"},c.a.createElement("p",{className:"TextTitle abc"},"Following stuents have been invited:"),de.map((function(e){return c.a.createElement("p",{className:"TextTitle abc"},e.emailAddress.name)}))),c.a.createElement("div",{className:"HorizontalDivision"},c.a.createElement(y.PrimaryButton,{onClick:ze,variant:"contained",color:"primary",style:{margin:30}},"Schedule another Class")))),c.a.createElement(j.a,{open:je,TransitionComponent:A,keepMounted:!0,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description"},c.a.createElement(N.a,{id:"alert-dialog-slide-title"},"Link Copied!"),c.a.createElement(k.a,null,c.a.createElement(T.a,{id:"alert-dialog-slide-description"},"The link has been copied to your clipboard")),c.a.createElement(O.a,null,c.a.createElement(S.a,{onClick:function(){return Oe(!1)},color:"primary"},"Okay")))):c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("p",null,"Schedule a class")),c.a.createElement("div",{className:"Background"},c.a.createElement("body",{className:"Bady"},c.a.createElement("div",{className:"Division"},c.a.createElement("p",{className:"TextTitle"},"Meeting Title"),c.a.createElement(b.a,{color:"white",type:"text",label:"Enter the meeting title",variant:"outlined",onChange:function(e){P(e.target.value),e.target.value},inputStyle:{color:"white",padding:"0 25px"},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),c.a.createElement("div",{className:"HorizontalDivision"},c.a.createElement("div",{className:"AnotherDivision"},c.a.createElement("p",{className:"TextTitle"},"From"),c.a.createElement(d.a,{utils:p.a},c.a.createElement(u.a,{variant:"dialog",onChange:function(e){q(e.toDate())},value:U,disablePast:!0,style:{width:"15vw"}}))),c.a.createElement("div",{className:"AnotherDivision"},c.a.createElement("p",{className:"TextTitle"},"To"),c.a.createElement(d.a,{utils:p.a},c.a.createElement(u.a,{variant:"dialog",minDate:U,value:L,onChange:function(e){K(e.toDate())},style:{width:"15vw",alignContent:"center"}})))),c.a.createElement("div",{className:"Division"},c.a.createElement("p",{className:"TextTitle"},"Select the course"),c.a.createElement(m.a,{options:Me,getOptionLabel:function(e){return e.name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){var a={};l(t.name),we(t.course_id);var n="",c=["satishag","satishag87"];s.a.get("https://edxvteam.com/api/enrollment/v1/enrollments?"+E.stringify({course_id:t.course_id}),{headers:{Authorization:"Bearer ".concat(ne)}}).then((function(e){if(void 0!=e.data.results){ie(e.data.results);var t=e.data.results;c=[],t.forEach((function(e,t,a){c.push(e.user)})),n="",c.forEach((function(e,t,a){t<c.length-1?n=n+e+",":n+=e})),s.a.get("https://edxvteam.com/api/user/v1/accounts?username="+n,{headers:{Authorization:"Bearer ".concat(ne)}}).then((function(e){var t=e.data,a=[];t.forEach((function(e,t,n){a.push({emailAddress:{address:e.email,name:e.name},type:"required"})})),a.push({emailAddress:{address:"ghouse.khasim1@gmail.com",name:"Ghouse Khasim"},type:"required"}),ue(a)}),(function(e){ee(6)}))}}),(function(e){})),s.a.get("https://edxvteam.com/api/courses/v1/blocks/?"+E.stringify({course_id:t.course_id,depth:"all",username:"satishag",block_types_filter:"discussion"}),{headers:{Authorization:"Bearer ".concat(ne)}}).then((function(e){if(console.log(e.data),void 0!=e.data.blocks){var t=[];for(var n in a=e.data.blocks)t.push(a[n]);M(t)}}),(function(e){ee(6)})),c.forEach((function(e,t,a){t<c.length-1?n=n+e+",":n+=e}))},renderInput:function(e){return c.a.createElement(b.a,Object.assign({},e,{label:"Select the course",variant:"outlined"}))}})),c.a.createElement("div",{className:"Division"},c.a.createElement("p",{className:"TextTitle"},"Select the unit"),c.a.createElement(m.a,{options:_,getOptionLabel:function(e){return e.display_name},style:{width:"100%",margin:0,alignSelf:"center"},onChange:function(e,t){console.log(e,t),C(t.name),_.forEach((function(e,a,n){t.block_id==e.block_id&&Ae(a)}))},renderInput:function(e){return c.a.createElement(b.a,Object.assign({},e,{label:"Select course unit",variant:"outlined"}))}})),c.a.createElement("div",{className:"Division"},c.a.createElement("p",{className:"TextTitle"},"Description"),c.a.createElement(b.a,{color:"white",type:"text",label:"Enter additional description",variant:"outlined",onChange:function(e){Ee(e.target.value),e.target.value},inputStyle:{color:"white",padding:"0 25px"},style:{backgroundColor:"rgba(255,255,255,0.9)",borderRadius:1e4,borderWidth:5,borderColor:"black"}})),c.a.createElement("div",{className:"HorizontalDivision"},c.a.createElement(y.SecondaryButton,{onClick:ze,variant:"contained",color:"secondary",style:{margin:30}},"Cancel"),c.a.createElement(y.PrimaryButton,{onClick:function(){var e=U.getFullYear(),t=(U.getMonth()+1).toString().padStart(2,"0"),a=U.getDate().toString().padStart(2,"0"),n=U.getHours().toString().padStart(2,"0"),c=U.getMinutes().toString().padStart(2,"0"),o=L.getFullYear(),i=(L.getMonth()+1).toString().padStart(2,"0"),l=L.getDate().toString().padStart(2,"0"),d=L.getHours().toString().padStart(2,"0"),u=L.getMinutes().toString().padStart(2,"0");s.a.post("https://graph.microsoft.com/v1.0/groups/48c4a928-f625-4837-90cc-4181c8b9191c/events",{subject:H,body:{contentType:"HTML",content:r+" "+w+"\n"+ve},start:{dateTime:"".concat(e,"-").concat(t,"-").concat(a,"T").concat(n,":").concat(c,":00"),timeZone:"India Standard Time"},end:{dateTime:"".concat(o,"-").concat(i,"-").concat(l,"T").concat(d,":").concat(u,":00"),timeZone:"India Standard Time"},location:{displayName:"Microsoft team"},attendees:de,isOnlineMeeting:!0,onlineMeetingProvider:"teamsForBusiness"},{headers:{Authorization:"Bearer ".concat(X)}}).then((function(e){console.log(e),ge(e.data.onlineMeeting.joinUrl);var t=e.data.onlineMeeting.joinUrl;ee(3),s.a.post("https://edxvteam.com/api/discussion/v1/threads/",{course_id:Ne,raw_body:"The class for ".concat(r," titled ").concat(H," for ").concat(w," was successfully scheduled from ").concat(U.toString()," to ").concat(L.toString()," at \n ").concat(t," \n Additional Description: ").concat(ve),type:"discussion",title:H,topic_id:"course"},{headers:{Authorization:"Bearer ".concat(ne)}}).then((function(e){console.log(e)}),(function(e){console.log(e)}))}),(function(e){console.log(e)}))},variant:"contained",color:"primary",style:{margin:30}},"Submit")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.f784071b.chunk.js.map