const e=new URLSearchParams({key:"1bfb956be4624deab8ea82acf099560b",pageSize:10});const t=new class{constructor(){this.searchQuery="",this.queryPage=1}getNews(){return fetch(`https://newsapi.org/v2/everything?${e}&`,options).then((e=>e.json())).then((e=>(this.incrementPage(),e)))}incrementPage(){this.queryPage+=1}resetPage(){this.queryPage=1}},n=document.getElementById("form"),r=document.getElementById("articlesWrapper"),s=document.getElementById("loading"),a=e=>{const{scrollTop:t,scrollHeight:n,clientHeight:r}=document.documentElement;t+r>=n-25&&(i(e),console.log("cacat"))};function i(e){return s.classList.remove("hidden"),t.getNews().then((({articles:t})=>0===t?.length?function(e){if(o(s),"submit"===e.type)throw c("<h3>Articles not found</h3>"),new Error("No data");if("scroll"===e.type)throw window.remove("scroll",a),new Error("No more articles")}(e):function(e){return e.map((e=>{const{author:t,title:n,description:r,url:s,urlToImage:a}=e;return`\n      <div class="article-card">\n        <h2 class="article-title">${n}</h2>\n        <h3 class="article-author">${t||"Anonym"}</h3>\n        <img src=${a} class="article-img">\n        <p class="article-description">${r}</p>\n        <a href=${s} class="article-link" target="_blank">Read more</a>\n      </div>\n    `})).join("")}(t))).then((e=>{c(e),o(s)})).catch((e=>alert(e)))}function c(e){r.innerHTML+=e}function o(e){e.classList.add("hidden")}n.addEventListener("submit",(e=>{e.preventDefault();const s=n.elements.news.value.trim();""!==s?(t.searchQuery=s,t.resetPage(),r.innerHTML="",window.addEventListener("scroll",a),i(e).finally((()=>n.reset()))):alert("Please, write something")}));
//# sourceMappingURL=03-example-3.4b8a248e.js.map
