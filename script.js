const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 27, profession: "admin" },
];

// 1. Print Developers
function printDeveloper() {
  let developers = data.filter((professions) => professions.profession == 'developer');
  console.log(developers);

}

// 2. Add Data
function addData() {
  let new_Name = prompt('Enter name:');
  let new_Age = parseInt(prompt('Enter age:'));
  let new_Profession = prompt('Enter profession:');

  if (!new_Name || !(new_Age) || !new_Profession) {
      alert('Input invalid .Enter valid details.');
      return;
  }

    let newData = { name: new_Name, age: new_Age, profession: new_Profession };
    data.push(newData);
    console.log(data);

}

// 3. Remove Admins
function removeAdmin() {
  let removed_Data = data.filter((professions) => professions.profession != 'admin');
  console.log(removed_Data);

}

// 4. Concatenate Array
function concatenateArray() {
  let dummy_Data = [
    { name: "rahul", age: 34, profession: "designer" },
    { name: "rock", age: 25, profession: "admin" },
  ];
  let concatenated_Data = data.concat(dummy_Data);
  console.log(concatenated_Data);

}

// 5. Average Age
function averageAge() {
  let total_Age = data.reduce((sum, person) => sum + person.age, 0);
  let aver_Age = total_Age / data.length;
  console.log(aver_Age);

}

// 6. Age Check
function checkAgeAbove25() {
  let above_chaeck_Age = data.some((person) => person.age > 25);
  console.log(above_chaeck_Age);

}

// 7. Unique Professions
function uniqueProfessions() {
  let professions = [...new Set(data.map((person) => person.profession))];
  console.log(professions);

}

// 8. Sort by Age
function sortByAge() {
  let sorted_Data = [...data].sort((a, b) => a.age - b.age);
  console.log(sorted_Data);

}

// 9. Update Profession
function updateJohnsProfession() {
    let updated_Data = data.map((person) => {
    if (person.name == 'john') {
      return { ...person, profession: 'manager' };
    }
    return person;
  });
  console.log(updated_Data);

}

// 10. Profession Count
function getTotalProfessions() {
  let profession_Count = data.reduce((count, person) => {
    count[person.profession] = (count[person.profession] || 0) + 1;
    return count;
  }, {});
  console.log(profession_Count);

}
