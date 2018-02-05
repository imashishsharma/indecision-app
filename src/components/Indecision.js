import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAppOption = this.handleAppOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        };
    }
    componentDidMount() {
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            if(options){
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('WillUnmount')
    }
    handleDeleteOptions() {
        this.setState (() => ({ options: []}));
    }
    handleDeleteOption(optionToRemove) {
        this.setState ((prevState) => ({
            options: prevState.options.filter((option) => option !== optionToRemove)
        }));
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAppOption(option) {
        if(!option){
            return 'Enter a valid value to add'
        } else if(this.state.options.indexOf(option) > -1){
            return 'This option already exists'
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render () {
        const title = 'Indecision';
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header subtitle = {subtitle}/>
                <Action 
                    hasOptions = {this.state.options.length >0}
                    handlePick = {this.handlePick}
                />
                <Options 
                    options = {this.state.options}
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}
                />
                <AddOption handleAddOption = {this.handleAppOption}/>
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options : []
}