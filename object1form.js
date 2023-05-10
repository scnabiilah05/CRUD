const bodyTable = document.getElementById('tableBody')
const btnSubmit = document.getElementById('Submit')
const btnUpdate = document.getElementById('Update')
let editIndex = ""

// create
const fName = document.getElementById("FirstName") 
const lName = document.getElementById("LastName")
const age = document.getElementById("Age")
const depart = document.getElementById("Depart")


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

        const btnDelete = document.querySelectorAll('.delete')

        for (i =0; i < btnDelete.length ; ++i) {
            btnDelete[i].onclick = (e) => {
                if(confirm('Are you sure to delete this data?')){
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
    CreateDataEmployee(editdata){
        if (editIndex === ""){
            employee.push({
                FirstName : fName.value,
                LastName : lName.value,
                Age : age.value,
                Depart : depart.value
            })
        } else if (editIndex !== ""){
            let j =employee[editIndex].FirstName = fName.value
            employee[editIndex].LastName = lName.value
            employee[editIndex].Age = age.value
            employee[editIndex].Depart = depart.value
            // console.log(fName, "lalala")
        }

        this.TableDataEmployee()
    },

    DisplayEdit(editdata){

        const updateEmployee = employee[editdata];
    
        fName.value = updateEmployee.FirstName
        lName.value = updateEmployee.LastName
        age.value = updateEmployee.Age
        depart.value = updateEmployee.Depart

        editIndex = editdata
        console.log(editdata, "ini edit data");
    }
}

controller.TableDataEmployee()

btnSubmit.onclick = () => {
    controller.CreateDataEmployee()
    // console.log("ini create");
}

