let employeesPromise = fetch("http://localhost:3000/employees");

employeesPromise.then((resp) => {
  resp.json().then((employees) => {
    console.log(employees);
    let table = renderTable(employees);
    document.getElementById("app").innerHTML = table;
  });
});

function renderTable(employees) {
  let rows = employees.map((employee) => {
    return `<tr><td>${employee.id}</td><td>${
      employee.name
    }</td><td>${NumberFormat(employee.salary)}</td></tr>`;
  });

  return `<table>${rows.join("")}</table>`;
}

let formatter = Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

const NumberFormat = (number) => {
  return formatter.format(number);
};
