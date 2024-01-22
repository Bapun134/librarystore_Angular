import { customer } from "./Customer";

export class Cart{
    constructor(
        public name:string,
        public price:number,
        public bookId:number,
        public qty:number,
        public total:number
    ){}
}