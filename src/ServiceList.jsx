import React, { useState } from 'react';

const ServiceList = ({ services, updateService, deleteService }) => {
  const [editingService, setEditingService] = useState(null);
  const [serviceData, setServiceData] = useState({ name: '', description: '', price: '' });

  const startEditing = (service) => {
    setEditingService(service.id);
    setServiceData({ name: service.name, description: service.description, price: service.price });
  };

  const handleUpdate = (id) => {
    updateService({ id, ...serviceData });
    setEditingService(null);
  };

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-semibold mb-4">Services List</h2>
      <ul className="space-y-4">
        {services.map(service => (
          <li key={service.id} className="p-4 border rounded-lg shadow-md bg-white">
            {editingService === service.id ? (
              <div>
                <input
                  type="text"
                  value={serviceData.name}
                  onChange={(e) => setServiceData({ ...serviceData, name: e.target.value })}
                  className="block w-full border border-gray-300 p-2 rounded mb-2"
                />
                <input
                  type="text"
                  value={serviceData.description}
                  onChange={(e) => setServiceData({ ...serviceData, description: e.target.value })}
                  className="block w-full border border-gray-300 p-2 rounded mb-2"
                />
                <input
                  type="number"
                  value={serviceData.price}
                  onChange={(e) => setServiceData({ ...serviceData, price: e.target.value })}
                  className="block w-full border border-gray-300 p-2 rounded mb-2"
                />
                <button
                  onClick={() => handleUpdate(service.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded mt-2"
                >
                  Save
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-xl font-semibold">{service.name}</h3>
                <p className="text-gray-700">{service.description}</p>
                <p className="text-gray-800 font-bold">Price: ${service.price}</p>
                <button
                  onClick={() => startEditing(service)}
                  className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteService(service.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded ml-2"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
