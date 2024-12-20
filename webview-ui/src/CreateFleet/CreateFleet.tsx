// import { useEffect } from "react";
import { InitialState } from "../../../src/webview-contract/webviewDefinitions/createFleet";
// import { CreateFleetState, Stage } from "./helpers/state";
// import { useStateManagement } from "../utilities/state";
// import { Stage, stateUpdater, vscode } from "./helpers/state";

export function CreateFleet(initialState: InitialState) {
    // const state: CreateFleetState = {
    //     stage: Stage.CollectingInput, // hardcoded
    //     subscriptionId: initialState.subscriptionId,
    //     subscriptionName: initialState.subscriptionName,
    // };
    // const { state, eventHandlers } = useStateManagement(stateUpdater, initialState, vscode);

    // useEffect(() => {
    //     if (state.stage === Stage.Uninitialized) {
    //         vscode.postGetLocationsRequest();
    //         vscode.postGetResourceGroupsRequest();
    //         eventHandlers.onSetInitializing();
    //     }
    // });

    // function getBody() {
    //     switch (state.stage) {
    //         case Stage.Uninitialized:
    //         case Stage.Loading:
    //             return <p>Loading...</p>;
    //         case Stage.CollectingInput:
    //             return (
    //                 <>
    //                     <h1>Create AKS Fleet Manager</h1>
    //                     {/* <label>Subscription: {stateUpdater.subscriptionName}</label>
    //                     {getBody()} */}
    //                     <p>Initial State: {JSON.stringify(initialState)}</p>
    //                 </>
    //             );
    //     }
    // }

    return (
        <>
            <h1>Create AKS Fleet Manager</h1>
            <h2>Subscription: hardcoded AKS Long Running Things</h2>
            <p>Initial State: {JSON.stringify(initialState)}</p>
            <p>Some Testing texts</p>
        </>
    );
}
