import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { z } from 'zod'

import { useGetAllProductsWithParams } from '@/app/hooks/products-hooks'
import MainContainer from '@/view/components/main-container'
import MainContentHeader from '@/view/components/main-content-header'
import { SearchInput } from '@/view/components/search-input'

import { CreateProductsModal, ProductsTable } from './components'

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState(searchTerm)
  const [modalOpen, setModalOpen] = useState(false)

  const pageIndex = z.coerce
    .number()
    .transform((page) => page - 1)
    .parse(searchParams.get('products-page') ?? '1')

  const { products, isLoading } = useGetAllProductsWithParams({
    pageIndex,
    searchTerm: debouncedSearchTerm,
  })

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 400)

    return () => clearTimeout(timeout)
  }, [searchTerm])

  return (
    <MainContainer>
      <MainContentHeader
        title="Cadastre seus produtos"
        description="Aqui você pode cadastrar seus produtos."
      >
        <div className="flex w-full flex-col-reverse items-center gap-5 md:w-80 md:flex-row md:gap-2">
          <SearchInput
            placeholder="Buscar produto"
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          <CreateProductsModal open={modalOpen} onOpenChange={setModalOpen} />
        </div>
      </MainContentHeader>

      <div className="mt-8">
        {isLoading ? (
          <div>carregando...</div>
        ) : (
          <>
            {products && products?.products?.length > 0 ? (
              <ProductsTable
                products={products}
                setSearchParams={setSearchParams}
              />
            ) : (
              <p>Nenhuma informação encontrada.</p>
            )}
          </>
        )}
      </div>
    </MainContainer>
  )
}
