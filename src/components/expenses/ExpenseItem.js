import React, { useState } from 'react';
import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../ui/Card';

const ExpenseItem = (props) => {

    const [desc, setDesc] = useState(props.desc);

    const clickHanlder = () => {
        setDesc('Updated');
    }
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{desc}</h2>
                <div className="expense-item__price">${props.price}</div>
            </div>
            <button onClick={clickHanlder}>change item</button>
        </Card>
    )
}

export default ExpenseItem;