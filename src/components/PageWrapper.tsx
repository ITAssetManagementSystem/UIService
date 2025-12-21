import { Paper, Typography } from "@mui/material";
import { ReactNode } from "react";

export default function PageWrapper({
    title,
    children
}: {
    title: string;
    children: ReactNode;
}) {
    return (
        <Paper style={{ padding: 24 }}>
            <Typography variant="h5" gutterBottom>
                {title}
            </Typography>
            {children}
        </Paper>
    );
}
