import React from 'react';

function ClienteList({ clientes }) {
    return (
        <div className="overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nombre</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Destino</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pago</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Personas</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientes.map((cliente, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.nombre}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.destino}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.pago}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{cliente.personas}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
}

export default ClienteList;