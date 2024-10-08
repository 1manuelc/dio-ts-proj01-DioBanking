export abstract class DioAccount {
	private name: string;
	private readonly number: number;
	protected balance = 0.0;
	protected isActive = false;

	constructor(name: string, number: number) {
		this.name = name;
		this.number = number;
	}

	deposit = (value: number): void => {
		if (value <= 0) {
			console.log('Invalid value, impossible to deposit');
			return;
		}

		if (this.balance === 0 && this.isActive === false) {
			this.isActive = true;
		}

		this.balance += value;
		console.log(`Sucessfully deposited USD $${value.toFixed(2)}!`);
	};

	withdraw = (value: number): number | undefined => {
		if (this.accountIsActive()) {
			if (value > this.balance) {
				console.log(`Insufficient funds to withdraw USD $${value.toFixed(2)}!`);
				return;
			}

			this.balance -= value;
			console.log(`USD $${value.toFixed(2)} withdrawn sucessfull!`);
			return value;
		}

		return;
	};

	getName = (): string => {
		return this.name;
	};

	getNumber = (): number => {
		return this.number;
	};

	getBalance = (): number => {
		console.log(`Your current balance is USD $${this.balance.toFixed(2)}`);
		return this.balance;
	};

	protected accountIsActive = (): boolean => {
		if (this.isActive === true) return true;
		throw new Error('Inactive account, please deposit some value to activate!');
	};
}
