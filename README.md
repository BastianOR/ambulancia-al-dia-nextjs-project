This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
<br />
First off, make sure to install all the dependencies with: <br />

```bash
npm install
``` 
<br />
The main dependencies to be aware of are: Tailwind CSS, Shadcn-ui, Clerk, Lucide and Mongoose. <br />
Afterwards, create a file called .env on the root of the project, same level as the package.json file.<br />
Inside of the env file, add the next environment variables:<br /><br />

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY<br />
CLERK_SECRET_KEY<br />
MONGODB_CONNECTION_STRING<br />

Create a new Clerk application and copy the publishable key and the secret key from your account into these variables. <br />
Get your local MongoDB server connection string from Compass. <br />
The standard local connection string by default is: mongodb://localhost:27017/YourDatabaseNameHere
<br />
Finally, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.<br />
This project was made for a minimum resolution width of 340px.
<br />
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.