import { useEffect, useState } from "react";
import {
    Button,
    MenuItem,
    Select,
    Stack,
    List,
    ListItem
} from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import { EmployeeAPI, Employee } from "../api/employee.api";
import { AssetAPI, Asset } from "../api/asset.api";
import { AssignmentAPI, Assignment } from "../api/assignment.api";

export default function Assignments() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [assets, setAssets] = useState<Asset[]>([]);
    const [assignments, setAssignments] = useState<any[]>([]);
    const [employeeCode, setEmployeeCode] = useState("");
    const [assetId, setAssetId] = useState("");

    const load = async () => {
        setEmployees(await EmployeeAPI.getAll());
        setAssets(await AssetAPI.getAll());
        setAssignments(await AssignmentAPI.getAll());
    };

    useEffect(() => {
        load();
    }, []);

    const submit = async () => {
        if (!employeeCode || !assetId) {
            alert("Select both Employee and Asset");
            return;
        }
        await AssignmentAPI.assign({ employeeCode, assetId: Number(assetId) });
        setEmployeeCode("");
        setAssetId("");
        load();
    };

    return (
        <PageWrapper title="Assignments">
            <Stack spacing={2} maxWidth={400}>
                <Select
                    value={employeeCode}
                    displayEmpty
                    onChange={e => setEmployeeCode(e.target.value)}
                >
                    <MenuItem value="">Select Employee</MenuItem>
                    {employees.map(e => (
                        <MenuItem key={e.employeeCode} value={e.employeeCode}>
                            {e.employeeCode} – {e.name}
                        </MenuItem>
                    ))}
                </Select>

                <Select
                    value={assetId}
                    displayEmpty
                    onChange={e => setAssetId(e.target.value as string)}
                >
                    <MenuItem value="">Select Asset</MenuItem>
                    {assets.map(a => (
                        <MenuItem key={a.id} value={a.id}>
                            {a.name}
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="contained" onClick={submit}>
                    Assign Asset
                </Button>
            </Stack>

            <List>
                {assignments.map((a, i) => {
                    const asset = assets.find(x => String(x.id) === String(a.assetId ?? a.asset_id));
                    const employee = employees.find(x => x.employeeCode === (a.employeeCode ?? a.employee_code));
                    const assetLabel = asset ? `${asset.name}` : String(a.assetId ?? a.asset_id);
                    const employeeLabel = employee ? `${employee.employeeCode} – ${employee.name}` : (a.employeeCode ?? a.employee_code);
                    return (
                        <ListItem key={a.id ?? i}>
                            {assetLabel} → {employeeLabel}
                        </ListItem>
                    );
                })}
            </List>
        </PageWrapper>
    );
}
