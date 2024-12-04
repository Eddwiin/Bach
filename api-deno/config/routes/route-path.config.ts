export const ROUTE_PATH = {
    AUTH: {
        DEFAULT: '/auth',
        SIGNUP: '/auth/sign-up',
        LOGIN: '/auth/login',
        TEST: {
            children: '/children'
        }
    }
} as const;
