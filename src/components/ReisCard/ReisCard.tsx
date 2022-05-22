import { Col, Row } from "antd";
import React from "react";
import { Card } from "../../styled-components/Card";
import { Logo, Price, Label, Value } from "./ReisCard.styled";
const ReisCard: React.FC = () => {
  return (
    <Card>
      <Row gutter={[20, 20]}>
        <Col span="12">
          <Price>10 000 P</Price>
        </Col>
        <Col span="12">
          <Logo src="/S7Logo.png"></Logo>
        </Col>
        <Col span="8">
          <Label>MOW – HKT</Label>
          <Value>10:45 – 08:00</Value>
        </Col>
        <Col span="8">
          <Label>В пути</Label>
          <Value>21ч 15м</Value>
        </Col>
        <Col span="8">
          <Label>2 пересадки</Label>
          <Value>HKG, JNB</Value>
        </Col>
      </Row>
      <Row justify="space-between" gutter={[0, 20]}></Row>
    </Card>
  );
};

export default ReisCard;
