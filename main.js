import './styles/style.scss'
import './styles/destination.scss'
import './styles/crew.scss'
import './styles/technology.scss'

const qs = (selector, parent = document) => {
  return parent.querySelector(selector)
}
const qsa = (selector, parent = document) => {
  return [...parent.querySelectorAll(selector)]
}

const planets = [{
    img: "/assets/destination/image-moon.png",
    name: "MOON",
    text: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS"
  },
  {
    img: "/assets/destination/image-mars.png",
    name: "MARS",
    text: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS"
  },
  {
    img: "/assets/destination/image-europa.png",
    name: "EUROPA",
    text: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS"
  },
  {
    img: "/assets/destination/image-titan.png",
    name: "TITAN",
    text: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS"
  }
]

const buttons = qsa(".tabMenu button")
buttons.forEach((b) => {
  b.onclick = (e) => {
    buttons.forEach((b) => b.classList.remove("active"))
    e.target.classList.add("active")
    planets.forEach((p) => {
      if (p.name === e.target.dataset.planet) {
        qs(".planet .title").textContent = p.name
        qs(".planet .text").textContent = p.text
        qs(".planet .distance .text").textContent = p.distance
        qs(".planet .travel .text").textContent = p.travel
        qs(".imgWrapper img").src = p.img
      }
    })
  }
})
const crew = [{
    id: 1,
    img: "/assets/crew/image-douglas-hurley.png",
    title: "COMMANDER",
    name: "DOUGLAS HURLEY",
    text: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: 2,
    img: "/assets/crew/image-mark-shuttleworth.png",
    title: "MİSSİON SPECİALİST",
    name: "MARK SHUTTLEWORTH ",
    text: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: 3,
    img: "/assets/crew/image-victor-glover.png",
    title: "PILOT",
    name: "VICTOR GLOVER",
    text: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
  },
  {
    id: 4,
    img: "/assets/crew/image-anousheh-ansari.png",
    title: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    text: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
  },
]
const dots = qsa(".dots .dot")
dots.forEach((d) => {
  d.onclick = (e) => {
    dots.forEach(d => d.classList.remove("active"))
    e.target.classList.add("active")
    crew.forEach((c) => {
      if (c.id == e.target.dataset.id) {
        qs(".crew .title").textContent = c.title
        qs(".crew .name").textContent = c.name
        qs(".crew .text").textContent = c.text
        qs(".crewImg img").src = c.img
      }
    })
  }
})
const technology = [{
    id: 1,
    imgMobile: "/assets/technology/image-launch-vehicle-landscape.jpg",
    img: "/assets/technology/image-launch-vehicle-portrait.jpg",
    title: "LAUNCH VEHICLE",
    text: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    id: 2,
    imgMobile: "/assets/technology/image-spaceport-landscape.jpg",
    img: "/assets/technology/image-spaceport-portrait.jpg",
    title: "SPACEPORT",
    text: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    id: 3,
    imgMobile: "/assets/technology/image-space-capsule-landscape.jpg",
    img: "/assets/technology/image-space-capsule-portrait.jpg",
    title: "SPACE CAPSULE",
    text: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
]

const circles = qs(".technology .circles")
if (circles) {
  if (window.innerWidth < 1190) {
    qs(".imgWrapper img").src = technology[0].imgMobile
  }
  circles.onclick = (e) => {
    if (e.target.className === "circle") {
      const index = e.target.textContent - 1
      qs(".title").textContent = technology[index].title
      qs(".text").textContent = technology[index].text
      if (window.innerWidth < 1190) {
        qs(".imgWrapper img").src = technology[index].imgMobile
      } else {
        qs(".imgWrapper img").src = technology[index].img
      }
      qsa(".circle").forEach(c => c.classList.remove("active"))
      e.target.classList.add("active")
    }
  }
}

qs(".menuButton").onclick = () => {
  qs(".mobilMenu").classList.toggle("active")
  qs(".menuButton").classList.toggle("active")
}