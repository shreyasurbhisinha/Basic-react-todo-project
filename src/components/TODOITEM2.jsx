function TodoItem2(){
    let todoname="Study";
    let tododate="11.10.22";
    return (
        <div class="container">
    <div class="row shrrow">
      <div class="col-6">{todoname}</div>
      <div class="col-4">{tododate}</div>
      <div class="col-2"><button type="button" class="btn btn-danger shrbutton ">Add Task</button></div>
    </div>
  </div>
    );

}
export default TodoItem2;
