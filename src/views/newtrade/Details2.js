import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const states = [
  {
    value: 'buy',
    label: 'Buy'
  },
  {
    value: 'sell',
    label: 'Sell'
  },
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const Details = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    stockName: ' ',
    tradeType: '',
    coupon: 0,
    tradeDate: '',
    maturityDate: '',
    unitPrice: 0.0
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Please enter the new trade details"
          title="Trade Information"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the Stock name"
                label="Bond Name"
                name="stockName"
                onChange={handleChange}
                required
                value={values.stockName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Trade Type"
                name="tradeType"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Coupon"
                name="coupon"
                onChange={handleChange}
                required
                type="number"
                value={values.coupon}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Trade Date"
                name="tradeDate"
                onChange={handleChange}
                required
                type="date"
                value={values.tradeDate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Maturity Date"
                name="maturityDate"
                onChange={handleChange}
                required
                type="date"
                value={values.maturityDate}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Clean Price"
                name="unitPrice"
                onChange={handleChange}
                required
                type="number"
                value={values.unitPrice}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Submit
          </Button>
        </Box>
      </Card>
    </form>
  );
};

Details.propTypes = {
  className: PropTypes.string
};

export default Details;
