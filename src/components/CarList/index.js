import React from 'react';
import './style.css';
import useCarsByOrder from '../../hooks/useCarsByOrder';

export default function CarList() {
    const cars = useCarsByOrder()
    return (
        <section className="CarList">
            <div className="container">
                <div className="CarList-items">
                    {cars && cars.map((car) => (
                        <CarBlock
                            key={car['UUID']}
                            status={car['@Status']}
                            vehicle={car['Vehicle']}
                            vendor={car['Vendor']}
                            totalCharge={car['TotalCharge']}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

function CarBlock(props) {
    const { vehicle, totalCharge, vendor} = props;
    console.log(vehicle)
    return (
        <div className="CarBlock">
            <a className="CarBlock-link" href="/">
                <figure>
                    <img
                        className="CarBlock-img"
                        src={vehicle.PictureURL} alt={vehicle.VehMakeModel['@Name']}
                        width="300"
                    />
                </figure>
                <div className="CarBlock-details">
                    <h3 className="CarBlock-name">{vehicle.VehMakeModel['@Name']}</h3>
                    <div className="CarBlock-info">                        
                        <span className="CarBlock-info-item CarBlock-vendor">
                            {vendor['@Name']}
                        </span>
                        <span className="CarBlock-info-item">
                            {vehicle['@FuelType']}
                        </span>
                        <span className="CarBlock-info-item">
                            Passenger: {vehicle['@PassengerQuantity']}
                        </span>
                        <span className="CarBlock-info-item">
                            Baggage: {vehicle['@BaggageQuantity']}
                        </span>
                        <div className="CarBlock-price">
                            {totalCharge['@RateTotalAmount']}
                        </div>
                    </div>
                </div>
            </a>
        </div>
    )
}
