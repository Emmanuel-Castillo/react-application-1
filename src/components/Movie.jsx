import '../pages--css/Movie.css'

function Movie({info}) {
    return (
        <div className="movie">
            <div className="movie__img--wrapper">
                <img src={info.Poster} alt="" className='movie__img'/>
            </div>
            <div className="movie__description">

            <div>{info.Title}</div>
            <div>{info.Year}</div>
            </div>
        </div>
    )
}

export default Movie