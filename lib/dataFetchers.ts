import prisma from "@/lib/db";

export async function getFeaturedProducts() {
  const products = await prisma.product.findMany({
    where: {
      status: "published",
      isFeatured: true,
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
  const allProducts = await prisma.product.findMany({
    orderBy: {
      createdAt: "desc",
    },
    where: {
      status: "published",
    },
  });
  return allProducts;
};

export const getProductsByCategory = async (category: string) => {
  switch (category) {
    case "all": {
      const allProducts = await prisma.product.findMany({
        orderBy: {
          createdAt: "desc",
        },
        where: {
          status: "published",
        },
      });
      return {
        title: "All Products",
        data: allProducts,
      };
    }
    case "oversize": {
      const data = await prisma.product.findMany({
        where: {
          category: "oversize",
          status: "published",
        },
      });
      return { title: "Oversize Products", data };
    }
    case "regularFit": {
      const data = await prisma.product.findMany({
        where: {
          category: "regularFit",
          status: "published",
        },
      });
      return { title: "Regular Fit Products", data };
    }
    case "polo": {
      const data = await prisma.product.findMany({
        where: {
          category: "polo",
          status: "published",
        },
      });
      return { title: "Polos", data };
    }
    default:
      return { title: "No Products Found", data: [] };
  }
};
