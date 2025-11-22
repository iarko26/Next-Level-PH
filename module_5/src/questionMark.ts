// ? : ternary opearator : decision making
// ?? : nullish coalescing operator : null/undefined
// ?. optional chaining


const voterage= 18;
const votinrigts=voterage>18 ? "eligible" : "ineligible";
console.log(votinrigts);

const userTheme = "Green theme";

const selectedTheme = userTheme ?? "Light theme";

console.log(selectedTheme)


const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string; //optional
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const result=user?.address?.town;
console.log(result);
