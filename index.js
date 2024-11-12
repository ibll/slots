const buyIn = 5; // Cost per play in CP
// const payouts = [
// 	{ minRoll: 100, payout: 30 },
// 	{ minRoll: 95, payout: 10 },
// 	{ minRoll: 75, payout: 7 },
// 	{ minRoll: 20, payout: 3 }
// ];
const payouts = [
	{ minRoll: 100, payout: 85 },
	{ minRoll: 95, payout: 20 },
	{ minRoll: 75, payout: 10 },
	{ minRoll: 20, payout: 3 }
];
const rolls = 120 * 6; // Number of simulations
// const rolls = 100000000; // Number of simulations

const hits = {}

function simulateEarnings(rolls) {
	let totalPayouts = 0;
	let copperPlayed = rolls * buyIn;

	for (let i = 0; i < rolls; i++) {
		const roll = Math.floor(Math.random() * 100) + 1; // Roll a 100-sided die

		// Determine payout based on the roll
		let payout = 0;
		for (const reward of payouts) {
			if (roll >= reward.minRoll) {
				payout = reward.payout;
				if (!hits[payout]) hits[payout] = 0;
				hits[payout]++;
 				break;
			}
		}

		totalPayouts += payout;
	}

	const netEarnings = copperPlayed - totalPayouts;
	const averageEarningsPerRoll = netEarnings / rolls;

	console.log(`Total Rolls: ${rolls}`);
	console.log(`Copper Played: ${copperPlayed} CP`);
	console.log(`Total Payouts: ${totalPayouts} CP`);
	console.log(`Net Earnings: ${netEarnings} CP`);
	console.log(`Average Earnings per Roll: ${averageEarningsPerRoll.toFixed(2)} CP`);
	console.log(``)
	console.log(`Payouts:`)
	for (const payout in hits) {
		console.log(`${payout} CP: ${hits[payout]}`)
	}
}

simulateEarnings(rolls);
