import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient();

async function main() {
    const allArtists = await prisma.artists1.findMany();
    console.log(allArtists);
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})