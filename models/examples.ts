export interface ContactsRequest {
    name: string
    email: string
    message: string
}

export interface ContactsResponse {
    success: boolean
    message: string
}