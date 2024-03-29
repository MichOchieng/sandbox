import React from 'react'
import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';

async function fetchRepos(name: any) {
    const res = await fetch(`https://api.github.com/users/michochieng/repos/${name}`)
    const repos = await res.json();
    return repos
}

const Repo = async ({ name }: any) => {
    const repo = await fetchRepos(name);

    return (
        <>
            <h2>{repo.name}</h2>
            <p>{repo.description}</p>
            <div className='card-stats'>
                <div className='card-stat'>
                    <FaStar />
                    <span>{repo.stargazers_count}</span>
                </div>
                <div className='card-stat'>
                    <FaCodeBranch />
                    <span>{repo.forks_count}</span>
                </div>
                <div className='card-stat'>
                    <FaEye />
                    <span>{repo.watchers_count}</span>
                </div>
            </div>
        </>
    )
}

export default Repo

