export type APITerminationType = {
  change_staff_status_id: string;
  teacher_id: string;
  techer_name: string;
  school_code: string;
  school_name: string;
  reason_name: string;
  requested_by_comment: string;
  requested_to_suspend_from: string | null;
  requested_to_suspend_to: string | null;
  requested_by_date: string;
  decided_by_comment: string | null;
  decided_to_suspend_from: string | null;
  decided_to_suspend_to: string | null;
  decided_by_date: string | null;
  status: TerminationStatusEnum;
};

export type TerminationReasonType = {
  termination_reason_id: string;
  reason_name: string;
};

export type SuspensionReasonType = {
  suspension_reason_id: string;
  reason_name: string;
};

export enum TerminationStatusEnum {
  PENDING = "PENDING TERMINATION",
  TERMINATED = "TERMINATED",
  PENDING_SUSPENSION = "PENDING SUSPENTION",
  SUSPENDED = "SUSPENDED",
  REJECTED = "REJECTED",
}
