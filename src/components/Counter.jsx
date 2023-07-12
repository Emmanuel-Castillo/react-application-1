import { useEffect, useState } from "react";
function Counter(props){
    const [pageNumber, setPageNumber] = useState(1)

    function incrementPage(){
        setPageNumber((prevPage) => prevPage + 1)
    }

    function decrementPage(){
        setPageNumber(prevPage => prevPage <= 1 ? 1 : prevPage - 1)
    }

    const sendDataToHome= () => {
        props.onCounterData(pageNumber)
    }

    useEffect(() => {
        sendDataToHome()
    }, [pageNumber])

    return (
        <div className="counter__container" style={{display: 'flex'}}>
            <button onClick={decrementPage}>-</button>
            <p>{pageNumber}</p>
            <button onClick={incrementPage}>+</button>
        </div>
    )
}

export default Counter