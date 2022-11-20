export interface postActionInterface {
  type: string,
  payload?:Record<string, any>[] | string
}

export interface postStateInterface {
  lodaing: boolean
  data: Record<string, any>[] | string
  error: string
}
