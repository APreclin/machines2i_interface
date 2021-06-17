import React from "react";

import "./Round.css";
import { Location, Request } from "../../models/solution";

export interface RoundProps {
    origin: Location;
    requests: Request[];
}

const Round: React.FC<RoundProps> = (props) => {
    const { origin, requests } = props;
    const { x: xOrigin, y: yOrigin } = origin;

    const renderRoutes = () => {
        return requests.map((request, index) => {
            const previousLocation =
                index > 0 ? requests[index - 1].location : origin;

            const idPrevious = index > 0 ? requests[index - 1].id : "Origin";

            const { id: idCurrent, location: currentLocation } = request;
            const { x: xPrevious, y: yPrevious } = previousLocation;
            const { x: xCurrent, y: yCurrent } = currentLocation;

            return (
                <div key={index}>
                    {idPrevious} ({xPrevious}, {yPrevious}) -&gt; {idCurrent} (
                    {xCurrent}, {yCurrent})
                </div>
            );
        });
    };

    const renderLastRoute = () => {
        const lastRequest = requests[requests.length - 1];
        const { id, location } = lastRequest;
        const { x, y } = location;

        return (
            <div>
                {id} ({x}, {y}) -&gt; Origin ({xOrigin}, {yOrigin})
            </div>
        );
    };

    return (
        <div className="round">
            <p>Routes : </p>
            {renderRoutes()}
            {renderLastRoute()}
        </div>
    );
};

export { Round };
