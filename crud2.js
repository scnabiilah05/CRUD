
// console.log(fName, "ini valuenya");
// console.log(lName, "ini valuenya2");
// const fName = document.getElementById ('FirstName').value;
// // let value = fName.attribute[0].value;
// const lName = document.getElementById ('LastName');
// const age = document.getElementById ('Age');
// const depart = document.getElementById('Depart');
let editIndex = null


// 
const employee = [{
    FirstName : "Scha", LastName : "Nabiilah", Age : "23", Depart : "ITMT"
},{
    FirstName : "Bagus", LastName : "Khoir", Age : "24", Depart : "ITMT"
}, {
    FirstName : "Hilwa", LastName : "Salsabila", Age : "23", Depart :
    "ITMT"
}]

// console.log(employee.FirstName);
// read
function TableDataEmployee(){
 
    const bodyTable = document.getElementById('tableBody')
    let tableList = ""
    employee.forEach(function (x, index) {
        tableList += `<tr> 
        <td>${x.FirstName}</td>
        <td>${x.LastName}</td>
        <td>${x.Age}</td>
        <td>${x.Depart}------index: ${index}</td>
        <td> <button class = "delete" data-value="${index}"> Hapus</button>
        <button class = "update" data-value="${index}" onclick="TableUpdate(${index})"> Edit </button>
        <button class="logbtn" data-value="${index}" onclick="console.log(index)"> Check </button>  </td>
        </tr>`
    })
    
    bodyTable.innerHTML = tableList
    DeleteDataEmployee()
// console.log(employee,'fxgxf'); 
         
}
// delete
function DeleteDataEmployee(){
	const btnDelete = document.querySelectorAll(".delete")
    btnDelete.forEach(x => {
    x.addEventListener('click', (e) => {
    	if(confirm('Sure to delete this student?')){
            const valueIndex = e.target.dataset.value
            console.log(valueIndex, 'wk')
            employee.splice(valueIndex, 1)
            // DeleteDataEmployee()
            TableDataEmployee()
		}
    })
  })
}
// create
const btnSubmit = document.getElementById('Submit')


btnSubmit.addEventListener('click', function () {
    const fName = document.getElementById("FirstName").value
    const lName = document.getElementById("LastName").value
    const age = document.getElementById("Age").value
    const depart = document.getElementById("Depart").value

    console.log(fName,lName,age,depart);
    employee.push({
        FirstName : fName,
        LastName : lName,
        Age : age,
        Depart : depart
    })
    TableDataEmployee() 
})

// display update
function TableUpdate(editdata){
    const updateEmployee = employee[editdata];
    const fNameUp = document.getElementById("FirstNameUp")
    const lNameUp = document.getElementById("LastNameUp")
    const ageUp = document.getElementById("AgeUp")
    const departUp = document.getElementById("DepartUp")

    fNameUp.value = updateEmployee.FirstName
    lNameUp.value = updateEmployee.LastName
    ageUp.value = updateEmployee.Age
    departUp.value= updateEmployee.Depart

    editIndex= editdata
}

// console.log(TableUpdate, "ini table update")


// display

// btnSubmit.addEventListener('click', function () {


    // console.log(fName,lName,age,depart);
//     employee.push({
//         FirstName : fName,
//         LastName : lName,
//         Age : age,
//         Depart : depart
//     })
//     TableDataEmployee() 
// })

const btnUpdate = document.getElementById("Upgrade")
btnUpdate.addEventListener('click', function (){
    const saveFname = document.getElementById("FirstNameUp")
    const saveLname = document.getElementById("LastNameUp")
    const saveAge = document.getElementById("AgeUp")
    const saveDepart = document.getElementById("DepartUp")

    employee[editIndex].FirstName= saveFname.value
    employee[editIndex].LastName= saveLname.value
    employee[editIndex].Age= saveAge.value
    employee[editIndex].Depart= saveDepart.value

    console.log(employee, 'employee')

    TableDataEmployee()
})


TableDataEmployee()