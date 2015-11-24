import Cat from "./Cat";

new Cat().say();

new Promise((resolve, reject) => {
	resolve("Promise works!");
})
.then((result) => {
	console.log(result);
});
