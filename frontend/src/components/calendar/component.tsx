import React, { useEffect } from 'react';
import { Calendar as BigCalendar, Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './calendar.css';
import { events } from './events';
import { getRooms } from '../../api/room.api';
import { Room } from '../../types/room';

const localizer = momentLocalizer(moment);

const MyCalendar: React.FC = () => {
  /*
  let roomsDate = new Map<string, string>();

  const roomsToEvents = async() => {
    const res = await getRooms();
    console.log(res?.data);
    const datas: Array<Room> = res?.data;
    datas.forEach(data => {
      events.push({title: data?.room_type, start: data?.inicio, end: data?.final})
    });
  }
  
  useEffect(()=>{
    roomsToEvents();
  }, [])

  */
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