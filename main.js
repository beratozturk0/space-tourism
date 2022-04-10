import './styles/style.scss'
import './styles/destination.scss'
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
console.log(buttons)
buttons.forEach((b) => {
  b.onclick = (e) => {
    console.log(e.target.dataset.planet)
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