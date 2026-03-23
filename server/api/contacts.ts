import type { ContactsRequest, ContactsResponse } from "@/models/examples"

export default defineEventHandler(async (event): Promise<ContactsResponse> => {
    const body = await readBody<ContactsRequest>(event)

    if (!body.name || !body.email || !body.message) {
        return {
            success: false,
            message: 'Все поля обязательны',
        }
    }


    return {
        success: true,
        message: 'Форма успешно отправлена',
    }
})