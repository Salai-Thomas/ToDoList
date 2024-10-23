const {Component,mount,xml,useState} = owl

class Root extends Component{
    static template = xml`
        <div class="container">
      <div class="row my-3 py-3">
        <div class="col-lg-6 offset-lg-3">
          <h1 class="tex-center fw-bold main-title">Todo List App - OWL</h1>
          <p class="tex-center text-muted h-5 mb-3">Odoo Owl Framewok Tuotrial For Beginners</p>
        </div>
      </div>

      <div>
        <div class="input-group mb-3 w-100 d-flex rounded border align-items-center">

          <input type="text" class="form-control flex-fill border-0 me-1" 
          placeholder="Add Your NewTask" aria-label="Add Your NewTask" 
          aria-describedby="button-addon2"/>

          <input type="color" class="form-control-lg form-control-color border-0"
           id="exampleColorInput" value="#563d7c" title="Choose your color"/>

          <button class="btn btn-outline-secondary" type="button" id="button-addon2">
            <i class="bi bi-plus-lg"></i>
          </button>
        </div>

      <ul  class="d-flex flex-column mt-5 p-0">
      <t t-foreach="tasks" t-as="task" t-key="task.id">
        <li t-attf-style="background-color:#{task.color}" class="d-flex align-itmes-center justify-content-between rounded border p-3 mb-3">
          <div class="form-check form-switch fs-5">
            <input class="form-check-input" type="checkbox" value="" t-att-id="task.id"/>
            <label class="form-check-label" t-att-for="task.id">
              <t t-esc="task.name"/>
            </label>
          </div>

          <div>

            <button class="btn btn-primary">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-danger">
              <i class="bi bi-trash"></i>
            </button>

          </div>

        </li>
      </t>
      </ul>
    </div>
  </div>

    `
    setup(){
        this.tasks = useState([
          {id:1,name:'Task1',color:'#ff0',isCompleted:false},
          {id:2,name:'Task2',color:'#ff0',isCompleted:false},
          {id:3,name:'Task3',color:'#ff0',isCompleted:false},
        ])
    }
}

mount(Root,document.getElementById('root'))