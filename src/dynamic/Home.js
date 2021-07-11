import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react'

export default class Home extends React.Component{
      
    render() {
        return (
        <div>
            <Header/>
            <br/>
            <Footer/>
        </div>
        );
    }
}