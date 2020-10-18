import React, { FC } from 'react'
import { Pagination } from '../components/Pagination'
import { Repos } from '../components/Repos'
import { Search } from '../components/Search'

export const Home: FC = () => {
  return (
    <>
      <Search />
      <Repos />
      <Pagination />
    </>
  )
}
