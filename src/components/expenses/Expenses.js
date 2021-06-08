import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../ui/Card';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (expenses) => {

    const [selectedYear, setSelectedYear] = useState('2020');

    const onFilterChangeHandler = year =>{
        setSelectedYear(year);
        console.log(year);
    };

    return (
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onFilterChange={onFilterChangeHandler}/>
                <ExpenseItem date={expenses.data[0].date} desc={expenses.data[0].title} price={expenses.data[0].amount}></ExpenseItem>
                <ExpenseItem date={expenses.data[1].date} desc={expenses.data[1].title} price={expenses.data[1].amount}></ExpenseItem>
                <ExpenseItem date={expenses.data[2].date} desc={expenses.data[2].title} price={expenses.data[2].amount}></ExpenseItem>
                <ExpenseItem date={expenses.data[3].date} desc={expenses.data[3].title} price={expenses.data[3].amount}></ExpenseItem>
            </Card>
    );
}

export default Expenses;