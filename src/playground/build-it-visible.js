
let isContentVisible = true

const toggleVisibilityBoolean = (event) => {
    isContentVisible = !isContentVisible
    render()
}

const render = () => {
    const template =  (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibilityBoolean}>
                {isContentVisible ? 'Hide Details' : 'Show Details'}
            </button>
            {isContentVisible && (
                <p>Hey. These are some details you can now see!</p>
            )}
        </div>

    )

    ReactDOM.render(template, appRoot)
}




const appRoot = document.getElementById('app')
render()