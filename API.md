# cdktf-construct-projen-template

A projen template for CDKTF constructs authored by HashiCorp (internal use only)

## Compatibility

- `node` >= 18.12.0
- `cdktf` >= 0.19.0
- `constructs` >= 10.0.25

## How to Use

1. Navigate to [github.com/cdktf/construct-projen-template](https://github.com/cdktf/construct-projen-template) using your browser
2. Click on "Use this template" in the top-right of the screen

See [here](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) for full instructions, including screenshots.

Once the repository is created, add the following [GitHub Actions secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets#creating-encrypted-secrets-for-a-repository):

- `PROJEN_GITHUB_TOKEN`: should be a Classic, nonexpiring token associated with the [team-tf-cdk](https://github.com/team-tf-cdk) account with the following scopes:
  - `read:user`
  - `repo`
  - `workflow`
- Depending on which language(s)/package manager(s) you'd like to publish to:
  - npm (TypeScript)
    - `NPM_TOKEN`
  - Maven Central (Java)
    - `MAVEN_GPG_PRIVATE_KEY`
    - `MAVEN_GPG_PRIVATE_KEY_PASSPHRASE`
    - `MAVEN_PASSWORD`
    - `MAVEN_USERNAME`
    - `MAVEN_STAGING_PROFILE_ID`
  - PyPI (Python)
    - `TWINE_USERNAME`
    - `TWINE_PASSWORD`
  - NuGet (C#)
    - `NUGET_API_KEY`
  - GitHub (Go)
    - `GO_GITHUB_TOKEN`

# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### YassirHttpCloudRunService <a name="YassirHttpCloudRunService" id="@cdktf/construct-projen-template.YassirHttpCloudRunService"></a>

#### Initializers <a name="Initializers" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer"></a>

```typescript
import { YassirHttpCloudRunService } from '@cdktf/construct-projen-template'

new YassirHttpCloudRunService(scope: Construct, id: string, props: IYassirCloudRunServiceProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.props">props</a></code> | <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps">IYassirCloudRunServiceProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps">IYassirCloudRunServiceProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.isConstruct"></a>

```typescript
import { YassirHttpCloudRunService } from '@cdktf/construct-projen-template'

YassirHttpCloudRunService.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/construct-projen-template.YassirHttpCloudRunService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/construct-projen-template.YassirHttpCloudRunService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---




## Protocols <a name="Protocols" id="Protocols"></a>

### IYassirCloudRunServiceProps <a name="IYassirCloudRunServiceProps" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps"></a>

- *Implemented By:* <a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps">IYassirCloudRunServiceProps</a>


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.containerPort">containerPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.defaultRegion">defaultRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.environment">environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.googleBetaProvider">googleBetaProvider</a></code> | <code>@cdktf/provider-google-beta.provider.GoogleBetaProvider</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |

---

##### `containerPort`<sup>Required</sup> <a name="containerPort" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.containerPort"></a>

```typescript
public readonly containerPort: number;
```

- *Type:* number

---

##### `defaultRegion`<sup>Required</sup> <a name="defaultRegion" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.defaultRegion"></a>

```typescript
public readonly defaultRegion: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.environment"></a>

```typescript
public readonly environment: string;
```

- *Type:* string

---

##### `googleBetaProvider`<sup>Required</sup> <a name="googleBetaProvider" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.googleBetaProvider"></a>

```typescript
public readonly googleBetaProvider: GoogleBetaProvider;
```

- *Type:* @cdktf/provider-google-beta.provider.GoogleBetaProvider

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/construct-projen-template.IYassirCloudRunServiceProps.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

