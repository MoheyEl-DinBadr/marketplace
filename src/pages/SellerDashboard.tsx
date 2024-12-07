import React, { useEffect, useState } from 'react';
    import { Card, CardContent, Typography, Grid, Button } from '@mui/material';
    import { fetchListings } from '../data/mockData';

    const SellerDashboard: React.FC = () => {
      const [listings, setListings] = useState([]);

      useEffect(() => {
        fetchListings().then((data) => setListings(data));
      }, []);

      return (
        <Grid container spacing={2}>
          {listings.map((listing: any) => (
            <Grid item xs={12} sm={6} md={4} key={listing.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{listing.title}</Typography>
                  <Typography variant="body1">Price: {listing.price}</Typography>
                  <Typography variant="body1">Status: {listing.status}</Typography>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                  <Button size="small" color="secondary">
                    Delete
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    };

    export default SellerDashboard;
