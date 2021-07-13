import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

export default class Home extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
            <br/>
                <form class="search-bar">
                    <input type="text" placeholder="Search..." name="search-button" />
                    <button type="submit">Submit</button>
                </form>
                <img src= "../assets/images/canada-flag.png" />
            <br/>
            <Footer/>
        </div>
        );
    }
}