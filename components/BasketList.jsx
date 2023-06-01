
import { List, ListItem } from '@/components/mui';
import Product from '@/components/Product';
import Paragraph from '@/components/Paragraph';
import { nanoid } from 'nanoid';
import { useUserBasket } from '@/lib/tq/baskets/queries';

const BasketList = ({
  deleteHandler = () => {
    console.log("No deleteHandler supplied")
  },
  headingLevel = 2,

}) => {

  const { data: products } = useUserBasket();
  const {items} = basket;
  if (!items.length) return <Paragraph>No Items to show</Paragraph>;
  return (
    <List
      components="ol"
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(400px,1fr))',

      }}
    >
      {items.map((item) => (
        <ListItem key={nanoid()} component="li">
          <Product
            product={item}
            deleteHandler={deleteHandler}
            headingLevel={headingLevel}
            canBuy={false}
            canRemove={true}
            canUpdate={false}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default BasketList;
