import InfoPage from "@/components/common/InfoPage";

export default function ContactPage() {
  return (
    <InfoPage title="Contact Us">
      <p>
        Have a question about an order, a product, or anything else? Our Birmingham-based team is
        happy to help.
      </p>
      <h2>Customer Support</h2>
      <p>
        Email: <a href="mailto:info@kenkie.com">info@kenkie.com</a>
        <br />
        Phone: <a href="tel:+448007648042">0800 7648 042</a> (Mon–Fri, 9am–5pm)
      </p>
      <h2>Head Office</h2>
      <p>Kenkie Ltd, Birmingham, United Kingdom</p>
    </InfoPage>
  );
}
