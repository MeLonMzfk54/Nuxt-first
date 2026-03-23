import { userService } from '@/services/user.service'
import type { User } from '@/models/users'

export const useUser = (userId: number) => {
    const { data, pending, error, refresh } = useAsyncData<User>(
        `user-${userId}`,
        () => userService.getById(userId)
    )

    return { user: data, pending, error, refresh }
}