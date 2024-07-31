import React, { useState } from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
import AddResourceSection from './AddResourceSection';
import AddFaqSection from './AddFaqSection';

function TopicAccordion({ eventKey, title }) {
  return (
      <Accordion.Item eventKey={eventKey}>
        <Accordion.Header>{title}</Accordion.Header>
        <Accordion.Body>
            <AddResourceSection />
            <AddFaqSection />
        </Accordion.Body>
      </Accordion.Item>
  );
}

export default TopicAccordion;