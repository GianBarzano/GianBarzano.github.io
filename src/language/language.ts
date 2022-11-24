export interface ILanguage {
	header: {
		subtitle: string;
		callButton: {
			long: string;
			short: string;
		};
	};
	about: {
		title: string;
		description: string[];
	};
	experiences: {
		title: string;
		list: {
			company: string;
			role: string;
			time: string;
		}[];
	};
	grades: {
		title: string;
		list: {
			institution: string;
			type: string;
			course: string;
			start: string;
			end: string;
		}[];
	};
	contacts: {
		title: string;
		cellphone: string;
	};
	skills: {
		title: string;
		list: {
			description: string;
		}[];
	};
	languages: {
		title: string;
		list: string[];
	}
}