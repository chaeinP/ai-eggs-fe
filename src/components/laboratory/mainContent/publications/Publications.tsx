import { Laboratory } from "@src/api/interface/laboratory.interface";
import styles from "@src/styles/components/laboratory/_publications.module.scss";
import PublicationCard from "./PublicationCard";

export default function Publications({
  publications,
  publicationsUrl,
}: {
  publications: Laboratory["publications"];
  publicationsUrl: string | null;
}) {
  return (
    <section className={styles.main}>
      <h2>연구 실적</h2>
      <ul>
        {publications.map((publication, index) => (
          <PublicationCard key={index} publication={publication} />
        ))}
      </ul>
      {publicationsUrl && (
        <div className={styles.more}>
          <button>
            <a href={publicationsUrl} target="_blank" rel="noreferrer">
              더보기
            </a>
          </button>
        </div>
      )}
    </section>
  );
}
