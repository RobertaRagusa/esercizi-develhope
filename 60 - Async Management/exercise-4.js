const persons = [
  {
    id: 1,
    firstName: "Mario",
    lastName: "Rossi",
    age: 25,
  },
  {
    id: 2,
    firstName: "Maria",
    lastName: "Verdi",
    age: 32,
  },
  {
    id: 3,
    firstName: "Giovanni",
    lastName: "Rossi",
    age: 35,
  },
];

const jobs = [
  {
    id: 1,
    jobTitle: "CEO",
  },
  {
    id: 2,
    jobTitle: "Project Manager",
  },
  {
    id: 3,
    jobTitle: "Developer",
  },
];

// core here
function fetchPersonById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const person = persons.find((item) => item.id === id);
      if (person) {
        return resolve(`${person.firstName} ${person.lastName}`);
      } else {
        reject(`Person with id: ${id} doesn't exist`);
      }
    }),
      1000;
  });
}

function fetchJobById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const job = jobs.find((item) => item.id === id);
      if (job) {
        return resolve(`${job.jobTitle}`);
      } else {
        reject(`Job with jobTitle: ${id} doesn't exist`);
      }
    }),
      1000;
  });
}

Promise.all([fetchPersonById(2), fetchJobById(2)])
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
