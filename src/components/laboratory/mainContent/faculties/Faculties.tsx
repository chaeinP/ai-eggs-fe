import { Laboratory } from "@src/api/interface/laboratory.interface";
import FacultyInfoCard from "./FacultyInfoCard";

export default function Faculties({ laboratory }: { laboratory: Laboratory }) {
  return (
    <section>
      <h2>교수 정보</h2>
      {laboratory.faculties.map((faculty) => (
        <FacultyInfoCard
          key={faculty.id}
          faculty={faculty}
          university={laboratory.university}
          college={laboratory.college}
          name={laboratory.name}
        />
      ))}
    </section>
  );
}
