class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false,
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility : !prevState.visibility
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility? 'Hide Details' : 'Show Details'}
                </button>
                {this.state.visibility && (
                    <div>
                    <p>Hey. These are some details you can now see!</p>
                    </div>
                )}
            </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle /> , document.getElementById('app'))




// let isContentVisible = true

// const toggleVisibilityBoolean = (event) => {
//     isContentVisible = !isContentVisible
//     render()
// }

// const render = () => {
//     const template =  (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggleVisibilityBoolean}>
//                 {isContentVisible ? 'Hide Details' : 'Show Details'}
//             </button>
//             {isContentVisible && (
//                 <p>Hey. These are some details you can now see!</p>
//             )}
//         </div>

//     )

//     ReactDOM.render(template, appRoot)
// }




// const appRoot = document.getElementById('app')
// render()