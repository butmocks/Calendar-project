const events = [
  {
    id: 1,
    title: 'Go to the gym',
    description: 'some text here',
    dateFrom: new Date(2020, 8, 15, 10, 15),
    dateTo: new Date(2020, 8, 15, 15, 0),
  },
  {
    id: 2,
    title: 'Go to the school',
    description: 'hello, 2 am',
    dateFrom: new Date(2020, 8, 16, 10, 15),
    dateTo: new Date(2020, 8, 16, 11, 0),
  },
  {
    id: 3,
    title: 'Lunch',
    description: '',
    dateFrom: new Date(2020, 8, 17, 10, 30),
    dateTo: new Date(2020, 8, 17, 11, 30),
  },
  {
    id: 4,
    title: 'Meet friend',
    description: 'at the cafe',
    dateFrom: new Date(2020, 8, 25, 10, 30),
    dateTo: new Date(2020, 8, 25, 11, 0),
  },
];

export default events;


// const baseUrl = 'https://6245c105e3450d61b0f633d2.mockapi.io/api/v1/events';

// export const getEventList = () =>
//   fetch(baseUrl).then((response) => {
//     if (response.ok) {
//       return response.json();
//     }
//     throw new Error("Internal Server Error. Can't display events");
//   });

// export const creteEvent = (eventData) => {
//   return fetch(baseUrl, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json;charset=utf-8',
//     },
//     body: JSON.stringify(eventData),
//   });
// };

// export const deleteEventItem = (eventId) => {
//   return fetch(`${baseUrl}/${eventId}`, {
//     method: 'DELETE',
//   });
// };