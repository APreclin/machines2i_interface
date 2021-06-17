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
    deliveryRounds?: RoundModel[];
    installationRounds?: RoundModel[];
    numberOfTechnicians: number;
    numberOfTrucks: number;
}

export interface RoundModel {
    id: number;
    origin: Location;
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
