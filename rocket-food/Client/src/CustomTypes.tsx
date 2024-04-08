import React from 'react';

export interface FormAllData {
    type:"customer" | "restaurateur" | "delivery";
    firstName: string;
    middleName: string;
    lastName: string;
    gender: "male" | "female" | "nonBinary" | "";
    year: number;
    month: number;
    day: number;
    streetAddress: string;
    city: string;
    country: string;
    tel: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string
}