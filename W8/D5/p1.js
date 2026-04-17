//File upload using Multer: with file type, file size restrictions
const express = require("express");
const multer = require("multer");

async function main() {
    try {
        const app = express();

        // File filter (only PNG & JPG)
        const fileFilter = (req, file, cb) => {
            if (file.mimetype === "image/png" || file.mimetype === "image/jpeg") {
                cb(null, true);
            } else {
                cb(new Error("ONLY PNG & JPG IMAGES ARE ALLOWED."), false);
            }
        };

        const uploadWithDest = multer({
            dest: "uploads/",
            limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
            fileFilter
        });

        app.post("/upload-dest", uploadWithDest.single("file"), (req, res) => {
            res.send({
                message: "Uploads using dest approach",
                note: "File is random, no extension preserved",
                file: req.file
            });
        });

        
        const storage = multer.diskStorage({
            destination: (req, file, cb) => {
                cb(null, "uploads/");
            },
            filename: (req, file, cb) => {
                cb(null, Date.now() + "-" + file.originalname);
            }
        });

        const uploadWithDisk = multer({
            storage,
            limits: { fileSize: 1024 * 1024 * 2 }, // 2MB
            fileFilter
        });

        app.post("/upload-disk", uploadWithDisk.single("file"), (req, res) => {
            res.send({
                message: "Uploads using diskStorage approach",
                note: "File is controlled and extension is preserved",
                file: req.file
            });
        });

        app.listen(3000, () => {
            console.log("Server started at http://localhost:3000");
            console.log("POST /upload-dest");
            console.log("POST /upload-disk");
        });

    } catch (err) {
        console.error("Error:", err.message);
    }
}
main();