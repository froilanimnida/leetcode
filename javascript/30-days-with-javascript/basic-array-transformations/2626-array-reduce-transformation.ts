function reduce(
	nums: number[],
	fn: (accum: number, curr: number) => number,
	init: number,
): number {
	let accum = init;
	if (nums.length === 0) {
		return init;
	}
	for (let i = 0; i < nums.length; i++) {
		accum = fn(accum, nums[i]);
	}
	return accum;
}
