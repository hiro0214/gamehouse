var ae=Object.defineProperty,le=Object.defineProperties;var ce=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ue=Object.prototype.propertyIsEnumerable;var T=(n,t,r)=>t in n?ae(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,N=(n,t)=>{for(var r in t||(t={}))de.call(t,r)&&T(n,r,t[r]);if(j)for(var r of j(t))ue.call(t,r)&&T(n,r,t[r]);return n},H=(n,t)=>le(n,ce(t));import{j as I,r as s,s as l,l as pe,u as P,B as me,S as O,R as E,a as xe}from"./vendor.2d340bfb.js";const he=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&o(u)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};he();const e=I.exports.jsx,p=I.exports.jsxs,D=I.exports.Fragment,R=s.exports.createContext({}),ge=n=>{const{children:t}=n,[r,o]=s.exports.useState({});return e(R.Provider,{value:{myInfo:r,setMyInfo:o},children:t})},C=()=>s.exports.useContext(R),M=s.exports.memo(n=>{const{children:t}=n;return e(be,{children:t})}),be=l.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,U=s.exports.memo(n=>{const{children:t}=n;return e(fe,{children:t})}),fe=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,ye=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],d={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},w=s.exports.memo(n=>{const{color:t,label:r,isDisabled:o,onclick:i}=n;return e(Ce,{className:t?`btn btn--${t}`:"btn",disabled:o,onClick:i,children:r})});w.defaultProps={color:"green"};const Ce=l.button`
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
`,B=s.exports.memo(n=>{const{text:t,size:r}=n;return e(ke,{className:r&&`heading--${r}`,children:t})});B.defaultProps={size:"1"};const ke=l.div`
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
`,we=s.exports.memo(n=>{const{value:t,placeholder:r,onChange:o}=n;return p(ve,{className:"textContainer",children:[e(Fe,{value:t,placeholder:r,onChange:o}),e(Ae,{})]})}),ve=l.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Fe=l.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Ae=l.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=pe(),G=()=>{const{setMyInfo:n}=C(),t=()=>{const i=8,a="abcdefghijklmnopqrstuvwxyz0123456789";let u="";for(let c=0;c<i;c++)u+=a[Math.floor(Math.random()*a.length)];return u},r=()=>{const i=151,a=`${Math.floor(Math.random()*i)+1}`;let u;return a.length===1?u=`00${a}`:a.length===2?u=`0${a}`:u=a,u};return{setInfo:s.exports.useCallback((i,a)=>{const u={id:t(),name:i,icon:r(),isAdmin:a};n(u),m.emit("common:newUser",u)},[]),randomIcon:r}},$e=()=>{const n=P(),{setInfo:t}=G();return{enter:s.exports.useCallback(o=>{o==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(o,!1),n.push("/lobby")},[])}},_e=s.exports.memo(()=>{const[n,t]=s.exports.useState(""),[r,o]=s.exports.useState(!0),{enter:i}=$e();return e(Ee,{children:p(De,{children:[e(B,{text:"Games House"}),e(we,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{t(c.target.value),c.target.value?o(!1):o(!0)}}),e(w,{label:"Join the game!",isDisabled:r,onclick:()=>i(n)})]})})}),Ee=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,De=l.div`
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
`,z=s.exports.memo(n=>{const{children:t,options:r,value:o,onChange:i,disabled:a,hdg:u}=n;return p(Be,{children:[e(Ne,{children:u}),p(Se,{value:o,onChange:i,disabled:!a,children:[t,r.map(c=>e("option",{value:c.key,children:c.value},c.value))]})]})}),Be=l.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Se=l.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${d.gray[1]};
  border-radius: 4px;
`,Ne=l.div`
  font-size: 14px;
  font-weight: bold;
`,He=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Ie=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Pe=s.exports.memo(()=>{const{myInfo:n}=C(),[t,r]=s.exports.useState(null),[o,i]=s.exports.useState(null);s.exports.useEffect(()=>{m.on("hanabi:updateConfig",c=>{r(c.colorNum),i(c.handNum)}),m.emit("hanabi:getConfig")},[]);const a=c=>{m.emit("hanabi:setColorNum",c.target.options[c.target.selectedIndex].value)},u=c=>{m.emit("hanabi:setHandNum",c.target.options[c.target.selectedIndex].value)};return p(ze,{children:[e(q,{children:e(z,{options:He,hdg:"\u8272\u306E\u6570",value:t||"",onChange:a,disabled:n.isAdmin})}),e(q,{style:{marginTop:"10px"},children:e(z,{options:Ie,hdg:"\u624B\u672D\u306E\u679A\u6570",value:o||"",onChange:u,disabled:n.isAdmin})})]})}),ze=l.div``,q=l.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,A=s.exports.memo(n=>{const{name:t,icon:r,editIcon:o,editName:i}=n,{myInfo:a,setMyInfo:u}=C(),[c,h]=s.exports.useState(!1),[f,v]=s.exports.useState(a.name),{randomIcon:F}=G(),x=()=>{u(H(N({},a),{icon:F()}))},g=()=>{h(!c),c&&u(H(N({},a),{name:f}))},k=b=>v(b.target.value);return s.exports.useEffect(()=>{m.emit("common:updateInfo",a)},[a]),p(Le,{className:"profile",children:[p(je,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${r}.png`}),o&&e(Te,{onClick:x,children:o})]}),c?e(Re,{type:"text",value:f,onChange:k}):e(Oe,{className:"profile__name",children:t}),i&&e(Me,{onClick:g,className:c?"isEdit":"",children:i})]})}),Le=l.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${d.gray[0]};
  border: 2px solid ${d.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,je=l.div`
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
`,Te=l.button`
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
`,Oe=l.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Re=l.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${d.gray[1]};
`,Me=l.button`
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
`,$="kowloonTactics",Ue=s.exports.memo(()=>{const{myInfo:n}=C(),[t,r]=s.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});s.exports.useEffect(()=>{m.on(`${$}:updateConfig`,c=>{r(c)}),m.emit(`${$}:updateConfig`)},[]);const o=()=>m.emit(`${$}:setRedPlayer`,n),i=()=>m.emit(`${$}:setBluePlayer`,n),a=()=>m.emit(`${$}:setRedSupporter`,n),u=()=>m.emit(`${$}:setBlueSupporter`,n);return p(Ge,{children:[p(J,{className:"red",children:[p(W,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(A,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(w,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:o,color:"yellow"})]}),p(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(c=>c.id===n.id)&&e(w,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"}),e(Y,{children:t.redSupporter.map(c=>e(A,{name:c.name,icon:c.icon},c.id))})]})]}),p(J,{className:"blue",children:[p(W,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(A,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(w,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:i,color:"yellow"})]}),p(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(c=>c.id===n.id)&&e(w,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:u,color:"yellow"}),e(Y,{children:t.blueSupporter.map(c=>e(A,{name:c.name,icon:c.icon},c.id))})]})]})]})}),Ge=l.div`
  display: flex;
  justify-content: space-between;
`,J=l.div`
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
`,W=l.div`
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
`,K=l.div`
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
`,Y=l.div``,qe=()=>{const[n,t]=s.exports.useState(null),r=s.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Ue,{}));break;case"Hanabi":t(e(Pe,{}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:r}},Je=()=>{const n=P();return{gameStart:s.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break}},[])}},V=[];ye.map(n=>V.push({key:n,value:n}));const We=s.exports.memo(()=>{const[n,t]=s.exports.useState(null),{myInfo:r}=C(),{gameStart:o}=Je(),{currentConfig:i,setConfig:a}=qe(),u=h=>{const f=h.target.value;f.indexOf("--")===-1?m.emit("common:setCurrentGame",f):m.emit("common:setCurrentGame",null)},c=()=>m.emit("common:gameStart");return s.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),a(h)}),m.on("common:setCurrentGame",h=>{t(h),a(h)}),m.on("common:gameStart",h=>o(h)),m.emit("common:getCurrentGame")},[]),p(Ke,{children:[e(B,{text:"Setting",size:"2"}),e(Ye,{children:e(z,{options:V,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:u,disabled:r.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(Ve,{children:n&&p(Qe,{children:[i,r.isAdmin&&e(w,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),Ke=l.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ye=l.div`
  display: flex;
  justify-content: center;
`,Ve=l.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Qe=l.div`
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
`,Xe=s.exports.memo(n=>{const{userList:t}=n,{myInfo:r}=C();return p(Ze,{children:[e(B,{text:"Player",size:"2"}),e(et,{children:t.map(o=>e(A,{name:o.name,icon:o.icon,editIcon:o.id===r.id&&!0,editName:o.id===r.id&&!0},o.id))})]})}),Ze=l.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,et=l.ul`
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
`,tt=s.exports.memo(()=>{const[n,t]=s.exports.useState([]);return s.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",r=>t(r))},[]),p(nt,{children:[e(Xe,{userList:n}),e(We,{})]})}),nt=l.div`
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
`,ot=s.exports.memo(n=>{const{cemetery:t}=n;return e(rt,{children:t.map(r=>e(it,{className:r.color,children:r.num.map((o,i)=>e(st,{children:o},i))},r.color))})}),rt=l.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,it=l.div`
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
`,st=l.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,Q=s.exports.memo(n=>{const{color:t,num:r,colorHint:o,numHint:i,isReverse:a,onclick:u}=n,c=()=>{let h="";return o&&(h+=`hint_${t}`),i&&(h=h===""?`hint_${r}`:`${h} hint_${r}`),h};return e(D,{children:a?e(X,{className:`reverse hand ${(o||i)&&c()}`,onClick:u}):e(X,{className:`${t} hand ${(o||i)&&c()}`,onClick:u,children:r!==0&&r})})}),X=l.div`
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
`,at=s.exports.memo(n=>{const{deck:t,fields:r}=n;return p(lt,{children:[e(ct,{children:t}),e(dt,{children:r.map((o,i)=>e(Q,{color:o.color,num:o.num},i))})]})}),lt=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,ct=l.div`
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
`,dt=l.div`
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
`,ut=s.exports.memo(n=>{const{hint:t}=n;return e(pt,{children:[...Array(t)].map(r=>e(mt,{},r))})}),pt=l.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,mt=l.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,xt=s.exports.memo(n=>{const{name:t,hands:r,onclick:o}=n,{myInfo:i}=C();return p(ht,{className:"player",children:[e(gt,{children:r.map((a,u)=>e(Q,{color:a.color,num:a.num,colorHint:a.colorHint,numHint:a.numHint,isReverse:t===i.name,onclick:o},u))}),p(bt,{children:["\u27A1\uFE0E ",t]})]})}),ht=l.div``,gt=l.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,bt=l.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,Z=s.exports.memo(n=>{const{turn:t}=n,[r,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{o(!0),setTimeout(()=>o(!1),1e3)},[t]),p(ft,{className:r?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),ft=l.div`
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
`,yt=s.exports.memo(()=>{const{myInfo:n}=C(),[t,r]=s.exports.useState({}),[o,i]=s.exports.useState(null);s.exports.useEffect(()=>{m.on("hanabi:getData",x=>r(x)),m.emit("hanabi:getData")},[]);const a=x=>{var k;const g=x.currentTarget;i(g),(k=document.querySelector(".hand.selected"))==null||k.classList.remove("selected"),g.classList.add("selected")},u=()=>`${(o==null?void 0:o.getBoundingClientRect().top)-100}px`,c=()=>{var _;if(!o)return;const x=[].slice.call((_=o.parentElement)==null?void 0:_.childNodes).indexOf(o),g=o.closest(".player"),k=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(k).indexOf(g),index:x}},h=()=>{var g;const x=c();m.emit("hanabi:playHand",x),i(null),(g=document.querySelector(".hand.selected"))==null||g.classList.remove("selected")},f=()=>{var g;const x=c();m.emit("hanabi:discardHand",x),i(null),(g=document.querySelector(".hand.selected"))==null||g.classList.remove("selected")},v=()=>{var g;const x=c();m.emit("hanabi:colorHint",x),i(null),(g=document.querySelector(".hand.selected"))==null||g.classList.remove("selected")},F=()=>{var g;const x=c();m.emit("hanabi:numHint",x),i(null),(g=document.querySelector(".hand.selected"))==null||g.classList.remove("selected")};return Object.keys(t).length?p(Ct,{className:t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[e(Z,{turn:t.players[t.turn].player.name}),p(kt,{children:[e(at,{deck:t.deck.length,fields:t.fields}),p(wt,{children:[p(vt,{children:[p("p",{children:["SCORE : ",t.score]}),p("p",{children:["MISS : ",t.miss,"/3"]})]}),e(ut,{hint:t.hint})]}),e(ot,{cemetery:t.cemetery})]}),p(Ft,{className:"playerarea",children:[t.players.map(x=>e(xt,{name:x.player.name,hands:x.hands,onclick:a},x.player.name)),o&&o.className.indexOf("reverse")!==-1&&p(ee,{style:{top:u()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:h,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:f,children:"\u6368\u3066\u308B"})]}),o&&o.className.indexOf("reverse")===-1&&p(ee,{style:{top:u()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:v,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:F,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}):null}),Ct=l.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  &.is-disabled {
    pointer-events: none;
  }
`,kt=l.div``,wt=l.div`
  display: flex;
`,vt=l.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,Ft=l.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,ee=l.div`
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
`,At=s.exports.memo(()=>{const[n,t]=s.exports.useState(!1);return s.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(D,{children:n&&p($t,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),$t=l.div`
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
`,L=s.exports.memo(n=>{const{num:t,isHide:r,onclick:o,selected:i}=n,a=u=>u===0?"empty":u%2==0?"black":"white";return e(D,{children:r?e(te,{className:a(t)}):e(te,{onClick:o,className:`${i&&"isActive"} ${a(t)}`,children:t})})}),te=l.div`
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
`,ne=s.exports.memo(n=>{const{hands:t,isHide:r,isFinish:o}=n,i=[...t];for(;i.length<9;)i.push(0);return e(_t,{children:i.map((a,u)=>e(L,{num:a,isHide:o?!1:r},u))})}),_t=l.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Et=()=>{const n=P();return s.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:s.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},oe=s.exports.memo(n=>{const{result:t}=n,{toLobby:r}=Et(),o=a=>a==="WIN"?"win":a==="LOSE"?"lose":"draw",i=()=>r();return p(Dt,{children:[e(Bt,{className:o(t),children:t}),e(w,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:i,color:"teal"})]})}),Dt=l.div`
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
`,Bt=l.div`
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
`,re=s.exports.memo(n=>{const{hands:t,turn:r,isPlayer:o,isHide:i}=n,{myInfo:a}=C(),[u,c]=s.exports.useState(!1),[h,f]=s.exports.useState(null);s.exports.useEffect(()=>{c(h!==null)},[h]);const v=x=>f(x),F=()=>{f(null),m.emit("kowloonTactics:selectHand",[a,h])};return p(St,{children:[e(Nt,{className:o?"":"disabed",children:t.map((x,g)=>i?e(L,{num:x,isHide:!0},g):e(L,{num:x,onclick:()=>v(g),selected:h===g&&!0},g))}),o&&r&&e(w,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:F,color:"teal",isDisabled:!u})]})}),St=l.div`
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
`,Nt=l.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,Ht=s.exports.memo(n=>{const{judgeArray:t}=n,r=[...t];for(;r.length<9;)r.push("empty");return p(It,{children:[e(ie,{className:"red",children:r.map((o,i)=>e("div",{className:o},i))}),e(ie,{className:"blue",children:r.map((o,i)=>e("div",{className:o},i))})]})}),It=l.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,ie=l.div`
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
`,se=s.exports.memo(n=>{const{player:t,supporter:r,area:o}=n;return p(Pt,{className:o,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(A,{name:t.name,icon:t.icon}),r.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(zt,{children:r.map(i=>e(A,{name:i.name,icon:i.icon},i.id))})]})}),Pt=l.div`
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
`,zt=l.div``,Lt=s.exports.memo(()=>{const{myInfo:n}=C(),[t,r]=s.exports.useState({}),[o,i]=s.exports.useState({}),[a,u]=s.exports.useState([]),[c,h]=s.exports.useState(""),[f,v]=s.exports.useState("none"),[F,x]=s.exports.useState(!1);s.exports.useEffect(()=>{m.on("common:getCurrentConfig",b=>{i(b),b.redPlayer.id===n.id||b.redSupporter.some(y=>y.id===n.id)?v("red"):(b.bluePlayer.id===n.id||b.blueSupporter.some(y=>y.id===n.id))&&v("blue")}),m.on("kowloonTactics:getData",b=>r(b)),m.on("kowloonTactics:getTurn",b=>h(b)),m.on("kowloonTactics:getJudge",b=>{const y=b[0],_=b[1];u(y),_&&x(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const g=()=>{const b=a.filter(S=>S==="red").length,y=a.filter(S=>S==="blue").length;return b>y?"red":b<y?"blue":"draw"},k=b=>{const y=g();return y==="draw"?"DRAW":y===b?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(o).length?p(D,{children:[a.length<9&&e(Z,{turn:c==="red"?o.redPlayer.name:o.bluePlayer.name}),p(jt,{children:[e(se,{player:o.redPlayer,supporter:o.redSupporter,area:"red"}),e(se,{player:o.bluePlayer,supporter:o.blueSupporter,area:"blue"}),a.length<9?e(re,{hands:t.redPlayer.hand,turn:c==="red"&&!0,isPlayer:o.redPlayer.id===n.id&&!0,isHide:f!=="red"&&!0}):e(oe,{result:k("red")}),p(Tt,{children:[e(ne,{hands:t.redPlayer.field,isHide:f!=="red"&&!0,isFinish:F}),e(Ht,{judgeArray:a}),e(ne,{hands:t.bluePlayer.field,isHide:f!=="blue"&&!0,isFinish:F})]}),a.length<9?e(re,{hands:t.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:o.bluePlayer.id===n.id&&!0,isHide:f!=="blue"&&!0}):e(oe,{result:k("blue")})]}),e(At,{})]}):null}),jt=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Tt=l.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,Ot=[{path:"/kowloon_tactics",exact:!1,children:e(Lt,{})},{path:"/hanabi",exact:!1,children:e(yt,{})}],Rt=s.exports.memo(()=>e(me,{children:p(O,{children:[e(E,{exact:!0,path:"/",children:e(_e,{})}),e(E,{path:"/lobby",children:e(M,{children:e(U,{children:e(tt,{})})})}),e(E,{path:"/game",render:({match:{url:n}})=>e(O,{children:Ot.map(t=>e(E,{exact:t.exact,path:`${n}${t.path}`,children:e(M,{children:e(U,{children:t.children})})},t.path))})})]})})),Mt=()=>e(ge,{children:e(Rt,{})});xe.render(e(Mt,{}),document.getElementById("root"));
