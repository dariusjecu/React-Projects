import Cover1 from "./movie-cover1.jpg"
import Poster1 from "./movie-poster1.jpg"
import Cover2 from "./movie-cover2.jpg"
import Poster2 from "./movie-poster2.jpg"
import Cover3 from "./movie-cover3.jpg"
import Poster3 from "./movie-poster3.jpg"
import Cover4 from "./movie-cover4.jpg"
import Poster4 from "./movie-poster4.jpg"
import Cover5 from "./movie-cover5.jpg"
import Poster5 from "./movie-poster5.jpg"
import Cover6 from "./movie-cover6.jpg"
import Poster6 from "./movie-poster6.jpg"
import Cover7 from "./movie-cover7.jpg"
import Poster7 from "./movie-poster7.jpg"
import Cover8 from "./movie-cover8.jpg"
import Poster8 from "./movie-poster8.jpg"
import Cover9 from "./movie-cover9.jpg"
import Poster9 from "./movie-poster9.jpg"
import Cover10 from "./movie-cover10.jpg"
import Poster10 from "./movie-poster10.jpg"

interface Movie{
    id: number,
    cover: string,
    poster: string,
    title: string,
    trailer_id: string,
    rating: number
}

const movies: Movie[] = [
    {
        id: 1,
        cover: Cover1,
        poster: Poster1,
        title: "The Last of Us",
        trailer_id: "uLtkt8BonwM",
        rating: 9.4
    },
    {
        id: 2,
        cover: Cover2,
        poster: Poster2,
        title: "Wednesday",
        trailer_id: "Di310WS8zLk",
        rating: 8.2
    },
    {
        id: 3,
        cover: Cover3,
        poster: Poster3,
        title: "Mandalorian",
        trailer_id: "cYP9Weljn7w",
        rating: 8.9
    },
    {
        id: 4,
        cover: Cover4,
        poster: Poster4,
        title: "Rick and Morty",
        trailer_id: "jerFRSQW9g8",
        rating: 9.1
    },
    {
        id: 5,
        cover: Cover5,
        poster: Poster5,
        title: "The Menu",
        trailer_id: "jerFRSQW9g8",
        rating: 7.2
    },
    {
        id: 6,
        cover: Cover6,
        poster: Poster6,
        title: "All Quiet on the Western Front",
        trailer_id: "jerFRSQW9g8",
        rating: 7.8
    },
    {
        id: 7,
        cover: Cover7,
        poster: Poster7,
        title: "Avatar: The Way of Water",
        trailer_id: "jerFRSQW9g8",
        rating: 7.8
    },
    {
        id: 8,
        cover: Cover8,
        poster: Poster8,
        title: "Glass Onion: A Knives Out Mystery",
        trailer_id: "jerFRSQW9g8",
        rating: 7.2
    },
    {
        id: 9,
        cover: Cover9,
        poster: Poster9,
        title: "Vikings",
        trailer_id: "jerFRSQW9g8",
        rating: 8.5
    },
    {
        id: 10,
        cover: Cover10,
        poster: Poster10,
        title: "Bullet Train",
        trailer_id: "jerFRSQW9g8",
        rating: 7.3
    },
]

export {movies}