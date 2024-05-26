import { FacultyDto } from "@src/api/interface/laboratory.interface";
import Tag from "@src/components/tag/Tag";
import FacultyInfoCardContent from "./FacultyInfoCardContent";
import styles from "@src/styles/components/laboratory/_faculty-info-card.module.scss";
import { SimpleCollege, SimpleUniversity } from "@src/api/interface/simpleLaboratory.interface";

export default function FacultyInfoCard({
  faculty,
  university,
  college,
  name,
}: {
  faculty: FacultyDto;
  university: SimpleUniversity;
  college: SimpleCollege;
  name: string;
}) {
  return (
    <div className={styles.main}>
      <div>
        <div className={styles.header}>
          <p>{faculty.name}</p>
          <Tag label={"지도교수"} />
        </div>
        <div className={styles.description}>
          <p>
            {university.name} {college.name} {name}
          </p>
          {faculty.email && <p>{faculty.email}</p>}
          {faculty.phone && <p>{faculty.phone}</p>}
          {faculty.siteUrl && (
            <p>
              <a href={faculty.siteUrl} target="_blank" rel="noreferrer">
                {faculty.siteUrl}
              </a>
            </p>
          )}
        </div>
      </div>
      {faculty.education && <FacultyInfoCardContent title="학력" content={faculty.education} />}
      {faculty.career && <FacultyInfoCardContent title="경력" content={faculty.career} />}
      {faculty.expertise && <FacultyInfoCardContent title="전문분야" content={faculty.expertise} />}
    </div>
  );
}
