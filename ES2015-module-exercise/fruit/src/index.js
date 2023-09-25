import { choice, remove } from "./helpers";
import FOODS from "./foods";

const chosenFruit = choice(FOODS);

console.log(`I'd like one ${chosenFruit}, please.`);
console.log(`Here you go: ${chosenFruit}`);
console.log(`Delicious! May I have another?`);
remove(chosenFruit);
console.log(`I’m sorry, we’re all out. We have ${FOODS.length} left.`);