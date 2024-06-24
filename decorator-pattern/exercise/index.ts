import { ABSL_EMPLOYEE, Employee } from "./base";
import { AddBiometrics, AddCompanyEmail } from "./decorators";

let patrick: ABSL_EMPLOYEE = new Employee("Patrick Murimi");
patrick = new AddCompanyEmail(patrick);
patrick = new AddBiometrics(patrick);

console.log(patrick.getDetails());
