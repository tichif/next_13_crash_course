import Link from 'next/link';

async function fetchRepoContent(name) {
  const response = await fetch(
    `https://api.github.com/repos/tichif/${name}/contents`,
    {
      next: {
        revalidate: 5 * 60, // 5mn
      },
    }
  );
  const content = await response.json();
  return content;
}

const RepoDirs = async ({ name }) => {
  const contents = await fetchRepoContent(name);
  const dirs = contents.filter((content) => content.type === 'dir');

  return (
    <>
      <h3>Directories</h3>
      <ul>
        {dirs.map((dir) => (
          <li key={dir.path}>
            {<Link href={`/code/repos/${name}/${dir.path}`}>{dir.path}</Link>}
          </li>
        ))}
      </ul>
    </>
  );
};

export default RepoDirs;
