console.log('App.js is running!')

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
    }
}

const template = (
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
    </div>
)

const appRoot = document.getElementById('app')
ReactDOM.render(template, appRoot)