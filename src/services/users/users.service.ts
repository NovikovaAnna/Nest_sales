import {Delete, Get, Injectable, Param, Post, Put} from '@nestjs/common';

@Injectable()
export class UsersService {

    getAllUsers(): string {
        return "hi user!";
    }


    getUserById(@Param() param): string {
        return "hi user!" + param.id;
    }


    sendUsers(): string{
        return "user post data"
    }


    updateUsers(): string{
        return "user put data"
    }


    deleteUsers(): string{
        return "all user delete data"
    }


    deleteUserById(id:string): string {
        return "delete user number!" + id;}
}
