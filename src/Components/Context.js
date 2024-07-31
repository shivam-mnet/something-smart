import React, { useState } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import AddTopicButton from './AddTopicButton';
import TopicAccordion from './TopicAccordion';

function Context() {
  const [topics, setTopics] = useState([]);
  const handleAddTopic = () => {
    setTopics([...topics, { id: topics.length}]);
  };

  return (
    <Container>
      <AddTopicButton onClick={handleAddTopic} />
      <Accordion defaultActiveKey="0">
        {topics.map((topic, index) => (
          <TopicAccordion key={topic.id} eventKey={String(index)} title={`Topic ${index + 1}`} />
        ))}
      </Accordion>
    </Container>
  );
}

export default Context;