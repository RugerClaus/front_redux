window.onload = function(){
    window.scrollTo(0,0)
}

const media_url = 'media.themcoldbloodeddrifters.com'

const body = document.querySelector('body')

// specialized functionality

// carousel
const carousel_script_tag = document.createElement("script")
const about_script_tag = document.createElement("script")
const booking_form_script_tag = document.createElement("script")
carousel_script_tag.src = 'scripts/carousel.js'
about_script_tag.src = 'scripts/about.js'
booking_form_script_tag.src = 'scripts/booking.js'
body.appendChild(carousel_script_tag)
body.appendChild(about_script_tag)
body.appendChild(booking_form_script_tag)

// main site logic
const handle_scroll_buttons = () => {
    const buttons = {
        home: document.getElementById("home_button"),
        about: document.getElementById("about_button"),
        live: document.getElementById("live_button"),
        booking: document.getElementById("booking_button")
    }

    const sections = {
        home: document.querySelector(".home_wrapper"),
        about: document.querySelector(".about_wrapper"),
        live: document.querySelector(".live_wrapper"),
        booking: document.querySelector(".booking_wrapper")
    }

    let currentSection = null;

    for (let key in sections) {
        let top = sections[key].getBoundingClientRect().top;
        let bottom = sections[key].getBoundingClientRect().bottom;

        if (top <= window.innerHeight * 0.5 && bottom >= window.innerHeight * 0.5) {
            currentSection = key;
            break;
        }
    }

    for (let key in buttons) {
        if (key === currentSection) {
            buttons[key].classList.add("active_page_section_button");
            buttons[key].children.item(0).style.color = "black";
        } else {
            buttons[key].classList.remove("active_page_section_button");
            buttons[key].children.item(0).style.color = "white";
        }
    }
}



let track_number = Math.floor(Math.random() * 6) + 1

const gun = document.getElementById("gun")
const gunshot = new Audio(`https://${media_url}/assets/audio/gunshot.wav`)

const record = document.getElementById("record")
const song = new Audio(`https://${media_url}/assets/audio/music/${track_number}.mp3`)

gun.addEventListener("click", ()=>{
    gunshot.currentTime = 0
    gunshot.play()
    console.log("clicked")
})

record.addEventListener("mouseenter", () => {
    song.play()
    .then(() => {
        console.log("Audio is playing")
      })
      .catch((err) => {
        console.warn("Psst... click anywhere on the page before hovering on the record", err)
      })
    console.log("playing_song")
})

record.addEventListener("mouseleave", () => {
    song.pause()
    console.log("paused_song")
})


window.addEventListener("scroll", () => {
const navbar = document.querySelector('.navbar')
const top_nav_bar = document.querySelector('.fixed_navbar_wrapper')
let navbar_distance_from_top = navbar.getBoundingClientRect().top
if (navbar_distance_from_top <= 0)
{
    top_nav_bar.style.display = "block"
}
else {
    top_nav_bar.style.display = "none"
}

handle_scroll_buttons()
})

let socials_sidebar_state = true

const close_socials_button = document.querySelector(".close_socials_button")
const socials_wrapper = document.querySelector(".socials_sidebar_wrapper")
const socials_inner_wrapper = document.querySelector(".socials_inner_wrapper")

close_socials_button.addEventListener("click", () => {
    socials_sidebar_state = !socials_sidebar_state
    console.log(socials_sidebar_state)

    if (!socials_sidebar_state) {
        socials_wrapper.style.width = "2rem"
        socials_inner_wrapper.style.display = "none"
        close_socials_button.innerHTML = "<<"
        close_socials_button.style.height = "100%"
        close_socials_button.style.backgroundColor = "rgba(0,0,0,0)"
        socials_wrapper.style.animation = "close_socials .5s"
    } else {
        socials_wrapper.style.animation = "open_socials .5s"
        socials_wrapper.style.width = "8rem" // or whatever your default width is
        socials_inner_wrapper.style.display = "flex" // or "block" depending on your layout
        close_socials_button.innerHTML = ">>"
        close_socials_button.style.height = "2rem"
        close_socials_button.style.backgroundColor = "red"
    }

    if(socials_wrapper.style.width != "8rem")
    {
        socials_inner_wrapper.style.display = "none"
    }
    else {
        socials_inner_wrapper.style.display = "flex"
    }
})

const live_section = document.getElementById('live')
const live_tab = document.querySelector('.live_nav_button')

if(live_section.children.length > 0){
    live_section.style.display = 'flex'
    live_tab.style.display = 'flex'
}
else {
    live_section.style.display = 'none'
    live_tab.style.display = 'none'
}

const copyright = document.getElementById("copyright_year")
const date = new Date().getFullYear()
copyright.innerHTML = `Them Coldblooded Drifters &copy; ${date}`