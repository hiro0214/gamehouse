var Ae=Object.defineProperty,Ce=Object.defineProperties;var ye=Object.getOwnPropertyDescriptors;var W=Object.getOwnPropertySymbols;var ke=Object.prototype.hasOwnProperty,we=Object.prototype.propertyIsEnumerable;var J=(n,t,o)=>t in n?Ae(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,H=(n,t)=>{for(var o in t||(t={}))ke.call(t,o)&&J(n,o,t[o]);if(W)for(var o of W(t))we.call(t,o)&&J(n,o,t[o]);return n},z=(n,t)=>Ce(n,ye(t));import{j as P,r as i,s,l as ve,u as M,B as Fe,S as Z,R as S,a as Ee}from"./vendor.2d340bfb.js";const Be=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}};Be();const e=P.exports.jsx,p=P.exports.jsxs,$=P.exports.Fragment,X=i.exports.createContext({}),De=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(X.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},v=()=>i.exports.useContext(X),Q=i.exports.memo(n=>{const{children:t}=n;return e(_e,{children:t})}),_e=s.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,V=i.exports.memo(n=>{const{children:t}=n;return e($e,{children:t})}),$e=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,Ie=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F"],d={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:a}=n;return e(Se,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:a,children:o})});F.defaultProps={color:"green"};const Se=s.button`
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
      background: ${d.red};
    }
    &orange {
      background: ${d.orange};
    }
    &yellow {
      background: ${d.yellow};
    }
    &green {
      background: ${d.green};
    }
    &teal {
      background: ${d.teal};
    }
    &blue {
      background: ${d.blue};
    }
    &cyan {
      background: ${d.cyan};
    }
    &purple {
      background: ${d.purple};
    }
    &pink {
      background: ${d.pink};
    }
    &gray {
      background: ${d.gray[1]};
    }
  }
`,N=i.exports.memo(n=>{const{text:t,size:o}=n;return e(Ne,{className:o&&`heading--${o}`,children:t})});N.defaultProps={size:"1"};const Ne=s.div`
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
`,Le=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return p(He,{className:"textContainer",children:[e(ze,{value:t,placeholder:o,onChange:r}),e(Pe,{})]})}),He=s.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ze=s.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Pe=s.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=ve(),q=()=>{const{setMyInfo:n}=v(),t=()=>{const a=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let u="";for(let c=0;c<a;c++)u+=l[Math.floor(Math.random()*l.length)];return u},o=()=>{const a=151,l=`${Math.floor(Math.random()*a)+1}`;let u;return l.length===1?u=`00${l}`:l.length===2?u=`0${l}`:u=l,u};return{setInfo:i.exports.useCallback((a,l)=>{const u={id:t(),name:a,icon:o(),isAdmin:l};n(u),a==="$clear"&&m.emit("common:clearUser"),m.emit("common:newUser",u)},[]),randomIcon:o}},Me=()=>{const n=M(),{setInfo:t}=q();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},Oe=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:a}=Me();return e(je,{children:p(Re,{children:[e(N,{text:"Games House"}),e(Le,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{t(c.target.value),c.target.value?r(!1):r(!0)}}),e(F,{label:"Join the game!",isDisabled:o,onclick:()=>a(n)})]})})}),je=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Re=s.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${d.border};
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(160, 174, 192, 0.6);
  .textContainer {
    margin-bottom: 40px;
  }
`,Ge=i.exports.memo(()=>null),O=i.exports.memo(n=>{const{children:t,options:o,value:r,onChange:a,disabled:l,hdg:u}=n;return p(Ue,{children:[e(Ye,{children:u}),p(Te,{value:r,onChange:a,disabled:!l,children:[t,o.map(c=>e("option",{value:c.key,children:c.value},c.value))]})]})}),Ue=s.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Te=s.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${d.gray[1]};
  border-radius: 4px;
`,Ye=s.div`
  font-size: 14px;
  font-weight: bold;
`,We=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Je=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Ze=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState(null),[r,a]=i.exports.useState(null);i.exports.useEffect(()=>{m.on("hanabi:updateConfig",c=>{o(c.colorNum),a(c.handNum)}),m.emit("hanabi:getConfig")},[]);const l=c=>{m.emit("hanabi:setColorNum",c.target.options[c.target.selectedIndex].value)},u=c=>{m.emit("hanabi:setHandNum",c.target.options[c.target.selectedIndex].value)};return p(Xe,{children:[e(K,{children:e(O,{options:We,hdg:"\u8272\u306E\u6570",value:t||"",onChange:l,disabled:n.isAdmin})}),e(K,{style:{marginTop:"10px"},children:e(O,{options:Je,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:u,disabled:n.isAdmin})})]})}),Xe=s.div``,K=s.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,B=i.exports.memo(n=>{const{name:t,icon:o,color:r,editIcon:a,editName:l}=n,{myInfo:u,setMyInfo:c}=v(),[g,h]=i.exports.useState(!1),[x,k]=i.exports.useState(u.name),{randomIcon:C}=q(),w=()=>{c(z(H({},u),{icon:C()}))},E=()=>{h(!g),g&&c(z(H({},u),{name:x}))},A=y=>k(y.target.value);return i.exports.useEffect(()=>{m.emit("common:updateInfo",u)},[u]),p(Qe,{className:"profile",style:{borderColor:r},children:[p(Ve,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),a&&e(qe,{onClick:w,children:a})]}),g?e(et,{type:"text",value:x,onChange:A}):e(Ke,{className:"profile__name",children:t}),l&&e(tt,{onClick:E,className:g?"isEdit":"",children:l})]})}),Qe=s.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${d.gray[0]};
  border: 2px solid ${d.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Ve=s.div`
  position: relative;
  width: 60px;
  height: 60px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${d.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,qe=s.button`
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
  border: 1px solid ${d.border};
  border-radius: 50%;
`,Ke=s.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,et=s.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${d.gray[1]};
`,tt=s.button`
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M506.53%2C88.263L423.737%2C5.47c-7.294-7.293-19.118-7.293-26.411%2C0L47.776%2C341.176%0A%09%09c-2.168%2C2.168-3.769%2C4.836-4.661%2C7.768L0.836%2C487.86c-4.35%2C14.293%2C9.011%2C27.654%2C23.304%2C23.305l143.382-43.639h0L506.53%2C114.675%0A%09%09C513.823%2C107.381%2C513.823%2C95.556%2C506.53%2C88.263z%20M63.524%2C465.077l-16.584-16.584l24.373-80.107l47.004%2C25.29l25.296%2C47.012%0A%09%09L63.524%2C465.077z%20M453.986%2C75.041L156.172%2C374.747l-18.919-18.918l299.72-297.828l17.013%2C17.012%0A%09%09C453.986%2C75.024%2C453.986%2C75.03%2C453.986%2C75.041z%22%20style%3D%22fill%3A%20rgb(75%2C%2075%2C%2075)%3B%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid ${d.border};
  border-radius: 50%;
  &.isEdit {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Ctitle%3E843_ch_f%3C%2Ftitle%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22none%22%2F%3E%3Cpolyline%20points%3D%2212%2028%2020%2036%2038%2018%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%224%22%2F%3E%3C%2Fsvg%3E');
  }
`,D="kowloonTactics",nt=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{m.on(`${D}:updateConfig`,c=>{o(c)}),m.emit(`${D}:updateConfig`)},[]);const r=()=>m.emit(`${D}:setRedPlayer`,n),a=()=>m.emit(`${D}:setBluePlayer`,n),l=()=>m.emit(`${D}:setRedSupporter`,n),u=()=>m.emit(`${D}:setBlueSupporter`,n);return p(ot,{children:[p(ee,{className:"red",children:[p(te,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(B,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),p(ne,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(c=>c.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),e(oe,{children:t.redSupporter.map(c=>e(B,{name:c.name,icon:c.icon},c.id))})]})]}),p(ee,{className:"blue",children:[p(te,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(B,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"})]}),p(ne,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(c=>c.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:u,color:"yellow"}),e(oe,{children:t.blueSupporter.map(c=>e(B,{name:c.name,icon:c.icon},c.id))})]})]})]})}),ot=s.div`
  display: flex;
  justify-content: space-between;
`,ee=s.div`
  width: calc(100% / 2 - 10px);
  min-height: 350px;
  padding: 10px;
  border: 1px solid ${d.border};
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
`,te=s.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
  > .btn {
    width: 100%;
    font-size: 14px;
    color: ${d.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,ne=s.div`
  padding-top: 10px;
  > .btn {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${d.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,oe=s.div``,rt=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(nt,{}));break;case"Hanabi":t(e(Ze,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(Ge,{}));break}},[]);return{currentConfig:n,setConfig:o}},it=()=>{const n=M();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break}},[])}},re=[];Ie.map(n=>re.push({key:n,value:n}));const at=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=v(),{gameStart:r}=it(),{currentConfig:a,setConfig:l}=rt(),u=g=>{const h=g.target.value;h.indexOf("--")===-1?m.emit("common:setCurrentGame",h):m.emit("common:setCurrentGame",null)},c=()=>m.emit("common:gameStart");return i.exports.useEffect(()=>{m.on("common:getCurrentGame",g=>{t(g),l(g)}),m.on("common:setCurrentGame",g=>{t(g),l(g)}),m.on("common:gameStart",g=>r(g)),m.emit("common:getCurrentGame")},[]),p(st,{children:[e(N,{text:"Setting",size:"2"}),e(lt,{children:e(O,{options:re,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:u,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(ct,{children:n&&p(dt,{children:[a,o.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),st=s.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,lt=s.div`
  display: flex;
  justify-content: center;
`,ct=s.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,dt=s.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${d.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
  > .btn {
    display: block;
    margin: 30px auto 0;
  }
`,ut=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=v();return p(pt,{children:[e(N,{text:"Player",size:"2"}),e(mt,{children:t.map(r=>e(B,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),pt=s.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,mt=s.ul`
  height: calc(100% - 71px);
  margin-right: -5px;
  padding-right: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${d.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`,gt=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",o=>t(o))},[]),p(ht,{children:[e(ut,{userList:n}),e(at,{})]})}),ht=s.div`
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
`;let _=!1,j=0,R=0;const xt=i.exports.memo(n=>{const{context:t,setCanvas:o,color:r,disable:a,status:l,isFake:u}=n;return i.exports.useEffect(()=>{const c=document.getElementById("canvas"),g=c.getContext("2d");g.lineCap="round",g.lineWidth=4,g.strokeStyle=r,c.addEventListener("mousedown",x=>{_=!0,j=x.offsetX,R=x.offsetY}),c.addEventListener("mousemove",x=>{if(!_)return;const k=x.offsetX,C=x.offsetY;h(g,j,R,k,C),j=k,R=C}),c.addEventListener("mouseout",()=>{!_||(_=!1,o(c))}),c.addEventListener("mouseup",()=>{!_||(_=!1,o(c))});const h=(x,k,C,w,E)=>{x.beginPath(),x.moveTo(k,C),x.lineTo(w,E),x.stroke()}},[]),i.exports.useEffect(()=>{const g=document.getElementById("canvas").getContext("2d");if(t.length){const h=new Image;h.src=t,h.onload=()=>g.drawImage(h,0,0)}},[t]),p(bt,{children:[e(ft,{id:"canvas",width:750,height:500,className:a||l!=="game"?"disable":""}),e(At,{className:l==="theme"?"is-active":"",children:p("p",{children:["\u304A\u984C\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044",e("br",{}),"10\u79D2\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u958B\u59CB\u3057\u307E\u3059"]})}),e(ie,{className:l==="title"?"is-active":"",children:u?p("p",{children:["\u304A\u984C\u3092\u77E5\u3063\u3066\u3044\u308B\u30D5\u30EA\u3092\u3057\u3066",e("br",{}),"\u30D0\u30EC\u306A\u3044\u3088\u3046\u306B\u7D75\u3092\u63CF\u3053\u3046"]}):p("p",{children:["\u5354\u529B\u3057\u3066\u7D75\u3092\u63CF\u3053\u3046",e("br",{}),"\u305F\u3060\u3057\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})}),e(ie,{style:{animationDelay:"1s"},className:l==="vote"?"is-active":"",children:p("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u601D\u3046\u4EBA\u306B",e("br",{}),"\u6295\u7968\u3057\u3066\u304F\u3060\u3055\u3044"]})})]})}),bt=s.div`
  position: relative;
  width: 750px;
  height: 100%;
`,ft=s.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`,At=s.div`
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
    font-size: 18px;
    font-weight: bold;
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
`,ie=s.div`
  position: absolute;
  top: 50%;
  left: 3px;
  right: 0;
  transform: translateY(-50%) scale(0.8);
  width: 80%;
  padding: 30px 0;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #ffff00;
  background: ${d.teal};
  border-radius: 60px;
  opacity: 0;
  pointer-events: none;
  text-align: center;
  animation-duration: 4.8s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  &.is-active {
    animation-name: fadeIn;
  }
  @keyframes fadeIn {
    5%,
    95% {
      opacity: 1;
      transform: translateY(-50%) scale(1);
    }
    100% {
      opacity: 0;
      transform: translateY(-50%) scale(0.8);
    }
  }
`,G=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),p(Ct,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),Ct=s.div`
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
`,L="fakeArtist",yt=i.exports.memo(()=>{const[n,t]=i.exports.useState({}),[o,r]=i.exports.useState(null),{myInfo:a}=v(),[l,u]=i.exports.useState("");i.exports.useEffect(()=>{m.on(`${L}:getData`,h=>t(h)),m.on(`${L}:vote`,()=>u("vote")),m.emit(`${L}:getData`),setTimeout(()=>u("theme"),500),setTimeout(()=>u("title"),10500),setTimeout(()=>u("game"),16e3)},[]);const c=()=>{const h=o==null?void 0:o.toDataURL();m.emit(`${L}:draw`,h),r(null)},g=()=>{const h=o==null?void 0:o.getContext("2d");if(h.clearRect(0,0,750,500),n.context.length){const x=new Image;x.src=n.context,x.onload=()=>h.drawImage(x,0,0)}r(null)};return Object.keys(n).length?p(kt,{children:[l==="game"&&e(G,{turn:n.players[n.turn].name}),l==="game"&&(o?p(wt,{children:[e("p",{children:"\u3053\u308C\u3067\u3044\u3044?"}),e("button",{style:{backgroundColor:d.green[0]},onClick:c,children:"\u66F8\u3044\u305F\uFF01"}),e("button",{style:{backgroundColor:d.gray[1]},onClick:g,children:"\u66F8\u304D\u76F4\u3059\uFF01"})]}):n.players[n.fakeMan].id===a.id?p(U,{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044",e("br",{}),"\u30D0\u30EC\u3066\u3082\u4F55\u3092\u63CF\u3044\u3066\u3044\u308B\u304B\u5F53\u3066\u308C\u3070\u52DD\u3061"]}):p(U,{children:["\u3053\u306E\u4E2D\u306B\u4E00\u4EBA\u304A\u984C\u3092\u77E5\u3089\u306A\u3044\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u3044\u308B",e("br",{}),"\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})),l==="vote"&&e(U,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F\u8AB0\u3060\uFF1F"}),p(vt,{children:[e(xt,{context:n.context,setCanvas:r,color:n.colors[n.players.findIndex(h=>h.id===a.id)],disable:!!(o||n.players[n.turn].id!==a.id),status:l,isFake:n.players[n.fakeMan].id===a.id}),p(Ft,{children:[p(ae,{children:[e("span",{children:"\u4ECA\u56DE\u306E\u30C6\u30FC\u30DE"}),e(se,{children:n.category})]}),p(ae,{style:{marginTop:"10px"},children:[e("span",{children:"\u4ECA\u56DE\u306E\u304A\u984C"}),e(se,{children:n.players[n.fakeMan].id!==a.id?n.theme:"?"})]}),e(Et,{children:n.players.map((h,x)=>e(B,{name:h.name,icon:h.icon,color:n.colors[x]},h.id))})]})]})]}):null}),kt=s.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;
`,wt=s.div`
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
`,U=s.p`
  position: absolute;
  left: 0;
  right: 0;
  top: -100px;
  width: 400px;
  margin: 0 auto;
  padding: 10px 0;
  font-weight: bold;
  color: #fff;
  background: #000000b2;
  border-radius: 34px;
  text-align: center;
  transform: scale(0.8);
  animation: scaleIn 0.2s forwards;
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
`,vt=s.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
`,Ft=s.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`,ae=s.div`
  padding-left: 10px;
  padding-right: 10px;
  background: #ffedab;
  border: 2px solid ${d.border};
  border-radius: 4px;
  text-align: center;
  > span {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid ${d.gray[1]};
  }
`,se=s.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`,Et=s.ul`
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
`,Bt=i.exports.memo(n=>{const{cemetery:t}=n;return e(Dt,{children:t.map(o=>e(_t,{className:o.color,children:o.num.map((r,a)=>e($t,{children:r},a))},o.color))})}),Dt=s.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,_t=s.div`
  display: flex;
  min-height: 30px;
  font-size: 20px;
  font-weight: bold;
  &.red {
    color: ${d.red};
  }
  &.blue {
    color: ${d.blue};
  }
  &.yellow {
    color: ${d.yellow};
  }
  &.green {
    color: ${d.green};
  }
  &.white {
    color: #fff;
  }
  &.purple {
    color: ${d.purple};
  }
`,$t=s.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,le=i.exports.memo(n=>{const{color:t,num:o,colorHint:r,numHint:a,isReverse:l,onclick:u}=n,c=()=>{let g="";return r&&(g+=`hint_${t}`),a&&(g=g===""?`hint_${o}`:`${g} hint_${o}`),g};return e($,{children:l?e(ce,{className:`reverse hand ${(r||a)&&c()}`,onClick:u}):e(ce,{className:`${t} hand ${(r||a)&&c()}`,onClick:u,children:o!==0&&o})})}),ce=s.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${d.gray[1]};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &.red {
    color: ${d.red};
    text-shadow: 1px 1px 0px #8d0000;
  }
  &.blue {
    color: ${d.blue};
    text-shadow: 1px 1px 0px #004b92;
  }
  &.yellow {
    color: ${d.yellow};
    text-shadow: 1px 1px 0px #9c7a00;
  }
  &.green {
    color: ${d.green};
    text-shadow: 1px 1px 0px #007436;
  }
  &.white {
    color: #fff;
    text-shadow: 1px 1px 0px #333;
  }
  &.purple {
    color: ${d.purple};
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
      color: ${d.black};
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
`,It=i.exports.memo(n=>{const{deck:t,fields:o}=n;return p(St,{children:[e(Nt,{children:t}),e(Lt,{children:o.map((r,a)=>e(le,{color:r.color,num:r.num},a))})]})}),St=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,Nt=s.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #becef1;
  border: 3px solid ${d.gray[1]};
  border-radius: 8px;
  text-align: center;
`,Lt=s.div`
  display: flex;
  .hand {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.red {
      border: 3px solid ${d.red};
    }
    &.blue {
      border: 3px solid ${d.blue};
    }
    &.yellow {
      border: 3px solid ${d.yellow};
    }
    &.green {
      border: 3px solid ${d.green};
    }
    &.white {
      border: 3px solid #fff;
    }
    &.purple {
      border: 3px solid ${d.purple};
    }
  }
`,Ht=i.exports.memo(n=>{const{hint:t}=n;return e(zt,{children:[...Array(t)].map(o=>e(Pt,{},o))})}),zt=s.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,Pt=s.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,Mt=i.exports.memo(()=>e(Ot,{children:p("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),Ot=s.div`
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
`,jt=i.exports.memo(n=>{const{name:t,hands:o,onclick:r,isFinish:a}=n,{myInfo:l}=v();return p(Rt,{className:"player",children:[e(Gt,{children:o.map((u,c)=>e(le,{color:u.color,num:u.num,colorHint:u.colorHint,numHint:u.numHint,isReverse:a?!1:t===l.name,onclick:r},c))}),p(Ut,{children:["\u27A1\uFE0E ",t]})]})}),Rt=s.div`
  min-width: 310px;
`,Gt=s.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,Ut=s.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,de=()=>{const n=M();return i.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},Tt=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState(null),[l,u]=i.exports.useState(!1),[c,g]=i.exports.useState(!1),{toLobby:h}=de();i.exports.useEffect(()=>{m.on("hanabi:getData",(f,b)=>{b==="miss"||b==="gameover"?(u(!0),setTimeout(()=>{b==="gameover"&&g(!0),u(!1),o(f)},2400)):(b==="finish"&&g(!0),o(f))}),m.emit("hanabi:getData")},[]);const x=f=>{var I;const b=f.currentTarget;a(b),(I=document.querySelector(".hand.selected"))==null||I.classList.remove("selected"),b.classList.add("selected")},k=()=>`${(r==null?void 0:r.getBoundingClientRect().top)-100}px`,C=()=>{var Y;if(!r)return;const f=[].slice.call((Y=r.parentElement)==null?void 0:Y.childNodes).indexOf(r),b=r.closest(".player"),I=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(I).indexOf(b),index:f}},w=()=>{var b;const f=C();m.emit("hanabi:playHand",f),a(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},E=()=>{var b;const f=C();m.emit("hanabi:discardHand",f),a(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},A=()=>{var b;const f=C();m.emit("hanabi:colorHint",f),a(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},y=()=>{var b;const f=C();m.emit("hanabi:numHint",f),a(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")};return Object.keys(t).length?p($,{children:[p(Yt,{className:c||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[c?e(ue,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?p(ue,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(G,{turn:t.players[t.turn].player.name}),p(Wt,{children:[e(It,{deck:t.deck.length,fields:t.fields}),p(Jt,{children:[p(Zt,{children:[p("p",{children:["SCORE : ",t.score]}),p("p",{children:["MISS : ",t.miss,"/3"]})]}),e(Ht,{hint:t.hint})]}),e(Bt,{cemetery:t.cemetery})]}),p(Xt,{className:"playerarea",children:[t.players.map(f=>e(jt,{name:f.player.name,hands:f.hands,onclick:x,isFinish:c},f.player.name)),c&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:h,color:"teal"})}),!c&&r&&r.className.indexOf("reverse")!==-1&&p(pe,{style:{top:k()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:w,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:E,children:"\u6368\u3066\u308B"})]}),!c&&r&&r.className.indexOf("reverse")===-1&&p(pe,{style:{top:k()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:A,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:y,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),l&&e(Mt,{})]}):null}),Yt=s.div`
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
`,ue=s.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${d.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,Wt=s.div``,Jt=s.div`
  display: flex;
`,Zt=s.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,Xt=s.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,pe=s.div`
  position: absolute;
  right: calc(100% + 10px);
  z-index: 5;
  width: 200px;
  padding: 16px 20px;
  background: #fff;
  border: 2px solid ${d.border};
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
    background: ${d.blue};
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,Qt=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e($,{children:n&&p(Vt,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),Vt=s.div`
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
`,T=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:a}=n,l=u=>u===0?"empty":u%2==0?"black":"white";return e($,{children:o?e(me,{className:l(t)}):e(me,{onClick:r,className:`${a&&"isActive"} ${l(t)}`,children:t})})}),me=s.div`
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
    outline: solid 2px ${d.green};
    box-shadow: 0 0 4px 2px rgba(34, 34, 34, 0.3);
  }
`,ge=i.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,a=[...t];for(;a.length<9;)a.push(0);return e(qt,{children:a.map((l,u)=>e(T,{num:l,isHide:r?!1:o},u))})}),qt=s.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,he=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=de(),r=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",a=()=>o();return p(Kt,{children:[e(en,{className:r(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:a,color:"teal"})]})}),Kt=s.div`
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
`,en=s.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.win {
    color: ${d.red};
  }
  &.lose {
    color: ${d.blue};
  }
  &.draw {
    color: ${d.gray[1]};
  }
`,xe=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:a}=n,{myInfo:l}=v(),[u,c]=i.exports.useState(!1),[g,h]=i.exports.useState(null);i.exports.useEffect(()=>{c(g!==null)},[g]);const x=C=>h(C),k=()=>{h(null),m.emit("kowloonTactics:selectHand",[l,g])};return p(tn,{children:[e(nn,{className:r?"":"disabed",children:t.map((C,w)=>a?e(T,{num:C,isHide:!0},w):e(T,{num:C,onclick:()=>x(w),selected:g===w&&!0},w))}),r&&o&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:k,color:"teal",isDisabled:!u})]})}),tn=s.div`
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
`,nn=s.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,on=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return p(rn,{children:[e(be,{className:"red",children:o.map((r,a)=>e("div",{className:r},a))}),e(be,{className:"blue",children:o.map((r,a)=>e("div",{className:r},a))})]})}),rn=s.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,be=s.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 25px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
  &.red > div {
    background: rgb(229 62 62 / 40%);
    border: solid 1px ${d.red};
    border-right: none;
    &.red {
      background: ${d.red};
      box-shadow: 0 0 6px 1px rgb(229 62 62 / 70%);
    }
  }
  &.blue > div {
    background: rgb(49 130 206 / 40%);
    border: solid 1px ${d.blue};
    border-left: none;
    &.blue {
      background: ${d.blue};
      box-shadow: 0 0 6px 1px rgb(49 130 206 / 70%);
    }
  }
`,fe=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return p(an,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(B,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(sn,{children:o.map(a=>e(B,{name:a.name,icon:a.icon},a.id))})]})}),an=s.div`
  position: absolute;
  top: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  &.red {
    left: 0;
    background: #e53e3e66;
    border: 1px solid ${d.red};
  }
  &.blue {
    right: 0;
    background: #3182ce66;
    border: 1px solid ${d.blue};
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
`,sn=s.div``,ln=i.exports.memo(()=>{const{myInfo:n}=v(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState({}),[l,u]=i.exports.useState([]),[c,g]=i.exports.useState(""),[h,x]=i.exports.useState("none"),[k,C]=i.exports.useState(!1);i.exports.useEffect(()=>{m.on("common:getCurrentConfig",A=>{a(A),A.redPlayer.id===n.id||A.redSupporter.some(y=>y.id===n.id)?x("red"):(A.bluePlayer.id===n.id||A.blueSupporter.some(y=>y.id===n.id))&&x("blue")}),m.on("kowloonTactics:getData",A=>o(A)),m.on("kowloonTactics:getTurn",A=>g(A)),m.on("kowloonTactics:getJudge",A=>{const y=A[0],f=A[1];u(y),f&&C(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const w=()=>{const A=l.filter(b=>b==="red").length,y=l.filter(b=>b==="blue").length;return A>y?"red":A<y?"blue":"draw"},E=A=>{const y=w();return y==="draw"?"DRAW":y===A?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?p($,{children:[l.length<9&&e(G,{turn:c==="red"?r.redPlayer.name:r.bluePlayer.name}),p(cn,{children:[e(fe,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(fe,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),l.length<9?e(xe,{hands:t.redPlayer.hand,turn:c==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):e(he,{result:E("red")}),p(dn,{children:[e(ge,{hands:t.redPlayer.field,isHide:h!=="red"&&!0,isFinish:k}),e(on,{judgeArray:l}),e(ge,{hands:t.bluePlayer.field,isHide:h!=="blue"&&!0,isFinish:k})]}),l.length<9?e(xe,{hands:t.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):e(he,{result:E("blue")})]}),e(Qt,{})]}):null}),cn=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,dn=s.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,un=[{path:"/kowloon_tactics",exact:!1,children:e(ln,{})},{path:"/hanabi",exact:!1,children:e(Tt,{})},{path:"/fakeArtist",exact:!1,children:e(yt,{})}],pn=i.exports.memo(()=>e(Fe,{children:p(Z,{children:[e(S,{exact:!0,path:"/",children:e(Oe,{})}),e(S,{path:"/lobby",children:e(Q,{children:e(V,{children:e(gt,{})})})}),e(S,{path:"/game",render:({match:{url:n}})=>e(Z,{children:un.map(t=>e(S,{exact:t.exact,path:`${n}${t.path}`,children:e(Q,{children:e(V,{children:t.children})})},t.path))})})]})})),mn=()=>e(De,{children:e(pn,{})});Ee.render(e(mn,{}),document.getElementById("root"));
