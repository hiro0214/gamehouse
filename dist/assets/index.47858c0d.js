var ue=Object.defineProperty,pe=Object.defineProperties;var me=Object.getOwnPropertyDescriptors;var T=Object.getOwnPropertySymbols;var he=Object.prototype.hasOwnProperty,xe=Object.prototype.propertyIsEnumerable;var O=(n,t,o)=>t in n?ue(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,H=(n,t)=>{for(var o in t||(t={}))he.call(t,o)&&O(n,o,t[o]);if(T)for(var o of T(t))xe.call(t,o)&&O(n,o,t[o]);return n},I=(n,t)=>pe(n,me(t));import{j as z,r as s,s as a,l as ge,u as P,B as be,S as R,R as S,a as fe}from"./vendor.2d340bfb.js";const ye=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerpolicy&&(l.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?l.credentials="include":i.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(i){if(i.ep)return;i.ep=!0;const l=o(i);fetch(i.href,l)}};ye();const e=z.exports.jsx,p=z.exports.jsxs,D=z.exports.Fragment,U=s.exports.createContext({}),Ce=n=>{const{children:t}=n,[o,r]=s.exports.useState({});return e(U.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},w=()=>s.exports.useContext(U),G=s.exports.memo(n=>{const{children:t}=n;return e(ke,{children:t})}),ke=a.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,q=s.exports.memo(n=>{const{children:t}=n;return e(we,{children:t})}),we=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,ve=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],d={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},v=s.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:i}=n;return e(Fe,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:i,children:o})});v.defaultProps={color:"green"};const Fe=a.button`
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
`,N=s.exports.memo(n=>{const{text:t,size:o}=n;return e(Ae,{className:o&&`heading--${o}`,children:t})});N.defaultProps={size:"1"};const Ae=a.div`
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
`,$e=s.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return p(_e,{className:"textContainer",children:[e(Ee,{value:t,placeholder:o,onChange:r}),e(De,{})]})}),_e=a.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Ee=a.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,De=a.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=ge(),J=()=>{const{setMyInfo:n}=w(),t=()=>{const i=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let u="";for(let c=0;c<i;c++)u+=l[Math.floor(Math.random()*l.length)];return u},o=()=>{const i=151,l=`${Math.floor(Math.random()*i)+1}`;let u;return l.length===1?u=`00${l}`:l.length===2?u=`0${l}`:u=l,u};return{setInfo:s.exports.useCallback((i,l)=>{const u={id:t(),name:i,icon:o(),isAdmin:l};n(u),i==="$clear"&&m.emit("common:clearUser"),m.emit("common:newUser",u)},[]),randomIcon:o}},Be=()=>{const n=P(),{setInfo:t}=J();return{enter:s.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},Se=s.exports.memo(()=>{const[n,t]=s.exports.useState(""),[o,r]=s.exports.useState(!0),{enter:i}=Be();return e(Ne,{children:p(He,{children:[e(N,{text:"Games House"}),e($e,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{t(c.target.value),c.target.value?r(!1):r(!0)}}),e(v,{label:"Join the game!",isDisabled:o,onclick:()=>i(n)})]})})}),Ne=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,He=a.div`
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
`,L=s.exports.memo(n=>{const{children:t,options:o,value:r,onChange:i,disabled:l,hdg:u}=n;return p(Ie,{children:[e(Pe,{children:u}),p(ze,{value:r,onChange:i,disabled:!l,children:[t,o.map(c=>e("option",{value:c.key,children:c.value},c.value))]})]})}),Ie=a.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,ze=a.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${d.gray[1]};
  border-radius: 4px;
`,Pe=a.div`
  font-size: 14px;
  font-weight: bold;
`,Le=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],je=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Me=s.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=s.exports.useState(null),[r,i]=s.exports.useState(null);s.exports.useEffect(()=>{m.on("hanabi:updateConfig",c=>{o(c.colorNum),i(c.handNum)}),m.emit("hanabi:getConfig")},[]);const l=c=>{m.emit("hanabi:setColorNum",c.target.options[c.target.selectedIndex].value)},u=c=>{m.emit("hanabi:setHandNum",c.target.options[c.target.selectedIndex].value)};return p(Te,{children:[e(W,{children:e(L,{options:Le,hdg:"\u8272\u306E\u6570",value:t||"",onChange:l,disabled:n.isAdmin})}),e(W,{style:{marginTop:"10px"},children:e(L,{options:je,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:u,disabled:n.isAdmin})})]})}),Te=a.div``,W=a.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,$=s.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:i}=n,{myInfo:l,setMyInfo:u}=w(),[c,h]=s.exports.useState(!1),[f,A]=s.exports.useState(l.name),{randomIcon:F}=J(),y=()=>{u(I(H({},l),{icon:F()}))},k=()=>{h(!c),c&&u(I(H({},l),{name:f}))},_=b=>A(b.target.value);return s.exports.useEffect(()=>{m.emit("common:updateInfo",l)},[l]),p(Oe,{className:"profile",children:[p(Re,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(Ue,{onClick:y,children:r})]}),c?e(qe,{type:"text",value:f,onChange:_}):e(Ge,{className:"profile__name",children:t}),i&&e(Je,{onClick:k,className:c?"isEdit":"",children:i})]})}),Oe=a.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${d.gray[0]};
  border: 2px solid ${d.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Re=a.div`
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
`,Ue=a.button`
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
`,Ge=a.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,qe=a.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${d.gray[1]};
`,Je=a.button`
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
`,E="kowloonTactics",We=s.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=s.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});s.exports.useEffect(()=>{m.on(`${E}:updateConfig`,c=>{o(c)}),m.emit(`${E}:updateConfig`)},[]);const r=()=>m.emit(`${E}:setRedPlayer`,n),i=()=>m.emit(`${E}:setBluePlayer`,n),l=()=>m.emit(`${E}:setRedSupporter`,n),u=()=>m.emit(`${E}:setBlueSupporter`,n);return p(Ye,{children:[p(Y,{className:"red",children:[p(K,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e($,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(v,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),p(X,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(c=>c.id===n.id)&&e(v,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),e(V,{children:t.redSupporter.map(c=>e($,{name:c.name,icon:c.icon},c.id))})]})]}),p(Y,{className:"blue",children:[p(K,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e($,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(v,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:i,color:"yellow"})]}),p(X,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(c=>c.id===n.id)&&e(v,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:u,color:"yellow"}),e(V,{children:t.blueSupporter.map(c=>e($,{name:c.name,icon:c.icon},c.id))})]})]})]})}),Ye=a.div`
  display: flex;
  justify-content: space-between;
`,Y=a.div`
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
`,K=a.div`
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
`,X=a.div`
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
`,V=a.div``,Ke=()=>{const[n,t]=s.exports.useState(null),o=s.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(We,{}));break;case"Hanabi":t(e(Me,{}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},Xe=()=>{const n=P();return{gameStart:s.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break}},[])}},Q=[];ve.map(n=>Q.push({key:n,value:n}));const Ve=s.exports.memo(()=>{const[n,t]=s.exports.useState(null),{myInfo:o}=w(),{gameStart:r}=Xe(),{currentConfig:i,setConfig:l}=Ke(),u=h=>{const f=h.target.value;f.indexOf("--")===-1?m.emit("common:setCurrentGame",f):m.emit("common:setCurrentGame",null)},c=()=>m.emit("common:gameStart");return s.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),l(h)}),m.on("common:setCurrentGame",h=>{t(h),l(h)}),m.on("common:gameStart",h=>r(h)),m.emit("common:getCurrentGame")},[]),p(Qe,{children:[e(N,{text:"Setting",size:"2"}),e(Ze,{children:e(L,{options:Q,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:u,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(et,{children:n&&p(tt,{children:[i,o.isAdmin&&e(v,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),Qe=a.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ze=a.div`
  display: flex;
  justify-content: center;
`,et=a.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,tt=a.div`
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
`,nt=s.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=w();return p(ot,{children:[e(N,{text:"Player",size:"2"}),e(rt,{children:t.map(r=>e($,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),ot=a.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,rt=a.ul`
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
`,it=s.exports.memo(()=>{const[n,t]=s.exports.useState([]);return s.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",o=>t(o))},[]),p(st,{children:[e(nt,{userList:n}),e(Ve,{})]})}),st=a.div`
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
`,at=s.exports.memo(n=>{const{cemetery:t}=n;return e(lt,{children:t.map(o=>e(ct,{className:o.color,children:o.num.map((r,i)=>e(dt,{children:r},i))},o.color))})}),lt=a.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,ct=a.div`
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
`,dt=a.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,Z=s.exports.memo(n=>{const{color:t,num:o,colorHint:r,numHint:i,isReverse:l,onclick:u}=n,c=()=>{let h="";return r&&(h+=`hint_${t}`),i&&(h=h===""?`hint_${o}`:`${h} hint_${o}`),h};return e(D,{children:l?e(ee,{className:`reverse hand ${(r||i)&&c()}`,onClick:u}):e(ee,{className:`${t} hand ${(r||i)&&c()}`,onClick:u,children:o!==0&&o})})}),ee=a.div`
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
`,ut=s.exports.memo(n=>{const{deck:t,fields:o}=n;return p(pt,{children:[e(mt,{children:t}),e(ht,{children:o.map((r,i)=>e(Z,{color:r.color,num:r.num},i))})]})}),pt=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,mt=a.div`
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
`,ht=a.div`
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
`,xt=s.exports.memo(n=>{const{hint:t}=n;return e(gt,{children:[...Array(t)].map(o=>e(bt,{},o))})}),gt=a.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,bt=a.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,ft=s.exports.memo(()=>e(yt,{children:p("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),yt=a.div`
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
`,Ct=s.exports.memo(n=>{const{name:t,hands:o,onclick:r,isFinish:i}=n,{myInfo:l}=w();return p(kt,{className:"player",children:[e(wt,{children:o.map((u,c)=>e(Z,{color:u.color,num:u.num,colorHint:u.colorHint,numHint:u.numHint,isReverse:i?!1:t===l.name,onclick:r},c))}),p(vt,{children:["\u27A1\uFE0E ",t]})]})}),kt=a.div`
  min-width: 310px;
`,wt=a.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,vt=a.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,te=s.exports.memo(n=>{const{turn:t}=n,[o,r]=s.exports.useState(!1);return s.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),p(Ft,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),Ft=a.div`
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
`,ne=()=>{const n=P();return s.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:s.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},At=s.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=s.exports.useState({}),[r,i]=s.exports.useState(null),[l,u]=s.exports.useState(!1),[c,h]=s.exports.useState(!1),{toLobby:f}=ne();s.exports.useEffect(()=>{m.on("hanabi:getData",(g,x)=>{x==="miss"||x==="gameover"?(u(!0),setTimeout(()=>{x==="gameover"&&h(!0),u(!1),o(g)},2400)):(x==="finish"&&h(!0),o(g))}),m.emit("hanabi:getData")},[]);const A=g=>{var B;const x=g.currentTarget;i(x),(B=document.querySelector(".hand.selected"))==null||B.classList.remove("selected"),x.classList.add("selected")},F=()=>`${(r==null?void 0:r.getBoundingClientRect().top)-100}px`,y=()=>{var M;if(!r)return;const g=[].slice.call((M=r.parentElement)==null?void 0:M.childNodes).indexOf(r),x=r.closest(".player"),B=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(B).indexOf(x),index:g}},k=()=>{var x;const g=y();m.emit("hanabi:playHand",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},_=()=>{var x;const g=y();m.emit("hanabi:discardHand",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},b=()=>{var x;const g=y();m.emit("hanabi:colorHint",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},C=()=>{var x;const g=y();m.emit("hanabi:numHint",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")};return Object.keys(t).length?p(D,{children:[p($t,{className:c||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[c?e(oe,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?p(oe,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(te,{turn:t.players[t.turn].player.name}),p(_t,{children:[e(ut,{deck:t.deck.length,fields:t.fields}),p(Et,{children:[p(Dt,{children:[p("p",{children:["SCORE : ",t.score]}),p("p",{children:["MISS : ",t.miss,"/3"]})]}),e(xt,{hint:t.hint})]}),e(at,{cemetery:t.cemetery})]}),p(Bt,{className:"playerarea",children:[t.players.map(g=>e(Ct,{name:g.player.name,hands:g.hands,onclick:A,isFinish:c},g.player.name)),c&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(v,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})}),!c&&r&&r.className.indexOf("reverse")!==-1&&p(re,{style:{top:F()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:k,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:_,children:"\u6368\u3066\u308B"})]}),!c&&r&&r.className.indexOf("reverse")===-1&&p(re,{style:{top:F()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:b,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:C,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),l&&e(ft,{})]}):null}),$t=a.div`
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
`,oe=a.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${d.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,_t=a.div``,Et=a.div`
  display: flex;
`,Dt=a.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,Bt=a.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,re=a.div`
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
`,St=s.exports.memo(()=>{const[n,t]=s.exports.useState(!1);return s.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(D,{children:n&&p(Nt,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),Nt=a.div`
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
`,j=s.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:i}=n,l=u=>u===0?"empty":u%2==0?"black":"white";return e(D,{children:o?e(ie,{className:l(t)}):e(ie,{onClick:r,className:`${i&&"isActive"} ${l(t)}`,children:t})})}),ie=a.div`
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
`,se=s.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,i=[...t];for(;i.length<9;)i.push(0);return e(Ht,{children:i.map((l,u)=>e(j,{num:l,isHide:r?!1:o},u))})}),Ht=a.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,ae=s.exports.memo(n=>{const{result:t}=n,{toLobby:o}=ne(),r=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",i=()=>o();return p(It,{children:[e(zt,{className:r(t),children:t}),e(v,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:i,color:"teal"})]})}),It=a.div`
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
`,zt=a.div`
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
`,le=s.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:i}=n,{myInfo:l}=w(),[u,c]=s.exports.useState(!1),[h,f]=s.exports.useState(null);s.exports.useEffect(()=>{c(h!==null)},[h]);const A=y=>f(y),F=()=>{f(null),m.emit("kowloonTactics:selectHand",[l,h])};return p(Pt,{children:[e(Lt,{className:r?"":"disabed",children:t.map((y,k)=>i?e(j,{num:y,isHide:!0},k):e(j,{num:y,onclick:()=>A(k),selected:h===k&&!0},k))}),r&&o&&e(v,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:F,color:"teal",isDisabled:!u})]})}),Pt=a.div`
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
`,Lt=a.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,jt=s.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return p(Mt,{children:[e(ce,{className:"red",children:o.map((r,i)=>e("div",{className:r},i))}),e(ce,{className:"blue",children:o.map((r,i)=>e("div",{className:r},i))})]})}),Mt=a.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,ce=a.div`
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
`,de=s.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return p(Tt,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e($,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(Ot,{children:o.map(i=>e($,{name:i.name,icon:i.icon},i.id))})]})}),Tt=a.div`
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
`,Ot=a.div``,Rt=s.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=s.exports.useState({}),[r,i]=s.exports.useState({}),[l,u]=s.exports.useState([]),[c,h]=s.exports.useState(""),[f,A]=s.exports.useState("none"),[F,y]=s.exports.useState(!1);s.exports.useEffect(()=>{m.on("common:getCurrentConfig",b=>{i(b),b.redPlayer.id===n.id||b.redSupporter.some(C=>C.id===n.id)?A("red"):(b.bluePlayer.id===n.id||b.blueSupporter.some(C=>C.id===n.id))&&A("blue")}),m.on("kowloonTactics:getData",b=>o(b)),m.on("kowloonTactics:getTurn",b=>h(b)),m.on("kowloonTactics:getJudge",b=>{const C=b[0],g=b[1];u(C),g&&y(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const k=()=>{const b=l.filter(x=>x==="red").length,C=l.filter(x=>x==="blue").length;return b>C?"red":b<C?"blue":"draw"},_=b=>{const C=k();return C==="draw"?"DRAW":C===b?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?p(D,{children:[l.length<9&&e(te,{turn:c==="red"?r.redPlayer.name:r.bluePlayer.name}),p(Ut,{children:[e(de,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(de,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),l.length<9?e(le,{hands:t.redPlayer.hand,turn:c==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:f!=="red"&&!0}):e(ae,{result:_("red")}),p(Gt,{children:[e(se,{hands:t.redPlayer.field,isHide:f!=="red"&&!0,isFinish:F}),e(jt,{judgeArray:l}),e(se,{hands:t.bluePlayer.field,isHide:f!=="blue"&&!0,isFinish:F})]}),l.length<9?e(le,{hands:t.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:f!=="blue"&&!0}):e(ae,{result:_("blue")})]}),e(St,{})]}):null}),Ut=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Gt=a.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,qt=[{path:"/kowloon_tactics",exact:!1,children:e(Rt,{})},{path:"/hanabi",exact:!1,children:e(At,{})}],Jt=s.exports.memo(()=>e(be,{children:p(R,{children:[e(S,{exact:!0,path:"/",children:e(Se,{})}),e(S,{path:"/lobby",children:e(G,{children:e(q,{children:e(it,{})})})}),e(S,{path:"/game",render:({match:{url:n}})=>e(R,{children:qt.map(t=>e(S,{exact:t.exact,path:`${n}${t.path}`,children:e(G,{children:e(q,{children:t.children})})},t.path))})})]})})),Wt=()=>e(Ce,{children:e(Jt,{})});fe.render(e(Wt,{}),document.getElementById("root"));
