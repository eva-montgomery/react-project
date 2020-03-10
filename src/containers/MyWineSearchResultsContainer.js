
import {
    connect
} from 'react-redux';

import MyWineSearchResults from '../components/MyWineSearchResults';
import { actionDelWine } from '../actions';


function mapStateToProps(state) {
    return {
        myWineSearchResults: state.wineSearch.results
    }
}


function mapDispatchToProps(dispatch) {
    return {
        handleDel: (winelist, index) => {
            dispatch(actionDelWine(winelist, index))
        }
    }
}
const reduxConnector = connect(mapStateToProps, mapDispatchToProps);
export default reduxConnector(MyWineSearchResults);



