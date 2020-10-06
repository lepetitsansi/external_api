import React, { Component } from 'react';

import './index.css'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            character: {}
        }
    }

    componentDidMount() {
        this.setState({ isLoading: true })
        fetch("https://swapi.dev/api/people/5/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    isLoading: false,
                    character: data
                })
            })
    }

    render() {
        const name = this.state.isLoading ? <p>loading...</p> : this.state.character.name
        const height = this.state.isLoading ? <p>loading...</p> : this.state.character.height
        const mass = this.state.isLoading ? <p>loading...</p> : this.state.character.mass
        const gender = this.state.isLoading ? <p>loading...</p> : this.state.character.gender
        const birth_year = this.state.isLoading ? <p>loading...</p> : this.state.character.birth_year
        return (
            <div className="displayBox">
                <h2>Star Wars character</h2>
                <p>Name: {name}</p>
                <p>Height: {height}cm</p>
                <p>Mass: {mass}kg</p>
                <p>Gender: {gender}</p>
                <p>Birth year: {birth_year}</p>
            </div>
    )
    }
}

export default App