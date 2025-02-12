import React from 'react';
import { MdDelete } from "react-icons/md";

const LineItem = ({ item, handleCheck, handleDelete }) => {
    return (
        <li className='item'>
            <input
                id={`checkbox-${item.id}`}
                type='checkbox'
                checked={item.checked}
                onChange={() => handleCheck(item.id)}
            />
            <label
                htmlFor={`checkbox-${item.id}`}
                style={{ cursor: "pointer", marginLeft: "8px" }}
            >
                {item.item}
            </label>
            <MdDelete
                role='button'
                tabIndex="0"
                onClick={() => handleDelete(item.id)}
                onKeyDown={(e) => e.key === "Enter" && handleDelete(item.id)}
                style={{ cursor: "pointer", color: "red", marginLeft: "10px" }}
                title="Delete Item"
            />
        </li>
    );
};

export default LineItem;
