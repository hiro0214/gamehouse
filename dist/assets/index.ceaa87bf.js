var _e=Object.defineProperty,Ie=Object.defineProperties;var Ne=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Se=Object.prototype.hasOwnProperty,Le=Object.prototype.propertyIsEnumerable;var te=(n,t,o)=>t in n?_e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,Y=(n,t)=>{for(var o in t||(t={}))Se.call(t,o)&&te(n,o,t[o]);if(ee)for(var o of ee(t))Le.call(t,o)&&te(n,o,t[o]);return n},W=(n,t)=>Ie(n,Ne(t));import{j as J,r as s,s as i,l as He,u as z,B as ze,S as ne,R as P,a as Pe}from"./vendor.2d340bfb.js";const Me=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}};Me();const e=J.exports.jsx,d=J.exports.jsxs,E=J.exports.Fragment,oe=s.exports.createContext({}),je=n=>{const{children:t}=n,[o,r]=s.exports.useState({});return e(oe.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},B=()=>s.exports.useContext(oe),re=s.exports.memo(n=>{const{children:t}=n;return e(Te,{children:t})}),Te=i.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,ie=s.exports.memo(n=>{const{children:t}=n;return e(Oe,{children:t})}),Oe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,Re=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F","\u30B6\u30FB\u30B2\u30FC\u30E0"],p={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=s.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:a}=n;return e(Ge,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:a,children:o})});F.defaultProps={color:"green"};const Ge=i.button`
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
      background: ${p.red};
    }
    &orange {
      background: ${p.orange};
    }
    &yellow {
      background: ${p.yellow};
    }
    &green {
      background: ${p.green};
    }
    &teal {
      background: ${p.teal};
    }
    &blue {
      background: ${p.blue};
    }
    &cyan {
      background: ${p.cyan};
    }
    &purple {
      background: ${p.purple};
    }
    &pink {
      background: ${p.pink};
    }
    &gray {
      background: ${p.gray[1]};
    }
  }
`,M=s.exports.memo(n=>{const{text:t,size:o}=n;return e(Ue,{className:o&&`heading--${o}`,children:t})});M.defaultProps={size:"1"};const Ue=i.div`
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
`,Ye=s.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return d(We,{className:"textContainer",children:[e(Je,{value:t,placeholder:o,onChange:r}),e(Ze,{})]})}),We=i.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Je=i.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${p.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Ze=i.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=He(),ae=()=>{const{setMyInfo:n}=B(),t=()=>{const a=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let c="";for(let u=0;u<a;u++)c+=l[Math.floor(Math.random()*l.length)];return c},o=()=>{const a=151,l=`${Math.floor(Math.random()*a)+1}`;let c;return l.length===1?c=`00${l}`:l.length===2?c=`0${l}`:c=l,c};return{setInfo:s.exports.useCallback((a,l)=>{const c={id:t(),name:a,icon:o(),isAdmin:l};n(c),m.emit("common:newUser",c)},[]),randomIcon:o}},Xe=()=>{const n=z(),{setInfo:t}=ae();return{enter:s.exports.useCallback(r=>{r==="$clear"?m.emit("common:clearUser"):(t(r==="admin"?"\u3044\u308F\u3082\u3068":r,r==="admin"),n.push("/lobby"))},[])}},Ve=s.exports.memo(()=>{const[n,t]=s.exports.useState(""),[o,r]=s.exports.useState(!0),{enter:a}=Xe();return e(Qe,{children:d(qe,{children:[e(M,{text:"Games House"}),e(Ye,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:u=>{t(u.target.value),u.target.value?r(!1):r(!0)}}),e(F,{label:"Join the game!",isDisabled:o,onclick:()=>a(n)})]})})}),Qe=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,qe=i.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${p.border};
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(160, 174, 192, 0.6);
  .textContainer {
    margin-bottom: 40px;
  }
`,Ke=s.exports.memo(()=>null),Z=s.exports.memo(n=>{const{children:t,options:o,value:r,onChange:a,disabled:l,hdg:c}=n;return d(et,{children:[e(nt,{children:c}),d(tt,{value:r,onChange:a,disabled:!l,children:[t,o.map(u=>e("option",{value:u.key,children:u.value},u.value))]})]})}),et=i.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,tt=i.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${p.gray[1]};
  border-radius: 4px;
`,nt=i.div`
  font-size: 14px;
  font-weight: bold;
`,ot=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],rt=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],it=s.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=s.exports.useState(null),[r,a]=s.exports.useState(null);s.exports.useEffect(()=>{m.on("hanabi:updateConfig",u=>{o(u.colorNum),a(u.handNum)}),m.emit("hanabi:getConfig")},[]);const l=u=>{m.emit("hanabi:setColorNum",u.target.options[u.target.selectedIndex].value)},c=u=>{m.emit("hanabi:setHandNum",u.target.options[u.target.selectedIndex].value)};return d(at,{children:[e(se,{children:e(Z,{options:ot,hdg:"\u8272\u306E\u6570",value:t||"",onChange:l,disabled:n.isAdmin})}),e(se,{style:{marginTop:"10px"},children:e(Z,{options:rt,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:c,disabled:n.isAdmin})})]})}),at=i.div``,se=i.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,$=s.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:a}=n,{myInfo:l,setMyInfo:c}=B(),[u,h]=s.exports.useState(!1),[x,k]=s.exports.useState(l.name),{randomIcon:y}=ae(),b=()=>{c(W(Y({},l),{icon:y()}))},w=()=>{h(!u),u&&c(W(Y({},l),{name:x}))},g=f=>k(f.target.value);return s.exports.useEffect(()=>{m.emit("common:updateInfo",l)},[l]),d(st,{className:"profile",children:[d(lt,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(dt,{onClick:b,children:r})]}),u?e(ut,{type:"text",value:x,onChange:g}):e(ct,{className:"profile__name",children:t}),a&&e(pt,{onClick:w,className:u?"isEdit":"",children:a})]})}),st=i.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${p.gray[0]};
  border: 2px solid ${p.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,lt=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${p.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,dt=i.button`
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
  border: 1px solid ${p.border};
  border-radius: 50%;
`,ct=i.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,ut=i.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${p.gray[1]};
`,pt=i.button`
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M506.53%2C88.263L423.737%2C5.47c-7.294-7.293-19.118-7.293-26.411%2C0L47.776%2C341.176%0A%09%09c-2.168%2C2.168-3.769%2C4.836-4.661%2C7.768L0.836%2C487.86c-4.35%2C14.293%2C9.011%2C27.654%2C23.304%2C23.305l143.382-43.639h0L506.53%2C114.675%0A%09%09C513.823%2C107.381%2C513.823%2C95.556%2C506.53%2C88.263z%20M63.524%2C465.077l-16.584-16.584l24.373-80.107l47.004%2C25.29l25.296%2C47.012%0A%09%09L63.524%2C465.077z%20M453.986%2C75.041L156.172%2C374.747l-18.919-18.918l299.72-297.828l17.013%2C17.012%0A%09%09C453.986%2C75.024%2C453.986%2C75.03%2C453.986%2C75.041z%22%20style%3D%22fill%3A%20rgb(75%2C%2075%2C%2075)%3B%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid ${p.border};
  border-radius: 50%;
  &.isEdit {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Ctitle%3E843_ch_f%3C%2Ftitle%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22none%22%2F%3E%3Cpolyline%20points%3D%2212%2028%2020%2036%2038%2018%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%224%22%2F%3E%3C%2Fsvg%3E');
  }
`,I="kowloonTactics",mt=s.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=s.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});s.exports.useEffect(()=>{m.on(`${I}:updateConfig`,u=>{o(u)}),m.emit(`${I}:updateConfig`)},[]);const r=()=>m.emit(`${I}:setRedPlayer`,n),a=()=>m.emit(`${I}:setBluePlayer`,n),l=()=>m.emit(`${I}:setRedSupporter`,n),c=()=>m.emit(`${I}:setBlueSupporter`,n);return d(ht,{children:[d(le,{className:"red",children:[d(de,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e($,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),d(ce,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),e(ue,{children:t.redSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]}),d(le,{className:"blue",children:[d(de,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e($,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"})]}),d(ce,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:c,color:"yellow"}),e(ue,{children:t.blueSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]})]})}),ht=i.div`
  display: flex;
  justify-content: space-between;
`,le=i.div`
  width: calc(100% / 2 - 10px);
  min-height: 350px;
  padding: 10px;
  border: 1px solid ${p.border};
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
`,de=i.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
  > .btn {
    width: 100%;
    font-size: 14px;
    color: ${p.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,ce=i.div`
  padding-top: 10px;
  > .btn {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${p.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,ue=i.div``,gt=s.exports.memo(()=>null),xt=()=>{const[n,t]=s.exports.useState(null),o=s.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(mt,{}));break;case"Hanabi":t(e(it,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(Ke,{}));break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":t(e(gt,{}));break}},[]);return{currentConfig:n,setConfig:o}},ft=()=>{const n=z();return{gameStart:s.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":n.push("/game/THE-Game");break}},[])}},pe=[];Re.map(n=>pe.push({key:n,value:n}));const bt=s.exports.memo(()=>{const[n,t]=s.exports.useState(null),{myInfo:o}=B(),{gameStart:r}=ft(),{currentConfig:a,setConfig:l}=xt(),c=h=>{const x=h.target.value;x.indexOf("--")===-1?m.emit("common:setCurrentGame",x):m.emit("common:setCurrentGame",null)},u=()=>m.emit("common:gameStart");return s.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),l(h)}),m.on("common:setCurrentGame",h=>{t(h),l(h)}),m.on("common:gameStart",h=>r(h)),m.emit("common:getCurrentGame")},[]),d(yt,{children:[e(M,{text:"Setting",size:"2"}),e(Ct,{children:e(Z,{options:pe,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:c,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(At,{children:n&&d(wt,{children:[a,o.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:u,color:"blue"})]})})]})}),yt=i.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ct=i.div`
  display: flex;
  justify-content: center;
`,At=i.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,wt=i.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${p.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
  > .btn {
    display: block;
    margin: 30px auto 0;
  }
`,kt=s.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=B();return d(vt,{children:[e(M,{text:"Player",size:"2"}),e(Bt,{children:t.map(r=>e($,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),vt=i.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Bt=i.ul`
  height: calc(100% - 71px);
  margin-right: -5px;
  padding-right: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${p.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`,Ft=s.exports.memo(()=>{const[n,t]=s.exports.useState([]),o=z();return s.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",r=>t(r)),m.on("common:toTop",()=>o.push("/"))},[]),d(Et,{children:[e(kt,{userList:n}),e(bt,{})]})}),Et=i.div`
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
`;let N=!1,X=0,V=0;const Dt=s.exports.memo(n=>{const{gameData:t,setCanvas:o,color:r,disable:a,status:l,isFake:c,onclickAnswer:u}=n;return s.exports.useEffect(()=>{const h=document.getElementById("canvas"),x=h.getContext("2d");x.lineCap="round",x.lineWidth=4,x.strokeStyle=r,h.addEventListener("mousedown",y=>{N=!0,X=y.offsetX,V=y.offsetY}),h.addEventListener("mousemove",y=>{if(!N)return;const b=y.offsetX,w=y.offsetY;k(x,X,V,b,w),X=b,V=w}),h.addEventListener("mouseout",()=>{!N||(N=!1,o(h))}),h.addEventListener("mouseup",()=>{!N||(N=!1,o(h))});const k=(y,b,w,g,f)=>{y.beginPath(),y.moveTo(b,w),y.lineTo(g,f),y.stroke()}},[]),s.exports.useEffect(()=>{const x=document.getElementById("canvas").getContext("2d");if(t.context.length){const k=new Image;k.src=t.context,k.onload=()=>x.drawImage(k,0,0)}},[t.context]),d($t,{children:[e(_t,{id:"canvas",width:750,height:500,className:a||l!=="game"?"disable":""}),e(It,{className:l==="theme"?"is-active":"",children:d("p",{children:["\u304A\u984C\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044",e("br",{}),"10\u79D2\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u958B\u59CB\u3057\u307E\u3059"]})}),e(S,{className:l==="title"?"is-active":"",children:c?d("p",{children:["\u304A\u984C\u3092\u77E5\u3063\u3066\u3044\u308B\u30D5\u30EA\u3092\u3057\u3066",e("br",{}),"\u30D0\u30EC\u306A\u3044\u3088\u3046\u306B\u7D75\u3092\u63CF\u3053\u3046"]}):d("p",{children:["\u5354\u529B\u3057\u3066\u7D75\u3092\u63CF\u3053\u3046",e("br",{}),"\u305F\u3060\u3057\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})}),e(S,{style:{animationDelay:"1s"},className:l==="vote"?"is-active":"",children:d("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u601D\u3046\u4EBA\u306B",e("br",{}),"\u6295\u7968\u3057\u3066\u304F\u3060\u3055\u3044"]})}),l==="voted"&&d(E,{children:[e(S,{className:l==="voted"?"is-active":"",children:"\u6295\u7968\u7D50\u679C\u767A\u8868"}),d(Nt,{children:[e("p",{children:"\u6700\u591A\u6295\u7968\u8005\u306F..."}),e(me,{children:t.mostVote}),e("p",{style:{marginTop:"50px"},children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F..."}),e(me,{children:t.players[t.fakeMan].name})]}),e(S,{className:l==="voted"?"is-active":"",style:{animationDelay:"15s"},children:t.mostVote===t.players[t.fakeMan].name?d("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u304C",e("br",{}),"\u304A\u984C\u3092\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u308C\u3070\u9006\u8EE2\u52DD\u5229"]}):e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]}),l==="reversal"&&e(St,{className:c?"":"disable",children:e("ul",{children:t.answerList.map((h,x)=>e("li",{style:{animationDelay:`${x*.1}s`},onClick:()=>u(x),children:h},h))})}),l==="answer"&&d(E,{children:[d(Lt,{children:[d("div",{children:[e("p",{className:"hdg",children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u56DE\u7B54"}),e("p",{className:"card",children:t.answer})]}),d("div",{children:[e("p",{className:"hdg",style:{marginTop:"50px"},children:"\u6B63\u89E3"}),e("p",{className:"card",children:t.theme})]})]}),e(S,{className:"modal is-active",children:t.answer===t.theme?e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"}):e("p",{children:"\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]})]})}),$t=i.div`
  position: relative;
  width: 750px;
  height: 100%;
`,_t=i.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`,It=i.div`
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
`,S=i.div`
  position: absolute;
  top: 50%;
  left: 3px;
  right: 0;
  transform: translateY(-50%) scale(0.8);
  z-index: 5;
  width: 80%;
  padding: 30px 0;
  margin: auto;
  font-size: 18px;
  font-weight: bold;
  color: #ffff00;
  background: ${p.teal};
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
`,Nt=i.div`
  position: absolute;
  top: calc(50% + 3px);
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 135px 0;
  background: #fff;
  border-radius: 4px;
  font-weight: bold;
  pointer-events: none;
  text-align: center;
  > p {
    &:nth-of-type(1),
    &:nth-of-type(3) {
      opacity: 0;
      transform: translateX(50px);
      animation: titleFade 0.4s forwards;
    }
    &:nth-of-type(1) {
      animation-delay: 5.5s;
    }
    &:nth-of-type(2) {
      animation-delay: 7.5s;
    }
    &:nth-of-type(3) {
      animation-delay: 9.5s;
    }
    &:nth-of-type(4) {
      animation-delay: 13s;
    }
  }
  @keyframes titleFade {
    to {
      opacity: 1;
      transform: translateX(0px);
    }
  }
`,me=i.p`
  display: inline-block;
  width: 250px;
  margin-top: 20px;
  padding: 10px 0;
  background: #ffedab;
  border: 1px solid ${p.yellow};
  border-radius: 24px;
  transform: scale(0);
  animation: scaleIn 0.4s forwards;
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
`,St=i.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 100%;
  height: 100%;
  background: #fff;
  &.disable {
    pointer-events: none;
  }
  > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    flex-direction: column;
    gap: 10px 40px;
    width: 70%;
    height: 100%;
    margin: 0 auto;
    padding: 35px 0;
    > li {
      width: calc(50% - 20px);
      padding: 5px 0;
      font-weight: bold;
      background: #ffedab;
      border: 2px solid ${p.yellow};
      border-radius: 18px;
      text-align: center;
      cursor: pointer;
      transform: scale(0);
      animation: answerScale 0.4s forwards;
    }
    @keyframes answerScale {
      to {
        transform: scale(1);
      }
    }
  }
`,Lt=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: calc(50% + 3px);
  left: 3px;
  transform: translateY(-50%);
  width: 100%;
  padding: 98px 0;
  background: #fff;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  .hdg {
    width: 200px;
    margin-bottom: 15px;
    padding: 10px 0;
    background: #ffea00;
    border-radius: 22px;
  }
  .card {
    min-width: 200px;
    padding: 20px 0;
    background: #ffedab;
    border: 2px solid ${p.yellow};
    border-radius: 4px;
    text-align: center;
  }
  > div {
    &:nth-of-type(1),
    &:nth-of-type(2) {
      transform: scale(0);
      animation: blockScale 0.3s forwards;
    }
    &:nth-of-type(1) {
      animation-delay: 1s;
    }
    &:nth-of-type(2) {
      animation-delay: 4s;
    }
  }
  @keyframes blockScale {
    to {
      transform: scale(1);
    }
  }
  + .modal {
    animation-delay: 7s;
  }
`,j=s.exports.memo(n=>{const{turn:t}=n,[o,r]=s.exports.useState(!1);return s.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),d(Ht,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),Ht=i.div`
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
`,T=()=>{const n=z();return s.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:s.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},D="fakeArtist",zt=s.exports.memo(()=>{const[n,t]=s.exports.useState({}),[o,r]=s.exports.useState(null),{myInfo:a}=B(),[l,c]=s.exports.useState(""),[u,h]=s.exports.useState(!1),{toLobby:x}=T();s.exports.useEffect(()=>{m.on(`${D}:getData`,g=>t(g)),m.on(`${D}:vote`,()=>c("vote")),m.on(`${D}:voted`,()=>c("voted")),m.on(`${D}:reversal`,g=>{t(g),c("reversal")}),m.on(`${D}:answer`,g=>{t(g),c("answer")}),m.on(`${D}:finish`,g=>{t(g),c("finish")}),m.emit(`${D}:getData`),setTimeout(()=>c("theme"),500),setTimeout(()=>c("title"),10500),setTimeout(()=>c("game"),16e3)},[]);const k=()=>{const g=o==null?void 0:o.toDataURL();m.emit(`${D}:draw`,g),r(null)},y=()=>{const g=o==null?void 0:o.getContext("2d");if(g.clearRect(0,0,750,500),n.context.length){const f=new Image;f.src=n.context,f.onload=()=>g.drawImage(f,0,0)}r(null)},b=g=>{h(!0),m.emit(`${D}:vote`,g)},w=g=>m.emit(`${D}:answer`,g);return Object.keys(n).length?d(Pt,{children:[l==="game"&&e(j,{turn:n.players[n.turn].name}),l==="game"&&(o?d(Mt,{children:[e("p",{children:"\u3053\u308C\u3067\u3044\u3044?"}),e("button",{style:{backgroundColor:p.green[0]},onClick:k,children:"\u66F8\u3044\u305F\uFF01"}),e("button",{style:{backgroundColor:p.gray[1]},onClick:y,children:"\u66F8\u304D\u76F4\u3059\uFF01"})]}):n.players[n.fakeMan].id===a.id?d(O,{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044",e("br",{}),"\u30D0\u30EC\u3066\u3082\u4F55\u3092\u63CF\u3044\u3066\u3044\u308B\u304B\u5F53\u3066\u308C\u3070\u52DD\u3061"]}):d(O,{children:["\u3053\u306E\u4E2D\u306B\u4E00\u4EBA\u304A\u984C\u3092\u77E5\u3089\u306A\u3044\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u3044\u308B",e("br",{}),"\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})),l==="vote"&&e(O,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F\u8AB0\u3060\uFF1F"}),l==="reversal"&&e(O,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u56DE\u7B54\u3092\u9078\u629E\u3059\u308B"}),l==="finish"&&d(jt,{children:[n.answer?n.answer===n.theme?"\u30A8\u30BB\u82B8\u8853\u5BB6":"\u82B8\u8853\u5BB6":"\u30A8\u30BB\u82B8\u8853\u5BB6","\u306E\u52DD\u5229!!"]}),d(Tt,{children:[e(Dt,{gameData:n,setCanvas:r,color:n.colors[n.players.findIndex(g=>g.id===a.id)],disable:!!(o||n.players[n.turn].id!==a.id),status:l,isFake:n.players[n.fakeMan].id===a.id,onclickAnswer:w}),d(Ot,{children:[d(he,{children:[e("span",{children:"\u4ECA\u56DE\u306E\u30C6\u30FC\u30DE"}),e(ge,{children:n.category})]}),d(he,{style:{marginTop:"10px"},children:[e("span",{children:"\u4ECA\u56DE\u306E\u304A\u984C"}),e(ge,{children:n.players[n.fakeMan].id!==a.id?n.theme:"?"})]}),e(Rt,{children:n.players.map((g,f)=>l==="vote"?d(xe,{style:{borderColor:n.colors[f]},children:[u?e(fe,{children:e("img",{src:`/assets/images/pokemon/${g.icon}.png`})}):e(Gt,{onClick:()=>b(f),children:"\u6295\u7968"}),e(be,{children:g.name})]},g.id):d(xe,{style:{borderColor:n.colors[f]},children:[e(fe,{children:e("img",{src:`/assets/images/pokemon/${g.icon}.png`})}),e(be,{children:g.name})]},g.id))})]})]}),l==="finish"&&a.isAdmin&&e("div",{style:{marginTop:"30px",textAlign:"center"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:x,color:"teal"})})]}):null}),Pt=i.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;
`,Mt=i.div`
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
`,O=i.p`
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
`,jt=i.p`
  position: absolute;
  left: 0;
  right: 0;
  top: -80px;
  width: 300px;
  margin: 0 auto;
  padding: 10px 0;
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  background: ${p.orange};
  border-radius: 34px;
  text-align: center;
  animation: loopScale 1.2s infinite;
  @keyframes loopScale {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }
`,Tt=i.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
`,Ot=i.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`,he=i.div`
  padding-left: 10px;
  padding-right: 10px;
  background: #ffedab;
  border: 2px solid ${p.yellow};
  border-radius: 4px;
  text-align: center;
  > span {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid ${p.gray[1]};
  }
`,ge=i.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`,Rt=i.ul`
  height: calc(100% - 188px);
  margin-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`,xe=i.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${p.gray[0]};
  border-width: 3px;
  border-style: solid;
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,fe=i.div`
  width: 40px;
  height: 40px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${p.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,Gt=i.button`
  width: 40px;
  height: 40px;
  color: #000;
  background: yellow;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${p.cyan};
  border-radius: 50%;
`,be=i.div`
  width: calc(100% - 60px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Ut=s.exports.memo(n=>{const{cemetery:t}=n;return e(Yt,{children:t.map(o=>e(Wt,{className:o.color,children:o.num.map((r,a)=>e(Jt,{children:r},a))},o.color))})}),Yt=i.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,Wt=i.div`
  display: flex;
  min-height: 30px;
  font-size: 20px;
  font-weight: bold;
  &.red {
    color: ${p.red};
  }
  &.blue {
    color: ${p.blue};
  }
  &.yellow {
    color: ${p.yellow};
  }
  &.green {
    color: ${p.green};
  }
  &.white {
    color: #fff;
  }
  &.purple {
    color: ${p.purple};
  }
`,Jt=i.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,ye=s.exports.memo(n=>{const{color:t,num:o,colorHint:r,numHint:a,isReverse:l,onclick:c}=n,u=()=>{let h="";return r&&(h+=`hint_${t}`),a&&(h=h===""?`hint_${o}`:`${h} hint_${o}`),h};return e(E,{children:l?e(Ce,{className:`reverse hand ${(r||a)&&u()}`,onClick:c}):e(Ce,{className:`${t} hand ${(r||a)&&u()}`,onClick:c,children:o!==0&&o})})}),Ce=i.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${p.gray[1]};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &.red {
    color: ${p.red};
    text-shadow: 1px 1px 0px #8d0000;
  }
  &.blue {
    color: ${p.blue};
    text-shadow: 1px 1px 0px #004b92;
  }
  &.yellow {
    color: ${p.yellow};
    text-shadow: 1px 1px 0px #9c7a00;
  }
  &.green {
    color: ${p.green};
    text-shadow: 1px 1px 0px #007436;
  }
  &.white {
    color: #fff;
    text-shadow: 1px 1px 0px #333;
  }
  &.purple {
    color: ${p.purple};
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
      color: ${p.black};
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
`,Zt=s.exports.memo(n=>{const{deck:t,fields:o}=n;return d(Xt,{children:[e(Vt,{children:t}),e(Qt,{children:o.map((r,a)=>e(ye,{color:r.color,num:r.num},a))})]})}),Xt=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,Vt=i.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #becef1;
  border: 3px solid ${p.gray[1]};
  border-radius: 8px;
  text-align: center;
`,Qt=i.div`
  display: flex;
  .hand {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.red {
      border: 3px solid ${p.red};
    }
    &.blue {
      border: 3px solid ${p.blue};
    }
    &.yellow {
      border: 3px solid ${p.yellow};
    }
    &.green {
      border: 3px solid ${p.green};
    }
    &.white {
      border: 3px solid #fff;
    }
    &.purple {
      border: 3px solid ${p.purple};
    }
  }
`,qt=s.exports.memo(n=>{const{hint:t}=n;return e(Kt,{children:[...Array(t)].map(o=>e(en,{},o))})}),Kt=i.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,en=i.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,tn=s.exports.memo(()=>e(nn,{children:d("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),nn=i.div`
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
`,on=s.exports.memo(n=>{const{name:t,hands:o,onclick:r,isFinish:a}=n,{myInfo:l}=B();return d(rn,{className:"player",children:[e(an,{children:o.map((c,u)=>e(ye,{color:c.color,num:c.num,colorHint:c.colorHint,numHint:c.numHint,isReverse:a?!1:t===l.name,onclick:r},u))}),d(sn,{children:["\u27A1\uFE0E ",t]})]})}),rn=i.div`
  min-width: 310px;
`,an=i.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,sn=i.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,ln=s.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=s.exports.useState({}),[r,a]=s.exports.useState(null),[l,c]=s.exports.useState(!1),[u,h]=s.exports.useState(!1),{toLobby:x}=T();s.exports.useEffect(()=>{m.on("hanabi:getData",(A,C)=>{C==="miss"||C==="gameover"?(c(!0),setTimeout(()=>{C==="gameover"&&h(!0),c(!1),o(A)},2400)):(C==="finish"&&h(!0),o(A))}),m.emit("hanabi:getData")},[]);const k=A=>{var H;const C=A.currentTarget;a(C),(H=document.querySelector(".hand.selected"))==null||H.classList.remove("selected"),C.classList.add("selected")},y=()=>`${(r==null?void 0:r.getBoundingClientRect().top)-100}px`,b=()=>{var K;if(!r)return;const A=[].slice.call((K=r.parentElement)==null?void 0:K.childNodes).indexOf(r),C=r.closest(".player"),H=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(H).indexOf(C),index:A}},w=()=>{var C;const A=b();m.emit("hanabi:playHand",A),a(null),(C=document.querySelector(".hand.selected"))==null||C.classList.remove("selected")},g=()=>{var C;const A=b();m.emit("hanabi:discardHand",A),a(null),(C=document.querySelector(".hand.selected"))==null||C.classList.remove("selected")},f=()=>{var C;const A=b();m.emit("hanabi:colorHint",A),a(null),(C=document.querySelector(".hand.selected"))==null||C.classList.remove("selected")},v=()=>{var C;const A=b();m.emit("hanabi:numHint",A),a(null),(C=document.querySelector(".hand.selected"))==null||C.classList.remove("selected")};return Object.keys(t).length?d(E,{children:[d(dn,{className:u||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[u?e(Ae,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?d(Ae,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(j,{turn:t.players[t.turn].player.name}),d(cn,{children:[e(Zt,{deck:t.deck.length,fields:t.fields}),d(un,{children:[d(pn,{children:[d("p",{children:["SCORE : ",t.score]}),d("p",{children:["MISS : ",t.miss,"/3"]})]}),e(qt,{hint:t.hint})]}),e(Ut,{cemetery:t.cemetery})]}),d(mn,{className:"playerarea",children:[t.players.map(A=>e(on,{name:A.player.name,hands:A.hands,onclick:k,isFinish:u},A.player.name)),u&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:x,color:"teal"})}),!u&&r&&r.className.indexOf("reverse")!==-1&&d(we,{style:{top:y()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:w,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:g,children:"\u6368\u3066\u308B"})]}),!u&&r&&r.className.indexOf("reverse")===-1&&d(we,{style:{top:y()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:f,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:v,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),l&&e(tn,{})]}):null}),dn=i.div`
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
`,Ae=i.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${p.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,cn=i.div``,un=i.div`
  display: flex;
`,pn=i.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,mn=i.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,we=i.div`
  position: absolute;
  right: calc(100% + 10px);
  z-index: 5;
  width: 200px;
  padding: 16px 20px;
  background: #fff;
  border: 2px solid ${p.border};
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
    background: ${p.blue};
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,hn=s.exports.memo(()=>{const[n,t]=s.exports.useState(!1);return s.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(E,{children:n&&d(gn,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),gn=i.div`
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
`,Q=s.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:a}=n,l=c=>c===0?"empty":c%2==0?"black":"white";return e(E,{children:o?e(ke,{className:l(t)}):e(ke,{onClick:r,className:`${a&&"isActive"} ${l(t)}`,children:t})})}),ke=i.div`
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
    outline: solid 2px ${p.green};
    box-shadow: 0 0 4px 2px rgba(34, 34, 34, 0.3);
  }
`,ve=s.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,a=[...t];for(;a.length<9;)a.push(0);return e(xn,{children:a.map((l,c)=>e(Q,{num:l,isHide:r?!1:o},c))})}),xn=i.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Be=s.exports.memo(n=>{const{result:t}=n,{toLobby:o}=T(),r=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",a=()=>o();return d(fn,{children:[e(bn,{className:r(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:a,color:"teal"})]})}),fn=i.div`
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
`,bn=i.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.win {
    color: ${p.red};
  }
  &.lose {
    color: ${p.blue};
  }
  &.draw {
    color: ${p.gray[1]};
  }
`,Fe=s.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:a}=n,{myInfo:l}=B(),[c,u]=s.exports.useState(!1),[h,x]=s.exports.useState(null);s.exports.useEffect(()=>{u(h!==null)},[h]);const k=b=>x(b),y=()=>{x(null),m.emit("kowloonTactics:selectHand",[l,h])};return d(yn,{children:[e(Cn,{className:r?"":"disabed",children:t.map((b,w)=>a?e(Q,{num:b,isHide:!0},w):e(Q,{num:b,onclick:()=>k(w),selected:h===w&&!0},w))}),r&&o&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:y,color:"teal",isDisabled:!c})]})}),yn=i.div`
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
`,Cn=i.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,An=s.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return d(wn,{children:[e(Ee,{className:"red",children:o.map((r,a)=>e("div",{className:r},a))}),e(Ee,{className:"blue",children:o.map((r,a)=>e("div",{className:r},a))})]})}),wn=i.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,Ee=i.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 25px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
  &.red > div {
    background: rgb(229 62 62 / 40%);
    border: solid 1px ${p.red};
    border-right: none;
    &.red {
      background: ${p.red};
      box-shadow: 0 0 6px 1px rgb(229 62 62 / 70%);
    }
  }
  &.blue > div {
    background: rgb(49 130 206 / 40%);
    border: solid 1px ${p.blue};
    border-left: none;
    &.blue {
      background: ${p.blue};
      box-shadow: 0 0 6px 1px rgb(49 130 206 / 70%);
    }
  }
`,De=s.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return d(kn,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e($,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(vn,{children:o.map(a=>e($,{name:a.name,icon:a.icon},a.id))})]})}),kn=i.div`
  position: absolute;
  top: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  &.red {
    left: 0;
    background: #e53e3e66;
    border: 1px solid ${p.red};
  }
  &.blue {
    right: 0;
    background: #3182ce66;
    border: 1px solid ${p.blue};
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
`,vn=i.div``,Bn=s.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=s.exports.useState({}),[r,a]=s.exports.useState({}),[l,c]=s.exports.useState([]),[u,h]=s.exports.useState(""),[x,k]=s.exports.useState("none"),[y,b]=s.exports.useState(!1);s.exports.useEffect(()=>{m.on("common:getCurrentConfig",f=>{a(f),f.redPlayer.id===n.id||f.redSupporter.some(v=>v.id===n.id)?k("red"):(f.bluePlayer.id===n.id||f.blueSupporter.some(v=>v.id===n.id))&&k("blue")}),m.on("kowloonTactics:getData",f=>o(f)),m.on("kowloonTactics:getTurn",f=>h(f)),m.on("kowloonTactics:getJudge",f=>{const v=f[0],A=f[1];c(v),A&&b(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const w=()=>{const f=l.filter(C=>C==="red").length,v=l.filter(C=>C==="blue").length;return f>v?"red":f<v?"blue":"draw"},g=f=>{const v=w();return v==="draw"?"DRAW":v===f?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?d(E,{children:[l.length<9&&e(j,{turn:u==="red"?r.redPlayer.name:r.bluePlayer.name}),d(Fn,{children:[e(De,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(De,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),l.length<9?e(Fe,{hands:t.redPlayer.hand,turn:u==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:x!=="red"&&!0}):e(Be,{result:g("red")}),d(En,{children:[e(ve,{hands:t.redPlayer.field,isHide:x!=="red"&&!0,isFinish:y}),e(An,{judgeArray:l}),e(ve,{hands:t.bluePlayer.field,isHide:x!=="blue"&&!0,isFinish:y})]}),l.length<9?e(Fe,{hands:t.bluePlayer.hand,turn:u==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:x!=="blue"&&!0}):e(Be,{result:g("blue")})]}),e(hn,{})]}):null}),Fn=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,En=i.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,R=s.exports.memo(n=>{const{from:t}=n;return d(Dn,{className:t==="1"?"from1":"from100",children:[t==="1"&&d(E,{children:[e("span",{className:"numFrom",children:"1"}),e("span",{className:"numTo",children:"100"})]}),t==="100"&&d(E,{children:[e("span",{className:"numFrom",children:"100"}),e("span",{className:"numTo",children:"1"})]})]})}),Dn=i.div`
  position: relative;
  width: 122px;
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_1.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 8px;
  text-align: center;
  span {
    display: inline-block;
    position: absolute;
    left: 0;
    right: 0;
    font-weight: bold;
  }
  &.from1 {
    transform: rotate(180deg);
    span {
      transform: rotate(-180deg);
      &.numFrom {
        top: 10px;
        font-size: 40px;
      }
      &.numTo {
        bottom: 5px;
        font-size: 24px;
      }
    }
  }
  &.from100 {
    span {
      &.numFrom {
        top: 10px;
        font-size: 40px;
      }
      &.numTo {
        bottom: 5px;
        font-size: 24px;
      }
    }
  }
`,$e=s.exports.memo(n=>{const{num:t,selected:o,onclick:r}=n;return d($n,{onClick:r,className:o?"is-selected":"",children:[e("span",{className:"top left",children:t}),e("span",{className:"top right",children:t}),e("span",{className:"center",children:t}),e("span",{className:"bottom left",children:t}),e("span",{className:"bottom right",children:t})]})}),$n=i.div`
  position: relative;
  width: calc(100% / 3 - 20px);
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_2.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  cursor: pointer;
  border-radius: 8px;
  &.is-selected {
    outline: 3px solid ${p.green};
  }
  > span {
    position: absolute;
    font-weight: bold;
    line-height: 1;
    font-size: 18px;
    &.center {
      top: 50%;
      left: 0;
      right: 0;
      transform: translateY(-50%);
      font-size: 50px;
      text-align: center;
    }
    &.top {
      top: 6px;
    }
    &.left {
      left: 8px;
    }
    &.right {
      right: 8px;
    }
    &.bottom {
      bottom: 6px;
    }
  }
`,_=40,G=s.exports.memo(n=>{const{cards:t,isDisabled:o,isReverse:r,onclick:a}=n;return e(_n,{className:((c,u)=>{let h="";return c&&(h+="is-disabled"),u&&(h+=" is-reverse"),h})(o,r),onClick:a,children:t.map(c=>e($e,{num:c},c))})}),_n=i.div`
  position: relative;
  height: 348px;
  outline: 1px dotted #000;
  border-radius: 8px;
  background: #f0f8ff;
  cursor: pointer;
  &::after {
    content: '';
    transition: background-color .1s;
  }
  &:hover {
    outline: 2px solid ${p.blue};
  }
  &.is-disabled {
    pointer-events: none !important;
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      z-index: 5;
      width: 100%;
      height: 100%;
      border-radius: 8px;
      background: #00000060;
    }
  }
  &.is-reverse {
    margin-bottom: 30px;
    > div {
      &:nth-of-type(1) {
        bottom: 0;
      }
      &:nth-of-type(2) {
        bottom ${_}px;
      }
      &:nth-of-type(3) {
        bottom ${_*2}px;
      }
      &:nth-of-type(4) {
        bottom ${_*3}px;
      }
      &:nth-of-type(5) {
        bottom ${_*4}px;
      }
    }
  }
  &:not(.is-reverse) {
    margin-top: 30px;
    > div {
      &:nth-of-type(1) {
        top: 0;
      }
      &:nth-of-type(2) {
        top ${_}px;
      }
      &:nth-of-type(3) {
        top ${_*2}px;
      }
      &:nth-of-type(4) {
        top ${_*3}px;
      }
      &:nth-of-type(5) {
        top ${_*4}px;
      }
    }
  }
  > div {
    position: absolute;
    width: 100%;
    &:nth-of-type(1) {
      z-index: 1;
    }
    &:nth-of-type(2) {
      z-index: 2;
    }
    &:nth-of-type(3) {
      z-index: 3;
    }
    &:nth-of-type(4) {
      z-index: 4;
    }
    &:nth-of-type(5) {
      z-index: 5;
    }
  }
`,In=s.exports.memo(n=>{const{fieldCards:t,selectedHand:o,playCard:r}=n,a=c=>c.slice(-1)[0],l=(c,u,h)=>{let x=!1;return u===!1?x=!1:h?u===c-10?x=!1:u<c&&(x=!0):u===c+10?x=!1:u>c&&(x=!0),x};return d(Nn,{children:[d(U,{children:[e(R,{from:"100"}),e(G,{cards:t[0],isDisabled:l(a(t[0]),o),onclick:()=>r(0)})]}),d(U,{children:[e(R,{from:"100"}),e(G,{cards:t[1],isDisabled:l(a(t[1]),o),onclick:()=>r(1)})]}),d(U,{className:"reverse",children:[e(R,{from:"1"}),e(G,{cards:t[2],isDisabled:l(a(t[2]),o,!0),isReverse:!0,onclick:()=>r(2)})]}),d(U,{className:"reverse",children:[e(R,{from:"1"}),e(G,{cards:t[3],isDisabled:l(a(t[3]),o,!0),isReverse:!0,onclick:()=>r(3)})]})]})}),Nn=i.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`,U=i.div`
  display: flex;
  flex-direction: column;
  &.reverse {
    flex-direction: column-reverse;
  }
`,Sn=s.exports.memo(n=>{const{deck:t,score:o}=n;return d(Ln,{children:[d("p",{children:["DECK\uFF1A",e("span",{children:t}),"\u679A"]}),d("p",{children:["SCORE\uFF1A",e("span",{children:o})]})]})}),Ln=i.div`
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`,Hn=s.exports.memo(n=>{const{hands:t,selectedHand:o,setSelectedHand:r}=n;return d(zn,{children:[e("p",{style:{fontWeight:"bold"},children:"\u3042\u306A\u305F\u306E\u624B\u672D"}),e(Pn,{children:t.map((a,l)=>e($e,{num:a,selected:o===l,onclick:()=>r(l)},a))})]})}),zn=i.div`
  width: 100%;
  margin-top: 30px;
`,Pn=i.ul`
  display: flex;
  flex-wrap: wrap;
  height: 444px;
  gap: 20px;
  margin-top: 10px;
  padding: 20px 0 20px 20px;
  border: 2px solid #999;
  background: #fff8dccc;
  border-radius: 6px;
`,Mn=s.exports.memo(n=>{const{playerList:t}=n;return e(jn,{children:e(Tn,{children:t.map(o=>e($,{name:o.user.name,icon:o.user.icon},o.user.id))})})}),jn=i.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  background: #fff8dccc;
  border: 1px solid #deb887;
`,Tn=i.div`
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
`,On=s.exports.memo(n=>{const{status:t,remainingHand:o,turnFinish:r,turnContinue:a}=n;return e(Rn,{children:t==="continue"?d(Gn,{children:[e("p",{children:"\u307E\u3060\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u307E\u3059\u304B?"}),e("button",{style:{backgroundColor:p.gray[1]},onClick:r,children:"\u51FA\u3055\u306A\u3044"}),e("button",{style:{backgroundColor:p.green[0]},onClick:a,children:"\u51FA\u3059"})]}):t==="finish"?d(q,{children:["\u624B\u672D\u304B\u3089\u51FA\u305B\u308B\u30AB\u30FC\u30C9\u304C\u306A\u304F\u306A\u308A\u307E\u3057\u305F\u3002",e("br",{}),"\u30B2\u30FC\u30E0\u3092\u7D42\u4E86\u3057\u307E\u3057\u305F\u3002"]}):o<=0?e(q,{children:"\u624B\u672D\u304B\u3089\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u3066\u304F\u3060\u3055\u3044"}):d(q,{children:["\u3042\u3068",o,"\u679A\u306E\u30AB\u30FC\u30C9\u3092\u51FA\u3057\u3066\u304F\u3060\u3055\u3044"]})})}),Rn=i.div`
  position: fixed;
  left: 0;
  right: 0;
  z-index: 9;
  top: 70px;
`,q=i.p`
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
`,Gn=i.div`
  text-align: center;
  > p {
    margin-bottom: 15px;
    font-weight: bold;
  }
  > button {
    min-width: 130px;
    padding: 10px 0;
    color: #fff;
    font-weight: bold;
    border-radius: 22px;
    + button {
      margin-left: 40px;
    }
  }
`,L="theGame",Un=s.exports.memo(()=>{const{myInfo:n}=B(),{toLobby:t}=T(),[o,r]=s.exports.useState({}),[a,l]=s.exports.useState(null);s.exports.useEffect(()=>{m.on(`${L}:getData`,b=>r(b)),m.emit(`${L}:getData`)},[]);const c=b=>{var g;if(a===null)return;l(null);const w={userId:n.id,selectIndex:a,fieldIndex:b};((g=o.playerList.find(f=>f.user.id===n.id))==null?void 0:g.hand.length)===1?u():m.emit(`${L}:playCard`,w)},u=()=>m.emit(`${L}:turnFinish`),h=()=>m.emit(`${L}:turnContinue`),x=()=>k(o).id!==n.id||o.status!=="remaining"?"is-disabled":"",k=b=>b.playerList[b.turn].user,y=b=>b.find(w=>w.user.id===n.id).hand;return Object.keys(o).length?d(E,{children:[o.status!=="finish"&&e(j,{turn:k(o).name}),(o.status==="finish"||k(o).id===n.id)&&e(On,{status:o.status,remainingHand:o.remainingHand,turnFinish:u,turnContinue:h}),d(Yn,{className:x(),children:[e(In,{fieldCards:o.fieldCards,selectedHand:a!==null&&y(o.playerList)[a],playCard:c}),d("div",{style:{width:"450px"},children:[e(Sn,{deck:o.deck.length,score:o.score}),e(Hn,{hands:y(o.playerList),selectedHand:a,setSelectedHand:l})]}),e(Mn,{playerList:o.playerList})]}),o.status==="finish"&&n.isAdmin&&e(Wn,{children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:t,color:"teal"})})]}):null}),Yn=i.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
  &.is-disabled {
    pointer-events: none;
  }
`,Wn=i.div`
  position: absolute;
  bottom: 0;
  text-align: center;
`,Jn=[{path:"/kowloon_tactics",exact:!1,children:e(Bn,{})},{path:"/hanabi",exact:!1,children:e(ln,{})},{path:"/fakeArtist",exact:!1,children:e(zt,{})},{path:"/THE-Game",exact:!1,children:e(Un,{})}],Zn=s.exports.memo(()=>e(ze,{children:d(ne,{children:[e(P,{exact:!0,path:"/",children:e(Ve,{})}),e(P,{path:"/lobby",children:e(re,{children:e(ie,{children:e(Ft,{})})})}),e(P,{path:"/game",render:({match:{url:n}})=>e(ne,{children:Jn.map(t=>e(P,{exact:t.exact,path:`${n}${t.path}`,children:e(re,{children:e(ie,{children:t.children})})},t.path))})})]})})),Xn=()=>e(je,{children:e(Zn,{})});Pe.render(e(Xn,{}),document.getElementById("root"));
