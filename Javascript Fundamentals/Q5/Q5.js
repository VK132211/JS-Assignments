function getEstimatedDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case "standard":
            deliveryTime = "3-5 days";
            break;
        case "express":
            deliveryTime = "1-2 days";
            break;
        case "overnight":
            deliveryTime = "Next day";
            break;
        default:
            deliveryTime = "Unknown package type";
    }

    console.log(`Estimated delivery time for ${packageType}: ${deliveryTime}`);
}

getEstimatedDeliveryTime("standard"); // Estimated delivery time for standard: 3-5 days
getEstimatedDeliveryTime("express");  // Estimated delivery time for express: 1-2 days
getEstimatedDeliveryTime("overnight"); // Estimated delivery time for overnight: Next day
getEstimatedDeliveryTime("unknown"); // Estimated delivery time for unknown: Unknown package type
