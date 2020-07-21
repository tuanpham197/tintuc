import React, { Component } from 'react';
import  styles  from './style.scss';
import { Layout,Row } from 'antd';


class PostInCategory extends Component {
    render() {
        return (
            <Layout className={styles.top}>
                <div className={styles.category}>
                    <h5>Xã hội</h5>
                </div>
                <div className={styles.list_post}>
                    <Row>
                            
                    </Row>
                </div>
            </Layout>
        );
    }
}

export default PostInCategory;