import { PrismaClient, SpotifyAccessToken } from '@prisma/client';

let prismaClient: PrismaClient;

function getPrismaClient(): PrismaClient {
  if (!prismaClient) prismaClient = new PrismaClient();
  return prismaClient;
}

async function getAccessToken(): Promise<SpotifyAccessToken | null> {
  const spotifyToken = await getPrismaClient().spotifyAccessToken.findFirst();
  if (!spotifyToken) return null;
  return spotifyToken;
}

async function updateToken(
  id: string,
  accessToken: string,
  expiresAt: Date
): Promise<SpotifyAccessToken> {
  return await getPrismaClient().spotifyAccessToken.update({
    where: { id: id },
    data: {
      accessToken: accessToken,
      expiresAt: expiresAt,
    },
  });
}

export const Database = {
  getAccessToken,
  updateToken,
};
