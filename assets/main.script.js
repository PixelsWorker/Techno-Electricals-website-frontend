document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("darkModeToggle"),t=document.body,n=document.querySelectorAll(".service-icon"),o=document.getElementById("backToTop"),c=document.getElementById("preloader"),l=document.querySelector(".hero"),d=document.querySelectorAll(".customer-logo"),a=document.getElementById("customerCarousel"),s={"transformer_light.webp":"transformer_dark.webp","tools_light.webp":"tools_dark.webp","filter_light.webp":"filter_dark.webp"};function i(){n.forEach(e=>{const n=e.src.split("/").pop();t.classList.contains("dark-mode")?s[n]&&(e.src=`../images/icon/${s[n]}`):e.src=Object.keys(s).find(e=>s[e]===n)?`../images/icon/${Object.keys(s).find(e=>s[e]===n)}`:e.src})}function r(){t.classList.add("dark-mode"),localStorage.setItem("darkMode","enabled"),e.textContent="☀️",i()}function m(){t.classList.remove("dark-mode"),localStorage.setItem("darkMode","disabled"),e.textContent="🌙",i()}"enabled"===localStorage.getItem("darkMode")&&r(),e.addEventListener("click",()=>{t.classList.contains("dark-mode")?m():r()}),document.querySelectorAll(".nav-link").forEach(e=>{e.addEventListener("click",function(t){const n=this.getAttribute("href");if(n.startsWith("#")){t.preventDefault();const o=document.getElementById(n.substring(1));o&&window.scrollTo({top:o.offsetTop-70,behavior:"smooth"})}})}),c&&(c.style.opacity="0",setTimeout(()=>c.style.display="none",500));const u=["images/BackgroundImg/BackgroundImg_1.webp","images/BackgroundImg/BackgroundImg_2.webp","images/BackgroundImg/BackgroundImg_3.webp"];let g=0;function p(){l.style.background=`url('${u[g]}') no-repeat center center/cover`,g=(g+1)%u.length}p(),setInterval(p,5e3),window.addEventListener("scroll",()=>{o.style.display=window.scrollY>200?"flex":"none"}),o.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}),a&&new bootstrap.Carousel(a,{interval:2e3,pause:"hover",wrap:!0}),d.forEach(e=>{e.addEventListener("click",function(){const t=this.getAttribute("data-url");t&&confirm(`Do you want to visit ${this.alt}?`)&&window.open(t,"_blank")})})});
