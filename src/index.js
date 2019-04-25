import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
import HeaderContent from '../src/components/common/HeaderContent';
import FooterContent from '../src/components/common/FooterContent';
import './index.css';
import App from './App';
import { Layout } from 'antd';
//import 'antd/dist/antd.css';


import * as serviceWorker from './serviceWorker';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const {
    Header, Footer, Content,
  } = Layout;
  
ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>    
        <Layout style={{ textAlign: 'center'}} className="ant-layout-custom">
            <Header> <HeaderContent /> </Header>
            <Content> <App /></Content>
            <Footer> <FooterContent /></Footer>
        </Layout>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
