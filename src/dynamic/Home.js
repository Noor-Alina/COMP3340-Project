import React from 'react';

class Home extends React.Component{
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
                    <div className = "col-md-2">
                        <img src={Canada} />
                        <div classname="flag" alt="country selector"></div>
                    </div>
                </div>
        <h1>React Modal</h1>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
        </Modal>
        <button type="button" onClick={this.showModal}>
          Open
        </button>
            <br/>
        </div>
        );
    }
}

export default Home;