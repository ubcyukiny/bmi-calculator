// TODO: delete after implementing firebase, this is for demo only
import avocadoToast from "/assets/images/jasper-gribble-avocado-toast-unsplash.jpg";
import beefStew from "/assets/images/laura-ohlman-beef-stew-unsplash.jpg";
import ceasarSalad from "/assets/images/raphael-nogueira-ceasar-salad-unsplash.jpg";
import blueberryPancake from "/assets/images/mikki-speid-blueberry-pancake-unsplash.jpg";
import carbonara from "/assets/images/frame-harirak-carbonara-unsplash.jpg";

const recipes = [
  {
    picture: avocadoToast,
    title: "Avocado Toast",
    protein: 10,
    fat: 15,
    carbs: 30,
    calories: 300,
    tags: ["breakfast", "avocado", "healthy"],
  },
  {
    picture: beefStew,
    title: "Beef Stew",
    protein: 35,
    fat: 20,
    carbs: 25,
    calories: 450,
    tags: ["comfort", "beef", "slow-cooked"],
  },
  {
    picture: ceasarSalad,
    title: "Caesar Salad",
    protein: 25,
    fat: 10,
    carbs: 10,
    calories: 220,
    tags: ["salad", "chicken", "low-carb"],
  },
  {
    picture: blueberryPancake,
    title: "Blueberry Pancakes",
    protein: 8,
    fat: 5,
    carbs: 50,
    calories: 280,
    tags: ["breakfast", "pancakes", "sweet"],
  },
  {
    picture: carbonara,
    title: "Spaghetti Carbonara",
    protein: 20,
    fat: 18,
    carbs: 75,
    calories: 500,
    tags: ["pasta", "italian", "comfort food"],
  },
];

export default recipes;
