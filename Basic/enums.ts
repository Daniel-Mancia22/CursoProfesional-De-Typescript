//Para guardar variables estaticas y que no cambien su valor
enum User {
    NormalUser,
    SuperUser,
    AdminUser,
    SuperAdminUser
}

const myUser = User.AdminUser;
console.log(myUser); // 2