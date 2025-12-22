import { http } from "./http";
import { API } from "../config/env";

export interface Asset {
    id?: number;
    assetCode?: string;
    name: string;
    type: string;
    status?: string;
    createdAt?: string;
}

export const AssetAPI = {
    getAll: async (): Promise<Asset[]> => {
        const res = await http.get(`${API.ASSET}/assets`);
        return res.data;
    },

    create: async (asset: Asset): Promise<Asset> => {
        const res = await http.post(`${API.ASSET}/assets`, asset);
        return res.data;
    }
};
