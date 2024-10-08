import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';
import { StudentAccount } from './class/StudentAccount';

// PEOPLE ACCOUNT TEST

const physicalAccount: PeopleAccount = new PeopleAccount('001', 'Bob', 1021);
console.log('====== PeopleAccount test ======');
console.log(`Your account is registered in name: ${physicalAccount.getName()}`);
console.log(
	`Your account is registered in number: ${physicalAccount.getNumber()}`,
);
physicalAccount.deposit(750);
physicalAccount.getBalance();
console.log(
	`Your document identification registered is: ${physicalAccount.getDocId()}`,
);
physicalAccount.setDocId('012');
console.log(
	`Your document identification registered is: ${physicalAccount.getDocId()}`,
);
physicalAccount.withdraw(300);
physicalAccount.getBalance();

// COMPANY ACCOUNT TEST

const enterpriseAccount: CompanyAccount = new CompanyAccount(
	'Carlos & CIA.',
	1028,
);
console.log('\n====== CompanyAccount test ======');
console.log(
	`Your account is registered in name: ${enterpriseAccount.getName()}`,
);
console.log(
	`Your account is registered in number: ${enterpriseAccount.getNumber()}`,
);
enterpriseAccount.deposit(15250);
enterpriseAccount.getBalance();
enterpriseAccount.withdraw(3250);
enterpriseAccount.getBalance();
enterpriseAccount.getLoan(2000);
enterpriseAccount.getBalance();

// STUDENT ACCOUNT TEST

const studentAccount: StudentAccount = new StudentAccount('Alice', 1028);
console.log('\n====== StudentAccount test ======');
console.log('Your account is registered in name:', studentAccount.getName());
console.log(
	`Your account is registered in number: ${studentAccount.getNumber()}`,
);
studentAccount.deposit(550);
studentAccount.getBalance();
studentAccount.withdraw(100);
studentAccount.getBalance();
