const students = [
	{
		first_name:'Siti',
    last_name:'Nabila',
    age:23,
  },
  {
		first_name:'Bagus',
    last_name:'Ilham',
    age:24,
  }
]

function renderDelete(){
	const btnDelete = document.querySelectorAll(".delete")
  btnDelete.forEach(x => {
    x.addEventListener('click', (e) => {
    	if(confirm('Sure to delete this student>')){
            const valueIndex = e.target.dataset.value
            console.log(valueIndex, 'wk')
            students.splice(valueIndex, 1)
            renderTbody()
		}
    })
  })
}

function renderTbody(){
	const bodyTable = document.getElementById('tbody')
	let tdList = ''
  students.forEach((x, index) => {
      tdList += `<tr>
           <td>${x.first_name}</td>
           <td>${x.last_name}</td>
           <td>${x.age} tahun</td>
           <td>
           	<button class="delete" data-value="${index}">Hapus</button>
           </td>
         </tr>`
  })
  bodyTable.innerHTML = tdList
  renderDelete()
}

// renderTbody()

const btnSubmit = document.getElementById('btnSubmit')

btnSubmit.addEventListener('click', () => {
	const fName = document.getElementById("first_name").value
	const LName = document.getElementById("last_name").value
	const age = document.getElementById("age").value
    
   students.push({
      first_name:fName,
      last_name:LName,
      age:age,
   })
   renderTbody()
})
