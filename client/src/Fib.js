import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
    state = {
        seenIndexes: [],
        values: {},
        index: ''
    }

    componentMidMount() {
        this.fetchValues();
        this.fetchIndexes();
    }

    async fetchValues() {
        const values = await axios.get('/api/values/current');
        this.setState({ values: values.data});
    }

    async fetchIndexes() {
        const seenIndexes = await axios.get('/api/values/all');
        this.setState({ seenIndexes: seenIndexes.data});
    }

    render() {
        return (
            <div>
                <form>
                    <label></label>
                    <input />
                    <button>Submit</button>
                </form>

                <h3>Indexes i've seen:</h3>

                <h3>Calculated indexes:</h3>
            </div>
        );
    }
}