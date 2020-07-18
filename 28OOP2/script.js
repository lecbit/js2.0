let user = {
  username : "Andrey",
  email: "ldfg@mail.com",
  _password: "",
  set password(pass)
  {
    this._password = pass.trim();
  },
  get password()
  {
    return this._password;
  }
}

user.password = "   qwerty";
console.log(user);
console.log(user.password);

let user2 = {};
user2._proto_ = user;
user2.username = "Mikel";
user2.password = "  asdqwe  ";

console.log(user2._proto_.email);