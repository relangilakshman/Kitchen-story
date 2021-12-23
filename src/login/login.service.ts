import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"sakshi@gmail.com",
            password:"soni1234"
        },
        {
            email:"sindhura@gmail.com",
            password:"sai1234"
        },
        {
            email:"ash@gmail.com",
            password:"ash123"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}