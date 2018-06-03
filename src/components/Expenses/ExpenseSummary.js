import React from 'react';

const ExpenseSummary = ({expenses})=>{
    return (
        <div style={{textAlign: 'left', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '20px', fontSize: '14px', color: '#666', borderTop: '1px solid #ddd'}}>
            Total Expenses: <strong>{expenses.reduce((totalExpenses,expense)=>{
                                        return totalExpenses + parseInt(expense.data.price);
                                    },0)}</strong>
        </div>
    )
};

export default ExpenseSummary;