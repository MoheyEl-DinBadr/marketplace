import React, { useState } from 'react';
    import { Button, Container, Typography, TextField, Stepper, Step, StepLabel, Box } from '@mui/material';

    const steps = ['Image Upload', 'Item Details', 'Review and Submit'];

    const ItemUpload: React.FC = () => {
      const [activeStep, setActiveStep] = useState(0);
      const [formData, setFormData] = useState({
        image: '',
        title: '',
        description: '',
        category: '',
        price: ''
      });

      const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
      };

      const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
      };

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      return (
        <Container maxWidth="sm" style={{ marginTop: '100px' }}>
          <Typography variant="h4" gutterBottom>
            Upload New Item
          </Typography>
          <Stepper activeStep={activeStep}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <Box sx={{ mt: 2 }}>
            {activeStep === 0 && (
              <div>
                {/* Image Upload */}
                <input type="file" name="image" onChange={handleChange} />
              </div>
            )}
            {activeStep === 1 && (
              <div>
                <TextField
                  label="Title"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  margin="normal"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
                <TextField
                  label="Category"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                />
                <TextField
                  label="Price"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                />
              </div>
            )}
            {activeStep === 2 && (
              <div>
                <Typography variant="h6">Review and Submit</Typography>
                <Typography variant="body1">
                  Title: {formData.title}
                  <br />
                  Description: {formData.description}
                  <br />
                  Category: {formData.category}
                  <br />
                  Price: {formData.price}
                </Typography>
              </div>
            )}
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Button color="inherit" disabled={activeStep === 0} onClick={handleBack}>
              Back
            </Button>
            <Box sx={{ flex: '1 1 auto' }} />
            {activeStep !== steps.length - 1 && (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
            {activeStep === steps.length - 1 && (
              <Button variant="contained" color="primary">
                Submit
              </Button>
            )}
          </Box>
        </Container>
      );
    };

    export default ItemUpload;
