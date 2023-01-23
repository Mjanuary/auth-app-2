export type DistrictTypes = {
  district_code: string;
  district_name: string;
};

export type SchoolsType = {
  school_id: string;
  school_code: string;
  school_name: string;
  school_category: string;
  school_status: string;
  village_id: string;
  schoollocationid: string;
  village_name: string;
  cell_code: string;
  cell_name: string;
  sector_code: string;
  sector_name: string;
  district_code: string;
  district_name: string;
  province_code: string;
  province_name: string;
};

export type TeacherTransferDetails = {
  teacherTransfer_id: string;
  req_school_name: string;
  Approved_school_name: string;
  district_name: string;
  sector_name: string;
  requested_date: string;
  incoming_decision: string | null; // aho agiye
  incoming_decision_date: string | null;
  outgoing_dde_decision: string | null;
  outgoing_dde_comment: string | null;
  outgoing_dde_decision_date: string | null; // aho uvuye
};

export type requestedDde = {
  teacher_id: string;
  teacher_transfer_id: string;
  teacher_full_name: string;
  teacher_first_name: string;
  teacher_last_name: string;
  teacher_phone_number: string;
  school_from_id: string;
  school_from_name: string;
  school_from_district: string;
  school_from_sector: string;
  teacher_requested_transfer_date: string;
  teacher_reason: string;
  requested_school_id: string;
  requested_school_code: string;
  requested_school_name: string;
  requested_school_district: string;
  requested_school_sector: string;
  requested_status: string;
  incoming_decision_date: string | null;
  requested_dde_id: string | null;
  requested_comment: string | null;
  approved_school_id: string | null;
  approved_school_name: string | null;
  approved_school_district: string | null;
  approved_school_sector: string | null;
  outgoing_status: string | null;
  outgoing_decision_date: string | null;
  outgoinng_dde_id: string | null;
  outgoing_dde_comment: string | null;
  teacher_comment: string;
};

export type Qualifications = {
  qualification_id: string;
  qualification_name: string;
};

export type RequestedTransfer = {
  teacher_transfer_id: string;
  teacher_supporting_document: string;
  requested_school_id: string;
  requested_school_name: string;
  requested_school_district: string;
  requested_school_sector: string;
  approved_school_id: string | null;
  approved_school_name: string | null; //REJECTED
  requested_status: string;
  teacher_requested_transfer_date: string;
  teacher_reason: string;
  requested_comment: string;
  incoming_decision_date: string;
  outgoing_status: string | null;
  outgoing_dde_comment: string | null;
  outgoing_decision_date: string | null;
};

export type RequestedToLeave = {
  full_name: string;
  position_name: string;
  outgoing_status: string;
  qualification_name: string;
  requested_school_district: string;
  requested_school_id: string;
  requested_school_name: string;
  requested_school_sector: string;
  teacher_reason: string;
  teacher_requested_transfer_date: string;
  teacher_supporting_document: string;
  teacher_transfer_id: string;
  techer_id: string;
};
