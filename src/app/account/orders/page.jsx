import Link from "next/link";
import InfoPage from "@/components/common/InfoPage";

export default function OrderHistoryPage() {
  return (
    <InfoPage title="Order History">
      <p>You haven't placed any orders yet. Once you do, they'll show up here.</p>
      <Link href="/shop" className="btn btn-outline-dark" style={{ marginTop: "12px" }}>
        Start Shopping
      </Link>
    </InfoPage>
  );
}
