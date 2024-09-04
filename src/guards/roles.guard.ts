import { LoginPayload } from './../auth/dtos/loginPayload.dto';
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Observable } from "rxjs";
import { UserType } from "../user/enums/userType.dto";
import { ROLES_KEY } from "../decorators/roles.decorator";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class RolesGuard implements CanActivate{

    constructor(
        private reflector: Reflector,
        private readonly jwtService: JwtService
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean>{

        const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(
            ROLES_KEY,
            [context.getHandler(), context.getClass()],
        )

        if(!requiredRoles){
            return true
        }

        const {authorization} = context.switchToHttp().getRequest().headers

        const loginpayload: LoginPayload | undefined = await this.jwtService.verifyAsync(authorization, {secret: process.env.JWT_SECRET}).catch(() => undefined)

        if(!loginpayload){
            return false
        }

        const {user} = context.switchToHttp().getRequest()
        return requiredRoles.some((role) => role === loginpayload.typeUser)
    }
    
}