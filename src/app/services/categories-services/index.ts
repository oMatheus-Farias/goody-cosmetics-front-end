import { httpClient } from '@/app/configs/http-client'

import type {
  IGetAllWithParamsProps,
  IGetAllWithParamsReturn,
  IUpdateProps,
} from './interfaces'

export class CategoriesServices {
  static async getAllCategoriesWithParams({
    pageIndex,
    searchTerm,
  }: IGetAllWithParamsProps) {
    const { data } = await httpClient.get<IGetAllWithParamsReturn>(
      `/api/categories/params?pageIndex=${pageIndex}&searchTerm=${searchTerm}`,
    )
    return data
  }
  static async createCategories(name: string) {
    await httpClient.post('/api/categories', {
      name,
    })
  }
  static async updateCategories({ categoryId, name }: IUpdateProps) {
    await httpClient.put(`/api/categories/${categoryId}`, {
      name,
    })
  }
  static async deleteCategories(categoryId: string) {
    await httpClient.delete(`/api/categories/${categoryId}`)
  }
}
