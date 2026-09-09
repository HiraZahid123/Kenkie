import Link from "next/link";
import InfoPage from "@/components/common/InfoPage";

export default function FaqsPage() {
  return (
    <InfoPage title="Frequently Asked Questions">
      <h2>How long does delivery take?</h2>
      <p>Standard delivery takes 3–5 working days; express delivery arrives in 1–2 working days.</p>
      <h2>Do you ship outside the UK?</h2>
      <p>Currently we only ship within the United Kingdom.</p>
      <h2>How do I track my order?</h2>
      <p>
        Use the <Link href="/track-order">Track Order</Link> page with the order number from your
        confirmation email.
      </p>
    </InfoPage>
  );
}
