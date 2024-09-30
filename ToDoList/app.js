const { Component, mount, xml,useRef, onMounted } = owl;

class Task extends Component{
  static template = xml /* xml */`
  <div class="task" t-att-class="props.task.isCompleted ? 'done' : ''">
    <input type="checkbox" t-att-checked="props.task.isCompleted"/>
    <span><t t-esc="props.task.text"/></span>
  </div>`;
static props = ["task"];
}

class Root extends Component {
    static template = xml`
    <div>
        <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
      <div class="task-list">
          <t t-foreach="tasks" t-as="task" t-key="task.id">
            <Task task="task"/>
          </t>
      </div>
    </div>
`;

    static components = {Task};

    addTask(ev) {
      // 13 is keycode for ENTER
      if (ev.keyCode === 13) {
          const text = ev.target.value.trim();
          ev.target.value = "";
          console.log('adding task', text);
          // todo
      }
  }

  setup() {
    const inputRef = useRef("add-input");
    onMounted(() => inputRef.el.focus());
}
  
    tasks = [
      {
        id: 1,
        text: "buy milk",
        isCompleted: true,
      },
      {
        id: 2,
        text: "clean house",
        isCompleted: false,
      },
    ];
  }
  mount(Root, document.body, {dev: true});