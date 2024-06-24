import {
    Dialog,
    DialogPanel,
    Transition,
    TransitionChild,
} from "@headlessui/react";
import CheckImage from "../../assets/check.png";
import ErrorImage from "../../assets/error.png";

export default function Modal({
    children,
    show = false,
    maxWidth = "2xl",
    closeable = true,
    onClose = () => {},
}) {
    const close = () => {
        if (closeable) {
            onClose();
        }
    };

    const maxWidthClass = {
        sm: "sm:max-w-sm",
        md: "sm:max-w-md",
        lg: "sm:max-w-lg",
        xl: "sm:max-w-xl",
        "2xl": "sm:max-w-2xl",
    }[maxWidth];

    return (
        <Transition show={show} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed inset-0 flex overflow-y-auto px-4 py-6 sm:px-0 items-center z-50 transform transition-all"
                onClose={close}
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel
                        className={`mb-6 bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:w-full sm:mx-auto ${maxWidthClass}`}
                    >
                        {children}
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}

export const SuccessModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <div class="modal-body px-8 py-16">
                <div class="text-center">
                    <div className="flex items-center justify-center">
                        <h2 class="text-lg font-bold">Success!</h2>
                        <img src={CheckImage} className="w-8 ml-2" />
                    </div>
                    <p class="text-gray-600">
                        Your action has been successfully completed.
                    </p>
                </div>
            </div>
        </Modal>
    );
};

export const ErrorModal = ({ show, onClose }) => {
    return (
        <Modal show={show} onClose={onClose}>
            <div class="modal-body px-8 py-16">
                <div class="text-center">
                    <div className="flex items-center justify-center">
                        <h2 class="text-lg font-bold">Error!</h2>
                        <img src={ErrorImage} className="w-8 ml-2" />
                    </div>
                    <p class="text-gray-600">
                        Your action couldn't be completed. Try again!
                    </p>
                </div>
            </div>
        </Modal>
    );
};
