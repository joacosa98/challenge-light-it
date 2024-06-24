import EmptyState from "@/Components/EmptyState";
import UserCard from "@/Components/UserCard";
import { Link } from "@inertiajs/react";
import { useEffect } from "react";
import { addToLocalStorage } from "../../utils";
import Layout from "@/Layouts/Layout";

export default function Dashboard({ users }) {
    useEffect(() => {
        addToLocalStorage("users", users);
    }, []);

    return (
        <Layout title={"Users"}>
            <div class="min-h-full">
                <main className="flex flex-col">
                    <Link
                        href={route("user")}
                        class="mr-auto px-4 py-2 bg-gray-500 rounded-lg text-white text-sm m-8"
                    >
                        + Add User
                    </Link>
                    {users.length ? (
                        <div className="flex flex-wrap p-16 pt-4 gap-16 ">
                            {users.map((user) => (
                                <UserCard key={user.id} user={user} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState />
                    )}
                </main>
            </div>
        </Layout>
    );
}
