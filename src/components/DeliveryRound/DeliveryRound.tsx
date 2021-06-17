import React from "react";

import "./DeliveryRound.css";
import { Canvas } from "../Canvas";
import { RoundModel } from "../../models/solution";
import { Round } from "../Round";

export interface DeliveryRoundProps {
    deliveryRound: RoundModel;
    index: number;
}

const DeliveryRound: React.FC<DeliveryRoundProps> = (props) => {
    const { deliveryRound, index } = props;
    const { origin, requests } = deliveryRound;

    return (
        <div>
            <p>Delivery Round : {index + 1}</p>
            <div className="deliveryRound">
                <Canvas origin={origin} requests={requests} />
                <Round origin={origin} requests={requests} />
            </div>
        </div>
    );
};

export { DeliveryRound };
