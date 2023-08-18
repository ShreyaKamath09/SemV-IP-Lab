// Prototypal Inheritance
const Person = {
    initialize(name) {
      this.name = name;
    },
    greet() {
      console.log(`Hello, I'm ${this.name}.`);
    }
  };
  
  // Single Inheritance 
  const StudentProto = Object.create(Person);
  const Student = Object.create(StudentProto);
  Student.initStudent = function(name, major) {
    this.initialize(name);
    this.major = major;
  };
  Student.greet = function() {
    console.log(`Hi, I'm ${this.name} and I'm studying ${this.major}.`);
  };
  
  // Multi-level Inheritance
  const GraduateStudentProto = Object.create(Student);
  const GraduateStudent = Object.create(GraduateStudentProto);
  GraduateStudent.initGraduateStudent = function(name) {
    this.initStudent(name, 'IT');
  };
  GraduateStudent.greet = function() {
    console.log(`I'm ${this.name}, an undergraduate student in ${this.major}.`);
  };
  
  //Classical Inheritance using constructor functions
  function Study(name) {
    this.name = name;
  }
  Study.prototype.read = function() {
    console.log(`${this.name} is studying IP.`);
  };
  
  // Creating instances
  console.log('Single Inheritance:');
  const studentInstance = Object.create(Student);
  studentInstance.initStudent('Shreya', 'Information Technology');
  studentInstance.greet();
  
  console.log('Multi-Level Inheritance:');
  const gradStudentInstance = Object.create(GraduateStudent);
  gradStudentInstance.initGraduateStudent('Shreya');
  gradStudentInstance.greet();
  
  console.log('Classical Inheritance using Constructor:');
  const shreya = new Study('Shreya');
  shreya.read();
  