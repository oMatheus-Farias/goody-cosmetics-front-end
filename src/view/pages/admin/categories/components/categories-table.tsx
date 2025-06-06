import dayjs from 'dayjs'

import { Pagination } from '@/view/components/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/view/components/ui/table'

import type { ICategoriesTableProps } from '../interfaces'
import { CategoryActionOptionsDropdownMenu } from './category-action-options-dropdown-menu'

export function CategoriesTable({
  categories,
  setSearchParams,
}: ICategoriesTableProps) {
  function handlePaginate(pageIndex: number) {
    const newSearchParams = new URLSearchParams(window.location.search)
    newSearchParams.set('categories-page', String(pageIndex + 1))
    setSearchParams(newSearchParams)
  }

  return (
    <>
      <Table data-aos="zoom-in">
        <TableHeader>
          <TableRow className="text-sm">
            <TableHead className="w-[600px] font-light text-gray-400">
              Nome
            </TableHead>
            <TableHead className="w-96 font-light text-gray-400">
              Data
            </TableHead>
            <TableHead className="text-right font-light text-gray-400">
              Ações
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-base font-normal text-gray-500">
          {categories?.categories?.map((category) => (
            <TableRow
              className="transition-all duration-150 ease-linear hover:bg-gray-100"
              key={category?.id}
            >
              <TableCell>{category?.name}</TableCell>
              <TableCell>
                {dayjs(category?.createdAt).format('DD/MM/YYYY')}
              </TableCell>
              <TableCell className="text-right">
                <CategoryActionOptionsDropdownMenu category={category} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {categories?.categories.length > 0 && (
        <div className="mt-5">
          <Pagination
            pageIndex={categories?.meta?.pageIndex}
            totalCount={categories?.meta?.totalCount}
            limit={categories?.meta?.limit}
            onPageChange={handlePaginate}
          />
        </div>
      )}
    </>
  )
}
