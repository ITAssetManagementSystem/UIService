import { useEffect, useState } from "react";
import PageWrapper from "../components/PageWrapper";
import { ReportingAPI } from "../api/reporting.api";

export default function Dashboard() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        ReportingAPI.summary().then(setData);
    }, []);

    return (
        <PageWrapper title="Report Summary">
            <pre>{JSON.stringify(data, null, 2)}</pre>
        </PageWrapper>
    );
}
