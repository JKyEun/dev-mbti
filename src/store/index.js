import { combineReducers } from 'redux';
import mbti from './modules/mbti';
import user from './modules/user';

export default combineReducers({
  mbti,
  user,
});
