// Date fundamentals 
const mongoose = require('mongoose');
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        const dateSchema = new mongoose.Schema({
            name: String,
            createdAt: {
                type: Date,
                default: Date.now
            }
        });

        const Model = mongoose.model('DateFund', dateSchema);
        await Model.deleteMany();
        const doc = await Model.create({
            name: "xyz"
        });

        console.log("Document:", doc);

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
        console.log("Db disconnected");
    }
}

main();