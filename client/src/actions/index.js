//This is is where our actions will be at
import axios from 'axios';
import { FETCH_USER } from './types';
//const FETCH_USER = 'fetch_user';

//When action creator is called(which is just a function), it will return a function
//redux thunk will see we returned a functin and automatically call it with a disatch
//We make a request and wait till its done and only then do we dispatch our action
// export const fetchUser = () => {
//    return function(dispatch) {
//       axios
//          .get('/api/current_user')
//          .then(res => dispatch({ type: FETCH_USER, payload: res }));
//    };  
// };
//This is the new javascript sytax used with promises
export const fetchUser = () => async dispatch => {
   const res = await axios.get('/api/current_user');
   // console.log("We got inside fetchUser");
   // console.log(res.data);
   
   dispatch({ type: FETCH_USER, payload: res.data });
   
};

//created action to handleTokens be returned from stipe after payment
export const handleToken = (token) => async dispatch => {
   const res = await axios.post('/api/stripe', token);

   dispatch({ type: FETCH_USER , payload: res.data});
};