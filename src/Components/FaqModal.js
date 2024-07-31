import React, { useState, useEffect } from 'react';
import { Modal, Button, Form, ListGroup, Alert } from 'react-bootstrap';

function FaqModal({ show, handleClose, handleAddFaqs }) {
  const [contacts, setContacts] = useState([{id: 1, name: "shivam"}, {id: 2, name: "lovejeet"}, {id: 2, name: "lovejeet"}, {id: 2, name: "lovejeet"}, {id: 2, name: "lovejeet"}, {id: 2, name: "lovejeet"}, {id: 2, name: "lovejeet"}]);
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [maxFAQs, setMaxFAQs] = useState(5);
  const [fetchedFaqs, setFetchedFaqs] = useState([]);
  const [selectedFaqs, setSelectedFaqs] = useState([]);

  useEffect(() => {
    // Fetch contacts from an API or a static list
    // fetch('/api/contacts')
    //   .then(response => response.json())
    //   .then(data => setContacts(data))
    //   .catch(error => console.error('Error fetching contacts:', error));
  }, []);

  const handleContactChange = (contactId) => {
    setSelectedContacts(prevSelected =>
      prevSelected.includes(contactId)
        ? prevSelected.filter(id => id !== contactId)
        : [...prevSelected, contactId]
    );
  };

  const handleSelectAllChange = () => {
    if (selectedContacts.length === contacts.length) {
      setSelectedContacts([]);
    } else {
      setSelectedContacts(contacts.map(contact => contact.id));
    }
  };

  const handleMaxFaqsChange = (e) => {
    setMaxFAQs(e.target.value);
  };

//   const handleFetchFaqs = () => {
//     fetch('/api/extract-faqs', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ contacts: selectedContacts, maxFAQs })
//     })
//       .then(response => response.json())
//       .then(data => setFetchedFaqs(data))
//       .catch(error => console.error('Error fetching FAQs:', error));
//   };

  const handleSelectFaqChange = (faq) => {
    setSelectedFaqs(prevSelected =>
      prevSelected.includes(faq)
        ? prevSelected.filter(item => item !== faq)
        : [...prevSelected, faq]
    );
  };

  const handleAddSelectedFaqs = () => {
    handleAddFaqs(selectedFaqs);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Extract FAQs from chat</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h6>Select Contacts</h6>
        <Form.Check
          type="checkbox"
          label="Select All"
          checked={selectedContacts.length === contacts.length}
          onChange={handleSelectAllChange}
        />
        <div className="contacts-list" style={{ maxHeight: '200px', overflowY: 'scroll' }}>
          {contacts.map(contact => (
            <Form.Check
              key={contact.id}
              type="checkbox"
              label={contact.name}
              checked={selectedContacts.includes(contact.id)}
              onChange={() => handleContactChange(contact.id)}
            />
          ))}
        </div>
        <hr />
        <Form.Group controlId="formMaxFAQs">
          <Form.Label>Max Number of FAQs to Add</Form.Label>
          <Form.Control
            type="number"
            value={maxFAQs}
            onChange={handleMaxFaqsChange}
          />
        </Form.Group>
        {/* <Button onClick={handleFetchFaqs}>Fetch FAQs</Button> */}
        {fetchedFaqs.length > 0 && (
          <>
            <h6>Select FAQs to Add</h6>
            <ListGroup>
              {fetchedFaqs.map((faq, index) => (
                <ListGroup.Item key={index}>
                  <Form.Check
                    type="checkbox"
                    label={`${faq.question} - ${faq.answer}`}
                    checked={selectedFaqs.includes(faq)}
                    onChange={() => handleSelectFaqChange(faq)}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>Close</Button>
        <Button variant="primary" onClick={handleAddSelectedFaqs}>Add Selected FAQs</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default FaqModal;