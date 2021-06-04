export interface SolutionModel {
	dataset: string;
	days: Day[];
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

export interface Day {
	deliveryRounds?: DeliveryRound[];
	installationRounds?: InstallationRound[];
	numberOfTechnicians: number;
	numberOfTrucks: number;
}

export interface DeliveryRound {
	id: number;
	depot: Location;
}

export interface InstallationRound {
	id: number;
	home: Location;
}

export interface Location {
	x: number;
	y: number;
}
