const getEnv = (key: string, fallback: string) =>
    (window as any)._env_?.[key] ||
    process.env[`REACT_APP_${key}`] ||
    fallback;

export const API = {
    EMPLOYEE: getEnv("EMPLOYEE_API", "http://localhost:8082"),
    ASSET: getEnv("ASSET_API", "http://localhost:8081"),
    ASSIGNMENT: getEnv("ASSIGNMENT_API", "http://localhost:8080"),
    REPORTING: getEnv("REPORTING_API", "http://localhost:8083")
};
