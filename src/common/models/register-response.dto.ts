export interface RegisterResponseDto {
  user: {
    age: number,
    _id: string,
    name: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    __v: number
  },
  token: string
}
