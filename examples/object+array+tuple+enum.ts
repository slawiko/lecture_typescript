const alias: string = 'Shket';
const test: boolean = false;

// Object
const person: Object = {
  role: 'Admin',
  name: 'Grigoriy',
  surname: 'Phantom'
};

// Array
const everything: Array<string|Object> = [alias, person];
everything["0"].substr(2);
everything["1"].toExponential();

// Tuple
const info: [string, Object] = [alias, person];
info["0"].substr(2);
// info["1"].toExponential();

// Enum
const enum UserRoles {
  Student = 'student',
  Teacher = 'teacher',
  Admin = 'admin'
}

const refactorePerson: Object = {
  role: UserRoles.Student,
  name: 'Grigoriy',
  surname: 'Phantom'
};
