import type { Schema, Attribute } from '@strapi/strapi';

export interface ScheduleSchedule extends Schema.Component {
  collectionName: 'components_schedule_schedules';
  info: {
    displayName: 'Schedule';
    icon: 'calendar';
  };
  attributes: {
    start_date: Attribute.Date;
    end_date: Attribute.Date;
    fee: Attribute.BigInteger;
    name: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'schedule.schedule': ScheduleSchedule;
    }
  }
}
