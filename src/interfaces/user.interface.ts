import { UUID } from "./types";

export interface User {
  id: UUID;
  password: string;
  email: string;
  phone_number: number;
  email_verified: boolean;
  phone_number_verified: boolean;
  email_notif_opt_in: boolean;
  sms_notif_opt_in: boolean;
}
