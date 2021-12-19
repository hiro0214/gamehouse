var oe=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var se=Object.prototype.hasOwnProperty,ae=Object.prototype.propertyIsEnumerable;var T=(n,t,o)=>t in n?oe(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,B=(n,t)=>{for(var o in t||(t={}))se.call(t,o)&&T(n,o,t[o]);if(j)for(var o of j(t))ae.call(t,o)&&T(n,o,t[o]);return n},S=(n,t)=>re(n,ie(t));import{j as N,r as i,s as c,l as le,u as I,B as ce,S as M,R as $,a as de}from"./vendor.2d340bfb.js";const ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};ue();const e=N.exports.jsx,m=N.exports.jsxs,P=N.exports.Fragment,R=i.exports.createContext({}),pe=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(R.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},k=()=>i.exports.useContext(R),O=i.exports.memo(n=>{const{children:t}=n;return e(me,{children:t})}),me=c.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,U=i.exports.memo(n=>{const{children:t}=n;return e(ge,{children:t})}),ge=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,he=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],u={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},f=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:s}=n;return e(xe,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:s,children:o})});f.defaultProps={color:"green"};const xe=c.button`
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
`,_=i.exports.memo(n=>{const{text:t,size:o}=n;return e(be,{className:o&&`heading--${o}`,children:t})});_.defaultProps={size:"1"};const be=c.div`
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
`,fe=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return m(Ce,{className:"textContainer",children:[e(ye,{value:t,placeholder:o,onChange:r}),e(ke,{})]})}),Ce=c.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ye=c.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${u.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,ke=c.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,p=le(),G=()=>{const{setMyInfo:n}=k(),t=()=>{const s=8,a="abcdefghijklmnopqrstuvwxyz0123456789";let d="";for(let l=0;l<s;l++)d+=a[Math.floor(Math.random()*a.length)];return d},o=()=>{const s=151,a=`${Math.floor(Math.random()*s)+1}`;let d;return a.length===1?d=`00${a}`:a.length===2?d=`0${a}`:d=a,d};return{setInfo:i.exports.useCallback((s,a)=>{const d={id:t(),name:s,icon:o(),isAdmin:a};n(d),p.emit("common:newUser",d)},[]),randomIcon:o}},we=()=>{const n=I(),{setInfo:t}=G();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},ve=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:s}=we();return e(Ae,{children:m(Fe,{children:[e(_,{text:"Games House"}),e(fe,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:l=>{t(l.target.value),l.target.value?r(!1):r(!0)}}),e(f,{label:"Join the game!",isDisabled:o,onclick:()=>s(n)})]})})}),Ae=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Fe=c.div`
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
`,L=i.exports.memo(n=>{const{children:t,options:o,value:r,onChange:s,disabled:a,hdg:d}=n;return m(Ee,{children:[e(_e,{children:d}),m($e,{value:r,onChange:s,disabled:!a,children:[t,o.map(l=>e("option",{value:l.key,children:l.value},l.value))]})]})}),Ee=c.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,$e=c.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${u.gray[1]};
  border-radius: 4px;
`,_e=c.div`
  font-size: 14px;
  font-weight: bold;
`,De=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Be=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Se=i.exports.memo(()=>{const{myInfo:n}=k(),[t,o]=i.exports.useState(null),[r,s]=i.exports.useState(null);i.exports.useEffect(()=>{p.on("hanabi:updateConfig",l=>{o(l.colorNum),s(l.handNum)}),p.emit("hanabi:getConfig")},[]);const a=l=>{p.emit("hanabi:setColorNum",l.target.options[l.target.selectedIndex].value)},d=l=>{p.emit("hanabi:setHandNum",l.target.options[l.target.selectedIndex].value)};return m(Ne,{children:[e(J,{children:e(L,{options:De,hdg:"\u8272\u306E\u6570",value:t||"",onChange:a,disabled:n.isAdmin})}),e(J,{style:{marginTop:"10px"},children:e(L,{options:Be,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:d,disabled:n.isAdmin})})]})}),Ne=c.div``,J=c.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,w=i.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:s}=n,{myInfo:a,setMyInfo:d}=k(),[l,h]=i.exports.useState(!1),[x,v]=i.exports.useState(a.name),{randomIcon:A}=G(),C=()=>{d(S(B({},a),{icon:A()}))},y=()=>{h(!l),l&&d(S(B({},a),{name:x}))},E=g=>v(g.target.value);return i.exports.useEffect(()=>{p.emit("common:updateInfo",a)},[a]),m(Ie,{className:"profile",children:[m(Pe,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(Le,{onClick:C,children:r})]}),l?e(He,{type:"text",value:x,onChange:E}):e(ze,{className:"profile__name",children:t}),s&&e(je,{onClick:y,className:l?"isEdit":"",children:s})]})}),Ie=c.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${u.gray[0]};
  border: 2px solid ${u.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Pe=c.div`
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
`,Le=c.button`
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
`,ze=c.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,He=c.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${u.gray[1]};
`,je=c.button`
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
`,F="kowloonTactics",Te=i.exports.memo(()=>{const{myInfo:n}=k(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{p.on(`${F}:updateConfig`,l=>{o(l)}),p.emit(`${F}:updateConfig`)},[]);const r=()=>p.emit(`${F}:setRedPlayer`,n),s=()=>p.emit(`${F}:setBluePlayer`,n),a=()=>p.emit(`${F}:setRedSupporter`,n),d=()=>p.emit(`${F}:setBlueSupporter`,n);return m(Me,{children:[m(W,{className:"red",children:[m(q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(w,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(f,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),m(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(l=>l.id===n.id)&&e(f,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"}),e(Y,{children:t.redSupporter.map(l=>e(w,{name:l.name,icon:l.icon},l.id))})]})]}),m(W,{className:"blue",children:[m(q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(w,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(f,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"})]}),m(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(l=>l.id===n.id)&&e(f,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:d,color:"yellow"}),e(Y,{children:t.blueSupporter.map(l=>e(w,{name:l.name,icon:l.icon},l.id))})]})]})]})}),Me=c.div`
  display: flex;
  justify-content: space-between;
`,W=c.div`
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
`,q=c.div`
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
`,K=c.div`
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
`,Y=c.div``,Re=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Te,{}));break;case"Hanabi":t(e(Se,{}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},Oe=()=>{const n=I();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break}},[])}},V=[];he.map(n=>V.push({key:n,value:n}));const Ue=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=k(),{gameStart:r}=Oe(),{currentConfig:s,setConfig:a}=Re(),d=h=>{const x=h.target.value;x.indexOf("--")===-1?p.emit("common:setCurrentGame",x):p.emit("common:setCurrentGame",null)},l=()=>p.emit("common:gameStart");return i.exports.useEffect(()=>{p.on("common:getCurrentGame",h=>{t(h),a(h)}),p.on("common:setCurrentGame",h=>{t(h),a(h)}),p.on("common:gameStart",h=>r(h)),p.emit("common:getCurrentGame")},[]),m(Ge,{children:[e(_,{text:"Setting",size:"2"}),e(Je,{children:e(L,{options:V,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:d,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(We,{children:n&&m(qe,{children:[s,o.isAdmin&&e(f,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:l,color:"blue"})]})})]})}),Ge=c.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Je=c.div`
  display: flex;
  justify-content: center;
`,We=c.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,qe=c.div`
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
`,Ke=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=k();return m(Ye,{children:[e(_,{text:"Player",size:"2"}),e(Ve,{children:t.map(r=>e(w,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),Ye=c.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ve=c.ul`
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
`,Qe=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{p.emit("common:getUser"),p.on("common:getUser",o=>t(o))},[]),m(Xe,{children:[e(Ke,{userList:n}),e(Ue,{})]})}),Xe=c.div`
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
`,Ze=i.exports.memo(()=>e("p",{children:"Hanabi!"})),et=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{p.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(P,{children:n&&m(tt,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),tt=c.div`
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
`,z=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:s}=n,a=d=>d===0?"empty":d%2==0?"black":"white";return e(P,{children:o?e(Q,{className:a(t)}):e(Q,{onClick:r,className:`${s&&"isActive"} ${a(t)}`,children:t})})}),Q=c.div`
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
`,X=i.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,s=[...t];for(;s.length<9;)s.push(0);return e(nt,{children:s.map((a,d)=>e(z,{num:a,isHide:r?!1:o},d))})}),nt=c.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,ot=()=>{const n=I();return i.exports.useEffect(()=>{p.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{p.emit("common:toLobby")},[])}},Z=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=ot(),r=a=>a==="WIN"?"win":a==="LOSE"?"lose":"draw",s=()=>o();return m(rt,{children:[e(it,{className:r(t),children:t}),e(f,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:s,color:"teal"})]})}),rt=c.div`
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
`,it=c.div`
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
`,ee=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:s}=n,{myInfo:a}=k(),[d,l]=i.exports.useState(!1),[h,x]=i.exports.useState(null);i.exports.useEffect(()=>{l(h!==null)},[h]);const v=C=>x(C),A=()=>{x(null),p.emit("kowloonTactics:selectHand",[a,h])};return m(st,{children:[e(at,{className:r?"":"disabed",children:t.map((C,y)=>s?e(z,{num:C,isHide:!0},y):e(z,{num:C,onclick:()=>v(y),selected:h===y&&!0},y))}),r&&o&&e(f,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:A,color:"teal",isDisabled:!d})]})}),st=c.div`
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
`,at=c.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,lt=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return m(ct,{children:[e(te,{className:"red",children:o.map((r,s)=>e("div",{className:r},s))}),e(te,{className:"blue",children:o.map((r,s)=>e("div",{className:r},s))})]})}),ct=c.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,te=c.div`
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
`,ne=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return m(dt,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(w,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(ut,{children:o.map(s=>e(w,{name:s.name,icon:s.icon},s.id))})]})}),dt=c.div`
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
`,ut=c.div``,pt=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),m(mt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),mt=c.div`
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
`,gt=i.exports.memo(()=>{const{myInfo:n}=k(),[t,o]=i.exports.useState({}),[r,s]=i.exports.useState({}),[a,d]=i.exports.useState([]),[l,h]=i.exports.useState(""),[x,v]=i.exports.useState("none"),[A,C]=i.exports.useState(!1);i.exports.useEffect(()=>{p.on("common:getCurrentConfig",g=>{s(g),g.redPlayer.id===n.id||g.redSupporter.some(b=>b.id===n.id)?v("red"):(g.bluePlayer.id===n.id||g.blueSupporter.some(b=>b.id===n.id))&&v("blue")}),p.on("kowloonTactics:getData",g=>o(g)),p.on("kowloonTactics:getTurn",g=>h(g)),p.on("kowloonTactics:getJudge",g=>{const b=g[0],H=g[1];d(b),H&&C(!0)}),p.emit("common:getCurrentConfig"),p.emit("kowloonTactics:getData"),p.emit("kowloonTactics:getTurn")},[]);const y=()=>{const g=a.filter(D=>D==="red").length,b=a.filter(D=>D==="blue").length;return g>b?"red":g<b?"blue":"draw"},E=g=>{const b=y();return b==="draw"?"DRAW":b===g?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?m(P,{children:[a.length<9&&e(pt,{turn:l==="red"?r.redPlayer.name:r.bluePlayer.name}),m(ht,{children:[e(ne,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(ne,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),a.length<9?e(ee,{hands:t.redPlayer.hand,turn:l==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:x!=="red"&&!0}):e(Z,{result:E("red")}),m(xt,{children:[e(X,{hands:t.redPlayer.field,isHide:x!=="red"&&!0,isFinish:A}),e(lt,{judgeArray:a}),e(X,{hands:t.bluePlayer.field,isHide:x!=="blue"&&!0,isFinish:A})]}),a.length<9?e(ee,{hands:t.bluePlayer.hand,turn:l==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:x!=="blue"&&!0}):e(Z,{result:E("blue")})]}),e(et,{})]}):null}),ht=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,xt=c.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,bt=[{path:"/kowloon_tactics",exact:!1,children:e(gt,{})},{path:"/hanabi",exact:!1,children:e(Ze,{})}],ft=i.exports.memo(()=>e(ce,{children:m(M,{children:[e($,{exact:!0,path:"/",children:e(ve,{})}),e($,{path:"/lobby",children:e(O,{children:e(U,{children:e(Qe,{})})})}),e($,{path:"/game",render:({match:{url:n}})=>e(M,{children:bt.map(t=>e($,{exact:t.exact,path:`${n}${t.path}`,children:e(O,{children:e(U,{children:t.children})})},t.path))})})]})})),Ct=()=>e(pe,{children:e(ft,{})});de.render(e(Ct,{}),document.getElementById("root"));
