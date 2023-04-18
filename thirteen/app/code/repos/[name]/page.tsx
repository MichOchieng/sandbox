import React from 'react'
import Repo from '@/components/Repo'
import Link from 'next/link'

const RepoPage = ( { params: {name} }: any ) => {
  return (
    <div className='card'>
        <Link href={'/code/repos'}>Back</Link>
        <Repo name={name}/>
    </div>
  )
}

export default RepoPage