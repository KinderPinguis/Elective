import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

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

export const refreshToken = async (baseUrl: string) => {
    try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) {
            console.error('Refresh token is missing');
            return;
        }

        const response = await axios.post(`${baseUrl}/api/refresh-token`, { refreshToken });

        localStorage.setItem('accessToken', response.data.accessToken);
    } catch (error) {
        console.error('Error refreshing token:', error);
    }
};

export const isTokenExpired = (token: string) => {
    try {
        const decodedToken: any = jwtDecode(token);
        if (!decodedToken || !decodedToken.exp) {
            return true;
        }

        return Date.now() >= decodedToken.exp * 1000;
    } catch (error) {
        console.error('Error decoding token:', error);
        return true;
    }
};