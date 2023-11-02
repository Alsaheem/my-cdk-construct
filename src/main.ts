import {
  cloudRunService,
  cloudRunServiceIamMember,
  computeGlobalAddress,
} from "@cdktf/provider-google";
import {
  googleComputeBackendService,
  googleComputeGlobalForwardingRule,
  googleComputeRegionNetworkEndpointGroup,
  googleComputeTargetHttpProxy,
  googleComputeUrlMap,
} from "@cdktf/provider-google-beta";
import { GoogleBetaProvider } from "@cdktf/provider-google-beta/lib/provider";
import { TerraformOutput } from "cdktf";
import { Construct } from "constructs";

export interface IYassirCloudRunServiceProps {
  image: string;
  environment: string;
  projectId: string;
  defaultRegion: string;
  containerPort: number;
  domains: string[];
  googleBetaProvider: GoogleBetaProvider;
}

export class YassirHttpCloudRunService extends Construct {
  constructor(
    scope: Construct,
    id: string,
    props: IYassirCloudRunServiceProps
  ) {
    super(scope, id);

    const cloudrun_service = new cloudRunService.CloudRunService(
      this,
      "brand_website_frontend",
      {
        name: `generic-cloudrun-service-${props.environment}`,

        location: props.defaultRegion,
        template: {
          metadata: {
            labels: {
              "run.googleapis.com/startupProbeType": "Default",
            },
            annotations: {
              "autoscaling.knative.dev/minScale": "1",
            },
          },
          spec: {
            containers: [
              {
                image: props?.image ?? "nginx:latest",

                ports: [
                  {
                    containerPort: props?.containerPort ?? 80,
                    name: "http1",
                  },
                ],

                resources: {
                  limits: {
                    cpu: "1000m",
                    memory: "512Mi",
                  },
                },
              },
            ],
          },
        },
        project: props.projectId,
      }
    );

    new cloudRunServiceIamMember.CloudRunServiceIamMember(
      this,
      "brand_website_frontend_run_member",
      {
        service: cloudrun_service.name,
        location: cloudrun_service.location,
        role: "roles/run.invoker",
        member: "allUsers",
        project: props.projectId,
      }
    );

    const external_ip = new computeGlobalAddress.ComputeGlobalAddress(
      this,
      "brand_website_frontend_ip",
      {
        name: "generic-cloudrun-service",
        project: props.projectId,
      }
    );

    const netgroup =
      new googleComputeRegionNetworkEndpointGroup.GoogleComputeRegionNetworkEndpointGroup(
        this,
        "brand_website_frontend_endpoint_group",
        {
          provider: props.googleBetaProvider,

          name: "generic-cloudrun-service-endpoint-group",

          networkEndpointType: "SERVERLESS",
          region: cloudrun_service.location,
          cloudRun: {
            service: cloudrun_service.name,
          },
        }
      );

    const backend_service =
      new googleComputeBackendService.GoogleComputeBackendService(
        this,
        "brand_website_frontend_backend_service",
        {
          provider: props.googleBetaProvider,
          project: props.projectId,
          name: "generic-cloudrun-service-backend-service",

          loadBalancingScheme: "EXTERNAL",
          protocol: "HTTPS",
          enableCdn: true,

          backend: [
            {
              group: netgroup.id,
            },
          ],
        }
      );

    const ump = new googleComputeUrlMap.GoogleComputeUrlMap(
      this,
      "brand_website_frontend_urlmap",
      {
        provider: props.googleBetaProvider,

        name: "generic-cloudrun-service-urlmap",

        defaultService: backend_service.id,
      }
    );

    const httptargetproxy =
      new googleComputeTargetHttpProxy.GoogleComputeTargetHttpProxy(
        this,
        "brand_website_frontend_http_proxy",
        {
          provider: props.googleBetaProvider,

          name: "generic-cloudrun-service",

          urlMap: ump.id,
        }
      );

    new googleComputeGlobalForwardingRule.GoogleComputeGlobalForwardingRule(
      this,
      "brand_website_frontend_http_forwarding_rule",
      {
        provider: props.googleBetaProvider,

        name: "generic-cloudrun-service-http-fw",

        target: httptargetproxy.id,
        portRange: "80",
        ipAddress: external_ip.address,
        loadBalancingScheme: "EXTERNAL",
      }
    );

    new TerraformOutput(this, "brand_website_frontend_external_ip", {
      value: external_ip.address,
    });
  }
}
