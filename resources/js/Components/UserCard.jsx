import { Head } from "@inertiajs/react";

import { useState } from "react";
import { formatPhoneNumber } from "../../utils/index";

export default function UserCard({ user }) {
    const [showAllInfo, setShowAllInfo] = useState(false);

    return (
        <div
            class={`w-72 ${
                showAllInfo ? "h-80" : "h-48"
            } bg-white shadow-lg rounded-lg flex flex-col`}
        >
            <div class="flex flex-col justify-between items-center px-4 py-6">
                <div>
                    <img
                        class="h-16 w-16 rounded-full"
                        src={`data:image/png;base64,${user.document}`}
                        alt="user document photo"
                    />
                </div>
                <div class="flex items-center mt-4">
                    <div class="text-xl font-bold">{user.name}</div>
                </div>
            </div>
            {showAllInfo && (
                <div>
                    <div class="px-6 py-4">
                        <p class="text-gray-700">Email: {user.email}</p>
                        <p class="text-gray-700">
                            Phone:{" "}
                            {formatPhoneNumber(
                                user.phoneCode,
                                user.phoneNumber
                            )}
                        </p>
                    </div>
                </div>
            )}

            <div class="py-4 bg-gray-100 mt-auto">
                <button
                    class="text-gray-700 font-bold uppercase text-center w-full"
                    onClick={() => setShowAllInfo((state) => !state)}
                >
                    {showAllInfo ? "Show Less" : "Show More"}
                </button>
            </div>
        </div>
    );
}
