
/**
 * 
 * @param {Date} date 
 */
function getTime(date) {
    return date.getHours().toString().padStart(2, 0) + ':' + date.getMinutes().toString().padStart(2, 0);
}

/**
 * 
 * @param {Date} date 
 */
function getDate (date) {
    return date.getDate() + '-' + (date.getMonth() +1).toString().padStart(2, 0) + '-' + date.getFullYear();
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