export function request(params: { url: string }, success: (content: string) => void, error: (error: RequestError) => void): void {
    const request = new XMLHttpRequest()
    request.open('GET', params.url, true)
    try {
        request.send(null)
    } catch (error) {
        console.log(error)
    }
    request.onreadystatechange = function() { 
        if (request.readyState == 4) {
            if (request.status == 200) {
                success(request.responseText)
            } else {
                error(new RequestError(request.statusText, request.status))
            }
        }
    }
}

export class RequestError extends Error {
    constructor(error: string, public status: number) {
        super(error)
    }
}