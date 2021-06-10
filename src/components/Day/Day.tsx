import React from "react";
import { Collapse } from "react-collapse";
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

	const [toggleDay, setToggleDay] = React.useState<String>("Show");
	const [isOpened, setIsOpened] = React.useState<boolean>(false);

	const onClick = () => {
		setIsOpened(!isOpened);
		toggleDay === "Show" ? setToggleDay("Hide") : setToggleDay("Show");
	};

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
			<p onClick={onClick}>{toggleDay}</p>
			<Collapse isOpened={isOpened}>
				<div>
					<p>Number of trucks : {numberOfTrucks}</p>
					{renderDeliveryRounds()}
					<p>Number of technicians : {numberOfTechnicians}</p>
					{renderInstallationRounds()}
				</div>
			</Collapse>
		</div>
	);
};

export { Day };