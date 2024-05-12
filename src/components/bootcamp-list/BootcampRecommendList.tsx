import styles from "@src/styles/components/bootcamp-list/_recommend-list.module.scss";
import BootcampVerticalCard from "./vertical-card/BootcampVerticalCard";
import { Bootcamp } from "@src/api/interface/bootcamp.interface";

export default function BootcampRecommendList({ bootcamps }: { bootcamps: Bootcamp[] }) {
  return (
    <div className={styles.recommend_list}>
      <h2>추천 부트캠프</h2>
      <ul>
        {bootcamps.map((bootcamp) => (
          <BootcampVerticalCard key={bootcamp.id} bootcamp={bootcamp} />
        ))}
      </ul>
    </div>
  );
}
