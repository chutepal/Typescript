/**
 * Configuration object for API endpoints.
 */
export const apiUrls = {
    // URL for user login via email and password.
    userLogin: 'auth/login',
    // URL to renew access token.
    refreshAccessToken: 'auth/refresh',
    // URL to get all metering points.
    allMeteringPoints: 'meteringpoints',
    /**
     * Function to generate URL for defined range readings.
     * @param {string} uuid - The value used in the URL.
     * @returns {string} - The generated URL.
     */
    definedRangeReading: (uuid: string) => `meteringpoints/${uuid}/readings`
};