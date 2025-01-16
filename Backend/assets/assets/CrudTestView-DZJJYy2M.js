import{_ as C,r as b,o as S,c as d,a as y,b as l,k as g,w as o,v as u,d as V,e as w,l as E,F as k,f as B,g as v,h as p,H as h,t as i,j as N}from"./index-4-hfgK7h.js";const D={class:"crud-test-view"},L={key:0},$={key:1},q=["onClick"],z=["onClick"],K={__name:"CrudTestView",setup(M){const x=r=>{n.value={...r},window.scrollTo(0,0)},m=b([]),a=b({id:"",name:"",bild:"",datum:"",typ:"",preis:"",bewertung:1,ort:""}),n=b(null),s=async()=>{try{const r=await v.get("/event");m.value=r.data}catch(r){console.error("Fehler beim Laden der Events:",r)}},U=async()=>{try{await v.post("/event",a.value),alert("Event erfolgreich erstellt"),s(),a.value={id:"",name:"",availableTickets:"",bild:"",datum:"",typ:"",preis:"",bewertung:1,ort:""}}catch(r){console.error("Fehler beim Erstellen des Events:",r)}},T=async()=>{if(n.value)try{await v.put(`/event/${String(n.value.id)}`,n.value),alert("Event erfolgreich aktualisiert"),s(),n.value=null}catch(r){console.error("Fehler beim Aktualisieren des Events:",r)}},f=async r=>{try{await v.delete(`/event/${r}`),alert("Event erfolgreich gelöscht"),s()}catch(e){console.error("Fehler beim Löschen des Events:",e)}};return S(s),(r,e)=>(p(),d(k,null,[y(h,{title:"Events bearbeiten"}),l("div",D,[n.value?E("",!0):(p(),d("section",L,[e[20]||(e[20]=l("h2",null,"Neues Event erstellen",-1)),l("form",{onSubmit:g(U,["prevent"])},[o(l("input",{"onUpdate:modelValue":e[0]||(e[0]=t=>a.value.id=t),type:"text",placeholder:"id",required:""},null,512),[[u,a.value.id]]),o(l("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.value.name=t),type:"text",placeholder:"Name",required:""},null,512),[[u,a.value.name]]),o(l("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.value.availableTickets=t),type:"number",placeholder:"Verfügbare Tickets || Dieser Wert ist fest und kann nicht verändert werden"},null,512),[[u,a.value.availableTickets]]),o(l("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>a.value.bild=t),type:"text",placeholder:"/src/assets/images/"},null,512),[[u,a.value.bild]]),o(l("input",{"onUpdate:modelValue":e[4]||(e[4]=t=>a.value.datum=t),type:"text",placeholder:"Datum"},null,512),[[u,a.value.datum]]),o(l("select",{"onUpdate:modelValue":e[5]||(e[5]=t=>a.value.typ=t)},e[18]||(e[18]=[w('<option value="" disabled selected hidden data-v-48db16b7>Typ der Veranstaltung wählen</option><option value="Konzert" data-v-48db16b7>Konzert</option><option value="Theater" data-v-48db16b7>Theater</option><option value="Familie" data-v-48db16b7>Familie</option><option value="Club" data-v-48db16b7>Club</option><option value="Fasching" data-v-48db16b7>Fasching</option><option value="Sport" data-v-48db16b7>Sport</option>',7)]),512),[[V,a.value.typ]]),o(l("input",{"onUpdate:modelValue":e[6]||(e[6]=t=>a.value.preis=t),type:"text",placeholder:"Preis"},null,512),[[u,a.value.preis]]),o(l("input",{"onUpdate:modelValue":e[7]||(e[7]=t=>a.value.bewertung=t),type:"number",min:"1",max:"5",placeholder:"Bewertung"},null,512),[[u,a.value.bewertung]]),o(l("input",{"onUpdate:modelValue":e[8]||(e[8]=t=>a.value.ort=t),type:"text",placeholder:"Ort"},null,512),[[u,a.value.ort]]),e[19]||(e[19]=l("button",{type:"submit"},"Erstellen",-1))],32)])),n.value?(p(),d("section",$,[e[23]||(e[23]=l("h2",null,"Event bearbeiten",-1)),l("form",{onSubmit:g(T,["prevent"])},[o(l("input",{"onUpdate:modelValue":e[9]||(e[9]=t=>n.value.id=t),type:"text",placeholder:"id",required:""},null,512),[[u,n.value.id]]),o(l("input",{"onUpdate:modelValue":e[10]||(e[10]=t=>n.value.name=t),type:"text",placeholder:"Name",required:""},null,512),[[u,n.value.name]]),o(l("input",{"onUpdate:modelValue":e[11]||(e[11]=t=>n.value.bild=t),type:"text",placeholder:"Bild-URL"},null,512),[[u,n.value.bild]]),o(l("input",{"onUpdate:modelValue":e[12]||(e[12]=t=>n.value.datum=t),type:"text",placeholder:"Datum"},null,512),[[u,n.value.datum]]),o(l("select",{"onUpdate:modelValue":e[13]||(e[13]=t=>n.value.typ=t)},e[21]||(e[21]=[w('<option value="" disabled selected hidden data-v-48db16b7>Typ der Veranstaltung wählen</option><option value="Konzert" data-v-48db16b7>Konzert</option><option value="Theater" data-v-48db16b7>Theater</option><option value="Familie" data-v-48db16b7>Familie</option><option value="Club" data-v-48db16b7>Club</option><option value="Fasching" data-v-48db16b7>Fasching</option><option value="Sport" data-v-48db16b7>Sport</option>',7)]),512),[[V,n.value.typ]]),o(l("input",{"onUpdate:modelValue":e[14]||(e[14]=t=>n.value.preis=t),type:"text",placeholder:"Preis"},null,512),[[u,n.value.preis]]),o(l("input",{"onUpdate:modelValue":e[15]||(e[15]=t=>n.value.bewertung=t),type:"number",min:"1",max:"5",placeholder:"Bewertung"},null,512),[[u,n.value.bewertung]]),o(l("input",{"onUpdate:modelValue":e[16]||(e[16]=t=>n.value.ort=t),type:"text",placeholder:"Ort"},null,512),[[u,n.value.ort]]),e[22]||(e[22]=l("button",{type:"submit"},"Speichern",-1)),l("button",{type:"button",onClick:e[17]||(e[17]=t=>n.value=null)},"Abbrechen")],32)])):E("",!0),l("section",null,[e[24]||(e[24]=l("h2",null,"Alle Events",-1)),l("ul",null,[(p(!0),d(k,null,B(m.value,t=>(p(),d("li",{key:t.id},[l("h3",null,i(t.name),1),l("p",null,"id: "+i(t.id),1),l("p",null,"Datum: "+i(t.datum),1),l("p",null,"Verfügbare Tickets: "+i(t.availableTickets),1),l("p",null,"Ort: "+i(t.ort),1),l("p",null,"Typ: "+i(t.typ),1),l("p",null,"Preis: "+i(t.preis)+"€",1),l("p",null,"Bewertung: "+i(t.bewertung)+" Sterne",1),l("button",{onClick:F=>x(t)},"Bearbeiten",8,q),l("button",{onClick:F=>f(t.id)},"Löschen",8,z)]))),128))])])]),y(N)],64))}},O=C(K,[["__scopeId","data-v-48db16b7"]]);export{O as default};