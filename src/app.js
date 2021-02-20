console.log('App.js is running!')

var template = (
    <div>
        <h1>Indecision App</h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
)

var templateTwo = (
    <div>
        <h1>Randy Proctor</h1>
        <p>Age: 33</p>
        <p>Location: Cincinnati, OH</p>
    </div>
)


var appRoot = document.getElementById('app')

ReactDOM.render(templateTwo, appRoot);