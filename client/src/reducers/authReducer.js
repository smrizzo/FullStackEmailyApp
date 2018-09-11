import { FETCH_USER } from '../actions/types.js';

export default function(state = null, action) {
   switch(action.type) {
      case FETCH_USER: 
         //console.log("Fetch_user was called");
         return action.payload || false;
      default:
         //console.log("fetch_user was not called");
         return state;
   }
}