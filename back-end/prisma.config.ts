import { defineConfig } from '@prisma/client';

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    db: {
      url: process.env.DATABASE_URL!,  // pega do .env
    }
  }
});
