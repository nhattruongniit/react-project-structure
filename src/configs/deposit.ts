export type IAggregate = {
  label: string;
  value: string;
  short_title: string;
};

export const AGGREGATE: Record<string, IAggregate> = {
  sum: {
    label: 'Sum',
    value: 'sum',
    short_title: 'sum',
  },
  avg: {
    label: 'Average',
    value: 'average',
    short_title: 'avg',
  },
  count: {
    label: 'Count',
    value: 'count',
    short_title: 'ct',
  },
  min: {
    label: 'Min',
    value: 'min',
    short_title: 'min',
  },
  max: {
    label: 'Max',
    value: 'max',
    short_title: 'max',
  },
};
