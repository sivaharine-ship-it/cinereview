var popupOverlay = document.querySelector(".popup-overlay");
var popupBox = document.querySelector(".popup-box");
var addPopupButton = document.getElementById("add-popup-button");


addPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});


var cancelpopup = document.getElementById("cancel-popup");

cancelpopup.addEventListener("click", function(event) {
    event.preventDefault(); 
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});
var container = document.querySelector(".container");
var addMovieButton = document.getElementById("add-movie");

var movieTitleInput = document.getElementById("movie-title-input");
var movieDirectorInput = document.getElementById("movie-director-input");
var movieRatingInput = document.getElementById("movie-rating-input");
var movieGenreInput = document.getElementById("movie-genre-input");
var movieDescriptionInput = document.getElementById("movie-description-input");

addMovieButton.addEventListener("click", function(event) {
    event.preventDefault();

    var div = document.createElement("div");
    div.setAttribute("class", "movie-container");

    div.innerHTML = `
        <h2>${movieTitleInput.value}</h2>
        <h5>Director: ${movieDirectorInput.value}</h5>
        <p class="rating">${movieRatingInput.value}</p>
        <p class="genre">${movieGenreInput.value}</p>
        <p class="description">${movieDescriptionInput.value}</p>
        <button onclick="deleteMovie(event)">Delete</button>
    `;

    container.append(div);

    popupOverlay.style.display = "none";
    popupBox.style.display = "none";

    movieTitleInput.value = "";
    movieDirectorInput.value = "";
    movieRatingInput.value = "";
    movieGenreInput.value = "";
    movieDescriptionInput.value = "";
});

function deleteMovie(event) {
    event.target.parentElement.remove();
}