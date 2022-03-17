export const statuses = ['notStarted', 'inProgress', 'done'] as const;
export const statusTitles = ['Not started', 'In progress', 'Done'] as const;

export type StatusType = typeof statuses[number];
export type StatusTitleType = typeof statusTitles[number];
