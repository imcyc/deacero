(this.webpackJsonpdeacero=this.webpackJsonpdeacero||[]).push([[0],{103:function(e,a,t){},104:function(e,a,t){},105:function(e,a,t){},106:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(15),o=t.n(r),c=(t(77),t(78),t(19)),i=t(20),m=t(35),s=t.n(m),E=t(64),u=t.n(E),d=(t(79),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("div",{className:"wrapper fadeInDown"},l.a.createElement("div",{id:"formContent"},l.a.createElement("div",{className:"fadeIn first"},l.a.createElement("img",{src:s.a,id:"icon",className:"logo",alt:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C.",title:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C."}),l.a.createElement("p",null,"APP DE LOSAS PARA VIVIENDA")),l.a.createElement("form",null,l.a.createElement("input",{type:"text",id:"login",className:"fadeIn second",name:"login",placeholder:"USUARIO",required:!0}),l.a.createElement("input",{type:"text",id:"password",className:"fadeIn third",name:"login",placeholder:"CONTRASE\xd1A",required:!0}),l.a.createElement(c.c,{to:"/dashboard",className:"btn fadeIn fourth"},"INGRESAR A SU CUENTA")),l.a.createElement("div",{id:"formFooter"},l.a.createElement(c.c,{className:"underlineHover",to:"/"},l.a.createElement("img",{src:u.a,id:"icon",className:"logoimcyc",alt:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C.",title:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C.",style:{width:"300px"}})),l.a.createElement("p",{className:"small"},"Instituto Mexicano del Cemento y del Concreto A.C."))))))}),A=t(36),p=t(37),C=t(44),h=t(39),I=t(45),N=t(33),b=t(47),S=t(25),g=t(5),O=t(42),f=t(30),P=(t(84),function(){return l.a.createElement(N.a,{bg:"light",expand:"lg"},l.a.createElement(N.a.Brand,{href:"/"},l.a.createElement("img",{src:s.a,id:"icon",className:"logo",alt:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C.",title:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C."})),l.a.createElement(N.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(N.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(b.a,{className:"mr-auto"},l.a.createElement(b.a.Link,{href:"/"},"INICIO"),l.a.createElement(b.a.Link,{href:"/recursos"},"RECURSOS"),l.a.createElement(S.a,{title:"CONTACTO",id:"basic-nav-dropdown"},l.a.createElement(S.a.Item,{href:"#action/3.1"},"Action"),l.a.createElement(S.a.Item,{href:"#action/3.2"},"Another action"),l.a.createElement(S.a.Item,{href:"#action/3.3"},"Something"),l.a.createElement(S.a.Divider,null),l.a.createElement(S.a.Item,{href:"#action/3.4"},"Separated link"))),l.a.createElement(g.a,{inline:!0},l.a.createElement(O.a,{type:"text",placeholder:"Buscar",className:"mr-sm-2"}),l.a.createElement(f.a,{variant:"outline-success"},"BUSCAR"),l.a.createElement(c.c,{to:"/",className:"btn ml-2"},"SALIR"))))}),v=t(38),D=t(70),R=t(24),L=(t(103),function(e){function a(e){var t;return Object(A.a)(this,a),(t=Object(C.a)(this,Object(h.a)(a).call(this,e))).state={area:0,destino:"",longitud:0,concretoPrecio:0,mallaPrecio:0,tipo:""},t.handleSubmit=t.handleSubmit.bind(Object(v.a)(t)),t}return Object(I.a)(a,e),Object(p.a)(a,[{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({area:parseInt(e.target.area.value,10),destino:e.target.destino.value,longitud:e.target.longitud.value,concretoPrecio:e.target.concretoPrecio.value,mallaPrecio:e.target.mallaPrecio.value,tipo:e.target.tipo.value})}},{key:"render",value:function(){return l.a.createElement("div",{className:"wrap-contenido"},l.a.createElement("section",null,l.a.createElement("div",{className:"column opciones"},l.a.createElement("div",{className:"titulo"},l.a.createElement("h1",null,"APP LOSAS PARA VIVIENDA"),l.a.createElement("h3",null,"LOSAS EN UNA DIRECCI\xd3N, SIMPLEMENTE APOYADAS"),l.a.createElement("p",null,l.a.createElement("i",{className:"material-icons"},"location_searching")," Por Favor ingrese los siguientes datos:"),l.a.createElement(g.a,{onSubmit:this.handleSubmit},l.a.createElement(g.a.Group,{controlId:"formBasicEmail"},l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," \xc1rea en Mts",l.a.createElement("sup",null,"2"),".:"),l.a.createElement(g.a.Control,{type:"number",name:"area",placeholder:"Ingrese el tama\xf1o del \xe1rea a calcular en Metros Cuadrados"})),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect1"},l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," Destino:"),l.a.createElement(g.a.Control,{name:"destino",as:"select"},l.a.createElement("option",null,"AZOTEA"),l.a.createElement("option",null,"ENTREPISO"))),l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect2"},l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," Longitud del claro:"),l.a.createElement(g.a.Control,{name:"longitud",as:"select"},l.a.createElement("option",null,"3 Mts."),l.a.createElement("option",null,"3.5 Mts."),l.a.createElement("option",null,"4 Mts."),l.a.createElement("option",null,"4.5 Mts."),l.a.createElement("option",null,"5 Mts."))),l.a.createElement(g.a.Row,null,l.a.createElement(R.a,null,l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," CONCRETO:"),l.a.createElement(g.a.Control,{name:"concretoPrecio",type:"number",placeholder:"Precio"}))),l.a.createElement(R.a,null,l.a.createElement(g.a.Group,null,l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," MALLA SOLDADA:"),l.a.createElement(g.a.Control,{name:"mallaPrecio",type:"number",placeholder:"Precio"}))),l.a.createElement(R.a,null,l.a.createElement(g.a.Group,{controlId:"exampleForm.ControlSelect2"},l.a.createElement(g.a.Label,null,l.a.createElement("i",{className:"material-icons"},"keyboard_arrow_right")," TIPO DE VARILLA:"),l.a.createElement(g.a.Control,{name:"tipo",as:"select"},l.a.createElement("option",null,"VIG-BOV Alma Abierta"),l.a.createElement("option",null,"VIG-BOV Pretensada"),l.a.createElement("option",null,"LOSA S\xd3LIDA Y VAR. G42"),l.a.createElement("option",null,"LOSA ALIGERADA Y VAR. G42"))))),l.a.createElement(g.a.Group,{as:D.a},l.a.createElement(R.a,null,l.a.createElement(f.a,{type:"submit",className:"btn negro",style:{float:"right"}},"CALCULAR RESULTADOS")))))),l.a.createElement("div",{className:"column resultados"},l.a.createElement("h1",null,"RESULTADOS"),l.a.createElement("h2",null,"AREA: ",this.state.area))))}}]),a}(n.Component)),y=t(71),x=t.n(y),V=(t(104),function(){return l.a.createElement("section",{id:"footer"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white"},l.a.createElement("img",{src:x.a,id:"icon",className:"logo",alt:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C.",title:"APP DE LOSAS PARA VIVIENDA DEACERO - Instituto Mexicano del Cemento y del Concreto A.C."}),l.a.createElement("p",null,"Instituto Mexicano del Cemento y del Concreto A.C."),l.a.createElement("p",{className:"h6"},"\xa9 2018-2019 Todos Los Derechos Reservados.")),l.a.createElement("hr",null))))}),w=function(e){function a(){var e,t;Object(A.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(C.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(l)))).state={},t}return Object(I.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(P,null),l.a.createElement(L,null),l.a.createElement(V,null))}}]),a}(n.Component);t(105);var M=function(){return l.a.createElement(c.b,{basename:"/"},l.a.createElement(c.a,{basename:"/deacero"},l.a.createElement(i.a,{exact:!0,path:"/",component:d}),l.a.createElement(i.a,{exact:!0,path:"/dashboard",component:w})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},35:function(e,a,t){e.exports=t.p+"static/media/logo.0653a8a8.svg"},64:function(e,a,t){e.exports=t.p+"static/media/logo-imcyc.15ca9bfd.svg"},71:function(e,a,t){e.exports=t.p+"static/media/logo-imcyc-blanco.d9233fc2.svg"},72:function(e,a,t){e.exports=t(106)},78:function(e,a,t){},79:function(e,a,t){},84:function(e,a,t){}},[[72,1,2]]]);
//# sourceMappingURL=main.b2a1efc9.chunk.js.map