import "./Dashboard.css";
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-grid-system";
import BarChart from "./BarChart";
import Donut from "./Charts/Donut";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { LoremIpsum } from "react-lorem-ipsum";
import "bootstrap/dist/css/bootstrap.css";
import Calendar from "react-calendar";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { addDays } from "date-fns";
import BarChart2 from "./Charts/BarChart2";
// import BarChart2 from "./BarChart3";
import BarChart3 from "./BarChart3";
function Dashboard() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
 // console.log(startDate.getFullYear, endDate);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    //console.log(startDate, endDate);
  };
  const [startDate1, setStartDate1] = useState(new Date());
  const [endDate1, setEndDate1] = useState(new Date());
 // console.log(startDate.getFullYear, endDate);
  const onChange1 = (dates1) => {
    const [start1, end1] = dates1;
    setStartDate1(start1);
    setEndDate1(end1);
    //console.log(startDate, endDate);
  };
  return (
    <>
      {/* <Button variant="outline-dark">Dark</Button> */}
      <div className="containerfluid">
        <Tabs
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="Machine 1" title="Machine1" style={{ margin: 0 }}>
            <Container>
              <Row debug>
                <Col sm={6}>
                  <BarChart sdate={startDate} edate={endDate} />
                </Col>
                <Col sm={3}>
                  <div className="dodiv">
                    <Donut />
                  </div>
                </Col>
                <Col sm={3} className="cal">
                  <div className="customDatePickerWidth">
                    <DatePicker
                      selected={(startDate, console.log(startDate.getUTCDate(), endDate))}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      inline
                    />
                  </div>
                </Col>
              </Row>
              {/* <br /> */}
              <hr />
              <Row debug>
                <Col sm={6}>
                  <BarChart2 />
                </Col>
                <Col sm={3}>
                  <div className="dodiv">
                    <Donut />
                  </div>
                </Col>
                <Col sm={3} className="cal">
                  <Container className="infotext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum vel, ratione iure a necessitatibus porro quidem alias
                    molestiae soluta omnis corporis, ex ea commodi cupiditate
                    sint nobis! Delectus, dignissimos aspernatur!
                  </Container>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Machine 2" title="Machine2">
          <Container>
              <Row debug>
                <Col sm={6}>
                  <BarChart3 sdate={startDate} edate={endDate} />
                </Col>
                <Col sm={3}>
                  <div className="dodiv">
                    <Donut />
                  </div>
                </Col>
                <Col sm={3} className="cal">
                  <div className="customDatePickerWidth">
                    <DatePicker
                      selected={(startDate1, console.log(startDate1.getUTCDate(), endDate1))}
                      onChange={onChange1}
                      startDate={startDate1}
                      endDate={endDate1}
                      selectsRange
                      inline
                    />
                  </div>
                </Col>
              </Row>
              {/* <br /> */}
              <hr />
              <Row debug>
                <Col sm={6}>
                  <BarChart2 />
                </Col>
                <Col sm={3}>
                  <div className="dodiv">
                    <Donut />
                  </div>
                </Col>
                <Col sm={3} className="cal">
                  <Container className="infotext">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Earum vel, ratione iure a necessitatibus porro quidem alias
                    molestiae soluta omnis corporis, ex ea commodi cupiditate
                    sint nobis! Delectus, dignissimos aspernatur!
                  </Container>
                </Col>
              </Row>
            </Container>
          </Tab>
          <Tab eventKey="Machine 3" title="Machine3" disabled>
            <LoremIpsum p={2} />
          </Tab>
        </Tabs>
      </div>
    </>
  );
}
export default Dashboard;
