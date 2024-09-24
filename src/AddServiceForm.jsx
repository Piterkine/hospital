import React, { useState } from 'react';

const AddServiceForm = ({ addService }) => {
  const [service, setService] = useState({ name: '', description: '', price: '' });
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!service.name || !service.description || !service.price) {
      setError('Please fill in all fields');
      return;
    }
    addService(service);
    setService({ name: '', description: '', price: '' });
    setError('');
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">Add New Service</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Service Name"
          value={service.name}
          onChange={(e) => setService({ ...service, name: e.target.value })}
          className="block w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={service.description}
          onChange={(e) => setService({ ...service, description: e.target.value })}
          className="block w-full border border-gray-300 p-2 rounded"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={service.price}
          onChange={(e) => setService({ ...service, price: e.target.value })}
          className="block w-full border border-gray-300 p-2 rounded"
          required
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Add Service</button>
      </form>
    </div>
  );
};

export default AddServiceForm;
