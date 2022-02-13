var xe=Object.defineProperty,ge=Object.defineProperties;var be=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var fe=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable;var G=(n,t,r)=>t in n?xe(n,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):n[t]=r,H=(n,t)=>{for(var r in t||(t={}))fe.call(t,r)&&G(n,r,t[r]);if(U)for(var r of U(t))Ce.call(t,r)&&G(n,r,t[r]);return n},L=(n,t)=>ge(n,be(t));import{j as z,r as s,s as l,l as ye,u as P,B as ke,S as q,R as S,a as we}from"./vendor.2d340bfb.js";const ve=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function r(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerpolicy&&(a.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?a.credentials="include":i.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(i){if(i.ep)return;i.ep=!0;const a=r(i);fetch(i.href,a)}};ve();const e=z.exports.jsx,p=z.exports.jsxs,B=z.exports.Fragment,J=s.exports.createContext({}),Fe=n=>{const{children:t}=n,[r,o]=s.exports.useState({});return e(J.Provider,{value:{myInfo:r,setMyInfo:o},children:t})},v=()=>s.exports.useContext(J),W=s.exports.memo(n=>{const{children:t}=n;return e(Ae,{children:t})}),Ae=l.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,Y=s.exports.memo(n=>{const{children:t}=n;return e(Ee,{children:t})}),Ee=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,$e=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F"],u={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},F=s.exports.memo(n=>{const{color:t,label:r,isDisabled:o,onclick:i}=n;return e(_e,{className:t?`btn btn--${t}`:"btn",disabled:o,onClick:i,children:r})});F.defaultProps={color:"green"};const _e=l.button`
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
`,N=s.exports.memo(n=>{const{text:t,size:r}=n;return e(Be,{className:r&&`heading--${r}`,children:t})});N.defaultProps={size:"1"};const Be=l.div`
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
`,De=s.exports.memo(n=>{const{value:t,placeholder:r,onChange:o}=n;return p(Se,{className:"textContainer",children:[e(Ne,{value:t,placeholder:r,onChange:o}),e(Ie,{})]})}),Se=l.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,Ne=l.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${u.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Ie=l.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=ye(),X=()=>{const{setMyInfo:n}=v(),t=()=>{const i=8,a="abcdefghijklmnopqrstuvwxyz0123456789";let d="";for(let c=0;c<i;c++)d+=a[Math.floor(Math.random()*a.length)];return d},r=()=>{const i=151,a=`${Math.floor(Math.random()*i)+1}`;let d;return a.length===1?d=`00${a}`:a.length===2?d=`0${a}`:d=a,d};return{setInfo:s.exports.useCallback((i,a)=>{const d={id:t(),name:i,icon:r(),isAdmin:a};n(d),i==="$clear"&&m.emit("common:clearUser"),m.emit("common:newUser",d)},[]),randomIcon:r}},He=()=>{const n=P(),{setInfo:t}=X();return{enter:s.exports.useCallback(o=>{o==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(o,!1),n.push("/lobby")},[])}},Le=s.exports.memo(()=>{const[n,t]=s.exports.useState(""),[r,o]=s.exports.useState(!0),{enter:i}=He();return e(ze,{children:p(Pe,{children:[e(N,{text:"Games House"}),e(De,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{t(c.target.value),c.target.value?o(!1):o(!0)}}),e(F,{label:"Join the game!",isDisabled:r,onclick:()=>i(n)})]})})}),ze=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,Pe=l.div`
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
`,je=s.exports.memo(()=>null),j=s.exports.memo(n=>{const{children:t,options:r,value:o,onChange:i,disabled:a,hdg:d}=n;return p(Me,{children:[e(Oe,{children:d}),p(Te,{value:o,onChange:i,disabled:!a,children:[t,r.map(c=>e("option",{value:c.key,children:c.value},c.value))]})]})}),Me=l.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Te=l.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${u.gray[1]};
  border-radius: 4px;
`,Oe=l.div`
  font-size: 14px;
  font-weight: bold;
`,Re=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Ue=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Ge=s.exports.memo(()=>{const{myInfo:n}=v(),[t,r]=s.exports.useState(null),[o,i]=s.exports.useState(null);s.exports.useEffect(()=>{m.on("hanabi:updateConfig",c=>{r(c.colorNum),i(c.handNum)}),m.emit("hanabi:getConfig")},[]);const a=c=>{m.emit("hanabi:setColorNum",c.target.options[c.target.selectedIndex].value)},d=c=>{m.emit("hanabi:setHandNum",c.target.options[c.target.selectedIndex].value)};return p(qe,{children:[e(K,{children:e(j,{options:Re,hdg:"\u8272\u306E\u6570",value:t||"",onChange:a,disabled:n.isAdmin})}),e(K,{style:{marginTop:"10px"},children:e(j,{options:Ue,hdg:"\u624B\u672D\u306E\u679A\u6570",value:o||"",onChange:d,disabled:n.isAdmin})})]})}),qe=l.div``,K=l.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,E=s.exports.memo(n=>{const{name:t,icon:r,editIcon:o,editName:i}=n,{myInfo:a,setMyInfo:d}=v(),[c,h]=s.exports.useState(!1),[f,k]=s.exports.useState(a.name),{randomIcon:A}=X(),C=()=>{d(L(H({},a),{icon:A()}))},w=()=>{h(!c),c&&d(L(H({},a),{name:f}))},$=b=>k(b.target.value);return s.exports.useEffect(()=>{m.emit("common:updateInfo",a)},[a]),p(Je,{className:"profile",children:[p(We,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${r}.png`}),o&&e(Ye,{onClick:C,children:o})]}),c?e(Ke,{type:"text",value:f,onChange:$}):e(Xe,{className:"profile__name",children:t}),i&&e(Ve,{onClick:w,className:c?"isEdit":"",children:i})]})}),Je=l.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${u.gray[0]};
  border: 2px solid ${u.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,We=l.div`
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
`,Ye=l.button`
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
`,Xe=l.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Ke=l.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${u.gray[1]};
`,Ve=l.button`
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
`,_="kowloonTactics",Qe=s.exports.memo(()=>{const{myInfo:n}=v(),[t,r]=s.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});s.exports.useEffect(()=>{m.on(`${_}:updateConfig`,c=>{r(c)}),m.emit(`${_}:updateConfig`)},[]);const o=()=>m.emit(`${_}:setRedPlayer`,n),i=()=>m.emit(`${_}:setBluePlayer`,n),a=()=>m.emit(`${_}:setRedSupporter`,n),d=()=>m.emit(`${_}:setBlueSupporter`,n);return p(Ze,{children:[p(V,{className:"red",children:[p(Q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(E,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:o,color:"yellow"})]}),p(Z,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(c=>c.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"}),e(ee,{children:t.redSupporter.map(c=>e(E,{name:c.name,icon:c.icon},c.id))})]})]}),p(V,{className:"blue",children:[p(Q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(E,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(F,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:i,color:"yellow"})]}),p(Z,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(c=>c.id===n.id)&&e(F,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:d,color:"yellow"}),e(ee,{children:t.blueSupporter.map(c=>e(E,{name:c.name,icon:c.icon},c.id))})]})]})]})}),Ze=l.div`
  display: flex;
  justify-content: space-between;
`,V=l.div`
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
`,Q=l.div`
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
`,Z=l.div`
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
`,ee=l.div``,et=()=>{const[n,t]=s.exports.useState(null),r=s.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Qe,{}));break;case"Hanabi":t(e(Ge,{}));break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":t(e(je,{}));break}},[]);return{currentConfig:n,setConfig:r}},tt=()=>{const n=P();return{gameStart:s.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break;case"\u30A8\u30BB\u82B8\u8853\u5BB6 \u30CB\u30E5\u30FC\u30E8\u30FC\u30AF\u3078\u884C\u304F":n.push("/game/fakeArtist");break}},[])}},te=[];$e.map(n=>te.push({key:n,value:n}));const nt=s.exports.memo(()=>{const[n,t]=s.exports.useState(null),{myInfo:r}=v(),{gameStart:o}=tt(),{currentConfig:i,setConfig:a}=et(),d=h=>{const f=h.target.value;f.indexOf("--")===-1?m.emit("common:setCurrentGame",f):m.emit("common:setCurrentGame",null)},c=()=>m.emit("common:gameStart");return s.exports.useEffect(()=>{m.on("common:getCurrentGame",h=>{t(h),a(h)}),m.on("common:setCurrentGame",h=>{t(h),a(h)}),m.on("common:gameStart",h=>o(h)),m.emit("common:getCurrentGame")},[]),p(ot,{children:[e(N,{text:"Setting",size:"2"}),e(rt,{children:e(j,{options:te,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:d,disabled:r.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(it,{children:n&&p(st,{children:[i,r.isAdmin&&e(F,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),ot=l.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,rt=l.div`
  display: flex;
  justify-content: center;
`,it=l.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,st=l.div`
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
`,at=s.exports.memo(n=>{const{userList:t}=n,{myInfo:r}=v();return p(lt,{children:[e(N,{text:"Player",size:"2"}),e(ct,{children:t.map(o=>e(E,{name:o.name,icon:o.icon,editIcon:o.id===r.id&&!0,editName:o.id===r.id&&!0},o.id))})]})}),lt=l.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,ct=l.ul`
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
`,dt=s.exports.memo(()=>{const[n,t]=s.exports.useState([]);return s.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",r=>t(r))},[]),p(ut,{children:[e(at,{userList:n}),e(nt,{})]})}),ut=l.div`
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
`;let I=!1,M=0,T=0;const pt=s.exports.memo(n=>{const{context:t,setCanvas:r}=n;return s.exports.useEffect(()=>{const o=document.getElementById("canvas"),i=o.getContext("2d");i.lineCap="round",i.lineWidth=4,i.strokeStyle="#ff0000",o.addEventListener("mousedown",d=>{I=!0,M=d.offsetX,T=d.offsetY}),o.addEventListener("mousemove",d=>{if(!I)return;const c=d.offsetX,h=d.offsetY;a(i,M,T,c,h),M=c,T=h}),o.addEventListener("mouseout",()=>{I=!1,r(o)}),o.addEventListener("mouseup",()=>{I=!1,r(o)});const a=(d,c,h,f,k)=>{d.beginPath(),d.moveTo(c,h),d.lineTo(f,k),d.stroke()}},[]),s.exports.useEffect(()=>{const i=document.getElementById("canvas").getContext("2d");if(t.length){const a=new Image;a.src=t,a.onload=()=>i.drawImage(a,0,0)}},[t]),e(mt,{id:"canvas",width:750,height:500})}),mt=l.canvas`
  border: 3px solid #ccc;
  border-radius: 6px;
`,ne="fakeArtist",ht=s.exports.memo(()=>{const[n,t]=s.exports.useState(null),[r,o]=s.exports.useState("");return s.exports.useEffect(()=>{m.on(`${ne}:fuga`,a=>{o(a)})},[]),p(xt,{children:[e(pt,{context:r,setCanvas:t}),e("button",{onClick:()=>{const a=n==null?void 0:n.toDataURL();m.emit(`${ne}:hoge`,a)},children:"\u30DC\u30BF\u30F3"})]})}),xt=l.div`
  position: relative;
  display: flex;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  background: #fff;
`,gt=s.exports.memo(n=>{const{cemetery:t}=n;return e(bt,{children:t.map(r=>e(ft,{className:r.color,children:r.num.map((o,i)=>e(Ct,{children:o},i))},r.color))})}),bt=l.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,ft=l.div`
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
`,Ct=l.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,oe=s.exports.memo(n=>{const{color:t,num:r,colorHint:o,numHint:i,isReverse:a,onclick:d}=n,c=()=>{let h="";return o&&(h+=`hint_${t}`),i&&(h=h===""?`hint_${r}`:`${h} hint_${r}`),h};return e(B,{children:a?e(re,{className:`reverse hand ${(o||i)&&c()}`,onClick:d}):e(re,{className:`${t} hand ${(o||i)&&c()}`,onClick:d,children:r!==0&&r})})}),re=l.div`
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
`,yt=s.exports.memo(n=>{const{deck:t,fields:r}=n;return p(kt,{children:[e(wt,{children:t}),e(vt,{children:r.map((o,i)=>e(oe,{color:o.color,num:o.num},i))})]})}),kt=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
  pointer-events: none;
`,wt=l.div`
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
`,vt=l.div`
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
`,Ft=s.exports.memo(n=>{const{hint:t}=n;return e(At,{children:[...Array(t)].map(r=>e(Et,{},r))})}),At=l.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,Et=l.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,$t=s.exports.memo(()=>e(_t,{children:p("div",{children:[e("span",{children:"M"}),e("span",{children:"i"}),e("span",{children:"s"}),e("span",{children:"s"}),e("span",{children:"!"})]})})),_t=l.div`
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
`,Bt=s.exports.memo(n=>{const{name:t,hands:r,onclick:o,isFinish:i}=n,{myInfo:a}=v();return p(Dt,{className:"player",children:[e(St,{children:r.map((d,c)=>e(oe,{color:d.color,num:d.num,colorHint:d.colorHint,numHint:d.numHint,isReverse:i?!1:t===a.name,onclick:o},c))}),p(Nt,{children:["\u27A1\uFE0E ",t]})]})}),Dt=l.div`
  min-width: 310px;
`,St=l.div`
  display: flex;
  flex-direction: row-reverse;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-right: 10px;
  }
`,Nt=l.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,ie=s.exports.memo(n=>{const{turn:t}=n,[r,o]=s.exports.useState(!1);return s.exports.useEffect(()=>{o(!0),setTimeout(()=>o(!1),1e3)},[t]),p(It,{className:r?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),It=l.div`
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
`,se=()=>{const n=P();return s.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:s.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},Ht=s.exports.memo(()=>{const{myInfo:n}=v(),[t,r]=s.exports.useState({}),[o,i]=s.exports.useState(null),[a,d]=s.exports.useState(!1),[c,h]=s.exports.useState(!1),{toLobby:f}=se();s.exports.useEffect(()=>{m.on("hanabi:getData",(g,x)=>{x==="miss"||x==="gameover"?(d(!0),setTimeout(()=>{x==="gameover"&&h(!0),d(!1),r(g)},2400)):(x==="finish"&&h(!0),r(g))}),m.emit("hanabi:getData")},[]);const k=g=>{var D;const x=g.currentTarget;i(x),(D=document.querySelector(".hand.selected"))==null||D.classList.remove("selected"),x.classList.add("selected")},A=()=>`${(o==null?void 0:o.getBoundingClientRect().top)-100}px`,C=()=>{var R;if(!o)return;const g=[].slice.call((R=o.parentElement)==null?void 0:R.childNodes).indexOf(o),x=o.closest(".player"),D=document.querySelectorAll(".playerarea .player");return{player:[].slice.call(D).indexOf(x),index:g}},w=()=>{var x;const g=C();m.emit("hanabi:playHand",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},$=()=>{var x;const g=C();m.emit("hanabi:discardHand",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},b=()=>{var x;const g=C();m.emit("hanabi:colorHint",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")},y=()=>{var x;const g=C();m.emit("hanabi:numHint",g),i(null),(x=document.querySelector(".hand.selected"))==null||x.classList.remove("selected")};return Object.keys(t).length?p(B,{children:[p(Lt,{className:c||t.players[t.turn].player.name!==n.name?"is-disabled":"",children:[c?e(ae,{children:"\u30B2\u30FC\u30E0\u306F\u7D42\u4E86\u3057\u307E\u3057\u305F"}):t.deck.length===0?p(ae,{children:["\u6B8B\u308A",t.extra,"\u30BF\u30FC\u30F3\u3067\u3059"]}):null,t.turn<999&&e(ie,{turn:t.players[t.turn].player.name}),p(zt,{children:[e(yt,{deck:t.deck.length,fields:t.fields}),p(Pt,{children:[p(jt,{children:[p("p",{children:["SCORE : ",t.score]}),p("p",{children:["MISS : ",t.miss,"/3"]})]}),e(Ft,{hint:t.hint})]}),e(gt,{cemetery:t.cemetery})]}),p(Mt,{className:"playerarea",children:[t.players.map(g=>e(Bt,{name:g.player.name,hands:g.hands,onclick:k,isFinish:c},g.player.name)),c&&n.isAdmin&&e("div",{style:{marginTop:"30px"},children:e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:f,color:"teal"})}),!c&&o&&o.className.indexOf("reverse")!==-1&&p(le,{style:{top:A()},children:[e("p",{children:"\u3053\u306E\u30AB\u30FC\u30C9\u3092\u3069\u3046\u3059\u308B?"}),e("button",{onClick:w,children:"\u5834\u306B\u51FA\u3059"}),e("button",{onClick:$,children:"\u6368\u3066\u308B"})]}),!c&&o&&o.className.indexOf("reverse")===-1&&p(le,{style:{top:A()},children:[t.hint===0?e("p",{children:"\u30D2\u30F3\u30C8\u306F\u4F7F\u3048\u307E\u305B\u3093\u3002"}):e("p",{children:"\u30AB\u30FC\u30C9\u306B\u30D2\u30F3\u30C8\u3092\u51FA\u3059?"}),e("button",{onClick:b,disabled:t.hint===0,children:"\u8272\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"}),e("button",{onClick:y,disabled:t.hint===0,children:"\u6570\u5B57\u306E\u30D2\u30F3\u30C8\u3092\u51FA\u3059"})]})]})]}),a&&e($t,{})]}):null}),Lt=l.div`
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
`,ae=l.p`
  position: absolute;
  top: -40px;
  width: 100%;
  color: ${u.red};
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`,zt=l.div``,Pt=l.div`
  display: flex;
`,jt=l.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,Mt=l.div`
  position: relative;
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,le=l.div`
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
`,Tt=s.exports.memo(()=>{const[n,t]=s.exports.useState(!1);return s.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(B,{children:n&&p(Ot,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),Ot=l.div`
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
`,O=s.exports.memo(n=>{const{num:t,isHide:r,onclick:o,selected:i}=n,a=d=>d===0?"empty":d%2==0?"black":"white";return e(B,{children:r?e(ce,{className:a(t)}):e(ce,{onClick:o,className:`${i&&"isActive"} ${a(t)}`,children:t})})}),ce=l.div`
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
`,de=s.exports.memo(n=>{const{hands:t,isHide:r,isFinish:o}=n,i=[...t];for(;i.length<9;)i.push(0);return e(Rt,{children:i.map((a,d)=>e(O,{num:a,isHide:o?!1:r},d))})}),Rt=l.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,ue=s.exports.memo(n=>{const{result:t}=n,{toLobby:r}=se(),o=a=>a==="WIN"?"win":a==="LOSE"?"lose":"draw",i=()=>r();return p(Ut,{children:[e(Gt,{className:o(t),children:t}),e(F,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:i,color:"teal"})]})}),Ut=l.div`
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
`,Gt=l.div`
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
`,pe=s.exports.memo(n=>{const{hands:t,turn:r,isPlayer:o,isHide:i}=n,{myInfo:a}=v(),[d,c]=s.exports.useState(!1),[h,f]=s.exports.useState(null);s.exports.useEffect(()=>{c(h!==null)},[h]);const k=C=>f(C),A=()=>{f(null),m.emit("kowloonTactics:selectHand",[a,h])};return p(qt,{children:[e(Jt,{className:o?"":"disabed",children:t.map((C,w)=>i?e(O,{num:C,isHide:!0},w):e(O,{num:C,onclick:()=>k(w),selected:h===w&&!0},w))}),o&&r&&e(F,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:A,color:"teal",isDisabled:!d})]})}),qt=l.div`
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
`,Jt=l.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,Wt=s.exports.memo(n=>{const{judgeArray:t}=n,r=[...t];for(;r.length<9;)r.push("empty");return p(Yt,{children:[e(me,{className:"red",children:r.map((o,i)=>e("div",{className:o},i))}),e(me,{className:"blue",children:r.map((o,i)=>e("div",{className:o},i))})]})}),Yt=l.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,me=l.div`
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
`,he=s.exports.memo(n=>{const{player:t,supporter:r,area:o}=n;return p(Xt,{className:o,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(E,{name:t.name,icon:t.icon}),r.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(Kt,{children:r.map(i=>e(E,{name:i.name,icon:i.icon},i.id))})]})}),Xt=l.div`
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
`,Kt=l.div``,Vt=s.exports.memo(()=>{const{myInfo:n}=v(),[t,r]=s.exports.useState({}),[o,i]=s.exports.useState({}),[a,d]=s.exports.useState([]),[c,h]=s.exports.useState(""),[f,k]=s.exports.useState("none"),[A,C]=s.exports.useState(!1);s.exports.useEffect(()=>{m.on("common:getCurrentConfig",b=>{i(b),b.redPlayer.id===n.id||b.redSupporter.some(y=>y.id===n.id)?k("red"):(b.bluePlayer.id===n.id||b.blueSupporter.some(y=>y.id===n.id))&&k("blue")}),m.on("kowloonTactics:getData",b=>r(b)),m.on("kowloonTactics:getTurn",b=>h(b)),m.on("kowloonTactics:getJudge",b=>{const y=b[0],g=b[1];d(y),g&&C(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const w=()=>{const b=a.filter(x=>x==="red").length,y=a.filter(x=>x==="blue").length;return b>y?"red":b<y?"blue":"draw"},$=b=>{const y=w();return y==="draw"?"DRAW":y===b?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(o).length?p(B,{children:[a.length<9&&e(ie,{turn:c==="red"?o.redPlayer.name:o.bluePlayer.name}),p(Qt,{children:[e(he,{player:o.redPlayer,supporter:o.redSupporter,area:"red"}),e(he,{player:o.bluePlayer,supporter:o.blueSupporter,area:"blue"}),a.length<9?e(pe,{hands:t.redPlayer.hand,turn:c==="red"&&!0,isPlayer:o.redPlayer.id===n.id&&!0,isHide:f!=="red"&&!0}):e(ue,{result:$("red")}),p(Zt,{children:[e(de,{hands:t.redPlayer.field,isHide:f!=="red"&&!0,isFinish:A}),e(Wt,{judgeArray:a}),e(de,{hands:t.bluePlayer.field,isHide:f!=="blue"&&!0,isFinish:A})]}),a.length<9?e(pe,{hands:t.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:o.bluePlayer.id===n.id&&!0,isHide:f!=="blue"&&!0}):e(ue,{result:$("blue")})]}),e(Tt,{})]}):null}),Qt=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Zt=l.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,en=[{path:"/kowloon_tactics",exact:!1,children:e(Vt,{})},{path:"/hanabi",exact:!1,children:e(Ht,{})},{path:"/fakeArtist",exact:!1,children:e(ht,{})}],tn=s.exports.memo(()=>e(ke,{children:p(q,{children:[e(S,{exact:!0,path:"/",children:e(Le,{})}),e(S,{path:"/lobby",children:e(W,{children:e(Y,{children:e(dt,{})})})}),e(S,{path:"/game",render:({match:{url:n}})=>e(q,{children:en.map(t=>e(S,{exact:t.exact,path:`${n}${t.path}`,children:e(W,{children:e(Y,{children:t.children})})},t.path))})})]})})),nn=()=>e(Fe,{children:e(tn,{})});we.render(e(nn,{}),document.getElementById("root"));
