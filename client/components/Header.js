import React, {Component} from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/CurrentUser';

class Header extends Component {
    renderButtons () {
        const { loading, user } = this.props.data;
        if (loading) { return <div /> }

        if (user) {
            return <div>Logout</div>
        } else {
            return (
                <div>You're not signed in</div>
            )
        }
    }

    render() {
        console.log('query---------', this.props.data);
        return (
            <nav>
                <div className="nav-wrapper">
                    {this.renderButtons()}
                </div>
            </nav>
        );
    }
}
//we run the query to see if we want to render Logout button or SignUp and Login button

export default graphql(query)(Header);