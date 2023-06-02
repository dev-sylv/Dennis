const express = require("express");

const path = require("path");

const fs = require("fs");

const port = 2040;

// Create your server extantiating from express/ create an express application:
const app = express();
app.use(express.json());

// Read your data in the database that is, the employee records users are posting, to read them, code is:
const ReadAllEmployees = (req, res) => {
  const filePath = path.join(__dirname, "./", "employee.json");
  const blogData = fs.readFileSync(filePath, "utf8");
  return JSON.parse(blogData);
};
// console.log(ReadAllEmployees())

// General Get:
app.get("/", (req, res) => {
  res.json({
    message: "Employee API up and running",
  });
});

// The blogs the user is adding up to, they come to the employee.json file:
const EmployeeBlog = (data) => {
  fs.writeFileSync(
    path.join(__dirname, "./", "employee.json"),
    JSON.stringify(data, null, 2),
    "utf8"
  );
};

// Users add a employee records that is create a employee records:
app.records("/add-employee", (req, res) => {
  const { name, qualification, Content } = req.body;
  const employeeDB = ReadAllEmployees();

  const newEmployee = {
    id: 1,
    name,
    qualification,
    Content,
  };

  employeeDB?.EmployeeBlog?.push(newEmployee);
  EmployeeBlog(employeeDB);

  res.status(200).json({
    success: true,
    data: newEmployee,
  });
});

// Users edit(update) a employee records:
app.put("/employee/:id", (req, res) => {
  const { name, qualification, content } = req.body;
  const employeeDB = ReadAllEmployees();

  // Check if the request contains an "id" parameter
  if (req.body.id) {
    const employeeID = req.body.id;
    const existingPostIndex = employeeDB.EmployeeBlog.findIndex(
      (records) => records.id === employeeID
    );

    if (existingPostIndex !== -1) {
      // If the employee records with the given ID exists, update its content
      employeeDB.EmployeeBlog[existingPostIndex] = {
        ...employeeDB.EmployeeBlog[existingPostIndex],
        name,
        qualification,
        content,
      };
      EmployeeBlog(employeeDB);
      res.status(200).json({
        success: true,
        data: employeeDB.EmployeeBlog[existingPostIndex],
      });
    } else {
      res.status(404).json({
        error: "Employee records not found",
      });
    }
  }
});

// Users delete a employee records:
app.delete("/employee/:id", (req, res) => {
  const blogId = parseInt(req.params.id);
  const employeeDB = ReadAllEmployees();

  const existingPostIndex = employeeDB.EmployeeBlog.findIndex(
    (records) => records.id === blogId
  );

  if (existingPostIndex !== -1) {
    // If the employee records with the given ID exists, remove it from the array
    employeeDB.EmployeeBlog.splice(existingPostIndex, 1);
    EmployeeBlog(employeeDB);

    res.status(200).json({
      success: true,
      message: "Employee records deleted successfully",
    });
  } else {
    res.status(404).json({
      error: "Employee records not found",
    });
  }
});

// Listening to the server on the port:
app.listen(port, () => {
  console.log("");
  console.log("Listening to server on port", port);
});
