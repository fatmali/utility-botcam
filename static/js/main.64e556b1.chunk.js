(this.webpackJsonpwebcam=this.webpackJsonpwebcam||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),l=a.n(c),i=(a(10),a(1)),o=a(4),s=a.n(o),m={width:1280,height:720,facingMode:{exact:"environment"}},u=function(){var e=r.a.useRef(null),t=r.a.useState(!0),a=Object(i.a)(t,2),n=a[0],c=a[1],l=r.a.useState(null),o=Object(i.a)(l,2),u=o[0],f=o[1],g=r.a.useCallback((function(){var t=e.current.getScreenshot();c(!1),f(t)}),[e]);return r.a.createElement("div",{style:{position:"relative"}},n?r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement(s.a,{audio:!1,height:"560",ref:e,screenshotFormat:"image/jpeg",weight:"560",videoConstraints:m}),r.a.createElement("button",{className:"btn btn-lg btn-primary",onClick:g,style:{marginTop:"16px"}},r.a.createElement("i",{className:"fa fa-camera"})," Capture")):r.a.createElement("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"}},r.a.createElement("img",{src:u,alt:"your report",style:{marginBottom:"16px"}}),r.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement("button",{className:"btn btn-lg btn-warning",style:{margin:"5px"},onClick:function(){c(!0),f(null)}},r.a.createElement("i",{className:"fa fa-refresh"})," Retake"),r.a.createElement("button",{className:"btn btn-lg btn-success",style:{margin:"5px"},onClick:function(){}},r.a.createElement("i",{className:"fa fa-send"})," Send"))))};var f=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,a){e.exports=a(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.64e556b1.chunk.js.map