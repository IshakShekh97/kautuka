import prisma from "@/lib/db";

export async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      status: "published",
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 3,
  });

  return products;
}

export async function getBanners() {
  const banners = await prisma.banner.findMany();
  return banners;
}

export const getAllProducts = async () => {
  const products = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return products;
};
