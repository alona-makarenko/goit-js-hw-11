import{a as f,S as m,i as h}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const p="https://pixabay.com/api/",y="52372909-37b8becf80bbf29968de129f5";function g(s){const r=new URLSearchParams({key:y,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`${p}?${r}`).then(i=>i.data.hits)}const c=document.querySelector(".gallery"),a=document.querySelector(".loader"),L=new m(".gallery-item .link",{captionsData:"alt",captionDelay:250});function v(s){const r=s.map(({webformatURL:i,largeImageURL:o,tags:e,likes:t=0,views:n=0,comments:u=0,downloads:d=0})=>`
      <li class="gallery-item">
        <a class="link" href="${o}">
          <img src="${i}" alt="${e}" class="image" width="400">
        </a>
        <div class="information like">
          <h4>Likes</h4>
          <p>${t}</p>
        </div>
        <div class="information views">
          <h4>Views</h4>
          <p>${n}</p>
        </div>
        <div class="information comments">
          <h4>Comments</h4>
          <p>${u}</p>
        </div>
        <div class="information downloads">
          <h4>Downloads</h4>
          <p>${d}</p>
        </div>
      </li>
  `).join("");c.innerHTML=r,L.refresh()}function b(){c.innerHTML=""}function w(){a.classList.remove("hide")}function $(){a&&a.classList.add("hide")}const l=document.querySelector(".form");l.addEventListener("submit",P);function P(s){s.preventDefault();const{["search-text"]:r}=s.target.elements,i=r.value.trim();i.length&&(w(),g(i).then(o=>{if(!o.length)throw new Error("No images found!");v(o)}).catch(o=>{b(),h.error({message:o.message,position:"topRight"})}).finally(()=>{$()}),l.reset())}
//# sourceMappingURL=index.js.map
