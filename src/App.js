import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import HelpMenu from './helpmenu/HelpMenu';

const options = [
    {'option': 'GUI', 'url': 'https://learn.javascript.ru/object'},
    {'option': 'Validation', 'url': 'https://learn.javascript.ru/courses'},
    {'option': 'Policy', 'url': 'https://learn.javascript.ru/quiz'},
    {'option': '', 'url': ''},
    {'option': 'About us', 'url': ''},
];

class App extends Component {
    render() {
        return (
            <div className="App">
                <HelpMenu options={options}/>
                <iframe id="iframe"></iframe>
            </div>
        );
    }
}

export default App;
