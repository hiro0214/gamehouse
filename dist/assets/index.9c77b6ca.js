var se=Object.defineProperty,ae=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,ce=Object.prototype.propertyIsEnumerable;var T=(n,e,o)=>e in n?se(n,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[e]=o,S=(n,e)=>{for(var o in e||(e={}))de.call(e,o)&&T(n,o,e[o]);if(j)for(var o of j(e))ce.call(e,o)&&T(n,o,e[o]);return n},N=(n,e)=>ae(n,le(e));import{j as I,r as i,s as a,l as pe,u as P,B as ue,S as R,R as E,a as me}from"./vendor.2d340bfb.js";const xe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function o(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerpolicy&&(l.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?l.credentials="include":s.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(s){if(s.ep)return;s.ep=!0;const l=o(s);fetch(s.href,l)}};xe();const t=I.exports.jsx,p=I.exports.jsxs,_=I.exports.Fragment,M=i.exports.createContext({}),ge=n=>{const{children:e}=n,[o,r]=i.exports.useState({});return t(M.Provider,{value:{myInfo:o,setMyInfo:r},children:e})},f=()=>i.exports.useContext(M),O=i.exports.memo(n=>{const{children:e}=n;return t(he,{children:e})}),he=a.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,U=i.exports.memo(n=>{const{children:e}=n;return t(be,{children:e})}),be=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,fe=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],d={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},C=i.exports.memo(n=>{const{color:e,label:o,isDisabled:r,onclick:s}=n;return t(Ce,{className:e?`btn btn--${e}`:"btn",disabled:r,onClick:s,children:o})});C.defaultProps={color:"green"};const Ce=a.button`
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
`,D=i.exports.memo(n=>{const{text:e,size:o}=n;return t(ye,{className:o&&`heading--${o}`,children:e})});D.defaultProps={size:"1"};const ye=a.div`
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
`,ke=i.exports.memo(n=>{const{value:e,placeholder:o,onChange:r}=n;return p(we,{className:"textContainer",children:[t(ve,{value:e,placeholder:o,onChange:r}),t(Ae,{})]})}),we=a.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ve=a.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${d.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Ae=a.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=pe(),G=()=>{const{setMyInfo:n}=f(),e=()=>{const s=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let u="";for(let c=0;c<s;c++)u+=l[Math.floor(Math.random()*l.length)];return u},o=()=>{const s=151,l=`${Math.floor(Math.random()*s)+1}`;let u;return l.length===1?u=`00${l}`:l.length===2?u=`0${l}`:u=l,u};return{setInfo:i.exports.useCallback((s,l)=>{const u={id:e(),name:s,icon:o(),isAdmin:l};n(u),m.emit("common:newUser",u)},[]),randomIcon:o}},Fe=()=>{const n=P(),{setInfo:e}=G();return{enter:i.exports.useCallback(r=>{r==="admin"?e("\u3044\u308F\u3082\u3068",!0):e(r,!1),n.push("/lobby")},[])}},$e=i.exports.memo(()=>{const[n,e]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:s}=Fe();return t(Ee,{children:p(_e,{children:[t(D,{text:"Games House"}),t(ke,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:c=>{e(c.target.value),c.target.value?r(!1):r(!0)}}),t(C,{label:"Join the game!",isDisabled:o,onclick:()=>s(n)})]})})}),Ee=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,_e=a.div`
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
`,z=i.exports.memo(n=>{const{children:e,options:o,value:r,onChange:s,disabled:l,hdg:u}=n;return p(De,{children:[t(Se,{children:u}),p(Be,{value:r,onChange:s,disabled:!l,children:[e,o.map(c=>t("option",{value:c.key,children:c.value},c.value))]})]})}),De=a.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Be=a.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${d.gray[1]};
  border-radius: 4px;
`,Se=a.div`
  font-size: 14px;
  font-weight: bold;
`,Ne=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Ie=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Pe=i.exports.memo(()=>{const{myInfo:n}=f(),[e,o]=i.exports.useState(null),[r,s]=i.exports.useState(null);i.exports.useEffect(()=>{m.on("hanabi:updateConfig",c=>{o(c.colorNum),s(c.handNum)}),m.emit("hanabi:getConfig")},[]);const l=c=>{m.emit("hanabi:setColorNum",c.target.options[c.target.selectedIndex].value)},u=c=>{m.emit("hanabi:setHandNum",c.target.options[c.target.selectedIndex].value)};return p(ze,{children:[t(J,{children:t(z,{options:Ne,hdg:"\u8272\u306E\u6570",value:e||"",onChange:l,disabled:n.isAdmin})}),t(J,{style:{marginTop:"10px"},children:t(z,{options:Ie,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:u,disabled:n.isAdmin})})]})}),ze=a.div``,J=a.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,w=i.exports.memo(n=>{const{name:e,icon:o,editIcon:r,editName:s}=n,{myInfo:l,setMyInfo:u}=f(),[c,g]=i.exports.useState(!1),[h,v]=i.exports.useState(l.name),{randomIcon:A}=G(),y=()=>{u(N(S({},l),{icon:A()}))},k=()=>{g(!c),c&&u(N(S({},l),{name:h}))},$=x=>v(x.target.value);return i.exports.useEffect(()=>{m.emit("common:updateInfo",l)},[l]),p(He,{className:"profile",children:[p(Le,{className:"profile__img",children:[t("img",{src:`/assets/images/pokemon/${o}.png`}),r&&t(je,{onClick:y,children:r})]}),c?t(Re,{type:"text",value:h,onChange:$}):t(Te,{className:"profile__name",children:e}),s&&t(Me,{onClick:k,className:c?"isEdit":"",children:s})]})}),He=a.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${d.gray[0]};
  border: 2px solid ${d.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Le=a.div`
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
`,je=a.button`
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
`,Te=a.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Re=a.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${d.gray[1]};
`,Me=a.button`
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
`,F="kowloonTactics",Oe=i.exports.memo(()=>{const{myInfo:n}=f(),[e,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{m.on(`${F}:updateConfig`,c=>{o(c)}),m.emit(`${F}:updateConfig`)},[]);const r=()=>m.emit(`${F}:setRedPlayer`,n),s=()=>m.emit(`${F}:setBluePlayer`,n),l=()=>m.emit(`${F}:setRedSupporter`,n),u=()=>m.emit(`${F}:setBlueSupporter`,n);return p(Ue,{children:[p(W,{className:"red",children:[p(q,{children:[t("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e.redPlayer.id?t(w,{name:e.redPlayer.name,icon:e.redPlayer.icon}):t(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),p(K,{children:[t("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!e.redSupporter.some(c=>c.id===n.id)&&t(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),t(Y,{children:e.redSupporter.map(c=>t(w,{name:c.name,icon:c.icon},c.id))})]})]}),p(W,{className:"blue",children:[p(q,{children:[t("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e.bluePlayer.id?t(w,{name:e.bluePlayer.name,icon:e.bluePlayer.icon}):t(C,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:s,color:"yellow"})]}),p(K,{children:[t("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!e.blueSupporter.some(c=>c.id===n.id)&&t(C,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:u,color:"yellow"}),t(Y,{children:e.blueSupporter.map(c=>t(w,{name:c.name,icon:c.icon},c.id))})]})]})]})}),Ue=a.div`
  display: flex;
  justify-content: space-between;
`,W=a.div`
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
`,q=a.div`
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
`,K=a.div`
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
`,Y=a.div``,Ge=()=>{const[n,e]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":e(t(Oe,{}));break;case"Hanabi":e(t(Pe,{}));break;case"other":e(t("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},Je=()=>{const n=P();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break}},[])}},V=[];fe.map(n=>V.push({key:n,value:n}));const We=i.exports.memo(()=>{const[n,e]=i.exports.useState(null),{myInfo:o}=f(),{gameStart:r}=Je(),{currentConfig:s,setConfig:l}=Ge(),u=g=>{const h=g.target.value;h.indexOf("--")===-1?m.emit("common:setCurrentGame",h):m.emit("common:setCurrentGame",null)},c=()=>m.emit("common:gameStart");return i.exports.useEffect(()=>{m.on("common:getCurrentGame",g=>{e(g),l(g)}),m.on("common:setCurrentGame",g=>{e(g),l(g)}),m.on("common:gameStart",g=>r(g)),m.emit("common:getCurrentGame")},[]),p(qe,{children:[t(D,{text:"Setting",size:"2"}),t(Ke,{children:t(z,{options:V,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:u,disabled:o.isAdmin,children:t("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),t(Ye,{children:n&&p(Ve,{children:[s,o.isAdmin&&t(C,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:c,color:"blue"})]})})]})}),qe=a.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ke=a.div`
  display: flex;
  justify-content: center;
`,Ye=a.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Ve=a.div`
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
`,Qe=i.exports.memo(n=>{const{userList:e}=n,{myInfo:o}=f();return p(Xe,{children:[t(D,{text:"Player",size:"2"}),t(Ze,{children:e.map(r=>t(w,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),Xe=a.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ze=a.ul`
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
`,et=i.exports.memo(()=>{const[n,e]=i.exports.useState([]);return i.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",o=>e(o))},[]),p(tt,{children:[t(Qe,{userList:n}),t(We,{})]})}),tt=a.div`
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
`,nt=i.exports.memo(n=>{const{cemetery:e}=n;return t(ot,{children:e.map(o=>t(rt,{className:o.color,children:o.num.map((r,s)=>t(it,{children:r},s))},o.color))})}),ot=a.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,rt=a.div`
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
`,it=a.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,Q=i.exports.memo(n=>{const{color:e,num:o,isReverse:r}=n;return t(_,{children:r?t(X,{className:"reverse hand"}):t(X,{className:`${e} hand`,children:o!==0&&o})})}),X=a.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #becef1;
  border: 2px solid ${d.gray[1]};
  border-radius: 8px;
  text-align: center;
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
`,st=i.exports.memo(n=>{const{deck:e,fields:o}=n;return p(at,{children:[t(lt,{children:e}),t(dt,{children:o.map((r,s)=>t(Q,{color:r.color,num:r.num},s))})]})}),at=a.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
`,lt=a.div`
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
`,dt=a.div`
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
`,ct=i.exports.memo(n=>{const{hint:e}=n;return t(pt,{children:[...Array(e)].map(o=>t(ut,{},o))})}),pt=a.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,ut=a.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,mt=i.exports.memo(n=>{const{name:e,hands:o}=n,{myInfo:r}=f();return p(xt,{className:"player",children:[t(gt,{children:o.map((s,l)=>t(Q,{color:s.color,num:s.num,isReverse:e===r.name},l))}),p(ht,{children:["\u27A1\uFE0E ",e]})]})}),xt=a.div``,gt=a.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-left: 10px;
  }
`,ht=a.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,Z=i.exports.memo(n=>{const{turn:e}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[e]),p(bt,{className:o?"isAnimate":"",children:[e,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),bt=a.div`
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
`,ft=i.exports.memo(()=>{const{myInfo:n}=f(),[e,o]=i.exports.useState({});return i.exports.useEffect(()=>{m.on("hanabi:getData",r=>o(r)),m.emit("hanabi:getData")},[]),Object.keys(e).length?p(Ct,{className:e.players[e.turn].player.name!==n.name?"is-disabled":"",children:[t(Z,{turn:e.players[e.turn].player.name}),p(yt,{children:[t(st,{deck:e.deck.length,fields:e.fields}),p(kt,{children:[p(wt,{children:[p("p",{children:["SCORE : ",e.score]}),p("p",{children:["MISS : ",e.miss,"/3"]})]}),t(ct,{hint:e.hint})]}),t(nt,{cemetery:e.cemetery})]}),t(vt,{children:e.players.map(r=>t(mt,{name:r.player.name,hands:r.hands},r.player.name))})]}):null}),Ct=a.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
  &.is-disabed {
    pointer-events: none;
  }
`,yt=a.div``,kt=a.div`
  display: flex;
`,wt=a.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,vt=a.div`
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,At=i.exports.memo(()=>{const[n,e]=i.exports.useState(!1);return i.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{e(!0),setTimeout(()=>e(!1),4e3)})},[]),t(_,{children:n&&p(Ft,{children:[t("span",{children:"C"}),t("span",{children:"h"}),t("span",{children:"e"}),t("span",{children:"c"}),t("span",{children:"k"}),t("span",{children:"!"})]})})}),Ft=a.div`
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
`,H=i.exports.memo(n=>{const{num:e,isHide:o,onclick:r,selected:s}=n,l=u=>u===0?"empty":u%2==0?"black":"white";return t(_,{children:o?t(ee,{className:l(e)}):t(ee,{onClick:r,className:`${s&&"isActive"} ${l(e)}`,children:e})})}),ee=a.div`
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
`,te=i.exports.memo(n=>{const{hands:e,isHide:o,isFinish:r}=n,s=[...e];for(;s.length<9;)s.push(0);return t($t,{children:s.map((l,u)=>t(H,{num:l,isHide:r?!1:o},u))})}),$t=a.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Et=()=>{const n=P();return i.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},ne=i.exports.memo(n=>{const{result:e}=n,{toLobby:o}=Et(),r=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",s=()=>o();return p(_t,{children:[t(Dt,{className:r(e),children:e}),t(C,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:s,color:"teal"})]})}),_t=a.div`
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
`,Dt=a.div`
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
`,oe=i.exports.memo(n=>{const{hands:e,turn:o,isPlayer:r,isHide:s}=n,{myInfo:l}=f(),[u,c]=i.exports.useState(!1),[g,h]=i.exports.useState(null);i.exports.useEffect(()=>{c(g!==null)},[g]);const v=y=>h(y),A=()=>{h(null),m.emit("kowloonTactics:selectHand",[l,g])};return p(Bt,{children:[t(St,{className:r?"":"disabed",children:e.map((y,k)=>s?t(H,{num:y,isHide:!0},k):t(H,{num:y,onclick:()=>v(k),selected:g===k&&!0},k))}),r&&o&&t(C,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:A,color:"teal",isDisabled:!u})]})}),Bt=a.div`
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
`,St=a.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,Nt=i.exports.memo(n=>{const{judgeArray:e}=n,o=[...e];for(;o.length<9;)o.push("empty");return p(It,{children:[t(re,{className:"red",children:o.map((r,s)=>t("div",{className:r},s))}),t(re,{className:"blue",children:o.map((r,s)=>t("div",{className:r},s))})]})}),It=a.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,re=a.div`
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
`,ie=i.exports.memo(n=>{const{player:e,supporter:o,area:r}=n;return p(Pt,{className:r,children:[t("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t(w,{name:e.name,icon:e.icon}),o.length>0&&t("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),t(zt,{children:o.map(s=>t(w,{name:s.name,icon:s.icon},s.id))})]})}),Pt=a.div`
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
`,zt=a.div``,Ht=i.exports.memo(()=>{const{myInfo:n}=f(),[e,o]=i.exports.useState({}),[r,s]=i.exports.useState({}),[l,u]=i.exports.useState([]),[c,g]=i.exports.useState(""),[h,v]=i.exports.useState("none"),[A,y]=i.exports.useState(!1);i.exports.useEffect(()=>{m.on("common:getCurrentConfig",x=>{s(x),x.redPlayer.id===n.id||x.redSupporter.some(b=>b.id===n.id)?v("red"):(x.bluePlayer.id===n.id||x.blueSupporter.some(b=>b.id===n.id))&&v("blue")}),m.on("kowloonTactics:getData",x=>o(x)),m.on("kowloonTactics:getTurn",x=>g(x)),m.on("kowloonTactics:getJudge",x=>{const b=x[0],L=x[1];u(b),L&&y(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const k=()=>{const x=l.filter(B=>B==="red").length,b=l.filter(B=>B==="blue").length;return x>b?"red":x<b?"blue":"draw"},$=x=>{const b=k();return b==="draw"?"DRAW":b===x?"WIN":"LOSE"};return Object.keys(e).length&&Object.keys(r).length?p(_,{children:[l.length<9&&t(Z,{turn:c==="red"?r.redPlayer.name:r.bluePlayer.name}),p(Lt,{children:[t(ie,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),t(ie,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),l.length<9?t(oe,{hands:e.redPlayer.hand,turn:c==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):t(ne,{result:$("red")}),p(jt,{children:[t(te,{hands:e.redPlayer.field,isHide:h!=="red"&&!0,isFinish:A}),t(Nt,{judgeArray:l}),t(te,{hands:e.bluePlayer.field,isHide:h!=="blue"&&!0,isFinish:A})]}),l.length<9?t(oe,{hands:e.bluePlayer.hand,turn:c==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):t(ne,{result:$("blue")})]}),t(At,{})]}):null}),Lt=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,jt=a.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,Tt=[{path:"/kowloon_tactics",exact:!1,children:t(Ht,{})},{path:"/hanabi",exact:!1,children:t(ft,{})}],Rt=i.exports.memo(()=>t(ue,{children:p(R,{children:[t(E,{exact:!0,path:"/",children:t($e,{})}),t(E,{path:"/lobby",children:t(O,{children:t(U,{children:t(et,{})})})}),t(E,{path:"/game",render:({match:{url:n}})=>t(R,{children:Tt.map(e=>t(E,{exact:e.exact,path:`${n}${e.path}`,children:t(O,{children:t(U,{children:e.children})})},e.path))})})]})})),Mt=()=>t(ge,{children:t(Rt,{})});me.render(t(Mt,{}),document.getElementById("root"));
