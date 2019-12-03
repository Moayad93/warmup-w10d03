const mongoose = require("mongoose");
const Student = require("./Student.js");
const db = mongoose.connection;
const mongoURI = "mongodb://localhost:27017/students";

mongoose.connect(
  mongoURI,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  () => {
    console.log("the connection with mongod is established");
  }
);

const studentsNames = [
  "Abdullah Altamimi",
  "Abdulrahman Alfouzan",
  "Abdulrahman Aljammaz",
  "Abdulrahman Alshabibi",
  "Abdulwahhab AlBallaa",
  "Aisha Dabbagh",
  "Dalia Abdullah",
  "Fahad Abdullah",
  "Hisham Aljahbli",
  "Joseph Rulo",
  "Lama Alyousef",
  "Lamees Alfallaj",
  "Mesfer AlQahtani",
  "Moayad Alnuwaysir",
  "Mohammed Almarri",
  "Mohammed Alofaysan",
  "Muhannad Alanazi",
  "Muneera Bin Hotan",
  "Nawal Bin Dawood",
  "Noura Albukhaite",
  "Nouf Almatroudi",
  "Obaid Alqahtani",
  "Osama Alruthaya",
  "Raje Alharthi",
  "Sager Alarifi",
  "Sara Alghannamy",
  "Sarah Alghofaili",
  "Saud Alshamsi",
  "Sumayah Ali"
];

const studentsObjects = studentsNames.map(student => {
  return { name: student };
});

// // Populate Database with studentsObjects + Comment it out so it does not make duplicates of data.
// Student.insertMany(studentsObjects, (error, students) => {
//   error ? console.error() : console.log("added provided students data", students);
//   db.close();
// });

// // Print all students names
// Student.find({}, "name -_id", (error, students) => {
//   error ? console.error(): console.log(students);
//   db.close();
// });

// // Update `Saud Alshamsi` and `Lamees Alfallaj` attendance to false
// Student.updateMany(
//   { name: { $in: ["Saud Alshamsi", "Lamees Alfallaj"] } },
//   { Attendance: false },
//   { new: true },
//   (error, students) => {
//     error ? console.error() : console.log(students);
//     db.close();
//   }
// );

// // Remove 'Joseph Rulo'
// Student.deleteOne({ name: "Joseph Rulo" }, (error, student) => {
//   error ? console.error(): console.log(student);
//   db.close();
// });
