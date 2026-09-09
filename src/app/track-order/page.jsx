"use client";

import InfoPage from "@/components/common/InfoPage";

export default function TrackOrderPage() {
  return (
    <InfoPage title="Track Order">
      <p>Enter your order number and email address to check the status of your delivery.</p>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "360px", marginTop: "20px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Order number"
          style={{ padding: "12px", border: "1px solid var(--color-border)", borderRadius: "3px" }}
        />
        <input
          type="email"
          placeholder="Email address"
          style={{ padding: "12px", border: "1px solid var(--color-border)", borderRadius: "3px" }}
        />
        <button type="submit" className="btn btn-primary">
          Track Order
        </button>
      </form>
    </InfoPage>
  );
}
