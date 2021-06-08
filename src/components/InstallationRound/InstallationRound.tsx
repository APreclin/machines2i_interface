import React from "react";
import classNames from "classnames";

import "./InstallationRound.css";
import { Canvas } from "../Canvas/Canvas";
import { InstallationRoundModel } from "../../models/solution";

export interface InstallationRoundProps {
	index: number;
	installationRound: InstallationRoundModel;
}

const InstallationRound: React.FC<InstallationRoundProps> = (props) => {
	const { index, installationRound } = props;
	const { home, requests } = installationRound;

	return (
		<div>
			<p>Installation Round : {index + 1}</p>
			<Canvas origin={home} requests={requests} />
		</div>
	);
};

export { InstallationRound };
