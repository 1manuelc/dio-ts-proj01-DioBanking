import { DioAccount } from './DioAccount';

export class StudentAccount extends DioAccount {
	deposit = (value: number): void => {
		if (value <= 0) {
			console.log('Invalid value, impossible to deposit');
			return;
		}

		if (this.balance === 0 && this.isActive === false) {
			this.isActive = true;
		}

		this.balance += value + 10;
		console.log(`Sucessfully deposited USD $${value.toFixed(2)}!`);
	};
}
