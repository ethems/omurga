import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';


import App from './components/app';
import store from './stores';
import style from './styles';

injectTapEventPlugin();


ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={posts} />
          <Route path="messages" component={messages} />
          <Route path="discussions" component={discussions} />
          <Route path="statistics" component={statistics} />
        </Route>
      </Router>
</Provider>,document.getElementById('app'));



const posts=()=>  <div>posts</div>;
const messages=()=>  <div>messages</div>;
const discussions=()=>   <div>discussion</div>;
const statistics=()=> <div>statistics</div>;
