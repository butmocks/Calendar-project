import React from 'react';
// import moment from 'moment';
import './navigation.scss'
import { days } from '../../utils/dateUtils.js';

// const formatDate = date => moment(date).format('L');

const Navigation = ({ weekDates }) => {
  
  return (
    <header className="calendar__header">
      {weekDates.map(dayDate => (
        <div className="calendar__day-label day-label">
          <span className="day-label__day-name">
            {days[dayDate.getDay()]}
            </span>
          <span className="day-label__day-number">{dayDate.getDate()}</span>
        </div>
      ))}
    </header>
  );
};

export default Navigation;

// import React from 'react';
// import PropTypes from 'prop-types';
// import { days } from '../../utils/dateUtils.js';

// const Navigation = ({ weekDates }) => (
//   <header className="calendar__header">
//     {weekDates.map(dayDate => {
//       const isCurrentDay = new Date().getDate() === dayDate.getDate();

//       const dayNameStyles = isCurrentDay
//         ? {
//             fontWeight: '700',
//             color: 'black',
            
//           }
//         : null;

//       const dayNumberStyles = isCurrentDay
//         ? {
//             backgroundColor: '#black',
//             borderRadius: '20%',
//             color: 'blue',
//             width: '35px',
//             textAlign: 'center',
//           }
//         : null;

//       return (
//         <div key={dayDate} className="calendar__day-label day-label">
//           <span className="day-label__day-name" style={dayNameStyles}>
//             {days[dayDate.getDay()]}
//           </span>
//           <span className="day-label__day-number" style={dayNumberStyles}>
//             {dayDate.getDate()}
//           </span>
//         </div>
//       );
//     })}
//   </header>
// );

// export default Navigation;

// Navigation.propTypes = {
//   weekDates: PropTypes.array,
// };