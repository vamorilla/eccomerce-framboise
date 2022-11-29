import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { pink } from '@mui/material/colors';
import { Button } from '@mui/material';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


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

export default function CheckOutCard({product : {id, name, productType, image, price, description}}) {
  const [expanded, setExpanded] = React.useState(false);
  const [{arrProd}, dispatch] = useStateValue();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const removeItem = () => {
    dispatch({
      type: actionTypes.REMOVE_ITEM,
      id,
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
      <CardActions disableSpacing>
        <Button>
            <DeleteIcon sx={{ color: pink[500] }} onClick={removeItem}/>
        </Button>
      </CardActions>
    </Card>
  );
}
