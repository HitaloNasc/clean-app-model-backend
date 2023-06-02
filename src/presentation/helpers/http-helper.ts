import { HttpResponse } from '@/presentation/ports';

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    body: error.message,
});

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    body: data,
});