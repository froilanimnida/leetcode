/**
 * @param {string} val
 * @return {Object}
 */
var expect = (val) => {
	return {
		toBe: (value) =>
			val === value
				? true
				: (() => {
						throw new Error('Not Equal');
				  })(),
		notToBe: (value) =>
			val !== value
				? true
				: (() => {
						throw new Error('Equal');
				  })(),
	};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
