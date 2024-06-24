import React from "react";
import EmptyStateImage from "../../assets/empty-box.png";

const EmptyState = () => {
    return (
        <div className="flex flex-col gap-4 items-center justify-center h-full">
            <img src={EmptyStateImage} className="w-28" />
            <div className="text-center">
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                    No users found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    There are currently no users to display.
                </p>
                <p className="mt-1 text-sm text-gray-500">
                    Add a new one by clicking the button!
                </p>
            </div>
        </div>
    );
};

export default EmptyState;
