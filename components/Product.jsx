import Image from "next/image";
import Link from "next/link";
import { dinero, toDecimal } from "dinero.js";
import { GBP } from '@dinero.js/currencies';
import {
  Typography,
  List,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  EditIcon,
  DeleteIcon,
  Button,
  Box,
  Paper,
  Grid
} from "@/components/mui";
import Heading from "@/components/Heading";

import { slugify, formatPrice } from "@/lib/utils/formatters";


const ProductDisplay = ({
  product: { _id, title, image, description, price, quantity } = {},
  deleteHandler = () => {
    console.log("no delete handler supplied");
  },
  addToBasket = (id) => {
    console.log("no addToBasket handler supplied", id);
  },
  headingLevel = 5,
  canUpdate = false,
  canRemove = false,
  canBuy=false
}) => {
  return (
    <Grid sx={{ width: "500" }}>
      <CardMedia sx={{ display: "grid", placeItems: "center" }}>
        <Image alt={title} src={image} width="300" height="300" />
      </CardMedia>
      <CardContent>
        <Heading component={`h${headingLevel}`} sx={{ textAlign: "center" }}>
          {title}
        </Heading>
        <List
          component="dl"
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1em",
          }}
        >
          <Typography component="dt" sx={{ textAlign: "right" }}>
            Price
          </Typography>
          <Typography component="dd" sx={{ fontWeight: "bold" }}>
            {formatPrice(toDecimal(dinero({ amount: price, currency: GBP})))}
          </Typography>
          <Typography component="dt" sx={{ textAlign: "right" }}>
            Quantity
          </Typography>
          <Typography component="dd" sx={{ fontWeight: "bold" }}>
            {quantity} remaining
          </Typography>
        </List>
      </CardContent>
      <CardActions sx={{ display: "grid", placeItems: "center" }}>
        <Box>
          <Button href={`/products/${slugify(title, _id)}`} component={Link}>
            view
          </Button>
          {canUpdate && (
            <IconButton
              aria-label="update"
              component={Link}
              href={`/admin/products/update/${_id}`}
            >
              <EditIcon />
            </IconButton>
          )}
          {canRemove && (
            <IconButton aria-label="delete" onClick={() => deleteHandler(_id)}>
              <DeleteIcon />
            </IconButton>
          )}
          {canBuy && (
            <Button onClick={addToBasket}>
              Add to Basket
            </Button>
          )}
        </Box>
      </CardActions>
    </Grid>
  );
};

export default ProductDisplay;