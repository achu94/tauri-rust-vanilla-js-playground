class TodoUI {

  container: HTMLElement | null;
  modal: HTMLElement | null;

  constructor() {
    this.container = document.getElementById("items-container");
    this.modal = document.getElementById("modal");

    this.render();
  }

  render() {
    this.modal_create();
  }

  modal_create() {
    const modal_content = document.createElement("div");
    modal_content.className = "modal-content";

    const modal_close_btn = document.createElement("span");
    modal_close_btn.className = "close";
    modal_close_btn.innerHTML = "&times;";
    modal_close_btn.onclick = this.close_modal.bind(this);

    const item_add_input = document.createElement("input");
    item_add_input.type = "text";
    item_add_input.placeholder = "Add item";
    item_add_input.className = "item-add-input";
    item_add_input.id = "item-add-input";
    // Add keydown event listener to the input
    item_add_input.addEventListener("keydown", (event) => {
      // Check if the pressed key is Enter (keycode 13)
      if (event.key === "Enter") {
        // Call open_modal method when Enter is pressed
        this.item_create(item_add_input.value);
        item_add_input.value = "";
        this.close_modal();
      }
    });


    modal_content.appendChild(modal_close_btn);
    modal_content.appendChild(item_add_input);

    this.modal!.appendChild(modal_content);
  }

  item_create(text: string) {

    if (!text) return null;

    const item = document.createElement("li");
    item.className = "item";
    item.innerHTML = text;

    const remove_btn = document.createElement("span");
    remove_btn.className = "item-remove";
    remove_btn.innerHTML = "&ndash;"; // You can customize the symbol as needed

    // Add click event listener to the remove button
    remove_btn.addEventListener("click", () => {
      item.remove();
    });
    
    item.appendChild(remove_btn);
    this.container!.appendChild(item);
  }

  public open_modal() {
    this.modal!.style.display = "block";
  }

  public close_modal() {
    this.modal!.style.display = "none";
  }
}



export default class Todo {
  todoUI: TodoUI;
  addItemButton: HTMLButtonElement | null;

  constructor() {
    this.todoUI = new TodoUI();
    this.addItemButton = null;
  }

  init() {
    this.addItemButton = document.querySelector("#plus-button");
    this.addItemButton?.addEventListener("click", this.todoUI.open_modal.bind(this.todoUI));
  }

  addItem() {
  }
}