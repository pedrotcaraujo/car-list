import { useEffect, useState } from 'react';
import dataSubject from '../../stores/dataSubject'

export default function useCarByID(id) {
    const [car, setCar] = useState();

    useEffect(() => {
        function handlePayload({vehAvailRSCore}) {
            const vehVendorAvails = vehAvailRSCore.VehVendorAvails
            vehVendorAvails.some(item => {
                const currentCar = item.VehAvails.find(c => {
                    return c.ID === id
                })

                if (currentCar) {
                    currentCar['Vendor'] = item.Vendor
                    setCar(currentCar)
                    return true
                } else {
                    return false
                }
            })    
        }
        const subscription = dataSubject.subscribe(handlePayload)
        return () => subscription.unsubscribe()
    }, [id])

    return car
}