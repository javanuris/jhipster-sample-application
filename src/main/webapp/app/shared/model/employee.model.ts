import { Moment } from 'moment';
import { IDepartment } from 'app/shared/model/department.model';
import { IJob } from 'app/shared/model/job.model';
import { IEmployee } from 'app/shared/model/employee.model';

export interface IEmployee {
  id?: number;
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumber?: string;
  hireDate?: Moment;
  salary?: number;
  commissionPct?: number;
  isNorm?: boolean;
  department?: IDepartment;
  jobs?: IJob[];
  manager?: IEmployee;
}

export const defaultValue: Readonly<IEmployee> = {
  isNorm: false
};
