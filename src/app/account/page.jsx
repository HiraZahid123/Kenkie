"use client";

import InfoPage from "@/components/common/InfoPage";

export default function AccountPage() {
  return (
    <InfoPage title="Account">
      <p>Sign in to view your orders, saved addresses and wishlist.</p>
      <form
        style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "360px", marginTop: "20px" }}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Email address"
          style={{ padding: "12px", border: "1px solid var(--color-border)", borderRadius: "3px" }}
        />
        <input
          type="password"
          placeholder="Password"
          style={{ padding: "12px", border: "1px solid var(--color-border)", borderRadius: "3px" }}
        />
        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </InfoPage>
  );
}
