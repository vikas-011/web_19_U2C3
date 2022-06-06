// fill in javascript code here

document.querySelector("form").addEventListener("submit", myEvent)

function myEvent(event) {
    event.preventDefault();
    let name = document.querySelector("#name").value;
    let Employee = document.querySelector("#employeeID").value;
    let Department = document.querySelector("#department").value;
    let Experience = document.querySelector("#exp").value;
    let Email = document.querySelector("#email").value;
    let Mobile = document.querySelector("#mbl").value;

    console.log(name, Employee, Department, Experience, Email, Mobile);

    let tr = document.createElement("tr");

    let th1 = document.createElement("th");
    th1.innerText=name
    let th2 = document.createElement("th");
    th2.innerText=Employee
    let th3 = document.createElement("th");
    th3.innerText=Department
    let th4 = document.createElement("th");
    th4.innerText=Experience
    let th5 = document.createElement("th");
    th5.innerText=Email
    let th6 = document.createElement("th");
    th6.innerText=Mobile
    let th7 = document.createElement("th");
    // delete 
    let th8 = document.createElement("th");


    tr.append(th1, th2, th3, th4, th5, th6, th7, th8);
    document.querySelector("thead").append(tr);
}