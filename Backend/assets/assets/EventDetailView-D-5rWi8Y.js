import{_ as c,r as d,o as v,c as a,a as n,b as s,E as _,g as m,h as o,H as p,j as k,z as b,y as h}from"./index-MlPRMXLU.js";const E={class:"event-detail-view"},f={class:"event-container"},g={key:0},w={key:1},y={__name:"EventDetailView",setup(x){const i=b(),l=h(),e=d(null);v(async()=>{try{const t=await m.get(`http://localhost:1337/event/${i.params.id}`);e.value=t.data}catch(t){console.error("Fehler beim Laden des Events:",t)}});const u=()=>{l.push({name:"ticketkauf",query:{eventId:e.value.id,eventName:e.value.name,eventPrice:e.value.preis}})};return(t,r)=>(o(),a("div",E,[n(p,{title:"Event Details"}),s("main",f,[r[0]||(r[0]=s("h1",null,"Event Details",-1)),e.value?(o(),a("div",w,[n(_,{id:e.value.id,name:e.value.name,bild:e.value.bild,datum:e.value.datum,ort:e.value.ort,bewertung:e.value.bewertung},null,8,["id","name","bild","datum","ort","bewertung"]),s("button",{class:"ticket-button",onClick:u}," Ticket kaufen ")])):(o(),a("div",g,"Loading..."))]),n(k)]))}},B=c(y,[["__scopeId","data-v-e84e53c8"]]);export{B as default};
