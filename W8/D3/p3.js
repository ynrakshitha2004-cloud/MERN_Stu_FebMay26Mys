// pre-remove hook
const mongoose = require("mongoose");
async function runRmoveHookDemo() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/hooks");
        const courseSchema = new mongoose.Schema({
            title: String,
            tag: String,
        });
        courseSchema.pre("deleteOne", {
            document: true, query: false
        }, function () {
            console.log("Pre-delete hook, ", this.title,);
        },);
        const course = mongoose.model.HookCourse || mongoose.model("HookCourse", courseSchema);

        const Course = new course({
            title: "Database design basics",
            tag: "remove-hook-demo"
        });
        await Course.save();
        console.log("Document save sucessfully");
        await Course.deleteOne({title:"Databse design basics"});
        console.log("Document Deleted sucessfully");
        await mongoose.connection.close();
        console.log("Connection close");
    }
    catch (error) {
        console.log("Remove hook error", error.message);
    }
}
runRmoveHookDemo();