📄 DocDigest – Instantly Summarize Your PDFs

DocDigest is a modern web application that allows users to upload PDF documents and generate concise, AI-powered summaries in seconds. Built using the latest technologies like Next.js and Clerk for authentication, DocDigest is perfect for students, researchers, and professionals looking to save time and quickly understand lengthy documents.

🚀 Features
• 📁 Upload PDF files easily

• ⚡ Generate AI summaries instantly

• 🔐 Secure authentication with Clerk

• ☁️ Cloud-based file handling

• 📊 Track and manage your summaries

🧪 Tech Stack
• Next.js (App Router)

• Clerk Authentication

• UploadThing for file uploads

• Google Gemini API for AI summarization

• Neon/PostgreSQL for database

🔐 Environment Variables
To run this project locally, create a .env.local file in the root directory and add the following environment variables:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
UPLOADTHING_TOKEN=your_uploadthing_token
GEMINI_API_KEY=your_google_gemini_api_key
DATABASE_URL=your_postgresql_database_url

Make sure all required credentials and keys are securely stored and not exposed in public repositories.
