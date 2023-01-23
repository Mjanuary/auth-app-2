import { TerminationStatusEnum } from "./StaffTermination";

export type userInfoType = {
  staff_code: string;
  staff_category_id: string;
  role_id: string;
  full_name: string;
  sex: string;
  dob: string;
  marital_status: string;
  nid: string;
  email: string;
  phone_numbers: string;
  rssb_number: string;
  education_domain_id: string | null;
  education_sub_dommain_id: string | null;
  specialisation_id: string;
  graduation_date: string;
  highest_qualification_id: string;
  hired_date: string;
  contract_type: string;
  bank_account: string;
  nationality_id: string;
  province_code: string;
  district_code: string;
  sector_code: string;
  cell_code: string;
  village_id: string;
  village: string;
  school_name: string;
  user_id: string;
  username: string;
  bank_id: string;
  created_by: string | null;
  created_at: string;
  updated_by: string | null;
  updated_at: string;
  archive: string;
  archive_by: string | null;
  archive_at: string | null;
  status: string;
  first_name: string | null;
  middle_name: string | null;
  last_name: string | null;
  specialization_id: string | null;
  village_code: string | null;
};

export type BasicInfoType = {
  staff_code: string;
  full_name: string;
  gender: string;
  dob: string;
  marital_status: string | null;
  nationality_id: string;
  nid: string;
  rssb_number: string;
  bank_account: string;
  address: string | null;
  email: string;
  phone_numbers: string;
  hired_date: string;
};

export type WorkInfoType = {
  school_name: string;
  school_district: string | null;
  school_sector: string | null;
  position: string | null;
  combination: string | null;
  course_in_grade: string | null;
  hired_date: string | null;
  status: string | null;
  paid_qualification: string | null;
};

export type UserEducationType = {
  qualification_name: string;
  qualification_document: string | null;
  qualification_issued_date: string | null;
  given_institution: string | null;
};

export type UserExperienceType = {
  institution: string;
  starting_date: string | null;
  ending_date: string | null;
  position: string | null;
};

export type TransferInfoType = {
  transfer_id: string;
  from_school_name: string;
  to_school_name: string | null;
  transfer_date: string | null;
  date: string | null;
};

export type TerminationInfoType = {
  termination_id: string;
  termination_school_name: string;
  termination_reason: string;
  termination_status: TerminationStatusEnum;
};

export type SuspensionInfoType = {
  suspended_id: string;
  suspended_from: string;
  suspended_to: string;
  suspended_from_school: string;
  suspended_reason: string | null;
  suspended_date: string | null;
  suspended_status: TerminationStatusEnum;
};

export type ProfileType = {
  staffDetails: {
    basicInfo: BasicInfoType;
    workInfo: WorkInfoType | null;
    education: UserEducationType[];
    experience: UserExperienceType[];
    transferInfo: TransferInfoType[];
    suspensionInfo: SuspensionInfoType[];
    terminationInfo: TerminationInfoType[];
  };
};
