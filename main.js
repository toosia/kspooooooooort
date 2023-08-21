let words=document.querySelectorAll(".word");words.forEach((e=>{let t=e.textContent.split("");e.textContent="",t.forEach((t=>{let o=document.createElement("span");o.textContent=t,o.className="letter",e.append(o)}))}));let currentWordIndex=0,maxWordIndex=words.length-1;words[currentWordIndex].computedStyleMap.opacity="1";let changeText=()=>{let e=words[currentWordIndex],t=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];Array.from(e.children).forEach(((e,t)=>{setTimeout((()=>{e.className="letter out"}),80*t)})),t.style.opacity="1",Array.from(t.children).forEach(((e,t)=>{e.className="letter behind",setTimeout((()=>{e.className="letter in"}),340+80*t)})),currentWordIndex=currentWordIndex===maxWordIndex?0:currentWordIndex+1};changeText(),setInterval(changeText,3e3);const circles=document.querySelectorAll(".circle");circles.forEach((e=>{var t=e.getAttribute("data-dots"),o=e.getAttribute("data-percent"),r=Math.floor(t*o/100),c="",l=360/t;for(let e=0;e<t;e++)c+=`<div class="points" style="--i:${e}; --rot:${l}deg"></div>`;e.innerHTML=c;const n=e.querySelectorAll(".points");for(let e=0;e<r;e++)n[e].classList.add("marked")}));let menuLi=document.querySelectorAll("header ul li a"),section=document.querySelectorAll("section");function activeMenu(){let e=section.length;for(;--e&&window.scrollY+97<section[e].offsetTop;);menuLi.forEach((e=>e.classList.remove("active")))}activeMenu(),window.addEventListener("scroll",activeMenu);const header=document.querySelector("header");window.addEventListener("scroll",(function(){header.classList.toggle("sticky",window.scrollY>50)}));let menuIcon=document.querySelector("#menu-icon"),navlist=document.querySelector(".navlist");menuIcon.onclick=()=>{menuIcon.classList.toggle("bx-x"),navlist.classList.toggle("open")},window.onscroll=()=>{menuIcon.classList.remove("bx-x"),navlist.classList.remove("open")};const observer=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?e.target.classList.add("show-items"):e.target.classList.remove("show-items")}))})),scrollScale=document.querySelectorAll(".scroll-scale");scrollScale.forEach((e=>observer.observe(e)));const scrollBottom=document.querySelectorAll(".scroll-bottom");scrollBottom.forEach((e=>observer.observe(e)));const scrollTop=document.querySelectorAll(".scroll-top");scrollTop.forEach((e=>observer.observe(e)));

document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Display a loading message or spinner if desired
    // ...
  
    // Submit the form using AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    xhr.onload = function() {
      if (xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        if (response.success) {
          document.getElementById("responseMessage").textContent = response.message;
          document.getElementById("responseMessage").style.display = "block";
          // Optionally, you can reset the form after successful submission
          // document.getElementById("myForm").reset();
        } else {
          // Handle error response if needed
        }
      }
      // Hide the loading message or spinner
      // ...
    };
    
    xhr.send(new FormData(this));
  });