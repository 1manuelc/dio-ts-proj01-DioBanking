import { DioAccount } from './DioAccount';

export class PeopleAccount extends DioAccount {
	private doc_id: string;

	constructor(doc_id: string, name: string, number: number) {
		super(name, number);
		this.doc_id = doc_id;
	}

    setDocId = (doc_id: string): void => {
		this.doc_id = doc_id;
		console.log('Document changed sucessfully!');
	};

	getDocId = (): string => {
		return this.doc_id;
	};
}
