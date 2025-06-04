let ammount = document.querySelector(".ammount");
let productName = document.querySelector(".productName");
let productprize = document.querySelector(".productPrize");
let noofproduct = document.querySelector(".numberofpr");
let avbalance = document.querySelector(".avbalance");
let expensestable = document.querySelector(".expensestable");
let tabledataprize = document.querySelector(".tabledataprize");
let tabledatano = document.querySelector(".tabledatano");
let totalbtn = document.querySelector(".totalprize");
let totaldisplay = document.querySelector(".distotalprice");
let totalexbtn = document .querySelector(".totoalexpenses");
let tabledataname = document.querySelector(".tabledataname");
let addbtn =document.querySelector(".addtabledata");
let month =document.querySelector("tabledataname");
let totalmonthex = document.querySelector(".tabledatateoy");
let tatalmonthsav = document.querySelector(".tabledatateoy")
let date = document.querySelector(".date");

let checkbtn =document.querySelector(".check")

date.max=new Date().toLocaleDateString('fr-ca')
function handelexpenses(){
    let totalPrize = (productprize.value * noofproduct.value);
    let totalexpenses =(ammount.value-totalPrize )
avbalance.innerHTML = totalexpenses;
if (totalexpenses===0) {
    alert("FILL ALL THE REQUIRED FIELD") ;
    avbalance.innerHTML=""       
        }
}
function handeltotal() {
    
    let totalPrize = (productprize.value * noofproduct.value);
    totaldisplay.innerHTML = totalPrize
    if (totalPrize===0) {
alert("FILL ALL THE REQUIRED FIELD") ;
totaldisplay.innerHTML=""       
    }
}
totalbtn.addEventListener("click", handeltotal);
totalexbtn.addEventListener("click", handelexpenses);
addbtn.addEventListener("click",handeltabledata);
function handeltabledata() {
    let totalPrize = (productprize.value * noofproduct.value);
    let totalexpenses =(ammount.value-totalPrize )
    let newRow = document.createElement("tr");
    let dateCell = document.createElement("td");
    let nameCell = document.createElement("td");
    let prizeCell = document.createElement("td");
    let noCell = document.createElement("td");
    if (totalexpenses===0) {
        alert("FILL ALL THE REQUIRED FIELD") ;
        newRow.removeChild();       
            }
    if (date && productName && productprize && noofproduct) {
        dateCell.textContent = date.value;
        nameCell.textContent = productName.value;
        prizeCell.textContent = productprize.value;
        noCell.textContent = noofproduct.value;

        newRow.appendChild(dateCell);
        newRow.appendChild(nameCell);
        newRow.appendChild(prizeCell);
        newRow.appendChild(noCell);

        expensestable.appendChild(newRow);

 
        let tableData = [];
        let rows = expensestable.rows;
        for (let i = 1; i < rows.length; i++) {
            let row = rows[i];
            let cells = row.cells;
            if (cells.length > 3) {
                let rowData = {
                    date: cells[0].textContent,
                    name: cells[1].textContent,
                    prize: cells[2].textContent,
                    no: cells[3].textContent
                };
                tableData.push(rowData);
            }
        }
        localStorage.setItem("tableData", JSON.stringify(tableData));
    } else {
        console.error("Elements not found");
    }
}

function loadTableData() {
    let tableData = localStorage.getItem("tableData");
    if (tableData) {
        tableData = JSON.parse(tableData);
        for (let i = 0; i < tableData.length; i++) {
            let rowData = tableData[i];
            let newRow = document.createElement("tr");
            let dateCell = document.createElement("td");
            let nameCell = document.createElement("td");
            let prizeCell = document.createElement("td");
            let noCell = document.createElement("td");
            let removeCell = document.createElement("td");

            dateCell.textContent = rowData.date;
            nameCell.textContent = rowData.name;
            prizeCell.textContent = rowData.prize;
            noCell.textContent = rowData.no;

            let removeButton = document.createElement("button");
            removeButton.textContent = "Remove";
            removeButton.addEventListener("click", function() {
                let tableData = localStorage.getItem("tableData");
                if (tableData) {
                    tableData = JSON.parse(tableData);
                    tableData.splice(i, 1);
                    localStorage.setItem("tableData", JSON.stringify(tableData));
                    newRow.remove();
                }
            });
            removeCell.appendChild(removeButton);

            newRow.appendChild(dateCell);
            newRow.appendChild(nameCell);
            newRow.appendChild(prizeCell);
            newRow.appendChild(noCell);
            newRow.appendChild(removeCell);

            expensestable.appendChild(newRow);
        }
    }
}


loadTableData();


let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let totalExpensesTable = document.createElement("table");
totalExpensesTable.style.width = "100%";
totalExpensesTable.style.borderCollapse = "collapse";
let totalExpensesTableBody = document.createElement("tbody");
totalExpensesTable.appendChild(totalExpensesTableBody);
document.body.appendChild(totalExpensesTable);
let totalsavingTable = document.createElement("table");
totalsavingTable.style.width = "100%";
totalsavingTable.style.borderCollapse = "collapse";
let totalsavingTableBody = document.createElement("tbody");
totalsavingTable.appendChild(totalsavingTableBody);
document.body.appendChild(totalsavingTable);

function calculateTotalExpensesAndSavingsByMonth() {
    let tableData = localStorage.getItem("tableData");
    if (tableData) {
        tableData = JSON.parse(tableData);
        for (let i = 0; i < months.length; i++) {
            let month = months[i];
            let totalExpenses = 0;
            for (let j = 0; j < tableData.length; j++) {
                let rowData = tableData[j];
                let date = new Date(rowData.date);
                if (date.getMonth() === i) {
                    let prize = rowData.prize;
                    let no = rowData.no;
                    if (!isNaN(prize) && !isNaN(no)) {
                        totalExpenses += parseFloat(prize) * parseFloat(no);
                    }
                }
            }
            let newRow = document.createElement("tr");
            let monthCell = document.createElement("td");
            let totalExpensesCell = document.createElement("td");
            monthCell.textContent = month;
            totalExpensesCell.textContent = totalExpenses;
            newRow.appendChild(monthCell);
            newRow.appendChild(totalExpensesCell);
            totalExpensesTableBody.appendChild(newRow);
        }
    }
}

calculateTotalExpensesAndSavingsByMonth();
 checkbtn.addEventListener("click",function(){
    
    window.location.reload();
 })