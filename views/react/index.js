/**
 * Created by zjy on 16-2-19.
 */
import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
//import { syncHistory, routeReducer } from 'react-router-redux'
import createStore from './store'

import routes from './routes'


//import * as reducers from './reducers'
import reducers from './reducers'

const store = createStore(reducers, __INITIAL_STATE__);

//middleware.listenForReplays(store)


const rootElement = document.getElementById('root');

render(
    <Provider store={store}>
            <Router history={browserHistory}>
                {routes(store.getState())}
            </Router>
    </Provider>,
    rootElement
);
