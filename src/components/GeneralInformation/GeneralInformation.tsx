import React from "react";
import { Collapse } from "react-collapse";
import classNames from "classnames";

import "./GeneralInformation.css";

export interface GeneralInformationProps {
	dataset: string;
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

const GeneralInformation: React.FC<GeneralInformationProps> = (props) => {
	const {
		dataset,
		idleMachineCosts,
		name,
		numberOfTechnicianDays,
		numberOfTechniciansUsed,
		numberOfTruckDays,
		numberOfTrucksUsed,
		technicianDistance,
		totalCost,
		truckDistance,
	} = props;

	const [isOpened, setIsOpened] = React.useState<boolean>(false);

	const onClick = () => setIsOpened(!isOpened);

	return (
		<div className="generalInformation">
			<h3>General Information</h3>
			<div>
				<p>Dataset : {dataset}</p>
				<p>Name of the instance : {name}</p>
				<p>Total cost of the solution : {totalCost}</p>
				<p className="moreInformation" onClick={onClick}>
					More information...
				</p>
				<Collapse isOpened={isOpened}>
					<p>Idle Machine Costs : {idleMachineCosts}</p>
					<p>Number of technicians days : {numberOfTechnicianDays}</p>
					<p>Number of technicians used : {numberOfTechniciansUsed}</p>
					<p>Number of trucks days : {numberOfTruckDays}</p>
					<p>Number of trucks used : {numberOfTrucksUsed}</p>
					<p>Technician distance : {technicianDistance}</p>
					<p>Truck distance : {truckDistance}</p>
				</Collapse>
			</div>
		</div>
	);
};

export { GeneralInformation };
