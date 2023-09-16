import { PrismaClient } from '@prisma/client';
import { slimes, foods, locations } from '../data';
const prisma = new PrismaClient();
async function main() {
  const upsertMany = await Promise.all(
    slimes.map((slime) => {
      const { id, ...excludeId } = slime;
      return prisma.slime.upsert({
        where: { id: slime.id },
        update: {
          ...excludeId,
        },
        create: {
          ...slime,
        },
      });
    }),
  );

  return upsertMany;
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
