import { useUser } from '@auth0/nextjs-auth0/client';
import { useProducts } from '@/lib/tq/products/queries';

import { List, ListItem, Grid, Typography, Box, Container, Paper } from '@/components/mui';
import Product from '@/components/Product';
import Paragraph from '@/components/Paragraph';
import { useAddToBasket } from '@/lib/tq/baskets/mutations';

const Productlist = ({
  deleteHandler = () => {},
  headingLevel = 5,
  canUpdate = false,
  canRemove = false,
  canBuy = true,
}) => {
  const { user } = useUser();
  const mutation = useAddToBasket();

  const { data: products } = useProducts();
  if (!products.length) return <Paragraph>No Products to show</Paragraph>;
  return (
<Container fixed>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
        {products.map((product) => (
          <Grid key={product._id} item xs={6} sm={6} md={4}>
            <Product
              product={product}
              deleteHandler={deleteHandler}
              headingLevel={headingLevel}
              canUpdate={canUpdate}
              canRemove={canRemove}
              canBuy={!!user && canBuy}
              addToBasket={() => mutation.mutate(product._id)}
            />
          </Grid>
        ))}
      </Grid>
</Container>



  );
};

export default Productlist;
