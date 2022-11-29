import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import accounting from 'accounting';
import { AddShoppingCart } from '@mui/icons-material';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product({product : {id, name, productType, image, price, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{arrProd}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const addToArrProd = () =>{
    dispatch({
      type: actionTypes.ADD_TO_ARR,
      item: {
        id: id,
        name: name,
        productType: productType,
        image: image,
        price: price,
        description: description
      }
    })
  }

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography 
            variant='h5'
            color='#f73378'
            marginTop='1rem'
          >{accounting.formatMoney(price, "$Arg ")}</Typography>  
        }
        title={name}
      />
      <CardMedia
        component= "img"
        height="200px"
        image={image}
        alt={productType}
      />
      <CardContent>
        <Typography variant='body2' color='textSecondary'>
          {productType}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to cart" onClick={addToArrProd}>
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
