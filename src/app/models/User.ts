export class User{
  // tslint:disable-next-line:variable-name
  public _id: string;
  public nombres: string;
  public apellidos: string;
  public email: string;
  public password: string;
  public role: string;

    constructor(id, nombres, apellidos, email, password, role){
      this._id = id;
      this.nombres = nombres;
      this.apellidos = apellidos;
      this.email = email;
      this.password = password;
      this.role = role;
    }
}
