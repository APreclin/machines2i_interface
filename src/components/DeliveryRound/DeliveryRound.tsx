import React from "react";
import classNames from "classnames";

import "./DeliveryRound.css";
import { Canvas } from "../Canvas";
import { DeliveryRoundModel } from "../../models/solution";

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
			<Canvas origin={depot} requests={requests} />
		</div>
	);
};

export { DeliveryRound };
