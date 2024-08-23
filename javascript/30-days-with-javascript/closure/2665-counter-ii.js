/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
	let x = init;
	let y = init;
	return {
		decrement: () => --y,
		increment: () => ++y,
		reset: () => {
			y = x;
			return x;
		},
	};
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
