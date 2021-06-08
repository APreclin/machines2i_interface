import React from "react";
import classNames from "classnames";

import "./GeneralInformation.css";

export interface GeneralInformationProps {
	dataset: string;
	name: string;
	totalCost: number;
}

const GeneralInformation: React.FC<GeneralInformationProps> = (props) => {
	const { dataset, name, totalCost } = props;

	return (
		<div>
			<h3>General Information</h3>
			<div>
				<p>Dataset : {dataset}</p>
				<p>Name of the instance : {name}</p>
				<p>Total cost of the solution : {totalCost}</p>
			</div>
		</div>
	);
};

export { GeneralInformation };
