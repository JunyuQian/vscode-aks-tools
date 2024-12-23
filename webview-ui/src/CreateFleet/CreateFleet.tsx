// import { useEffect } from "react";
import React, { FormEvent, useState } from "react";
import { InitialState } from "../../../src/webview-contract/webviewDefinitions/createFleet";
import { VSCodeDropdown, VSCodeOption } from "@vscode/webview-ui-toolkit/react";
import { invalid, unset, valid, Validatable } from "../utilities/validation";
// import { CreateFleetState, Stage } from "./helpers/state";
// import { useStateManagement } from "../utilities/state";
// import { Stage, stateUpdater, vscode } from "./helpers/state";

type ChangeEvent = Event | FormEvent<HTMLElement>;

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
    const [existingResourceGroup, setExistingResourceGroup] = useState<Validatable<string | null>>(unset());
    // should be ResourceGroup type rather than String
    // const [existingResourceGroup, setExistingResourceGroup] = useState<Validatable<ResourceGroup | null>>(unset());
    const [fleetName, setFleetName] = useState("");
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const resourceGroups = ["Group1", "Group2", "Group3"]; // hardcoded resource groups

    function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        // Handle form submission logic here
        console.log("Fleet Name:", fleetName);
        console.log("Resource Group:", existingResourceGroup);
    }

    function getBody() {
        // switch (state.stage) {
        //     case Stage.Uninitialized:
        //     case Stage.Loading:
        //         return <p>Loading...</p>;
        //     case Stage.CollectingInput:
        //         return (
        //             <>
        //                 <h1>Create AKS Fleet Manager</h1>
        //                 {/* <label>Subscription: {stateUpdater.subscriptionName}</label>
        //                 {getBody()} */}
        //                 <p>Initial State: {JSON.stringify(initialState)}</p>
        //             </>
        //         );
        // }
        return (
            // below should be under Stage.CollectingInput
            <>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fleetName">Fleet Name:</label>
                        <input
                            type="text"
                            id="fleetName"
                            value={fleetName}
                            onChange={(e) => setFleetName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="resourceGroup">Resource Group:</label>
                        <VSCodeDropdown
                            id="existing-resource-group-dropdown"
                            // className={styles.midControl}
                            onBlur={handleValidationAndIndex}
                            onChange={handleValidationAndIndex}
                            selectedIndex={selectedIndex}
                            aria-label="Select a resource group"
                        >
                            <VSCodeOption selected value="">
                                Select
                            </VSCodeOption>
                            {resourceGroups.length > 0 ? (
                                resourceGroups.map((group) => (
                                    <VSCodeOption key={group} value={group}>
                                        {/* {group === newResourceGroup ? "(New)" : ""} {group} */}
                                        {""} {group}
                                    </VSCodeOption>
                                ))
                            ) : (
                                <VSCodeOption disabled>No resource groups available</VSCodeOption>
                            )}
                        </VSCodeDropdown>
                    </div>
                    <button type="submit">Create</button>
                </form>
            </>
        );
    }

    function handleValidationAndIndex(e: ChangeEvent) {
        handleExistingResourceGroupChange(e);
        const ele = e.currentTarget as HTMLSelectElement;
        setSelectedIndex(ele.selectedIndex);
    }

    function handleExistingResourceGroupChange(e: ChangeEvent) {
        const elem = e.currentTarget as HTMLSelectElement;
        const resourceGroup = elem.selectedIndex <= 0 ? null : resourceGroups[elem.selectedIndex - 1];
        const validatable = resourceGroup ? valid(resourceGroup) : invalid(null, "Resource Group is required.");
        setExistingResourceGroup(validatable);
    }

    return (
        <>
            <h1>Create AKS Fleet Manager</h1>
            <label>Subscription: hardcoded AKS Long Running Things</label>
            <p>Initial State: {JSON.stringify(initialState)}</p>
            {getBody()}
        </>
    );
}
