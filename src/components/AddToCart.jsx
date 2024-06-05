import React, { useState } from 'react';
import { CartAmountToggle } from './CartAmountToggle';

export const AddToCart = ({ product }) => {
    const { id, colors, stock } = product;
    const [selectedColor, setSelectedColor] = useState(colors[0]);
    const [amount, setAMount] = useState(1);

    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    const setIncrease = () => {
        amount < stock ? setAMount(amount + 1) : setAMount(stock);
    }
    const setDecrease = () => {
        amount > 1 ? setAMount(amount - 1) : setAMount(1);
    }
    return (
        <>
            <div>
                <p>Colors:</p>
                <div className="flex mt-2">
                    {colors.map((curColor, index) => (
                        <button
                            key={index}
                            className={`select-none h-7 w-7 rounded-full mr-2 focus:outline-none ${selectedColor === curColor ? 'bg-gray-400 text-white' : 'bg-gray-200 text-gray-700'
                                }`}
                            style={{ backgroundColor: curColor }}
                            onClick={() => handleColorSelect(curColor)}
                            disabled={selectedColor === curColor}
                        >
                            {selectedColor === curColor && <span>&#10003;</span>}
                        </button>
                    ))}
                </div>
            </div>
            <CartAmountToggle amount={amount}
                setDecrease={setDecrease}
                setincrease={setIncrease} />
        </>
    );
};
