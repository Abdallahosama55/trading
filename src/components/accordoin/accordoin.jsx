import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';

const MyAccordion = () => {
  return (
    <Accordion defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Panel 1
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>This is the content of Panel 1.</Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Panel 2
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>This is the content of Panel 2.</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};

export default MyAccordion;
