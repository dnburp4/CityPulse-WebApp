import{_ as f,r as k,o as N,c as g,a as y,b as e,p as u,t as l,s as i,z as q,h as _,H as T,j as b,y as C}from"./index-MlPRMXLU.js";const V={class:"zahlung-view"},h={class:"payment-container"},x={class:"payment-summary"},B={__name:"ZahlungView",setup(P){const d=C(),n=q();n.query.eventName,n.query.eventId;const a=n.query.ticketCount;n.query.paymentMethod;const c=n.query.totalPrice,o=n.query.fullName;n.query.address,n.query.houseNumber;const r=k(null);N(()=>{const s=n.query;r.value=JSON.parse(s.event),a.value=s.ticketCount,o.value=s.fullName,c.value=s.totalPrice});const v=()=>{d.push({name:"finalTicket",query:{event:JSON.stringify(r.value),ticketCount:a.value,fullName:o.value}})};return(s,t)=>{var m,p;return _(),g("div",V,[y(T,{title:"Zahlung"}),e("main",h,[t[5]||(t[5]=e("h1",null,"Zahlung",-1)),e("div",x,[t[4]||(t[4]=e("h2",null,[e("i",{class:"icon"},"ⓘ"),u(" Ticketkauf")],-1)),e("p",null,[t[0]||(t[0]=e("strong",null,"Event:",-1)),u(" "+l((p=(m=r.value)==null?void 0:m.value)==null?void 0:p.name),1)]),e("p",null,[t[1]||(t[1]=e("strong",null,"Anzahl Tickets:",-1)),u(" "+l(i(a)),1)]),e("p",null,[t[2]||(t[2]=e("strong",null,"Name:",-1)),u(" "+l(i(o)),1)]),e("p",null,[t[3]||(t[3]=e("strong",null,"Preis:",-1)),u(" "+l(i(c))+" €",1)]),e("button",{class:"buy-button",onClick:v},"Buy")])]),y(b)])}}},w=f(B,[["__scopeId","data-v-6a24c933"]]);export{w as default};
