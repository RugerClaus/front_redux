window.onload = function(){
    window.scrollTo(0,0)
}

let track_number = Math.floor(Math.random() * 6) + 1

const gun = document.getElementById("gun")
const gunshot = new Audio("assets/audio/gunshot.wav")

const record = document.getElementById("record")
const song = new Audio(`assets/audio/music/${track_number}.mp3`)

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
        close_socials_button.innerHTML = ">>"
        close_socials_button.style.height = "100%"
        close_socials_button.style.backgroundColor = "rgba(0,0,0,0)"
        socials_wrapper.style.animation = "close_socials .5s"
    } else {
        socials_wrapper.style.animation = "open_socials .5s"
        socials_wrapper.style.width = "8rem" // or whatever your default width is
        socials_inner_wrapper.style.display = "flex" // or "block" depending on your layout
        close_socials_button.innerHTML = "<<"
        close_socials_button.style.height = "2rem"
        close_socials_button.style.backgroundColor = "red"
    }

    if(socials_wrapper.style.width != "10%")
    {
        socials_inner_wrapper.style.display = "none"
    }
    else {
        socials_inner_wrapper.style.display = "flex"
    }
})
