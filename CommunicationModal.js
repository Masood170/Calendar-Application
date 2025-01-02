// src/components/UserModule/CommunicationModel.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const CommunicationModel = ({ company, onSave }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');

  const communicationMethods = [
    'LinkedIn Post',
    'LinkedIn Message',
    'Email',
    'Phone Call',
    'Other',
  ];

  const handleSave = () => {
    if (!communicationType || !communicationDate) {
      alert('Please fill in all required fields!');
      return;
    }

    const communicationData = {
      type: communicationType,
      date: communicationDate,
      notes,
    };

    onSave(company, communicationData);
    setCommunicationType('');
    setCommunicationDate('');
    setNotes('');
  };

  return (
    <div className="modal bg-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Log Communication for {company.name}
      </h2>

      {/* Communication Type Dropdown */}
      <div className="mb-4">
        <label htmlFor="communicationType" className="block text-sm font-medium">
          Type of Communication
        </label>
        <select
          id="communicationType"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={communicationType}
          onChange={(e) => setCommunicationType(e.target.value)}
        >
          <option value="">Select a type</option>
          {communicationMethods.map((method, index) => (
            <option key={index} value={method}>
              {method}
            </option>
          ))}
        </select>
      </div>

      {/* Communication Date */}
      <div className="mb-4">
        <label htmlFor="communicationDate" className="block text-sm font-medium">
          Date of Communication
        </label>
        <input
          type="date"
          id="communicationDate"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          value={communicationDate}
          onChange={(e) => setCommunicationDate(e.target.value)}
        />
      </div>

      {/* Notes Text Area */}
      <div className="mb-4">
        <label htmlFor="notes" className="block text-sm font-medium">
          Notes
        </label>
        <textarea
          id="notes"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          rows="4"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="Add any additional information..."
        ></textarea>
      </div>

      {/* Save Button */}
      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save
        </button>
      </div>
    </div>
  );
};

CommunicationModel.propTypes = {
  company: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default CommunicationModel;
