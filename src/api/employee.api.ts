import { http } from "./http";
import { API } from "../config/env";

export interface Employee {
    id?: string;
    employeeCode: string;
    name: string;
    email: string;
    department: string;
}

export const EmployeeAPI = {
    getAll: async (): Promise<Employee[]> => {
        const res = await http.get(`${API.EMPLOYEE}/employees`);
        return res.data;
    },

    create: async (employee: Employee): Promise<Employee> => {
        const res = await http.post(`${API.EMPLOYEE}/employees`, employee);
        return res.data;
    }
};
