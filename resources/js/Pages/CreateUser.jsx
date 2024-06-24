import FileUploader from "@/Components/FileUploader";
import Layout from "@/Layouts/Layout";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import { Head, useForm } from "@inertiajs/react";
import { ErrorModal, SuccessModal } from "@/Components/Modal";
import { addToLocalStorage, readFromLocalStorage } from "../../utils";
import { useState } from "react";

export default function CreateUser({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        name: "",
        document: null,
        phone: "",
        code: "",
    });
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

    const submit = (e) => {
        e.preventDefault();

        post(route("user"), {
            onSuccess: () => {
                try {
                    const users = readFromLocalStorage("users");
                    users.push(data);
                    addToLocalStorage("users", users);
                } catch (error) {
                    addToLocalStorage("users", [data]);
                }

                setIsSuccessModalOpen(true);
            },
            onError: () => {
                setIsErrorModalOpen(true);
            },
        });
    };

    const handleSuccessModalClose = () => {
        setIsSuccessModalOpen(false);
        reset();
    };

    const handleErrorModalClose = () => {
        setIsErrorModalOpen(false);
    };

    return (
        <Layout title={"Create user"}>
            <div className="mt-12 p-6 px-12 bg-gray-50 shadow-md rounded-lg">
                <Head title="Create user" />
                <div>
                    <form onSubmit={submit} className="flex gap-4 flex-col">
                        <div>
                            <InputLabel htmlFor="email" value="Email" />
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                className="mt-1 block w-full"
                                placeholder="Email"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.email}
                                className="mt-2 animate-slide-in-left"
                            />
                        </div>

                        <div>
                            <InputLabel htmlFor="name" value="Name" />

                            <TextInput
                                id="name"
                                type="text"
                                name="name"
                                value={data.name}
                                className="mt-1 block w-full"
                                placeholder="Name"
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />

                            <InputError
                                message={errors.name}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <InputLabel htmlFor="code" value="Phone number" />
                            <div className="flex flex-rowmt-1">
                                <TextInput
                                    id="code"
                                    type="text"
                                    name="code"
                                    value={data.code}
                                    className=" mr-2 w-24"
                                    placeholder="Code"
                                    onChange={(e) =>
                                        setData("code", e.target.value)
                                    }
                                />

                                <TextInput
                                    id="phone"
                                    type="text"
                                    name="phone"
                                    value={data.phone}
                                    className="block w-full"
                                    placeholder="Phone Number"
                                    onChange={(e) =>
                                        setData("phone", e.target.value)
                                    }
                                />
                            </div>
                            <InputError
                                message={errors.code}
                                className="mt-2"
                            />
                            <InputError
                                message={errors.phone}
                                className="mt-1"
                            />
                        </div>
                        <div>
                            <FileUploader
                                onSelect={(file) => setData("document", file)}
                                file={data.document}
                            />
                            <InputError
                                message={errors.document}
                                className="mt-2"
                            />
                        </div>
                        <div className="flex items-center justify-end mt-4">
                            <PrimaryButton
                                className="ms-4"
                                disabled={processing}
                            >
                                Create
                            </PrimaryButton>
                        </div>
                    </form>
                </div>
                <SuccessModal
                    show={isSuccessModalOpen}
                    onClose={handleSuccessModalClose}
                />
                <ErrorModal
                    show={isErrorModalOpen}
                    onClose={handleErrorModalClose}
                />
            </div>
        </Layout>
    );
}
