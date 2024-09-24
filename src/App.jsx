import React, { useState, useEffect } from 'react';
import ServiceList from './ServiceList';
import AddServiceForm from './AddServiceForm';

const App = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const initialServices = [
      { id: 1, name: 'General Consultation', description: 'Routine health checkup', price: 500 },
      { id: 2, name: 'Dental Cleaning', description: 'Professional dental cleaning', price: 1200 }
    ];
    setServices(initialServices);
  }, []);

  const addService = (newService) => {
    setServices([...services, { ...newService, id: services.length + 1 }]);
  };

  const updateService = (updatedService) => {
    const updatedServices = services.map(service =>
      service.id === updatedService.id ? updatedService : service
    );
    setServices(updatedServices);
  };

  const deleteService = (id) => {
    setServices(services.filter(service => service.id !== id));
  };

  return (
    <div className="container mx-auto px-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-center mt-8">Healthcare Services Management</h1>
      <AddServiceForm addService={addService} />
      <ServiceList services={services} updateService={updateService} deleteService={deleteService} />
    </div>
  );
};

export default App;
