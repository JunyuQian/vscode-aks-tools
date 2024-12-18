// import { useEffect } from "react";
import { InitialState } from "../../../src/webview-contract/webviewDefinitions/createFleet";
// import { useStateManagement } from "../utilities/state";
// import { Stage, stateUpdater, vscode } from "./helpers/state";

export function CreateFleet(initialState: InitialState) {
    // const { state, eventHandlers } = useStateManagement(stateUpdater, initialState, vscode);

    // useEffect(() => {
    //     if (state.stage === Stage.Uninitialized) {
    //         vscode.postGetLocationsRequest();
    //         vscode.postGetResourceGroupsRequest();
    //         eventHandlers.onSetInitializing();
    //     }
    // });

    return (
        <>
            <h1>Create AKS Fleet Manager</h1>
            {/* <label>Subscription: {stateUpdater.subscriptionName}</label>
            {getBody()} */}
            <p>Initial State: {JSON.stringify(initialState)}</p>
        </>
    );
}
