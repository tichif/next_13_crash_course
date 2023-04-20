import Link from 'next/link';
import { Suspense } from 'react';

import Repo, { fetchRepo } from '@/app/components/Repo';
import RepoDirs from '@/app/components/Repodirs';

export async function generateMetadata({ params }) {
  const repo = await fetchRepo(params.name);
  if (!repo) {
    return {
      title: 'Repository not found',
    };
  }

  return {
    title: `${repo.name} | Tichif Media`,
    description: repo.description,
  };
}

const SingeRepoPage = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className='btn btn-back'>
        Back to Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};

export default SingeRepoPage;
