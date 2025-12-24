const getEnv = (key: string, fallback: string) =>
    (window as any)._env_?.[key] ||
    process.env[`REACT_APP_${key}`] ||
    fallback;

export const API = {
    EMPLOYEE: getEnv("EMPLOYEE_API", "http://employee.sikshasathi.tech"),
    ASSET: getEnv("ASSET_API", "http://asset.sikshasathi.tech"),
    ASSIGNMENT: getEnv("ASSIGNMENT_API", "http://assignment.sikshasathi.tech"),
    REPORTING: getEnv("REPORTING_API", "http://reporting.sikshasathi.tech")
};
