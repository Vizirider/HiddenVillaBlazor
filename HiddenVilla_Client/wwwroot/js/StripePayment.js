redirectToCheckout = function (sessionId) {
    var stripe = Stripe('pk_test_51KybMjKKO2LEECGsS4w8kq0LS0rVSwhwgq9uKFYpsLzqpcxHQVZ6TlVbwhnS0SgoSTiZSWnXtsdW9497KGighOiW0013cCFRAO');
    stripe.redirectToCheckout({
        sessionId: sessionId
    });
};