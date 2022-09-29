
const school = {
  teachers: [
  { id: 1, name: "Pinchas", subjects: ["chemistry", "biology", "physics"], students: [], capacityLeft: 3 },
  { id: 2, name: "Williams", subjects: ["history", "ethics"], students: [], capacityLeft: 2 },
  ],
  students: [
  { id: 10, name: "Jennifer", age: 20 },
  { id: 11, name: "Howard", age: 23 },
  { id: 12, name: "Old-Timmy", age: 86 },
  { id:13, name: "Houston", age: 21 },
  ],

  test: `hello`,

  findPerson: (type, id) => {
    return type.find((person) => {
      return person.id == id;
    });
  },

  assignStudent: (students, subject) => {
    // let teacher = findSubject(this.teachers, subject);
    let teacher = this[this.teachers];
    console.log(teacher);
  }
};

function findSubject(type, subject) {
  return type.find((person) => {
    return person.name == subject;
  });
}

let tmp = findSubject(school.teachers, `Pinchas`);

// console.log(tmp.subjects.includes(`biology`));

// console.log(school.findPerson(school.students, 12));

school.assignStudent(school.teachers, `biology`);