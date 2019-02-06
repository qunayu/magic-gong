import React, { Component } from 'react';
import AnswerComponent from './Answer';

const TOTAL_WALLPAPERS = 9;
export default class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            wallpaper: 'url(../static/img/' +
                 (Math.floor(Math.random() * TOTAL_WALLPAPERS)) + '.jpeg)',
            display: false,
            submitted: false,
            input: "",
        }
    }

    componentDidMount() {
        this.refs.input.size = 1;
    }

    increaseInputWidth = (e) => {
        let input = e.target;
        let length = input.value.length;
        input.size = length === 0 ? 1 : length;

        this.setState({
            input: input.value,
            submitted: false,
            display: false,
        })
    };

    keyDown = (e) => {
        if(e.key === 'Enter' && this.state.input.length > 0){
           this.submit();
        }
    };

    submit = () => {
        this.setState({
            submitted: true,
            display: true,
        })
    };

    render() {
        return (
            <div className="home-base"
                 style={{ backgroundImage: this.state.wallpaper }}>

                <h3>Should I
                    <input ref="input"
                           onChange={ this.increaseInputWidth }
                           onKeyPress={ this.keyDown }
                           value={ this.state.input }
                    />
                    ?
                </h3>


                <AnswerComponent display={ this.state.display }
                                 input={ this.state.input }
                />
            </div>
        );
    }
}