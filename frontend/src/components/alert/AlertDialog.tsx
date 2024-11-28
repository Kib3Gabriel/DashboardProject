import React, { useState } from 'react';
import { useAlerts } from '../contexts/AlertContext';

interface AlertDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AlertDialog: React.FC<AlertDialogProps> = ({ isOpen, onClose }) => {
  const [price, setPrice] = useState('');
  const [condition, setCondition] = useState<'above' | 'below'>('above');
  const { addAlert } = useAlerts();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAlert({
      symbol: 'AAPL', // Currently hardcoded, could be made dynamic
      price: parseFloat(price),
      condition,
    });
    onClose();
    setPrice('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <h2 className="text-xl font-semibold mb-4">Create Price Alert</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Condition</label>
            <select
              value={condition}
              onChange={(e) => setCondition(e.target.value as 'above' | 'below')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="above">Above</option>
              <option value="below">Below</option>
            </select>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Create Alert
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

