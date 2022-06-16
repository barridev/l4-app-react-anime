export type Event = {
  id: string;
} & EventDescription;

export type EventDescription = {
  name: string;
  date: Date;
  description: string;
  adress: string;
};
