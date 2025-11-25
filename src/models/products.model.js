import db from "../config/firestore.js";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

export async function getAllProductsFromDB() {
  const snapshot = await getDocs(productsCollection);
  const products = [];

  snapshot.forEach((docSnap) => {
    products.push({ id: docSnap.id, ...docSnap.data() });
  });

  return products;
}

export async function getProductByIdFromDB(id) {
  const productDoc = await getDoc(doc(productsCollection, id));

  if (!productDoc.exists()) {
    return null;
  }

  return { id: productDoc.id, ...productDoc.data() };
}

export async function createProductInDB(productData) {
  const docRef = await addDoc(productsCollection, productData);
  return docRef.id;
}

export async function updateProductInDB(id, productData) {
  const productRef = doc(productsCollection, id);
  await updateDoc(productRef, productData);
}

export async function deleteProductFromDB(id) {
  await deleteDoc(doc(productsCollection, id));
}
