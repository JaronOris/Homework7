let LISTS = [
  {
    mainList: "Shopping List",
    subList: [
      {
        name: "Milk",
      },
      {
        name: "Eggs",
      },
      {
        name: "Bread",
      },
      {
        name: "Cheese",
      },
      {
        name: "Butter",
      },
      {
        name: "Soup",
      },
      {
        name: "Soap",
      },
      {
        name: "Toilet Paper",
      },
      {
        name: "Toothpaste",
      },
      {
        name: "Chips",
      },
    ],
  },
  {
    mainList: "Bills to Pay",
    subList: [
      {
        name: "Rent",
      },
      {
        name: "Car",
      },
      {
        name: "Insurance",
      },
      {
        name: "Electricity",
      },
      {
        name: "Gas",
      },
      {
        name: "Water",
      },
      {
        name: "Trash",
      },
      {
        name: "Heat",
      },
      {
        name: "Loans",
      },
      {
        name: "Credit Cards",
      },
    ],
  },
  {
    mainList: "Chores",
    subList: [
      {
        name: "Take Out Trash",
      },
      {
        name: "Vacuum",
      },
      {
        name: "Dust",
      },
      {
        name: "Water Plants",
      },
      {
        name: "Mop",
      },
      {
        name: "Laundry",
      },
      {
        name: "Feed Pets",
      },
      {
        name: "Wash Dishes",
      },
      {
        name: "Clean Bathroom",
      },
      {
        name: "Mow Yard",
      },
    ],
  },
  {
    mainList: "Errands",
    subList: [
      {
        name: "Bank",
      },
      {
        name: "Post Office",
      },
      {
        name: "Pet Store",
      },
      {
        name: "Barber",
      },
      {
        name: "Dry Cleaning",
      },
      {
        name: "Store",
      },
      {
        name: "Vet",
      },
      {
        name: "Buy Clothes",
      },
      {
        name: "Doctor",
      },
      {
        name: "Gym",
      },
    ],
  },
  {
    mainList: "Packing List",
    subList: [
      {
        name: "Underwear",
      },
      {
        name: "Shirts",
      },
      {
        name: "Pants",
      },
      {
        name: "Socks",
      },
      {
        name: "Toothpaste",
      },
      {
        name: "Toothbrush",
      },
      {
        name: "Shampoo",
      },
      {
        name: "Body Wash",
      },
      {
        name: "Razor",
      },
      {
        name: "Phone Charger",
      },
    ],
  },
  {
    mainList: "Repair List",
    subList: [
      {
        name: "Fix Fence",
      },
      {
        name: "Car Maintenance",
      },
      {
        name: "Change Lightbulbs",
      },
      {
        name: "Powerwash",
      },
      {
        name: "Fix Door Hinges",
      },
      {
        name: "Clear Drains",
      },
      {
        name: "Touch-up Paint",
      },
      {
        name: "Patch Drywall",
      },
      {
        name: "Lubricate Windows",
      },
      {
        name: "replace Siding",
      },
    ],
  },
  {
    mainList: "Supplies Before Adopting A Dog",
    subList: [
      {
        name: "Food",
      },
      {
        name: "Food/Water Bowls",
      },
      {
        name: "Collar",
      },
      {
        name: "Leash",
      },
      {
        name: "Bed",
      },
      {
        name: "Toys",
      },
      {
        name: "Name Tag",
      },
      {
        name: "Flea Treatment",
      },
      {
        name: "Brush",
      },
      {
        name: "Nail Trimmers",
      },
    ],
  },
  {
    mainList: "Kitchen Supplies",
    subList: [
      {
        name: "Pots",
      },
      {
        name: "Pans",
      },
      {
        name: "Cast Iron Skillet",
      },
      {
        name: "Spatula",
      },
      {
        name: "Mixing Bowls",
      },
      {
        name: "Laddle",
      },
      {
        name: "Chef's Knife",
      },
      {
        name: "Cutting Board",
      },
      {
        name: "Measuring Cups",
      },
      {
        name: "Baking Sheet",
      },
    ],
  },
  {
    mainList: "Bucket List",
    subList: [
      {
        name: "Travel",
      },
      {
        name: "Run A Marathon",
      },
      {
        name: "Climb A Mountain",
      },
      {
        name: "Visit The Grand Canyon",
      },
      {
        name: "Fight A Whale",
      },
      {
        name: "Tame A Lion",
      },
      {
        name: "Blow Up The Moon",
      },
      {
        name: "Be Feared",
      },
      {
        name: "Learn An Instrument",
      },
      {
        name: "Get Cursed By A Witch",
      },
    ],
  },
  {
    mainList: "Books To Read",
    subList: [
      {
        name: "Lord Of The Rings",
      },
      {
        name: "Lord Of The Flies",
      },
      {
        name: "1984",
      },
      {
        name: "Fahrenheit 451",
      },
      {
        name: "Moby Dick",
      },
      {
        name: "Handmaid's Tale",
      },
      {
        name: "Harry Potter",
      },
      {
        name: "Game Of Thrones",
      },
      {
        name: "Stock Trading For Dummies",
      },
      {
        name: "50 Shades Of Grey",
      },
    ],
  },
];

function itemChecked(element, listIndex, itemIndex) {
  $(element).parent().toggleClass("strike");
  let checkedValue = !LISTS[listIndex].subList[itemIndex].checked;
  LISTS[listIndex].subList[itemIndex].checked = checkedValue;
}

function addItem(listIndex) {
  let newItemName = $("#addItem").val();
  let newItemObj = {
    name: newItemName,
  };
  LISTS[listIndex].subList.push(newItemObj);
  loadListItems(listIndex);
}

function deleteItem(listIndex, index) {
  LISTS[listIndex].subList.splice(index, 1);
  loadListItems(listIndex);
}

function loadListItems(listIndex) {
  let listString = ` <button class="back" onclick="loadLists()">Back</button> <ul>`;
  $.each(LISTS[listIndex].subList, function (index, subList) {
    listString += `<li id="${index}" class="${
      subList.checked ? "strike" : ""
    }"><input ${
      subList.checked ? (checked = "checked") : ""
    } type="checkbox" id="${index}" name="${
      subList.name
    }" onclick="itemChecked(this, ${listIndex}, ${index} )" /><span>${
      subList.name
    }</span>
    <span class="delete" onclick="deleteItem(${listIndex}, ${index})">Delete</span></li>`;
  });
  listString += `</ul> <div class="addItemInput">
  <input id="addItem" type="text"><button id="addButton" onclick="addItem(${listIndex})">Add Item</button></div>`;
  $("#app").html(listString);
}

function loadLists() {
  let listString = "<ul>";
  $.each(LISTS, function (index, list) {
    listString += `<li id="${index}" onclick="loadListItems(${index})">${list.mainList} 
    <span class="right">Items: ${list.subList.length}</span></li>`;
  });
  listString += "</ul>";
  $("#app").html(listString);
}

function initListeners() {}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM Parsed and Loaded");
});
