import {
  getAllProductsFromDB,
  getProductByIdFromDB,
  createProductInDB,
  updateProductInDB,
  deleteProductFromDB,
} from "../models/products.model.js";

export async function getAllProductsService() {
  return await getAllProductsFromDB();
}

export async function getProductByIdService(id) {
  return await getProductByIdFromDB(id);
}

export async function createProductService(data) {
  return await createProductInDB(data);
}

export async function updateProductService(id, data) {
  await updateProductInDB(id, data);
}

export async function deleteProductService(id) {
  await deleteProductFromDB(id);
}
