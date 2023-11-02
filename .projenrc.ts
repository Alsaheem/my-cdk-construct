import { cdktf } from "projen";
import { NpmAccess } from "projen/lib/javascript";

const project = new cdktf.ConstructLibraryCdktf({
  author: "alsaheem",
  authorAddress: "adebisiayomide07@gmail.com",
  defaultReleaseBranch: "main",
  jsiiVersion: "^5.1.0",
  cdktfVersion: "0.19.0",
  minNodeVersion: "18.12.0",
  name: "my-cdk-construct",
  npmAccess: NpmAccess.PUBLIC,
  prettier: true,
  projenrcTs: true,
  repositoryUrl: "https://github.com/alsaheem/my-cdk-construct.git",
  githubOptions: {
    mergify: false,
  },
  // Release Configuration

  // Requires "NPM_TOKEN" secret to be set in the secrets of the Github repository
  releaseToNpm: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
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
