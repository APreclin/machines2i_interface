import React from "react";
import classNames from "classnames";

import "./Solution.css";
import { SolutionModel } from "../../models/solution";
import { Day } from "../Day";
import { GeneralInformation } from "../GeneralInformation";

export interface SolutionProps {
	obj: SolutionModel;
}

const Solution: React.FC<SolutionProps> = (props) => {
	const { obj } = props;
	const { dataset, days, name, totalCost } = obj;

	const renderDays = () =>
		days.map((day, index) => <Day day={day} key={index} index={index} />);

	return (
		<>
			<GeneralInformation dataset={dataset} name={name} totalCost={totalCost} />
			{renderDays()}
		</>
	);
};

export { Solution };
