import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch } = useContext(AppContext);
    const { budget } = useContext(AppContext);
    const { currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: event.target.value
        });
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input></span>

</div>
    );
};
export default Budget;
