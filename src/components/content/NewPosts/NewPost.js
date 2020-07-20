import React, { Component } from 'react';
import { Layout, Row, Col } from 'antd';

class NewPost extends Component {
    render() {
        return (
            <Layout>
                <Row>
                    <Col md={15} lg={15} xl={15}>
                        main
                    </Col>
                    <Col md={9} lg={9} xl={9}>
                        relate
                    </Col>
                </Row>
            </Layout>
        );
    }
}

export default NewPost;