export type ColumnType = {
	id: string | number;
	title: string;
};

export type TaskType = {
	id: string | number;
	title: string;
	description: string;
	column: string | number;
	created_at: string;
};


export type  Inputs = {
	title: string;
	description: string;
	column: string;
}
export interface Todo {
	id: string;
	title: string;
	description: string;
	column: string;
}