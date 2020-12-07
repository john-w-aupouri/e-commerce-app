import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  // Stripe requires price to be in cents
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Hn7NYCWwUzw7VOUwS4st1Qpq2dXztM1eQ96ALjl57rz2mMoupQ61lV66YgvEYGGTIY1jHEItbt5rKkVEEN6kUPC00t8W2T3cE';

  const onToken = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token: token
      }
    })
      .then(response => {
        alert('succesful payment');
      })
      .catch(error => {
        console.log('Payment Error: ', error);
        alert(
          'There was an issue with your payment! Please make sure you use the provided credit card.'
        );
      });
  };

  return (
    <StripeCheckout 
      label='Pay Now'
      name='React E-Commerce'
      billingAddress
      shippingAddress
      image='http://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
