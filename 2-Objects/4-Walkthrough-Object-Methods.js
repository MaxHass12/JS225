// let me = {
//   firstName: 'John',
//   lastName: 'Smith'
// };

let me = {};
me.firstName = 'John';
me.lastName = 'Smith';

function fullName(person) {
  console.log(person.firstName + ' ' + person.lastName);
}

let friend = {
  firstName: 'Jane',
  lastName: 'Dye',
};

let mother = {
  firstName: 'Amber',
  lastName: 'Doe',
};

let father = {
  firstName: 'Shane',
  lastName: 'Doe',
};

// fullName(me);
// fullName(friend);
// fullName(mother);
// fullName(father);

// let people = [];
// people.push(me);
// people.push(friend);
// people.push(mother);
// people.push(father);

// function rollCall(collection) {
//   for(let i = 0, length = collection.length; i < length; i++) {
//     fullName(collection[i]);
//   }
// }

// function rollCall(collection) {
//   collection.forEach(fullName);
// }



// rollCall(people);

let people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + ' ' + person.lastName);
  },

  rollCall: function() {
    this.collection.forEach(this.fullName);
  },

  add: function(person) {
    this.collection.push(person)
  },

  getIndex: function(person) {
    return this.collection.findIndex(elem => elem.firstName === person.firstName &&
                                             elem.lastName === person.lastName);
  },

  remove: function(person) {
    const index = this.getIndex(person);
    if (index === -1) return;

    this.collection.splice(index, 1);
  },
}

console.log(people.remove(friend));
