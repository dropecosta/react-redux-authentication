import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  registration,
  alert
});

// const rootReducer = (state, action) => {
//     if (action.type === 'LOGOUT') {
//     state = undefined
//   }
//   return appReducer(state, action)
// }

export default rootReducer;
