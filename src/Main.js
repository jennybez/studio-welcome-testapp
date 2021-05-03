import React, {Component} from 'react';
import {Route, NavLink, HashRouter} from 'react-router-dom'
import Part1 from './part-1';
import Part2 from './part-2';
import Part3 from './part-3';
import Part4 from './part-4';
import Part5 from './part-5';

class Main extends Component {
    render() {
        return (
            <HashRouter>
            <div>
                <h1>Знакомство</h1>
                <ul className="header">
                    <li><NavLink exact to="/part1">Блок 1</NavLink></li>
                    <li><NavLink to="/part2">Блок 2</NavLink></li>
                    <li><NavLink to="/part3">Блок 3</NavLink></li>
                    <li><NavLink to="/part4">Блок 4</NavLink></li>
                    <li><NavLink to="/part5">Блок 5</NavLink></li>
                </ul>
                <div className="content">
                    <Route path="/part1" component={Part1} />
                    <Route path="/part2" component={Part2} />
                    <Route path="/part3" component={Part3} />
                    <Route path="/part4" component={Part4} />
                    <Route path="/part5" component={Part5} />
                </div>
            </div>
        </HashRouter>
        );
        /*
        Navlink формирует навигацию по ссылке. Route связывает эти ссылки с имеющимися компонентами, раскиданными по классам.
        */
    }
}

export default Main;