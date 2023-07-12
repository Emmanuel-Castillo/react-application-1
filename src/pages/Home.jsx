import axios  from "axios"
import { useState, useEffect } from "react"
import Movie from "../components/Movie"
import Counter from "../components/Counter"

function Home() {
    const [movies, setMovieSearch] = useState([])
    const [page, setPage] = useState(1)

    const handleCounterData = (counterData) => {
        setPage(counterData)
    }

    async function getMovies() {
        const { data } = await axios(`https://www.omdbapi.com/?apikey=49913df9&s=fast&page=${page}`)
        setMovieSearch(data.Search)
    }

    useEffect(() => {
        getMovies()
      }, [page]);

    const styles = {
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        padding: '4px 8px',
        justifyContent: 'center'
    }

    function renderMovies(){
        return <div style={styles}>
            {movies.map((movie) => (
                <Movie key={movie.imdbID} info={movie}></Movie>
            ))}
        </div>
    }

    return <div>
        <Counter onCounterData={handleCounterData}/>
        {movies.length ? renderMovies() : <h1>Loading...</h1>}
        </div>
}

export default Home