const getEnv = (key: string, fallback: string) =>
  (window as any)._env_?.[key] ||
  process.env[`REACT_APP_${key}`] ||
  fallback;

export const API = {
  EMPLOYEE: getEnv("EMPLOYEE_API", "https://employee.megcloud.space"),
  ASSET: getEnv("ASSET_API", "https://asset.megcloud.space"),
  ASSIGNMENT: getEnv("ASSIGNMENT_API", "https://assignment.megcloud.space"),
  REPORTING: getEnv("REPORTING_API", "https://reporting.megcloud.space"),
};

