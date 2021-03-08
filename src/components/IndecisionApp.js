import React from 'react'

import AddOption from './AddOption'
import Action from './Action'
import Header from './Header'
import Options from './Options'


class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('stateInLocalMemory')
            const retrievedStateAsObject = JSON.parse(json)

            if (retrievedStateAsObject) {
                this.setState(() => ({options: retrievedStateAsObject}))
            }
        } catch (error) {
            //Do nothing, just don't crash!
        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options)
            localStorage.setItem('stateInLocalMemory',json)
            console.log('saving data')
        }
    }
    componentWillUnmount() {
        console.log('Component did unmount!')
    }
    handleDeleteOptions() {
        this.setState(() => ({options: []}))
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((optionOfFilterFocus) => optionOfFilterFocus !== optionToRemove)
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length)
        const option = this.state.options[randomNum]
        alert(option)
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item'
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) })
        )}
    render() {
        const subtitle = 'Let me help you decide...'

        return (
            <div>
                <Header  subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

export default IndecisionApp