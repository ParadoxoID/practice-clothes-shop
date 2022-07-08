import { combineReducers } from 'redux';

import user from './user/userReducer';
import cart from './cart/cartReducer';

export const rootReducer = combineReducers({ user, cart });
