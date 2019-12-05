import { useEffect, useState } from 'react';
import dataSubject from '../../stores/dataSubject'
import OrderFilterConstant from '../../constants/OrderFilterConstant';
import sortBy from './sortBy';

export default function useListVendors() {
    const [vehVendorAvails, setVehVendorAvails] = useState()

    function handlePayload({vehAvailRSCore, order}) {
        const vehVendorAvails = vehAvailRSCore.VehVendorAvails

        Object.keys(OrderFilterConstant).forEach((name) => {
            if (OrderFilterConstant[name] === order) {
                const sortedVehVendorAvails = vehVendorAvails.map((item) => {         
                    return {...item, VehAvails: item.VehAvails.sort(sortBy[name])}
                })
                setVehVendorAvails(sortedVehVendorAvails)
            }
        })
    }

    useEffect(() => {
        const subscription = dataSubject.subscribe(handlePayload)
        return () => subscription.unsubscribe()
    }, [])

    return vehVendorAvails
}


