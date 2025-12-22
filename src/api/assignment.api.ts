import { http } from "./http";
import { API } from "../config/env";

export interface Assignment {
    id?: string;
    employeeCode: string;
    assetId?: string | number;
    assetCode?: string;
}

export const AssignmentAPI = {
    getAll: async (): Promise<Assignment[]> => {
        const res = await http.get(`${API.ASSIGNMENT}/assignments`);
        return res.data;
    },

    assign: async (data: Assignment): Promise<Assignment> => {
        const res = await http.post(`${API.ASSIGNMENT}/assignments`, data);
        return res.data;
    }
};
