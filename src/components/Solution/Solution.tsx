import React from "react";
import classNames from "classnames";

import "./Solution.css";
import { SolutionModel } from "../../models/solution";

export interface SolutionProps {
	obj: SolutionModel;
}

const Solution: React.FC<SolutionProps> = (props) => {
	const { obj } = props;
	const { dataset, name } = obj;

	return (
		<div>
			<div>{dataset}</div>
			<div>{name}</div>
		</div>
	);
};

export { Solution };
