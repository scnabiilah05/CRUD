// const obj = { name :["shofi", "fitri", "ari", "bagus", "nabiilah", "illa"], weeks : [16, 15, 14, 8, 7, 5], age : [24, 22, 23, 24, 23, 23]};

// const NameShofi = obj.name[0]
// console.log(NameShofi);

let editIndex = null
const btnSubmit = document.getElementById("Submit")
const btnUpdate = document.getElementById("Upgrade")


btnUpdate.addEventListener('click', function(){
    object.update(editIndex)
})
// 
// const employee = [{
//     FirstName : "Scha", LastName : "Nabiilah", Age : "23", Depart : "ITMT"
// },{
//     FirstName : "Bagus", LastName : "Khoir", Age : "24", Depart : "ITMT"
// }, {
//     FirstName : "Hilwa", LastName : "Salsabila", Age : "23", Depart :
//     "ITMT"
// }]


const object = {
    tableEmployee : [{
        FirstName : "Scha", LastName : "Nabiilah", Age : "23", Depart : "ITMT"},{
        FirstName : "Bagus", LastName : "Khoir", Age : "24", Depart : "ITMT"},{
        FirstName : "Hilwa", LastName : "Salsabila", Age : "23", Depart :"ITMT"
    }],
    
    read : function TableDataEmployee(){
        const bodyTable = document.getElementById('tableBody')
        let tableList = ""
        this.tableEmployee.forEach(function (x, index) {
            tableList += `<tr> 
            <td>${x.FirstName}</td>
            <td>${x.LastName}</td>
            <td>${x.Age}</td>
            <td>${x.Depart}</td>
            <td> <button class = "delete" data-value="${index}"> Hapus</button>
            <button class = "update" data-value="${index}" onclick="object.disUpdate(${index})"> Edit </button> </td>
            </tr>`
        })
        bodyTable.innerHTML = tableList
        // DeleteDataEmployee()
    }, 
    delete : function DeleteDataEmployee(){
        const btnDelete = document.querySelectorAll(".delete")
        btnDelete.forEach(x => {
        x.addEventListener('click', (e) => {
            if(confirm('Sure to delete this student?')){
                const valueIndex = e.target.dataset.value
                console.log(valueIndex, 'wk')
                this.tableEmployee.splice(valueIndex, 1)
                DeleteDataEmployee()
                object.read()
            }
        })
      }) 
    },
    create : function(){
        btnSubmit.addEventListener('click', function (editdata) {
        const fName = document.getElementById("FirstName").value
        const lName = document.getElementById("LastName").value
        const age = document.getElementById("Age").value
        const depart = document.getElementById("Depart").value
        console.log(object.tableEmployee, "ini dia")
        // const editCreate = ""
        console.log(fName,lName,age,depart);
        object.tableEmployee.push({
            FirstName : fName,
            LastName : lName,
            Age : age,
            Depart : depart
        })

        object.read()
        // object.TableDataEmployee(editIndex)
        console.log(object.tableEmployee, "ini dia")
    })
    
    },
    disUpdate : function TableUpdate(editdata){
        const updateEmployee = object.tableEmployee[editdata];
        const fNameUp = document.getElementById("FirstNameUp")
        const lNameUp = document.getElementById("LastNameUp")
        const ageUp = document.getElementById("AgeUp")
        const departUp = document.getElementById("DepartUp")
    
        fNameUp.value = object.tableEmployee[editdata].FirstName
        lNameUp.value = updateEmployee.LastName
        ageUp.value = updateEmployee.Age
        departUp.value= updateEmployee.Depart

        console.log(fNameUp.value, lNameUp.value)
    
        editIndex= editdata
        console.log(editdata, "ini edit data");
    },

    update : function(editdata){
        const saveFname = document.getElementById("FirstNameUp")
        const saveLname = document.getElementById("LastNameUp")
        const saveAge = document.getElementById("AgeUp")
        const saveDepart = document.getElementById("DepartUp")

        editIndex = editdata
        object.read[editIndex].FirstName= saveFname.value
        this.tableEmployee[editIndex].LastName= saveLname.value
        this.tableEmployee[editIndex].Age= saveAge.value
        this.tableEmployee[editIndex].Depart= saveDepart.value
    
        console.log(object.read[editIndex].FirstName, 'employee')
    
        object.read()
    },
    // RefreshTable :  TableDataEmployee()

    // callback : function(){
    //     this.read()

    
}

const callRead =  object.read()