import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
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
    confirmPassword: string;
}

const UserSchema: Schema = new Schema({
    firstName: String,
    middleName: String,
    lastName: String,
    gender: String,
    dobYear: String,
    dobMonth: String,
    dobDate: String,
    streetAddress: String,
    city: String,
    country: String,
    tel: String,
    email: String,
    confirmEmail: String,
    password: String,
    confirmPassword: String,
});

export default mongoose.model<IUser>('User', UserSchema);