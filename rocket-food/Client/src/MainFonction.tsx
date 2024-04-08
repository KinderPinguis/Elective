import React from 'react';

export function isStringEmpty(value: string) {
    return (value == null || (typeof value === "string" && value.trim().length === 0));
}

export const toggleErrorClass = (element: HTMLInputElement, value: string) => {
    if (isStringEmpty(value)) {
        element.classList.add('ErrorInput');
    } else {
        element.classList.remove('ErrorInput');
    }
};