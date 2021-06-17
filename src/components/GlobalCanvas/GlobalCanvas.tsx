import React from "react";

import "./GlobalCanvas.css";
import { RoundModel } from "../../models/solution";

export interface GlobalCanvasProps {
    rounds: RoundModel[];
}

const GlobalCanvas: React.FC<GlobalCanvasProps> = (props) => {
    const { rounds } = props;

    const canvasRef = React.useRef<HTMLCanvasElement>(null);

    const drawRoutes = React.useCallback(
        (context: CanvasRenderingContext2D | null) => {
            if (!context) return;

            rounds.forEach((round) => {
                const { origin, requests } = round;
                const { x: xOrigin, y: yOrigin } = origin;

                context.fillStyle = "rgba(255, 0, 0, 1)";
                context.arc(xOrigin, yOrigin, 5, 0, 2 * Math.PI);
                context.fill();

                requests.forEach((request, index) => {
                    const previousLocation =
                        index > 0 ? requests[index - 1].location : origin;

                    const { location: currentLocation } = request;
                    const { x: xPrevious, y: yPrevious } = previousLocation;
                    const { x: xCurrent, y: yCurrent } = currentLocation;

                    context.beginPath();
                    context.fillStyle = "rgba(0, 0, 0, 1)";
                    context.arc(xCurrent, yCurrent, 4, 0, 2 * Math.PI);
                    context.fill();
                    context.strokeStyle = "rgba(160, 50, 180, 1)";
                    context.lineWidth = 2;
                    context.moveTo(xPrevious, yPrevious);
                    context.lineTo(xCurrent, yCurrent);
                    context.stroke();

                    const lastRequest = requests[requests.length - 1];
                    const { location } = lastRequest;
                    const { x, y } = location;
                    context.beginPath();
                    context.strokeStyle = "rgba(160, 50, 180, 1)";
                    context.lineWidth = 2;
                    context.moveTo(xOrigin, yOrigin);
                    context.lineTo(x, y);
                    context.stroke();
                });
            });
        },
        [rounds]
    );

    const drawGraph = React.useCallback(
        (context: CanvasRenderingContext2D | null) => {
            if (!context) return;

            context.strokeStyle = "rgba(0, 0, 0, 0.3)";
            context.strokeRect(0, 0, 800, 800);

            for (let index = 1; index < 16; index++) {
                const pixel = index * 50;
                context.beginPath();

                const isModulo100 = pixel % 100 === 0;
                const littleLine = "rgba(0, 0, 0, 0.1)";
                const bigLine = "rgba(0, 0, 0, 0.2)";
                context.strokeStyle = isModulo100 ? bigLine : littleLine;

                context.moveTo(pixel, 0);
                context.lineTo(pixel, 800);
                context.stroke();
            }

            for (let index = 1; index < 16; index++) {
                const pixel = index * 50;
                context.beginPath();

                const isModulo100 = pixel % 100 === 0;
                const littleLine = "rgba(0, 0, 0, 0.1)";
                const bigLine = "rgba(0, 0, 0, 0.2)";
                context.strokeStyle = isModulo100 ? bigLine : littleLine;

                context.moveTo(0, pixel);
                context.lineTo(800, pixel);
                context.stroke();
            }
        },
        []
    );

    React.useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const context = canvas.getContext("2d");
        drawRoutes(context);
        drawGraph(context);
    }, [drawRoutes, drawGraph]);

    return <canvas height="800" ref={canvasRef} width="800" />;
};

export { GlobalCanvas };
