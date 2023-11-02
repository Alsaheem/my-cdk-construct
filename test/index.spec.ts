import { GoogleProvider } from "@cdktf/provider-google/lib/provider";
import { GoogleBetaProvider } from "@cdktf/provider-google-beta/lib/provider";
import { Testing } from "cdktf";
import { Construct } from "constructs";
import { LordOfTheRingsStack } from "../src/integ.default";
import { YassirHttpCloudRunService } from "../src/main";

test("synthesizes the null provider", () => {
  const app = Testing.app();
  class MyStack extends LordOfTheRingsStack {
    constructor(scope: Construct, id: string) {
      super(scope, id);
      const project_id = "certification-project-362801";

      // Equivalent to having a variables.tf available

      new GoogleProvider(this, "GoogleAuthTest", {
        region: "europe-west1",
        zone: "europe-west1-d",
      });

      const googleBetaProvider = new GoogleBetaProvider(
        this,
        "GoogleBetaAuthTest",
        {
          project: project_id,
        }
      );

      new YassirHttpCloudRunService(this, "cloudrun-service-test", {
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
  const stack = new MyStack(app, "MyStack");
  expect(Testing.synth(stack)).not.toContain(`
  "terraform": {
    "required_providers": {
      "google": {
        "source": "google",
        "version": "5.4.0"
      },
      "google-beta": {
        "source": "google-beta",
        "version": "5.4.0"
      }
    }
  }
}"
  `);
});
