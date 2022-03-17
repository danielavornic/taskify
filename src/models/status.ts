export const statuses = ['notStarted', 'inProgress', 'done'] as const;
export const statusTitles = ['Not started', 'In progress', 'Done'] as const;

export type Status = typeof statuses[number];
export type StatusTitle = typeof statusTitles[number];
