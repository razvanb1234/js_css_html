function sumTo(n) {
    if (n <= 0) {
        return n + " Less or equal than 0"
    }
    else {
        let sum = 0;
        let x = 0;
        for (x; x <= n; x++) sum = x + sum;
        return sum;
    }
}
var employee = {
    firstName: "Ion",
    lastName: "Popescu",
    jobTitle: "engineer",
    department: "EA",
    birthYear: 1985,
    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}
window.alert(employee.firstName + " " + employee.lastName + " is an " + employee.jobTitle + " in our " + employee.department );

window.alert(employee.getFullName());

const h1= document.getElementById("h1");

let capat= " JavaScript demo";
h1.innerHTML = capat;

const p= document.getElementById("p");

let paragraf= "lorem ipsumjksadnaskn";
p.innerHTML = paragraf;

const p2= document.getElementById("p2");

let paragraf2= "lorem ipsumjksadnaskn";
p2.innerHTML = paragraf2;