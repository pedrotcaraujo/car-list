import {BehaviorSubject} from 'rxjs';
import uuidv1 from 'uuid/v1'
import data from '../data.json';
import OrderFilterConstant from '../constants/OrderFilterConstant';

const VehVendorAvails = data[0].VehAvailRSCore.VehVendorAvails.map(createCarUUIDs)
const VehRentalCore = data[0].VehAvailRSCore.VehRentalCore

export default new BehaviorSubject({
    order: OrderFilterConstant.PRICE,
    vehAvailRSCore: {
        VehRentalCore,
        VehVendorAvails
    }
})

function createCarUUIDs(VehVendor) {
    const VehAvails = VehVendor.VehAvails.map(car => ({...car, UUID: uuidv1()}))

    return {
        Vendor: VehVendor.Vendor,
        VehAvails
     }
}