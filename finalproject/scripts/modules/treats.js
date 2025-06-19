export async function loadTreats() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error loading treats:', error);
    return [];
  }
}
export async function loadTreats() {
  return [
    {
      name: "Strawberry Cheesecake",
      flavor: "Strawberry",
      price: "$2.45",
      image: "images/treat1.jpg"
    },
    {
      name: "Chocolate Fudge Brownie",
      flavor: "Chocolate",
      price: "$2.10",
      image: "images/treat2.jpg"
    },
    {
      name: "Vanilla Cupcake",
      flavor: "Vanilla",
      price: "$1.80",
      image: "images/treat3.jpg"
    },
    {
      name: "Lemon Tart",
      flavor: "Lemon",
      price: "$2.30",
      image: "images/treat4.jpg"
    },
    {
      name: "Mint Chocolate Chip Ice Cream",
      flavor: "Mint Chocolate",
      price: "$2.50",
      image: "images/treat5.jpg"
    },
    {
      name: "Carrot Cake Slice",
      flavor: "Carrot",
      price: "$2.20",
      image: "images/treat6.jpg"
    }
   
  ];
}

