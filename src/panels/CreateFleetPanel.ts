import { Uri } from "vscode";
import { BasePanel, PanelDataProvider } from "./BasePanel";
import { TelemetryDefinition } from "../webview-contract/webviewTypes";
import { MessageHandler, MessageSink } from "../webview-contract/messaging";
import {
    InitialState,
    // HubClusterMode,
    // ProgressEventType,
    ToVsCodeMsgDef,
    ToWebViewMsgDef,
    // ResourceGroup as WebviewResourceGroup,
} from "../webview-contract/webviewDefinitions/createFleet";

export class CreateFleetPanel extends BasePanel<"createFleet"> {
    constructor(extensionUri: Uri) {
        super(extensionUri, "createFleet", {
            getLocationsResponse: null,
            getResourceGroupsResponse: null,
            progressUpdate: null,
        });
    }
}

export class CreateFleetDataProvider implements PanelDataProvider<"createFleet"> {
    constructor(
        private readonly subscriptionId: string,
        private readonly subscriptionName: string,
    ) {}

    getTitle(): string {
        return "Create Fleet";
    }

    getInitialState(): InitialState {
        return {
            subscriptionId: this.subscriptionId,
            subscriptionName: this.subscriptionName,
        };
    }

    getTelemetryDefinition(): TelemetryDefinition<"createFleet"> {
        return {
            getResourceGroupsRequest: false,
            getLocationsRequest: false,
            createFleetRequest: true,
        };
    }

    getMessageHandler(webview: MessageSink<ToWebViewMsgDef>): MessageHandler<ToVsCodeMsgDef> {
        return {
            getLocationsRequest: () => this.handleGetLocationsRequest(webview),
            getResourceGroupsRequest: () => this.handleGetResourceGroupsRequest(webview),
            createFleetRequest: () =>
                this
                    .handleCreateFleetRequest
                    // args.isNewResourceGroup,
                    // args.resourceGroupName,
                    // args.location,
                    // args.name,
                    // args.hubClusterMode,
                    // webview,
                    (),
        };
    }

    private handleGetLocationsRequest(webview: MessageSink<ToWebViewMsgDef>) {
        console.log(webview);
    }

    private handleGetResourceGroupsRequest(webview: MessageSink<ToWebViewMsgDef>) {
        console.log(webview);
    }

    private handleCreateFleetRequest() // location: string, // resourceGroupName: string, // isNewResourceGroup: boolean,
    // name: string,
    // hubClusterMode: HubClusterMode,
    // webview: MessageSink<ToWebViewMsgDef>,
    {}
}
