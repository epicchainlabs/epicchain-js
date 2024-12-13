## 🎉 **Event Emitters**

Event emitters are crucial components within the EpicChain ecosystem, helping to trigger and listen for specific actions across various modules. Below is an overview of the **event emitters** available across different classes, along with the possible **payload properties** for each event.

### 🚀 **`epicchain`**

- **N/A**: The `epicchain` class does not emit any events directly.

---

### 🔧 **`core/api`**

#### 🟢 **`ready`**

This event indicates that the API is fully initialized and ready for interaction.

```js
null
```

No additional data is emitted with this event.

#### 🟡 **`storage:insert`**

Triggered when a new item is inserted into storage. It provides the method used for the insertion and the result of the operation.

```js
{
  method: string,   // The method used for insertion (e.g., 'add', 'update').
  result: any       // The result of the insertion operation.
}
```

---

### ⚙️ **`core/mesh`**

#### 🟢 **`ready`**

This event signals that the mesh layer, responsible for network communication, has initialized and is ready.

```js
null
```

No additional data is emitted with this event.

---

### 🔄 **`core/syncer`**

#### 🟢 **`start`**

Triggered when the synchronization process begins.

```js
null
```

No additional data is emitted with this event.

#### 🔴 **`stop`**

Emitted when the synchronization process stops.

```js
null
```

No additional data is emitted with this event.

#### 🟡 **`query:worker:complete`**

This event indicates that a query worker task has completed. The payload includes a success flag.

```js
{
  isSuccess: boolean  // True if the query worker task was successful, false if it failed.
}
```

#### 🟠 **`blockVerification:init`**

Emitted when the block verification process starts.

```js
null
```

No additional data is emitted with this event.

#### 🟢 **`blockVerification:complete`**

This event signals the completion of the block verification process. It includes a flag indicating whether the verification was skipped.

```js
{
  isSkipped: boolean  // True if the verification was skipped, false otherwise.
}
```

#### 🟣 **`blockVerification:missingBlocks`**

Emitted when there are missing blocks during block verification. The payload provides the count of missing blocks.

```js
{
  count: number  // The number of missing blocks.
}
```

#### 🟠 **`blockVerification:excessiveBlocks`**

Emitted when there are excessive blocks during block verification. The payload provides the count of excessive blocks.

```js
{
  count: number  // The number of excessive blocks.
}
```

#### 🟢 **`storeBlock:init`**

This event is triggered when the process of storing a block begins. The payload includes the block height.

```js
{
  height: number  // The height of the block being stored.
}
```

#### 🟡 **`storeBlock:complete`**

Emitted when the block storage operation completes. The payload indicates whether the operation was successful, skipped, or failed, along with the block height.

```js
{
  isSuccess?: boolean,  // Indicates if the block storage was successful.
  isSkipped?: boolean,  // Indicates if the block storage was skipped.
  height: number        // The height of the block that was processed.
}
```

#### 🟢 **`upToDate`**

Triggered when the node or storage is up-to-date with the latest state.

```js
null
```

No additional data is emitted with this event.

---

### 🧰 **`core/node`**

#### 🟠 **`query:init`**

Emitted when a query to the node is initialized. The payload includes the method name, parameters, and a unique query identifier.

```js
{
  method: string,    // The method being called (e.g., 'getBlock', 'getTransaction').
  params: object,    // The parameters provided to the method.
  id: string         // A unique identifier for the query.
}
```

#### 🟢 **`query:complete`**

This event is triggered when a query to the node is completed. It includes success status, latency, block height, user agent information, and any errors encountered.

```js
{
  isSuccess: boolean,    // True if the query was successful, false otherwise.
  method: string,        // The method that was executed (e.g., 'getBlock').
  latency?: number,      // The latency of the query in milliseconds.
  blockHeight?: number,  // The block height at the time of the query.
  userAgent?: string,    // The user agent making the request.
  error?: object         // Any error encountered during the query.
}
```

---

### 💾 **`storages/memory-storage`**

#### 🟢 **`ready`**

This event indicates that the memory-based storage is initialized and ready for use.

```js
null
```

No additional data is emitted with this event.

---

### 💾 **`storages/mongodb-storage`**

#### 🟢 **`ready`**

This event signals that MongoDB storage is initialized and ready to store data.

```js
null
```

#### 🟡 **`reviewIndexes:init`**

Triggered when MongoDB index review begins.

```js
null
```

No additional data is emitted with this event.

#### 🟡 **`reviewIndexes:complete`**

Emitted when MongoDB index review completes. It provides a success status.

```js
{
  isSuccess: boolean  // Indicates if the index review was successful.
}
```

---

### 🔍 **`analyzers/block-meta-analyzer`**

#### 🟢 **`start`**

This event is triggered when the block meta analysis starts.

```js
null
```

No additional data is emitted with this event.

#### 🔴 **`stop`**

Emitted when the block meta analysis stops.

```js
null
```

No additional data is emitted with this event.

#### 🟡 **`query:worker:complete`**

Triggered when a query worker task related to block meta analysis completes. It includes the task and success status.

```js
{
  isSuccess: boolean,  // Indicates if the task completed successfully.
  task: object         // The task object that was processed.
}
```

#### 🟣 **`blockMetaVerification:init`**

Indicates the start of block meta verification.

```js
null
```

No additional data is emitted with this event.

#### 🟠 **`blockMetaVerification:complete`**

Triggered when the block meta verification process completes. It provides status flags indicating success or if the verification was skipped.

```js
{
  isSuccess?: boolean,  // True if the verification was successful.
  isSkipped?: boolean   // True if the verification was skipped.
}
```

#### 🟡 **`blockMetaVerification:blockMetas:missing`**

Emitted when there are missing block metadata entries. It provides the count of missing block metas.

```js
{
  count: number  // The number of missing block metas.
}
```

#### 🟠 **`blockMetaVerification:blockMetas:legacy`**

Triggered when legacy block metas are found during verification. It provides the count of such legacy block metas.

```js
{
  count: number  // The number of legacy block metas.
}
```

#### 🟢 **`blockMetaVerification:transactionMetas:legacy`**

Emitted when legacy transaction metas are found during verification. It provides the count of legacy transaction metas.

```js
{
  metaCount: number  // The number of legacy transaction metas.
}
```

#### 🟢 **`upToDate`**

Indicates that the block meta analysis and verification process has completed and the system is up to date.

```js
null
```

---

This enhanced version of the event emitters documentation provides a clean, organized, and detailed explanation of the event lifecycle across various modules within the EpicChain ecosystem. It should be easier to follow and implement for developers looking to work with these event-driven functionalities.