let rght = document.getElementById("right")
let left = document.getElementById("left")
let img = document.querySelector("img").getAttribute("src")
rght.addEventListener('click', rclick)
let imgs = ["car2.jpg", "car3.jpg", "car1.jpg"]


function rclick() {
    for (let i = 0; i < imgs.length; i++) {
        img = document.querySelector("img").setAttribute("src",JSON.stringify(imgs[i]))
      for(let j=0;j<imgs.length;j++){
        img = document.querySelector("img").setAttribute("src",JSON.parse(imgs[j])) 
      } 
    }
  
}
  
