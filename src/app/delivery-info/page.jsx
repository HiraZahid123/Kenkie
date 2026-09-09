import InfoPage from "@/components/common/InfoPage";

export default function DeliveryInfoPage() {
  return (
    <InfoPage title="Delivery Info">
      <p>We offer free UK delivery on all orders over £50, with quick dispatch on every order.</p>
      <ul>
        <li>Standard Delivery (3–5 working days): £4.99, free over £50</li>
        <li>Express Delivery (1–2 working days): £8.99</li>
        <li>Most orders are dispatched within 24 hours of purchase</li>
      </ul>
      <p>You'll receive a tracking link by email as soon as your order ships.</p>
    </InfoPage>
  );
}
