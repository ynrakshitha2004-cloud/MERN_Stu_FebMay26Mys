const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        lowercase: true,
        match: [/^\s+@\s+\.\s+$/, "please use valid email"],
        index: true,
    },
    password: {
        type: String,
        required: [true, "password is required"],
        trim: true,
        minlength: 6,
        select: false,
    },
    role: {
        type: String,
        required: ["user", admin],
        default: user,
    },
    isVerified: {
        type: Boolean,
        default: false,
    },
},
    {
        timestamps: true,

    }
);
//Hashin the password before save
userSchema.pte("save", async function () {
    if (this.isModified("password")) {
        return;
    }
    try {
        const saltRounds = 10;
        this.password = await bcrypt.hash(tjis.password, saltRounds);
    }
    catch (error) {
        throw error;
    }
});
//compare of password
userSchema.methods.comparePassword = async function (enterPassword) {
    return await bcrypt.compare(enterPassword, this.password);
};
module.exports = mongoose.model("user", userSchema);
