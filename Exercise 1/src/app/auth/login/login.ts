import axios from 'axios';
import { LoginResponse } from '../../interfaces/types';
import { apiUrls } from '../../shared/configs/api-url.config';
import { setupInterceptor } from '../interceptors/interceptor';
import { userCredentials } from '../../data/credentials';

/**
 * Logs in the user and sets up the authentication interceptor.
 *
 * This function sends a POST request to the login endpoint with user credentials,
 * sets the default Authorization header with the access token from the response,
 * sets up an interceptor for handling token refresh, and returns the login response data.
 *
 * @returns {Promise<LoginResponse>} - A promise that resolves to the login response data.
 */
export const loginUser = async (): Promise<LoginResponse> => {
    return await axios.post<LoginResponse>(apiUrls.userLogin, userCredentials)
        .then((response) => {
            // Set the default Authorization header with the access token from the response
            axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.tokens.accessToken}`;

            // Set up the interceptor to handle token refresh
            setupInterceptor(response.data);

            // Return the login response data as a resolved promise
            return Promise.resolve(response.data);
        })
        .catch((error) => {
            // Throw an error with details if the login request fails
            throw new Error(`${error.code} User login failed: ${error.response?.data?.message || error.message}`);
        });
}
