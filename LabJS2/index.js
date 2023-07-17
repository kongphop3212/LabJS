// Store the list of items
let items = [];

// Function to add a new item to the list
function addItem() {
  const input = document.getElementById('itemInput');
  const item = input.value.trim();

  if (item !== '') {
    items.push(item);
    input.value = '';
    displayItems();
  }
}

// Function to delete an item from the list
function deleteItem(index) {
  items.splice(index, 1);
  displayItems();
}

// Function to display the list of items
function displayItems() {
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const listItem = document.createElement('li');
    listItem.className = 'list-item';

    const itemText = document.createElement('span');
    itemText.textContent = items[i];

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('onclick', `deleteItem(${i})`);

    listItem.appendChild(itemText);
    listItem.appendChild(deleteBtn);
    itemList.appendChild(listItem);
  }
}