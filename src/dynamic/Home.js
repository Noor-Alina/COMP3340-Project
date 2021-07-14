import Footer from '../components/Footer';
import Header from '../components/Header';
import React from 'react';

function Home() {
        return (
        <div>
            <Header/>
            <br/>
                <div class = "row">
                    <div class = "col-md-8">
                        <form class="search-bar">
                            <input type="text" placeholder="Search..." name="search-button" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div class = "col-md-2">
                        <div classname="flag" alt="country selector"></div>
                    </div>
                </div>
            <br/>
            <Footer/>
        </div>
        );
}

export default Home;