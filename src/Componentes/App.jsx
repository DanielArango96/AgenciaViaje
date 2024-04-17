import React, { useState } from 'react';
import Header from './Header';
import ClienteList from './ClienteList';
import AgregarClienteForm from './AgregarClienteForm';
import clientes from '../DataBase/clientes';
import 'tailwindcss/tailwind.css';

function App() {
  const [filteredClientes, setFilteredClientes] = useState(clientes);

  const handleFilterChange = (event) => {
    const filterValue = event.target.value.toLowerCase();
    setFilteredClientes(
      clientes.filter(
        (cliente) =>
          cliente.nombre.toLowerCase().includes(filterValue) ||
          cliente.destino.toLowerCase().includes(filterValue)
      )
    );
  };

  const handleNuevoClienteSubmit = (nuevoCliente) => {
    setFilteredClientes([...filteredClientes, nuevoCliente]);
  };

  return (
    <div>
      <Header />
      <h2>Agregar Nuevo Cliente</h2>
      <AgregarClienteForm onSubmit={handleNuevoClienteSubmit} />
      <input type="text" placeholder="Filtrar por nombre o destino" onChange={handleFilterChange} />
      <ClienteList clientes={filteredClientes} />
  
    
    </div>
  );
}

export default App;