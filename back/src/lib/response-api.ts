export class ResponseApi {
    static success({ data, message = "", count }: InputSuccess) {
        return { data, message, status: "success", count };
    }

    static error({ data = null, message }: InputError) {
        return { data, message, status: "error" };
    }
}

type InputSuccess = {
    data: any;
    message?: string;
    count?: number;
};

type InputError = {
    data?: any;
    message: string;
};