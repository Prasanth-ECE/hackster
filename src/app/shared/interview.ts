import { Interviewcreate } from './interview-create';

export class Interview {
 result: {
    _id?: number;
    name: String;
    gender: String;
    phone: number;
    department: String;
    interviewtype: String;
    date: [{year: { type: Number}, month: { type: Number }, day: { type: Number }}];
    time: [{hour: { type: Number}, minute: { type: Number }, second: { type: Number }}];
    interviewer: String;
 };
 gender: string;
}