import {Controller, Delete, Get, Post, Put, Param, Query} from '@nestjs/common';
import {UsersService} from "../services/users/users.service";

@Controller('users')
export class UsersController {
    constructor(private userService: UsersService) {
    }
    // @Get()
    // getAllUsers(@Query() param): string {
    //     console.log('param', param)
    //     return param.id
    // }

    @Get()
    getAllUsers(): string{
        return this.userService.getAllUsers()
    }

    @Get(":id")
    getUserById(@Param() param): string {
        return this.userService.getUserById(param);
    }

    @Post()
    sendUsers(): string{
        return this.userService.sendUsers()
    }

    @Put()
    updateUsers(): string{
        return this.userService.updateUsers()
    }

    @Delete()
    deleteUsers(): string{
        return this.userService.deleteUsers()
    }

    @Delete(":id")
    deleteUserById(@Param('id') id): string {
        return this.userService.deleteUserById(id)
    }
}
