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
import { Ticket, CityCodes, SortType } from "./Contracts";
import { TicketsApi } from "./api/TicketsApi";

interface FilterValues {
  origin?: CityCodes;
  destination?: CityCodes;
  dateStart?: number;
  dateEnd?: number;

  countPerPage: number;
}

interface FilteredTicketsModel {
  filteredTickets: Array<Ticket>;
  count: number;
}

function App() {
  const [tickets, setTickets] = useState<Array<Ticket>>([]);
  const [filteredTicketsModel, setFilteredTicketsModel] = useState<FilteredTicketsModel>({ filteredTickets: [], count: 0 });
  const [filter, setFilter] = useState<FilterValues>({ countPerPage: 6 });
  const [sortType, setSortType] = useState<SortType>("Cheap");

  useEffect(() => {
    TicketsApi.get().then(res => {
      const sorted = res.sort(sortByType);
      setTickets(sorted);
      setFilteredTicketsModel({ filteredTickets: sorted.slice(0, filter.countPerPage), count: res.length });
    });
  }, []);

  useEffect(() => {
    if (filter.origin && filter.destination && filter.dateStart && filter.dateEnd) {
      const newTickets = ticketsFiltering(filter).sort(sortByType);
      console.log(newTickets);
      setFilteredTicketsModel({ filteredTickets: newTickets.slice(0, filter.countPerPage), count: newTickets.length });
    }
  }, [filter, tickets, sortType]);

  const additionalButtonHandler = () => {
    setFilter({ ...filter, countPerPage: filter.countPerPage + 5 });
  };

  const ticketsFiltering = (filter: FilterValues): Array<Ticket> => {
    return tickets.filter(
      item =>
        filter.origin === item.info.origin &&
        filter.destination === item.info.destination &&
        filter.dateStart &&
        filter.dateStart <= item.info.dateStart &&
        filter.dateEnd &&
        filter.dateEnd >= item.info.dateEnd
    );
  };

  const sortByType = (a: Ticket, b: Ticket) => {
    if (sortType === "Cheap") {
      return a.price - b.price;
    } else if (sortType === "Fast") {
      return a.info.duration - b.info.duration;
    } else {
      return a.info.stops.length - b.info.stops.length;
    }
  };
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Logo />

        <Wrapper>
          <FilterReis
            onChangeOrigin={v => setFilter({ ...filter, origin: v as CityCodes })}
            onChangeDestination={v => {
              setFilter({ ...filter, destination: v as CityCodes });
            }}
            onChangeDateStart={v => {
              setFilter({ ...filter, dateStart: Math.floor(new Date(v).getTime()) });
            }}
            onChangeDateEnd={v => {
              setFilter({ ...filter, dateEnd: Math.floor(new Date(v).getTime()) });
            }}
          />
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
                  <ButtonGroup sortType={sortType} onChangeType={setSortType}></ButtonGroup>
                </Col>

                {filteredTicketsModel.filteredTickets.map(ticket => (
                  <Col key={ticket.id} span={24}>
                    <ReisCard ticket={ticket}></ReisCard>
                  </Col>
                ))}
                {filteredTicketsModel.count > filter.countPerPage ? (
                  <Col span={24}>
                    <Button onClick={additionalButtonHandler} type="primary" title="Показать еще 5 билетов"></Button>
                  </Col>
                ) : (
                  ""
                )}
              </Row>
            </Col>
          </Row>
        </Wrapper>
      </Layout>
    </>
  );
}

export default App;
