### 📂 Layered Architecture

#### Folder structure for Project

```perl
src/
├── presentation/               # UI Layer (React components)
│ ├── components/               # Reusable UI components (buttons, modals, inputs)
│ ├── pages/                    # Page-level components (BookListPage, LoginPage)
│ ├── routes/                   # React Router setup
│ ├── hooks/                    # UI-specific custom hooks
│ └── styles/                   # Global & theme styles
│
├── application/                # Application Layer (use cases & state management)
│ ├── services/                 # Coordinates domain + infrastructure
│ ├── use-cases/                # Business actions (e.g., "BorrowBook", "AddBook")
│ └── state/                    # App state (Redux, Zustand, Context API)
│
├── domain/                     # Domain Layer (business logic & entities)
│ ├── entities/                 # Core models (Book.ts, User.ts)
│ ├── repositories/             # Interfaces (IBookRepository.ts)
│ └── value-objects/            # Domain-specific value objects (e.g., ISBN.ts)
│
├── infrastructure/             # Infrastructure Layer (implementations)
│ ├── api/                      # API clients (REST, GraphQL, Axios)
│ ├── persistence/              # Local storage, caching
│ ├── repositories/             # Repository implementations (BookRepositoryImpl.ts)
│ └── adapters/                 # External services (auth, payment)
│
├── config/                     # Configuration (env, constants, DI container)
├── utils/                      # General-purpose helpers (formatters,validators)
├── types/                      # Global TypeScript types/interfaces
└── main.tsx                    # Entry point
```
