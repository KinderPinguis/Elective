import React from 'react';

export interface FormAllData {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: "male" | "female" | "nonBinary" | "";
    dobYear: string;
    dobMonth: string;
    dobDate: string;
    streetAddress: string;
    city: string;
    country: string;
    tel: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string
}