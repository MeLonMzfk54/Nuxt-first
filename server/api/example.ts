import { exampleReturn } from "@/models/examples"

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    return {
        msg: body
    }
})