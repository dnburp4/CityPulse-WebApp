import{H as _}from"./Header-D_lW85TO.js";import{_ as d,h as a,c as o,b as e,t as c,r as w,o as u,g as p,a as i,F as l,f as m,i as h,j as f}from"./index-D8GEYfN1.js";const v={class:"news-card"},b=["src"],g={class:"news-card-text"},y={__name:"NewsCard",props:{newsTitle:{type:String,required:!0},newsContent:{type:String,required:!0},bild:{type:String}},setup(t){return(r,s)=>(a(),o("div",v,[e("img",{src:t.bild,alt:"news image"},null,8,b),e("div",g,[e("h2",null,c(t.newsTitle),1),e("p",null,c(t.newsContent),1)])]))}},N=d(y,[["__scopeId","data-v-38b747fe"]]),x={class:"alle-news-view"},C={class:"news-container"},k={class:"news-list"},B={__name:"NewsView",setup(t){const r=w([]);return u(async()=>{try{const s=await p.get("http://localhost:1337/news");r.value=s.data}catch(s){console.error("Fehler beim Laden der Events:",s)}}),(s,F)=>(a(),o(l,null,[i(_,{title:"Alle News"}),e("div",x,[e("main",C,[e("div",k,[(a(!0),o(l,null,m(r.value,n=>(a(),h(N,{key:n,newsTitle:n.name,newsContent:n.description,bild:n.bild},null,8,["newsTitle","newsContent","bild"]))),128))])])]),i(f)],64))}},V=d(B,[["__scopeId","data-v-43ef40db"]]);export{V as default};
