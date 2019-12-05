import React from 'react';
import {Link} from "react-router-dom";
import './style.css'
import useCarByID from './useCarByID';


export default function Car(props) {
    const { id } = props;
    const car  = useCarByID(id)
    return (
        <div className="container">
            {car && (
             <div className="Car">
                <figure>
                    <img
                        className="Car-img"
                        src={car.Vehicle.PictureURL} alt={car.Vehicle.VehMakeModel['@Name']}
                    />
                </figure>
                <div className="Car-details">
                    <h2 className="Car-name">{car.Vehicle.VehMakeModel['@Name']}</h2>
                    <dl className="Car-info">
                        <dt>Vendor</dt>
                        <dd>{car.Vendor['@Name']}</dd>

                        <dt>Fuel Type</dt>
                        <dd>{car.Vehicle['@FuelType']}</dd>

                        <dt>Passenger</dt>
                        <dd>{car.Vehicle['@PassengerQuantity']}</dd>

                        <dt>Baggage Quantity</dt>
                        <dd>{car.Vehicle['@BaggageQuantity']}</dd>
                        
                        <dt>Price</dt>
                        <dd>{car.TotalCharge['@RateTotalAmount']}</dd>
                    </dl>
                </div>
                <Link to='/car-list'>Back</Link>
            </div>
            )}
            
        </div>
    )
}