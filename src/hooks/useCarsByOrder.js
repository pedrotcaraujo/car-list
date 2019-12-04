import { useEffect, useState } from 'react';
import dataSubject from '../stores/dataSubject'
import OrderFilterConstant from '../constants/OrderFilterConstant';

export default function useCarsByOrder() {
    const [cars, setCars] = useState()

    function handlePayload({vehAvailRSCore, order}) {
        const cars = vehAvailRSCore.VehVendorAvails
            .flatMap((VehVendorAvails) => (
                VehVendorAvails.VehAvails.map((car) => ({
                    ...car, 
                    Vendor: VehVendorAvails.Vendor
                }))
            ))

        Object.keys(OrderFilterConstant).forEach((name) => {
            if (OrderFilterConstant[name] === order) {
                const sortedCars = cars.sort(sortBy[name])
                setCars(sortedCars)
            }
        })
    }

    useEffect(() => {
        const subscription = dataSubject.subscribe(handlePayload)
        return () => subscription.unsubscribe()
    }, [])

    return cars
}

const sortBy = {
    PRICE: (a, b) => (
        a.TotalCharge['@RateTotalAmount'] - b.TotalCharge['@RateTotalAmount']
    ),
    BAGGAGE_QUANTITY: (a, b) => {
        if (a.Vehicle['@BaggageQuantity'] > b.Vehicle['@BaggageQuantity']) {
            return -1
        } else if (a.Vehicle['@BaggageQuantity'] < b.Vehicle['@BaggageQuantity']) {
            return 1;
        } else {
            return 0
        }
    }
}
