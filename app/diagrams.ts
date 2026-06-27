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
    Client1[Client / Browser 1] -->|TCP Connection| ServerSocket[Server Socket :4221]
    Client2[Client / Browser 2] -->|TCP Connection| ServerSocket
    Client3[Client / Browser 3] -->|TCP Connection| ServerSocket

    ServerSocket -->|Accepts Connection| MainThread[Main Thread 'while True']

    MainThread -->|Spawns Thread| T1[Worker Thread 1]
    MainThread -->|Spawns Thread| T2[Worker Thread 2]
    MainThread -->|Spawns Thread| T3[Worker Thread 3]

    subgraph "Connection Handler (Per Thread)"
    T1 --> |1. Read Bytes| Parse[Read request and parse headers]
    Parse --> |2. Route Path| Routing{Router}
    
    Routing -->|/| Root[200 OK]
    Routing -->|/echo/| Echo[Gzip Compress & Echo Text]
    Routing -->|/user-agent| UA[Extract Client Software]
    Routing -->|/files/| PathCheck{Path Check: Directory Traversal?}
    
    PathCheck -->|Invalid Path| Forbidden[403 Forbidden]
    PathCheck -->|Valid Path| FileOps{HTTP Method}
    
    FileOps -->|GET| ReadFile[Read from Disk with MIME detection]
    FileOps -->|POST| WriteFile[Write to Disk as Binary]
    FileOps -->|DELETE| DeleteFile[Delete from Disk]
    
    Root --> |3. Send Response| Res[Send HTTP/1.1 Bytes]
    Echo --> Res
    UA --> Res
    Forbidden --> Res
    ReadFile --> Res
    WriteFile --> Res
    DeleteFile --> Res
    
    Res --> |4. Keep-Alive| T1
    end`


}
