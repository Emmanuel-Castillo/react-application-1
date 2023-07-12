import Row from "./Row"
function Container() {
    const containerStyle = {
        padding: '24px 0',
    }

    return (
        <div style={containerStyle}>
            <Row/>
        </div>
    )
}

export default Container