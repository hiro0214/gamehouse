var $e=Object.defineProperty,_e=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var K=Object.getOwnPropertySymbols;var Ne=Object.prototype.hasOwnProperty,Se=Object.prototype.propertyIsEnumerable;var ee=(n,t,o)=>t in n?$e(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,U=(n,t)=>{for(var o in t||(t={}))Ne.call(t,o)&&ee(n,o,t[o]);if(K)for(var o of K(t))Se.call(t,o)&&ee(n,o,t[o]);return n},Y=(n,t)=>_e(n,Ie(t));import{j as W,r as a,s as i,l as Le,u as H,B as ze,S as te,R as P,a as He}from"./vendor.2d340bfb.js";const Pe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const d of s)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const d={};return s.integrity&&(d.integrity=s.integrity),s.referrerpolicy&&(d.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?d.credentials="include":s.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(s){if(s.ep)return;s.ep=!0;const d=o(s);fetch(s.href,d)}};Pe();const e=W.exports.jsx,l=W.exports.jsxs,E=W.exports.Fragment,ne=a.exports.createContext({}),Me=n=>{const{children:t}=n,[o,r]=a.exports.useState({});return e(ne.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},B=()=>a.exports.useContext(ne),oe=a.exports.memo(n=>{const{children:t}=n;return e(Te,{children:t})}),Te=i.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,re=a.exports.memo(n=>{const{children:t}=n;return e(je,{children:t})}),je=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,Oe=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F","\u30B6\u30FB\u30B2\u30FC\u30E0"],c={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=a.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:s}=n;return e(Re,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:s,children:o})});F.defaultProps={color:"green"};const Re=i.button`
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
      background: ${c.red};
    }
    &orange {
      background: ${c.orange};
    }
    &yellow {
      background: ${c.yellow};
    }
    &green {
      background: ${c.green};
    }
    &teal {
      background: ${c.teal};
    }
    &blue {
      background: ${c.blue};
    }
    &cyan {
      background: ${c.cyan};
    }
    &purple {
      background: ${c.purple};
    }
    &pink {
      background: ${c.pink};
    }
    &gray {
      background: ${c.gray[1]};
    }
  }
`,M=a.exports.memo(n=>{const{text:t,size:o}=n;return e(Ge,{className:o&&`heading--${o}`,children:t})});M.defaultProps={size:"1"};const Ge=i.div`
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
`,Ue=a.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return l(Ye,{className:"textContainer",children:[e(We,{value:t,placeholder:o,onChange:r}),e(Je,{})]})}),Ye=i.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,We=i.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${c.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Je=i.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=Le(),ie=()=>{const{setMyInfo:n}=B(),t=()=>{const s=8,d="abcdefghijklmnopqrstuvwxyz0123456789";let p="";for(let u=0;u<s;u++)p+=d[Math.floor(Math.random()*d.length)];return p},o=()=>{const s=151,d=`${Math.floor(Math.random()*s)+1}`;let p;return d.length===1?p=`00${d}`:d.length===2?p=`0${d}`:p=d,p};return{setInfo:a.exports.useCallback((s,d)=>{const p={id:t(),name:s,icon:o(),isAdmin:d};n(p),m.emit("common:newUser",p)},[]),randomIcon:o}},Ze=()=>{const n=H(),{setInfo:t}=ie();return{enter:a.exports.useCallback(r=>{r==="$clear"?m.emit("common:clearUser"):(t(r==="admin"?"\u3044\u308F\u3082\u3068":r,r==="admin"),n.push("/lobby"))},[])}},Xe=a.exports.memo(()=>{const[n,t]=a.exports.useState(""),[o,r]=a.exports.useState(!0),{enter:s}=Ze();return e(Ve,{children:l(Qe,{children:[e(M,{text:"Games House"}),e(Ue,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:u=>{t(u.target.value),u.target.value?r(!1):r(!0)}}),e(F,{label:"Join the game!",isDisabled:o,onclick:()=>s(n)})]})})}),Ve=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Qe=i.div`
  width: 500px;
  padding: 20px 30px 30px;
  background: #fff;
  border: 1px solid ${c.border};
  text-align: center;
  border-radius: 6px;
  box-shadow: 0 0 10px 2px rgba(160, 174, 192, 0.6);
  .textContainer {
    margin-bottom: 40px;
  }
`,qe=a.exports.memo(()=>null),J=a.exports.memo(n=>{const{children:t,options:o,value:r,onChange:s,disabled:d,hdg:p}=n;return l(Ke,{children:[e(tt,{children:p}),l(et,{value:r,onChange:s,disabled:!d,children:[t,o.map(u=>e("option",{value:u.key,children:u.value},u.value))]})]})}),Ke=i.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,et=i.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${c.gray[1]};
  border-radius: 4px;
`,tt=i.div`
  font-size: 14px;
  font-weight: bold;
`,nt=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],ot=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],rt=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState(null),[r,s]=a.exports.useState(null);a.exports.useEffect(()=>{m.on("hanabi:updateConfig",u=>{o(u.colorNum),s(u.handNum)}),m.emit("hanabi:getConfig")},[]);const d=u=>{m.emit("hanabi:setColorNum",u.target.options[u.target.selectedIndex].value)},p=u=>{m.emit("hanabi:setHandNum",u.target.options[u.target.selectedIndex].value)};return l(it,{children:[e(ae,{children:e(J,{options:nt,hdg:"\u8272\u306E\u6570",value:t||"",onChange:d,disabled:n.isAdmin})}),e(ae,{style:{marginTop:"10px"},children:e(J,{options:ot,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:p,disabled:n.isAdmin})})]})}),it=i.div``,ae=i.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,$=a.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:s}=n,{myInfo:d,setMyInfo:p}=B(),[u,h]=a.exports.useState(!1),[f,k]=a.exports.useState(d.name),{randomIcon:A}=ie(),C=()=>{p(Y(U({},d),{icon:A()}))},w=()=>{h(!u),u&&p(Y(U({},d),{name:f}))},x=g=>k(g.target.value);return a.exports.useEffect(()=>{m.emit("common:updateInfo",d)},[d]),l(at,{className:"profile",children:[l(st,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(lt,{onClick:C,children:r})]}),u?e(ct,{type:"text",value:f,onChange:x}):e(dt,{className:"profile__name",children:t}),s&&e(ut,{onClick:w,className:u?"isEdit":"",children:s})]})}),at=i.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${c.gray[0]};
  border: 2px solid ${c.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,st=i.div`
  position: relative;
  width: 60px;
  height: 60px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${c.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,lt=i.button`
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
  border: 1px solid ${c.border};
  border-radius: 50%;
`,dt=i.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,ct=i.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${c.gray[1]};
`,ut=i.button`
  width: 20px;
  height: 20px;
  background-color: #fff;
  background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20version%3D%221.1%22%20id%3D%22_x32_%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%20x%3D%220px%22%20y%3D%220px%22%20viewBox%3D%220%200%20512%20512%22%20style%3D%22width%3A%2032px%3B%20height%3A%2032px%3B%20opacity%3A%201%3B%22%20xml%3Aspace%3D%22preserve%22%3E%0A%3Cstyle%20type%3D%22text%2Fcss%22%3E%0A%09.st0%7Bfill%3A%234B4B4B%3B%7D%0A%3C%2Fstyle%3E%0A%3Cg%3E%0A%09%3Cpath%20class%3D%22st0%22%20d%3D%22M506.53%2C88.263L423.737%2C5.47c-7.294-7.293-19.118-7.293-26.411%2C0L47.776%2C341.176%0A%09%09c-2.168%2C2.168-3.769%2C4.836-4.661%2C7.768L0.836%2C487.86c-4.35%2C14.293%2C9.011%2C27.654%2C23.304%2C23.305l143.382-43.639h0L506.53%2C114.675%0A%09%09C513.823%2C107.381%2C513.823%2C95.556%2C506.53%2C88.263z%20M63.524%2C465.077l-16.584-16.584l24.373-80.107l47.004%2C25.29l25.296%2C47.012%0A%09%09L63.524%2C465.077z%20M453.986%2C75.041L156.172%2C374.747l-18.919-18.918l299.72-297.828l17.013%2C17.012%0A%09%09C453.986%2C75.024%2C453.986%2C75.03%2C453.986%2C75.041z%22%20style%3D%22fill%3A%20rgb(75%2C%2075%2C%2075)%3B%22%3E%3C%2Fpath%3E%0A%3C%2Fg%3E%0A%3C%2Fsvg%3E%0A');
  background-size: 80% auto;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid ${c.border};
  border-radius: 50%;
  &.isEdit {
    background-image: url('data:image/svg+xml;charset=utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2048%2048%22%3E%3Ctitle%3E843_ch_f%3C%2Ftitle%3E%3Crect%20width%3D%2248%22%20height%3D%2248%22%20fill%3D%22none%22%2F%3E%3Cpolyline%20points%3D%2212%2028%2020%2036%2038%2018%22%20fill%3D%22none%22%20stroke%3D%22%23000%22%20stroke-linecap%3D%22square%22%20stroke-miterlimit%3D%2210%22%20stroke-width%3D%224%22%2F%3E%3C%2Fsvg%3E');
  }
`,N="kowloonTactics",pt=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});a.exports.useEffect(()=>{m.on(`${N}:updateConfig`,u=>{o(u)}),m.emit(`${N}:updateConfig`)},[]);const r=()=>m.emit(`${N}:setRedPlayer`,n),s=()=>m.emit(`${N}:setBluePlayer`,n),d=()=>m.emit(`${N}:setRedSupporter`,n),p=()=>m.emit(`${N}:setBlueSupporter`,n);return l(mt,{children:[l(se,{className:"red",children:[l(le,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e($,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),l(de,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:d,color:"yellow"}),e(ce,{children:t.redSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]}),l(se,{className:"blue",children:[l(le,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e($,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"})]}),l(de,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:p,color:"yellow"}),e(ce,{children:t.blueSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]})]})}),mt=i.div`
  display: flex;
  justify-content: space-between;
`,se=i.div`
  width: calc(100% / 2 - 10px);
  min-height: 350px;
  padding: 10px;
  border: 1px solid ${c.border};
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
`,le=i.div`
  padding-bottom: 20px;
  border-bottom: 1px solid #666;
  > .btn {
    width: 100%;
    font-size: 14px;
    color: ${c.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,de=i.div`
  padding-top: 10px;
  > .btn {
    width: 100%;
    margin-bottom: 10px;
    font-size: 14px;
    color: ${c.black};
  }
  > span {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: bold;
  }
`,ce=i.div``,ht=a.exports.memo(()=>null),xt=()=>{const[n,t]=a.exports.useState(null),o=a.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(pt,{}));break;case"Hanabi":t(e(rt,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(qe,{}));break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":t(e(ht,{}));break}},[]);return{currentConfig:n,setConfig:o}},gt=()=>{const n=H();return{gameStart:a.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":n.push("/game/THE-Game");break}},[])}},ue=[];Oe.map(n=>ue.push({key:n,value:n}));const ft=a.exports.memo(()=>{const[n,t]=a.exports.useState(null),{myInfo:o}=B(),{gameStart:r}=gt(),{currentConfig:s,setConfig:d}=xt(),p=h=>{const f=h.target.value;f.indexOf("--")===-1?m.emit("common:setCurrentGame",f):m.emit("common:setCurrentGame",null)},u=()=>m.emit("common:gameStart");return a.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),d(h)}),m.on("common:setCurrentGame",h=>{t(h),d(h)}),m.on("common:gameStart",h=>r(h)),m.emit("common:getCurrentGame")},[]),l(bt,{children:[e(M,{text:"Setting",size:"2"}),e(yt,{children:e(J,{options:ue,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:p,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(At,{children:n&&l(Ct,{children:[s,o.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:u,color:"blue"})]})})]})}),bt=i.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,yt=i.div`
  display: flex;
  justify-content: center;
`,At=i.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Ct=i.div`
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${c.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
  > .btn {
    display: block;
    margin: 30px auto 0;
  }
`,wt=a.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=B();return l(kt,{children:[e(M,{text:"Player",size:"2"}),e(vt,{children:t.map(r=>e($,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),kt=i.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,vt=i.ul`
  height: calc(100% - 71px);
  margin-right: -5px;
  padding-right: 5px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    background: inherit;
  }
  &::-webkit-scrollbar-thumb {
    background: ${c.orange};
    border: 1px solid #d86405;
    border-radius: 10px;
  }
`,Bt=a.exports.memo(()=>{const[n,t]=a.exports.useState([]),o=H();return a.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",r=>t(r)),m.on("common:toTop",()=>o.push("/"))},[]),l(Ft,{children:[e(wt,{userList:n}),e(ft,{})]})}),Ft=i.div`
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
`;let S=!1,Z=0,X=0;const Et=a.exports.memo(n=>{const{gameData:t,setCanvas:o,color:r,disable:s,status:d,isFake:p,onclickAnswer:u}=n;return a.exports.useEffect(()=>{const h=document.getElementById("canvas"),f=h.getContext("2d");f.lineCap="round",f.lineWidth=4,f.strokeStyle=r,h.addEventListener("mousedown",A=>{S=!0,Z=A.offsetX,X=A.offsetY}),h.addEventListener("mousemove",A=>{if(!S)return;const C=A.offsetX,w=A.offsetY;k(f,Z,X,C,w),Z=C,X=w}),h.addEventListener("mouseout",()=>{!S||(S=!1,o(h))}),h.addEventListener("mouseup",()=>{!S||(S=!1,o(h))});const k=(A,C,w,x,g)=>{A.beginPath(),A.moveTo(C,w),A.lineTo(x,g),A.stroke()}},[]),a.exports.useEffect(()=>{const f=document.getElementById("canvas").getContext("2d");if(t.context.length){const k=new Image;k.src=t.context,k.onload=()=>f.drawImage(k,0,0)}},[t.context]),l(Dt,{children:[e($t,{id:"canvas",width:750,height:500,className:s||d!=="game"?"disable":""}),e(_t,{className:d==="theme"?"is-active":"",children:l("p",{children:["\u304A\u984C\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044",e("br",{}),"10\u79D2\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u958B\u59CB\u3057\u307E\u3059"]})}),e(L,{className:d==="title"?"is-active":"",children:p?l("p",{children:["\u304A\u984C\u3092\u77E5\u3063\u3066\u3044\u308B\u30D5\u30EA\u3092\u3057\u3066",e("br",{}),"\u30D0\u30EC\u306A\u3044\u3088\u3046\u306B\u7D75\u3092\u63CF\u3053\u3046"]}):l("p",{children:["\u5354\u529B\u3057\u3066\u7D75\u3092\u63CF\u3053\u3046",e("br",{}),"\u305F\u3060\u3057\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})}),e(L,{style:{animationDelay:"1s"},className:d==="vote"?"is-active":"",children:l("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u601D\u3046\u4EBA\u306B",e("br",{}),"\u6295\u7968\u3057\u3066\u304F\u3060\u3055\u3044"]})}),d==="voted"&&l(E,{children:[e(L,{className:d==="voted"?"is-active":"",children:"\u6295\u7968\u7D50\u679C\u767A\u8868"}),l(It,{children:[e("p",{children:"\u6700\u591A\u6295\u7968\u8005\u306F..."}),e(pe,{children:t.mostVote}),e("p",{style:{marginTop:"50px"},children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F..."}),e(pe,{children:t.players[t.fakeMan].name})]}),e(L,{className:d==="voted"?"is-active":"",style:{animationDelay:"15s"},children:t.mostVote===t.players[t.fakeMan].name?l("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u304C",e("br",{}),"\u304A\u984C\u3092\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u308C\u3070\u9006\u8EE2\u52DD\u5229"]}):e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]}),d==="reversal"&&e(Nt,{className:p?"":"disable",children:e("ul",{children:t.answerList.map((h,f)=>e("li",{style:{animationDelay:`${f*.1}s`},onClick:()=>u(f),children:h},h))})}),d==="answer"&&l(E,{children:[l(St,{children:[l("div",{children:[e("p",{className:"hdg",children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u56DE\u7B54"}),e("p",{className:"card",children:t.answer})]}),l("div",{children:[e("p",{className:"hdg",style:{marginTop:"50px"},children:"\u6B63\u89E3"}),e("p",{className:"card",children:t.theme})]})]}),e(L,{className:"modal is-active",children:t.answer===t.theme?e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"}):e("p",{children:"\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]})]})}),Dt=i.div`
  position: relative;
  width: 750px;
  height: 100%;
`,$t=i.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`,_t=i.div`
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
`,L=i.div`
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
  background: ${c.teal};
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
`,It=i.div`
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
`,pe=i.p`
  display: inline-block;
  width: 250px;
  margin-top: 20px;
  padding: 10px 0;
  background: #ffedab;
  border: 1px solid ${c.yellow};
  border-radius: 24px;
  transform: scale(0);
  animation: scaleIn 0.4s forwards;
  @keyframes scaleIn {
    to {
      transform: scale(1);
    }
  }
`,Nt=i.div`
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
      border: 2px solid ${c.yellow};
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
`,St=i.div`
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
    border: 2px solid ${c.yellow};
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
`,T=a.exports.memo(n=>{const{turn:t}=n,[o,r]=a.exports.useState(!1);return a.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),l(Lt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),Lt=i.div`
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
`,V=()=>{const n=H();return a.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:a.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},D="fakeArtist",zt=a.exports.memo(()=>{const[n,t]=a.exports.useState({}),[o,r]=a.exports.useState(null),{myInfo:s}=B(),[d,p]=a.exports.useState(""),[u,h]=a.exports.useState(!1),{toLobby:f}=V();a.exports.useEffect(()=>{m.on(`${D}:getData`,x=>t(x)),m.on(`${D}:vote`,()=>p("vote")),m.on(`${D}:voted`,()=>p("voted")),m.on(`${D}:reversal`,x=>{t(x),p("reversal")}),m.on(`${D}:answer`,x=>{t(x),p("answer")}),m.on(`${D}:finish`,x=>{t(x),p("finish")}),m.emit(`${D}:getData`),setTimeout(()=>p("theme"),500),setTimeout(()=>p("title"),10500),setTimeout(()=>p("game"),16e3)},[]);const k=()=>{const x=o==null?void 0:o.toDataURL();m.emit(`${D}:draw`,x),r(null)},A=()=>{const x=o==null?void 0:o.getContext("2d");if(x.clearRect(0,0,750,500),n.context.length){const g=new Image;g.src=n.context,g.onload=()=>x.drawImage(g,0,0)}r(null)},C=x=>{h(!0),m.emit(`${D}:vote`,x)},w=x=>m.emit(`${D}:answer`,x);return Object.keys(n).length?l(Ht,{children:[d==="game"&&e(T,{turn:n.players[n.turn].name}),d==="game"&&(o?l(Pt,{children:[e("p",{children:"\u3053\u308C\u3067\u3044\u3044?"}),e("button",{style:{backgroundColor:c.green[0]},onClick:k,children:"\u66F8\u3044\u305F\uFF01"}),e("button",{style:{backgroundColor:c.gray[1]},onClick:A,children:"\u66F8\u304D\u76F4\u3059\uFF01"})]}):n.players[n.fakeMan].id===s.id?l(j,{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044",e("br",{}),"\u30D0\u30EC\u3066\u3082\u4F55\u3092\u63CF\u3044\u3066\u3044\u308B\u304B\u5F53\u3066\u308C\u3070\u52DD\u3061"]}):l(j,{children:["\u3053\u306E\u4E2D\u306B\u4E00\u4EBA\u304A\u984C\u3092\u77E5\u3089\u306A\u3044\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u3044\u308B",e("br",{}),"\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})),d==="vote"&&e(j,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F\u8AB0\u3060\uFF1F"}),d==="reversal"&&e(j,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u56DE\u7B54\u3092\u9078\u629E\u3059\u308B"}),d==="finish"&&l(Mt,{children:[n.answer?n.answer===n.theme?"\u30A8\u30BB\u82B8\u8853\u5BB6":"\u82B8\u8853\u5BB6":"\u30A8\u30BB\u82B8\u8853\u5BB6","\u306E\u52DD\u5229!!"]}),l(Tt,{children:[e(Et,{gameData:n,setCanvas:r,color:n.colors[n.players.findIndex(x=>x.id===s.id)],disable:!!(o||n.players[n.turn].id!==s.id),status:d,isFake:n.players[n.fakeMan].id===s.id,onclickAnswer:w}),l(jt,{children:[l(me,{children:[e("span",{children:"\u4ECA\u56DE\u306E\u30C6\u30FC\u30DE"}),e(he,{children:n.category})]}),l(me,{style:{marginTop:"10px"},children:[e("span",{children:"\u4ECA\u56DE\u306E\u304A\u984C"}),e(he,{children:n.players[n.fakeMan].id!==s.id?n.theme:"?"})]}),e(Ot,{children:n.players.map((x,g)=>d==="vote"?l(xe,{style:{borderColor:n.colors[g]},children:[u?e(ge,{children:e("img",{src:`/assets/images/pokemon/${x.icon}.png`})}):e(Rt,{onClick:()=>C(g),children:"\u6295\u7968"}),e(fe,{children:x.name})]},x.id):l(xe,{style:{borderColor:n.colors[g]},children:[e(ge,{children:e("img",{src:`/assets/images/pokemon/${x.icon}.png`})}),e(fe,{children:x.name})]},x.id))})]})]}),d==="finish"&&s.isAdmin&&e("div",{style:{marginTop:"30px",textAlign:"center"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})})]}):null}),Ht=i.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;
`,Pt=i.div`
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
`,j=i.p`
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
`,Mt=i.p`
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
  background: ${c.orange};
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
`,jt=i.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`,me=i.div`
  padding-left: 10px;
  padding-right: 10px;
  background: #ffedab;
  border: 2px solid ${c.yellow};
  border-radius: 4px;
  text-align: center;
  > span {
    display: block;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid ${c.gray[1]};
  }
`,he=i.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`,Ot=i.ul`
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
  background: ${c.gray[0]};
  border-width: 3px;
  border-style: solid;
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,ge=i.div`
  width: 40px;
  height: 40px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${c.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,Rt=i.button`
  width: 40px;
  height: 40px;
  color: #000;
  background: yellow;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${c.cyan};
  border-radius: 50%;
`,fe=i.div`
  width: calc(100% - 60px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Gt=a.exports.memo(n=>{const{cemetery:t}=n;return e(Ut,{children:t.map(o=>e(Yt,{className:o.color,children:o.num.map((r,s)=>e(Wt,{children:r},s))},o.color))})}),Ut=i.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,Yt=i.div`
  display: flex;
  min-height: 30px;
  font-size: 20px;
  font-weight: bold;
  &.red {
    color: ${c.red};
  }
  &.blue {
    color: ${c.blue};
  }
  &.yellow {
    color: ${c.yellow};
  }
  &.green {
    color: ${c.green};
  }
  &.white {
    color: #fff;
  }
  &.purple {
    color: ${c.purple};
  }
`,Wt=i.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,be=a.exports.memo(n=>{const{color:t,num:o,colorHint:r,numHint:s,isReverse:d,onclick:p}=n,u=()=>{let h="";return r&&(h+=`hint_${t}`),s&&(h=h===""?`hint_${o}`:`${h} hint_${o}`),h};return e(E,{children:d?e(ye,{className:`reverse hand ${(r||s)&&u()}`,onClick:p}):e(ye,{className:`${t} hand ${(r||s)&&u()}`,onClick:p,children:o!==0&&o})})}),ye=i.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${c.gray[1]};
  border-radius: 8px;
  text-align: center;
  cursor: pointer;
  transition: border-color 0.2s;
  &.red {
    color: ${c.red};
    text-shadow: 1px 1px 0px #8d0000;
  }
  &.blue {
    color: ${c.blue};
    text-shadow: 1px 1px 0px #004b92;
  }
  &.yellow {
    color: ${c.yellow};
    text-shadow: 1px 1px 0px #9c7a00;
  }
  &.green {
    color: ${c.green};
    text-shadow: 1px 1px 0px #007436;
  }
  &.white {
    color: #fff;
    text-shadow: 1px 1px 0px #333;
  }
  &.purple {
    color: ${c.purple};
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
      color: ${c.black};
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
`,Jt=a.exports.memo(n=>{const{deck:t,fields:o}=n;return l(Zt,{children:[e(Xt,{children:t}),e(Vt,{children:o.map((r,s)=>e(be,{color:r.color,num:r.num},s))})]})}),Zt=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,Xt=i.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #becef1;
  border: 3px solid ${c.gray[1]};
  border-radius: 8px;
  text-align: center;
`,Vt=i.div`
  display: flex;
  .hand {
    &:not(:first-child) {
      margin-left: 10px;
    }
    &.red {
      border: 3px solid ${c.red};
    }
    &.blue {
      border: 3px solid ${c.blue};
    }
    &.yellow {
      border: 3px solid ${c.yellow};
    }
    &.green {
      border: 3px solid ${c.green};
    }
    &.white {
      border: 3px solid #fff;
    }
    &.purple {
      border: 3px solid ${c.purple};
    }
  }
`,Qt=a.exports.memo(n=>{const{hint:t}=n;return e(qt,{children:[...Array(t)].map(o=>e(Kt,{},o))})}),qt=i.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,Kt=i.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,en=a.exports.memo(()=>e(tn,{children:l("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),tn=i.div`
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
`,nn=a.exports.memo(n=>{const{name:t,hands:o,onclick:r,isFinish:s}=n,{myInfo:d}=B();return l(on,{className:"player",children:[e(rn,{children:o.map((p,u)=>e(be,{color:p.color,num:p.num,colorHint:p.colorHint,numHint:p.numHint,isReverse:s?!1:t===d.name,onclick:r},u))}),l(an,{children:["\u27A1\uFE0E ",t]})]})}),on=i.div`
  min-width: 310px;
`,rn=i.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,an=i.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,sn=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({}),[r,s]=a.exports.useState(null),[d,p]=a.exports.useState(!1),[u,h]=a.exports.useState(!1),{toLobby:f}=V();a.exports.useEffect(()=>{m.on("hanabi:getData",(y,b)=>{b==="miss"||b==="gameover"?(p(!0),setTimeout(()=>{b==="gameover"&&h(!0),p(!1),o(y)},2400)):(b==="finish"&&h(!0),o(y))}),m.emit("hanabi:getData")},[]);const k=y=>{var z;const b=y.currentTarget;s(b),(z=document.querySelector(".hand.selected"))==null||z.classList.remove("selected"),b.classList.add("selected")},A=()=>`${(r==null?void 0:r.getBoundingClientRect().top)-100}px`,C=()=>{var q;if(!r)return;const y=[].slice.call((q=r.parentElement)==null?void 0:q.childNodes).indexOf(r),b=r.closest(".player"),z=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(z).indexOf(b),index:y}},w=()=>{var b;const y=C();m.emit("hanabi:playHand",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},x=()=>{var b;const y=C();m.emit("hanabi:discardHand",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},g=()=>{var b;const y=C();m.emit("hanabi:colorHint",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},v=()=>{var b;const y=C();m.emit("hanabi:numHint",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")};return Object.keys(t).length?l(E,{children:[l(ln,{className:u||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[u?e(Ae,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?l(Ae,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(T,{turn:t.players[t.turn].player.name}),l(dn,{children:[e(Jt,{deck:t.deck.length,fields:t.fields}),l(cn,{children:[l(un,{children:[l("p",{children:["SCORE : ",t.score]}),l("p",{children:["MISS : ",t.miss,"/3"]})]}),e(Qt,{hint:t.hint})]}),e(Gt,{cemetery:t.cemetery})]}),l(pn,{className:"playerarea",children:[t.players.map(y=>e(nn,{name:y.player.name,hands:y.hands,onclick:k,isFinish:u},y.player.name)),u&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})}),!u&&r&&r.className.indexOf("reverse")!==-1&&l(Ce,{style:{top:A()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:w,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:x,children:"\u6368\u3066\u308B"})]}),!u&&r&&r.className.indexOf("reverse")===-1&&l(Ce,{style:{top:A()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:g,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:v,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),d&&e(en,{})]}):null}),ln=i.div`
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
  color: ${c.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,dn=i.div``,cn=i.div`
  display: flex;
`,un=i.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,pn=i.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,Ce=i.div`
  position: absolute;
  right: calc(100% + 10px);
  z-index: 5;
  width: 200px;
  padding: 16px 20px;
  background: #fff;
  border: 2px solid ${c.border};
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
    background: ${c.blue};
    border-radius: 10px;
    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`,mn=a.exports.memo(()=>{const[n,t]=a.exports.useState(!1);return a.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(E,{children:n&&l(hn,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),hn=i.div`
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
`,Q=a.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:s}=n,d=p=>p===0?"empty":p%2==0?"black":"white";return e(E,{children:o?e(we,{className:d(t)}):e(we,{onClick:r,className:`${s&&"isActive"} ${d(t)}`,children:t})})}),we=i.div`
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
    outline: solid 2px ${c.green};
    box-shadow: 0 0 4px 2px rgba(34, 34, 34, 0.3);
  }
`,ke=a.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,s=[...t];for(;s.length<9;)s.push(0);return e(xn,{children:s.map((d,p)=>e(Q,{num:d,isHide:r?!1:o},p))})}),xn=i.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,ve=a.exports.memo(n=>{const{result:t}=n,{toLobby:o}=V(),r=d=>d==="WIN"?"win":d==="LOSE"?"lose":"draw",s=()=>o();return l(gn,{children:[e(fn,{className:r(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:s,color:"teal"})]})}),gn=i.div`
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
`,fn=i.div`
  font-size: 28px;
  font-weight: bold;
  text-align: center;
  &.win {
    color: ${c.red};
  }
  &.lose {
    color: ${c.blue};
  }
  &.draw {
    color: ${c.gray[1]};
  }
`,Be=a.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:s}=n,{myInfo:d}=B(),[p,u]=a.exports.useState(!1),[h,f]=a.exports.useState(null);a.exports.useEffect(()=>{u(h!==null)},[h]);const k=C=>f(C),A=()=>{f(null),m.emit("kowloonTactics:selectHand",[d,h])};return l(bn,{children:[e(yn,{className:r?"":"disabed",children:t.map((C,w)=>s?e(Q,{num:C,isHide:!0},w):e(Q,{num:C,onclick:()=>k(w),selected:h===w&&!0},w))}),r&&o&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:A,color:"teal",isDisabled:!p})]})}),bn=i.div`
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
`,yn=i.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,An=a.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return l(Cn,{children:[e(Fe,{className:"red",children:o.map((r,s)=>e("div",{className:r},s))}),e(Fe,{className:"blue",children:o.map((r,s)=>e("div",{className:r},s))})]})}),Cn=i.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,Fe=i.div`
  width: 50%;
  display: grid;
  grid-template-columns: repeat(1, 25px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
  &.red > div {
    background: rgb(229 62 62 / 40%);
    border: solid 1px ${c.red};
    border-right: none;
    &.red {
      background: ${c.red};
      box-shadow: 0 0 6px 1px rgb(229 62 62 / 70%);
    }
  }
  &.blue > div {
    background: rgb(49 130 206 / 40%);
    border: solid 1px ${c.blue};
    border-left: none;
    &.blue {
      background: ${c.blue};
      box-shadow: 0 0 6px 1px rgb(49 130 206 / 70%);
    }
  }
`,Ee=a.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return l(wn,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e($,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(kn,{children:o.map(s=>e($,{name:s.name,icon:s.icon},s.id))})]})}),wn=i.div`
  position: absolute;
  top: 0;
  width: 200px;
  min-height: 300px;
  padding: 10px;
  border-radius: 6px;
  &.red {
    left: 0;
    background: #e53e3e66;
    border: 1px solid ${c.red};
  }
  &.blue {
    right: 0;
    background: #3182ce66;
    border: 1px solid ${c.blue};
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
`,kn=i.div``,vn=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({}),[r,s]=a.exports.useState({}),[d,p]=a.exports.useState([]),[u,h]=a.exports.useState(""),[f,k]=a.exports.useState("none"),[A,C]=a.exports.useState(!1);a.exports.useEffect(()=>{m.on("common:getCurrentConfig",g=>{s(g),g.redPlayer.id===n.id||g.redSupporter.some(v=>v.id===n.id)?k("red"):(g.bluePlayer.id===n.id||g.blueSupporter.some(v=>v.id===n.id))&&k("blue")}),m.on("kowloonTactics:getData",g=>o(g)),m.on("kowloonTactics:getTurn",g=>h(g)),m.on("kowloonTactics:getJudge",g=>{const v=g[0],y=g[1];p(v),y&&C(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const w=()=>{const g=d.filter(b=>b==="red").length,v=d.filter(b=>b==="blue").length;return g>v?"red":g<v?"blue":"draw"},x=g=>{const v=w();return v==="draw"?"DRAW":v===g?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?l(E,{children:[d.length<9&&e(T,{turn:u==="red"?r.redPlayer.name:r.bluePlayer.name}),l(Bn,{children:[e(Ee,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(Ee,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),d.length<9?e(Be,{hands:t.redPlayer.hand,turn:u==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:f!=="red"&&!0}):e(ve,{result:x("red")}),l(Fn,{children:[e(ke,{hands:t.redPlayer.field,isHide:f!=="red"&&!0,isFinish:A}),e(An,{judgeArray:d}),e(ke,{hands:t.bluePlayer.field,isHide:f!=="blue"&&!0,isFinish:A})]}),d.length<9?e(Be,{hands:t.bluePlayer.hand,turn:u==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:f!=="blue"&&!0}):e(ve,{result:x("blue")})]}),e(mn,{})]}):null}),Bn=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Fn=i.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,O=a.exports.memo(n=>{const{from:t}=n;return l(En,{className:t==="1"?"from1":"from100",children:[t==="1"&&l(E,{children:[e("span",{className:"numFrom",children:"1"}),e("span",{className:"numTo",children:"100"})]}),t==="100"&&l(E,{children:[e("span",{className:"numFrom",children:"100"}),e("span",{className:"numTo",children:"1"})]})]})}),En=i.div`
  position: relative;
  width: 122px;
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_2.png');
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
`,De=a.exports.memo(n=>{const{num:t}=n;return l(Dn,{children:[e("span",{className:"top left",children:t}),e("span",{className:"top right",children:t}),e("span",{className:"center",children:t}),e("span",{className:"bottom left",children:t}),e("span",{className:"bottom right",children:t})]})}),Dn=i.div`
  position: relative;
  width: calc(100% / 3 - 20px);
  height: 188px;
  color: #fff;
  border: 1px solid #ccc;
  background-image: url('/assets/images/img_skull_2.png');
  background-size: 100% auto;
  background-repeat: no-repeat;
  border-radius: 8px;
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
`,_=40,R=a.exports.memo(n=>{const{cards:t,isReverse:o}=n;return e($n,{className:o?"reverse":"",children:t.map(r=>e(De,{num:r},r))})}),$n=i.div`
  position: relative;
  height: 348px;
  outline: 1px dotted #000;
  border-radius: 8px;
  background: #f0f8ff;
  cursor: pointer;
  &:hover {
    outline: 2px solid ${c.blue};
  }
  &.reverse {
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
  &:not(.reverse) {
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
`,_n=a.exports.memo(n=>{const{fieldCards:t}=n;return l(In,{children:[l(G,{children:[e(O,{from:"100"}),e(R,{cards:t[0]})]}),l(G,{children:[e(O,{from:"100"}),e(R,{cards:t[1]})]}),l(G,{className:"reverse",children:[e(O,{from:"1"}),e(R,{cards:t[2],isReverse:!0})]}),l(G,{className:"reverse",children:[e(O,{from:"1"}),e(R,{cards:t[3],isReverse:!0})]})]})}),In=i.div`
  display: flex;
  justify-content: space-between;
  width: 600px;
`,G=i.div`
  display: flex;
  flex-direction: column;
  &.reverse {
    flex-direction: column-reverse;
  }
`,Nn=a.exports.memo(n=>{const{deck:t,score:o}=n;return l(Sn,{children:[l("p",{children:["DECK\uFF1A",e("span",{children:t}),"\u679A"]}),l("p",{children:["SCORE\uFF1A",e("span",{children:o})]})]})}),Sn=i.div`
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`,Ln=a.exports.memo(n=>{const{hands:t}=n;return l(zn,{children:[e("p",{style:{fontWeight:"bold"},children:"\u3042\u306A\u305F\u306E\u624B\u672D"}),e(Hn,{children:t.map(o=>e(De,{num:o},o))})]})}),zn=i.div`
  width: 100%;
  margin-top: 30px;
`,Hn=i.ul`
  display: flex;
  flex-wrap: wrap;
  height: 444px;
  gap: 20px;
  margin-top: 10px;
  padding: 20px 0 20px 20px;
  border: 2px solid #999;
  background: #fff8dccc;
  border-radius: 6px;
`,Pn=a.exports.memo(n=>{const{userList:t}=n;return e(Mn,{children:e(Tn,{children:t.map(o=>e($,{name:o.name,icon:o.icon},o.id))})})}),Mn=i.div`
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
`,I={userList:[{id:"1",name:"\u305F\u306A\u304B",icon:"1",isAdmin:!1}],hands:[1,2,3,4,88,99],fieldCards:[[99,88,3,2,1],[99,88,3,2,1],[10,20,30,88,99],[10,20,30,88,99]],deck:98,score:0,turn:0},jn=a.exports.memo(()=>l(E,{children:[e(T,{turn:I.userList[I.turn].name}),l(On,{children:[e(_n,{fieldCards:I.fieldCards}),l("div",{style:{width:"450px"},children:[e(Nn,{deck:I.deck,score:I.score}),e(Ln,{hands:I.hands})]}),e(Pn,{userList:I.userList})]})]})),On=i.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
`,Rn=[{path:"/kowloon_tactics",exact:!1,children:e(vn,{})},{path:"/hanabi",exact:!1,children:e(sn,{})},{path:"/fakeArtist",exact:!1,children:e(zt,{})},{path:"/THE-Game",exact:!1,children:e(jn,{})}],Gn=a.exports.memo(()=>e(ze,{children:l(te,{children:[e(P,{exact:!0,path:"/",children:e(Xe,{})}),e(P,{path:"/lobby",children:e(oe,{children:e(re,{children:e(Bt,{})})})}),e(P,{path:"/game",render:({match:{url:n}})=>e(te,{children:Rn.map(t=>e(P,{exact:t.exact,path:`${n}${t.path}`,children:e(oe,{children:e(re,{children:t.children})})},t.path))})})]})})),Un=()=>e(Me,{children:e(Gn,{})});He.render(e(Un,{}),document.getElementById("root"));
