import React from 'react';

export default class Home extends React.Component{
    
   render() {
        return (
            <div style={{marginTop: 20}} className="r-flex align-items-center justify-content-center margin-top:5">
                <br/>
                    <form className="search-bar">
                        <input type="text" placeholder="Search..." name="search-button" />
                        <button type="submit">Submit</button>
                    </form>
                <br/>
            </div>
        );
    }
}