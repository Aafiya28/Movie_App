
const parentsEle = document.querySelector('.main');

console.log("Welcome");

const URL = './movies.json';
const getMovies = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching movies:', error);
    }
}


let movies = await getMovies(URL);
console.log({movies});

const createElement = (element) => document.createElement(element);

// function to create movie cards

const createMovieCard = (movies) => {
    for (let movie of movies) {
        // creating parent container
        const cardContainer = document.createElement("div");
        cardContainer.classList.add("card", "shadow");

        // creating image container
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("card-image-container");

        // creating card image
        const imageEle = document.createElement("img");
        imageEle.classList.add("card-image");
        imageEle.setAttribute("src", movie.img_link);
        imageEle.setAttribute("alt", movie.title);
        imageContainer.appendChild(imageEle);

        cardContainer.appendChild(imageContainer);

        // creating card details container

        const cardDetails = document.createElement("div");
        cardDetails.classList.add("movie-details");

        // card title

        const titleEle = document.createElement("p");
        titleEle.classList.add("title");
        titleEle.innerText = movie.title;
        cardDetails.appendChild(titleEle);

        // card genre

        const genreEle = document.createElement("p");
        genreEle.classList.add("genre");
        genreEle.innerText = `${movie.genre}`;
        cardDetails.appendChild(genreEle);

        // ratings and length container
        const movieRating = document.createElement("div");
        movieRating.classList.add("ratings");

        // star/rating component

        const ratings = document.createElement("div");
        ratings.classList.add("star-rating");

        // star icon
        const starIcon = document.createElement("span");
        starIcon.classList.add("material-icons-outlined");
        starIcon.innerText = "star";
        ratings.appendChild(starIcon);

        // ratings
        const ratingValue = document.createElement("span");
        ratingValue.innerText = movie.rating;
        ratings.appendChild(ratingValue);

        movieRating.appendChild(ratings);

        // length
        const length = document.createElement("p");
        length.innerText = `${movie.duration} mins`;

        movieRating.appendChild(length);
        cardDetails.appendChild(movieRating);
        cardContainer.appendChild(cardDetails);

        parentsEle.appendChild(cardContainer);
    }
};

createMovieCard(movies);