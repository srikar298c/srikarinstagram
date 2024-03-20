# Srikargram - Social Media App
## Overview
This is a social media app that allows users to create accounts, add friends, post messages, and like and comment on each other's posts. It is a work-in-progress, but the basic functionality and most of the features were complete.

## Technologies Used

 srikargram is built using the following technologies:

- Next.js: A popular React framework for building server-side rendered applications.
- TypeScript: A typed superset of JavaScript that enhances code scalability and maintainability.
- tRPC: A simple and fast way to create TypeScript API endpoints.
- Postgres with PrismaORM: Prisma is used as the ORM to interact with the database, PostgreSQL as an object-relational DBMS.
- Tailwind CSS: A utility-first CSS framework for rapidly styling the user interface.
- nextAuth: Provides authentication support for Next.js applications.
- RecoilJS: A state management library for managing and sharing the application's global state.
- Zod: A TypeScript-first schema validation library for data validation and sanitization.
- 
## Features of this project
1. **Creating Account:** Users can sign up to create their accounts and also sign through multiple authentication providers.
2. **Updating Account Information:** Users can edit and update their account details.
3. **Creating Posts with Image Uploads:** Users can create posts and upload images to share their interests.
4. **Interacting with Posts:** Users can Engage with posts in realtime by liking and also commenting on the post they can also share the post.
5. **Follow and Unfollow users:** Users can follow and unfollow other users by 
6. **Data Fetching and Caching:** Data is efficiently fetched and cached using to provide a seamless user experience.
7. **Bandwidth-Saving Comment Loading:** A limited number of comments are initially loaded per post, with dynamic loading of more comments as the user scrolls to optimize bandwidth usage.

## Planned Features
1. **Live Group Chat:** Upon joining a group, users can engage in real-time group chat with other members.
2.  **Admin Controls for Group Chat:** Administrators of group chats will have the ability to select and admit members they wish to join.
3.  **Live video Sharing:** Users can stream there live video.
4.  **Direct Message:** Users can have conversation directly with others throuth text message and can also share Media.
5.  

# Getting Started

To run this Social Media App locally, follow these steps:

1. Clone the repository.
2. Install the required dependencies using `npm install`.
3. Rename the `env.example` file to `.env`.
4. Add the following keys and replace the values with your own:
   - Replace `DATABASE_URL` with the URL of your Postgres URL. I used Neon.tech for happening it.
   - Provide `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET` for authentication through Google providers.
   - Replace `YOUR_NEXTAUTH_URL` with the URL of your Next.js application where NextAuth should handle authentication.
   - Replace `YOUR_NEXTAUTH_SECRET` with a random secret key for NextAuth. You can generate one using a tool like `openssl rand -hex 32`.


5. Run database migrations using `npx prisma migrate dev`.
6. Run the development server using `npm run dev`.
