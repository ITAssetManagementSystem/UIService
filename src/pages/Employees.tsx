import { useEffect, useState } from "react";
import {
    TextField,
    Button,
    Stack,
    List,
    ListItem
} from "@mui/material";
import PageWrapper from "../components/PageWrapper";
import { EmployeeAPI, Employee } from "../api/employee.api";

export default function Employees() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [form, setForm] = useState<Employee>({
        employeeCode: "",
        name: "",
        email: "",
        department: ""
    });

    const load = async () => {
        setEmployees(await EmployeeAPI.getAll());
    };

    useEffect(() => {
        load();
    }, []);

    const submit = async () => {
        if (!form.employeeCode || !form.name || !form.email) {
            alert("All fields are mandatory");
            return;
        }
        await EmployeeAPI.create(form);
        setForm({ employeeCode: "", name: "", email: "", department: "" });
        load();
    };

    return (
        <PageWrapper title="Employees">
            <Stack spacing={2} maxWidth={400}>
                <TextField
                    label="Employee Code"
                    value={form.employeeCode}
                    onChange={e => setForm({ ...form, employeeCode: e.target.value })}
                    required
                />
                <TextField
                    label="Name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    required
                />
                <TextField
                    label="Email"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                />
                <TextField
                    label="Department"
                    value={form.department}
                    onChange={e => setForm({ ...form, department: e.target.value })}
                />
                <Button variant="contained" onClick={submit}>
                    Add Employee
                </Button>
            </Stack>

            <List>
                {employees.map(e => (
                    <ListItem key={e.employeeCode}>
                        {e.employeeCode} – {e.name}
                    </ListItem>
                ))}
            </List>
        </PageWrapper>
    );
}
