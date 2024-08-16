# Reference

<details><summary><code>client.<a href="/src/Client.ts">metricsMetricsGet</a>() -> unknown</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Endpoint that serves Prometheus metrics.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.metricsMetricsGet();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `VocodeClient.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

##

## numbers

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">listNumbers</a>({ ...params }) -> Vocode.PhoneNumberPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.listNumbers();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListNumbersRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">getNumber</a>({ ...params }) -> Vocode.PhoneNumber</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.getNumber({
    phoneNumber: "phone_number",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">buyNumber</a>({ ...params }) -> Vocode.PhoneNumber</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.buyNumber();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.BuyPhoneNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">updateNumber</a>({ ...params }) -> Vocode.PhoneNumber</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.updateNumber({
    phoneNumber: "phone_number",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">cancelNumber</a>({ ...params }) -> Vocode.PhoneNumber</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.cancelNumber({
    phoneNumber: "phone_number",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.CancelNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.numbers.<a href="/src/api/resources/numbers/client/Client.ts">linkNumber</a>({ ...params }) -> Vocode.PhoneNumber</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.numbers.linkNumber({
    phoneNumber: "phone_number",
    telephonyAccountConnection: "telephony_account_connection",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.LinkPhoneNumberRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Numbers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## calls

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">listCalls</a>({ ...params }) -> Vocode.CallPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.listCalls();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListCallsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">getCall</a>({ ...params }) -> Vocode.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.getCall({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetCallRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">endCall</a>({ ...params }) -> Vocode.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.endCall({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.EndCallRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">createCall</a>({ ...params }) -> Vocode.Call</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.createCall({
    fromNumber: "from_number",
    toNumber: "to_number",
    agent: "agent",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.CreateCallRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.calls.<a href="/src/api/resources/calls/client/Client.ts">getRecording</a>({ ...params }) -> stream.Readable</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.calls.getRecording({
    id: "string",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetRecordingRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Calls.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Usage

<details><summary><code>client.usage.<a href="/src/api/resources/usage/client/Client.ts">getUsage</a>() -> Vocode.Usage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.usage.getUsage();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `Usage.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Actions

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">getAction</a>({ ...params }) -> Vocode.ActionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.getAction({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">listActions</a>({ ...params }) -> Vocode.ActionPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.listActions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListActionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">createAction</a>({ ...params }) -> Vocode.ActionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.createAction({
    type: "action_add_to_conference",
    config: {
        phoneNumber: "phone_number",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ActionParamsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.actions.<a href="/src/api/resources/actions/client/Client.ts">updateAction</a>({ ...params }) -> Vocode.ActionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.actions.updateAction({
    id: "id",
    body: {
        type: "action_add_to_conference",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateActionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Actions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Agents

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">getAgent</a>({ ...params }) -> Vocode.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.getAgent({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">listAgents</a>({ ...params }) -> Vocode.AgentPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.listAgents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListAgentsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">createAgent</a>({ ...params }) -> Vocode.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.createAgent({
    prompt: "prompt",
    voice: "voice",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.AgentParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.agents.<a href="/src/api/resources/agents/client/Client.ts">updateAgent</a>({ ...params }) -> Vocode.Agent</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.agents.updateAgent({
    id: "id",
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateAgentRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Agents.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Voices

<details><summary><code>client.voices.<a href="/src/api/resources/voices/client/Client.ts">getVoice</a>({ ...params }) -> Vocode.VoiceResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voices.getVoice({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetVoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.voices.<a href="/src/api/resources/voices/client/Client.ts">listVoices</a>({ ...params }) -> Vocode.VoicePage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voices.listVoices();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListVoicesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.voices.<a href="/src/api/resources/voices/client/Client.ts">createVoice</a>({ ...params }) -> Vocode.VoiceResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voices.createVoice({
    type: "voice_azure",
    voiceName: "voice_name",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.VoiceParamsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.voices.<a href="/src/api/resources/voices/client/Client.ts">updateVoice</a>({ ...params }) -> Vocode.VoiceResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.voices.updateVoice({
    id: "id",
    body: {
        type: "voice_azure",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateVoiceRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Voices.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Webhooks

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">getWebhook</a>({ ...params }) -> Vocode.Webhook</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.getWebhook({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetWebhookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">listWebhooks</a>({ ...params }) -> Vocode.WebhookPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.listWebhooks();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListWebhooksRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">createWebhook</a>({ ...params }) -> Vocode.Webhook</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.createWebhook({
    subscriptions: [Vocode.EventType.EventMessage],
    url: "url",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.WebhookParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.webhooks.<a href="/src/api/resources/webhooks/client/Client.ts">updateWebhook</a>({ ...params }) -> Vocode.Webhook</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.webhooks.updateWebhook({
    id: "id",
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateWebhookRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Webhooks.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Prompts

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">getPrompt</a>({ ...params }) -> Vocode.Prompt</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.getPrompt({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetPromptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">listPrompts</a>({ ...params }) -> Vocode.PromptPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.listPrompts();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListPromptsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">createPrompt</a>({ ...params }) -> Vocode.Prompt</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.createPrompt({});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.PromptParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.prompts.<a href="/src/api/resources/prompts/client/Client.ts">updatePrompt</a>({ ...params }) -> Vocode.Prompt</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.prompts.updatePrompt({
    id: "id",
    body: {},
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdatePromptRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Prompts.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## VectorDatabases

<details><summary><code>client.vectorDatabases.<a href="/src/api/resources/vectorDatabases/client/Client.ts">getVectorDatabase</a>({ ...params }) -> Vocode.PineconeVectorDatabase</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vectorDatabases.getVectorDatabase({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetVectorDatabaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VectorDatabases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vectorDatabases.<a href="/src/api/resources/vectorDatabases/client/Client.ts">listVectorDatabases</a>({ ...params }) -> Vocode.VectorDatabasePage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vectorDatabases.listVectorDatabases();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListVectorDatabasesRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VectorDatabases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vectorDatabases.<a href="/src/api/resources/vectorDatabases/client/Client.ts">createVectorDatabase</a>({ ...params }) -> Vocode.PineconeVectorDatabase</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vectorDatabases.createVectorDatabase({
    type: "vector_database_pinecone",
    index: "index",
    apiKey: "api_key",
    apiEnvironment: "api_environment",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.PineconeVectorDatabaseParams`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VectorDatabases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.vectorDatabases.<a href="/src/api/resources/vectorDatabases/client/Client.ts">updateVectorDatabase</a>({ ...params }) -> Vocode.PineconeVectorDatabase</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.vectorDatabases.updateVectorDatabase({
    id: "id",
    body: {
        type: "vector_database_pinecone",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateVectorDatabaseRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VectorDatabases.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## AccountConnections

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">getAccountConnection</a>({ ...params }) -> Vocode.AccountConnectionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.getAccountConnection({
    id: "id",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.GetAccountConnectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">listAccountConnections</a>({ ...params }) -> Vocode.AccountConnectionPage</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.listAccountConnections();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.ListAccountConnectionsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">createAccountConnection</a>({ ...params }) -> Vocode.AccountConnectionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.createAccountConnection({
    credentials: {
        openaiApiKey: "openai_api_key",
    },
    type: "account_connection_openai",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.AccountConnectionParamsRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">updateAccountConnection</a>({ ...params }) -> Vocode.AccountConnectionResponseModel</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.updateAccountConnection({
    id: "id",
    body: {
        type: "account_connection_openai",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.UpdateAccountConnectionRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">addToSteeringPool</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.addToSteeringPool({
    id: "id",
    body: undefined,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.AddToSteeringPoolRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.accountConnections.<a href="/src/api/resources/accountConnections/client/Client.ts">removeFromSteeringPool</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.accountConnections.removeFromSteeringPool({
    id: "id",
    phoneNumber: "phone_number",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `Vocode.RemoveFromSteeringPoolRequest`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `AccountConnections.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
