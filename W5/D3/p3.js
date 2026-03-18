//Handling errors with try/catch

function loadCustomerProfile() {
    return new Promise(function (resolve, reject) {
        const isServiceAvailable = true;

        if (isServiceAvailable) {
            resolve("Sucess! customer profile loaded.");
        }
        else {
            reject("Unsucessfull!! customer profile unavailable.");
        }
    });
}

async function ShowCustomerProfile() {
    try {
        const message = await loadCustomerProfile();
        console.log(message);
    }
    catch(error){
        console.error("Error:",error);
    }
}
ShowCustomerProfile();

