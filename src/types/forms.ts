export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface PartnerFormData {
  organizationName: string;
  contactName: string;
  email: string;
  organizationType: string;
  helpTypes: string[];
  message: string;
}

export interface VolunteerFormData {
  name: string;
  email: string;
  skills: string;
  availability: string;
  message: string;
}

export interface SubscribeFormData {
  email: string;
}
