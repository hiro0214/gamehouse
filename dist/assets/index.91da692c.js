var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var L=(n,t,o)=>t in n?X(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,D=(n,t)=>{for(var o in t||(t={}))te.call(t,o)&&L(n,o,t[o]);if(z)for(var o of z(t))ne.call(t,o)&&L(n,o,t[o]);return n},_=(n,t)=>Z(n,ee(t));import{j as B,r as i,s as c,l as oe,u as S,B as re,S as H,R as A,a as ie}from"./vendor.2d340bfb.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function o(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerpolicy&&(s.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?s.credentials="include":a.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=o(a);fetch(a.href,s)}};se();const e=B.exports.jsx,m=B.exports.jsxs,I=B.exports.Fragment,j=i.exports.createContext({}),ae=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(j.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},y=()=>i.exports.useContext(j),T=i.exports.memo(n=>{const{children:t}=n;return e(ce,{children:t})}),ce=c.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,M=i.exports.memo(n=>{const{children:t}=n;return e(le,{children:t})}),le=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,u={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},C=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:a}=n;return e(de,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:a,children:o})});C.defaultProps={color:"green"};const de=c.button`
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
`,E=i.exports.memo(n=>{const{text:t,size:o}=n;return e(ue,{className:o&&`heading--${o}`,children:t})});E.defaultProps={size:"1"};const ue=c.div`
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
`,pe=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return m(me,{className:"textContainer",children:[e(ge,{value:t,placeholder:o,onChange:r}),e(xe,{})]})}),me=c.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ge=c.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${u.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,xe=c.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,p=oe(),R=()=>{const{setMyInfo:n}=y(),t=()=>{const a=8,s="abcdefghijklmnopqrstuvwxyz0123456789";let d="";for(let l=0;l<a;l++)d+=s[Math.floor(Math.random()*s.length)];return d},o=()=>{const a=151,s=`${Math.floor(Math.random()*a)+1}`;let d;return s.length===1?d=`00${s}`:s.length===2?d=`0${s}`:d=s,d};return{setInfo:i.exports.useCallback((a,s)=>{const d={id:t(),name:a,icon:o(),isAdmin:s};n(d),p.emit("common:newUser",d)},[]),randomIcon:o}},he=()=>{const n=S(),{setInfo:t}=R();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},be=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:a}=he();return e(fe,{children:m(Ce,{children:[e(E,{text:"Games House"}),e(pe,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:l=>{t(l.target.value),l.target.value?r(!1):r(!0)}}),e(C,{label:"Join the game!",isDisabled:o,onclick:()=>a(n)})]})})}),fe=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Ce=c.div`
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
`,k=i.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:a}=n,{myInfo:s,setMyInfo:d}=y(),[l,x]=i.exports.useState(!1),[h,w]=i.exports.useState(s.name),{randomIcon:F}=R(),f=()=>{d(_(D({},s),{icon:F()}))},g=()=>{x(!l),l&&d(_(D({},s),{name:h}))},b=P=>w(P.target.value);return i.exports.useEffect(()=>{p.emit("common:updateInfo",s)},[s]),m(ye,{className:"profile",children:[m(ke,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(we,{onClick:f,children:r})]}),l?e(Fe,{type:"text",value:h,onChange:b}):e(ve,{className:"profile__name",children:t}),a&&e(Ae,{onClick:g,className:l?"isEdit":"",children:a})]})}),ye=c.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${u.gray[0]};
  border: 2px solid ${u.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,ke=c.div`
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
`,we=c.button`
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
`,ve=c.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Fe=c.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${u.gray[1]};
`,Ae=c.button`
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
`,v="kowloonTactics",Ee=i.exports.memo(()=>{const{myInfo:n}=y(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{p.on(`${v}:updateConfig`,l=>{o(l)}),p.emit(`${v}:updateConfig`)},[]);const r=()=>p.emit(`${v}:setRedPlayer`,n),a=()=>p.emit(`${v}:setBluePlayer`,n),s=()=>p.emit(`${v}:setRedSupporter`,n),d=()=>p.emit(`${v}:setBlueSupporter`,n);return m($e,{children:[m(U,{className:"red",children:[m(G,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(k,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),m(O,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(l=>l.id===n.id)&&e(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"}),e(J,{children:t.redSupporter.map(l=>e(k,{name:l.name,icon:l.icon},l.id))})]})]}),m(U,{className:"blue",children:[m(G,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(k,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"})]}),m(O,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(l=>l.id===n.id)&&e(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:d,color:"yellow"}),e(J,{children:t.blueSupporter.map(l=>e(k,{name:l.name,icon:l.icon},l.id))})]})]})]})}),$e=c.div`
  display: flex;
  justify-content: space-between;
`,U=c.div`
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
`,G=c.div`
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
`,O=c.div`
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
`,J=c.div``,De=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Ee,{}));break;case"Hanabi":t(e("p",{children:"Hanabi"}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},_e=()=>{const n=S();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break}},[])}},Be=i.exports.memo(n=>{const{options:t,value:o,onChange:r,disabled:a,hdg:s,size:d}=n;return m(Se,{children:[e(Ne,{children:s}),m(Ie,{className:d,value:o,onChange:r,disabled:!a,children:[e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"}),t.map(l=>e("option",{children:l},l))]})]})}),Se=c.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  align-items: center;
`,Ie=c.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${u.gray[1]};
  border-radius: 4px;
  &.half {
    width: 50%;
  }
  &.full {
    width: 100%;
  }
`,Ne=c.div`
  font-size: 14px;
  font-weight: bold;
`,Pe=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],ze=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=y(),{gameStart:r}=_e(),{currentConfig:a,setConfig:s}=De(),d=x=>{const h=x.target.value;h.indexOf("--")===-1?p.emit("common:setCurrentGame",h):p.emit("common:setCurrentGame",null)},l=()=>p.emit("common:gameStart");return i.exports.useEffect(()=>{p.on("common:getCurrentGame",x=>{t(x),s(x)}),p.on("common:setCurrentGame",x=>{t(x),s(x)}),p.on("common:gameStart",x=>r(x)),p.emit("common:getCurrentGame")},[]),m(Le,{children:[e(E,{text:"Setting",size:"2"}),e(He,{children:e(Be,{options:Pe,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:d,disabled:o.isAdmin})}),e(je,{children:n&&m(Te,{children:[a,o.isAdmin&&e(C,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:l,color:"blue"})]})})]})}),Le=c.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,He=c.div`
  display: flex;
  justify-content: center;
`,je=c.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Te=c.div`
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
`,Me=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=y();return m(Re,{children:[e(E,{text:"Player",size:"2"}),e(Ue,{children:t.map(r=>e(k,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),Re=c.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ue=c.ul`
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
`,Ge=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{p.emit("common:getUser"),p.on("common:getUser",o=>t(o))},[]),m(Oe,{children:[e(Me,{userList:n}),e(ze,{})]})}),Oe=c.div`
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
`,Je=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{p.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(I,{children:n&&m(We,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),We=c.div`
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
`,N=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:a}=n,s=d=>d===0?"empty":d%2==0?"black":"white";return e(I,{children:o?e(W,{className:s(t)}):e(W,{onClick:r,className:`${a&&"isActive"} ${s(t)}`,children:t})})}),W=c.div`
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
`,q=i.exports.memo(n=>{const{hands:t,isHide:o}=n,r=[...t],[a,s]=i.exports.useState(!1);for(i.exports.useEffect(()=>{t.length===9&&setTimeout(()=>s(!0),4e3)},[t]);r.length<9;)r.push(0);return e(qe,{children:r.map((d,l)=>e(N,{num:d,isHide:a?!1:o},l))})}),qe=c.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Ke=()=>{const n=S();return i.exports.useEffect(()=>{p.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{p.emit("common:toLobby")},[])}},K=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=Ke(),r=s=>s==="WIN"?"win":s==="LOSE"?"lose":"draw",a=()=>o();return m(Ye,{children:[e(Ve,{className:r(t),children:t}),e(C,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:a,color:"teal"})]})}),Ye=c.div`
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
`,Ve=c.div`
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
`,Y=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:a}=n,{myInfo:s}=y(),[d,l]=i.exports.useState(!1),[x,h]=i.exports.useState(null);i.exports.useEffect(()=>{l(x!==null)},[x]);const w=f=>h(f),F=()=>{h(null),p.emit("kowloonTactics:selectHand",[s,x])};return m(Qe,{children:[e(Xe,{className:r?"":"disabed",children:t.map((f,g)=>a?e(N,{num:f,isHide:!0},g):e(N,{num:f,onclick:()=>w(g),selected:x===g&&!0},g))}),r&&o&&e(C,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:F,color:"teal",isDisabled:!d})]})}),Qe=c.div`
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
`,Xe=c.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,Ze=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return m(et,{children:[e(V,{className:"red",children:o.map((r,a)=>e("div",{className:r},a))}),e(V,{className:"blue",children:o.map((r,a)=>e("div",{className:r},a))})]})}),et=c.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,V=c.div`
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
`,Q=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return m(tt,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(k,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(nt,{children:o.map(a=>e(k,{name:a.name,icon:a.icon},a.id))})]})}),tt=c.div`
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
`,nt=c.div``,ot=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),m(rt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),rt=c.div`
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
`,it=i.exports.memo(()=>{const{myInfo:n}=y(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState({}),[s,d]=i.exports.useState([]),[l,x]=i.exports.useState(""),[h,w]=i.exports.useState("none");i.exports.useEffect(()=>{p.on("common:getCurrentConfig",g=>{a(g),g.redPlayer.id===n.id||g.redSupporter.some(b=>b.id===n.id)?w("red"):(g.bluePlayer.id===n.id||g.blueSupporter.some(b=>b.id===n.id))&&w("blue")}),p.on("kowloonTactics:getData",g=>o(g)),p.on("kowloonTactics:getTurn",g=>x(g)),p.on("kowloonTactics:getJudge",g=>d(g)),p.emit("common:getCurrentConfig"),p.emit("kowloonTactics:getData"),p.emit("kowloonTactics:getTurn")},[]);const F=()=>{const g=s.filter($=>$==="red").length,b=s.filter($=>$==="blue").length;return g>b?"red":g<b?"blue":"draw"},f=g=>{const b=F();return b==="draw"?"DRAW":b===g?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?m(I,{children:[s.length<9&&e(ot,{turn:l==="red"?r.redPlayer.name:r.bluePlayer.name}),m(st,{children:[e(Q,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(Q,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),s.length<9?e(Y,{hands:t.redPlayer.hand,turn:l==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):e(K,{result:f("red")}),m(at,{children:[e(q,{hands:t.redPlayer.field,isHide:h!=="red"&&!0}),e(Ze,{judgeArray:s}),e(q,{hands:t.bluePlayer.field,isHide:h!=="blue"&&!0})]}),s.length<9?e(Y,{hands:t.bluePlayer.hand,turn:l==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):e(K,{result:f("blue")})]}),e(Je,{})]}):null}),st=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,at=c.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,ct=[{path:"/kowloon_tactics",exact:!1,children:e(it,{})}],lt=i.exports.memo(()=>e(re,{children:m(H,{children:[e(A,{exact:!0,path:"/",children:e(be,{})}),e(A,{path:"/lobby",children:e(T,{children:e(M,{children:e(Ge,{})})})}),e(A,{path:"/game",render:({match:{url:n}})=>e(H,{children:ct.map(t=>e(A,{exact:t.exact,path:`${n}${t.path}`,children:e(T,{children:e(M,{children:t.children})})},t.path))})})]})})),dt=()=>e(ae,{children:e(lt,{})});ie.render(e(dt,{}),document.getElementById("root"));
