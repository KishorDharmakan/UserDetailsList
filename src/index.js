import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import Header from '../src/components/common/Header';
// import Footer from '../src/components/common/Footer';
import './index.css';
import App from './App';
import { Layout } from 'antd';
import 'antd/dist/antd.css';


import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const {
    Header, Footer, Content,
  } = Layout;
  
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>    
        <Layout>
            <Header>Header</Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
        </Layout>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
