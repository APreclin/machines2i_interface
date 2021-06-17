import React from "react";

import "./InstallationRound.css";
import { Canvas } from "../Canvas/Canvas";
import { RoundModel } from "../../models/solution";
import { Round } from "../Round";

export interface InstallationRoundProps {
    index: number;
    installationRound: RoundModel;
}

const InstallationRound: React.FC<InstallationRoundProps> = (props) => {
    const { index, installationRound } = props;
    const { origin, requests } = installationRound;

    return (
        <div>
            <p>Installation Round : {index + 1}</p>
            <div className="installationRound">
                <Canvas origin={origin} requests={requests} />
                <Round origin={origin} requests={requests} />
            </div>
        </div>
    );
};

export { InstallationRound };
