import {
    connect
} from 'react-redux';

import Nav from '../components/Nav';

function mapStateToProps(state) {
    console.log(state.user)
    return {
        loginStatus: state.user
    }
}

const reduxConnector = connect(mapStateToProps, null);
export default reduxConnector(Nav);