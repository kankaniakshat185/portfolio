import { Server } from "http"

export const PROJECT_DIAGRAMS: Record<string, string> = {
  project1: `graph TD
    A[Raw Media Ingestion] --> B{Input Modality}
    B -->|Topic Search| C[NewsAPI Aggregator]
    B -->|Single URL| D[Direct HTML Parsing / Trafilatura]
    B -->|Image/Screenshot| E[Vision LLM Processor]
    
    C --> F[Data Cleaning & Deduplication]
    D --> F
    E --> F
    
    F --> G[Llama-3 Claim Extraction Engine]
    G --> H[(Global Claim Database w/ pgvector)]
    H --> I[Claim Clustering via Cosine Similarity]
    I --> J[Event & Narrative Generation]
    J --> K[Cross-Ideological Consensus Calculation]
    K --> L[FastAPI Results Endpoint]`,
    
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
    subgraph Client [Chrome Browser]
        UI[Next.js React UI]
        CS[Content Scripts]
        BS[Background Service Worker]
        Storage[(Local Storage)]
    end

    subgraph Backend [FastAPI Application Layer]
        API[API Router]
        Auth[OAuth Provider]
        Risk[Risk & Telemetry Engine]
        LLM[LLM Service Abstraction]
    end

    subgraph Infrastructure [Data & Inference]
        PG[(Neon PostgreSQL)]
        Chroma[(ChromaDB Vector Store)]
        Gemini[Google Gemini API]
    end

    UI <-->|DOM Injection| CS
    CS <-->|Messaging| BS
    BS <-->|HTTPS REST| API
    Storage -.->|BYOK Key| BS

    API --> Auth
    Auth --> PG
    API --> Risk
    API --> LLM

    LLM --> Chroma
    LLM --> Gemini`,

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
    SendResponse -->|Connection close| CloseConn[Close connection]`



}
