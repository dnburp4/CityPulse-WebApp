import{_ as g,r as i,D as E,o as V,c as u,a as m,b as t,w as r,d as v,F as k,f,e as _,g as w,h as d,H as S,t as y,j as x,y as T}from"./index-4-hfgK7h.js";const P={class:"ticket-kauf-view"},A={class:"ticket-container"},B={class:"form-group"},N=["value"],D={class:"form-group"},F=["value"],I={class:"form-group"},M={class:"form-group"},C=["value"],U={__name:"TicketkaufView",setup(W){const h=T(),p=i([]),o=i(null),n=i(1),l=i(""),c=E(()=>o.value?o.value.preis*n.value:0);V(async()=>{try{const s=await w.get("/event");p.value=s.data}catch(s){console.error("Fehler beim Laden der Events:",s)}});const b=()=>{o.value&&l.value?h.push({name:"pDaten",query:{eventId:o.value.id,eventName:o.value.name,ticketCount:n.value,paymentMethod:l.value,totalPrice:c.value}}):alert("Bitte wählen Sie ein Event und eine Zahlungsmethode aus.")};return(s,e)=>(d(),u("div",P,[m(S,{title:"Ticketkauf"}),t("main",A,[e[9]||(e[9]=t("h1",null,"Tickets kaufen",-1)),e[10]||(e[10]=t("p",null,"Wählen Sie Bitte Ihr Event und die Anzahl der Tickets aus.",-1)),t("div",B,[e[4]||(e[4]=t("label",{for:"event"},"Event",-1)),r(t("select",{id:"event","onUpdate:modelValue":e[0]||(e[0]=a=>o.value=a),value:null},[e[3]||(e[3]=t("option",{value:"",disabled:"",selected:""},"Wählen Sie ein Event",-1)),(d(!0),u(k,null,f(p.value,a=>(d(),u("option",{key:a.id,value:a},y(a.name),9,N))),128))],512),[[v,o.value]])]),t("div",D,[e[5]||(e[5]=t("label",{for:"ticket-count"},"Anzahl Tickets",-1)),r(t("select",{id:"ticket-count","onUpdate:modelValue":e[1]||(e[1]=a=>n.value=a)},[(d(),u(k,null,f(10,a=>t("option",{key:a,value:a},y(a),9,F)),64))],512),[[v,n.value]])]),t("div",I,[e[7]||(e[7]=t("label",{for:"payment-method"},"Zahlungsmethode",-1)),r(t("select",{id:"payment-method","onUpdate:modelValue":e[2]||(e[2]=a=>l.value=a)},e[6]||(e[6]=[_('<option value="" disabled selected data-v-66613ac4>Zahlungsmethode wählen</option><option value="paypal" data-v-66613ac4>PayPal</option><option value="bank" data-v-66613ac4>Apple Pay</option><option value="handy" data-v-66613ac4>Giropay</option><option value="handy" data-v-66613ac4>SEPA</option><option value="handy" data-v-66613ac4>VISA</option>',6)]),512),[[v,l.value]])]),t("div",M,[e[8]||(e[8]=t("label",{for:"price"},"Preis in €",-1)),t("input",{id:"price",type:"text",value:c.value,readonly:""},null,8,C)]),t("button",{class:"next-button",onClick:b},"Weiter")]),m(x)]))}},H=g(U,[["__scopeId","data-v-66613ac4"]]);export{H as default};
