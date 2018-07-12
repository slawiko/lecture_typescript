class User implements IUser {
  public name: string;
  public surname: string;
  public readonly role: UserRoles = UserRoles.Student;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  public print(): void {
    console.log(`${this.role} ${this.surname}, ${this.name}`);
  }

  public promisify(): Promise<User> {
    return Promise.resolve(this);
  }

  private asyncGetName(): Promise<string> {
    return this.promisify().then(user => {
      return user.name;
    });
  }

  private async asyncGetName2(): Promise<string> {
    const user = await this.promisify();
    return user.name;
  }
}
