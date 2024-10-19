import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1);  // Переход на предыдущую страницу
    };

    return (
        <button onClick={handleBackClick}>
            Назад
        </button>
    );
}

export default BackButton;