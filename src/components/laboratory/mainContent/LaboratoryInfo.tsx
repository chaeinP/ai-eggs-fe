import { Laboratory } from "@src/api/interface/laboratory.interface";
import styles from "@src/styles/components/laboratory/_info.module.scss";

export default function LaboratoryInfo({ laboratory }: { laboratory: Laboratory }) {
  return (
    <section className={styles.info}>
      <h2>연구실 정보</h2>
      <table>
        <tbody>
          <tr>
            <td>대학/학과</td>
            <td>
              {laboratory.university.name} {laboratory.college.name}
            </td>
          </tr>
          <tr>
            <td>연구 분야</td>
            <td>{laboratory.researchFields.map(({ label }) => label).join("・")}</td>
          </tr>
          <tr>
            <td>지도 교수</td>
            <td>{laboratory.faculties.map(({ name }) => name).join(", ")}</td>
          </tr>
          {laboratory.email && (
            <tr>
              <td>컨택 이메일</td>
              <td>{laboratory.email}</td>
            </tr>
          )}
          {laboratory.phone && (
            <tr>
              <td>연락처</td>
              <td>{laboratory.phone}</td>
            </tr>
          )}
          <tr>
            <td>홈페이지</td>
            <td>
              <a href={laboratory.siteUrl} target="_blank" rel="noreferrer">
                {laboratory.siteUrl}
              </a>
            </td>
          </tr>
          {laboratory.address && (
            <tr>
              <td>위치</td>
              <td>{laboratory.address}</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
