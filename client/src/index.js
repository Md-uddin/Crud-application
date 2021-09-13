import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom'
// import { Provider } from ' react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducers/index';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import App from './App'
import PostDetails from './components/Posts/Post/PostDetail/postDetails';


const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/" exact ><App/></Route>
           <Route path="/post/:id" exact component={PostDetails}/>
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));


