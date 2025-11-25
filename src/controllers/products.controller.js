import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  updateProductService,
  deleteProductService,
} from "../services/products.service.js";

export async function getProducts(req, res, next) {
  try {
    const products = await getAllProductsService();
    res.json(products);
  } catch (err) {
    next(err);
  }
}

export async function getProductById(req, res, next) {
  try {
    const { id } = req.params;
    const product = await getProductByIdService(id);

    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    res.json(product);
  } catch (err) {
    next(err);
  }
}

export async function createProduct(req, res, next) {
  try {
    const allowedFields = ["Nombre", "Precio", "Categoria"];

    const bodyKeys = Object.keys(req.body);
    const extraFields = bodyKeys.filter((k) => !allowedFields.includes(k));

    if (extraFields.length > 0) {
      return res.status(400).json({
        error: `Campos no permitidos: ${extraFields.join(", ")}`,
      });
    }

    const { Nombre, Precio, Categoria } = req.body;

    if (!Nombre || Precio == null) {
      return res
        .status(400)
        .json({ error: "Los campos 'Nombre' y 'Precio' son obligatorios" });
    }

    if (typeof Nombre !== "string") {
      return res.status(400).json({ error: "'Nombre' debe ser un string" });
    }

    if (typeof Precio !== "number") {
      return res.status(400).json({ error: "'Precio' debe ser un número" });
    }

    if (Categoria != null && typeof Categoria !== "string") {
      return res
        .status(400)
        .json({ error: "'Categoria' debe ser un string si se envía" });
    }

    const newProduct = {
      Nombre,
      Precio,
      Categoria: Categoria ?? "Sin categoría",
    };

    const id = await createProductService(newProduct);

    res.status(201).json({
      message: "Producto creado",
      id,
      product: newProduct,
    });
  } catch (err) {
    next(err);
  }
}

export async function updateProduct(req, res, next) {
  try {
    const { id } = req.params;

    const allowedFields = ["Nombre", "Precio", "Categoria"];
    const bodyKeys = Object.keys(req.body);
    const extraFields = bodyKeys.filter((k) => !allowedFields.includes(k));

    if (extraFields.length > 0) {
      return res.status(400).json({
        error: `Campos no permitidos: ${extraFields.join(", ")}`,
      });
    }

    const existing = await getProductByIdService(id);
    if (!existing) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    const { Nombre, Precio, Categoria } = req.body;

    if (
      Nombre === undefined &&
      Precio === undefined &&
      Categoria === undefined
    ) {
      return res.status(400).json({
        error: "Debe enviar al menos un campo para actualizar",
      });
    }

    const updatedData = {
      Nombre: Nombre ?? existing.Nombre,
      Precio: Precio ?? existing.Precio,
      Categoria: Categoria ?? existing.Categoria,
    };

    await updateProductService(id, updatedData);

    res.json({ message: "Producto actualizado" });
  } catch (err) {
    next(err);
  }
}

export async function deleteProduct(req, res, next) {
  try {
    const { id } = req.params;

    const existing = await getProductByIdService(id);
    if (!existing) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    await deleteProductService(id);
    res.json({ message: "Producto eliminado" });
  } catch (err) {
    next(err);
  }
}
