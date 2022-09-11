import { Branch } from "./branch.model";

export interface Rice {
  id: string;
  name: string;
  description?: string;
  cost?: number;
  image?: string;
  ingredients?: string;
  branchs?: Branch[];
}
