const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const countResponse = surveyResponses.reduce((accum, survey) => {
  if (!accum[survey]) {
    accum[survey] = 1;
  } else {
    accum[survey] = accum[survey] + 1;
  }
  return accum;
}, {});
console.log(countResponse);

const salesData = [
  { item: "Laptop", category: "Electronics", price: 1200, quantity: 2 },
  { item: "Mouse", category: "Electronics", price: 25, quantity: 5 },
  { item: "Book", category: "Books", price: 15, quantity: 3 },
  { item: "Headphones", category: "Electronics", price: 80, quantity: 1 },
  { item: "Notebook", category: "Books", price: 5, quantity: 10 },
  { item: "Tablet", category: "Electronics", price: 300, quantity: 2 },
  { item: "Coffee Mug", category: "Kitchen", price: 12, quantity: 4 },
  { item: "Chair", category: "Furniture", price: 150, quantity: 1 },
  { item: "Pen", category: "Stationery", price: 2, quantity: 20 },
  { item: "Lamp", category: "Furniture", price: 75, quantity: 3 },
];

const groupsalesdata = salesData.reduce((table, sale) => {
  if (!table[sale.category]) {
    table[sale.category] = {
    //   saleitem:[],
      totalrev: 0,
      totalitems: 0,
    };
  }

//   table[sale.category].saleitem.push(sale);
  table[sale.category].totalrev = table[sale.category].totalrev + sale.price * sale.quantity;
  table[sale.category].totalitems = table[sale.category].totalitems + sale.quantity;
  return table;
}, {});
console.log(groupsalesdata);
