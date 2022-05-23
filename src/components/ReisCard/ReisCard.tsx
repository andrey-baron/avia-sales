import { Col, Row } from "antd";
import React, { useMemo } from "react";
import { Ticket } from "../../Contracts";
import { Card } from "../../styled-components/Card";
import { Logo, Price, Label, Value } from "./ReisCard.styled";
import { msToHoursAndMinutes, dateFormatting } from "../../utils/dateHelper";

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
          <Label>
            {ticket.info.origin} – {ticket.info.destination}
          </Label>
          <Value>
            {dateFormatting(ticket.info.dateStart)} – {dateFormatting(ticket.info.dateEnd)}
          </Value>
        </Col>
        <Col span="8">
          <Label>В пути</Label>
          <Value>{`${timeDuration.hours}ч ${timeDuration.minutes}м`}</Value>
        </Col>
        <Col span="8" flex="">
          <Row align="middle" style={{ height: "100%" }}>
            {ticket.info.stops.length > 0 ? (
              <Col>
                <Label>{ticket.info.stops.length} пересадки</Label>
                <Value>{ticket.info.stops.join(", ").substring(-2)}</Value>
              </Col>
            ) : (
              <Col>
                <Label>Без пересадок</Label>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Card>
  );
};

export default ReisCard;
