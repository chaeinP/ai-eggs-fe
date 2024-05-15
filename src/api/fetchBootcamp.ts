import { env } from "@src/config/environment";
import { Bootcamp } from "./interface/bootcamp.interface";

export async function fetchBootcamp(id: string): Promise<Bootcamp> {
  const response = await fetch(`${env.baseUrl}/api/v1/bootcamps/${id}`);

  if (!response.ok) {
    throw new Error("fetchBootcamp failed: " + id);
  }

  return response.json();
}
