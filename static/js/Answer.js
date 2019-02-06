import React, { Component } from 'react';

// const BASE_URL = 'http://localhost:8000/api/answers/';
const BASE_URL = 'https://magic-gong.herokuapp.com/api/answers';

export default class Answer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            answer: "",
        };

        if(props.display)
            this.getAnswers();
    }

    getAnswers = () => {
        var that = this;
        fetch(BASE_URL)
            .then(response => {
                return response.json();
            })
            .then(data => {
                return data.answer;
            })
            .then(answer => {
                that.setState({
                    answer: answer
                })
            })
            .catch(error => {
                console.log(error);
            })
    };

    componentWillReceiveProps(nextProps) {
        if(!nextProps.display) {
            this.setState({
                answer: "",
            });
            return;
        }

        if(nextProps.input === this.props.input && this.state.answer !== "")
            return;

        if(nextProps.display) {
            this.getAnswers();
        }

    }

    render() {
        return (
            <div className="answer-base">
                <h3>{ this.state.answer }</h3>
            </div>
        );
    }
}