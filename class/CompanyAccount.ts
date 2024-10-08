import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
	getLoan = (loanValueRequest: number): void => {
		if (this.accountIsActive()) {
			this.balance += loanValueRequest;
			console.log(
				`You took out a loan of USD $${loanValueRequest.toFixed(2)}!`,
			);
		}

		return;
	};
}
