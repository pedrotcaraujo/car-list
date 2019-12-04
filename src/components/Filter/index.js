import React, {useState, useEffect} from 'react';
import './style.css'

import OrderFilterConstant from '../../constants/OrderFilterConstant';
import dataSubject from '../../stores/dataSubject';


export default function Filters() {
    const [data, setData] = useState()
    const order = data ? data.order : OrderFilterConstant.PRICE

    useEffect(() => {
        const subscription = dataSubject.subscribe((data) => {
            setData(data)
        })
        return () => subscription.unsubscribe()
    }, [])

    function handleChange(event) {
        dataSubject.next({...data, order: event.target.value})
    }

    return (
        <div className="Filter">
            <div className="container">
                <OrderFilter value={order} onChange={handleChange} />
            </div>
        </div>
    )
}

function OrderFilter(props) {
    const {value, onChange} = props

    return (
        <div className="order">
            <p className="order-title">Order:</p>
            <ul className="order-list">
                {Object.keys(OrderFilterConstant).map((name) => (
                    <li className="order-item" key={name}>
                        <label>
                            <input
                                type="radio"
                                value={OrderFilterConstant[name]}
                                checked={value === OrderFilterConstant[name]}
                                onChange={onChange}
                            />
                            <span>{OrderFilterConstant[name]}</span>
                        </label>
                    </li> 
                ))}
            </ul>
        </div>
    )
}