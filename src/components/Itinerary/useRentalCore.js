import { useEffect, useState } from 'react';
import dataSubject from '../../stores/dataSubject'

export default function useCarsByOrder() {
    const [vehRentalCore, setVehRentalCore] = useState()

    function handlePayload({vehAvailRSCore}) {
        setVehRentalCore(vehAvailRSCore.VehRentalCore)
    }

    useEffect(() => {
        const subscription = dataSubject.subscribe(handlePayload)
        return () => subscription.unsubscribe()
    }, [])

    return vehRentalCore
}


