import { Injectable, OnModuleInit } from '@nestjs/common';

@Injectable()
export class UserService implements OnModuleInit {
    constructor() {
        console.log('UserService instantiated')
    }

    async onModuleInit() {
        console.log('UserService Initializing')
    }

    getUserMessage() {
        return { message: 'user message' }
    }
}
