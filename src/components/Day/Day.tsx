import React from "react";
import { Collapse } from "react-collapse";

import "./Day.css";
import { Canvas } from "../Canvas";
import { colors } from "./constants";
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

	const [deliveryCollapse, setDeliveryCollapse] =
		React.useState<boolean>(false);

	const [installationCollapse, setInstallationCollapse] =
		React.useState<boolean>(false);

	const [globalCollapse, setGlobalCollapse] = React.useState<boolean>(false);

	const onClickDelivery = () => setDeliveryCollapse(!deliveryCollapse);

	const onClickInstallation = () =>
		setInstallationCollapse(!installationCollapse);

	const onClickGlobal = () => setGlobalCollapse(!globalCollapse);

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

	const renderGlobalView = () => {
		if (!installationRounds && !deliveryRounds) return null;

		return (
			<>
				<p className="italic pointer" onClick={onClickGlobal}>
					Global view...
				</p>
				<Collapse isOpened={globalCollapse}>
					<>
						{renderGlobalDeliveryRounds()}
						{renderGlobalInstallationRounds()}
					</>
				</Collapse>
			</>
		);
	};

	const renderGlobalDeliveryRounds = () => {
		if (!deliveryRounds || !deliveryRounds) return null;

		return (
			<>
				<p>Delivery Round</p>
				<div className="globalView">
					{deliveryRounds.map((deliveryRound, index) => {
						const { origin, requests } = deliveryRound;
						const color = colors[index % colors.length];

						return (
							<Canvas
								classname="canvas"
								color={color}
								key={`delivery-${origin.x}-${origin.y}-${index}`}
								origin={origin}
								requests={requests}
							/>
						);
					})}
				</div>
			</>
		);
	};

	const renderGlobalInstallationRounds = () => {
		if (!installationRounds || !installationRounds.length) return null;

		return (
			<>
				<p>Installation Round</p>
				<div className="globalView">
					{installationRounds.map((deliveryRound, index) => {
						const { origin, requests } = deliveryRound;
						const color = colors[index % colors.length];

						return (
							<Canvas
								classname="canvas"
								color={color}
								key={`installation-${origin.x}-${origin.y}-${index}`}
								origin={origin}
								requests={requests}
							/>
						);
					})}
				</div>
			</>
		);
	};

	return (
		<div className="day">
			<div className="dayBanner">Day {index + 1}</div>
			{renderGlobalView()}
			<p>Number of trucks : {numberOfTrucks}</p>
			{deliveryRounds ? (
				<>
					<p className="italic pointer" onClick={onClickDelivery}>
						Delivery Round details...
					</p>
					<Collapse isOpened={deliveryCollapse}>
						{renderDeliveryRounds()}
					</Collapse>
				</>
			) : null}
			<p>Number of technicians : {numberOfTechnicians}</p>
			{installationRounds ? (
				<>
					<p className="italic pointer" onClick={onClickInstallation}>
						Installation Round details...
					</p>
					<Collapse isOpened={installationCollapse}>
						{renderInstallationRounds()}
					</Collapse>
				</>
			) : null}
		</div>
	);
};

export { Day };
