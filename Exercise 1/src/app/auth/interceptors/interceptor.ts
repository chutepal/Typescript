import axios from 'axios';
import { LoginResponse } from '../../interfaces/types';
import { apiUrls } from '../../shared/configs/api-url.config';

/**
 * Sets up Axios interceptors that allows you to run your code or handle errors before the response is returned to the other API that made the request.
 *
 * This function configures an Axios interceptor to automatically handle 401 Unauthorized errors
 * by refreshing the authentication token and retrying the failed request.
 *
 * @param {LoginResponse} loginResponse - The login response object containing the tokens.
 */
export const setupInterceptor = (loginResponse: LoginResponse) => {
    // Flag to ensure the token refresh process is only attempted once per request
    let retry = false;

    // Add a response interceptor to Axios
    axios.interceptors.response.use(
        response => {
            // If the response is successful (2xx status codes), simply return the response
            return response;
        },
        error => {
            // Check if the error response status is 401 (Unauthorized) and the retry flag is not set
            if (error.response?.status === 401 && !retry) {
                // Set the retry flag to prevent multiple retries for the same request
                retry = true;

                // Attempt to refresh the authentication token
                return axios.post(apiUrls.refreshAccessToken, { refreshToken: loginResponse.tokens.refreshToken })
                    .then(refreshResponse => {
                        // If the token refresh is successful, update the default Authorization header
                        if (refreshResponse.status === 200) {
                            axios.defaults.headers.common['Authorization'] = `Bearer ${refreshResponse.data.token}`;
                            // Retry the original request with the new access token
                            return axios(error.config);
                        }
                    })
                    .catch(refreshError => {
                        // If the token refresh request failed, throw an error with details
                        throw new Error(`${error.code} ${refreshError.response?.data?.message || refreshError.message}`);
                    });
            }
            // If the error response status is not 401, or the retry flag is already set, throw an error
            throw new Error(error);
        }
    );
}