import React from 'react';

class Home extends React.Component {
    render() {
        return (
        <div>
            <br/>
                <div className = "row">
                    <div className = "col-md-8">
                        <form className="search-bar">
                            <input type="text" placeholder="Search..." name="search-button" />
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                </div>
        </div>
        );
    }
}

export default Home;