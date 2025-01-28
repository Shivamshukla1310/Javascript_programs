function Person (first, last, age, designation){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.designation = designation;
}
const myFather = new Person("Vinay", "Shukla", 45, "Corporate Employee");
console.log(myFather);
const myMother = new Person("Aarti", "Shukla", 39, "Teacher");
console.log(myMother);
const myBrother = new Person("Satyam", "Shukla", 19, "Student");
console.log(myBrother);
const mySister = new Person("Pari", "Pandey", 11, "Student");
console.log(mySister);