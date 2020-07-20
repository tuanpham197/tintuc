import React from 'react';
import 'antd/dist/antd.less';
import Header from './components/header/Header';
import { Layout } from 'antd';
import styles  from './App.css';
import Main from './components/content/Main';

function App() {
  return (
    <Layout className={styles.wrapper}>
        <Header></Header>
        <Main></Main>
    </Layout>
    
  );
}

export default App;
