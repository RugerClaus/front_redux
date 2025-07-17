const about_band_text_element = document.querySelector(".about_band_text")

fetch('api.themcoldbloodeddrifters.band/about_data')
.then(response => response.json())
.then(about_data => {
    if(!Array.isArray(about_data.images) || about_data.images.length === 0)
    {
        console.warn("No Images loaded")
    }
})