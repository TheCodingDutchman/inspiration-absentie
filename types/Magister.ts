type Link = {
	Rel: 'Prev' | 'Self' | 'Next';
	Href: string;
};

type Vak = {
	Id: number;
	Naam: string;
};

type Docent = {
	Id: number;
	Naam: string;
	Docentcode: string;
};

type Lokaal = {
	Naam: string;
};

export interface Class {
	Id: number;
	Links: Link[];
	Start: string;
	Einde: string;
	LesuurVan: number;
	LesuurTotMet: number;
	DuurtHeleDag: boolean;
	Omschrijving: string;
	Lokatie: string;
	Status: number;
	Type: number;
	IsOnlineDeelname: boolean;
	WeergaveType: number;
	Inhoud: string;
	InfoType: number;
	Aanteking: null;
	Afgerond: boolean;
	HerhaalStatus: number;
	Herhaling: null;
	Vakken: Vak[];
	Docenten: Docent[];
	Lokalen: Lokaal[];
	Groepen: null;
	HeeftBijlagen: boolean;
	Bijlagen: null;
}

export interface ClassesApiResponse {
	Items: Class[],
	TotalCount: number,
	Links: any[],
}
