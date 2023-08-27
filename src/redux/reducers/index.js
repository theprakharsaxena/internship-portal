import { combineReducers } from 'redux';
import userReducer from '../slice/userSlice';
import counterReducer from '../slice/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  user: userReducer,
});

export default rootReducer;
