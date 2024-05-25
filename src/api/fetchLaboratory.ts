import { env } from "@src/config/environment";
import { Laboratory } from "./interface/laboratory.interface";

export async function fetchLaboratory(id: string): Promise<Laboratory> {
  const response = await fetch(`${env.baseUrl}/api/v1/laboratories/${id}`);

  if (!response.ok) {
    throw new Error("fetchLaboratory failed: " + id);
  }

  return response.json();
}
