export interface LoadItemsResultDTO {
  count: number,
  data: TodoItemDTO[]
}

export default interface TodoItemDTO {
  completed: boolean,
  _id: string,
  description: string,
  owner: string,
  createdAt: string,
  updatedAt: string,
  __v: number
}
