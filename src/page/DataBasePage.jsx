import React from 'react'
import MySql from '../components/MySql'
import DatabaseBanner from '../components/DatabaseBanner'
import MariaDB from '../components/MariaDB'
import SqLite from '../components/SqLite'
import PostgreSQL from '../components/PostgreSQL'

const DataBasePage = () => {
  return (
    <>
        <DatabaseBanner />
        <MySql />
        <MariaDB />
        <SqLite />
        <PostgreSQL />
    </>
  )
}

export default DataBasePage
