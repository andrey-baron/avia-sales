import React, { useState } from "react";
import GlobalStyles from "./styled-components/global";

import "antd/dist/antd.css";
import { Layout } from "./styled-components/MainLayout";
import { Wrapper } from "./styled-components/Wrapper";
import { Col, Row } from "antd";
import { Card } from "./styled-components/Card";
import Checkbox from "./components/Checkbox/Checkbox";
import FilterCard from "./components/FilterCard/FilterCard";

const style = { background: "#0092ff", padding: "8px 0" };
function App() {
  const [checked, setChecked] = useState(true);
  const handleCheckboxChange = (value: boolean) => {
    setChecked(value);
  };
  return (
    <>
      <GlobalStyles />
      <Layout>
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
              {/* <Card>
                <p>Количество пересадок</p>
                <Checkbox checked={checked} />
                <Checkbox checked={false} />
                <div style={style}>col-6</div>
              </Card> */}
            </Col>
            <Col span={16}>
              <div style={style}>col-6</div>
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
}

export default App;
