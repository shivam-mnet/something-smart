import React from 'react';
import { Form } from 'react-bootstrap';

function AddResourceSection() {
  return (
    <div className="mb-3">
      <h5>Add Resource</h5>
      <Form.Control as="textarea" rows={3} placeholder="Enter your resource here..." />
    </div>
  );
}

export default AddResourceSection;