let data = [
  {
    ID: 101,
    Name: "shadab",
    Email: "shadab@gmail.com",
    Password: 111111,
    City: "kanpur",
    Role: "guest",
  },
  {
    ID: 102,
    Name: "sheeban",
    Email: "sheeban@gmail.com",
    Password: 222222,
    City: "lucknow",
    Role: "guest",
  },
  {
    ID: 103,
    Name: "kaif",
    Email: "kaif@gmail.com",
    Password: 333333,
    City: "delhi",
    Role: "Admin",
  },
];

$(document).ready(function () {
  $("#get").click(function () {
    var name = $("#userName").val();
    var pass = $("#passWord").val();

    var str = "Welcome Admin Kaif";
    var str2 = "Welcome user";

    name = name.toLowerCase();

    var table =
      "<table><tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th><th>City</th><th>Role</th></tr>";
    data.forEach((element) => {
      if (name === "kaif" && pass == element.Password) {
        document.getElementById("output").innerHTML = str;
        table +=
          "<tr><td>" +
          element.ID +
          "</td><td>" +
          element.Name +
          "</td><td>" +
          element.Email +
          "</td><td>" +
          element.Password +
          "</td><td>" +
          element.City +
          "</td><td>" +
          element.Role +
          "</td></tr>";
      } else if (name == element.Name && pass == element.Password) {
        document.getElementById("output").innerHTML = str2;
      }
    });

    table += "</table>";

    document.getElementById("res").innerHTML = table;
  });
});
