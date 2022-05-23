import { Col, Row } from "antd";
import React, { useMemo } from "react";
import { Ticket } from "../../Contracts";
import { Card } from "../../styled-components/Card";
import { Logo, Price, Label, Value } from "./ReisCard.styled";
import { msToHoursAndMinutes } from "../../utils/dateHelper";

const priceFormatting = (price: number) => {
  return price
    .toFixed(2)
    .replace(/./g, function (c, i, a) {
      return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? " " + c : c;
    })
    .slice(0, -3);
};

interface ReisCardProps {
  ticket: Ticket;
}

const ReisCard: React.FC<ReisCardProps> = ({ ticket }) => {
  const timeDuration = useMemo(() => {
    return msToHoursAndMinutes(ticket.info.duration);
  }, []);

  const dates = useMemo(() => {
    const dateStart = new Date(ticket.info.dateStart * 1000);
    const dateEnd = new Date(ticket.info.dateEnd * 1000);
  }, []);

  return (
    <Card>
      <Row gutter={[20, 20]}>
        <Col span="12">
          <Price>{priceFormatting(ticket.price)} P</Price>
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
          <Value>{`${timeDuration.hours}ч ${timeDuration.minutes}м`}</Value>
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
