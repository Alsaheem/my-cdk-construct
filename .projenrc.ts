import { cdktf } from "projen";

const project = new cdktf.ConstructLibraryCdktf({
  author: "alsaheem",
  authorAddress: "adebisiayomide07@gmail.com",
  defaultReleaseBranch: "main",
  jsiiVersion: "^5.1.0",
  cdktfVersion: "0.19.0",
  minNodeVersion: "18.12.0",
  name: "my-cdk-construct",
  prettier: true,
  projenrcTs: true,
  repositoryUrl: "https://github.com/alsaheem/my-cdk-construct.git",
  githubOptions: {
    mergify: false,
  },
  releaseToNpm: true,
  // Release Configuration

  // Requires "NPM_TOKEN" secret to be set in the secrets of the Github repository
});
project.addPeerDeps(
  "cdktf@>=0.19.0",
  "@cdktf/provider-google",
  "@cdktf/provider-google-beta",
  "@cdktf/provider-null@>=9.0.0",
  "constructs@^10.0.25"
);
project.addDevDeps(
  "@cdktf/provider-google",
  "@cdktf/provider-google-beta",
  "change-case",
  "@action-validator/core",
  "@action-validator/cli",
  "node-fetch@~2" // @TODO this can be removed once we upgrade to Node 18 and use native fetc
);
project.synth();
