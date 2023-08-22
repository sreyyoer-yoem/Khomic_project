export interface IUser {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    email_verified: boolean;
    password: string;
    created_at: Date;
    updated_at: Date;
};

export interface IUserSession {
    session_id: string;
    user_id: number;
    ip: string;
    session_data: any;
    created_at: Date;
    expired_at: Date;
}