export interface ABSL_EMPLOYEE {
  getDetails(): string;
}

export class Employee implements ABSL_EMPLOYEE {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getDetails(): string {
    return this.name;
  }
}

export abstract class EmployeeDecorator implements ABSL_EMPLOYEE {
  employee: ABSL_EMPLOYEE;

  constructor(e: ABSL_EMPLOYEE) {
    this.employee = e;
  }

  getDetails(): string {
    return this.employee.getDetails();
  }
}
