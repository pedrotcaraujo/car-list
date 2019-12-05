import React from 'react'
import moment from 'moment';
import './style.css'
import useRentalCore from './useRentalCore'

export default function Itinerary() {
    const vehRentalCore = useRentalCore()
    return (
        <div className="Itinerary">
            {vehRentalCore && (
                <div className="container">
                    <div className="Itinerary-details">
                        <div className="Itinerary-pickup">
                            <span className="Itinerary-info">
                                Pickup Location:
                                <span>{vehRentalCore.PickUpLocation['@Name']}</span>
                            </span>
                            <span className="Itinerary-info">
                                Pickup Datetime:
                                <span>
                                    {moment(vehRentalCore['@PickUpDateTime']).format("MMM Do YY")}
                                </span>
                            </span>
                        </div>
                        <div className="Itinerary-return">
                            <span className="Itinerary-info">
                                Return Location:
                                <span>{vehRentalCore.ReturnLocation['@Name']}</span>
                            </span>
                            <span className="Itinerary-info">
                                Return Datetime:
                                <span>
                                    {moment(vehRentalCore['@ReturnDateTime']).format("MMM Do YY")}
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}