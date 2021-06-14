import React from "react";

import "./Solution.css";
import { SolutionModel } from "../../models/solution";
import { Day } from "../Day";
import { GeneralInformation } from "../GeneralInformation";

export interface SolutionProps {
	obj: SolutionModel;
}

const Solution: React.FC<SolutionProps> = (props) => {
	const { obj } = props;
	const {
		dataset,
		days,
		idleMachineCosts,
		name,
		numberOfTechnicianDays,
		numberOfTechniciansUsed,
		numberOfTruckDays,
		numberOfTrucksUsed,
		technicianDistance,
		totalCost,
		truckDistance,
	} = obj;

	const renderDays = () =>
		days.map((day, index) => <Day day={day} key={index} index={index} />);

	return (
		<>
			<GeneralInformation
				dataset={dataset}
				idleMachineCosts={idleMachineCosts}
				name={name}
				numberOfTechnicianDays={numberOfTechnicianDays}
				numberOfTechniciansUsed={numberOfTechniciansUsed}
				numberOfTruckDays={numberOfTruckDays}
				numberOfTrucksUsed={numberOfTrucksUsed}
				technicianDistance={technicianDistance}
				totalCost={totalCost}
				truckDistance={truckDistance}
			/>
			{renderDays()}
		</>
	);
};

export { Solution };
