import React from "react";

import "./DeliveryRound.css";
import { Canvas } from "../Canvas";
import { DeliveryRoundModel } from "../../models/solution";
import { Round } from "../Round";

export interface DeliveryRoundProps {
	deliveryRound: DeliveryRoundModel;
	index: number;
}

const DeliveryRound: React.FC<DeliveryRoundProps> = (props) => {
	const { deliveryRound, index } = props;
	const { depot, requests } = deliveryRound;

	return (
		<div>
			<p>Delivery Round : {index + 1}</p>
			<div className="deliveryRound">
				<Canvas origin={depot} requests={requests} />
				<Round origin={depot} requests={requests} />
			</div>
		</div>
	);
};

export { DeliveryRound };
