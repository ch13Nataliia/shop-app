import nc from 'next-connect';
import {
  addProduct,
  updateProduct,
  getProducts,
  removeProduct,
} from '@/lib/api-functions/server/products/controllers.js';

const baseRoute = 'api/v1/products/:db?';
const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end('Something broke!');
  },
  onMatch: (req, res) => {
    req.status(404).end('Page is nor found');
  },
  attachParams: true,
})
  // .use(someMiddleware())
  .get(baseRoute, async (req, res) => {
    getProducts(req, res);
  })
  .post(baseRoute, async (req, res) => {
    addProduct(req, res);
  })
  .put(baseRoute, async (req, res) => {
    updateProduct(req, res);
  })
  .delete(baseRoute, async (req, res) => {
    removeProduct(req, res);
  });

export default handler;
