import React from 'react';
import {Link} from "react-router-dom";
import './style.css';
import useListAll from './useListAll';
import useListVendors from './useListVendors';

export default function CarList(props) {
    const { showAll } = props

    return (
        <section className="CarList">
            <div className="container">
                {showAll ? <CarListAll /> : <CarListVendors /> }
            </div>
        </section>
    )
}

function CarListVendors() {
    const vehVendorAvails = useListVendors()
    return (
        <>
            {vehVendorAvails && vehVendorAvails.map((item) => (
                <section key={item.Vendor['@Code']} className="CarList-section">
                    <h2 className="CarList-section-name">{item.Vendor['@Name']}</h2>
                    <div className="CarList-items">
                        {item.VehAvails.map((car) => (
                            <CarBlock
                                key={car['ID']}
                                id={car['ID']}
                                status={car['@Status']}
                                vehicle={car['Vehicle']}
                                vendor={item['Vendor']}
                                totalCharge={car['TotalCharge']}
                            />
                        ))}
                    </div>
                </section>
            ))}
        </>
    )
}

function CarListAll() {
    const cars = useListAll()
    return (
        <div className="CarList-items">
            {cars && cars.map((car) => (
                <CarBlock
                    key={car['ID']}
                    id={car['ID']}
                    status={car['@Status']}
                    vehicle={car['Vehicle']}
                    vendor={car['Vendor']}
                    totalCharge={car['TotalCharge']}
                />
            ))}
        </div>
    )
}

function CarBlock(props) {
    const { vehicle, totalCharge, vendor, id} = props;
    return (
        <div className="CarBlock">
            <Link className="CarBlock-link" to={`/car/${id}`}>
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
            </Link>
        </div>
    )
}
