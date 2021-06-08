import React ,{useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [enteredTiltle, setEnteredTiltle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // const [userInput,setUserInput] = useState({
    //     enteredTiltle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTiltle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTiltle: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,          
        //         enteredTiltle: event.target.value
        //     }
        // })
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,          
        //         enteredAmount: event.target.value
        //     }
        // })
    }

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
        // setUserInput((prevState)=>{
        //     return{
        //         ...prevState,          
        //         enteredDate: event.target.value
        //     }
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        const expenseData = {
            title: enteredTiltle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTiltle('');
        setEnteredAmount('');
        setEnteredDate('');
        
    }

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                    type='text' 
                    value={enteredTiltle}
                    onChange={titleChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number' 
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input 
                    type='date' 
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button>Add expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
