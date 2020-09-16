window.onload = function () {
  let initialbus = [];

  if (localStorage.getItem("bus") == null) {
    localStorage.setItem("bus", JSON.stringify(initialbus));
  }
};

function display(superarray = undefined) {
  let tabledata = "";
  let bus;
  if (superarray == undefined) {
    bus = JSON.parse(localStorage.getItem("bus"));
  } else {
    bus = superarray;
  }

  bus.forEach(function (buses, index) {
    let currentrow = `<tr>
      <td>${index + 1}</td>
      <td>${buses.name}</td>
      <td>${buses.number}</td>
      <td>${buses.capacity}</td>
      <td>${buses.source}</td>
      <td>${buses.destination}</td>
      </tr>`;

    tabledata += currentrow;
  });

  document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
  //   document.getElementById("tdata").innerHTML = tabledata;
}

display();

function addBus(e) {
  e.preventDefault();
  let buses = {};
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let capacity = document.getElementById("capacity").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  buses.name = name;
  buses.number = number;
  buses.capacity = Number(cap);
  buses.source = source;
  buses.destination = dest;

  //   superheroes.push(superhero);

  let bus = JSON.parse(localStorage.getItem("bus"));
  bus.push(buses);
  localStorage.setItem("bus", JSON.stringify(bus));

  display();

  document.getElementById("name").value = "";
  document.getElementById("number").value = "";
  document.getElementById("capacity").value = "";
  document.getElementById("source").value = "";
  document.getElementById("destination").value = "";
}

function searchByName() {
  let searchValue = document.getElementById("searchName").value;
  let bus = JSON.parse(localStorage.getItem("bus"));
  let newdata = bus.filter(function (buses) {
    return (
      buses.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1
    );
  });

  display(newdata);
}



let updateIndex;

function copybus(index) {
  let bus = JSON.parse(localStorage.getItem("bus"));
  updateIndex = index;
  let buses = bus[index];

  document.getElementById("upname").value = buses.name;
  document.getElementById("upnumber").value = buses.number;
  document.getElementById("upcapacity").value = bu.capacity;
  document.getElementById("upsource").value = buses.source;
  document.getElementById("updestination").value = buses.destination;
}

function updatebus(e) {
  e.preventDefault();
  let bus = JSON.parse(localStorage.getItem("bus"));
  let buses = bus[updateIndex];
  console.log(buses);
  let name = document.getElementById("upname").value;
  let number = document.getElementById("upnumber").value;
  let capacity = document.getElementById("upcapacity").value;
  let source = document.getElementById("upsource").value;
  let destination = document.getElementById("updestination").value;
  bu.name = name;
  bu.number = number;
  bu.capacity = Number(capacity);
  bu.source = source;
  bu.destination = destination;

  localStorage.setItem("bus", JSON.stringify(bus));
  display(bus);

  // code for hiding from anywhere
  let modal = document.getElementsByClassName("modal")[0];
  modal.style.display = "none";
}
