export default {
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