import React from 'react';

const OrderSummary = ({orders})=>{
    let earning = 0,
        pendingPayment = 0,
        totalEarning = 0;
    orders.map((order)=>{
        if(order.data.paymentStatus === 'PENDING'){
            pendingPayment += parseInt(order.data.price);
        } else {
            earning += parseInt(order.data.price);
        }
        totalEarning += parseInt(order.data.price);
    });

    return (
        <div style={{textAlign: 'left', paddingLeft: '20px', paddingTop: '10px', paddingBottom: '20px', fontSize: '14px', color: '#666', borderTop: '1px solid #ddd'}}>
            Pending Payment: <strong>{pendingPayment}</strong>
            <br /><br />
            Paid Amount: <strong>{earning}</strong>
            <br/><br />
            Total Earning: <strong>{totalEarning}</strong>
        </div>
    )
};

export default OrderSummary;