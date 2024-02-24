const addBtn = document.getElementById('add');
const courseCredit=document.getElementById("credit")
addBtn.addEventListener("click",()=>{
  const newForm = document.createElement("form")
  newForm.classList.add('form')
  const newField=`
  <form>              
  <div class="inputField">
     <input type="text" placeholder="Course Name" class="CourseNameField" required >
     <input type="number" placeholder="Credit Units" class="CreditField" value="" id="credit" required>
     <select class="gradeField" required>
     <option class="grade" value="select" id="">Select</option>
     <option class="grade" value="">A+</option>
     <option class="grade" value="">A</option>
     <option class="grade" value="">A-</option>
     <option class="grade" value="">B+</option>
     <option class="grade" value="">B</option>
     <option class="grade" value="">B-</option>
     <option class="grade" value="">C+</option>
     <option class="grade" value="">C</option>
     <option class="grade" value="">D</option>
     <option class="grade" value="">F</option>
     </select>
     <div class="deleteBtnWrap"><button class="deleteBtn" id="deleteBtn" name="deleteBtn" value="">-</button></div>             
  </div>

</form>
`
newForm.innerHTML=newField
document.querySelector(".courseWrapper").appendChild(newForm)
})

