// Relationship patterns
const mongoose = require("mongoose");
async function main() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/embrel");
        console.log("Connected to MongoDB");

        // One-to-many (Embedding)
        const blogSchema = new mongoose.Schema({
            title: String,
            Comments: [
                {
                    text: String,
                }
            ]
        });

        const Blog = mongoose.model('Blog', blogSchema);

        await Blog.deleteMany();

        await Blog.create({
            title: "Mongoose basics",
            Comments: [
                { text: "Great article" },
                { text: "Helpful article" }
            ]
        });

        console.log("embedding:");
        console.log(await Blog.find());

        // One-to-many (Referencing)
        const postSchema = new mongoose.Schema({
            title: String,
        });

        const CommentSchema = new mongoose.Schema({
            text: String,
            post: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Post'
            }
        });

        const Post = mongoose.model('Post', postSchema);
        const Comment = mongoose.model('Comment', CommentSchema);

        await Post.deleteMany();
        await Comment.deleteMany();

        const post = await Post.create({ title: "NodeJS Basics" });

        await Comment.create([
            { text: "Nice post!", post: post._id },
            { text: "Good", post: post._id }
        ]);

        // Many-to-Many
        const studentSchema = new mongoose.Schema({
            name: String,
            courses: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Course'
                }
            ]
        });

        const courseSchema = new mongoose.Schema({
            title: String,
            students: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Student'
                }
            ]
        });

        const Student = mongoose.model('Student', studentSchema);
        const Course = mongoose.model('Course', courseSchema);

        await Student.deleteMany();
        await Course.deleteMany();

        const course1 = await Course.create({ title: "MongoDB" });
        const course2 = await Course.create({ title: "Node.js" });

        const student1 = await Student.create({
            name: "Rakshitha",
            courses: [course1._id, course2._id]
        });

        const student2 = await Student.create({
            name: "Ramya",
            courses: [course2._id]
        });

        // update courses with students
        course1.students.push(student1._id, student2._id);
        course2.students.push(student2._id);

        await course1.save();
        await course2.save();

        console.log(await Student.find().populate('courses'));
        console.log(await Course.find().populate('students'));

    } catch (err) {
        console.log(err);
    } finally {
        await mongoose.disconnect();
        console.log("Db disconnected");
    }
}
main();