import nc from "next-connect";
import {
  getSession,
} from "@auth0/nextjs-auth0";

import {
  handleUnauthorisedAPICall,
  checkPermissions,
  checkRole,
} from "@/lib/api-functions/server/utils";

import permissions from "@/lib/api-functions/server/permissions.js";

const {
  identifier,
  roles: { admin },
  permissions: {
    orders: {
      create: createOrders,
      read: readOrders,
      update: updateOrders,
      remove: removeOrders,
    },
  },
} = permissions;

import {
  updateOrder,
  removeOrder,
  getOrders,
  addOrder,
} from "@/lib/api-functions/server/orders/controllers";

const baseRoute = "/api/v1/orders/:owner?";

const handler = nc({
  onError: (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).end("Internal Server Error");
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Not Found");
  },
  attachParams: true,
})
.use(async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }
  try {
    const session = await getSession(req, res);
    req.user = session.user;
    console.log(session);
    console.log(req.user);
    next();
  } catch (err) {
    return handleUnauthorisedAPICall(res);
  }
})
  .get(baseRoute, async (req, res) => {
    const {owner} = req.params;
    if(owner === 'own') {
      return getOwnBasket(req, res);
    }
    const isAdmin = checkRole(req.user, identifier, admin);

    if(!owner && !isAdmin) {
      return handleUnauthorisedAPICall(res);
    }
    getOrders(req, res);
  })
  .post(baseRoute, async (req, res) => {
    if (!checkPermissions(req.user, identifier, createOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    addOrder(req, res);
  })
  .put(baseRoute, async (req, res) => {
    if (!checkPermissions(req.user, identifier, updateOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    updateOrder(req, res);
  })
  .delete(baseRoute, async (req, res) => {
    if (!checkPermissions(req.user, identifier, removeOrders)) {
      return handleUnauthorisedAPICall(res);
    }
    removeOrder(req, res);
  });

export default handler;