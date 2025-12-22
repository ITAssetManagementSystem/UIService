import { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Stack,
    List,
    ListItem
} from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import { AssetAPI, Asset } from "../api/asset.api";

export default function Assets() {
    const [assets, setAssets] = useState<Asset[]>([]);
    const [form, setForm] = useState<Asset>({
        assetCode: "",
        name: "",
        type: ""
    });

    const load = async () => setAssets(await AssetAPI.getAll());

    useEffect(() => {
        load();
    }, []);

    const submit = async () => {
        if (!form.assetCode || !form.name) {
            alert("Asset Code and Name are required");
            return;
        }
        await AssetAPI.create(form);
        setForm({ assetCode: "", name: "", type: "" });
        load();
    };

    return (
        <PageWrapper title="Assets">
            <Stack spacing={2} maxWidth={400}>
                <TextField
                    label="Asset Code"
                    value={form.assetCode}
                    onChange={e => setForm({ ...form, assetCode: e.target.value })}
                    required
                />
                <TextField
                    label="Asset Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                />
                <TextField
                    label="Type"
                    value={form.type}
                    onChange={e => setForm({ ...form, type: e.target.value })}
                />
                <Button variant="contained" onClick={submit}>
                    Add Asset
                </Button>
            </Stack>

            <List>
                {assets.map(a => (
                    <ListItem key={a.id}>
                        {a.id} – {a.name}
                    </ListItem>
                ))}
            </List>
        </PageWrapper>
    );
}
