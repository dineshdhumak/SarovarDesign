(this.webpackJsonpsarovardesign=this.webpackJsonpsarovardesign||[]).push([[0],{110:function(e,t,a){},111:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var c=a(0),s=a.n(c),i=a(12),r=a.n(i),n=(a(110),a(111),a(162)),l=a(166),o=a(32),j=(a.p,a(167)),d=a(2);function b(){return Object(d.jsx)("div",{className:"root",children:Object(d.jsx)(n.a,{position:"static",children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(o.b,{to:"/SarovarDesign/home",children:"Home"}),Object(d.jsx)(j.a,{}),Object(d.jsx)(o.b,{to:"/SarovarDesign/Gallery",children:"Gallery"}),Object(d.jsx)(j.a,{}),Object(d.jsx)(o.b,{to:"/SarovarDesign/Page3",children:"Page3"})]})})})}var h=a(13),x=a(178),O=a(40),u=a(168),p=a(24),m=a(182),g=a(90),f=a(61),v=a(169),y=a(67),N=a.n(y),k=a(68),w=a.n(k),S=[{label:"San Francisco \u2013 Oakland Bay Bridge, United States",imgPath:"https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bird",imgPath:"https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Bali, Indonesia",imgPath:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80"},{label:"NeONBRAND Digital Marketing, Las Vegas, United States",imgPath:"https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60"},{label:"Go\u010d, Serbia",imgPath:"https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60"}],A=Object(u.a)((function(e){return{root:{maxWidth:1024,flexGrow:1},header:{display:"flex",alignItems:"center",height:50,paddingLeft:e.spacing(4),backgroundColor:e.palette.background.default},img:{height:500,maxWidth:1024,overflow:"hidden",display:"block",width:"100%"}}}));function P(){var e=A(),t=Object(p.a)(),a=s.a.useState(0),c=Object(O.a)(a,2),i=c[0],r=c[1],n=S.length;return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsx)(g.a,{square:!0,elevation:0,className:e.header,children:Object(d.jsx)(f.a,{children:S[i].label})}),Object(d.jsx)("img",{className:e.img,src:S[i].imgPath,alt:S[i].label}),Object(d.jsx)(m.a,{steps:n,position:"static",variant:"text",activeStep:i,nextButton:Object(d.jsxs)(v.a,{size:"small",onClick:function(){r((function(e){return e+1}))},disabled:i===n-1,children:["Next","rtl"===t.direction?Object(d.jsx)(N.a,{}):Object(d.jsx)(w.a,{})]}),backButton:Object(d.jsxs)(v.a,{size:"small",onClick:function(){r((function(e){return e-1}))},disabled:0===i,children:["rtl"===t.direction?Object(d.jsx)(w.a,{}):Object(d.jsx)(N.a,{}),"Back"]})})]})}var C=a(172),D=a(173),I=a(180),B=a(183),F=[{value:"Goa",label:"Goa"},{value:"Mysore",label:"Mysore"},{value:"Delhi",label:"Delhi"},{value:"Mumbai",label:"Mumbai"}],L=Object(u.a)((function(e){return{root:{"& .MuiTextField-root":{margin:e.spacing(1),width:"25ch"}}}}));function M(){var e=L(),t=s.a.useState("EUR"),a=Object(O.a)(t,2),c=a[0],i=a[1];return Object(d.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(d.jsx)("div",{children:Object(d.jsx)(I.a,{id:"standard-select-currency",select:!0,label:"Location",value:c,onChange:function(e){i(e.target.value)},helperText:"Please select your location",children:F.map((function(e){return Object(d.jsx)(B.a,{value:e.value,children:e.label},e.value)}))})})})}var H=Object(u.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function T(){var e=H();return Object(d.jsxs)("form",{className:e.container,noValidate:!0,children:[Object(d.jsx)(I.a,{id:"date",label:"Book Date",type:"date",defaultValue:"2017-05-24",className:e.textField,InputLabelProps:{shrink:!0}}),Object(d.jsx)(I.a,{id:"time",label:"Time In",type:"time",defaultValue:"07:30",className:e.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}})]})}var V=a(49),G=a(181);function R(){var e={options:q,getOptionLabel:function(e){return e.title}};return Object(d.jsx)("div",{style:{width:300},children:Object(d.jsx)(G.a,Object(V.a)(Object(V.a)({},e),{},{id:"debug",debug:!0,renderInput:function(e){return Object(d.jsx)(I.a,Object(V.a)(Object(V.a)({},e),{},{label:"Services",margin:"normal"}))}}))})}var q=[{title:"Events"},{title:"Business"},{title:"Pilgrimage"},{title:"Holidays "}],E=Object(u.a)({root:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function z(){var e=E();e.bullet;return Object(d.jsx)(C.a,{className:e.root,variant:"outlined",children:Object(d.jsx)(D.a,{children:Object(d.jsx)(f.a,{className:e.title,color:"textSecondary",gutterBottom:!0,children:Object(d.jsx)("table",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)(M,{})}),Object(d.jsx)("td",{children:Object(d.jsx)(T,{})}),Object(d.jsx)(R,{}),Object(d.jsx)("td",{})]})})})})})}var U=a(59),W=a(4),J=a(174),K=a(175),Q=a(176),X=a(177),Y=a(184),Z=a(171),$=a(60),_=a(86),ee=a.n(_),te=a(87),ae=a.n(te),ce=a(88),se=a.n(ce),ie=a(85),re=a.n(ie),ne=Object(u.a)((function(e){return{root:{maxWidth:345},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"},avatar:{backgroundColor:$.a[500]}}}));function le(){var e=ne(),t=s.a.useState(!1),a=Object(O.a)(t,2),c=a[0],i=a[1];return Object(d.jsxs)(C.a,{className:e.root,children:[Object(d.jsx)(J.a,{avatar:Object(d.jsx)(Y.a,{"aria-label":"recipe",className:e.avatar,children:"R"}),action:Object(d.jsx)(Z.a,{"aria-label":"settings",children:Object(d.jsx)(re.a,{})}),title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016"}),Object(d.jsx)(K.a,{className:e.media,image:"/static/images/cards/paella.jpg",title:"Paella dish"}),Object(d.jsx)(D.a,{children:Object(d.jsx)(f.a,{variant:"body2",color:"textSecondary",component:"p",children:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like."})}),Object(d.jsxs)(Q.a,{disableSpacing:!0,children:[Object(d.jsx)(Z.a,{"aria-label":"add to favorites",children:Object(d.jsx)(ee.a,{})}),Object(d.jsx)(Z.a,{"aria-label":"share",children:Object(d.jsx)(ae.a,{})}),Object(d.jsx)(Z.a,{className:Object(W.a)(e.expand,Object(U.a)({},e.expandOpen,c)),onClick:function(){i(!c)},"aria-expanded":c,"aria-label":"show more",children:Object(d.jsx)(se.a,{})})]}),Object(d.jsx)(X.a,{in:c,timeout:"auto",unmountOnExit:!0,children:Object(d.jsxs)(D.a,{children:[Object(d.jsx)(f.a,{paragraph:!0,children:"Method:"}),Object(d.jsx)(f.a,{paragraph:!0,children:"Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes."}),Object(d.jsx)(f.a,{paragraph:!0,children:"Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add piment\xf3n, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil."}),Object(d.jsx)(f.a,{paragraph:!0,children:"Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook again without stirring, until mussels have opened and rice is just tender, 5 to 7 minutes more. (Discard any mussels that don\u2019t open.)"}),Object(d.jsx)(f.a,{children:"Set aside off of the heat to let rest for 10 minutes, and then serve."})]})})]})}var oe=a(89),je=a.n(oe);function de(){return Object(d.jsx)("div",{className:"slider",children:Object(d.jsx)(je.a,{textAlign:"center",showNavs:"true",width:456,height:304,images:[{url:"./../Assets/Images/Hotel1.jpg"},{url:"./../Assets/Images/Hotel2.jpg"},{url:"./../Assets/Images/Hotel3.jpg"},{url:"./../Assets/Images/Hotel4.jpg"},{url:"./../Assets/Images/Hotel5.jpg"}]})})}function be(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)(x.a,{fixed:!0,children:[Object(d.jsx)(P,{}),Object(d.jsx)(de,{}),Object(d.jsx)(z,{}),Object(d.jsx)(le,{})]})})}var he=Object(u.a)((function(e){return{container:{display:"flex",flexWrap:"wrap"},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),width:200}}}));function xe(){var e=he();return Object(d.jsxs)("form",{className:e.container,noValidate:!0,children:[Object(d.jsx)(I.a,{id:"date",label:"Birthday",type:"date",defaultValue:"2017-05-24",className:e.textField,InputLabelProps:{shrink:!0}}),Object(d.jsx)(I.a,{id:"time",label:"Alarm clock",type:"time",defaultValue:"07:30",className:e.textField,InputLabelProps:{shrink:!0},inputProps:{step:300}})]})}var Oe=a(179),ue=a.p+"static/media/Hotel1.e5e24077.jpg",pe=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function me(){var e=pe();return Object(d.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(d.jsx)(I.a,{id:"standard-basic",label:"Check In"})})}var ge=Object(u.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),width:"25ch"}}}}));function fe(){var e=ge();return Object(d.jsx)("form",{className:e.root,noValidate:!0,autoComplete:"off",children:Object(d.jsx)(I.a,{id:"standard-basic",label:"Check Out"})})}var ve=Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));function ye(){var e=ve();return Object(d.jsxs)("div",{className:e.root,children:[Object(d.jsxs)(Oe.a,{container:!0,spacing:0,children:[Object(d.jsx)(Oe.a,{item:!0,xs:12,children:Object(d.jsx)(g.a,{className:e.paper,children:Object(d.jsx)("h3",{children:"Check out"})})}),Object(d.jsx)(Oe.a,{item:!0,xs:12,children:Object(d.jsx)(g.a,{className:e.paper,children:Object(d.jsx)("div",{className:"row",children:Object(d.jsx)("div",{className:"Hotel1",children:Object(d.jsx)("img",{src:ue,width:"420",height:"170"})})})})}),Object(d.jsx)(Oe.a,{item:!0,xs:6,children:Object(d.jsx)(g.a,{className:e.paper,children:Object(d.jsx)(me,{})})}),Object(d.jsx)(Oe.a,{item:!0,xs:6,children:Object(d.jsx)(g.a,{className:e.paper,children:Object(d.jsx)(fe,{})})})]}),Object(d.jsx)("br",{})]})}Object(u.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}}));var Ne=Object(u.a)((function(e){return{root:{display:"flex"},details:{display:"flex",flexDirection:"column"},content:{flex:"1 0 auto"},cover:{width:151}}}));function ke(){var e=Ne();Object(p.a)();return Object(d.jsxs)(C.a,{className:e.root,children:[Object(d.jsx)("div",{className:e.details,children:Object(d.jsxs)(D.a,{className:e.content,children:[Object(d.jsx)(f.a,{component:"h5",variant:"h5",children:"Live From Space"}),Object(d.jsx)(f.a,{variant:"subtitle1",color:"textSecondary",children:"Mac Miller"})]})}),Object(d.jsx)(K.a,{className:e.cover,image:"/static/images/cards/live-from-space.jpg",title:"Live from space album cover"})]})}function we(){return Object(d.jsx)(s.a.Fragment,{children:Object(d.jsxs)(x.a,{fixed:!0,children:[Object(d.jsx)(ye,{}),Object(d.jsx)(ke,{})]})})}var Se=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("header",{className:"App-header",children:Object(d.jsx)(b,{})}),Object(d.jsxs)(h.c,{children:[Object(d.jsxs)(h.a,{path:"/SarovarDesign/",exact:!0,children:[" ",Object(d.jsx)(be,{})," "]}),Object(d.jsxs)(h.a,{path:"/SarovarDesign/home",children:[" ",Object(d.jsx)(be,{})," "]}),Object(d.jsxs)(h.a,{path:"/SarovarDesign/gallery",children:[" ",Object(d.jsx)(xe,{})," "]}),Object(d.jsxs)(h.a,{path:"/SarovarDesign/page3",children:[" ",Object(d.jsx)(we,{})," "]})]}),Object(d.jsxs)("footer",{className:"App-footer",children:[Object(d.jsxs)("table",{width:"100%",children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:Object(d.jsx)("h3",{children:Object(d.jsx)("u",{children:"CONTACT US"})})}),Object(d.jsx)("td",{children:Object(d.jsx)("h3",{children:Object(d.jsx)("u",{children:"SERVICES"})})}),Object(d.jsx)("td",{children:Object(d.jsx)("h3",{children:Object(d.jsx)("u",{children:"INFORMATION"})})}),Object(d.jsx)("td",{children:Object(d.jsx)("h3",{children:Object(d.jsx)("u",{children:"DEALS & BOOKINGS"})})})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"+44 345 678 903"}),Object(d.jsx)("td",{children:"Contact us"}),Object(d.jsx)("td",{children:"About Sarovar"}),Object(d.jsx)("td",{children:"My Booking"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"sarovar@gmail.com"}),Object(d.jsx)("td",{children:"Booking and payment"}),Object(d.jsx)("td",{children:"Sign Up"}),Object(d.jsx)("td",{children:"My Deal"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:"Book a hotel"}),Object(d.jsx)("td",{children:"Destination"}),Object(d.jsx)("td",{children:"Privacy Policy"}),Object(d.jsx)("td",{children:"Festival offers"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:"Rooms"}),Object(d.jsx)("td",{children:"Terms and Condition"}),Object(d.jsx)("td",{children:"Upcomming Deals"})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{}),"FAQ",Object(d.jsx)("td",{}),Object(d.jsx)("td",{children:"Press Enquiries"}),Object(d.jsx)("td",{})]})]}),Object(d.jsx)("hr",{}),"Copyright@SarovaDesign",Object(d.jsx)("hr",{})]})]})};r.a.render(Object(d.jsx)(o.a,{children:Object(d.jsx)(Se,{})}),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.a471786f.chunk.js.map