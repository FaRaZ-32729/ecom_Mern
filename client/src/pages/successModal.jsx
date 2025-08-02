// components/SuccessModal.jsx
import React from 'react';

const SuccessModal = ({ message, onClose }) => {
    return (
        <div className='fixed top-0 bottom-0 left-0 right-0 z-100 flex items-center justify-center bg-black/70'>
            <div className='flex bg-white rounded-xl max-w-md p-6 relative'>
                <img
                    src="/assets/close.svg"
                    onClick={onClose}
                    alt="close icon"
                    className='absolute top-4 right-4 h-4 w-4 cursor-pointer'
                />
                <div className="text-center">
                    <p className='text-2xl font-semibold text-green-600'>Success!</p>
                    <p className='mt-4 text-gray-700'>{message}</p>
                </div>
            </div>
        </div>
    );
};

export default SuccessModal;
