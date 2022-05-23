import React, { useEffect, useState } from "react";

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
import FilterReis from "./components/FilterReis/FilterReis";
import { CompaniesApi } from "./api/CompaniesApi";
import { Ticket } from "./Contracts";
import { TicketsApi } from "./api/TicketsApi";

function App() {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);

  useEffect(() => {
    TicketsApi.get().then(res => {
      setTickets(res);
      console.log(res);
    });
  }, []);

  return (
    <>
      <GlobalStyles />
      <Layout>
        <Logo />

        <Wrapper>
          <FilterReis />
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

                {tickets.map(ticket => (
                  <Col key={ticket.id} span={24}>
                    <ReisCard ticket={ticket}></ReisCard>
                  </Col>
                ))}

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
