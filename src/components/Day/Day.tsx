import React from "react";
import { Collapse } from "react-collapse";

import "./Day.css";
import { DayModel } from "../../models/solution";
import { DeliveryRound } from "../DeliveryRound";
import { InstallationRound } from "../InstallationRound";
import { GlobalCanvas } from "../GlobalCanvas/GlobalCanvas";

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
                    {deliveryRounds ? (
                        <>
                            <p>Delivery Round</p>
                            <GlobalCanvas rounds={deliveryRounds} />
                        </>
                    ) : null}
                    {installationRounds ? (
                        <>
                            <p>Installation Round</p>
                            <GlobalCanvas rounds={installationRounds} />
                        </>
                    ) : null}
                </Collapse>
            </>
        );
    };

    return (
        <div className="day">
            <div className="dayBanner">Day {index + 1}</div>
            {renderGlobalView()}
            <p>Number of trucks : {numberOfTrucks}</p>
            <p className="italic pointer" onClick={onClickDelivery}>
                Delivery Round details...
            </p>
            <Collapse isOpened={deliveryCollapse}>
                {renderDeliveryRounds()}
            </Collapse>
            <p>Number of technicians : {numberOfTechnicians}</p>
            <p className="italic pointer" onClick={onClickInstallation}>
                Installation Round details...
            </p>
            <Collapse isOpened={installationCollapse}>
                {renderInstallationRounds()}
            </Collapse>
        </div>
    );
};

export { Day };
