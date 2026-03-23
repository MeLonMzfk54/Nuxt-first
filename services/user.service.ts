import type {User, UsersResponse} from "@/models/users";

export const userService = {
    getAll(): Promise<UsersResponse> {
        return $fetch<UsersResponse>('https://dummyjson.com/users')
    },

    getById(id: number): Promise<User> {
        return $fetch<User>(`https://dummyjson.com/users/${id}`)
    },
}