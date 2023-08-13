export interface Client{
    [x: string]: any;
    id:number;
    name: string;
    meterId: number;
    postalCode: number;
    city:string;
    street:string;
    houseNumber: number;
    paymentCategoryId: number;
    email: string;
    password: string;

}