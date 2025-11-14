-- DropIndex
DROP INDEX "Postagem_autor_key";

-- AlterTable
ALTER TABLE "Postagem" ALTER COLUMN "autor" DROP NOT NULL;
