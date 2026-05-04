'use client'
import Topbar from "@/components/Dashboard/Topbar";
import StatsGrid from "@/components/Dashboard/StatGrid";
import CallVolumeChart from "@/components/Dashboard/CallVolumeChart";
import CallStatusChart from "@/components/Dashboard/CallStatusChart";
import RecentCallsTable from "@/components/Dashboard/RecentCallsTable";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
    let router = useRouter();
    useEffect(() => {
        const getUser = async () => {
            const res = await fetch("http://localhost:4000/auth/me", {
                credentials: "include"
            });

            const data = await res.json();

            if (!res.ok) {
                router.replace("/sign-In");
            } else {
                // console.log(data.user);
            }
        };

        getUser();
    }, []);
    return (
        <>
            <Topbar title="Dashboard" subtitle="Welcome back, John" />

            <main className="flex-1 p-5 flex flex-col gap-4 overflow-y-auto">

                {/* Stats row */}
                <StatsGrid />

                {/* Chart row */}
                <div className="flex gap-3">
                    <CallVolumeChart />
                    <CallStatusChart />
                </div>

                {/* Recent calls table */}
                <RecentCallsTable />

            </main>
        </>
    );
}
