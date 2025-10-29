class ApiResponse {
    consturcter(
        statusCode,
        data,
        message) {
        this.statusCode = statusCode,
            this.data = data,
            this.message = message,
            this.success = success < 400
    }
}

export { ApiResponse }