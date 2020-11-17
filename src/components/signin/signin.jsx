import React from "react";
import { Row, Col, Button, Input, Layout, Typography, Image } from "antd";

import "antd/dist/antd.css";
import SigninStyles from "./signin.less";

function Signin() {
  return (
    <div id="signin">
      <Row>
        <Col xs={0} sm={4} md={6} lg={8} xl={8} xxl={9} />
        <Col xs={24} sm={16} md={12} lg={8} xl={8} xxl={6}>
          <Layout className={SigninStyles["layout"]}>
            <Layout.Content>
              <Row className={SigninStyles["row"]}>
                <Image
                  className={SigninStyles["logo"]}
                  width={100}
                  src="./../../../public/images/kidsloop_min_logo.svg"
                />
              </Row>
              <Row className={SigninStyles["row"]}>
                <Typography.Title level={3}>Sign In</Typography.Title>
              </Row>
              <Row className={SigninStyles["row"]}>
                <Input
                  className={SigninStyles["input"]}
                  name="username"
                  type="text"
                  placeholder="Email or Phone *"
                />
              </Row>
              <Row className={SigninStyles["row"]}>
                <Input.Password
                  className={SigninStyles["input"]}
                  name="password"
                  type="password"
                  placeholder="Password *"
                />
              </Row>
              <Row className={SigninStyles["row"]}>
                <Col span={12}>
                  <Typography.Link level={3}>Forgot Password?</Typography.Link>
                </Col>
                <Col span={12}>
                  <Button
                    type="primary"
                    className={SigninStyles["signin-button"]}
                  >
                    Sign In
                  </Button>
                </Col>
              </Row>
              <Row className={SigninStyles["row"]}>
                <Typography.Link
                  level={3}
                  className={SigninStyles["create-account"]}
                >
                  Create an Account
                </Typography.Link>
              </Row>
            </Layout.Content>
          </Layout>
        </Col>
        <Col xs={0} sm={4} md={6} lg={8} xl={8} xxl={9} />
      </Row>
    </div>
  );
}

export default Signin;
