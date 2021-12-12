import { SharedUser } from '../user.interface';

export interface Place {
  name: string;
  descrition?: string;
  videos?: string[];
  images?: string[];
  portraitImage?: string;
  phoneNumber: string;
  whatsApp: string;
  ownerUser: SharedUser;
  openTime: {
    from: Date;
    to: Date;
  }
  age?: number;
}
