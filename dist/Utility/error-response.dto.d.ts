export interface ErrorResponse {
    success: false;
    message: string;
    statusCode: number;
    errors?: Record<string, string[]>;
}
