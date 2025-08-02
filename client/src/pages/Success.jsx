// src/pages/Success.jsx
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessModal from './successModal';
import { CartContext } from '../context/CartContext';
import UserContext from '../context/UserContext';

const Success = () => {
    const [showModal, setShowModal] = useState(true);
    const { clearCart } = useContext(CartContext);
    const { user } = useContext(UserContext);
    const navigate = useNavigate();

    useEffect(() => {
        clearCart(user._id);
        const timer = setTimeout(() => {
            setShowModal(false);
            navigate('/'); // redirect after showing modal
        }, 4000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            {showModal && (
                <SuccessModal
                    message="Thank you for your order. A confirmation email has been sent."
                    onClose={() => setShowModal(false)}
                />
            )}
        </div>
    );
};

export default Success;
