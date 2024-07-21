"use client"
import React, { useState } from 'react';

// Modal component
const Modal: React.FC<{ onClose: () => void; onAdd: (newRow: any) => void }> = ({ onClose, onAdd }) => {
  const initialNewRowState = {
    rank: '',
    name: '',
    symbol: '',
    price: '',
    percentChange1h: '',
    percentChange24h: '',
    percentChange7d: '',
    volume24h: '',
    marketCap: '',
    sparklineData: []
  };

  const [newRow, setNewRow] = useState(initialNewRowState);

  const handleInputChange = (property: string, value: string) => {
    setNewRow(prevRow => ({
      ...prevRow,
      [property]: value
    }));
  };

  const handleAddNewRow = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd(newRow);
    setNewRow(initialNewRowState);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-96 dark:bg-neutral-900">
        <h2 className="text-xl font-semibold mb-4">Add New Cryptocurrency</h2>
        <form onSubmit={handleAddNewRow}>
          <input
            type="text"
            placeholder="Rank"
            value={newRow.rank}
            onChange={e => handleInputChange('rank', e.target.value)}
            className=" p-2 rounded-lg text-sm text-gray-800 dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Name"
            value={newRow.name}
            onChange={e => handleInputChange('name', e.target.value)}
            className=" p-2 rounded-lg  font-semibold text-sm text-gray-800 dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Symbol"
            value={newRow.symbol}
            onChange={e => handleInputChange('symbol', e.target.value)}
            className="text-sm p-2 rounded-lg  text-gray-800 dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Price"
            value={newRow.price}
            onChange={e => handleInputChange('price', e.target.value)}
            className="text-sm p-2 rounded-lg  text-gray-800 dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="1h Change"
            value={newRow.percentChange1h}
            onChange={e => handleInputChange('percentChange1h', e.target.value)}
            className="text-sm p-2 rounded-lg  text-gray-800 dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="24h Change"
            value={newRow.percentChange24h}
            onChange={e => handleInputChange('percentChange24h', e.target.value)}
            className="text-sm text-gray-800 p-2 rounded-lg  dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="7d Change"
            value={newRow.percentChange7d}
            onChange={e => handleInputChange('percentChange7d', e.target.value)}
            className="text-sm text-gray-800 p-2 rounded-lg  dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="24h Volume"
            value={newRow.volume24h}
            onChange={e => handleInputChange('volume24h', e.target.value)}
            className="text-sm text-gray-800 p-2 rounded-lg  dark:text-white mb-2 w-full"
          />
          <input
            type="text"
            placeholder="Market Cap"
            value={newRow.marketCap}
            onChange={e => handleInputChange('marketCap', e.target.value)}
            className="text-sm text-gray-800 p-2 rounded-lg  dark:text-white mb-2 w-full"
          />
          {/* Add input fields for other properties similarly */}
          <div className="flex justify-end">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
              Add
            </button>
            <button type="button" className="text-gray-600 px-4 py-2 rounded-md" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Third: React.FC = () => {
  const [cryptocurrencyData, setCryptocurrencyData] = useState([
    
        {
          rank: 1,
          name: "Bitcoin",
          symbol: "BTC",
          price: "$26,869.14",
          percentChange1h: "-0.1%",
          percentChange24h: "0.3%",
          percentChange7d: "-3.8%",
          volume24h: "$15,438,433,675",
          marketCap: "$524,007,508,943",
          sparklineData: [] // Placeholder for sparkline data
        },
        {
          rank: 2,
          name: "Ethereum",
          symbol: "ETH",
          price: "$2,172.36",
          percentChange1h: "0.5%",
          percentChange24h: "1.2%",
          percentChange7d: "-2.7%",
          volume24h: "$12,819,320,489",
          marketCap: "$252,543,107,220",
          sparklineData: []
        },
        {
          rank: 3,
          name: "Binance Coin",
          symbol: "BNB",
          price: "$498.32",
          percentChange1h: "-0.3%",
          percentChange24h: "0.8%",
          percentChange7d: "-4.1%",
          volume24h: "$2,564,793,032",
          marketCap: "$81,310,633,272",
          sparklineData: []
        },
        {
          rank: 4,
          name: "Solana",
          symbol: "SOL",
          price: "$40.18",
          percentChange1h: "0.9%",
          percentChange24h: "4.5%",
          percentChange7d: "12.3%",
          volume24h: "$1,547,289,791",
          marketCap: "$11,193,003,762",
          sparklineData: []
        },
        {
          rank: 5,
          name: "Cardano",
          symbol: "ADA",
          price: "$1.38",
          percentChange1h: "0.2%",
          percentChange24h: "-0.6%",
          percentChange7d: "1.5%",
          volume24h: "$2,514,639,784",
          marketCap: "$44,112,875,947",
          sparklineData: []
        }
      
      
    // Add more cryptocurrency data objects here if needed
  ]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const addNewRow = (newRowData: any) => {
    setCryptocurrencyData(prevData => [
      ...prevData,
      { ...newRowData, rank: prevData.length + 1 }
    ]);
  };

  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Header with button to toggle modal */}
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Add Cryptocurrency
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
          <thead className="bg-gray-50 dark:bg-neutral-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  #
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap min-w-64">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Coin
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Price
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  1h
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  24h
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  7d
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  24h Volume
                </span>
              </th>
              <th scope="col" className="px-6 py-3 text-start whitespace-nowrap">
                <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
                  Mkt Cap
                </span>
              </th>
             
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
            {/* Map over cryptocurrencyData and render table rows */}
            {cryptocurrencyData.map((crypto, index) => (
              <tr key={index}>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-gray-800 dark:text-neutral-200">{crypto.rank}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="font-semibold text-sm text-gray-800 dark:text-white">{crypto.name}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-gray-800 dark:text-white">{crypto.price}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-red-500">{crypto.percentChange1h}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-green-500">{crypto.percentChange24h}</span>
                </td>
                <td className="h-px w-72 whitespace-nowrap">
                  <span className="text-sm text-red-500">{crypto.percentChange7d}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-gray-800 dark:text-white">{crypto.volume24h}</span>
                </td>
                <td className="size-px whitespace-nowrap px-6 py-3">
                  <span className="text-sm text-gray-800 dark:text-white">{crypto.marketCap}</span>
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal component */}
      {showModal && <Modal onClose={toggleModal} onAdd={addNewRow} />}
    </div>
  );
};

export default Third;
