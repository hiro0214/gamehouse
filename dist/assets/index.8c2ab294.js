var se=Object.defineProperty,ae=Object.defineProperties;var le=Object.getOwnPropertyDescriptors;var j=Object.getOwnPropertySymbols;var ce=Object.prototype.hasOwnProperty,de=Object.prototype.propertyIsEnumerable;var T=(n,t,o)=>t in n?se(n,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[t]=o,S=(n,t)=>{for(var o in t||(t={}))ce.call(t,o)&&T(n,o,t[o]);if(j)for(var o of j(t))de.call(t,o)&&T(n,o,t[o]);return n},N=(n,t)=>ae(n,le(t));import{j as I,r as i,s,l as ue,u as P,B as pe,S as R,R as E,a as me}from"./vendor.2d340bfb.js";const xe=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const p of l.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function o(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerpolicy&&(l.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?l.credentials="include":a.crossorigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=o(a);fetch(a.href,l)}};xe();const e=I.exports.jsx,u=I.exports.jsxs,_=I.exports.Fragment,M=i.exports.createContext({}),ge=n=>{const{children:t}=n,[o,r]=i.exports.useState({});return e(M.Provider,{value:{myInfo:o,setMyInfo:r},children:t})},w=()=>i.exports.useContext(M),O=i.exports.memo(n=>{const{children:t}=n;return e(he,{children:t})}),he=s.div`
  background-image: url('/assets/images/bg_common.jpg');
  background-size: 600px auto;
  background-repeat: repeat;
`,U=i.exports.memo(n=>{const{children:t}=n;return e(be,{children:t})}),be=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 100vh;
`,fe=["\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9","Hanabi","other"],c={red:["#e53e3e"],orange:["#ed8936"],yellow:["#ecc94b"],green:["#38A169"],teal:["#38b2ac"],blue:["#3182ce"],cyan:["#0bc5ea"],purple:["#9f7aea"],pink:["#ed64a6"],black:["#171717"],gray:["#e2e8f0","#718096"],border:["#a0aec0"]},f=i.exports.memo(n=>{const{color:t,label:o,isDisabled:r,onclick:a}=n;return e(Ce,{className:t?`btn btn--${t}`:"btn",disabled:r,onClick:a,children:o})});f.defaultProps={color:"green"};const Ce=s.button`
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
`,D=i.exports.memo(n=>{const{text:t,size:o}=n;return e(ye,{className:o&&`heading--${o}`,children:t})});D.defaultProps={size:"1"};const ye=s.div`
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
`,we=i.exports.memo(n=>{const{value:t,placeholder:o,onChange:r}=n;return u(ke,{className:"textContainer",children:[e(ve,{value:t,placeholder:o,onChange:r}),e(Fe,{})]})}),ke=s.div`
  position: relative;
  width: 300px;
  margin-left: auto;
  margin-right: auto;
`,ve=s.input`
  width: 100%;
  padding: 12px 16px;
  border-bottom: 1px solid ${c.gray[1]};
  outline: none;
  &:focus + div {
    transform: scale(1);
  }
`,Fe=s.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  border-bottom: 2.5px solid #3e62ad;
  transform: scale(0);
  transform-origin: center;
  transition: transform 0.2s ease-out;
`,m=ue(),G=()=>{const{setMyInfo:n}=w(),t=()=>{const a=8,l="abcdefghijklmnopqrstuvwxyz0123456789";let p="";for(let d=0;d<a;d++)p+=l[Math.floor(Math.random()*l.length)];return p},o=()=>{const a=151,l=`${Math.floor(Math.random()*a)+1}`;let p;return l.length===1?p=`00${l}`:l.length===2?p=`0${l}`:p=l,p};return{setInfo:i.exports.useCallback((a,l)=>{const p={id:t(),name:a,icon:o(),isAdmin:l};n(p),m.emit("common:newUser",p)},[]),randomIcon:o}},Ae=()=>{const n=P(),{setInfo:t}=G();return{enter:i.exports.useCallback(r=>{r==="admin"?t("\u3044\u308F\u3082\u3068",!0):t(r,!1),n.push("/lobby")},[])}},$e=i.exports.memo(()=>{const[n,t]=i.exports.useState(""),[o,r]=i.exports.useState(!0),{enter:a}=Ae();return e(Ee,{children:u(_e,{children:[e(D,{text:"Games House"}),e(we,{value:n,placeholder:"\u30E6\u30FC\u30B6\u30FC\u540D\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044",onChange:d=>{t(d.target.value),d.target.value?r(!1):r(!0)}}),e(f,{label:"Join the game!",isDisabled:o,onclick:()=>a(n)})]})})}),Ee=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding-top: 50px;
  padding-bottom: 50px;
`,_e=s.div`
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
`,z=i.exports.memo(n=>{const{children:t,options:o,value:r,onChange:a,disabled:l,hdg:p}=n;return u(De,{children:[e(Se,{children:p}),u(Be,{value:r,onChange:a,disabled:!l,children:[t,o.map(d=>e("option",{value:d.key,children:d.value},d.value))]})]})}),De=s.div`
  display: grid;
  grid-template-columns: 80px 1fr;
  grid-gap: 10px;
  align-items: center;
`,Be=s.select`
  display: block;
  width: 300px;
  padding: 16px;
  font-size: 16px;
  background: #fff;
  border: 1px solid ${c.gray[1]};
  border-radius: 4px;
`,Se=s.div`
  font-size: 14px;
  font-weight: bold;
`,Ne=[{key:4,value:"4\u8272"},{key:5,value:"5\u8272"},{key:6,value:"6\u8272"}],Ie=[{key:3,value:"3\u679A"},{key:4,value:"4\u679A"},{key:5,value:"5\u679A"}],Pe=i.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=i.exports.useState(null),[r,a]=i.exports.useState(null);i.exports.useEffect(()=>{m.on("hanabi:updateConfig",d=>{o(d.colorNum),a(d.handNum)}),m.emit("hanabi:getConfig")},[]);const l=d=>{m.emit("hanabi:setColorNum",d.target.options[d.target.selectedIndex].value)},p=d=>{m.emit("hanabi:setHandNum",d.target.options[d.target.selectedIndex].value)};return u(ze,{children:[e(J,{children:e(z,{options:Ne,hdg:"\u8272\u306E\u6570",value:t||"",onChange:l,disabled:n.isAdmin})}),e(J,{style:{marginTop:"10px"},children:e(z,{options:Ie,hdg:"\u624B\u672D\u306E\u679A\u6570",value:r||"",onChange:p,disabled:n.isAdmin})})]})}),ze=s.div``,J=s.div`
  display: flex;
  justify-content: center;
  select {
    width: 150px;
  }
`,k=i.exports.memo(n=>{const{name:t,icon:o,editIcon:r,editName:a}=n,{myInfo:l,setMyInfo:p}=w(),[d,g]=i.exports.useState(!1),[h,v]=i.exports.useState(l.name),{randomIcon:F}=G(),C=()=>{p(N(S({},l),{icon:F()}))},y=()=>{g(!d),d&&p(N(S({},l),{name:h}))},$=x=>v(x.target.value);return i.exports.useEffect(()=>{m.emit("common:updateInfo",l)},[l]),u(He,{className:"profile",children:[u(Le,{className:"profile__img",children:[e("img",{src:`/assets/images/pokemon/${o}.png`}),r&&e(je,{onClick:C,children:r})]}),d?e(Re,{type:"text",value:h,onChange:$}):e(Te,{className:"profile__name",children:t}),a&&e(Me,{onClick:y,className:d?"isEdit":"",children:a})]})}),He=s.li`
  display: flex;
  align-items: center;
  padding: 5px 10px;
  background: ${c.gray[0]};
  border: 2px solid ${c.gray[1]};
  border-radius: 40px 6px 6px 40px;
  + li {
    margin-top: 10px;
  }
`,Le=s.div`
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
`,je=s.button`
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
`,Te=s.div`
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`,Re=s.input`
  display: block;
  width: calc(100% - 100px);
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  background: #fff;
  border-bottom: 1px solid ${c.gray[1]};
`,Me=s.button`
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
`,A="kowloonTactics",Oe=i.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=i.exports.useState({redPlayer:{id:"",name:"",icon:"",isAdmin:!1},bluePlayer:{id:"",name:"",icon:"",isAdmin:!1},redSupporter:[],blueSupporter:[]});i.exports.useEffect(()=>{m.on(`${A}:updateConfig`,d=>{o(d)}),m.emit(`${A}:updateConfig`)},[]);const r=()=>m.emit(`${A}:setRedPlayer`,n),a=()=>m.emit(`${A}:setBluePlayer`,n),l=()=>m.emit(`${A}:setRedSupporter`,n),p=()=>m.emit(`${A}:setBlueSupporter`,n);return u(Ue,{children:[u(W,{className:"red",children:[u(q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.redPlayer.id?e(k,{name:t.redPlayer.name,icon:t.redPlayer.icon}):e(f,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:r,color:"yellow"})]}),u(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.redSupporter.some(d=>d.id===n.id)&&e(f,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:l,color:"yellow"}),e(Y,{children:t.redSupporter.map(d=>e(k,{name:d.name,icon:d.icon},d.id))})]})]}),u(W,{className:"blue",children:[u(q,{children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),t.bluePlayer.id?e(k,{name:t.bluePlayer.name,icon:t.bluePlayer.icon}):e(f,{label:"\u30D7\u30EC\u30A4\u30E4\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:a,color:"yellow"})]}),u(K,{children:[e("span",{children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),!t.blueSupporter.some(d=>d.id===n.id)&&e(f,{label:"\u30B5\u30DD\u30FC\u30BF\u30FC\u3068\u3057\u3066\u53C2\u52A0",onclick:p,color:"yellow"}),e(Y,{children:t.blueSupporter.map(d=>e(k,{name:d.name,icon:d.icon},d.id))})]})]})]})}),Ue=s.div`
  display: flex;
  justify-content: space-between;
`,W=s.div`
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
`,q=s.div`
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
`,K=s.div`
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
`,Y=s.div``,Ge=()=>{const[n,t]=i.exports.useState(null),o=i.exports.useCallback(r=>{switch(r){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":t(e(Oe,{}));break;case"Hanabi":t(e(Pe,{}));break;case"other":t(e("p",{children:"other"}));break}},[]);return{currentConfig:n,setConfig:o}},Je=()=>{const n=P();return{gameStart:i.exports.useCallback(o=>{switch(o){case"\u30AF\u30FC\u30ED\u30F3\u30BF\u30AF\u30C6\u30A3\u30AF\u30B9":n.push("/game/kowloon_tactics");break;case"Hanabi":n.push("/game/hanabi");break}},[])}},V=[];fe.map(n=>V.push({key:n,value:n}));const We=i.exports.memo(()=>{const[n,t]=i.exports.useState(null),{myInfo:o}=w(),{gameStart:r}=Je(),{currentConfig:a,setConfig:l}=Ge(),p=g=>{const h=g.target.value;h.indexOf("--")===-1?m.emit("common:setCurrentGame",h):m.emit("common:setCurrentGame",null)},d=()=>m.emit("common:gameStart");return i.exports.useEffect(()=>{m.on("common:getCurrentGame",g=>{t(g),l(g)}),m.on("common:setCurrentGame",g=>{t(g),l(g)}),m.on("common:gameStart",g=>r(g)),m.emit("common:getCurrentGame")},[]),u(qe,{children:[e(D,{text:"Setting",size:"2"}),e(Ke,{children:e(z,{options:V,hdg:"\u30B2\u30FC\u30E0",value:n||"",onChange:p,disabled:o.isAdmin,children:e("option",{children:"-- \u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044 --"})})}),e(Ye,{children:n&&u(Ve,{children:[a,o.isAdmin&&e(f,{label:"\u30B9\u30BF\u30FC\u30C8",onclick:d,color:"blue"})]})})]})}),qe=s.div`
  width: 60%;
  padding: 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ke=s.div`
  display: flex;
  justify-content: center;
`,Ye=s.div`
  height: calc(100% - 134px);
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #666;
`,Ve=s.div`
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
`,Qe=i.exports.memo(n=>{const{userList:t}=n,{myInfo:o}=w();return u(Xe,{children:[e(D,{text:"Player",size:"2"}),e(Ze,{children:t.map(r=>e(k,{name:r.name,icon:r.icon,editIcon:r.id===o.id&&!0,editName:r.id===o.id&&!0},r.id))})]})}),Xe=s.div`
  width: 35%;
  padding: 10px 10px 20px 20px;
  background: rgba(20, 20, 20, 0.2);
  border-radius: 6px;
`,Ze=s.ul`
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
`,et=i.exports.memo(()=>{const[n,t]=i.exports.useState([]);return i.exports.useEffect(()=>{m.emit("common:getUser"),m.on("common:getUser",o=>t(o))},[]),u(tt,{children:[e(Qe,{userList:n}),e(We,{})]})}),tt=s.div`
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
`,nt=i.exports.memo(n=>{const{cemetery:t}=n;return e(ot,{children:t.map(o=>e(rt,{className:o.color,children:o.num.map((r,a)=>e(it,{children:r},a))},o.color))})}),ot=s.div`
  display: inline-block;
  min-width: 300px;
  margin-top: 30px;
  padding: 10px 24px;
  background: #202f55;
  border-radius: 8px;
`,rt=s.div`
  display: flex;
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
`,it=s.div`
  display: inline-block;
  &:not(:first-child) {
    margin-left: 12px;
  }
`,Q=i.exports.memo(n=>{const{color:t,num:o,isReverse:r}=n;return e(_,{children:r?e(X,{className:"reverse hand"}):e(X,{className:`${t} hand`,children:o!==0&&o})})}),X=s.div`
  width: 60px;
  height: 120px;
  padding-top: 5px;
  font-size: 36px;
  font-weight: bold;
  background: #98b8e2;
  border: 2px solid ${c.gray[1]};
  border-radius: 8px;
  text-align: center;
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
`,st=i.exports.memo(n=>{const{deck:t,fields:o}=n;return u(at,{children:[e(lt,{children:t}),e(ct,{children:o.map((r,a)=>e(Q,{color:r.color,num:r.num},a))})]})}),at=s.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  padding: 20px;
  background: #202f55;
  border-radius: 8px;
`,lt=s.div`
  width: 60px;
  height: 120px;
  margin-right: 30px;
  padding-top: 5px;
  font-size: 30px;
  font-weight: bold;
  background: #98b8e2;
  border: 3px solid ${c.gray[1]};
  border-radius: 8px;
  text-align: center;
`,ct=s.div`
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
`,dt=i.exports.memo(n=>{const{hint:t}=n;return e(ut,{children:[...Array(t)].map(o=>e(pt,{},o))})}),ut=s.div`
  display: grid;
  grid-template-columns: repeat(4, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 5px;

  margin-left: 30px;
  padding: 10px;
  background: #fff;
  border-radius: 8px;
`,pt=s.div`
  background-image: url('/assets/images/img_hint.png');
  background-size: 100%;
  background-repeat: no-repeat;
`,mt=i.exports.memo(n=>{const{name:t,hands:o}=n;return u(xt,{className:"player",children:[e(gt,{children:o.map((r,a)=>e(Q,{color:r.color,num:r.num},a))}),u(ht,{children:["\u27A1\uFE0E ",t]})]})}),xt=s.div``,gt=s.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 20px;
  .hand:not(:first-child) {
    margin-left: 10px;
  }
`,ht=s.div`
  width: 100%;
  padding: 2px 8px;
  font-size: 14px;
  color: #fff;
  background: #000;
`,Z=i.exports.memo(n=>{const{turn:t}=n,[o,r]=i.exports.useState(!1);return i.exports.useEffect(()=>{r(!0),setTimeout(()=>r(!1),1e3)},[t]),u(bt,{className:o?"isAnimate":"",children:[t,"\u306E\u30BF\u30FC\u30F3\u3067\u3059\uFF01"]})}),bt=s.div`
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
`,ft=[{player:{name:"\u3044\u308F\u3082\u3068"},hands:[{color:"red",num:1},{color:"yellow",num:4},{color:"green",num:2},{color:"blue",num:5}]},{player:{name:"\u3084\u307E\u3060"},hands:[{color:"blue",num:5},{color:"blue",num:1},{color:"green",num:4},{color:"green",num:1}]},{player:{name:"\u305F\u306A\u304B"},hands:[{color:"yellow",num:3},{color:"blue",num:1},{color:"green",num:3},{color:"red",num:4}]}],Ct=[{color:"red",num:0},{color:"blue",num:0},{color:"yellow",num:0},{color:"green",num:0},{color:"white",num:0}],yt=[{color:"red",num:[1,1,1,2,2,3,3,4,4,5]},{color:"blue",num:[1,1,1,2,2,3,3,4,4,5]},{color:"yellow",num:[1,1,1,2,2,3,3,4,4,5]},{color:"green",num:[1,1,1,2,2,3,3,4,4,5]},{color:"white",num:[1,1,1,2,2,3,3,4,4,5]}],wt=i.exports.memo(()=>u(kt,{children:[e(Z,{turn:"\u3044\u308F\u3082\u3068"}),u(vt,{children:[e(st,{deck:30,fields:Ct}),u(Ft,{children:[u(At,{children:[u("p",{children:["SCORE : ",0]}),u("p",{children:["MISS : ",0,"/3"]})]}),e(dt,{hint:8})]}),e(nt,{cemetery:yt})]}),e($t,{children:ft.map(n=>e(mt,{name:n.player.name,hands:n.hands},n.player.name))})]})),kt=s.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: flex-start;
  width: 1000px;
  min-height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`,vt=s.div``,Ft=s.div`
  display: flex;
`,At=s.div`
  min-width: 150px;
  font-size: 24px;
  font-weight: bold;
`,$t=s.div`
  .player:not(:first-child) {
    margin-top: 40px;
  }
`,Et=i.exports.memo(()=>{const[n,t]=i.exports.useState(!1);return i.exports.useEffect(()=>{m.on("kowloonTactics:checkAnimate",()=>{t(!0),setTimeout(()=>t(!1),4e3)})},[]),e(_,{children:n&&u(_t,{children:[e("span",{children:"C"}),e("span",{children:"h"}),e("span",{children:"e"}),e("span",{children:"c"}),e("span",{children:"k"}),e("span",{children:"!"})]})})}),_t=s.div`
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
`,H=i.exports.memo(n=>{const{num:t,isHide:o,onclick:r,selected:a}=n,l=p=>p===0?"empty":p%2==0?"black":"white";return e(_,{children:o?e(ee,{className:l(t)}):e(ee,{onClick:r,className:`${a&&"isActive"} ${l(t)}`,children:t})})}),ee=s.div`
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
`,te=i.exports.memo(n=>{const{hands:t,isHide:o,isFinish:r}=n,a=[...t];for(;a.length<9;)a.push(0);return e(Dt,{children:a.map((l,p)=>e(H,{num:l,isHide:r?!1:o},p))})}),Dt=s.div`
  display: grid;
  grid-template-columns: repeat(1, 50px);
  grid-template-rows: repeat(9, 50px);
  gap: 10px;
`,Bt=()=>{const n=P();return i.exports.useEffect(()=>{m.on("common:toLobby",()=>{n.push("/lobby")})},[]),{toLobby:i.exports.useCallback(()=>{m.emit("common:toLobby")},[])}},ne=i.exports.memo(n=>{const{result:t}=n,{toLobby:o}=Bt(),r=l=>l==="WIN"?"win":l==="LOSE"?"lose":"draw",a=()=>o();return u(St,{children:[e(Nt,{className:r(t),children:t}),e(f,{label:"\u30ED\u30D3\u30FC\u306B\u623B\u308B",onclick:a,color:"teal"})]})}),St=s.div`
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
`,Nt=s.div`
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
`,oe=i.exports.memo(n=>{const{hands:t,turn:o,isPlayer:r,isHide:a}=n,{myInfo:l}=w(),[p,d]=i.exports.useState(!1),[g,h]=i.exports.useState(null);i.exports.useEffect(()=>{d(g!==null)},[g]);const v=C=>h(C),F=()=>{h(null),m.emit("kowloonTactics:selectHand",[l,g])};return u(It,{children:[e(Pt,{className:r?"":"disabed",children:t.map((C,y)=>a?e(H,{num:C,isHide:!0},y):e(H,{num:C,onclick:()=>v(y),selected:g===y&&!0},y))}),r&&o&&e(f,{label:"\u30AB\u30FC\u30C9\u3092\u51FA\u3059",onclick:F,color:"teal",isDisabled:!p})]})}),It=s.div`
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
`,Pt=s.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-template-rows: repeat(2, 50px);
  gap: 10px;
  width: 100%;
  &.disabed {
    pointer-events: none;
  }
`,zt=i.exports.memo(n=>{const{judgeArray:t}=n,o=[...t];for(;o.length<9;)o.push("empty");return u(Ht,{children:[e(re,{className:"red",children:o.map((r,a)=>e("div",{className:r},a))}),e(re,{className:"blue",children:o.map((r,a)=>e("div",{className:r},a))})]})}),Ht=s.div`
  display: flex;
  width: 50px;
  pointer-events: none;
`,re=s.div`
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
`,ie=i.exports.memo(n=>{const{player:t,supporter:o,area:r}=n;return u(Lt,{className:r,children:[e("span",{children:"\u30D7\u30EC\u30A4\u30E4\u30FC"}),e(k,{name:t.name,icon:t.icon}),o.length>0&&e("span",{style:{marginTop:"15px"},children:"\u30B5\u30DD\u30FC\u30BF\u30FC"}),e(jt,{children:o.map(a=>e(k,{name:a.name,icon:a.icon},a.id))})]})}),Lt=s.div`
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
`,jt=s.div``,Tt=i.exports.memo(()=>{const{myInfo:n}=w(),[t,o]=i.exports.useState({}),[r,a]=i.exports.useState({}),[l,p]=i.exports.useState([]),[d,g]=i.exports.useState(""),[h,v]=i.exports.useState("none"),[F,C]=i.exports.useState(!1);i.exports.useEffect(()=>{m.on("common:getCurrentConfig",x=>{a(x),x.redPlayer.id===n.id||x.redSupporter.some(b=>b.id===n.id)?v("red"):(x.bluePlayer.id===n.id||x.blueSupporter.some(b=>b.id===n.id))&&v("blue")}),m.on("kowloonTactics:getData",x=>o(x)),m.on("kowloonTactics:getTurn",x=>g(x)),m.on("kowloonTactics:getJudge",x=>{const b=x[0],L=x[1];p(b),L&&C(!0)}),m.emit("common:getCurrentConfig"),m.emit("kowloonTactics:getData"),m.emit("kowloonTactics:getTurn")},[]);const y=()=>{const x=l.filter(B=>B==="red").length,b=l.filter(B=>B==="blue").length;return x>b?"red":x<b?"blue":"draw"},$=x=>{const b=y();return b==="draw"?"DRAW":b===x?"WIN":"LOSE"};return Object.keys(t).length&&Object.keys(r).length?u(_,{children:[l.length<9&&e(Z,{turn:d==="red"?r.redPlayer.name:r.bluePlayer.name}),u(Rt,{children:[e(ie,{player:r.redPlayer,supporter:r.redSupporter,area:"red"}),e(ie,{player:r.bluePlayer,supporter:r.blueSupporter,area:"blue"}),l.length<9?e(oe,{hands:t.redPlayer.hand,turn:d==="red"&&!0,isPlayer:r.redPlayer.id===n.id&&!0,isHide:h!=="red"&&!0}):e(ne,{result:$("red")}),u(Mt,{children:[e(te,{hands:t.redPlayer.field,isHide:h!=="red"&&!0,isFinish:F}),e(zt,{judgeArray:l}),e(te,{hands:t.bluePlayer.field,isHide:h!=="blue"&&!0,isFinish:F})]}),l.length<9?e(oe,{hands:t.bluePlayer.hand,turn:d==="blue"&&!0,isPlayer:r.bluePlayer.id===n.id&&!0,isHide:h!=="blue"&&!0}):e(ne,{result:$("blue")})]}),e(Et,{})]}):null}),Rt=s.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 900px;
  height: 720px;
  margin-left: auto;
  margin-right: auto;
`,Mt=s.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
  margin: 0 28px;
  padding: 5px;
  background: #edf2f7;
  border: solid 1px #666;
  border-radius: 5px;
  box-shadow: 0 0 6px 4px #33333333;
`,Ot=[{path:"/kowloon_tactics",exact:!1,children:e(Tt,{})},{path:"/hanabi",exact:!1,children:e(wt,{})}],Ut=i.exports.memo(()=>e(pe,{children:u(R,{children:[e(E,{exact:!0,path:"/",children:e($e,{})}),e(E,{path:"/lobby",children:e(O,{children:e(U,{children:e(et,{})})})}),e(E,{path:"/game",render:({match:{url:n}})=>e(R,{children:Ot.map(t=>e(E,{exact:t.exact,path:`${n}${t.path}`,children:e(O,{children:e(U,{children:t.children})})},t.path))})})]})})),Gt=()=>e(ge,{children:e(Ut,{})});me.render(e(Gt,{}),document.getElementById("root"));
