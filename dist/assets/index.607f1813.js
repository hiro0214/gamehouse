var ve=Object.defineProperty,Be=Object.defineProperties;var Fe=Object.getOwnPropertyDescriptors;var X=Object.getOwnPropertySymbols;var Ee=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var V=(n,t,o)=>t in n?ve(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,j=(n,t)=>{for(var o in t||(t={}))Ee.call(t,o)&&V(n,o,t[o]);if(X)for(var o of X(t))De.call(t,o)&&V(n,o,t[o]);return n},O=(n,t)=>Be(n,Fe(t));import{j as R,r as a,s as r,l as $e,u as L,B as _e,S as Q,R as H,a as Ie}from"./vendor.2d340bfb.js";const Ne=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};Ne();const e=R.exports.jsx,d=R.exports.jsxs,E=R.exports.Fragment,q=a.exports.createContext({}),Se=n=>{const{children:t}=n,[o,i]=a.exports.useState({});return e(q.Provider,{value:{myInfo:o,setMyInfo:i},children:t})},B=()=>a.exports.useContext(q),K=a.exports.memo(n=>{const{children:t}=n;return e(Le,{children:t})}),Le=r.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,ee=a.exports.memo(n=>{const{children:t}=n;return e(He,{children:t})}),He=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,ze=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F","\u30B6\u30FB\u30B2\u30FC\u30E0"],c={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=a.exports.memo(n=>{const{color:t,label:o,isDisabled:i,onclick:s}=n;return e(Pe,{className:t?`btn btn--${t}`:"btn",disabled:i,onClick:s,children:o})});F.defaultProps={color:"green"};const Pe=r.button`
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
`,z=a.exports.memo(n=>{const{text:t,size:o}=n;return e(Me,{className:o&&`heading--${o}`,children:t})});z.defaultProps={size:"1"};const Me=r.div`
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
`,Te=a.exports.memo(n=>{const{value:t,placeholder:o,onChange:i}=n;return d(je,{className:"textContainer",children:[e(Oe,{value:t,placeholder:o,onChange:i}),e(Re,{})]})}),je=r.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Oe=r.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${c.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Re=r.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=$e(),te=()=>{const{setMyInfo:n}=B(),t=()=>{const s=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let p="";for(let u=0;u<s;u++)p+=l[Math.floor(Math.random()*l.length)];return p},o=()=>{const s=151,l=`${Math.floor(Math.random()*s)+1}`;let p;return l.length===1?p=`00${l}`:l.length===2?p=`0${l}`:p=l,p};return{setInfo:a.exports.useCallback((s,l)=>{const p={id:t(),name:s,icon:o(),isAdmin:l};n(p),m.emit("common:newUser",p)},[]),randomIcon:o}},Ge=()=>{const n=L(),{setInfo:t}=te();return{enter:a.exports.useCallback(i=>{i==="$clear"?m.emit("common:clearUser"):(t(i==="admin"?"\u3044\u308F\u3082\u3068":i,i==="admin"),n.push("/lobby"))},[])}},Ye=a.exports.memo(()=>{const[n,t]=a.exports.useState(""),[o,i]=a.exports.useState(!0),{enter:s}=Ge();return e(Ue,{children:d(We,{children:[e(z,{text:"Games House"}),e(Te,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:u=>{t(u.target.value),u.target.value?i(!1):i(!0)}}),e(F,{label:"Join the game!",isDisabled:o,onclick:()=>s(n)})]})})}),Ue=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,We=r.div`
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
`,Je=a.exports.memo(()=>null),G=a.exports.memo(n=>{const{children:t,options:o,value:i,onChange:s,disabled:l,hdg:p}=n;return d(Ze,{children:[e(Ve,{children:p}),d(Xe,{value:i,onChange:s,disabled:!l,children:[t,o.map(u=>e("option",{value:u.key,children:u.value},u.value))]})]})}),Ze=r.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Xe=r.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${c.gray[1]};
  border-radius: 4px;
`,Ve=r.div`
  font-size: 14px;
  font-weight: bold;
`,Qe=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],qe=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Ke=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState(null),[i,s]=a.exports.useState(null);a.exports.useEffect(()=>{m.on("hanabi:updateConfig",u=>{o(u.colorNum),s(u.handNum)}),m.emit("hanabi:getConfig")},[]);const l=u=>{m.emit("hanabi:setColorNum",u.target.options[u.target.selectedIndex].value)},p=u=>{m.emit("hanabi:setHandNum",u.target.options[u.target.selectedIndex].value)};return d(et,{children:[e(ne,{children:e(G,{options:Qe,hdg:"\u8272\u306E\u6570",value:t||"",onChange:l,disabled:n.isAdmin})}),e(ne,{style:{marginTop:"10px"},children:e(G,{options:qe,hdg:"\u624B\u672D\u306E\u679A\u6570",value:i||"",onChange:p,disabled:n.isAdmin})})]})}),et=r.div``,ne=r.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,$=a.exports.memo(n=>{const{name:t,icon:o,editIcon:i,editName:s}=n,{myInfo:l,setMyInfo:p}=B(),[u,h]=a.exports.useState(!1),[f,k]=a.exports.useState(l.name),{randomIcon:A}=te(),C=()=>{p(O(j({},l),{icon:A()}))},w=()=>{h(!u),u&&p(O(j({},l),{name:f}))},g=x=>k(x.target.value);return a.exports.useEffect(()=>{m.emit("common:updateInfo",l)},[l]),d(tt,{className:"profile",children:[d(nt,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),i&&e(ot,{onClick:C,children:i})]}),u?e(it,{type:"text",value:f,onChange:g}):e(rt,{className:"profile__name",children:t}),s&&e(at,{onClick:w,className:u?"isEdit":"",children:s})]})}),tt=r.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${c.gray[0]};
  border: 2px solid ${c.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,nt=r.div`
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
`,ot=r.button`
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
`,rt=r.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,it=r.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${c.gray[1]};
`,at=r.button`
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
`,_="kowloonTactics",st=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});a.exports.useEffect(()=>{m.on(`${_}:updateConfig`,u=>{o(u)}),m.emit(`${_}:updateConfig`)},[]);const i=()=>m.emit(`${_}:setRedPlayer`,n),s=()=>m.emit(`${_}:setBluePlayer`,n),l=()=>m.emit(`${_}:setRedSupporter`,n),p=()=>m.emit(`${_}:setBlueSupporter`,n);return d(lt,{children:[d(oe,{className:"red",children:[d(re,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e($,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:i,color:"yellow"})]}),d(ie,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),e(ae,{children:t.redSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]}),d(oe,{className:"blue",children:[d(re,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e($,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"})]}),d(ie,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(u=>u.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:p,color:"yellow"}),e(ae,{children:t.blueSupporter.map(u=>e($,{name:u.name,icon:u.icon},u.id))})]})]})]})}),lt=r.div`
  display: flex;
  justify-content: space-between;
`,oe=r.div`
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
`,re=r.div`
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
`,ie=r.div`
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
`,ae=r.div``,dt=a.exports.memo(()=>null),ct=()=>{const[n,t]=a.exports.useState(null),o=a.exports.useCallback(i=>{switch(i){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(st,{}));break;case"Hanabi":t(e(Ke,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(Je,{}));break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":t(e(dt,{}));break}},[]);return{currentConfig:n,setConfig:o}},ut=()=>{const n=L();return{gameStart:a.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break;case"\u30B6\u30FB\u30B2\u30FC\u30E0":n.push("/game/THE-Game");break}},[])}},se=[];ze.map(n=>se.push({key:n,value:n}));const pt=a.exports.memo(()=>{const[n,t]=a.exports.useState(null),{myInfo:o}=B(),{gameStart:i}=ut(),{currentConfig:s,setConfig:l}=ct(),p=h=>{const f=h.target.value;f.indexOf("--")===-1?m.emit("common:setCurrentGame",f):m.emit("common:setCurrentGame",null)},u=()=>m.emit("common:gameStart");return a.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),l(h)}),m.on("common:setCurrentGame",h=>{t(h),l(h)}),m.on("common:gameStart",h=>i(h)),m.emit("common:getCurrentGame")},[]),d(mt,{children:[e(z,{text:"Setting",size:"2"}),e(ht,{children:e(G,{options:se,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:p,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(gt,{children:n&&d(xt,{children:[s,o.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:u,color:"blue"})]})})]})}),mt=r.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,ht=r.div`
  display: flex;
  justify-content: center;
`,gt=r.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,xt=r.div`
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
`,ft=a.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=B();return d(bt,{children:[e(z,{text:"Player",size:"2"}),e(yt,{children:t.map(i=>e($,{name:i.name,icon:i.icon,editIcon:i.id===o.id&&!0,editName:i.id===o.id&&!0},i.id))})]})}),bt=r.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,yt=r.ul`
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
`,At=a.exports.memo(()=>{const[n,t]=a.exports.useState([]),o=L();return a.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",i=>t(i)),m.on("common:toTop",()=>o.push("/"))},[]),d(Ct,{children:[e(ft,{userList:n}),e(pt,{})]})}),Ct=r.div`
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
`;let I=!1,Y=0,U=0;const wt=a.exports.memo(n=>{const{gameData:t,setCanvas:o,color:i,disable:s,status:l,isFake:p,onclickAnswer:u}=n;return a.exports.useEffect(()=>{const h=document.getElementById("canvas"),f=h.getContext("2d");f.lineCap="round",f.lineWidth=4,f.strokeStyle=i,h.addEventListener("mousedown",A=>{I=!0,Y=A.offsetX,U=A.offsetY}),h.addEventListener("mousemove",A=>{if(!I)return;const C=A.offsetX,w=A.offsetY;k(f,Y,U,C,w),Y=C,U=w}),h.addEventListener("mouseout",()=>{!I||(I=!1,o(h))}),h.addEventListener("mouseup",()=>{!I||(I=!1,o(h))});const k=(A,C,w,g,x)=>{A.beginPath(),A.moveTo(C,w),A.lineTo(g,x),A.stroke()}},[]),a.exports.useEffect(()=>{const f=document.getElementById("canvas").getContext("2d");if(t.context.length){const k=new Image;k.src=t.context,k.onload=()=>f.drawImage(k,0,0)}},[t.context]),d(kt,{children:[e(vt,{id:"canvas",width:750,height:500,className:s||l!=="game"?"disable":""}),e(Bt,{className:l==="theme"?"is-active":"",children:d("p",{children:["\u304A\u984C\u3092\u78BA\u8A8D\u3057\u3066\u4E0B\u3055\u3044",e("br",{}),"10\u79D2\u5F8C\u306B\u30B2\u30FC\u30E0\u304C\u958B\u59CB\u3057\u307E\u3059"]})}),e(N,{className:l==="title"?"is-active":"",children:p?d("p",{children:["\u304A\u984C\u3092\u77E5\u3063\u3066\u3044\u308B\u30D5\u30EA\u3092\u3057\u3066",e("br",{}),"\u30D0\u30EC\u306A\u3044\u3088\u3046\u306B\u7D75\u3092\u63CF\u3053\u3046"]}):d("p",{children:["\u5354\u529B\u3057\u3066\u7D75\u3092\u63CF\u3053\u3046",e("br",{}),"\u305F\u3060\u3057\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})}),e(N,{style:{animationDelay:"1s"},className:l==="vote"?"is-active":"",children:d("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u601D\u3046\u4EBA\u306B",e("br",{}),"\u6295\u7968\u3057\u3066\u304F\u3060\u3055\u3044"]})}),l==="voted"&&d(E,{children:[e(N,{className:l==="voted"?"is-active":"",children:"\u6295\u7968\u7D50\u679C\u767A\u8868"}),d(Ft,{children:[e("p",{children:"\u6700\u591A\u6295\u7968\u8005\u306F..."}),e(le,{children:t.mostVote}),e("p",{style:{marginTop:"50px"},children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F..."}),e(le,{children:t.players[t.fakeMan].name})]}),e(N,{className:l==="voted"?"is-active":"",style:{animationDelay:"15s"},children:t.mostVote===t.players[t.fakeMan].name?d("p",{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u304C",e("br",{}),"\u304A\u984C\u3092\u5F53\u3066\u308B\u3053\u3068\u304C\u3067\u304D\u308C\u3070\u9006\u8EE2\u52DD\u5229"]}):e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]}),l==="reversal"&&e(Et,{className:p?"":"disable",children:e("ul",{children:t.answerList.map((h,f)=>e("li",{style:{animationDelay:`${f*.1}s`},onClick:()=>u(f),children:h},h))})}),l==="answer"&&d(E,{children:[d(Dt,{children:[d("div",{children:[e("p",{className:"hdg",children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u56DE\u7B54"}),e("p",{className:"card",children:t.answer})]}),d("div",{children:[e("p",{className:"hdg",style:{marginTop:"50px"},children:"\u6B63\u89E3"}),e("p",{className:"card",children:t.theme})]})]}),e(N,{className:"modal is-active",children:t.answer===t.theme?e("p",{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"}):e("p",{children:"\u82B8\u8853\u5BB6\u306E\u52DD\u5229!!"})})]})]})}),kt=r.div`
  position: relative;
  width: 750px;
  height: 100%;
`,vt=r.canvas`
  background: #fff;
  border: 3px solid #ccc;
  border-radius: 6px;
  cursor: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAA2CAYAAACMRWrdAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAUGVYSWZNTQAqAAAACAACARIAAwAAAAEAAQAAh2kABAAAAAEAAAAmAAAAAAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAAA2oAMABAAAAAEAAAA2AAAAAOGeALoAAAIwaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA1LjQuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KQ9JZ6AAAAi5JREFUaAXtmDFLxDAUx08HERcnUcHBUdD9FgcHZyflhlbcBHfh1rr5QXTxO7grOLk6OOriJA6iov/H9UHIpbZ3Se+9lAReX5Jr0v+v7yUX2uuNyhDuHpbDFkZd8V8LIPwa9oI69a3Doi4UKROM65/ov4b1Y6XLKsAYkDzBH8OiSlMS+wozQarqlKYXMDNND9E+gqksl1BVBePq5zQ9x7iv0lTCbUAciXVBNO0jQJVwN55g9AJUwu0HAFML9xAI7h3zrMLUlFMoabqmqu57wxy7aohKIYvwtKVXia7rf8bYrXIudjtckfYFBNQBuH5/xLg1SzydQdVsKCRu0q3/FmOWLagCbX4BauDojMii6vwV7rWPWhQpe5wKODpR2MJc7QL3zcHM4oLisaJwA6gkASzG5b/x+5lJU9b/g+J5xODqwD4AcTAllAo4igoLYU9/BX1PKJ5LLHIZAEy4J7Q3A0GpgKM3ewdbcUAV6GOR03qxyO1B/BLMLk02iqawYnBtQjG8OFzISDEUezG4bYTO3FBYUEgvBpclOL8dUzRy9PCQaWjPJQZHx6+05jyiKxa5LEXOb02myCGDgpfOpyWljb19h2yLpWXn/wpS5DxSVywtM4hOJ5QUOfeuS2k5mMdlloU+nZ/Aflp8qP1lusVHjU/d1pqjdZyPP262PaHhVEDxKwwFpwoqFJxKKF841VDTwkUBNSlcVFBN4aKEqoOLGqoKrhNQNlynoEy4nBtN/R9DgcbJNTnGfQAAAABJRU5ErkJggg==),
    pointer;
  &.disable {
    pointer-events: none;
  }
`,Bt=r.div`
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
`,N=r.div`
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
`,Ft=r.div`
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
`,le=r.p`
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
`,Et=r.div`
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
`,Dt=r.div`
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
`,P=a.exports.memo(n=>{const{turn:t}=n,[o,i]=a.exports.useState(!1);return a.exports.useEffect(()=>{i(!0),setTimeout(()=>i(!1),1e3)},[t]),d($t,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),$t=r.div`
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
`,W=()=>{const n=L();return a.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:a.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},D="fakeArtist",_t=a.exports.memo(()=>{const[n,t]=a.exports.useState({}),[o,i]=a.exports.useState(null),{myInfo:s}=B(),[l,p]=a.exports.useState(""),[u,h]=a.exports.useState(!1),{toLobby:f}=W();a.exports.useEffect(()=>{m.on(`${D}:getData`,g=>t(g)),m.on(`${D}:vote`,()=>p("vote")),m.on(`${D}:voted`,()=>p("voted")),m.on(`${D}:reversal`,g=>{t(g),p("reversal")}),m.on(`${D}:answer`,g=>{t(g),p("answer")}),m.on(`${D}:finish`,g=>{t(g),p("finish")}),m.emit(`${D}:getData`),setTimeout(()=>p("theme"),500),setTimeout(()=>p("title"),10500),setTimeout(()=>p("game"),16e3)},[]);const k=()=>{const g=o==null?void 0:o.toDataURL();m.emit(`${D}:draw`,g),i(null)},A=()=>{const g=o==null?void 0:o.getContext("2d");if(g.clearRect(0,0,750,500),n.context.length){const x=new Image;x.src=n.context,x.onload=()=>g.drawImage(x,0,0)}i(null)},C=g=>{h(!0),m.emit(`${D}:vote`,g)},w=g=>m.emit(`${D}:answer`,g);return Object.keys(n).length?d(It,{children:[l==="game"&&e(P,{turn:n.players[n.turn].name}),l==="game"&&(o?d(Nt,{children:[e("p",{children:"\u3053\u308C\u3067\u3044\u3044?"}),e("button",{style:{backgroundColor:c.green[0]},onClick:k,children:"\u66F8\u3044\u305F\uFF01"}),e("button",{style:{backgroundColor:c.gray[1]},onClick:A,children:"\u66F8\u304D\u76F4\u3059\uFF01"})]}):n.players[n.fakeMan].id===s.id?d(M,{children:["\u30A8\u30BB\u82B8\u8853\u5BB6\u3060\u3068\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044",e("br",{}),"\u30D0\u30EC\u3066\u3082\u4F55\u3092\u63CF\u3044\u3066\u3044\u308B\u304B\u5F53\u3066\u308C\u3070\u52DD\u3061"]}):d(M,{children:["\u3053\u306E\u4E2D\u306B\u4E00\u4EBA\u304A\u984C\u3092\u77E5\u3089\u306A\u3044\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u3044\u308B",e("br",{}),"\u30A8\u30BB\u82B8\u8853\u5BB6\u306B\u304A\u984C\u304C\u30D0\u30EC\u3066\u306F\u3044\u3051\u306A\u3044"]})),l==="vote"&&e(M,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u306F\u8AB0\u3060\uFF1F"}),l==="reversal"&&e(M,{children:"\u30A8\u30BB\u82B8\u8853\u5BB6\u304C\u56DE\u7B54\u3092\u9078\u629E\u3059\u308B"}),l==="finish"&&d(St,{children:[n.answer?n.answer===n.theme?"\u30A8\u30BB\u82B8\u8853\u5BB6":"\u82B8\u8853\u5BB6":"\u30A8\u30BB\u82B8\u8853\u5BB6","\u306E\u52DD\u5229!!"]}),d(Lt,{children:[e(wt,{gameData:n,setCanvas:i,color:n.colors[n.players.findIndex(g=>g.id===s.id)],disable:!!(o||n.players[n.turn].id!==s.id),status:l,isFake:n.players[n.fakeMan].id===s.id,onclickAnswer:w}),d(Ht,{children:[d(de,{children:[e("span",{children:"\u4ECA\u56DE\u306E\u30C6\u30FC\u30DE"}),e(ce,{children:n.category})]}),d(de,{style:{marginTop:"10px"},children:[e("span",{children:"\u4ECA\u56DE\u306E\u304A\u984C"}),e(ce,{children:n.players[n.fakeMan].id!==s.id?n.theme:"?"})]}),e(zt,{children:n.players.map((g,x)=>l==="vote"?d(ue,{style:{borderColor:n.colors[x]},children:[u?e(pe,{children:e("img",{src:`/assets/images/pokemon/${g.icon}.png`})}):e(Pt,{onClick:()=>C(x),children:"\u6295\u7968"}),e(me,{children:g.name})]},g.id):d(ue,{style:{borderColor:n.colors[x]},children:[e(pe,{children:e("img",{src:`/assets/images/pokemon/${g.icon}.png`})}),e(me,{children:g.name})]},g.id))})]})]}),l==="finish"&&s.isAdmin&&e("div",{style:{marginTop:"30px",textAlign:"center"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})})]}):null}),It=r.div`
  position: relative;
  margin-top: 150px;
  margin-bottom: 150px;
`,Nt=r.div`
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
`,M=r.p`
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
`,St=r.p`
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
`,Lt=r.div`
  position: relative;
  display: flex;
  width: 1000px;
  height: 500px;
`,Ht=r.div`
  width: calc(100% - 756px);
  padding-left: 20px;
  padding-right: 20px;
`,de=r.div`
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
`,ce=r.p`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: bold;
`,zt=r.ul`
  height: calc(100% - 188px);
  margin-top: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`,ue=r.li`
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
`,pe=r.div`
  width: 40px;
  height: 40px;
  padding: 6px;
  background: #fff;
  border: 1px solid ${c.border};
  border-radius: 50%;
  > img {
    width: 100%;
  }
`,Pt=r.button`
  width: 40px;
  height: 40px;
  color: #000;
  background: yellow;
  font-size: 12px;
  font-weight: bold;
  border: 2px solid ${c.cyan};
  border-radius: 50%;
`,me=r.div`
  width: calc(100% - 60px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 14px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Mt=a.exports.memo(n=>{const{cemetery:t}=n;return e(Tt,{children:t.map(o=>e(jt,{className:o.color,children:o.num.map((i,s)=>e(Ot,{children:i},s))},o.color))})}),Tt=r.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,jt=r.div`
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
`,Ot=r.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,he=a.exports.memo(n=>{const{color:t,num:o,colorHint:i,numHint:s,isReverse:l,onclick:p}=n,u=()=>{let h="";return i&&(h+=`hint_${t}`),s&&(h=h===""?`hint_${o}`:`${h} hint_${o}`),h};return e(E,{children:l?e(ge,{className:`reverse hand ${(i||s)&&u()}`,onClick:p}):e(ge,{className:`${t} hand ${(i||s)&&u()}`,onClick:p,children:o!==0&&o})})}),ge=r.div`
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
`,Rt=a.exports.memo(n=>{const{deck:t,fields:o}=n;return d(Gt,{children:[e(Yt,{children:t}),e(Ut,{children:o.map((i,s)=>e(he,{color:i.color,num:i.num},s))})]})}),Gt=r.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,Yt=r.div`
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
`,Ut=r.div`
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
`,Wt=a.exports.memo(n=>{const{hint:t}=n;return e(Jt,{children:[...Array(t)].map(o=>e(Zt,{},o))})}),Jt=r.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,Zt=r.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,Xt=a.exports.memo(()=>e(Vt,{children:d("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),Vt=r.div`
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
`,Qt=a.exports.memo(n=>{const{name:t,hands:o,onclick:i,isFinish:s}=n,{myInfo:l}=B();return d(qt,{className:"player",children:[e(Kt,{children:o.map((p,u)=>e(he,{color:p.color,num:p.num,colorHint:p.colorHint,numHint:p.numHint,isReverse:s?!1:t===l.name,onclick:i},u))}),d(en,{children:["\u27A1\uFE0E ",t]})]})}),qt=r.div`
  min-width: 310px;
`,Kt=r.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,en=r.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,tn=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({}),[i,s]=a.exports.useState(null),[l,p]=a.exports.useState(!1),[u,h]=a.exports.useState(!1),{toLobby:f}=W();a.exports.useEffect(()=>{m.on("hanabi:getData",(y,b)=>{b==="miss"||b==="gameover"?(p(!0),setTimeout(()=>{b==="gameover"&&h(!0),p(!1),o(y)},2400)):(b==="finish"&&h(!0),o(y))}),m.emit("hanabi:getData")},[]);const k=y=>{var S;const b=y.currentTarget;s(b),(S=document.querySelector(".hand.selected"))==null||S.classList.remove("selected"),b.classList.add("selected")},A=()=>`${(i==null?void 0:i.getBoundingClientRect().top)-100}px`,C=()=>{var Z;if(!i)return;const y=[].slice.call((Z=i.parentElement)==null?void 0:Z.childNodes).indexOf(i),b=i.closest(".player"),S=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(S).indexOf(b),index:y}},w=()=>{var b;const y=C();m.emit("hanabi:playHand",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},g=()=>{var b;const y=C();m.emit("hanabi:discardHand",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},x=()=>{var b;const y=C();m.emit("hanabi:colorHint",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")},v=()=>{var b;const y=C();m.emit("hanabi:numHint",y),s(null),(b=document.querySelector(".hand.selected"))==null||b.classList.remove("selected")};return Object.keys(t).length?d(E,{children:[d(nn,{className:u||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[u?e(xe,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?d(xe,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(P,{turn:t.players[t.turn].player.name}),d(on,{children:[e(Rt,{deck:t.deck.length,fields:t.fields}),d(rn,{children:[d(an,{children:[d("p",{children:["SCORE : ",t.score]}),d("p",{children:["MISS : ",t.miss,"/3"]})]}),e(Wt,{hint:t.hint})]}),e(Mt,{cemetery:t.cemetery})]}),d(sn,{className:"playerarea",children:[t.players.map(y=>e(Qt,{name:y.player.name,hands:y.hands,onclick:k,isFinish:u},y.player.name)),u&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})}),!u&&i&&i.className.indexOf("reverse")!==-1&&d(fe,{style:{top:A()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:w,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:g,children:"\u6368\u3066\u308B"})]}),!u&&i&&i.className.indexOf("reverse")===-1&&d(fe,{style:{top:A()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:x,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:v,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),l&&e(Xt,{})]}):null}),nn=r.div`
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
`,xe=r.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${c.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,on=r.div``,rn=r.div`
  display: flex;
`,an=r.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,sn=r.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,fe=r.div`
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
`,ln=a.exports.memo(()=>{const[n,t]=a.exports.useState(!1);return a.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(E,{children:n&&d(dn,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),dn=r.div`
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
`,J=a.exports.memo(n=>{const{num:t,isHide:o,onclick:i,selected:s}=n,l=p=>p===0?"empty":p%2==0?"black":"white";return e(E,{children:o?e(be,{className:l(t)}):e(be,{onClick:i,className:`${s&&"isActive"} ${l(t)}`,children:t})})}),be=r.div`
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
`,ye=a.exports.memo(n=>{const{hands:t,isHide:o,isFinish:i}=n,s=[...t];for(;s.length<9;)s.push(0);return e(cn,{children:s.map((l,p)=>e(J,{num:l,isHide:i?!1:o},p))})}),cn=r.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Ae=a.exports.memo(n=>{const{result:t}=n,{toLobby:o}=W(),i=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",s=()=>o();return d(un,{children:[e(pn,{className:i(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:s,color:"teal"})]})}),un=r.div`
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
`,pn=r.div`
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
`,Ce=a.exports.memo(n=>{const{hands:t,turn:o,isPlayer:i,isHide:s}=n,{myInfo:l}=B(),[p,u]=a.exports.useState(!1),[h,f]=a.exports.useState(null);a.exports.useEffect(()=>{u(h!==null)},[h]);const k=C=>f(C),A=()=>{f(null),m.emit("kowloonTactics:selectHand",[l,h])};return d(mn,{children:[e(hn,{className:i?"":"disabed",children:t.map((C,w)=>s?e(J,{num:C,isHide:!0},w):e(J,{num:C,onclick:()=>k(w),selected:h===w&&!0},w))}),i&&o&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:A,color:"teal",isDisabled:!p})]})}),mn=r.div`
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
`,hn=r.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,gn=a.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return d(xn,{children:[e(we,{className:"red",children:o.map((i,s)=>e("div",{className:i},s))}),e(we,{className:"blue",children:o.map((i,s)=>e("div",{className:i},s))})]})}),xn=r.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,we=r.div`
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
`,ke=a.exports.memo(n=>{const{player:t,supporter:o,area:i}=n;return d(fn,{className:i,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e($,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(bn,{children:o.map(s=>e($,{name:s.name,icon:s.icon},s.id))})]})}),fn=r.div`
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
`,bn=r.div``,yn=a.exports.memo(()=>{const{myInfo:n}=B(),[t,o]=a.exports.useState({}),[i,s]=a.exports.useState({}),[l,p]=a.exports.useState([]),[u,h]=a.exports.useState(""),[f,k]=a.exports.useState("none"),[A,C]=a.exports.useState(!1);a.exports.useEffect(()=>{m.on("common:getCurrentConfig",x=>{s(x),x.redPlayer.id===n.id||x.redSupporter.some(v=>v.id===n.id)?k("red"):(x.bluePlayer.id===n.id||x.blueSupporter.some(v=>v.id===n.id))&&k("blue")}),m.on("kowloonTactics:getData",x=>o(x)),m.on("kowloonTactics:getTurn",x=>h(x)),m.on("kowloonTactics:getJudge",x=>{const v=x[0],y=x[1];p(v),y&&C(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const w=()=>{const x=l.filter(b=>b==="red").length,v=l.filter(b=>b==="blue").length;return x>v?"red":x<v?"blue":"draw"},g=x=>{const v=w();return v==="draw"?"DRAW":v===x?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(i).length?d(E,{children:[l.length<9&&e(P,{turn:u==="red"?i.redPlayer.name:i.bluePlayer.name}),d(An,{children:[e(ke,{player:i.redPlayer,supporter:i.redSupporter,area:"red"}),e(ke,{player:i.bluePlayer,supporter:i.blueSupporter,area:"blue"}),l.length<9?e(Ce,{hands:t.redPlayer.hand,turn:u==="red"&&!0,isPlayer:i.redPlayer.id===n.id&&!0,isHide:f!=="red"&&!0}):e(Ae,{result:g("red")}),d(Cn,{children:[e(ye,{hands:t.redPlayer.field,isHide:f!=="red"&&!0,isFinish:A}),e(gn,{judgeArray:l}),e(ye,{hands:t.bluePlayer.field,isHide:f!=="blue"&&!0,isFinish:A})]}),l.length<9?e(Ce,{hands:t.bluePlayer.hand,turn:u==="blue"&&!0,isPlayer:i.bluePlayer.id===n.id&&!0,isHide:f!=="blue"&&!0}):e(Ae,{result:g("blue")})]}),e(ln,{})]}):null}),An=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Cn=r.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,T=a.exports.memo(n=>{const{from:t}=n;return d(wn,{className:t==="1"?"from1":"from100",children:[t==="1"&&d(E,{children:[e("span",{className:"numFrom",children:"1"}),e("span",{className:"numTo",children:"100"})]}),t==="100"&&d(E,{children:[e("span",{className:"numFrom",children:"100"}),e("span",{className:"numTo",children:"1"})]})]})}),wn=r.div`
  position: relative;
  width: 122px;
  height: 190px;
  color: #fff;
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
`,kn=a.exports.memo(n=>d(vn,{children:[d(Bn,{children:[e(T,{from:"100"}),e(T,{from:"100"})]}),d(Fn,{children:[e(T,{from:"1"}),e(T,{from:"1"})]})]})),vn=r.div`
  display: flex;
  width: 600px;
  height: 600px;
`,Bn=r.div`
  display: flex;
  gap: 35px;
`,Fn=r.div`
  display: flex;
  align-items: flex-end;
  gap: 35px;
  margin-left: 35px;
`,En=a.exports.memo(n=>d(Dn,{children:[d("p",{children:["DECK\uFF1A",e("span",{children:"98"}),"\u679A"]}),d("p",{children:["SCORE\uFF1A",e("span",{children:"0"})]})]})),Dn=r.div`
  > p {
    font-size: 20px;
    font-weight: bold;
  }
`,$n=a.exports.memo(n=>{const{num:t}=n;return d(_n,{children:[e("span",{className:"top left",children:t}),e("span",{className:"top right",children:t}),e("span",{className:"center",children:t}),e("span",{className:"bottom left",children:t}),e("span",{className:"bottom right",children:t})]})}),_n=r.div`
  position: relative;
  width: calc(100% / 3 - 20px);
  height: 190px;
  color: #fff;
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
`,In=[1,2,3,4,88,99],Nn=a.exports.memo(n=>d(Sn,{children:[e("p",{style:{fontWeight:"bold"},children:"\u3042\u306A\u305F\u306E\u624B\u672D"}),e(Ln,{children:In.map(t=>e($n,{num:t},t))})]})),Sn=r.div`
  width: 100%;
  margin-top: 30px;
`,Ln=r.ul`
  display: flex;
  flex-wrap: wrap;
  height: 444px;
  gap: 20px;
  margin-top: 10px;
  padding: 20px 0 20px 20px;
  border: 2px solid #999;
  background: #efdbc4cc;
  border-radius: 6px;
`,Hn=a.exports.memo(n=>e(zn,{})),zn=r.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 200px;
  height: 400px;
  background: red;
`,Pn=a.exports.memo(()=>d(E,{children:[e(P,{turn:"\u305F\u306A\u304B"}),d(Mn,{children:[e(kn,{}),d("div",{style:{width:"450px"},children:[e(En,{}),e(Nn,{})]}),e(Hn,{})]})]})),Mn=r.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  width: 1100px;
  margin-top: 150px;
  margin-right: 200px;
  margin-bottom: 50px;
`,Tn=[{path:"/kowloon_tactics",exact:!1,children:e(yn,{})},{path:"/hanabi",exact:!1,children:e(tn,{})},{path:"/fakeArtist",exact:!1,children:e(_t,{})},{path:"/THE-Game",exact:!1,children:e(Pn,{})}],jn=a.exports.memo(()=>e(_e,{children:d(Q,{children:[e(H,{exact:!0,path:"/",children:e(Ye,{})}),e(H,{path:"/lobby",children:e(K,{children:e(ee,{children:e(At,{})})})}),e(H,{path:"/game",render:({match:{url:n}})=>e(Q,{children:Tn.map(t=>e(H,{exact:t.exact,path:`${n}${t.path}`,children:e(K,{children:e(ee,{children:t.children})})},t.path))})})]})})),On=()=>e(Se,{children:e(jn,{})});Ie.render(e(On,{}),document.getElementById("root"));
