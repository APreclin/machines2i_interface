export interface SolutionModel {
	dataset: string;
	days: DayModel[];
	idleMachineCosts: number;
	name: string;
	numberOfTechnicianDays: number;
	numberOfTechniciansUsed: number;
	numberOfTruckDays: number;
	numberOfTrucksUsed: number;
	technicianDistance: number;
	totalCost: number;
	truckDistance: number;
}

export interface DayModel {
	deliveryRounds?: DeliveryRoundModel[];
	installationRounds?: InstallationRoundModel[];
	numberOfTechnicians: number;
	numberOfTrucks: number;
}

export interface DeliveryRoundModel {
	id: number;
	depot: Location;
	requests: Request[];
}

export interface InstallationRoundModel {
	id: number;
	home: Location;
	requests: Request[];
}

export interface Request {
	id: number;
	location: Location;
}

export interface Location {
	x: number;
	y: number;
}
