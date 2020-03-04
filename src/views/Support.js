import React from "react";
const Support = () => {
  return <div>
  <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Customer Contact Email address</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect1">Prelisted Computer Problems</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option>(1) Hardware Issues</option>
      <option>(2) General Computer Repair Issues</option>
      <option>(3) Memory Issues</option>
      <option>(4) Virus Issues</option>
      <option>(5) Heat mangement Issues</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlSelect2">List of Recomended Computer Repair Specialist</label>
    <select multiple class="form-control" id="exampleFormControlSelect2">
      <option>(1)Horace Hardware Computer Specialist : 756-364-1485</option>
      <option>(2)Geiana General Computer Repair Specialist: 334-415-1546</option>
      <option>(3)Marice Memory Repair Specialist: 456-515-5457</option>
      <option>(4)Venuski Virus Repair Specialist:145-464-8746</option>
      <option>(5)Horton Heat mangement Repair Specialist Contact: 454-556-5146</option>
    </select>
  </div>
  <div class="form-group">
    <label for="exampleFormControlTextarea1">Description of Problem</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
</form>  
  </div>;
};

export default Support;
