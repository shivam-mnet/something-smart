import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import FaqModal from './FaqModal';

function AddFaqSection() {
  const [faqs, setFaqs] = useState([{ question: '', answer: '' }]);
  const [showModal, setShowModal] = useState(false);

  const handleAddQuestion = () => {
    setFaqs([...faqs, { question: '', answer: '' }]);
  };

  const handleInputChange = (index, field, value) => {
    const newFaqs = [...faqs];
    newFaqs[index][field] = value;
    setFaqs(newFaqs);
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  // Function to handle selected FAQs from modal
  const handleAddExtractedFaqs = (selectedFaqs) => {
    setFaqs([...faqs, ...selectedFaqs]);
  };

  return (
    <div>
      <h5>Add FAQs</h5>
      {faqs.map((faq, index) => (
        <div key={index} className="mb-3">
          <Form.Control
            type="text"
            placeholder="Enter question..."
            className="mb-2"
            value={faq.question}
            onChange={(e) => handleInputChange(index, 'question', e.target.value)}
          />
          <Form.Control
            type="text"
            placeholder="Enter answer..."
            value={faq.answer}
            onChange={(e) => handleInputChange(index, 'answer', e.target.value)}
          />
        </div>
      ))}
      <Button onClick={handleAddQuestion} className="mr-2">Add Question</Button>
      <Button onClick={handleShowModal}>Extract FAQs from chat</Button>

      <FaqModal
        show={showModal}
        handleClose={handleCloseModal}
        handleAddFaqs={handleAddExtractedFaqs}
      />
    </div>
  );
}

export default AddFaqSection;