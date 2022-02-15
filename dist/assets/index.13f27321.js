var be=Object.defineProperty,fe=Object.defineProperties;var Ce=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var Ae=Object.prototype.hasOwnProperty,ye=Object.prototype.propertyIsEnumerable;var Y=(n,t,o)=>t in n?be(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,L=(n,t)=>{for(var o in t||(t={}))Ae.call(t,o)&&Y(n,o,t[o]);if(T)for(var o of T(t))ye.call(t,o)&&Y(n,o,t[o]);return n},H=(n,t)=>fe(n,Ce(t));import{j as z,r as i,s,l as we,u as P,B as ke,S as W,R as S,a as ve}from"./vendor.2d340bfb.js";const Fe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerpolicy&&(c.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?c.credentials="include":a.crossorigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(a){if(a.ep)return;a.ep=!0;const c=o(a);fetch(a.href,c)}};Fe();const e=z.exports.jsx,p=z.exports.jsxs,$=z.exports.Fragment,J=i.exports.createContext({}),Ee=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(J.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},v=()=>i.exports.useContext(J),Z=i.exports.memo(n=>{const{children:t}=n;return e(Be,{children:t})}),Be=s.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,X=i.exports.memo(n=>{const{children:t}=n;return e(De,{children:t})}),De=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,_e=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F"],u={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:a}=n;return e($e,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:a,children:o})});F.defaultProps={color:"green"};const $e=s.button`
  width: 300px;
  padding: 12px 16px;
  font-size: 16px;
  color: #fff;
  border-radius: 6px;
  text-align: center;
  transition: opacity 0.1s;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &.btn-- {
    &red {
      background: ${u.red};
    }
    &orange {
      background: ${u.orange};
    }
    &yellow {
      background: ${u.yellow};
    }
    &green {
      background: ${u.green};
    }
    &teal {
      background: ${u.teal};
    }
    &blue {
      background: ${u.blue};
    }
    &cyan {
      background: ${u.cyan};
    }
    &purple {
      background: ${u.purple};
    }
    &pink {
      background: ${u.pink};
    }
    &gray {
      background: ${u.gray[1]};
    }
  }
`,N=i.exports.memo(n=>{const{text:t,size:o}=n;return e(Ie,{className:o&&`heading--${o}`,children:t})});N.defaultProps={size:"1"};const Ie=s.div`
  margin-bottom: 25px;
  font-weight: bold;
  text-align: center;
  &.heading--1 {
    font-size: 28px;
  }
  &.heading--2 {
    font-size: 24px;
  }
  &.heading--3 {
    font-size: 20px;
  }
  &.heading--4 {
    font-size: 18px;
  }
`,Se=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return p(Ne,{className:"textContainer",children:[e(Le,{value:t,placeholder:o,onChange:r}),e(He,{})]})}),Ne=s.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Le=s.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${u.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,He=s.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=we(),Q=()=>{const{setMyInfo:n}=v(),t=()=>{const a=8,c="abcdefghijklmnopqrstuvwxyz0123456789";let d="";for(let l=0;l<a;l++)d+=c[Math.floor(Math.random()*c.length)];return d},o=()=>{const a=151,c=`${Math.floor(Math.random()*a)+1}`;let d;return c.length===1?d=`00${c}`:c.length===2?d=`0${c}`:d=c,d};return{setInfo:i.exports.useCallback((a,c)=>{const d={id:t(),name:a,icon:o(),isAdmin:c};n(d),a==="$clear"&&m.emit("common:clearUser"),m.emit("common:newUser",d)},[]),randomIcon:o}},ze=()=>{const n=P(),{setInfo:t}=Q();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},Pe=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:a}=ze();return e(Oe,{children:p(je,{children:[e(N,{text:"Games House"}),e(Se,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:l=>{t(l.target.value),l.target.value?r(!1):r(!0)}}),e(F,{label:"Join the game!",isDisabled:o,onclick:()=>a(n)})]})})}),Oe=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,je=s.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${u.border};
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(160, 174, 192, 0.6);
  .textContainer {
    margin-bottom: 40px;
  }
`,Me=i.exports.memo(()=>null),O=i.exports.memo(n=>{const{children:t,options:o,value:r,onChange:a,disabled:c,hdg:d}=n;return p(Re,{children:[e(Ue,{children:d}),p(Ge,{value:r,onChange:a,disabled:!c,children:[t,o.map(l=>e("option",{value:l.key,children:l.value},l.value))]})]})}),Re=s.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Ge=s.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${u.gray[1]};
  border-radius: 4px;
`,Ue=s.div`
  font-size: 14px;
  font-weight: bold;
`,Te=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Ye=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],We=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState(null),[r,a]=i.exports.useState(null);i.exports.useEffect(()=>{m.on("hanabi:updateConfig",l=>{o(l.colorNum),a(l.handNum)}),m.emit("hanabi:getConfig")},[]);const c=l=>{m.emit("hanabi:setColorNum",l.target.options[l.target.selectedIndex].value)},d=l=>{m.emit("hanabi:setHandNum",l.target.options[l.target.selectedIndex].value)};return p(Je,{children:[e(V,{children:e(O,{options:Te,hdg:"\u8272\u306E\u6570",value:t||"",onChange:c,disabled:n.isAdmin})}),e(V,{style:{marginTop:"10px"},children:e(O,{options:Ye,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:d,disabled:n.isAdmin})})]})}),Je=s.div``,V=s.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,E=i.exports.memo(n=>{const{name:t,icon:o,color:r,editIcon:a,editName:c}=n,{myInfo:d,setMyInfo:l}=v(),[g,h]=i.exports.useState(!1),[C,w]=i.exports.useState(d.name),{randomIcon:A}=Q(),k=()=>{l(H(L({},d),{icon:A()}))},B=()=>{h(!g),g&&l(H(L({},d),{name:C}))},f=y=>w(y.target.value);return i.exports.useEffect(()=>{m.emit("common:updateInfo",d)},[d]),p(Ze,{className:"profile",style:{borderColor:r},children:[p(Xe,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),a&&e(Qe,{onClick:k,children:a})]}),g?e(qe,{type:"text",value:C,onChange:f}):e(Ve,{className:"profile__name",children:t}),c&&e(Ke,{onClick:B,className:g?"isEdit":"",children:c})]})}),Ze=s.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${u.gray[0]};
  border: 2px solid ${u.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Xe=s.div`
  position: relative;
  width: 60px;
  height: 60px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${u.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,Qe=s.button`
  position: absolute;
  right: 0;
  bottom: -5px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2028.19%2029.99%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3Anone%3Bstroke%3A%23000%3Bstroke-linecap%3Around%3Bstroke-linejoin%3Abevel%3Bstroke-width%3A3.13px%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC_2%22%20data-name%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%202%22%3E%3Cg%20id%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC_1-2%22%20data-name%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%201%22%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M24.85%2C1.56l-7.44%2C1%2C1%2C7.43M3.23%2C28.42l7.43-1L9.66%2C20%22%2F%3E%3Cpath%20class%3D%22cls-1%22%20d%3D%22M16.32%2C27.3a12.5%2C12.5%2C0%2C0%2C0%2C2.2-24m-6.76-.6a12.5%2C12.5%2C0%2C0%2C0-2.08%2C24%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid ${u.border};
  border-radius: 50%;
`,Ve=s.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,qe=s.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${u.gray[1]};
`,Ke=s.button`
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M506.53%2C88.263L423.737%2C5.47c-7.294-7.293-19.118-7.293-26.411%2C0L47.776%2C341.176%0A%09%09c-2.168%2C2.168-3.769%2C4.836-4.661%2C7.768L0.836%2C487.86c-4.35%2C14.293%2C9.011%2C27.654%2C23.304%2C23.305l143.382-43.639h0L506.53%2C114.675%0A%09%09C513.823%2C107.381%2C513.823%2C95.556%2C506.53%2C88.263z%20M63.524%2C465.077l-16.584-16.584l24.373-80.107l47.004%2C25.29l25.296%2C47.012%0A%09%09L63.524%2C465.077z%20M453.986%2C75.041L156.172%2C374.747l-18.919-18.918l299.72-297.828l17.013%2C17.012%0A%09%09C453.986%2C75.024%2C453.986%2C75.03%2C453.986%2C75.041z%22%20style%3D%22fill%3A%20rgb(75%2C%2075%2C%2075)%3B%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid ${u.border};
  border-radius: 50%;
  &.isEdit {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Ctitle%3E843_ch_f%3C%2Ftitle%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22none%22%2F%3E%3Cpolyline%20points%3D%2212%2028%2020%2036%2038%2018%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%224%22%2F%3E%3C%2Fsvg%3E');
  }
`,D="kowloonTactics",et=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{m.on(`${D}:updateConfig`,l=>{o(l)}),m.emit(`${D}:updateConfig`)},[]);const r=()=>m.emit(`${D}:setRedPlayer`,n),a=()=>m.emit(`${D}:setBluePlayer`,n),c=()=>m.emit(`${D}:setRedSupporter`,n),d=()=>m.emit(`${D}:setBlueSupporter`,n);return p(tt,{children:[p(q,{className:"red",children:[p(K,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(E,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),p(ee,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(l=>l.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:c,color:"yellow"}),e(te,{children:t.redSupporter.map(l=>e(E,{name:l.name,icon:l.icon},l.id))})]})]}),p(q,{className:"blue",children:[p(K,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(E,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"})]}),p(ee,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(l=>l.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:d,color:"yellow"}),e(te,{children:t.blueSupporter.map(l=>e(E,{name:l.name,icon:l.icon},l.id))})]})]})]})}),tt=s.div`
  display: flex;
  justify-content: space-between;
`,q=s.div`
  width: calc(100% / 2 - 10px);
  min-height: 350px;
  padding: 10px;
  border: 1px solid ${u.border};
  border-radius: 6px;
  &.red {
    background: #e53e3e66;
  }
  &.blue {
    background: #3182ce66;
  }
  .profile {
    &__img {
      width: 40px;
      height: 40px;
    }
    &__name {
      width: calc(100% - 50px);
      margin-right: 0;
      font-size: 14px;
      text-overflow: clip;
    }
  }
`,K=s.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
  > .btn {
    width: 100%;
    font-size: 14px;
    color: ${u.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,ee=s.div`
  padding-top: 10px;
  > .btn {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${u.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,te=s.div``,nt=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(et,{}));break;case"Hanabi":t(e(We,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(Me,{}));break}},[]);return{currentConfig:n,setConfig:o}},ot=()=>{const n=P();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break}},[])}},ne=[];_e.map(n=>ne.push({key:n,value:n}));const rt=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=v(),{gameStart:r}=ot(),{currentConfig:a,setConfig:c}=nt(),d=g=>{const h=g.target.value;h.indexOf("--")===-1?m.emit("common:setCurrentGame",h):m.emit("common:setCurrentGame",null)},l=()=>m.emit("common:gameStart");return i.exports.useEffect(()=>{m.on("common:getCurrentGame",g=>{t(g),c(g)}),m.on("common:setCurrentGame",g=>{t(g),c(g)}),m.on("common:gameStart",g=>r(g)),m.emit("common:getCurrentGame")},[]),p(it,{children:[e(N,{text:"Setting",size:"2"}),e(at,{children:e(O,{options:ne,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:d,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(st,{children:n&&p(lt,{children:[a,o.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:l,color:"blue"})]})})]})}),it=s.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,at=s.div`
  display: flex;
  justify-content: center;
`,st=s.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,lt=s.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${u.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
  > .btn {
    display: block;
    margin: 30px auto 0;
  }
`,ct=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=v();return p(dt,{children:[e(N,{text:"Player",size:"2"}),e(ut,{children:t.map(r=>e(E,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),dt=s.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,ut=s.ul`
  height: calc(100% - 71px);
  margin-right: -5px;
  padding-right: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${u.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`,pt=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",o=>t(o))},[]),p(mt,{children:[e(ct,{userList:n}),e(rt,{})]})}),mt=s.div`
  display: flex;
  justify-content: space-between;
  width: 1000px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
  padding: 40px;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 2px 2px rgba(34, 34, 34, 0.3) inset;
`;let _=!1,j=0,M=0;const gt=i.exports.memo(n=>{const{context:t,setCanvas:o,color:r,disable:a,ready:c}=n;return i.exports.useEffect(()=>{const d=document.getElementById("canvas"),l=d.getContext("2d");l.lineCap="round",l.lineWidth=4,l.strokeStyle=r,d.addEventListener("mousedown",h=>{_=!0,j=h.offsetX,M=h.offsetY}),d.addEventListener("mousemove",h=>{if(!_)return;const C=h.offsetX,w=h.offsetY;g(l,j,M,C,w),j=C,M=w}),d.addEventListener("mouseout",()=>{!_||(_=!1,o(d))}),d.addEventListener("mouseup",()=>{!_||(_=!1,o(d))});const g=(h,C,w,A,k)=>{h.beginPath(),h.moveTo(C,w),h.lineTo(A,k),h.stroke()}},[]),i.exports.useEffect(()=>{const l=document.getElementById("canvas").getContext("2d");if(t.length){const g=new Image;g.src=t,g.onload=()=>l.drawImage(g,0,0)}},[t]),p(ht,{children:[e(xt,{id:"canvas",width:750,height:500,className:a||c?"disable":""}),e(bt,{className:c?"is-active":"",children:p("p",{children:["\u304A\u984C\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044",e("br",{}),"10\u79D2\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u958B\u59CB\u3057\u307E\u3059"]})})]})}),ht=s.div`
  position: relative;
  width: 750px;
  height: 100%;
`,xt=s.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`,bt=s.div`
  position: absolute;
  top: 50%;
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 30px 0;
  opacity: 0;
  background: #333;
  text-align: center;
  pointer-events: none;
  transition: opacity 0.5s;
  &.is-active {
    opacity: 1;
  }
  > p {
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      right: 200px;
      transform: translateY(-50%);
      width: 30px;
      height: 30px;
      background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2055%2060%22%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill%3A%23fff%3B%7D%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC_2%22%20data-name%3D%22%E3%83%AC%E3%82%A4%E3%83%A4%E3%83%BC%202%22%3E%3Cg%20id%3D%22Layer_1%22%20data-name%3D%22Layer%201%22%3E%3Cpolygon%20class%3D%22cls-1%22%20points%3D%2225%200%2025%2015%2040%2030%2025%2045%2025%2060%2055%2030%2025%200%22%2F%3E%3Cpolygon%20class%3D%22cls-1%22%20points%3D%220%200%200%2015%2015%2030%200%2045%200%2060%2030%2030%200%200%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E');
      background-size: 100% auto;
      background-repeat: no-repeat;
      animation: arrMove 1s infinite;
    }
  }
  @keyframes arrMove {
    85% {
      transform: translate(5px, -50%);
    }
    100% {
      transform: translate(0px, -50%);
    }
  }
`,R="fakeArtist",ft=i.exports.memo(()=>{const[n,t]=i.exports.useState({}),[o,r]=i.exports.useState(null),{myInfo:a}=v(),[c,d]=i.exports.useState(!1);i.exports.useEffect(()=>{m.on(`${R}:getData`,h=>t(h)),m.emit(`${R}:getData`),setTimeout(()=>d(!0),500),setTimeout(()=>d(!1),11e3)},[]);const l=()=>{const h=o==null?void 0:o.toDataURL();m.emit(`${R}:draw`,h),r(null)},g=()=>{const h=o==null?void 0:o.getContext("2d");if(h.clearRect(0,0,750,500),n.context.length){const C=new Image;C.src=n.context,C.onload=()=>h.drawImage(C,0,0)}r(null)};return Object.keys(n).length?p(Ct,{children:[p("p",{children:[n.players[n.turn].name,"\u306E\u30BF\u30FC\u30F3"]}),o&&p(At,{children:[e("p",{children:"\u3053\u308C\u3067\u3044\u3044?"}),e("button",{style:{backgroundColor:u.green[0]},onClick:l,children:"\u66F8\u3044\u305F\uFF01"}),e("button",{style:{backgroundColor:u.gray[1]},onClick:g,children:"\u66F8\u304D\u76F4\u3059\uFF01"})]}),p(yt,{children:[e(gt,{context:n.context,setCanvas:r,color:n.colors[n.players.findIndex(h=>h.id===a.id)],disable:!!(o||n.players[n.turn].id!==a.id),ready:c}),p(wt,{children:[p(oe,{children:[e("span",{children:"\u4ECA\u56DE\u306E\u30C6\u30FC\u30DE"}),e(re,{children:n.category})]}),p(oe,{style:{marginTop:"10px"},children:[e("span",{children:"\u4ECA\u56DE\u306E\u304A\u984C"}),e(re,{children:n.players[n.fakeMan].id!==a.id?n.theme:"?"})]}),e(kt,{children:n.players.map((h,C)=>e(E,{name:h.name,icon:h.icon,color:n.colors[C]},h.id))})]})]})]}):null}),Ct=s.div`
  position: relative;
`,At=s.div`
  position: absolute;
  top: -100px;
  width: 100%;
  text-align: center;
  > p {
    margin-bottom: 15px;
    font-weight: bold;
  }
  > button {
    padding: 10px 40px;
    color: #fff;
    font-weight: bold;
    border-radius: 22px;
    + button {
      margin-left: 40px;
    }
  }
`,yt=s.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
`,wt=s.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`,oe=s.div`
  padding-left: 10px;
  padding-right: 10px;
  background: #ffedab;
  border: 2px solid ${u.border};
  border-radius: 4px;
  text-align: center;
  > span {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid ${u.gray[1]};
  }
`,re=s.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`,kt=s.ul`
  height: calc(100% - 188px);
  margin-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .profile {
    border-width: 3px;
  }
  .profile__img {
    width: 40px;
    height: 40px;
  }
  .profile__name {
    font-size: 14px;
  }
`,vt=i.exports.memo(n=>{const{cemetery:t}=n;return e(Ft,{children:t.map(o=>e(Et,{className:o.color,children:o.num.map((r,a)=>e(Bt,{children:r},a))},o.color))})}),Ft=s.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,Et=s.div`
  display: flex;
  min-height: 30px;
  font-size: 20px;
  font-weight: bold;
  &.red {
    color: ${u.red};
  }
  &.blue {
    color: ${u.blue};
  }
  &.yellow {
    color: ${u.yellow};
  }
  &.green {
    color: ${u.green};
  }
  &.white {
    color: #fff;
  }
  &.purple {
    color: ${u.purple};
  }
`,Bt=s.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,ie=i.exports.memo(n=>{const{color:t,num:o,colorHint:r,numHint:a,isReverse:c,onclick:d}=n,l=()=>{let g="";return r&&(g+=`hint_${t}`),a&&(g=g===""?`hint_${o}`:`${g} hint_${o}`),g};return e($,{children:c?e(ae,{className:`reverse hand ${(r||a)&&l()}`,onClick:d}):e(ae,{className:`${t} hand ${(r||a)&&l()}`,onClick:d,children:o!==0&&o})})}),ae=s.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${u.gray[1]};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &.red {
    color: ${u.red};
    text-shadow: 1px 1px 0px #8d0000;
  }
  &.blue {
    color: ${u.blue};
    text-shadow: 1px 1px 0px #004b92;
  }
  &.yellow {
    color: ${u.yellow};
    text-shadow: 1px 1px 0px #9c7a00;
  }
  &.green {
    color: ${u.green};
    text-shadow: 1px 1px 0px #007436;
  }
  &.white {
    color: #fff;
    text-shadow: 1px 1px 0px #333;
  }
  &.purple {
    color: ${u.purple};
    text-shadow: 1px 1px 0px #5826bd;
  }
  &.reverse {
    background-image: url('/assets/images/bg_hanabi_hand.png');
    background-size: 100% auto;
    background-repeat: no-repeat;
  }
  &.selected {
    border-color: #fff;
  }
  &[class*='hint'] {
    position: relative;
    transition: top 0.2s;
    &::before {
      content: '';
      position: absolute;
      top: -30px;
      left: -1px;
      width: 100%;
      height: 30px;
      font-size: 18px;
      font-weight: bold;
      text-shadow: none;
      color: ${u.black};
      background: #aaaaaacc;
      border-radius: 8px 8px 0 0;
      border: solid 1px #666;
      border-bottom: none;
      pointer-events: none;
    }
  }
  &.hint_red::before {
    background: #e53e3ecc;
  }
  &.hint_blue::before {
    background: #3182cecc;
  }
  &.hint_yellow::before {
    background: #ecc94bcc;
  }
  &.hint_green::before {
    background: #38a169cc;
  }
  &.hint_white::before {
    background: #ffffffcc;
  }
  &.hint_purple::before {
    background: #9f7aeacc;
  }
  &.hint_1::before {
    content: '1';
  }
  &.hint_2::before {
    content: '2';
  }
  &.hint_3::before {
    content: '3';
  }
  &.hint_4::before {
    content: '4';
  }
  &.hint_5::before {
    content: '5';
  }
`,Dt=i.exports.memo(n=>{const{deck:t,fields:o}=n;return p(_t,{children:[e($t,{children:t}),e(It,{children:o.map((r,a)=>e(ie,{color:r.color,num:r.num},a))})]})}),_t=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,$t=s.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #becef1;
  border: 3px solid ${u.gray[1]};
  border-radius: 8px;
  text-align: center;
`,It=s.div`
  display: flex;
  .hand {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.red {
      border: 3px solid ${u.red};
    }
    &.blue {
      border: 3px solid ${u.blue};
    }
    &.yellow {
      border: 3px solid ${u.yellow};
    }
    &.green {
      border: 3px solid ${u.green};
    }
    &.white {
      border: 3px solid #fff;
    }
    &.purple {
      border: 3px solid ${u.purple};
    }
  }
`,St=i.exports.memo(n=>{const{hint:t}=n;return e(Nt,{children:[...Array(t)].map(o=>e(Lt,{},o))})}),Nt=s.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,Lt=s.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,Ht=i.exports.memo(()=>e(zt,{children:p("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),zt=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: #f11c1c40;
  > div {
    opacity: 0;
    transform: translateX(50px);
    animation: fadeIn 0.6s forwards, fadeOut 0.6s 1.8s forwards;
    > span {
      display: inline-block;
      font-size: 50px;
      font-weight: bold;
      color: #fff;
      text-shadow: 3px 2px 0 #333;
      letter-spacing: 0.1em;
      animation-name: rotate;
      animation-duration: 1s;
      animation-delay: 0.4s;
      &:nth-child(2) {
        animation-delay: 0.5s;
      }
      &:nth-child(3) {
        animation-delay: 0.6s;
      }
      &:nth-child(4) {
        animation-delay: 0.7s;
      }
      &:nth-child(5) {
        animation-delay: 0.8s;
      }
    }
  }
  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes fadeOut {
    to {
      opacity: 0;
      transform: translateX(-50px);
    }
  }

  @keyframes rotate {
    to {
      transform: rotateY(-360deg);
    }
  }
`,Pt=i.exports.memo(n=>{const{name:t,hands:o,onclick:r,isFinish:a}=n,{myInfo:c}=v();return p(Ot,{className:"player",children:[e(jt,{children:o.map((d,l)=>e(ie,{color:d.color,num:d.num,colorHint:d.colorHint,numHint:d.numHint,isReverse:a?!1:t===c.name,onclick:r},l))}),p(Mt,{children:["\u27A1\uFE0E ",t]})]})}),Ot=s.div`
  min-width: 310px;
`,jt=s.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,Mt=s.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,se=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),p(Rt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),Rt=s.div`
  position: fixed;
  top: 10px;
  left: 0;
  right: 0;
  z-index: 9;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 10px;
  background: #9ae6b4;
  border: 1px solid #2f855a;
  border-radius: 5px;
  box-shadow: 0px 3px 8px rgb(0 0 0 / 24%);
  animation-duration: 0.4s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
  &.isAnimate {
    animation-name: toastIn;
  }
  @keyframes toastIn {
    25% {
      transform: scale(1.05, 0.95);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.05, 0.95);
    }
    100% {
      transform: scale(1);
    }
  }
`,le=()=>{const n=P();return i.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},Gt=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState(null),[c,d]=i.exports.useState(!1),[l,g]=i.exports.useState(!1),{toLobby:h}=le();i.exports.useEffect(()=>{m.on("hanabi:getData",(b,x)=>{x==="miss"||x==="gameover"?(d(!0),setTimeout(()=>{x==="gameover"&&g(!0),d(!1),o(b)},2400)):(x==="finish"&&g(!0),o(b))}),m.emit("hanabi:getData")},[]);const C=b=>{var I;const x=b.currentTarget;a(x),(I=document.querySelector(".hand.selected"))==null||I.classList.remove("selected"),x.classList.add("selected")},w=()=>`${(r==null?void 0:r.getBoundingClientRect().top)-100}px`,A=()=>{var U;if(!r)return;const b=[].slice.call((U=r.parentElement)==null?void 0:U.childNodes).indexOf(r),x=r.closest(".player"),I=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(I).indexOf(x),index:b}},k=()=>{var x;const b=A();m.emit("hanabi:playHand",b),a(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},B=()=>{var x;const b=A();m.emit("hanabi:discardHand",b),a(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},f=()=>{var x;const b=A();m.emit("hanabi:colorHint",b),a(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},y=()=>{var x;const b=A();m.emit("hanabi:numHint",b),a(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")};return Object.keys(t).length?p($,{children:[p(Ut,{className:l||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[l?e(ce,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?p(ce,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(se,{turn:t.players[t.turn].player.name}),p(Tt,{children:[e(Dt,{deck:t.deck.length,fields:t.fields}),p(Yt,{children:[p(Wt,{children:[p("p",{children:["SCORE : ",t.score]}),p("p",{children:["MISS : ",t.miss,"/3"]})]}),e(St,{hint:t.hint})]}),e(vt,{cemetery:t.cemetery})]}),p(Jt,{className:"playerarea",children:[t.players.map(b=>e(Pt,{name:b.player.name,hands:b.hands,onclick:C,isFinish:l},b.player.name)),l&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:h,color:"teal"})}),!l&&r&&r.className.indexOf("reverse")!==-1&&p(de,{style:{top:w()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:k,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:B,children:"\u6368\u3066\u308B"})]}),!l&&r&&r.className.indexOf("reverse")===-1&&p(de,{style:{top:w()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:f,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:y,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),c&&e(Ht,{})]}):null}),Ut=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  position: relative;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  &.is-disabled {
    pointer-events: none;
  }
`,ce=s.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${u.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,Tt=s.div``,Yt=s.div`
  display: flex;
`,Wt=s.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,Jt=s.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,de=s.div`
  position: absolute;
  right: calc(100% + 10px);
  z-index: 5;
  width: 200px;
  padding: 16px 20px;
  background: #fff;
  border: 2px solid ${u.border};
  border-radius: 6px;
  text-align: center;
  > p {
    font-size: 14px;
    font-weight: bold;
  }
  > button {
    display: block;
    width: 100%;
    margin-top: 10px;
    padding: 8px 0;
    font-weight: bold;
    color: #fff;
    background: ${u.blue};
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,Zt=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e($,{children:n&&p(Xt,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),Xt=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  > span {
    display: inline-block;
    font-size: 50px;
    font-weight: bold;
    color: #fff;
    text-shadow: 3px 2px 0 #333;
    letter-spacing: 0.1em;
    animation-name: jump;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      animation-delay: 0.5s;
    }
  }

  @keyframes jump {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    30% {
      transform: translateY(-25%);
    }
    50% {
      transform: scale(1);
    }
    90% {
      transform: translateY(0) scale(1.2, 0.8);
    }
  }
`,G=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:a}=n,c=d=>d===0?"empty":d%2==0?"black":"white";return e($,{children:o?e(ue,{className:c(t)}):e(ue,{onClick:r,className:`${a&&"isActive"} ${c(t)}`,children:t})})}),ue=s.div`
  width: 100%;
  height: 100%;
  line-height: 50px;
  font-size: 20px;
  font-weight: bold;
  border: 1px solid #666666;
  border-radius: 4px;
  text-align: center;
  cursor: pointer;
  transition: outline 0.1s, box-shadow 0.1s;
  &.black {
    color: #eee;
    background: #333;
  }
  &.white {
    background: #fff;
  }
  &.empty {
    font-size: 0;
    background: #ccc;
  }
  &.isActive {
    outline: solid 2px ${u.green};
    box-shadow: 0 0 4px 2px rgba(34, 34, 34, 0.3);
  }
`,pe=i.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,a=[...t];for(;a.length<9;)a.push(0);return e(Qt,{children:a.map((c,d)=>e(G,{num:c,isHide:r?!1:o},d))})}),Qt=s.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,me=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=le(),r=c=>c==="WIN"?"win":c==="LOSE"?"lose":"draw",a=()=>o();return p(Vt,{children:[e(qt,{className:r(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:a,color:"teal"})]})}),Vt=s.div`
  width: 332px;
  min-height: 244px;
  padding: 20px;
  background: #edf2f7;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 6px 4px #33333333;
  text-align: center;
  > .btn {
    width: 100%;
    margin-top: 90px;
  }
`,qt=s.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.win {
    color: ${u.red};
  }
  &.lose {
    color: ${u.blue};
  }
  &.draw {
    color: ${u.gray[1]};
  }
`,ge=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:a}=n,{myInfo:c}=v(),[d,l]=i.exports.useState(!1),[g,h]=i.exports.useState(null);i.exports.useEffect(()=>{l(g!==null)},[g]);const C=A=>h(A),w=()=>{h(null),m.emit("kowloonTactics:selectHand",[c,g])};return p(Kt,{children:[e(en,{className:r?"":"disabed",children:t.map((A,k)=>a?e(G,{num:A,isHide:!0},k):e(G,{num:A,onclick:()=>C(k),selected:g===k&&!0},k))}),r&&o&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:w,color:"teal",isDisabled:!d})]})}),Kt=s.div`
  width: 332px;
  min-height: 244px;
  padding: 20px;
  background: #edf2f7;
  border: 1px solid #666666;
  border-radius: 10px;
  box-shadow: 0 0 6px 4px #33333333;
  text-align: center;
  > .btn {
    width: 100%;
    margin-top: 50px;
  }
`,en=s.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,tn=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return p(nn,{children:[e(he,{className:"red",children:o.map((r,a)=>e("div",{className:r},a))}),e(he,{className:"blue",children:o.map((r,a)=>e("div",{className:r},a))})]})}),nn=s.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,he=s.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 25px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
  &.red > div {
    background: rgb(229 62 62 / 40%);
    border: solid 1px ${u.red};
    border-right: none;
    &.red {
      background: ${u.red};
      box-shadow: 0 0 6px 1px rgb(229 62 62 / 70%);
    }
  }
  &.blue > div {
    background: rgb(49 130 206 / 40%);
    border: solid 1px ${u.blue};
    border-left: none;
    &.blue {
      background: ${u.blue};
      box-shadow: 0 0 6px 1px rgb(49 130 206 / 70%);
    }
  }
`,xe=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return p(on,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(E,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(rn,{children:o.map(a=>e(E,{name:a.name,icon:a.icon},a.id))})]})}),on=s.div`
  position: absolute;
  top: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  &.red {
    left: 0;
    background: #e53e3e66;
    border: 1px solid ${u.red};
  }
  &.blue {
    right: 0;
    background: #3182ce66;
    border: 1px solid ${u.blue};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
  .profile {
    &__img {
      width: 40px;
      height: 40px;
    }
    &__name {
      width: calc(100% - 50px);
      margin-right: 0;
      font-size: 14px;
      text-overflow: clip;
    }
  }
`,rn=s.div``,an=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState({}),[c,d]=i.exports.useState([]),[l,g]=i.exports.useState(""),[h,C]=i.exports.useState("none"),[w,A]=i.exports.useState(!1);i.exports.useEffect(()=>{m.on("common:getCurrentConfig",f=>{a(f),f.redPlayer.id===n.id||f.redSupporter.some(y=>y.id===n.id)?C("red"):(f.bluePlayer.id===n.id||f.blueSupporter.some(y=>y.id===n.id))&&C("blue")}),m.on("kowloonTactics:getData",f=>o(f)),m.on("kowloonTactics:getTurn",f=>g(f)),m.on("kowloonTactics:getJudge",f=>{const y=f[0],b=f[1];d(y),b&&A(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const k=()=>{const f=c.filter(x=>x==="red").length,y=c.filter(x=>x==="blue").length;return f>y?"red":f<y?"blue":"draw"},B=f=>{const y=k();return y==="draw"?"DRAW":y===f?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?p($,{children:[c.length<9&&e(se,{turn:l==="red"?r.redPlayer.name:r.bluePlayer.name}),p(sn,{children:[e(xe,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(xe,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),c.length<9?e(ge,{hands:t.redPlayer.hand,turn:l==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):e(me,{result:B("red")}),p(ln,{children:[e(pe,{hands:t.redPlayer.field,isHide:h!=="red"&&!0,isFinish:w}),e(tn,{judgeArray:c}),e(pe,{hands:t.bluePlayer.field,isHide:h!=="blue"&&!0,isFinish:w})]}),c.length<9?e(ge,{hands:t.bluePlayer.hand,turn:l==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):e(me,{result:B("blue")})]}),e(Zt,{})]}):null}),sn=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,ln=s.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,cn=[{path:"/kowloon_tactics",exact:!1,children:e(an,{})},{path:"/hanabi",exact:!1,children:e(Gt,{})},{path:"/fakeArtist",exact:!1,children:e(ft,{})}],dn=i.exports.memo(()=>e(ke,{children:p(W,{children:[e(S,{exact:!0,path:"/",children:e(Pe,{})}),e(S,{path:"/lobby",children:e(Z,{children:e(X,{children:e(pt,{})})})}),e(S,{path:"/game",render:({match:{url:n}})=>e(W,{children:cn.map(t=>e(S,{exact:t.exact,path:`${n}${t.path}`,children:e(Z,{children:e(X,{children:t.children})})},t.path))})})]})})),un=()=>e(Ee,{children:e(dn,{})});ve.render(e(un,{}),document.getElementById("root"));
