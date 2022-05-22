import React, { useState } from "react";

import { Layout } from "./styled-components/MainLayout";
import { Wrapper } from "./styled-components/Wrapper";
import { Col, Row } from "antd";
import FilterCard from "./components/FilterCard/FilterCard";
import ReisCard from "./components/ReisCard/ReisCard";

import GlobalStyles from "./styled-components/global";
import "antd/dist/antd.css";
import "./index.css";

import Logo from "./components/Logo";
import Button from "./components/Button/Button";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";

function App() {
  const [checked, setChecked] = useState(true);
  const handleCheckboxChange = (value: boolean) => {
    setChecked(value);
  };
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Logo />
        <Wrapper>
          <Row gutter={20}>
            <Col span={8}>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <FilterCard controlType="checkbox"></FilterCard>
                </Col>
                <Col span={24}>
                  <FilterCard controlType="radio"></FilterCard>
                </Col>
              </Row>
            </Col>
            <Col span={16}>
              <Row gutter={[0, 20]}>
                <Col span={24}>
                  <ButtonGroup></ButtonGroup>
                </Col>

                <Col span={24}>
                  <ReisCard></ReisCard>
                </Col>

                <Col span={24}>
                  <ReisCard></ReisCard>
                </Col>
                <Col span={24}>
                  <Button type="primary" title="Показать еще 5 билетов"></Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
}

export default App;
