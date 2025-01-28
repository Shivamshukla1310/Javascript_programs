function Person (first, last, age, designation){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.designation = designation;
}
const myFather = new Person("Vinay", "Shukla", 51, "Corporate Employee");
console.log(myFather);
const myMother = new Person("Aarti", "Shukla", 48, "Teacher");
console.log(myMother);
const myBrother = new Person("Satyam", "Shukla", 18, "Student");
console.log(myBrother);
const mySister = new Person("Pari", "Pandey", 16, "Student");
console.log(mySister);