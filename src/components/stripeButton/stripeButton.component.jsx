import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const onToken = (token) => alert('Payment Successful')

function StripeButton({ price }) {
  const stripePrice = price * 100
  const publishableKey = 'pk_test_51H4PLgHjYcpj4Db1xhQC37VViUifqQDRuSNpJenS2oHFtcTqt4aCAzbg09e9g89a0vFREfdI4SllPuqcEuY8ePdt00FeAO46RL'
  return (
    <div>
      <StripeCheckout 
        label='Pay Now'
        name='ProjectShop'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is ${price}`}
        amount={stripePrice}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  )
}

export default StripeButton
