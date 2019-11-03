import * as zoid from "zoid/dist/zoid.frameworks";

const PaymentWidget = zoid.create({
  tag: "payment-widget",
  url: "http://localhost:3000/payment",
  dimensions: {
    width: '400px',
    height: '400px'
  }
});

export default PaymentWidget;
