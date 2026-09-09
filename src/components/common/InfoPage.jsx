import Breadcrumbs from "./Breadcrumbs";
import "@/styles/pages/InfoPage.css";

export default function InfoPage({ title, children }) {
  return (
    <>
      <Breadcrumbs trail={[{ label: title }]} />
      <section className="section info-page">
        <div className="container info-page__inner">
          <h1>{title}</h1>
          <div className="info-page__body">{children}</div>
        </div>
      </section>
    </>
  );
}
