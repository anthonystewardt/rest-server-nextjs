# Development
Steps to run project

1. Up Database

```bash
docker compose up -d
```

## Api Rest with Nextjs

1. How to connect Prisma with my project in Nextjs

```bash
npx prisma init
```

2. Rename the values in the .env file

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres"
```

3. Create the model

```prisma
// prisma/schema.prisma
model Todo {
  id        String      @id @default(uuid())
  description  String
  complete   Boolean     @default(false)
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

4. Run the migration

```bash
npx prisma migrate dev
```

5. Generate Prisma Client to matipulate tha data

```bash
npx prisma generate
```

6. And Finally, Create the directory lib with prisma.ts file.

```ts
import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prisma = (global as any).prisma;
}

export default prisma;
```

## Seeder

```ts
import prisma from '@/app/lib/prisma'
import { NextResponse, NextRequest } from 'next/server'

export async function GET(request: Request) {

  await prisma.todo.deleteMany();

  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true
      },
      {
        description: "Piedra del tiempo",
      },
      {
        description: "Priedra del espacio",
      }
    ]
  });

  // const todo = await prisma.todo.create({
  //   data: {
  //     description: "Hello World"
  //   }
  // });

  // console.log(todo);

  return NextResponse.json({
    message: "Seed execute"
  });
}
```

- API:

```bash
GET  localhost:3000/api/seed
```

## If you have some changes in your Model

```bash
npx prisma db push
```