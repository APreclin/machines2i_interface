import React from "react";
import classNames from "classnames";

import "./Canvas.css";
import { Location, Request } from "../../models/solution";

export interface CanvasProps {
	origin: Location;
	requests: Request[];
}

const Canvas: React.FC<CanvasProps> = (props) => {
	const { origin, requests } = props;
	const { x: xOrigin, y: yOrigin } = origin;

	const canvasRef = React.useRef<HTMLCanvasElement>(null);

	const drawRoute = (context: CanvasRenderingContext2D | null) => {
		if (!context) return;

		context.beginPath();
		context.moveTo(xOrigin, yOrigin);

		requests.forEach((request) => {
			const { location } = request;
			const { x, y } = location;

			context.lineTo(x, y);
		});

		context.lineTo(xOrigin, yOrigin);

		context.closePath();
		context.stroke();
	};

	React.useEffect(() => {
		const canvas = canvasRef.current;

		if (!canvas) return;

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;

		const context = canvas.getContext("2d");
		drawRoute(context);
	}, [drawRoute]);

	return <canvas ref={canvasRef} />;
};

export { Canvas };
