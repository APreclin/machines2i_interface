import React from "react";

import "./InstallationRound.css";
import { Canvas } from "../Canvas/Canvas";
import { InstallationRoundModel } from "../../models/solution";
import { Round } from "../Round";

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
			<Round origin={home} requests={requests} />
		</div>
	);
};

export { InstallationRound };
