import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { GoogleBetaProvider } from "@cdktf/provider-google-beta/lib/provider";
import { App, TerraformStack } from "cdktf";
import { Construct } from "constructs";
import { YassirHttpCloudRunService } from "./main";

export class LordOfTheRingsStack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const project_id = "certification-project-362801";

    new GoogleProvider(this, "GoogleAuth", {
      region: "europe-west1",
      zone: "europe-west1-d",
    });

    const googleBetaProvider = new GoogleBetaProvider(this, "GoogleBetaAuth", {
      project: project_id,
    });

    new YassirHttpCloudRunService(this, "cloudrun-service", {
      image: "nginx:latest",
      containerPort: 80,
      googleBetaProvider: googleBetaProvider,
      domains: ["adebisiayomide.com"],
      environment: "dev",
      defaultRegion: "europe-west1",
      projectId: project_id,
    });
  }
}

const app = new App();

// change per environment
new LordOfTheRingsStack(app, "lord-of-the-rings-dev");

app.synth();
