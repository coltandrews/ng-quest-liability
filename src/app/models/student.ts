import { NumberValueAccessor } from "@angular/forms";

export interface Student {
    studentID: number;
    schoolName: string;
    schoolID: number;
    compID: number;
    firstName: string;
    lastName: string;
    submitted: boolean;
}