import React from "react";
import classNames from "classnames";

import { DropSolution } from "../DropSolution";
import { Solution } from "../Solution";
import "./Machines2i.css";
import { SolutionModel } from "../../models/solution";

export interface Machines2iProps {}

const Machines2i: React.FC<Machines2iProps> = () => {
	const [objJson, setObjJson] = React.useState<SolutionModel>();

	const handleCallback = (obj: SolutionModel) => {
		setObjJson(obj);
	};

	return (
		<div>
			<h2>Machines2i</h2>
			<DropSolution parentCallback={handleCallback} />
			{objJson ? <Solution obj={objJson} /> : null}
		</div>
	);
};

export { Machines2i };
