class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Let me help you decide...'
        const options = ['Thing one', 'Thing two', 'Thing four']

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }
    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component {
    constructor(props) {
        super(props)
        this.handleRemoveAll = this.handleRemoveAll.bind(this)
    }
    handleRemoveAll() {
        console.log(this.props.options)
        //alert('removeAll')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>
                {
                    this.props.options.map( option => <Option key={option} optionText={option} />)
                }
            </div>
        )
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component {
    handleAddOption(event) {
        event.preventDefault()
        const value = event.target.elements.option.value.trim()
        if (value) {
            alert(value)
            event.target.elements.option.value = ''
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="New Option"/>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.getElementById('app'))