interface IUser {
  name: string;
  surname: string;
  studiedAt?: HighSchool;
  graduatedAt?: number;

  readonly role: UserRoles;
}

interface HighSchool {
  name: string;
  abbr: string;
}

function printUser(user: IUser): void {
  // user.role = UserRoles.Student;
  console.log(user);
}

function updateUser(user: IUser, ...args: any[]): IUser {
  const clone = Object.assign({}, user, { isDumb: false });
  // clone.alias = 'Shket';
  return clone;
}

interface ProtectedArrayOfStrings extends Array<string> {
  readonly [index: number]: string;
}

const pArr: ProtectedArrayOfStrings = ['first', 'second', 'third'];
console.log(pArr[0]);
// pArr[2] = 'tird';
pArr.push('str');

// Extends
interface Admin extends IUser {
  isDumb: boolean;
}

const a: Admin = {
  name: '',
  surname: '',
  role: UserRoles.Admin,
  isDumb: false
}
