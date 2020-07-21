import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles  from './main.scss';
import NewPost from './NewPosts/NewPost';
import PostInCategory from './PostInCategory/PostInCategory';
import SideBar from '../SideBar/SideBar';

class Main extends Component {
    render() {
        return (
           <Layout className={styles.main}>
               <Row>
                   <Col md={6} lg={16} xl={16} >
                       <NewPost></NewPost>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
                       <PostInCategory></PostInCategory>
                   </Col>
                    <Col md={2} lg={2} xl={2}></Col>
                   <Col md={6} lg={6} xl={6}>
                       <SideBar/>
                   </Col>
               </Row>
           </Layout>
        );
    }
}

export default Main;