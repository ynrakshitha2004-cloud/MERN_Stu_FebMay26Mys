//callback handling with name functions
function loadUser(next) {
    setTimeout(function () {
        console.log("Step 1: Use loaded.");
        next();
    }, 400);

}

function loadOrders(next) {
    setTimeout(function () {
        console.log("Step 2: Orders loaded");
        next();
    }, 400);
}
function loadPayments(next) {
    setTimeout(function () {
        console.log("Step 3: payments loaded.");
        next();
    }, 400);
}
function loadShipment(next) {
    setTimeout(function () {
        console.log("Step 4: shipment loaded.");
        console.log("same flow but easier to read");
        next();
    }, 400);
}
loadUser(function(){
    loadOrders(function(){
        loadPayments(function(){
            loadShipment();
        });
    });
});