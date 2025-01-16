import{_ as h,h as d,c,b as t,t as b,r as v,o as V,a as f,k as y,w as a,v as u,l as k,F as A,f as C,g as m,H as E,i as F,j as q}from"./index-BdkSdCNj.js";const B={class:"news-card"},U=["src"],D={class:"news-card-text"},S={__name:"NewsCardAdmin",props:{newsTitle:{type:String,required:!0},newsContent:{type:String,required:!0},bild:{type:String},functionDelete:{type:Function,required:!0},functionEdit:{type:Function,required:!0}},setup(s){return(w,o)=>(d(),c("div",B,[t("img",{src:s.bild,alt:"news image"},null,8,U),t("div",D,[t("h2",null,b(s.newsTitle),1),t("p",null,b(s.newsContent),1)]),t("button",{onClick:o[0]||(o[0]=(...i)=>s.functionDelete&&s.functionDelete(...i))},"Löschen"),t("button",{onClick:o[1]||(o[1]=(...i)=>s.functionEdit&&s.functionEdit(...i))},"Bearbeiten")]))}},T=h(S,[["__scopeId","data-v-8411f883"]]),$={class:"alle-news-view"},L={key:0},I={class:"forms-container"},M={key:1},H={class:"news-container"},R={class:"news-list"},j={__name:"AdminNewsView",setup(s){const w=r=>{l.value={...r},window.scrollTo(0,0)},o=v([]),i=v({name:"",description:"",bild:""}),l=v(null),p=async()=>{try{const r=await m.get("/news");o.value=r.data}catch(r){console.error("Fehler beim Laden der Nachrichten:",r)}},g=async()=>{try{await m.post("/news",i.value),alert("Artikel erfolgreich erstellt"),p(),i.value={name:"",description:"",bild:""}}catch(r){console.error("Fehler beim Erstellen des Artikels:",r)}},x=async r=>{try{await m.delete(`/news/${r}`),alert("Artikel erfolgreich gelöscht"),p()}catch(e){console.error("Fehler beim Löschen des Artikels:",e)}},N=async()=>{if(l.value)try{await m.put(`/news/${l.value.id}`,l.value),alert("Artikel erfolgreich aktualisiert"),p(),l.value=null}catch(r){console.error("Fehler beim Aktualisieren des Artikels:",r)}};return V(p),(r,e)=>(d(),c(A,null,[f(E,{title:"Welcome Administrator!"}),t("div",$,[l.value?k("",!0):(d(),c("section",L,[t("div",I,[e[8]||(e[8]=t("h2",null,"Neuen Artikel erstellen",-1)),t("form",{onSubmit:y(g,["prevent"])},[a(t("input",{"onUpdate:modelValue":e[0]||(e[0]=n=>i.value.name=n),type:"text",placeholder:"Name",required:""},null,512),[[u,i.value.name]]),a(t("input",{"onUpdate:modelValue":e[1]||(e[1]=n=>i.value.description=n),type:"text",placeholder:"Beschreibung",required:""},null,512),[[u,i.value.description]]),a(t("input",{"onUpdate:modelValue":e[2]||(e[2]=n=>i.value.bild=n),type:"text",placeholder:"Bild URL"},null,512),[[u,i.value.bild]]),e[7]||(e[7]=t("button",{type:"submit"},"Erstellen",-1))],32)])])),l.value?(d(),c("section",M,[e[10]||(e[10]=t("h2",null,"Artikel bearbeiten",-1)),t("form",{onSubmit:y(N,["prevent"])},[a(t("input",{"onUpdate:modelValue":e[3]||(e[3]=n=>l.value.name=n),type:"text",placeholder:"Titel des Artikels",required:""},null,512),[[u,l.value.name]]),a(t("input",{"onUpdate:modelValue":e[4]||(e[4]=n=>l.value.description=n),type:"text",placeholder:"Inhalt",required:""},null,512),[[u,l.value.description]]),a(t("input",{"onUpdate:modelValue":e[5]||(e[5]=n=>l.value.bild=n),type:"text",placeholder:"Bild-URL"},null,512),[[u,l.value.bild]]),e[9]||(e[9]=t("button",{type:"submit"},"Speichern",-1)),t("button",{type:"button",onClick:e[6]||(e[6]=n=>l.value=null)},"Abbrechen")],32)])):k("",!0),t("main",H,[t("div",R,[(d(!0),c(A,null,C(o.value.slice().reverse(),n=>(d(),F(T,{key:n.id,newsTitle:n.name,newsContent:n.description,bild:n.bild,functionDelete:()=>x(n.id),functionEdit:()=>w(n)},null,8,["newsTitle","newsContent","bild","functionDelete","functionEdit"]))),128))])])]),f(q)],64))}},_=h(j,[["__scopeId","data-v-84d603a7"]]);export{_ as default};