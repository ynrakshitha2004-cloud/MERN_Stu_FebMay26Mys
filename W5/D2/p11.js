//chaining promise with return promises
function getOrderId() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(501);
        }, 500);
    });
}
function getOrderDetails(getOrderId) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve({
                id: getOrderId,
                product: "Laptop",
                quantity: 2
            });
        }, 700);
    });
}
getOrderId()
    .then(function(getOrderId) {
        console.log("order id is received: ", getOrderId);
        return getOrderDetails(getOrderId);
    })
.then(function (getOrderDetails) {
    console.log("order details loaded.");
    console.log("Product:", getOrderDetails.product);
    console.log("Quantity:", getOrderDetails.quantity);
})
