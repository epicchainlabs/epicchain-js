## 🌟 **EpicChain Configuration Options** 🌟

### **1. epicchain Configuration**
This configuration defines the core settings for your EpicChain instance.

```js
const epicchainOptions = {
  network: 'testnet',  // Specifies the network (mainnet/testnet).
  storageType: undefined,  // Choose your storage system.
  endpoints: undefined,  // Set custom endpoints if necessary.
  enableSyncer: true,  // Enable synchronization for data consistency.
  enableBlockAnalyzer: false,  // Disable block analyzer by default.
  nodeOptions: undefined,  // Custom options for nodes in the system.
  meshOptions: undefined,  // Define mesh network options.
  storageOptions: undefined,  // Configure your storage system.
  apiOptions: undefined,  // Define API-related options.
  syncerOptions: undefined,  // Options for syncing data between nodes.
  blockMetaAnalyzerOptions: undefined,  // Block meta-analyzer options.
  loggerOptions: {},  // Logger settings (level, timestamp, etc.).
}
```

---

### **2. core/api Configuration**
This section controls the API settings for data interaction.

```js
const apiOptions = {
  insertToStorage: true,  // Automatically insert data into storage.
  checkReadyIntervalMs: 200,  // Interval (ms) to check readiness of API services.
  loggerOptions: {},  // Logger settings specifically for API-related logs.
}
```

---

### **3. core/mesh Configuration**
Optimize the mesh network for better performance.

```js
const meshOptions = {
  startBenchmarkOnInit: true,  // Benchmark starts when initialization begins.
  toFetchUserAgent: true,  // Fetch user-agent details for node tracking.
  benchmarkIntervalMs: 2000,  // Period (ms) for performance benchmarking.
  fetchMissingUserAgentIntervalMs: 5000,  // Time (ms) to fetch missing user-agent info.
  refreshUserAgentIntervalMs: 5 * 60 * 1000,  // Interval (ms) to refresh user-agent info.
  minActiveNodesRequired: 2,  // Minimum number of active nodes required.
  pendingRequestsThreshold: 5,  // Threshold for pending requests before blocking.
  loggerOptions: {},  // Custom logger options for mesh network events.
}
```

---

### **4. core/syncer Configuration**
Settings for the synchronization mechanism to ensure data consistency.

```js
const syncerOptions = {
  minHeight: 1,  // Starting height for synchronization.
  maxHeight: undefined,  // Maximum height for sync (leave undefined for full sync).
  blockRedundancy: 1,  // Block redundancy level.
  checkRedundancyBeforeStoreBlock: true,  // Check block redundancy before storing.
  startOnInit: true,  // Syncer starts automatically when initialized.
  toSyncIncremental: true,  // Sync data incrementally for efficiency.
  toSyncForMissingBlocks: true,  // Sync for missing blocks.
  toPruneRedundantBlocks: true,  // Prune redundant blocks after sync.
  storeQueueConcurrency: 30,  // Max concurrent operations in store queue.
  pruneQueueConcurrency: 10,  // Max concurrent operations in prune queue.
  enqueueBlockIntervalMs: 5000,  // Interval (ms) to enqueue blocks.
  verifyBlocksIntervalMs: 1 * 60 * 1000,  // Interval (ms) to verify blocks.
  maxStoreQueueLength: 1000,  // Maximum length of the store queue.
  retryEnqueueDelayMs: 5000,  // Delay (ms) before retrying enqueue.
  standardEnqueueBlockPriority: 5,  // Default block enqueue priority.
  retryEnqueueBlockPriority: 3,  // Priority for retrying block enqueue.
  missingEnqueueStoreBlockPriority: 1,  // Priority for missing block enqueue.
  enqueuePruneBlockPriority: 5,  // Pruning block enqueue priority.
  maxPruneChunkSize: 1000,  // Maximum size for pruning chunks.
  loggerOptions: {},  // Logger configuration for syncer events.
}
```

---

### **5. core/node Configuration**
Tune the node-level settings to enhance reliability.

```js
const nodeOptions = {
  toLogReliability: false,  // Enable/disable reliability logging.
  truncateRequestLogIntervalMs: 30 * 1000,  // Interval to truncate request logs (ms).
  requestLogTtl: 5 * 60 * 1000,  // Time to live for request logs (ms).
  timeout: 30000,  // Timeout for requests (ms).
  loggerOptions: {},  // Logger configuration for node-related activities.
}
```

---

### **6. storages/memory-storage Configuration**
In-memory storage configuration for lightweight data handling.

```js
const memoryStorageOptions = {
  loggerOptions: {},  // Logger settings for in-memory storage.
}
```

---

### **7. storages/mongodb-storage Configuration**
MongoDB storage configuration for persistent data handling.

```js
const mongodbStorageOptions = {
  connectOnInit: true,  // Automatically connect to MongoDB on init.
  reviewIndexesOnConnect: false,  // Whether to review indexes on connection.
  userAgent: 'Unknown',  // Default user-agent for storage.
  collectionNames: {
    blocks: 'blocks',  // MongoDB collection for blocks.
    blockMetas: 'block_metas',  // MongoDB collection for block metadata.
    transactionMetas: 'transaction_metas',  // MongoDB collection for transaction metadata.
  },
  loggerOptions: {},  // Logger options for MongoDB interactions.
}
```

---

### **8. analyzers/block-meta-analyzer Configuration**
Configurations for analyzing block metadata.

```js
const blockMetaAnalyzerOptions = {
  minHeight: 1,  // Starting height for metadata analysis.
  maxHeight: undefined,  // Max height for analysis.
  startOnInit: true,  // Start the analysis when initialized.
  toEvaluateTransactions: true,  // Whether to evaluate transactions.
  toEvaluateAssets: false,  // Skip asset evaluation by default.
  blockQueueConcurrency: 5,  // Concurrent processing for block queue.
  transactionQueueConcurrency: 10,  // Concurrent processing for transaction queue.
  enqueueEvaluateBlockIntervalMs: 5 * 1000,  // Interval (ms) for block evaluation enqueue.
  verifyBlocksIntervalMs: 30 * 1000,  // Verification interval (ms) for blocks.
  maxBlockQueueLength: 30 * 1000,  // Max length of block queue.
  maxTransactionQueueLength: 100 * 1000,  // Max length of transaction queue.
  standardEvaluateBlockPriority: 5,  // Standard priority for block evaluation.
  missingEvaluateBlockPriority: 3,  // Priority for missing block evaluation.
  legacyEvaluateBlockPriority: 3,  // Priority for legacy block evaluation.
  standardEvaluateTransactionPriority: 5,  // Priority for transaction evaluation.
  missingEvaluateTransactionPriority: 5,  // Priority for missing transaction evaluation.
  legacyEvaluateTransactionPriority: 5,  // Priority for legacy transaction evaluation.
  loggerOptions: {},  // Logger options for block meta analysis.
}
```

---

### **9. Logger Configuration**
Customize how logs are handled across the system.

```js
const loggerOptions = {
  level: 'warn',  // Define the log level: silent | error | warn | info | debug | trace.
  displayTimestamp: true,  // Whether to display timestamps in logs.
  displayName: true,  // Display the name of the logger.
  displayLevel: true,  // Display the log level in logs.
  useLevelInitial: false,  // Use the initial of the log level (e.g., 'I' for 'info').
  useLocalTime: false,  // Use local time instead of UTC.
  timestampFormat: 'YYYY-MM-DD HH:mm:ss.SSS',  // Timestamp format in logs.
}
```

---

These options allow for full customization of your EpicChain instance, making it adaptable to various needs and use cases, whether you want to optimize performance, control logging, or fine-tune synchronization and storage.