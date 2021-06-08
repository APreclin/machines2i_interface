import React from "react";
import classNames from "classnames";

import "./Day.css";
import { DayModel } from "../../models/solution";
import { DeliveryRound } from "../DeliveryRound";
import { InstallationRound } from "../InstallationRound";

export interface DayProps {
	day: DayModel;
	index: number;
}

const Day: React.FC<DayProps> = (props) => {
	const { day, index } = props;
	const {
		deliveryRounds,
		installationRounds,
		numberOfTechnicians,
		numberOfTrucks,
	} = day;

	const renderDeliveryRounds = () => {
		if (!deliveryRounds) return null;

		return deliveryRounds.map((deliveryRound, indexRound) => (
			<DeliveryRound
				deliveryRound={deliveryRound}
				index={indexRound}
				key={`deliveryRound-${index}-${indexRound}`}
			/>
		));
	};

	const renderInstallationRounds = () => {
		if (!installationRounds) return null;

		return installationRounds.map((installationRound, indexRound) => (
			<InstallationRound
				index={indexRound}
				installationRound={installationRound}
				key={`installationRound-${index}-${indexRound}`}
			/>
		));
	};

	return (
		<div>
			<h4>Day {index + 1}</h4>
			<p>Number of trucks : {numberOfTrucks}</p>
			{renderDeliveryRounds()}
			<p>Number of technicians : {numberOfTechnicians}</p>
			{renderInstallationRounds()}
		</div>
	);
};

export { Day };
