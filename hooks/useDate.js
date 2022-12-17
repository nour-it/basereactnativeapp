
/**
 * 
 * @param {Date} date 
 */
function getTime(date) {
    return ('0' + date.getHours()).slice(-2) + ':' + date.getMinutes();
}

/**
 * 
 * @param {Date} date 
 */
function getDate (date) {
    return date.getDate() + '-' + (date.getMonth() +1) + '-' + date.getFullYear();
}

/**
 * 
 * @param {Date} dateTime 
 */
export default function useDate (dateTime) {

    const time = getTime(dateTime);
    const day = getDate(dateTime);
    return [time, day];
}