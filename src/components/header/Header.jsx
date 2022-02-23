import React from 'react';
import moment from 'moment';
import './header.scss';
import PropTypes from 'prop-types';
import Modal from '../modal/Modal.jsx';
import { months } from '../../utils/dateUtils.js';

const Header = ({ addEvent, toCurrentDay, toPrevWeek, toNextWeek, weekDates }) => {

 let displayedMonth = months[new Date().getMonth()];
  // const firstDayWeekOfMonth = moment(weekDates[0]).format('MMMM YYYY');
  // const lastDayWeekOfMonth = moment(weekDates[weekDates.length - 1]).format('MMMM YYYY');

  // const displayedMonth =
  //   firstDayWeekOfMonth === (lastDayWeekOfMonth ? firstDayWeekOfMonth
  //     : `${firstDayWeekOfMonth} - ${lastDayWeekOfMonth}`);


  
      return (
    <header className="header">
      <button className="button create-event-btn" onClick={addEvent}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={toCurrentDay}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={toPrevWeek}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={toNextWeek}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">{displayedMonth}</span>
      </div>
    </header>  
    
  );
};

Header.propTypes = {
  toNextWeek: PropTypes.func.isRequired,
  toPrevWeek: PropTypes.func.isRequired,
  toCurrentDay: PropTypes.func.isRequired,
  weekDates: PropTypes.array.isRequired,
  addEvent: PropTypes.func.isRequired,
};

export default Header;
