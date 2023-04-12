export class PatientModel{
    bloodGroup?:string;
    height?: string;
    weight?:string;
    user?:PersonModel[]; 
}



export class PersonModel{
    prefix? : string;
    firstName?: string;
    lastName?: string;
    phoneNumber?: string;
    dob?:Date;
    gender?:string;
    // role? : string;
    account?:AccountModel[];
}

export class AccountModel{
        emailId?:string;
        password? :string;
    }

export class Prefix{
    prefix?:string;
    abbreviation?:string;
  // target: any;
}

export class Gender{
    gender?:string;
  // target: any;
}

export class Role{
    role?:string;
  // target: any;
}

export class Enrollment{
  enrollemnt?:string;
}