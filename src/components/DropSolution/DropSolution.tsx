import React from "react";
import { useDropzone } from "react-dropzone";
import classNames from "classnames";

import { SolutionModel } from "../../models/solution";
import "./DropSolution.css";

export interface DropSolutionProps {
	parentCallback: (obj: SolutionModel) => void;
}

const DropSolution: React.FC<DropSolutionProps> = (props) => {
	const { parentCallback } = props;

	const [files, setFiles] = React.useState<File[]>([]);
	const [selectedFile, setSelectedFile] = React.useState<File>();
	const [objJson, setObjJson] = React.useState<SolutionModel>();
	const btnDisplay = React.useRef<HTMLButtonElement>(null);

	const onClick = () => {
		if (!objJson) return;

		parentCallback(objJson);
	};

	const onDrop = React.useCallback(
		(acceptedFiles: File[]) => {
			acceptedFiles.forEach((file) => {
				if (!files.includes(file)) setFiles([...files, file]);
			});
		},
		[files]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		noClick: true,
	});

	const renderFiles = () => {
		return <div>{files.map((file, index) => renderFile(file, index))}</div>;
	};

	const renderFile = (file: File, index: number) => {
		const { lastModified, name } = file;
		const lastModifiedDate = new Date(lastModified).toUTCString();

		const onClick = () => {
			setSelectedFile(file);
			file.text().then((data) => setObjJson(JSON.parse(data)));
		};

		const isSelected =
			name === selectedFile?.name && lastModified === selectedFile.lastModified;

		const classFile = classNames("file", { selected: isSelected });

		return (
			<div
				className={classFile}
				key={`${name} - ${lastModified} - ${index}`}
				onClick={onClick}
			>
				{name} - {lastModifiedDate}
			</div>
		);
	};

	// TODO: useEffect to set objJson

	return (
		<div>
			<div className="dropZone" {...getRootProps()}>
				<input {...getInputProps()} />
				<>
					<p>Drop some files here</p>
					{renderFiles()}
				</>
			</div>
			<button className="button" onClick={onClick} ref={btnDisplay}>
				Display solution
			</button>
		</div>
	);
};

export { DropSolution };
