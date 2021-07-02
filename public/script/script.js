const earth = document.getElementById('earth');
const ground = document.getElementById('ground');
const background = document.getElementById('background');
const ground2 = document.getElementById('ground2');
const rock = document.getElementById('rock');
const rock2 = document.getElementById('rock2');
const rock3 = document.getElementById('rock3');
const rock4 = document.getElementById('rock4');
const mars = document.getElementById('mars');
const uranus = document.getElementById('uranus');
const saturn = document.getElementById('saturn');
const neptune = document.getElementById('neptune');
const mercury = document.getElementById('mercury');
const jupiter = document.getElementById('jupiter');
const earth1 = document.getElementById('earth1');
const info = document.getElementById('info');
const planet = document.getElementById('planet');


const showPlanet = (name) => {
   let img;
   switch (name) {
      case 'saturn':
         earth.style.filter = 'brightness(0.7)'
         info.innerText='No one knows how old Saturn’s rings are'
         img = "url('./asserts/saturn.png')";
         break;
      case 'neptune':
         info.innerText='Neptune has supersonic winds.'
         img = "url('./asserts/neptune.png')";
         break;
      case 'mars':
         info.innerText='Mars had a thicker atmosphere in the past.'
         img = "url('./asserts/mars.png')";
         break;
      case 'uranus':
         info.innerText=' Uranus is more stormy than we thought'
         img = "url('./asserts/uranus.png')";
         break;
      case 'mercury':
         info.innerText='Mercury is hot, but not too hot for ice'
         img = "url('./asserts/mercury.png')";
         break;
      case 'jupiter':
         info.innerText='Jupiter is a great comet catcher.'
         img = "url('./asserts/jupiter.png')";
         break;
      default:
        info.innerText=' You can see Earth’s magnetic field at work during light shows.';
         img = "url('./asserts/earth.png')";

   }
   earth.style.backgroundImage = img;
   planet.style.top='25vh';
   earth.style.width='250px';
   earth.style.height='250px';
}

mars.addEventListener("click", showPlanet.bind(null, 'mars'));
neptune.addEventListener("click", showPlanet.bind(null, 'neptune'));
saturn.addEventListener("click", showPlanet.bind(null, 'saturn'));
mercury.addEventListener("click", showPlanet.bind(null, 'mercury'));
uranus.addEventListener("click", showPlanet.bind(null, 'uranus'));
earth1.addEventListener("click", showPlanet.bind(null, ' '));
jupiter.addEventListener("click", showPlanet.bind(null, 'jupiter'));



window.addEventListener("mousemove", (e) => {
   let x = window.innerWidth - e.pageX;
   let y = window.innerHeight - e.pageY;
   rock.style.transform = `translateX(${x / 300}px) translateY(${y / 100}px)`;
   rock2.style.transform = `translateX(${x / 300}px) translateY(${y / 100}px)`;
   rock4.style.transform = `translateX(${x / 300}px) translateY(${y / 100}px)`;
   rock3.style.transform = `translateX(${x / 300}px) translateY(${y / 100}px)`;
   ground.style.transform = `translateX(${x / 150}px) translateY(${y / 100}px)`;
   earth.style.transform = `translateX(${x/2}px) translateY(${y / 15}px)`;
   ground2.style.transform = `translateX(-${x / 100}px) translateY(${y / 100}px)`;
})

