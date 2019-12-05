import {BehaviorSubject} from 'rxjs';
import crypto from 'crypto-js'
import data from '../data.json';
import OrderFilterConstant from '../constants/OrderFilterConstant';

const VehVendorAvails = data[0].VehAvailRSCore.VehVendorAvails.map(createCarIDs)
const VehRentalCore = data[0].VehAvailRSCore.VehRentalCore

export default new BehaviorSubject({
    order: OrderFilterConstant.PRICE,
    vehAvailRSCore: {
        VehRentalCore,
        VehVendorAvails
    }
})

function createCarIDs(VehVendor) {
    const VehAvails = VehVendor.VehAvails.map((car, index) => (
        {   ...car, 
            ID: `${crypto.MD5(car.Vehicle.VehMakeModel['@Name'])}${index}`
        }
    ))
    return {
        Vendor: VehVendor.Vendor,
        VehAvails
     }
}