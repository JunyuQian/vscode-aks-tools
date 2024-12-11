const { ContainerServiceFleetClient } = require("@azure/arm-containerservicefleet");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to Creates or updates a Fleet.
 *
 * @summary Creates or updates a Fleet.
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/Fleets_CreateOrUpdate.json
 */
async function createsAFleetResourceWithALongRunningOperation() {
    const subscriptionId =
        process.env["359833f5-8592-40b6-8175-edc664e2196a"] || "359833f5-8592-40b6-8175-edc664e2196a";
    const resourceGroupName = process.env["junyuqian"] || "junyuqian";
    const fleetName = "junyu-vscode-fleet";
    const resource = {
        location: "Australia East",
        tags: { archv2: "", tier: "production" },
    };
    const credential = new DefaultAzureCredential();
    const client = new ContainerServiceFleetClient(credential, subscriptionId);
    const result = await client.fleets.beginCreateOrUpdateAndWait(resourceGroupName, fleetName, resource);
    console.log(result);
}

/**
 * This sample demonstrates how to Create a FleetMember
 *
 * @summary Create a FleetMember
 * x-ms-original-file: specification/containerservice/resource-manager/Microsoft.ContainerService/fleet/stable/2023-10-15/examples/FleetMembers_Create.json
 */
async function createsAFleetMemberResourceWithALongRunningOperation() {
    const subscriptionId =
        process.env["359833f5-8592-40b6-8175-edc664e2196a"] || "359833f5-8592-40b6-8175-edc664e2196a";
    const resourceGroupName = process.env["junyuqian"] || "junyuqian";
    const fleetName = "junyu-vscode-fleet";
    const fleetMemberName = "au-east-test-cluster";
    const resource = {
        clusterResourceId:
            "/subscriptions/359833f5-8592-40b6-8175-edc664e2196a/resourceGroups/junyuqian/providers/Microsoft.ContainerService/managedClusters/junyu-vscode-cluster",
    };
    const credential = new DefaultAzureCredential();
    const client = new ContainerServiceFleetClient(credential, subscriptionId);
    const result = await client.fleetMembers.beginCreateAndWait(
        resourceGroupName,
        fleetName,
        fleetMemberName,
        resource,
    );
    console.log(result);
}

// createsAFleetResourceWithALongRunningOperation();
// createsAFleetMemberResourceWithALongRunningOperation();
