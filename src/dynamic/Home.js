import React from 'react';
import axios from 'axios';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount() {
        axios.get("/products").then((response) => {
            this.setState({ users: response.data });
        });
    }

    render() {
        const { users } = this.state;
        console.log(users);

        return (
        <div>
        <ul className="users">
            {users.map(user => 
            <li className="user">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>City:</strong> {user.address.city}
              </p>
            </li>
          )}
        </ul>
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