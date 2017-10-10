import {combineReducers} from 'redux';
import InquiryFormReducer from './reducer-users';

const allReducers = combineReducers({
    inquiry: InquiryFormReducer
})

export default allReducers;
