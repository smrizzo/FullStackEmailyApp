import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
//connect function from react-redux library allows certain components to call
//action creators
import { connect } from 'react-redux';
import * as actions from '../actions';


//starting off with dummy components
// const Header = () => <h2>Header</h2>
import Header from './Header';
import Landing from './Landing';
const Dashboard = () => <h2>DashBoard</h2>
const SurveyNew = () => <h2>Survey New</h2>


//was const App = () => {} function component but we made it a class component
class App extends Component {
   componentDidMount() {
      this.props.fetchUser();
   }
   
   render() {
      return (
         <div className="container">
            <BrowserRouter>
               <div>
                  <Header /> 
                  <Route path="/surveys/new" component={SurveyNew} />
                  <Route exact path="/surveys" component={Dashboard} />
                  <Route exact path="/" component={Landing} />
               </div>
            </BrowserRouter>
         </div>
      );
   }
};

export default connect(null, actions)(App);