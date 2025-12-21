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
    const [assignments, setAssignments] = useState<Assignment[]>([]);
    const [employeeCode, setEmployeeCode] = useState("");
    const [assetCode, setAssetCode] = useState("");

    const load = async () => {
        setEmployees(await EmployeeAPI.getAll());
        setAssets(await AssetAPI.getAll());
        setAssignments(await AssignmentAPI.getAll());
    };

    useEffect(() => {
        load();
    }, []);

    const submit = async () => {
        if (!employeeCode || !assetCode) {
            alert("Select both Employee and Asset");
            return;
        }
        await AssignmentAPI.assign({ employeeCode, assetCode });
        setEmployeeCode("");
        setAssetCode("");
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
                    value={assetCode}
                    displayEmpty
                    onChange={e => setAssetCode(e.target.value)}
                >
                    <MenuItem value="">Select Asset</MenuItem>
                    {assets.map(a => (
                        <MenuItem key={a.assetCode} value={a.assetCode}>
                            {a.assetCode} – {a.name}
                        </MenuItem>
                    ))}
                </Select>

                <Button variant="contained" onClick={submit}>
                    Assign Asset
                </Button>
            </Stack>

            <List>
                {assignments.map((a, i) => (
                    <ListItem key={i}>
                        {a.assetCode} → {a.employeeCode}
                    </ListItem>
                ))}
            </List>
        </PageWrapper>
    );
}
