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

export interface restaurantData {
    nameRestaurant: string;
    streetAddress:  string;
    country: string;
    city: string;
    creationDate: Date;
    owner: string;
    phoneNumber: string;
    email: string;
    confirmEmail: string;
    password: string;
    confirmPassword: string;
    categories: string;
}