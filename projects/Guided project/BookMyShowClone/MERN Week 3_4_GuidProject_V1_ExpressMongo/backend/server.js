//Load environment variables
require("dotenv").config();
const app = require("./app");
const connectDB = require("./src/config/db");
connectDB();
//port config
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`Server ruuning on port ${PORT}`);
});