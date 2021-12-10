var X=Object.defineProperty,Z=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var z=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var L=(n,t,o)=>t in n?X(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,D=(n,t)=>{for(var o in t||(t={}))te.call(t,o)&&L(n,o,t[o]);if(z)for(var o of z(t))ne.call(t,o)&&L(n,o,t[o]);return n},_=(n,t)=>Z(n,ee(t));import{j as B,r as i,s as l,l as oe,u as S,B as re,S as j,R as A,a as ie}from"./vendor.2d340bfb.js";const se=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerpolicy&&(a.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?a.credentials="include":s.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}};se();const e=B.exports.jsx,m=B.exports.jsxs,N=B.exports.Fragment,H=i.exports.createContext({}),ae=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(H.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},y=()=>i.exports.useContext(H),T=i.exports.memo(n=>{const{children:t}=n;return e(le,{children:t})}),le=l.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,M=i.exports.memo(n=>{const{children:t}=n;return e(ce,{children:t})}),ce=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,d={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},C=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:s}=n;return e(de,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:s,children:o})});C.defaultProps={color:"green"};const de=l.button`
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
`,E=i.exports.memo(n=>{const{text:t,size:o}=n;return e(ue,{className:o&&`heading--${o}`,children:t})});E.defaultProps={size:"1"};const ue=l.div`
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
`,pe=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return m(me,{className:"textContainer",children:[e(ge,{value:t,placeholder:o,onChange:r}),e(xe,{})]})}),me=l.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ge=l.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,xe=l.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,p=oe(),R=()=>{const{setMyInfo:n}=y(),t=()=>{const s=8,a="abcdefghijklmnopqrstuvwxyz0123456789";let u="";for(let c=0;c<s;c++)u+=a[Math.floor(Math.random()*a.length)];return u},o=()=>{const s=151,a=`${Math.floor(Math.random()*s)+1}`;let u;return a.length===1?u=`00${a}`:a.length===2?u=`0${a}`:u=a,u};return{setInfo:i.exports.useCallback((s,a)=>{const u={id:t(),name:s,icon:o(),isAdmin:a};n(u),p.emit("common:newUser",u)},[]),randomIcon:o}},he=()=>{const n=S(),{setInfo:t}=R();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},be=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:s}=he();return e(fe,{children:m(Ce,{children:[e(E,{text:"Games House"}),e(pe,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{t(c.target.value),c.target.value?r(!1):r(!0)}}),e(C,{label:"Join the game!",isDisabled:o,onclick:()=>s(n)})]})})}),fe=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Ce=l.div`
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
`,k=i.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:s}=n,{myInfo:a,setMyInfo:u}=y(),[c,x]=i.exports.useState(!1),[h,w]=i.exports.useState(a.name),{randomIcon:F}=R(),f=()=>{u(_(D({},a),{icon:F()}))},g=()=>{x(!c),c&&u(_(D({},a),{name:h}))},b=P=>w(P.target.value);return i.exports.useEffect(()=>{p.emit("common:updateInfo",a)},[a]),m(ye,{className:"profile",children:[m(ke,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(we,{onClick:f,children:r})]}),c?e(Fe,{type:"text",value:h,onChange:b}):e(ve,{className:"profile__name",children:t}),s&&e(Ae,{onClick:g,className:c?"isEdit":"",children:s})]})}),ye=l.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${d.gray[0]};
  border: 2px solid ${d.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,ke=l.div`
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
`,we=l.button`
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
`,ve=l.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Fe=l.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${d.gray[1]};
`,Ae=l.button`
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
`,v="kowloonTactics",Ee=i.exports.memo(()=>{const{myInfo:n}=y(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{p.on(`${v}:updateConfig`,c=>{o(c)}),p.emit(`${v}:updateConfig`)},[]);const r=()=>p.emit(`${v}:setRedPlayer`,n),s=()=>p.emit(`${v}:setBluePlayer`,n),a=()=>p.emit(`${v}:setRedSupporter`,n),u=()=>p.emit(`${v}:setBlueSupporter`,n);return m($e,{children:[m(U,{className:"red",children:[m(G,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(k,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),m(O,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(c=>c.id===n.id)&&e(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"}),e(J,{children:t.redSupporter.map(c=>e(k,{name:c.name,icon:c.icon},c.id))})]})]}),m(U,{className:"blue",children:[m(G,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(k,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"})]}),m(O,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(c=>c.id===n.id)&&e(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:u,color:"yellow"}),e(J,{children:t.blueSupporter.map(c=>e(k,{name:c.name,icon:c.icon},c.id))})]})]})]})}),$e=l.div`
  display: flex;
  justify-content: space-between;
`,U=l.div`
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
`,G=l.div`
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
`,O=l.div`
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
`,J=l.div``,De=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Ee,{}));break;case"Hanabi":t(e("p",{children:"Hanabi"}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},_e=()=>{const n=S();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break}},[])}},Be=i.exports.memo(n=>{const{options:t,value:o,onChange:r,disabled:s,hdg:a,size:u}=n;return m(Se,{children:[e(Ie,{children:a}),m(Ne,{className:u,value:o,onChange:r,disabled:!s,children:[e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"}),t.map(c=>e("option",{children:c},c))]})]})}),Se=l.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 30px;
  align-items: center;
`,Ne=l.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${d.gray[1]};
  border-radius: 4px;
  &.half {
    width: 50%;
  }
  &.full {
    width: 100%;
  }
`,Ie=l.div`
  font-size: 14px;
  font-weight: bold;
`,Pe=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],ze=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=y(),{gameStart:r}=_e(),{currentConfig:s,setConfig:a}=De(),u=x=>{const h=x.target.value;h.indexOf("--")===-1?p.emit("common:setCurrentGame",h):p.emit("common:setCurrentGame",null)},c=()=>p.emit("common:gameStart");return i.exports.useEffect(()=>{p.on("common:getCurrentGame",x=>{t(x),a(x)}),p.on("common:setCurrentGame",x=>{t(x),a(x)}),p.on("common:gameStart",x=>r(x)),p.emit("common:getCurrentGame")},[]),m(Le,{children:[e(E,{text:"Setting",size:"2"}),e(je,{children:e(Be,{options:Pe,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:u,disabled:o.isAdmin})}),e(He,{children:n&&m(Te,{children:[s,o.isAdmin&&e(C,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),Le=l.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,je=l.div`
  display: flex;
  justify-content: center;
`,He=l.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Te=l.div`
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
`,Me=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=y();return m(Re,{children:[e(E,{text:"Player",size:"2"}),e(Ue,{children:t.map(r=>e(k,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),Re=l.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ue=l.ul`
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
`,Ge=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{p.emit("common:getUser"),p.on("common:getUser",o=>t(o))},[]),m(Oe,{children:[e(Me,{userList:n}),e(ze,{})]})}),Oe=l.div`
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
`,Je=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{p.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(N,{children:n&&m(We,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),We=l.div`
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
`,I=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:s}=n,a=u=>u===0?"empty":u%2==0?"black":"white";return e(N,{children:o?e(W,{className:a(t)}):e(W,{onClick:r,className:`${s&&"isActive"} ${a(t)}`,children:t})})}),W=l.div`
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
`,q=i.exports.memo(n=>{const{hands:t,isHide:o}=n;for(;t.length<9;)t.push(0);return e(qe,{children:t.map((r,s)=>e(I,{num:r,isHide:o},s))})}),qe=l.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Ke=()=>{const n=S();return i.exports.useEffect(()=>{p.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{p.emit("common:toLobby")},[])}},K=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=Ke(),r=a=>a==="WIN"?"win":a==="LOSE"?"lose":"draw",s=()=>o();return m(Ye,{children:[e(Ve,{className:r(t),children:t}),e(C,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:s,color:"teal"})]})}),Ye=l.div`
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
`,Ve=l.div`
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
`,Y=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:s}=n,{myInfo:a}=y(),[u,c]=i.exports.useState(!1),[x,h]=i.exports.useState(null);i.exports.useEffect(()=>{c(x!==null)},[x]);const w=f=>h(f),F=()=>{h(null),p.emit("kowloonTactics:selectHand",[a,x])};return m(Qe,{children:[e(Xe,{className:r?"":"disabed",children:t.map((f,g)=>s?e(I,{num:f,isHide:!0},g):e(I,{num:f,onclick:()=>w(g),selected:x===g&&!0},g))}),r&&o&&e(C,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:F,color:"teal",isDisabled:!u})]})}),Qe=l.div`
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
`,Xe=l.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,Ze=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return m(et,{children:[e(V,{className:"red",children:o.map((r,s)=>e("div",{className:r},s))}),e(V,{className:"blue",children:o.map((r,s)=>e("div",{className:r},s))})]})}),et=l.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,V=l.div`
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
`,Q=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return m(tt,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(k,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(nt,{children:o.map(s=>e(k,{name:s.name,icon:s.icon},s.id))})]})}),tt=l.div`
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
`,nt=l.div``,ot=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),m(rt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),rt=l.div`
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
`,it=i.exports.memo(()=>{const{myInfo:n}=y(),[t,o]=i.exports.useState({}),[r,s]=i.exports.useState({}),[a,u]=i.exports.useState([]),[c,x]=i.exports.useState(""),[h,w]=i.exports.useState("none");i.exports.useEffect(()=>{p.on("common:getCurrentConfig",g=>{s(g),g.redPlayer.id===n.id||g.redSupporter.some(b=>b.id===n.id)?w("red"):(g.bluePlayer.id===n.id||g.blueSupporter.some(b=>b.id===n.id))&&w("blue")}),p.on("kowloonTactics:getData",g=>o(g)),p.on("kowloonTactics:getTurn",g=>x(g)),p.on("kowloonTactics:getJudge",g=>u(g)),p.emit("common:getCurrentConfig"),p.emit("kowloonTactics:getData"),p.emit("kowloonTactics:getTurn")},[]);const F=()=>{const g=a.filter($=>$==="red").length,b=a.filter($=>$==="blue").length;return g>b?"red":g<b?"blue":"draw"},f=g=>{const b=F();return b==="draw"?"DRAW":b===g?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?m(N,{children:[a.length<9&&e(ot,{turn:c==="red"?r.redPlayer.name:r.bluePlayer.name}),m(st,{children:[e(Q,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(Q,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),a.length<9?e(Y,{hands:t.redPlayer.hand,turn:c==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):e(K,{result:f("red")}),m(at,{children:[e(q,{hands:t.redPlayer.field,isHide:h!=="red"&&!0}),e(Ze,{judgeArray:a}),e(q,{hands:t.bluePlayer.field,isHide:h!=="blue"&&!0})]}),a.length<9?e(Y,{hands:t.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):e(K,{result:f("blue")})]}),e(Je,{})]}):null}),st=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,at=l.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,lt=[{path:"/kowloon_tactics",exact:!1,children:e(it,{})}],ct=i.exports.memo(()=>e(re,{children:m(j,{children:[e(A,{exact:!0,path:"/",children:e(be,{})}),e(A,{path:"/lobby",children:e(T,{children:e(M,{children:e(Ge,{})})})}),e(A,{path:"/game",render:({match:{url:n}})=>e(j,{children:lt.map(t=>e(A,{exact:t.exact,path:`${n}${t.path}`,children:e(T,{children:e(M,{children:t.children})})},t.path))})})]})})),dt=()=>e(ae,{children:e(ct,{})});ie.render(e(dt,{}),document.getElementById("root"));
