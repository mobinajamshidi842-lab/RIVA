// RIVA Scientific Laboratory Association

document.addEventListener("DOMContentLoaded", () => {

    console.log("RIVA Website Loaded");

    // انیمیشن ظاهر شدن بخش‌ها
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                entry.target.classList.add("show");
            }
        });
    });

    sections.forEach(section=>{
        observer.observe(section);
    });

});

// منوی موبایل
const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

if(menu){

menu.addEventListener("click", ()=>{

nav.classList.toggle("active");

});

}
