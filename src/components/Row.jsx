import Home from "../pages/Home"
function Row() {
    const rowStyle = {
        width: '100%',
        maxWidth: '1200px',
    }

    return (
        <div style={rowStyle}>
            <Home/>
        </div>
    )
}

export default Row