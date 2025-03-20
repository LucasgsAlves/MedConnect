import React from "react";

function ConfirmationModal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
      <div className="bg-white rounded-lg shadow-lg w-96 p-6">
        <h2 className="text-xl font-bold text-blue-800">{title}</h2>
        <p className="text-gray-600 mt-4">{message}</p>
        <div className="flex justify-end mt-6 gap-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-black font-medium rounded border hover:cursor-pointer
            transition-transform duration-300 hover:scale-110"
          >
            Cancelar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 hover:cursor-pointer
            transition-transform duration-300 hover:scale-110"
          >
            Confirmar
          </button>
      </div>
    </div>
  );
}

export default ConfirmationModal;
