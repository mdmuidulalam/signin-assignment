import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Button,
  Input,
  Layout,
  Typography,
  Image,
  Dropdown,
  Menu,
} from "antd";
import { DownOutlined, SettingOutlined } from "@ant-design/icons";
import ClipLoader from "react-spinners/ClipLoader";

import "antd/dist/antd.css";
import SigninStyles from "./signin.less";

function Signin() {
  const [loading, setLoading] = useState(false);
  const [marginTopHeight, setMarginTopHeight] = useState(20);

  useEffect(() => {
    const { innerHeight: height } = window;
    setMarginTopHeight((height-470)/2);
  });

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          English
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          한국어
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer">
          Deutsche
        </a>
      </Menu.Item>
    </Menu>
  );

  const signinClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  }

  return (
    <div id="signin" className={SigninStyles["signin"]}>
      <Row className={SigninStyles["main-row"]}>
        <Col xs={0} sm={4} md={6} lg={8} xl={9} xxl={9} />
        <Col xs={24} sm={16} md={12} lg={8} xl={6} xxl={6} style={{marginTop: marginTopHeight}}>
          <Layout className={SigninStyles["layout"]}>
            <Layout.Content>
              <Row>
                <Image
                  className={SigninStyles["logo"]}
                  width={100}
                  src="./../../../public/images/kidsloop_min_logo.svg"
                />
              </Row>
              <Row className={SigninStyles["row"]}>
                <Typography.Title className={SigninStyles["signin-header"]}>
                  Sign In
                </Typography.Title>
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
                  <Typography.Link className={SigninStyles["forget-password"]}>
                    Forgot Password?
                  </Typography.Link>
                </Col>
                <Col span={12}>
                  <Button
                    type="primary"
                    className={SigninStyles["signin-button"]}
                    onClick={signinClick}
                  >
                    <ClipLoader
                      className={SigninStyles["loading"]}
                      size={15}
                      color={"white"}
                      loading={loading}
                    />
                    {}
                    {!loading && <span>Sign In</span>}
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
          <Row className={SigninStyles["row"]}>
            <Col span={11}>
              <SettingOutlined className={SigninStyles["settings-icon"]} />
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                  className={SigninStyles["language-dropdown"]}
                >
                  Select Language <DownOutlined />
                </a>
              </Dropdown>
            </Col>
            <Col span={13}>
              <Typography.Link className={SigninStyles["footer-link"]}>
                Terms
              </Typography.Link>
              <Typography.Link className={SigninStyles["footer-link"]}>
                Privacy
              </Typography.Link>
              <Typography.Link className={SigninStyles["footer-link"]}>
                Help
              </Typography.Link>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={4} md={6} lg={8} xl={9} xxl={9} />
      </Row>
    </div>
  );
}

export default Signin;
