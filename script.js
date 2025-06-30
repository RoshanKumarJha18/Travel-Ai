function loading(){
    
var tl=gsap.timeline()
tl.from(".line h1",{
    y:150,
    opacity:0,
    stagger:0.2,
    duration:0.6,
    delay:0.5
})
tl.from("#line1-part1 ",{
    opacity:0,
    onStart:function(){
        
var h5timer=document.querySelector("#line1-part1 h5")
var grow=0
setInterval(function(){
    if (grow<100) {
        grow++
        h5timer.innerHTML=grow
    }
    else{
        h5timer.innerHTML=grow
    }
},33)

    }
    
})
tl.from(".nav-bar",{
    opacity:0,
    delay:0.2
})
tl.to(".line h2",{
    animationName:"anime",
    opacity:0
})
tl.to("#loader",{
    opacity:0,
    duration:0.2,
    delay:2
})
tl.from("#page",{
    y:1200,
    opacity:0,
    delay:0.2

})
tl.from("#page .nav-bar",{
  y:-120,
  duration:0.3
})

tl.to("#loader",{
    display:"none"
})
gsap.to("#page3 img",{
    width:"100%",
    scrollTrigger:{
        trigger:"#page3",
        scroller:"body",
        // markers:true,
        start:"top 0",
        end:"top -100",
        scrub:2,
        pin:true
    }   

    
})

 

function Ai() {
  window.addEventListener('load', function () {
    const btn = document.getElementById("aibtn");
    if (btn) {
      btn.addEventListener("click", function () {
        if (window.botpress) {
          window.botpress.toggle(true); 
        } else {
          console.error("Botpress not loaded yet!");
        }
      });
    }
  });

  window.botpress.on("webchat:ready", () => {

  });
  window.botpress.init({
    "botId": "0cefe9fa-4ac2-4c4f-bbf5-fb4c1eabe1fc",
    "configuration": {
      "composerPlaceholder": "Ask anything.",
      "botName": "TravAI",
      "botAvatar": "https://files.bpcontent.cloud/2025/04/25/09/20250425094543-T1F8KAUC.png",
      "botDescription": "TravAI - your Travel Ally",
      "website": {},
      "email": {},
      "phone": {},
      "termsOfService": {},
      "privacyPolicy": {},
      "color": "#ffffff",
      "variant": "solid",
      "themeMode": "dark",
      "fontFamily": "rubik",
      "radius": 1,
      "additionalStylesheetUrl": "https://files.bpcontent.cloud/2025/04/25/10/20250425103316-6WHN0EX8.css",
      "allowFileUpload": true,
      "storageLocation": "localStorage"
    },
    "clientId": "a85b9567-bd0d-4885-aac3-45dca7e4c659",
    "selector": "#webchat"
  });
}
Ai()


 gsap.to(".ri-arrow-down-line,.scrl p", {
    y: 10,
    duration: 1,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
  });


}
loading()
function sheryjs(){
  Shery.imageEffect(".image-div", {
  style: 5,
  config: { "a": { "value": 3.89, "range": [0, 30] }, "b": { "value": 0.75, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.7272695760684946 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 2.59, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 1 }, "noise_speed": { "value": 0.69, "range": [0, 10] }, "metaball": { "value": 0.5, "range": [0, 2] }, "discard_threshold": { "value": 0.5, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.32, "range": [0, 2] }, "noise_scale": { "value": 12.98, "range": [0, 100] } },
  gooey: true,
});
}
sheryjs()


const formContainer = document.getElementById('uploadFormContainer');
    const form = document.getElementById('uploadForm');
    const imageInput = document.getElementById('imageInput');
    const captionInput = document.getElementById('captionInput');
    const galleryGrid = document.getElementById('galleryGrid');

    function openForm() {
      formContainer.style.display = 'flex';
    }

    function closeForm() {
      formContainer.style.display = 'none';
      form.reset();
    }

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const file = imageInput.files[0];
      const caption = captionInput.value;
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function (event) {
        const div = document.createElement('div');
        div.className = 'gallery-item';
        div.innerHTML = `
          <img src="${event.target.result}" alt="post" />
          <div class="caption">${caption}</div>
          <button class="like-btn">❤️</button><span class="like-count">0</span>
        `;
        galleryGrid.prepend(div);
        closeForm();
      };
      reader.readAsDataURL(file);
    });

    galleryGrid.addEventListener('click', function (e) {
      if (e.target.classList.contains('like-btn')) {
        const count = e.target.nextElementSibling;
        count.textContent = parseInt(count.textContent) + 1;
      }
    });
