export enum ResponseCodes {
    Success = 200,
    UserPasswordIncorrect = 404,
    APIError = 400,
    EmailNotVerified = 412,
    InternalServerError = 500,
    BadInput = 454,
    UnAuthorized = 403,
    codeExpiration = 405,
    codeResetPass = 406,
}

export enum TableNames {
    Users = "users",
    UserSessions = "user_sessions",
}