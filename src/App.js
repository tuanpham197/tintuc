import React from 'react';
import 'antd/dist/antd.less';
import Header from './components/header/Header';
import { Layout, Row } from 'antd';
import styles  from './App.css';
import Main from './components/content/Main';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Layout >
      <Row className={styles.wrapper}>
        <Header></Header>
        <Main></Main>
      </Row>
      <Footer />
    </Layout>
    
  );
}

export default App;
