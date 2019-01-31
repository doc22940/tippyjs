(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{170:function(n,t,e){"use strict";e.d(t,"g",function(){return d}),e.d(t,"b",function(){return p}),e.d(t,"f",function(){return m}),e.d(t,"d",function(){return f}),e.d(t,"e",function(){return u}),e.d(t,"a",function(){return g}),e.d(t,"c",function(){return h});var o=e(86),a=e.n(o),r=(e(59),e(60),e(189),e(0)),i=e.n(r),l=e(175),c=e(37),s={xs:360,sm:576,md:768,lg:992,xl:1200},d=Object.keys(s).reduce(function(n,t){return n[t]="@media (min-width: "+s[t]+"px)",n},{}),p=(l.c.div.withConfig({displayName:"Framework__Center",componentId:"sc-1kcsy75-0"})(["text-align:center;"]),l.c.div.withConfig({displayName:"Framework__Container",componentId:"sc-1kcsy75-1"})(["position:relative;max-width:940px;padding:0 ","%;margin:0 auto;","{padding:0 25px;}","{padding:0 40px;}","{padding:0 50px;}"],function(n){return n.mobilePadding},d.sm,d.md,d.lg));p.defaultProps={mobilePadding:5},Object(l.c)(function(n){var t=n.children,e=(n.spacing,a()(n,["children","spacing"]));return i.a.createElement("div",e,t)}).withConfig({displayName:"Framework__Row",componentId:"sc-1kcsy75-2"})(["display:flex;flex-wrap:wrap;justify-content:space-between;margin:0 -","px;"],function(n){return n.spacing}).defaultProps={spacing:15},Object(l.c)(function(n){var t=n.children,e=(n.base,n.xs,n.sm,n.md,n.lg,n.xl,n.spacing,a()(n,["children","base","xs","sm","md","lg","xl","spacing"]));return i.a.createElement("div",e,t)}).withConfig({displayName:"Framework__Col",componentId:"sc-1kcsy75-3"})(["flex:1;padding:0 ","px;"," ",";"],function(n){return n.spacing},function(n){return n.base&&Object(l.b)(["flex-basis:","%;"],function(n){return 100*n.base/12})},function(n){return["xs","sm","md","lg","xl"].filter(function(t){return n[t]}).map(function(n){return Object(l.b)(["","{flex-basis:","%;}"],d[n],function(t){return 100*t[n]/12})})}).defaultProps={spacing:15};var m=Object(l.c)(c.Link).attrs(function(n){return{activeStyle:{fontWeight:"bold",background:"linear-gradient(90deg, #676c95, #4b4f74)",color:"#94e9ff"}}}).withConfig({displayName:"Framework__Link",componentId:"sc-1kcsy75-4"})(["color:inherit;text-decoration:none;transition:color 0.15s;"]),f=l.c.a.attrs(function(n){return{target:"_blank",rel:"noopener noreferrer"}}).withConfig({displayName:"Framework__ExternalLink",componentId:"sc-1kcsy75-5"})(["color:inherit;text-decoration:none;transition:color 0.15s;&:hover{color:#2263e5;}"]),u=l.c.div.withConfig({displayName:"Framework__Flex",componentId:"sc-1kcsy75-6"})(["display:flex;flex-wrap:wrap;justify-content:",";> div{margin-right:15px;margin-bottom:15px;flex:",";}"],function(n){return n.justify},function(n){return"even"===n.type&&1});u.defaultProps={justify:"space-between"};var g=l.c.button.withConfig({displayName:"Framework__Button",componentId:"sc-1kcsy75-7"})(["border:none;background:linear-gradient(135deg,#56c8ff,#6f99fc) no-repeat;color:white;will-change:opacity;box-shadow:0 4px 8px -1px rgba(25,80,137,0.08),0 8px 24px -2px rgba(0,128,255,0.06);font-size:17px;font-weight:600;text-shadow:0 1px 0 rgba(0,0,0,0.1);padding:8px 16px;border-radius:4px;margin-right:8px;margin-bottom:8px;transition:opacity 0.2s;&:hover{opacity:0.8;}"]),h=l.c.div.withConfig({displayName:"Framework__Demo",componentId:"sc-1kcsy75-8"})(["margin:15px 0;background:#eeeefa;padding:15px 15px 6px;border-radius:8px;"])},174:function(n,t,e){"use strict";var o=e(7),a=e.n(o),r=e(0),i=e.n(r),l=e(170),c=e(185),s=e(175),d=e(37),p=e(61),m=e(198),f=e.n(m),u=e(10),g=e.n(u),h=e(80),b=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).scroller=Object(r.createRef)(),t}a()(t,n);var e=t.prototype;return e.componentDidMount=function(){this.instance=Object(h.a)(g()({targets:this.scroller},this.props))},e.componentWillUnmount=function(){this.instance.disable(),this.instance=null},e.render=function(){var n=this;return r.Children.map(this.props.children,function(t){return Object(r.cloneElement)(t,{children:i.a.createElement("div",{"data-elastic-wrapper":!0},t.props.children),ref:function(e){n.scroller=e;var o=t.ref;o&&("function"==typeof o?o(e):o.hasOwnProperty("current")&&(o.current=e))}})})},t}(r.Component),x=s.c.nav.withConfig({displayName:"Nav__Navbar",componentId:"sc-1ofyja1-0"})(["display:",";position:fixed;top:0;bottom:0;width:250px;border-right:1px solid rgba(0,16,64,0.08);background-clip:padding-box;padding:16px 0;background:#4b4f74;color:white;overflow-y:auto;z-index:1;transform:",";transition:transform ",",visibility 0.2s;transition-timing-function:",";visibility:",";","{display:block;visibility:visible;transform:none;}"],function(n){return n.isMounted?"block":"none"},function(n){return n.isOpen?"translate3d(0, 0, 0)":"translate3d(-100%, 0, 0)"},function(n){return n.isOpen?"0.45s":"0.3s"},function(n){return n.isOpen?"cubic-bezier(.165, .84, .44, 1)":"cubic-bezier(.77, 0, .175, 1)"},function(n){return n.isOpen?"visible":"hidden"},l.g.lg),y=s.c.ul.withConfig({displayName:"Nav__List",componentId:"sc-1ofyja1-1"})(["list-style:none;padding-left:0;margin:0;"]),w=s.c.li.withConfig({displayName:"Nav__ListItem",componentId:"sc-1ofyja1-2"})(["margin:0;&:not(:last-child){border-bottom:1px dotted rgba(0,16,64,0.1);}> a{display:block;padding:12px 25px;&:hover{border-bottom-color:transparent;}}"]),k=s.c.button.withConfig({displayName:"Nav__XButton",componentId:"sc-1ofyja1-3"})(["position:absolute;right:10px;background:none;border:none;color:inherit;padding:0;","{display:none;}"],l.g.lg),v=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).state={isMounted:!1,transitions:!0},t.ref=Object(r.createRef)(),t.handleResize=function(){t.setState({transitions:!1}),clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.setState({transitions:!0})},100)},t.handleClose=function(){t.props.close()},t.handleTransitionEnd=function(){t.props.isOpen&&t.ref.current.focus()},t.handleBlur=function(n){n.currentTarget.contains(n.relatedTarget)||t.props.close()},t}a()(t,n);var e=t.prototype;return e.componentDidMount=function(){this.setState({isMounted:!0}),window.addEventListener("resize",this.handleResize),this.handleResize()},e.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),clearTimeout(this.timeout)},e.render=function(){var n=this.props.isOpen,t=this.state,e=t.isMounted,o=t.transitions;return i.a.createElement(b,null,i.a.createElement(x,{tabIndex:"-1","aria-label":"Menu",ref:this.ref,style:{transition:o?"":"none"},isOpen:n,isMounted:e,onTransitionEnd:this.handleTransitionEnd,onBlur:this.handleBlur},i.a.createElement(k,{"aria-label":"Close Menu",onClick:this.handleClose},i.a.createElement(f.a,{style:{width:36,height:36}})),i.a.createElement(y,null,i.a.createElement(d.StaticQuery,{query:E,render:function(n){return Object(p.a)(n.allMdx.edges).map(function(n){var t=n.node;return i.a.createElement(w,{key:t.frontmatter.path},i.a.createElement(l.f,{to:t.frontmatter.path},t.frontmatter.title))})},data:c}))))},t}(r.Component),E="4190207198",z=s.c.span.withConfig({displayName:"NavButtons__FadedText",componentId:"ii0ddk-0"})(["position:relative;top:-2px;opacity:0.4;font-size:70%;margin-right:10px;font-weight:bold;display:block;","{display:inline;}"],l.g.md),C=Object(s.c)(d.Link).withConfig({displayName:"NavButtons__NavButton",componentId:"ii0ddk-1"})(["display:block;padding:40px 25px;border:",";border-radius:4px;background:",";text-decoration:none;color:",";filter:",";font-weight:bold;transition:box-shadow 0.2s;flex:1;margin:0 10px;max-width:500px;font-size:20px;transition:all 0.1s;&:hover{border-color:inherit;border-bottom:",";filter:",";}","{font-size:24px;}"],function(n){return n["data-next"]?"none":"1px solid rgba(0, 16, 64, 0.15)"},function(n){return n["data-next"]?"linear-gradient(90deg,#f3edff,#edf5ff)":"white"},function(n){return n["data-next"]?"#2569d7":"inherit"},function(n){return n["data-next"]&&"saturate(1.15)"},function(n){return n["data-next"]&&"none"},function(n){return n["data-next"]&&"saturate(1.15) brightness(1.02)"},l.g.md);var N=function(n){var t=n.next;return i.a.createElement(l.e,{style:{marginTop:40,marginLeft:-10,marginRight:-10}},i.a.createElement(d.StaticQuery,{query:j,render:function(n){var e=Object(p.a)(n.allMdx.edges).map(function(n){return n.node}),o=e[t],a=t>1?e[t-2]:null;return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement(C,{to:a.frontmatter.path},i.a.createElement(z,null,"PREV")," ",a.frontmatter.title),o&&i.a.createElement(C,{to:o.frontmatter.path,"data-next":!0},i.a.createElement(z,null,"NEXT")," ",o.frontmatter.title))},data:c}))},j="4190207198",_=e(199),O=e.n(_),M=e(200),I=e.n(M),T=e(201),F=e.n(T),L=e(202),S=e.n(L),P=s.c.header.withConfig({displayName:"Header__HeaderRoot",componentId:"sc-9eu2yh-0"})(["position:relative;background:linear-gradient(91deg,#f1eefc,#9dc6ff 70%,#a5bcff);padding:25px 0;text-align:center;margin-bottom:50px;"]),R=s.c.img.withConfig({displayName:"Header__Logo",componentId:"sc-9eu2yh-1"})(["height:70px;margin-bottom:10px;"]),A=s.c.h1.withConfig({displayName:"Header__Title",componentId:"sc-9eu2yh-2"})(["font-size:48px;font-weight:600;margin-top:0;margin-bottom:25px;"]),B=Object(s.c)(l.d).withConfig({displayName:"Header__ButtonLink",componentId:"sc-9eu2yh-3"})(["background:rgba(255,255,255,0.2);border:1px solid rgba(255,255,255,0.4);padding:12px 24px;border-radius:4px;transition:all 0.15s;color:#4574c0;margin:0 10px 10px;font-weight:500;&:hover{background:white;border-bottom-color:white;box-shadow:0 8px 16px -2px rgba(0,32,128,0.25);}"]),H=s.c.button.withConfig({displayName:"Header__MenuButton",componentId:"sc-9eu2yh-4"})(["position:absolute;top:-10px;left:15px;color:inherit;font-weight:bold;border:none;background:none;text-transform:uppercase;border-radius:4px;padding:0;","{display:none;}"],l.g.lg),D={verticalAlign:-6,marginRight:10},J=g()({},D,{color:"#f88e27"}),q=g()({},D,{color:"#333"}),U={width:36,height:36};var Q=function(n){var t=n.openNav;return i.a.createElement(P,null,i.a.createElement(l.b,null,i.a.createElement(H,{"aria-label":"Menu",onClick:t},i.a.createElement(S.a,{style:U})),i.a.createElement(R,{src:O.a,draggable:"false"}),i.a.createElement(A,null,"Tippy.js"),i.a.createElement(l.e,{justify:"center"},i.a.createElement(B,{href:"https://popper.js.org"},i.a.createElement(F.a,{style:J}),"Powered by Popper.js"),i.a.createElement(B,{href:"https://github.com/atomiks/tippyjs"},i.a.createElement(I.a,{style:q}),"View on GitHub"))))},V=s.c.main.withConfig({displayName:"Main",componentId:"sc-7otpyo-0"})(["","{margin-left:250px;}"],l.g.lg),W=s.c.footer.withConfig({displayName:"Footer",componentId:"sc-1xqajj9-0"})(["text-align:center;padding:25px 0;border-top:1px solid rgba(0,16,64,0.08);margin-top:50px;color:#9dacb6;font-size:85%;background:white;"]),X=e(186),G=e(183),Y=e.n(G);function K(){var n=Y()(["\n  html {\n    box-sizing: border-box;\n    height: 100%;\n  }\n\n  *,\n  *::after,\n  *::before {\n    box-sizing: inherit;\n  }\n\n  body {\n    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    margin: 0;\n    color: #324b64;\n    height: 100%;\n    font-size: 17px;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :focus:not(.focus-visible) {\n    outline: 0;\n  }\n\n  &::-moz-selection {\n    background: #a886ff;\n    color: white;\n  }\n  &::selection {\n    background: #a886ff;\n    color: white;\n  }\n  \n  a {\n    color: #0065d5;\n    text-decoration: none;\n    border-bottom: 1px solid transparent;\n    transition: border-bottom-color 0.15s;\n\n    &:hover {\n      border-bottom-color: inherit;\n    }\n  }\n\n  h1, \n  h2, \n  h3, \n  h4, \n  h5, \n  h6 {\n    margin-top: 0;\n    margin-bottom: 1rem;\n\n    > a {\n      color: inherit;\n      padding-bottom: 0.25rem;\n    }\n  }\n\n  h1 {\n    font-size: 2.488rem;\n    margin-top: 2.488rem;\n  }\n\n  h2 {\n    font-size: 2.074rem;\n    margin-top: 2.074rem;\n    border-bottom: 1px solid rgba(0, 32, 128, 0.1);\n    padding-bottom: 10px;\n    margin-bottom: 1.5rem;\n  }\n\n  h3 {\n    font-size: 1.728rem;\n    margin-top: 1.728rem;\n  }\n\n  h4 {\n    font-size: 1.44rem;\n    margin-top: 1.5rem;\n  }\n\n  h5 {\n    font-size: 1.2rem;\n  }\n\n  p, \n  li {\n    line-height: 1.6;\n    margin-top: 0.5rem;\n  }\n\n  table {\n    box-shadow: 0 0 0 1px rgba(0,32,128,0.1);\n    border-collapse: collapse;\n    margin: 0;\n    padding: 0;\n    width: 100%;\n    line-height: 1.4;\n    border-radius: 0 0 10px 10px;\n  }\n\n  table tr {\n    padding: 5px;\n\n    &:not(:last-child) {\n      border-bottom: 1px dotted rgba(0,32,128,0.1);\n    }\n  }\n\n  td:first-child code {\n    background: none;\n    font-size: 90%;\n    color: inherit;\n    padding: 0;\n  }\n\n  table th, table td {\n    padding: 16px;\n    text-align: left;\n  }\n\n  table th {\n    position: relative;\n    z-index: 1;\n    font-size: 14px;\n    text-transform: uppercase;\n    background: #eeeefa;\n    position: sticky;\n    top: 0;\n  }\n\n  @media (max-width: 1150px) {\n    table {\n      border: 0;\n      box-shadow: none;\n    }\n\n    table thead {\n      display: none;\n    }\n\n    table tr {\n      border: 1px solid rgba(0,32,128,0.1);\n      display: block;\n      margin-bottom: 10px;\n      border-radius: 10px;\n    }\n\n    table td {\n      display: block;\n\n      &:not(:last-child) {\n        border-bottom: 1px dotted rgba(0,32,128,0.1);\n      }\n    }\n\n    table td:last-child {\n      border-bottom: 0;\n    }\n\n    table td::before {\n      content: attr(data-label);\n      display: block;\n      font-weight: bold;\n      text-transform: uppercase;\n      opacity: 0.7;\n      font-size: 13px;\n      margin-bottom: 5px;\n    }\n\n    td:first-child code {\n      font-size: 100%;\n    }\n  }\n\n  hr {\n    border: none;\n    border-top: 1px solid rgba(0, 16, 64, 0.15);\n    margin-top: 5px;\n  }\n"]);return K=function(){return n},n}var Z=Object(s.a)(K());function $(){var n=Y()(["\n  .tippy-tooltip.ajax-theme {\n    position: absolute;\n    width: 200px;\n    padding: 0;\n    overflow: hidden;\n\n    img {\n      display: block;\n      max-width: 100%;\n    }\n  }\n\n  .tippy-popper[x-placement^='top'] .tippy-tooltip.ajax-theme {\n    top: auto !important;\n    bottom: 0;\n  }\n  .tippy-popper[x-placement^='bottom'] .tippy-tooltip.ajax-theme {\n    bottom: auto !important;\n    top: 0;\n  }\n\n  .tippy-tooltip.tomato-theme {\n    font-weight: bold;\n    color: yellow;\n\n    .tippy-backdrop {\n      background: tomato;\n    }\n  }\n\n  .tippy-tooltip.dropdown-theme {\n    text-align: left;\n    font-size: 95%;\n  }\n"]);return $=function(){return n},n}var nn=Object(s.a)($());function tn(){var n=Y()(["\n  code,\n  pre {\n    font-family: Menlo, Consolas, 'Liberation Mono', Courier, monospace;\n  }\n\n  code[class*='language-'],\n  pre[class*='language-'] {\n    color: #cee6ff;\n    background: none;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 2.25;\n    font-size: 90%;\n    -moz-tab-size: 2;\n    -o-tab-size: 2;\n    tab-size: 2;\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  pre[class*='language-'] {\n    padding: 16px 5%;\n    margin-top: 0;\n    margin-left: -5.55%;\n    margin-right: -5.55%;\n    background: #22223f;\n    font-size: 15px;\n    line-height: 2;\n    max-height: 650px;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n\n    [data-elastic-wrapper] {\n      display: inline-block;\n    }\n\n    "," {\n      margin-left: -25px;\n      margin-right: -25px;\n      padding: 16px 25px;\n    }\n\n    "," {\n      border-radius: 8px;\n      margin-left: 0;\n      margin-right: 0;\n      padding: 16px 24px;\n      font-size: 16px;\n    }\n  }\n\n  code.language-text {\n    background: linear-gradient(90deg, #f3edff, #edf5ff);\n    color: #2569d7;\n    font-weight: bold;\n    padding: 0.2em 0.4em;\n    border-radius: 4px;\n    font-size: 85%;\n    line-height: inherit;\n  }\n\n  .token.important,\n  .token.atrule,\n  .token.keyword {\n    color: #bc90ff;\n  }\n\n  .token.comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7692d9;\n  }\n\n  .token.attr-name,\n  .token.selector {\n    color: #ffb07b;\n  }\n\n  .token.boolean {\n    color: #ff81d0;\n  }\n\n  .token.punctuation,\n  .token.operator,\n  .token.op,\n  .token.module {\n    color: #6ed3ff;\n  }\n\n  .token.nil {\n    color: #9b9fb0;\n  }\n\n  .token.arrow {\n    color: #c49dff;\n  }\n\n  .token.parameter {\n    color: #ffc5ff;\n  }\n\n  .token.flow {\n    color: #e99eff;\n    font-style: italic;\n  }\n\n  .token.spread {\n    font-weight: bold;\n    color: #ff7e99;\n    text-shadow: 0px 1px 6px;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  .token.tag {\n    color: #ff6c8b;\n  }\n\n  .token.number,\n  .token.symbol,\n  .token.deleted {\n    color: #ff984b;\n  }\n\n  .token.string,\n  .language-css .token.string,\n  .token.url,\n  .token.attr-value,\n  .token.char,\n  .token.builtin,\n  .token.inserted {\n    color: #4ef2d0;\n  }\n\n  .token.entity,\n  .style .token.string {\n    color: #ecd6ba;\n    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);\n  }\n\n  .token.function,\n  .token.property {\n    color: #61a5ff;\n  }\n\n  .token.method {\n    color: #16c5ff;\n  }\n\n  .token.variable {\n    color: #ffad92;\n  }\n\n  .token.dom,\n  .token.class-name {\n    color: #ffd278;\n  }\n\n  .token.property.definition {\n    color: #b6e992;\n  }\n\n  .token.property.access {\n    color: #8ec1ef;\n  }\n\n  .token.regex {\n    color: #88ecff;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n"]);return tn=function(){return n},n}var en=Object(s.a)(tn(),l.g.sm,l.g.md);var on=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(Z,null),i.a.createElement(nn,null),i.a.createElement(en,null))},an=function(n){function t(){for(var t,e=arguments.length,o=new Array(e),a=0;a<e;a++)o[a]=arguments[a];return(t=n.call.apply(n,[this].concat(o))||this).state={isNavOpen:!1},t.openNav=function(){t.setState({isNavOpen:!0})},t.closeNav=function(){t.setState({isNavOpen:!1})},t}return a()(t,n),t.prototype.render=function(){var n=this.state.isNavOpen,t=this.props,e=t.children,o=t.pageContext;return i.a.createElement(i.a.Fragment,null,i.a.createElement(on,null),i.a.createElement(X.a,{pageContext:o}),i.a.createElement(v,{isOpen:n,close:this.closeNav}),i.a.createElement(V,null,i.a.createElement(Q,{openNav:this.openNav}),i.a.createElement(l.b,null,i.a.createElement("h2",null,o.frontmatter.title),e,i.a.createElement(N,{next:o.frontmatter.index+1})),i.a.createElement(W,null,"© ",(new Date).getFullYear()," - MIT License")))},t}(r.Component);t.a=an},185:function(n){n.exports={data:{allMdx:{edges:[{node:{frontmatter:{title:"AJAX",path:"/ajax/",index:7}}},{node:{frontmatter:{title:"Accessibility",path:"/accessibility/",index:10}}},{node:{frontmatter:{title:"Customizing Tooltips",path:"/customizing-tooltips/",index:3}}},{node:{frontmatter:{title:"Creating Tooltips",path:"/creating-tooltips/",index:2}}},{node:{frontmatter:{title:"Getting Started",path:"/getting-started/",index:1}}},{node:{frontmatter:{title:"Demo",path:"/",index:0}}},{node:{frontmatter:{title:"Methods",path:"/methods/",index:6}}},{node:{frontmatter:{title:"Misc",path:"/misc/",index:11}}},{node:{frontmatter:{title:"HTML Content",path:"/html-content/",index:9}}},{node:{frontmatter:{title:"Objects",path:"/objects/",index:5}}},{node:{frontmatter:{title:"Themes",path:"/themes/",index:8}}},{node:{frontmatter:{title:"All Options",path:"/all-options/",index:4}}}]}}}},186:function(n,t,e){"use strict";var o=e(203),a=e(0),r=e.n(a),i=e(204),l=e.n(i),c=e(37);function s(n){var t=n.title,e=n.description,a=n.lang,i=n.meta,s=n.keywords,p=n.pageContext;return r.a.createElement(c.StaticQuery,{query:d,render:function(n){var o=e||n.site.siteMetadata.description,c="Demo"===p.frontmatter.title,d=t||(c?"Tippy.js - Vanilla JS Tooltip and Popover Library":p.frontmatter.title);return r.a.createElement(l.a,{htmlAttributes:{lang:a},title:d,titleTemplate:c?null:"%s | "+n.site.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:d},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:n.site.siteMetadata.author},{name:"twitter:title",content:d},{name:"twitter:description",content:o}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:o})}s.defaultProps={lang:"en",meta:[],keywords:[]},t.a=s;var d="1025518380"},199:function(n,t,e){n.exports=e.p+"static/logo-ebc385458e03fdb24af078536af88065.svg"},203:function(n){n.exports={data:{site:{siteMetadata:{title:"Tippy.js",description:"A simple, easy-to-use vanilla JavaScript library for creating tooltips and popovers to use in web sites and apps. The flat-level option API makes customizing a tooltip and popover as easy as adding a single object property or data attribute. Make tooltips follow the mouse cursor, have an arrow, change duration and delay, have custom themes and animations, HTML content, touch support, and more...",author:"@atomiks"}}}}}}]);
//# sourceMappingURL=1-1e91369108782557faa8.js.map