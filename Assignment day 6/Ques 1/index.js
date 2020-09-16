let CSE = [{
    name: "Manmeet",
    age: 35,
    city: "Jalandhar",
    salary: "15000",
  },
  {
    name: "Manraj",
    age:25 ,
    city: "Delhi",
    salary: "5100",
  },
  {
    name: "Kawalpreet",
    age: 31,
    city: "Phagwara",
    salary: "6000",
  },
  {
    name: "Rajnaz",
    age:21 ,
    city: "Mumbai",
    salary: "5100",
  },
  {
    name: "Manseerat",
    age:25 ,
    city: "hoshiarpur",
    salary: "5100",
  },
];
  
  function display(superarray) {
    let tabledata = "";
  
    superarray.forEach(function (btech, index) {
      let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${btech.name}</td>
      <td>${btech.age}</td>
      <td>${btech.city}</td>
      <td>${btech.salary}</td>
      <td>
      <button onclick='deletebtech(${index})'>delete</button>
      </td>
      </tr>`;
  
      tabledata += currentrow;
    });
  
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
    
  }
  
  display(CSE);
  
  function addSuper(e) {
    e.preventDefault();
    let btech = {};
    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let city = document.getElementById("city").value;
    let salary = document.getElementById("salary").value;
    btech.name = name;
    btech.age = Number(age);
    btech.city = city;
    btech.salary = salary;
  
   CSE.push(btech);
  
    display(CSE);
  
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
    document.getElementById("city").value = "";
    document.getElementById("salary").value = "";
  }
  
  function searchByName() {
    let searchValue = document.getElementById("searchName").value;
  
    let newdata = CSE.filter(function (btech) {
      return (
        btech.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
      );
    });
  
    display(newdata);
  }
  
  function deletebtech(index) {
    CSE.splice(index, 1);
    display(CSE);
  }
  
  let updateIndex;
  
  function copybtech(index) {
    updateIndex = index;
    let btech = CSE[index];
  
    document.getElementById("upname").value = btech.name;
    document.getElementById("upage").value = btech.age;
    document.getElementById("upcity").value = btech.city;
    document.getElementById("upsalary").value = btech.salary;
  }
  
  function updatebtech(e) {
    e.preventDefault();
    let btech =CSE[updateIndex];
    console.log(btech);
    let name = document.getElementById("upname").value;
    let age = document.getElementById("upage").value;
    let city = document.getElementById("upcity").value;
    let salary = document.getElementById("upsalary").value;
    btech.name = name;
    btech.age = Number(age);
    btech.city = city;
    btech.salary = salary;
    console.log(btech);
  
    display(cse);
  
    // code for hiding from anywhere
    let modal = document.getElementsByClassName("modal")[0];
    modal.style.display = "none";
  }