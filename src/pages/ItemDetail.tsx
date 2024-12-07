import React from 'react';
    import { Card, CardContent, Typography } from '@mui/material';

    const ItemDetail: React.FC = () => {
      return (
        <Card>
          <CardContent>
            <Typography variant="h5">Laptop</Typography>
            <Typography variant="body1">Price: $999</Typography>
            <Typography variant="body1">Description: High-performance laptop with latest specs.</Typography>
            {/* Add more details here */}
            <Button variant="contained" color="primary">
              Add to Cart
            </Button>
            <Button variant="outlined" color="secondary">
              Contact Seller
            </Button>
          </CardContent>
        </Card>
      );
    };

    export default ItemDetail;
