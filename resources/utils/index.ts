export const formatPhoneNumber = (code: string, number: string) =>
    `(${code}) ${number}`;

export const addToLocalStorage = (key: string, value: any): void => {
    // Convert value to JSON string before storing in localStorage
    const serializedValue = JSON.stringify(value);

    // Store the serialized value in localStorage
    localStorage.setItem(key, serializedValue);
};

export const readFromLocalStorage = (key: string): any => {
    const value = localStorage.getItem(key);
    const serializedValue = JSON.parse(value);

    return serializedValue;
};
