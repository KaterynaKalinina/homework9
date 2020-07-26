const grades = {
  Junior: 'junior',
  Middle: 'middle',
  Senior: 'senior',
};

const bonuses = {
  'C++': 100,
  Rust: 150,
  default: 50,
};

const gradeTax = {
  [grades.Junior]: 0.25,
  [grades.Middle]: 0.5,
  [grades.Senior]: 0.75,
};

const penalty = {
  lateForWork: 10,
  missedMeeting: 20,
  missedDeadline: 100,
  rudeToCustomer: 300,
};

function User(name, language, grade = grades.Junior) {
  this.name = name;
  this.grade = grade;
  this.salary = 1000;
  this.language = language;
  this.tasks = 0;
  this.finishedTasks = 0;

  this.addTask = () => {
    this.tasks++;
  };

  this.finishTask = () => {
    if (this.tasks > 0) {
      this.tasks--;
      this.salary +=
        (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
      }
      this.finishedTasks++;
  };

  this.upgrade = () => {
    if (this.finishedTasks >= 5) {
      
      if (this.grade === grades.Junior) {
        this.grade = grades.Middle;
      } else {
        this.grade = grades.Senior;
      };

    } else {
      console.log('Not enough finished tasks');
    };
  };

  this.fine = (penaltyName) => {
    this.salary -= penalty[penaltyName];
  };

}

const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Nifertiti', 'Bu', grades.Middle);

user.addTask();
user.addTask();
user.addTask();
user.addTask();
user.addTask();

user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
user.finishTask();
console.log(user);
user.upgrade();
user.fine('rudeToCustomer');
console.log(user);

user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();
user1.addTask();

user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
user1.finishTask();
console.log(user1);
user1.upgrade();
user1.fine('rudeToCustomer');
console.log(user1);

user2.addTask();
user2.addTask();
user2.addTask();
user2.addTask();
user2.addTask();

user2.finishTask();
user2.finishTask();
user2.finishTask();
user2.finishTask();
user2.finishTask();
console.log(user2);
user2.upgrade();
user2.fine('rudeToCustomer');
console.log(user2);