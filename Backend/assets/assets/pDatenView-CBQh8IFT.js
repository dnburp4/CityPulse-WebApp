import{_ as f,r as u,c as h,a as p,b as t,w as d,v as i,h as y,H as b,j as x,C as N,y as _}from"./index-4-hfgK7h.js";const V={class:"personal-data-view"},g={class:"personal-data-container"},I={class:"form-group"},q={class:"form-group"},w={class:"form-group"},P={__name:"pDatenView",setup(k){const a=N(),v=_(),l=u(""),o=u(""),s=u(""),r=m=>{const e=document.createElement("div");return e.textContent=m,e.innerHTML},c=()=>{if(!l.value||!o.value||!s.value){alert("Bitte füllen Sie alle Felder aus, bevor Sie fortfahren.");return}r(l.value),r(o.value),r(s.value),v.push({name:"Zahlung",query:{eventId:a.query.eventId,eventName:a.query.eventName,ticketCount:a.query.ticketCount,paymentMethod:a.query.paymentMethod,totalPrice:a.query.totalPrice,fullName:l.value,address:o.value,houseNumber:s.value}})};return(m,e)=>(y(),h("div",V,[p(b,{title:"Persönliche Daten"}),t("main",g,[e[6]||(e[6]=t("h1",null,"Persönliche Daten",-1)),t("div",I,[e[3]||(e[3]=t("label",{for:"full-name"},"Vor- und Nachname",-1)),d(t("input",{id:"full-name",type:"text","onUpdate:modelValue":e[0]||(e[0]=n=>l.value=n),placeholder:"Ihr voller Name",maxlength:"50"},null,512),[[i,l.value]])]),t("div",q,[e[4]||(e[4]=t("label",{for:"address"},"Adresse",-1)),d(t("input",{id:"address",type:"text","onUpdate:modelValue":e[1]||(e[1]=n=>o.value=n),placeholder:"Ihre Adresse",maxlength:"50"},null,512),[[i,o.value]])]),t("div",w,[e[5]||(e[5]=t("label",{for:"house-number"},"Hausnr.",-1)),d(t("input",{id:"house-number",type:"text","onUpdate:modelValue":e[2]||(e[2]=n=>s.value=n),placeholder:"Ihre Hausnummer",maxlength:"100"},null,512),[[i,s.value]])]),t("button",{class:"submit-button",onClick:c},"Pay Now")]),p(x)]))}},D=f(P,[["__scopeId","data-v-c59b094a"]]);export{D as default};