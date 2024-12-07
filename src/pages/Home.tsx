import React, { useEffect, useState } from 'react';
    import { Card, CardContent, Typography, Grid } from '@mui/material';
    import { fetchFeaturedItems } from '../data/mockData';

    const Home: React.FC = () => {
      const [featuredItems, setFeaturedItems] = useState([]);

      useEffect(() => {
        fetchFeaturedItems().then((data) => setFeaturedItems(data));
      }, []);

      return (
        <Grid container spacing={2}>
          {featuredItems.map((item: any) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{item.title}</Typography>
                  <Typography variant="body1">Price: {item.price}</Typography>
                  {/* Add more details here */}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      );
    };

    export default Home;
