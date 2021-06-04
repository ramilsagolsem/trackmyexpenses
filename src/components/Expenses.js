import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses(expenses) {
    return (
        <div className="expenses">
            <ExpenseItem date={expenses.data[0].date} desc={expenses.data[0].title} price={expenses.data[0].amount}></ExpenseItem>
            <ExpenseItem date={expenses.data[1].date} desc={expenses.data[1].title} price={expenses.data[1].amount}></ExpenseItem>
            <ExpenseItem date={expenses.data[2].date} desc={expenses.data[2].title} price={expenses.data[2].amount}></ExpenseItem>
            <ExpenseItem date={expenses.data[3].date} desc={expenses.data[3].title} price={expenses.data[3].amount}></ExpenseItem>
        </div>
    );
}

export default Expenses;