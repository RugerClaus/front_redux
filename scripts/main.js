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


const navbar = document.querySelector('.navbar')
const top_nav_bar = document.querySelector('.top_navbar')
let navbar_distance_from_top = navbar.getBoundingClientRect().top
if (navbar_distance_from_top <= 0)
{

}

navbar.addEventListener("")