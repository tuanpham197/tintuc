import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';
import styles  from './NewPost.scss'
const style = { padding: '0 15px 0 0' };

class NewPost extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col md={15} lg={15} xl={15}>
                        <div className={styles.new_post} style={style}>
                            <a href="#">
                                <div>
                                    <img src="src/assets/image/newpost.png" />
                                </div>
                                <h3>Công trình xanh cho nhà ở đô thị: Phải hướng đến phát triển bền vững</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </a>
                        </div>
                    </Col>
                    <Col md={9} lg={9} xl={9}>
                        <div className={styles.relate_post}>
                            <a href="#" >
                                <div className={styles.relate_post__content}>
                                    <img src="src/assets/image/image-relate-post.png"/>
                                    <h4>Tranh cãi gay gắt về chiến lược bỏ C02 của Đức</h4>
                                </div>
                            </a>
                        </div>
                        <div className={styles.relate_post}>
                            <a href="#" >
                                <div className={styles.relate_post__content}>
                                    <img src="src/assets/image/image-relate-post.png"/>
                                    <h4>Tranh cãi gay gắt về chiến lược bỏ C02 của Đức</h4>
                                </div>
                            </a>
                        </div>
                        <div className={styles.relate_post}>
                            <a href="#" >
                                <div className={styles.relate_post__content}>
                                    <img src="src/assets/image/image-relate-post.png"/>
                                    <h4>Tranh cãi gay gắt về chiến lược bỏ C02 của Đức</h4>
                                </div>
                            </a>
                        </div>
                        <div className={styles.relate_post}>
                            <a href="#" >
                                <div className={styles.relate_post__content}>
                                    <img src="src/assets/image/image-relate-post.png"/>
                                    <h4>Tranh cãi gay gắt về chiến lược bỏ C02 của Đức</h4>
                                </div>
                            </a>
                        </div>
                        <div>
                            <a href="#" >
                                <div className={styles.relate_post__content}>
                                    <img src="src/assets/image/image-relate-post.png"/>
                                    <h4>Tranh cãi gay gắt về chiến lược bỏ C02 của Đức</h4>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default NewPost;