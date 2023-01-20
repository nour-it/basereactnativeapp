
import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
import * as BackgroundFetch from 'expo-background-fetch';
import * as Notifications from 'expo-notifications';

const LOCATION_TASK_NAME = 'background-location-task';
const locationTask = async () => {
  const { status: foregroundStatus } = await Location.requestForegroundPermissionsAsync();
  if (foregroundStatus === 'granted') {
    const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
    if (backgroundStatus === 'granted') {
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        accuracy: Location.Accuracy.Balanced,
      });

    }
  }
};
TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
    
    // do something with the locations captured in the background
  }
});


const BACKGROUND_FETCH_TASK = 'background-fetch';
async function registerBackgroundFetchAsync() {
  
  return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
    minimumInterval: 60 * 15, // 15 minutes
    stopOnTerminate: false, // android only,
    startOnBoot: true, // android only
  });
}

TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  const now = Date.now();
  console.log(`Got background fetch call at date: ${new Date(now).toISOString()}`);
  // Be sure to return the successful result type!
  return BackgroundFetch.BackgroundFetchResult.NewData;
});


const NOTIFICATION_TASK = 'notification-task';
async function registerNotificationTask () {

   let not = await Notifications.registerTaskAsync(NOTIFICATION_TASK)

   console.log(not);
}

TaskManager.defineTask(NOTIFICATION_TASK, async () => {
  const now = Date.now();
  console.log(`Notification at date: ${new Date(now).toISOString()}`);

});



export default function useTask() {
  return {
    locationTask,
    registerBackgroundFetchAsync,
    registerNotificationTask,
  }
}