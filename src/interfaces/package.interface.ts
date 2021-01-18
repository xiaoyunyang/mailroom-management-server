import { UUID } from "./types";

export interface Package {
  id: UUID;
  delivered_date: Date;
  pickup_date: Date;
}
