/* eslint-disable global-require */
import format from 'date-fns/format';
import getDay from 'date-fns/getDay';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import React from 'react';
import PropTypes from 'prop-types';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-datepicker/dist/react-datepicker.css';

const locales = {
  'en-US': require('date-fns/locale/en-US'),
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function CalendarComp({
  setOpenModal,
  setSelectedCalDate,
  setSelectedApt,
  appointments,
}) {
  return (
    <>
      {appointments.length && (
        <div className="calendar">
          <Calendar
            localizer={localizer}
            events={appointments}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, margin: '50px' }}
            selectable
            onSelectSlot={(slotInfo) => {
              setSelectedCalDate(slotInfo.slots[0]);
              setOpenModal(true);
            }}
            onSelectEvent={(appointment) => {
              setSelectedApt(appointment);
              setOpenModal(true);
            }}
          />
        </div>
      )}
    </>
  );
}

CalendarComp.propTypes = {
  setOpenModal: PropTypes.func.isRequired,
  setSelectedCalDate: PropTypes.func.isRequired,
  setSelectedApt: PropTypes.func.isRequired,
  appointments: PropTypes.shape([]).isRequired,
};
