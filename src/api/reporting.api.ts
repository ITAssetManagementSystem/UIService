import { http } from "./http";
import { API } from "../config/env";

export const ReportingAPI = {
    summary: async () => {
        const res = await http.get(`${API.REPORTING}/reports/summary`);
        return res.data;
    }
};
