import React from 'react';
import { Calendar as BigCalendar, Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import { events } from './events';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  return (
    <div style={{ height: '450px', width: '600px',marginTop:'50px',marginLeft: '150px' }}>
      <BigCalendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
};

export default MyCalendar;