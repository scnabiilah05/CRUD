const bodyTable = document.getElementById('tableBody')
const btnSubmit = document.getElementById('Submit')
const btnUpdate = document.getElementById('Update')
let editIndex = ""
// let editIndexUp = ""

// input display update
const fNameUp = document.getElementById("FirstNameUp")
const lNameUp = document.getElementById("LastNameUp")
const ageUp = document.getElementById("AgeUp")
const departUp = document.getElementById("DepartUp")

// update edit




const employee = [{
    FirstName : "Scha", LastName : "Nabiilah", Age : "23", Depart : "ITMT"
},{
    FirstName : "Bagus", LastName : "Khoir", Age : "24", Depart : "ITMT"
}, {
    FirstName : "Hilwa", LastName : "Salsabila", Age : "23", Depart :
    "ITMT"
}]

const controller = {
    // read
    TableDataEmployee(){
        let tableList=""
        employee.forEach((x,index) => {
            sum = `<tr> 
            <td>${x.FirstName}</td>
            <td>${x.LastName}</td>
            <td>${x.Age}</td>
            <td>${x.Depart}</td>
            <td> <button class = "delete" data-index="${index}"> Hapus</button>
            <button class = "update" data-index="${index}" onclick="controller.DisplayEdit(${index})"> Edit </button> </td>
            </tr>`
            tableList += sum
        })
        bodyTable.innerHTML = tableList
        // console.log(sum)

        const btnDelete = document.querySelectorAll('.delete')

        for (i =0; i < btnDelete.length ; ++i) {
            btnDelete[i].onclick = (e) => {
                if(confirm('Are you sure to delete this ?')){
                    const value = e.target.dataset.index
                    // console.log(value, 'tombol delete')
                    this.DeleteDataEmployee(value)
                } 
            }
        }    
    },

    // delete
    DeleteDataEmployee(index) {
        employee.splice(index,1)
        this.TableDataEmployee()
    },

    // create
    CreateDataEmployee(){
        const fName = document.getElementById("FirstName").value
        const lName = document.getElementById("LastName").value
        const age = document.getElementById("Age").value
        const depart = document.getElementById("Depart").value
        employee.push({
            FirstName : fName,
            LastName : lName,
            Age : age,
            Depart : depart
        })
        // fName.reset()
        this.TableDataEmployee()
    },

    // displayEdit
    DisplayEdit(editdata){

        const updateEmployee = employee[editdata];
    
        fNameUp.value = updateEmployee.FirstName
        lNameUp.value = updateEmployee.LastName
        ageUp.value = updateEmployee.Age
        departUp.value = updateEmployee.Depart

        editIndex = editdata
        // console.log(editdata, "ini edit data");
    },

    // updatedit
    UpdateEdit(){
        const saveFname = document.getElementById("FirstNameUp")
        const saveLname = document.getElementById("LastNameUp")
        const saveAge = document.getElementById("AgeUp")
        const saveDepart = document.getElementById("DepartUp")
        
        console.log(saveFname, "savelname");
        employee[editIndex].FirstName = saveFname.value
        employee[editIndex].LastName = saveLname.value
        employee[editIndex].Age = saveAge.value
        employee[editIndex].Depart = saveDepart.value
        // this.TableDataEmployee[editIndex].Age= saveAge
        // this.TableDataEmployee[editIndex].Depart= saveDepart
        // this.TableDataEmployee()

        // const r = employee[editdata]
        // const saveFname = 55;
        console.log(saveFname, "ini save fname")

        // console.log(employee[index].FirstName, "wjbdkwved")
        this.TableDataEmployee()
    },

    // apaaja(){
    //     console.log(employee, "kkhk");
    // }
}

controller.TableDataEmployee()

btnSubmit.onclick = () => {
    controller.CreateDataEmployee()
    // console.log("ini create");
}

btnUpdate.onclick = () => {
    controller.UpdateEdit()
    // console.log("ini update")
}

// console.log(controller.apaaja());

// console.log(employee);