// Constants

/**
 * Time range for fetching electricity readings.
 * Contains start and end times represented as Unix timestamps in milliseconds.
 * These values correspond to specific dates and times.
 */
export const timeRange = {
    /** The start time for fetching electricity readings. */
    'startTime': 1688228100000,
    /** The end time for fetching electricity readings. */
    'endTime': 1690840799000
};

/**
 * The base URL for the Metiundo API.
 * All API requests will be prefixed with this base URL.
 */
export const baseUrl = "https://api.metiundo.de/v1";
