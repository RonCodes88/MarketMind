# MarketMind

MarketMind is an AI-powered marketing content generation platform that helps you create compelling marketing content for your products.

## Features

- Generate catchy slogans and taglines
- Create strategic campaign messages
- Produce platform-optimized social media posts
- Get complete marketing content packages
- Analyze product performance
- Find relevant creators for outreach

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Backend**: FastAPI, Python, Groq AI
- **Analytics**: Recharts

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Python 3.10+
- Groq API key (for backend AI integration)

### Setup

#### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Create a virtual environment and install dependencies:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. Create a `.env` file with your Groq API key:
   ```
   GROQ_API_KEY=your_api_key_here
   ```

4. Run the FastAPI server:
   ```bash
   uvicorn main:app --reload --port 8002
   ```

#### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Integration

The frontend and backend are connected through a REST API. The `/lib/api.ts` file serves as the API client for all communication between the frontend and backend.

Key API endpoints:
- Health Check: `GET /health`
- Generate Slogans: `POST /api/generate/slogans`
- Generate Campaign Messages: `POST /api/generate/campaign-messages`
- Generate Social Media Posts: `POST /api/generate/social-posts`
- Generate Full Marketing Content: `POST /api/generate/marketing-content`

Test the API connection by visiting `/api-test` in the application.

## Pages and Functionality

- **Home**: Chat interface to get started with your product idea
- **Results**: Complete marketing package for your product
- **Dashboard**: View product analytics and performance metrics
- **Summary**: Business overview with aggregated metrics
- **Outreach**: Find and connect with relevant creators for your products
- **Builder**: Website builder for product landing pages

## License

[MIT License](LICENSE)