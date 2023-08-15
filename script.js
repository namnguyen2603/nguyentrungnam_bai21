console.log("bài 1");
var errors = {
    name: {
        required: "Vui lòng nhập họ tên",
        min: "Họ tên phải từ 5 ký tự"
    },
    email: {
        email: "Định dạng email không hợp lệ",
        unique: "Email đã có người sử dụng",
        required: "Vui lòng nhập địa chỉ email"
    },
    password: {
        required: "Vui lòng nhập mật khẩu",
        same: "Mật khẩu phải khớp với mật khẩu nhập lại"
    }
}

function getError(field) {
    if (errors[field]) {
      return Object.values(errors[field])[0];
    } else {
      return "Lỗi này không tồn tại";
    }
  }
console.log( getError("password"));

console.log("bài 2");
function Customer(name, age, address) {
    this.name = name;
    this.age = age;
    this.address = address;
  }
  
function createCustomers(customers) {
    const newCustomers = customers.map((customer) => { 
        var fullName = customer.name.split(" ");
        var firstName = fullName[0];
        var lastName = fullName[fullName.length - 1];
        return {
            ...customer,
            shortName: firstName + " " + lastName,
        };
    });
    const arrangeCustomers = newCustomers.sort((a, b) => a.age - b.age);
    return arrangeCustomers;
}
  
const customers = [
    { name: "Nguyễn Văn An", age: 11, address: "Ha Noi" },
    { name: "Nguyễn Văn Ba", age: 22, address: "Hai Phong" },
    { name: "Nguyễn Văn Ca", age: 12, address: "TP.HCM" },
  ];
  
const result = createCustomers(customers);
console.log(result);




console.log("bài3");
function User(name, password, email) {
    this.name = name;
    this.password = password;
    this.email = email;
    this.role = "user";
}

function handleRegister(name, password, email) {
    const newUser = new User(name, password, email);
    data.push(newUser);
    return newUser;
}
  
function handleLogin(email, password) {
    for (let i = 0; i < data.length; i++) {
      const user = data[i];
      if (user.email === email && user.password === password) {
        return user;
      }
    }
    console.log("Thông tin đăng nhập không hợp lệ");
}
  
const data = [];
const dataRegister1 = handleRegister(
    "Nguyen Van A",
    "123456",
    "nguyenvana@email.com"
  );
const dataRegister = handleRegister(
    "Nguyen Van B",
    "1234567",
    "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvana@email.com", "123456");

console.log(data);
console.log(dataLogin);


