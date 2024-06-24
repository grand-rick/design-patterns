import { ABSL_EMPLOYEE, EmployeeDecorator } from "./base";

export class AddCompanyEmail extends EmployeeDecorator {
  constructor(e: ABSL_EMPLOYEE) {
    super(e);
  }

  getDetails(): string {
    const name = super.getDetails().split(" ").join(".").toLowerCase();
    return `${super.getDetails()}, Email Added: ${name}@absl.com`;
  }
}

export class AddBiometrics extends EmployeeDecorator {
  constructor(e: ABSL_EMPLOYEE) {
    super(e);
  }

  getDetails(): string {
    return `${super.getDetails()}, Biometrics Added`;
  }
}
