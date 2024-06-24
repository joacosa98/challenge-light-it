import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Layout({ title, children }) {
    return (
        <div className="min-h-screen flex flex-col items-center bg-white">
            <header class="bg-white shadow w-full">
                <div class="ml-7 max-w-7xl flex items-end py-6 px-8">
                    <h1 class="text-3xl font-bold tracking-tight text-gray-900">
                        {title}
                    </h1>
                    <Link
                        href={route("dashboard")}
                        class="ml-8 font-bold tracking-tight text-gray-90 hover:underline mb-0.5"
                    >
                        User list
                    </Link>
                </div>
            </header>
            <div>{children}</div>
        </div>
    );
}
