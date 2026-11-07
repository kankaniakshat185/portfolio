import { Server } from "http"

export const PROJECT_DIAGRAMS: Record<string, string> = {
  project1: `graph TD
    Browser[Browser] -->|same-origin, credentialed| Proxy["Next.js /api/proxy\n(server-to-server relay)"]
    Proxy -->|HTTPS + session cookie| API[FastAPI on Hugging Face Spaces]

    API --> Auth["app/deps/auth.py\nsession lookup"]
    API --> Pipeline["run_search_pipeline\n(app/services/pipeline.py)"]

    subgraph "Synchronous /search"
        Pipeline --> Ingest["ingest_articles\nNewsAPI + GDELT + newspaper3k"]
        Ingest --> Clean["clean_and_deduplicate\nURL + fuzzy-title dedup"]
        Clean --> NLP["analyze_articles\nsentiment / bias / NER"]
        NLP --> Validate["validate_articles\nDQS, JSD polarization, diversity"]
        Validate --> Narrative["generate_narrative +\ncontrastive summaries (LLM, cached)"]
        Narrative --> Persist[(Search / Article / Insight)]
    end

    Persist -.->|BackgroundTasks, non-blocking| Phase2["run_phase2_pipeline"]

    subgraph "Background Phase 2 — phase2Status: pending -> processing -> complete"
        Phase2 --> Extract["process_and_store_claims\nquality gate + dedup"]
        Extract --> Cluster["run_claim_clustering\nHDBSCAN, scoped to this topic"]
        Cluster --> Events["run_event_detection\ncohesion + eligibility gates, NLI contradiction check"]
        Events --> ClaimDB[(Claim / Evidence / ClaimCluster / Event)]
    end

    Extract -.-> LLMClient["cached_llm_call\nSHA-256 prompt cache"]
    Narrative -.-> LLMClient
    LLMClient -->|cache miss| HFRouter["HF Inference Router\nQwen2.5-7B-Instruct"]
    LLMClient --> LLMCacheDB[(LLMCache / LLMUsage)]

    ClaimDB -->|GET /results/:id/intelligence| API
    Persist -->|GET /results/:id| API

    Snapshot["Celery Beat: run_weekly_snapshots\n(app/tasks/snapshot_task.py)"] -.->|weekly, per subscription| Ingest
    Snapshot --> SnapshotDB[(TopicSnapshot)]
    Redis[(Upstash Redis)] --- Snapshot
`,
    
  project2: `graph TD
    User([Quant / User]) -->|Build Strategy| UI(Next.js Web UI)
    
    UI <-->|REST API & JWT| API(FastAPI Backend)
    
    API <-->|Alembic / SQLAlchemy| DB[(PostgreSQL Database)]
    API -->|Submit Task| Redis[(Upstash Redis Broker)]
    
    Redis -->|Dequeue Task| Celery[Celery Background Worker]
    
    subgraph "AlphaLab Quant Engine"
        Celery -->|1. Parse| Parser[DSL Factor Compiler]
        Parser -->|2. Fetch| Storage[(DuckDB 5-Yr Data)]
        Storage -->|3. Evaluate| Evaluator[Factor Evaluator]
        Evaluator -->|4. Target| Portfolio[Portfolio Constructor]
        Portfolio -->|5. Returns| Metrics[Performance Calculator]
        
        Metrics -.->|18x Robustness Grid| Evaluator
    end
    
    Celery -->|Prompt via httpx| Gemini[Gemini LLM API]
    Gemini -.->|Human-readable Verdict| Celery
    
    Celery -->|Save Results| DB`,

  project3: `graph TD
    subgraph Client [Chrome Extension]
        CS[Content Script<br/>injects iframe on github.com/*/pull/*]
        BS[Background Worker<br/>on-demand injection]
        UI[Next.js React UI<br/>runs inside the iframe]
        Storage[(localStorage<br/>JWT session, BYOK keys, GitHub PAT)]
    end

    subgraph Backend [FastAPI Backend]
        CORS{CORS gate<br/>allow-listed origins only}
        Auth[Auth: GitHub OAuth + JWT<br/>mock login gated, dev-only]
        API[Analysis API<br/>requires bearer token · split: fast /analyze + slower /analyze/enrich]
        Engines[Deterministic Engines<br/>risk · reviewability · security ·<br/>architecture · dependency graph · symbols]
        Indexer[Repo Index Engine<br/>full + incremental, background task]
        LLMSvc[LLM Service<br/>thread-pool offloaded, timeout-bounded]
        Webhook[Webhook Receiver<br/>HMAC-SHA256 verified · debounced auto-analysis]
    end

    subgraph Data [Persistence]
        DB[(SQLite or PostgreSQL<br/>users, saved reviews, repo-wide function/call index)]
        Chroma[(ChromaDB<br/>15 real sourced incidents + team-contributed)]
    end

    subgraph External [External Services]
        GH[GitHub REST API<br/>OAuth, PR data, issue comments, commit statuses]
        Gemini[Google Gemini API]
        OpenAI[OpenAI API]
        Groq[Groq API<br/>OpenAI-compatible]
    end

    BS -->|chrome.scripting.executeScript| CS
    CS <-->|postMessage, origin-checked both ways| UI
    UI -->|fetch, Bearer JWT| CORS
    CORS --> API
    Storage -.->|session + BYOK keys| UI

    API --> Auth
    Auth -->|OAuth code exchange| GH
    Auth --> DB
    API --> Engines
    Engines -->|fetch PR diff, files & base/head content| GH
    Engines -.->|read: cross-file blast radius| DB
    API -->|post comments & commit statuses, user-supplied PAT| GH
    Engines -->|read: similarity search| Chroma
    API -->|write: report a team incident| Chroma
    API --> LLMSvc
    LLMSvc --> Gemini
    LLMSvc --> OpenAI
    LLMSvc --> Groq
    API --> DB
    API -->|explicit build/refresh request| Indexer
    Indexer -->|fetch full tree, changed files| GH
    Indexer -->|write: functions & call edges| DB

    GH -->|pull_request events| Webhook
    Webhook -->|debounced| Engines
    Webhook -.->|refresh if already indexed| Indexer
    Webhook -->|risk verdict as commit status| GH`
,

  project4: `graph TD
    User([Data Scientist]) -->|pip install datascope-ml| SDK(Python PyPI SDK)
    User -->|Web Login| Dashboard(Next.js Web UI)
    
    SDK -->|Bearer Token Auth| API(Next.js API Gateway)
    Dashboard -->|Session Auth| API
    
    API <-->|Prisma ORM| DB[(Neon Postgres Database)]
    API <-->|Concurrent REST| Fast(FastAPI ML Backend)
    
    Fast --> C(Governance Scoring Engine)
    Fast --> D(Statistical Leakage Engine)
    Fast --> E(Drift Engine & Pipeline Engine)
    
    C --> F(Outlier Consensus Engine)
    F -->|Z-Score, MAD, iForest, DBSCAN| G[Clean Data]
    
    style API fill:#f9f,stroke:#333,stroke-width:2px
    style Fast fill:#bfb,stroke:#333,stroke-width:2px`,

  project5: `graph TD
    Client[Client] -->|TCP Connect| ServerSocket[Server Socket :4221]
    ServerSocket --> EventLoop[Event Loop - selectors epoll/kqueue]

    EventLoop -->|non-blocking recv| BufferBytes[Buffer bytes into session]
    BufferBytes --> HeaderCheck{Header boundary CRLFCRLF found?}
    HeaderCheck -->|No, but over MAX_HEADER_BYTES| Reject400[400 Bad Request]
    HeaderCheck -->|Not yet, under limit| EventLoop
    HeaderCheck -->|Found| ChunkedCheck{Transfer-Encoding chunked?}

    ChunkedCheck -->|Yes| Reject501[501 Not Implemented]
    ChunkedCheck -->|No| SizeCheck{Content-Length over MAX_BODY_BYTES?}
    SizeCheck -->|Yes| Reject413[413 Payload Too Large]
    SizeCheck -->|No| BodyWait{Full body buffered yet?}
    BodyWait -->|Not yet| EventLoop
    BodyWait -->|Yes| Dispatch["Unregister socket (queued),<br/>dispatch to Thread Pool"]

    subgraph ThreadPoolWorker["Thread Pool Worker"]
    Dispatch --> ParseCheck{Request line parses?}
    ParseCheck -->|No| Reject400b[400 Bad Request]
    ParseCheck -->|Yes| Pipeline["Middleware Pipeline:<br/>Logger -> StaticFiles"]
    Pipeline --> RouteMatch{Router match on method+path?}
    RouteMatch -->|Handler found| Handler[Route Handler]
    RouteMatch -->|Path exists, wrong method| Reject405["405 + Allow header"]
    RouteMatch -->|No route at all| Reject404[404 Not Found]

    Handler --> TraversalCheck{"/files/ request:<br/>resolves outside sandbox?"}
    TraversalCheck -->|Yes| Reject403[403 Forbidden]
    TraversalCheck -->|No, large file GET| StreamFile["Stream file,<br/>64KB chunks"]
    TraversalCheck -->|No, small/dynamic| BufferBody["Buffer body,<br/>optional gzip"]

    StreamFile --> SendResponse["Send response<br/>(socket set blocking for this write)"]
    BufferBody --> SendResponse
    Reject405 --> SendResponse
    Reject404 --> SendResponse
    Reject403 --> SendResponse
    end

    SendResponse -->|Keep-Alive| Requeue["Queue register(conn) action"]
    Requeue --> EventLoop
    SendResponse -->|Connection close| CloseConn[Close connection]`,

  project6: `flowchart TD
    A["Caller: processOrder(order) / cancelOrder(id)"] --> B["MatchingEngineT&lt;BookT&gt;<br/>validate -&gt; delegate to BookT -&gt; rest unfilled remainder"]
    B -->|"owns one, by value"| C["BookT — one of four interchangeable implementations"]
    C --> D["bids_ — highest price first"]
    C --> E["asks_ — lowest price first"]
    C --> F["OrderId -&gt; location index — O(1) cancel"]
    D --> G["PriceLevel — resting orders, oldest first"]
    E --> H["PriceLevel — resting orders, oldest first"]

    C -.->|"template parameter,<br/>zero code changes elsewhere"| I["1.0 OrderBook<br/>std::map + std::list + unordered_map"]
    C -.-> J["2.0 OrderBookV2<br/>std::map + intrusive pool-backed list"]
    C -.-> K["3.0 OrderBookV3<br/>flat tick-indexed array + occupancy bitmap"]
    C -.-> L["4.0 OrderBookV4<br/>V3 + cached best-tick + flat id index"]`,

  project7: `flowchart LR
    W[Writers] --> WAL[("WAL<br/>fsync'd")]
    WAL --> MT["MemTable<br/>(sorted in memory)"]
    MT -->|flush| L0["L0 block<br/>Gorilla-compressed,<br/>raw resolution"]
    L0 -->|compaction| L1["L1<br/>rollups: min/max/avg/count/p99"]
    L1 -->|compaction, coarser| L2["L2<br/>rollups"]
    L2 -->|compaction, coarser| L3["L3<br/>rollups"]

    IDX[["Inverted index<br/>label filter → matching series<br/>O(1)-ish, any scale"]]
    Q{{"Query router"}}
    IDX -.resolves series.-> Q
    L0 -.recent range.-> Q
    L1 -.older range.-> Q
    L2 -.older still.-> Q
    L3 -.spanning → stitched.-> Q`,

  project8: `flowchart TB
    Browser["Browser"]
    Frontend["Next.js frontend (Vercel)<br/>/api/* → BFF proxy (ADR 0024)"]

    subgraph API["FastAPI backend (Render)"]
        direction TB
        Auth["auth/<br/>login OAuth — GitHub · Slack · Google"]
        Connectors["connectors/<br/>data-access OAuth + API clients<br/>GitHub · Slack · Jira"]

        subgraph Features["features/ — one router + service per query mode"]
            direction LR
            CS["context_search"]
            Arch["archaeology"]
            WTA["who_to_ask<br/>+ PR Blast Radius"]
            FT["flaky_tests"]
            Notes["notes"]
            WD["weekly_digest"]
            IC["incident_correlation"]
            DD["decision_debt"]
        end

        subgraph Engine["engine/ — shared retrieval & correlation core"]
            direction LR
            Ingestion["ingestion"]
            Indexing["indexing<br/>hybrid keyword + vector search"]
            Correlation["correlation"]
            Ranking["ranking<br/>differential-tested"]
            CodeContext["code_context<br/>live git blame"]
            CodeSearch["code_search"]
            Timeline["timeline<br/>correlated commit history"]
            Synthesis["synthesis<br/>BYOK / free-tier LLM"]
        end
    end

    Worker["Celery worker<br/>15-min periodic resync + indexing"]

    DB[("Neon Postgres<br/>+ pgvector")]
    Cache[("Redis<br/>broker")]

    Providers["GitHub · Slack · Jira APIs"]
    LLMs["OpenAI · Anthropic · Groq · Gemini"]

    Browser -->|same-site cookie| Frontend
    Frontend -->|proxied, server-side| Auth
    Frontend -->|proxied, server-side| Features
    Features --> Engine
    Connectors --> Providers
    Auth --> DB
    Engine --> DB
    Worker --> Connectors
    Worker --> Engine
    Worker --> Cache
    Engine --> LLMs`,

  project9: `flowchart LR
    subgraph CP["chronosd (one process)"]
        API["API server (FastAPI)"]
        STORE[("Versioned store<br/>in memory + WAL and snapshots on disk")]
        DC["Deployment controller<br/>(+ rollouts)"]
        SCH["Scheduler"]
        NLC["Node lifecycle controller<br/>(+ eviction)"]
        API <--> STORE
        STORE -->|"watch log"| INF["shared informers<br/>(list + watch caches)"]
        INF -->|"keys"| DC
        INF -->|"keys"| SCH
        INF -->|"keys"| NLC
        DC -->|"CAS writes"| STORE
        SCH -->|"bind"| STORE
        NLC -->|"CAS writes"| STORE
    end
    CLI["chronosctl"] -->|HTTP| API
    subgraph N1["chronos-agent (node)"]
        A1["heartbeat · fence watch · sync · probes"] --> R1["process runtime"]
        A1 -.->|"writes"| L1[/"lease file<br/>(send time of last accepted heartbeat)"/]
        R1 --> S1a["chronos-shim"] --> W1a(("workload"))
        R1 --> S1b["chronos-shim"] --> W1b(("workload"))
        L1 -.->|"read every 100 ms"| S1a
        L1 -.->|"read every 100 ms"| S1b
    end
    A1 -->|"heartbeat; watch pods?node=self; status"| API`,

  project10: `flowchart TD
    A["Caller: my_malloc / my_free / my_realloc / my_calloc"] --> B["C API glue<br/>abort with a diagnostic on bad free or detected corruption"]
    B --> C["default_heap(): BasicHeap&lt;Fit&gt;, 256 MiB"]
    T["C++ callers, tests, benchmarks<br/>BasicHeap&lt;Fit&gt; directly, any arena size"] --> C
    C -->|"owns"| D["Arena: one fixed mmap reservation, lazily committed"]
    C -->|"head pointer"| E["Explicit free list<br/>links live inside the free blocks"]
    C --> F["malloc: find_fit -&gt; safe unlink -&gt; place (split)<br/>free: validate -&gt; release (coalesce both ways) -&gt; push"]

    C -.->|"template parameter,<br/>zero code changes elsewhere"| G["FirstFit (default): first block that fits"]
    C -.-> H["BestFit: smallest block that fits, stop on exact match"]`
}
