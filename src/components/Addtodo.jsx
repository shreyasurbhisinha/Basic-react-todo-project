function AddTodo(){
    return (
<div class="container text-center">
        <div class="row shrrow">
          <div class="col-6"><input type="text" placeholder="enter Todo here"/></div>
          <div class="col-4"><input type="date"/></div>
          <div class="col-2"><button type="button" class="btn btn-success shrbutton">Add Task</button></div>
        </div>
      </div>
    );
    
}
export default AddTodo;
