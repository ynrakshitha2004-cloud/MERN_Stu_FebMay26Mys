const items = {
    item1: "Laptop",
    item2: "server",
    item3: "cloud-API"
};

for(const [item,itemName] of Object.entries(items)){
    console.log(`${item}:${itemName}`);
}