# AI-Powered Workout Recommendation System

A production-ready AI-powered workout recommendation system built with GraphQL, React, TypeScript, and OpenAI.

## 🚀 Quick Start

### Prerequisites

- Node.js 22+ and Yarn
- Git
- OpenAI API key

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd workout-recommendations
   ```

2. **Install dependencies**

   ```bash
   yarn install
   ```

3. **Set up environment variables**

   ```bash
   cp env.example .env
   # Edit .env and add your OpenAI API key
   ```

4. **Initialize the database**

   ```bash
   yarn db:setup
   ```

5. **Start the development server**
   ```bash
   yarn dev
   ```

The server will start at `http://localhost:4000` with GraphQL Playground available at `http://localhost:4000/graphql`.

6. **Add tables and/or data to database**
   Create a `.sql` file for instance in the `database` diretory.
   ```bash
   yarn db:run server/src/database/file.sql
   ```

This will add database, data, indexes, etc to the database to support your project.

## 📁 Project Structure

```
├── server/                # GraphQL server
│   ├── src/
│   │   ├── resolvers/    # GraphQL resolvers
│   │   ├── schema/       # GraphQL schema definitions
│   │   ├── database/     # Database layer
│   │   ├── services/     # Business logic services
│   │   ├── types/        # TypeScript type definitions
│   │   └── index.ts      # Server entry point
│   ├── scripts/          # Database setup scripts
│   └── package.json      # Server dependencies
├── web/                  # Next.js frontend
│   ├── src/
│   │   ├── app/          # Next.js App Router
│   │   ├── components/   # React components
│   │   ├── lib/          # Utilities
│   │   └── types/        # TypeScript definitions
│   └── package.json      # Client dependencies
└── package.json          # Workspace configuration
```

## 🗄️ Database

The system uses SQLite with the following tables:

- **users** - User profiles and preferences
- **workouts** - Workout data with full-text search

### Sample Data

The database comes pre-seeded with:

- 3 sample users with different fitness levels
- 10 diverse workouts (beginner to advanced)

## 🔧 API Usage

### GraphQL Endpoints

#### Queries

```graphql
# Get current user
query {
  me {
    id
    name
    email
    fitnessLevel
    preferences
  }
}
```

## 🤖 AI Integration

The system integrates with OpenAI's GPT-3.5-turbo model to generate personalized workout recommendations.

### Features

- Uses OpenAI's API

### Usage Limits

- Maximum $2.00 in OpenAI costs

## 🛠️ Development

### Available Scripts

```bash
# Development
yarn dev                 # Start both server and web
yarn dev:server          # Start server only
yarn dev:web             # Start web only

# Database
yarn db:setup            # Initialize database with schema and seed data
yarn db:run <file>       # Run a SQL file against the database


# Building
yarn build               # Build both server and client
yarn build:server        # Build server only
yarn build:web           # Build web only

# Quality
yarn lint                # Run ESLint on both workspaces
yarn type-check          # Run TypeScript type checking on both workspaces
yarn test                # Run tests (server only)

# Workspace-specific commands
yarn workspace server dev    # Start server directly
yarn workspace web dev       # Start web directly
```

### Environment Variables

```bash
# Required
OPENAI_API_KEY=your_openai_api_key_here

# Optional
PORT=4000
NODE_ENV=development
DATABASE_PATH=./data/workouts.db
CORS_ORIGIN=http://localhost:3000
```

## 📊 Sample Data

### Users

- **John Doe** (beginner) - Focuses on chest and arms
- **Jane Smith** (intermediate) - Focuses on legs and glutes
- **Mike Johnson** (advanced) - Focuses on back and shoulders

### Workouts

- Push-up Variations (beginner)
- Squat Circuit (intermediate)
- Deadlift Progression (advanced)
- Bodyweight HIIT (intermediate)
- Yoga Flow (beginner)
- Bench Press (intermediate)
- Pull-up Progression (advanced)
- Cardio Blast (beginner)
- Core Strength (intermediate)
- Leg Day Special (advanced)

## 🎯 Next Steps

This is a starter project. To complete the assessment, you'll need to:

1. **Follow the instructions attached to email**
2. **Implement the React frontend as specified in the instructions**
3. **Implement the Recommendation System as specified in the instructions**

## 🆘 Getting Help

- Review the pre-seeded data in the database
- Use the provided TypeScript interfaces as guidance
- Focus on clean, maintainable code over complex features

## 📝 License

MIT License - see LICENSE file for details.
