class AppError {
    public readonly message: string;

    public readonly statusCode: number; // Erro 400, 404...

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}

export default AppError;
