export function request(params: { url: string }, success: (content: string) => void, error: (error: Error) => void): void {
    const request = new XMLHttpRequest()
    request.open('GET', params.url, true)
    request.send(null)
    request.onreadystatechange = function() { 
        if (request.readyState == 4 && request.status == 200)
        success(request.responseText)
    }
}
