console.log('App.js is running')

const app = {
    title: 'Indecision App',
    subtitle: 'Let me help you make up your mind',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault()
    
    const option = event.target.elements.option.value

    if (option) {
        app.options.push(option)
        event.target.elements.option.value = ''
        console.log(app.options)
        render()
    }
}

const onRemoveAll = () => {
    app.options = []
    render()
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length)
    const option = app.options[randomNum]
    alert(option)
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button disabled={app.options.length === 0} onClick={onRemoveAll}>Remove All</button>
            <button onClick={onMakeDecision}>What should I do?</button>
            <ol>
                {
                    app.options.map( (option) => <li key={option}>{option}</li> )
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}


const appRoot = document.getElementById('app')
render()