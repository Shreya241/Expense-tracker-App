import React from 'react';
import AddForm from '../../Components/add-form';
import Topfold from '../../Components/topfold';
import './addExpense.css';

const AddExpense = () => {
    return (
        <div className="add-expense">
            <Topfold/>
            <AddForm/>
        </div>
    )
}

export default AddExpense;
