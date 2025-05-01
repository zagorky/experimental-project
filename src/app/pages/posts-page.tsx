import useSWR from 'swr';
import { POSTS_ENDPOINT } from '~lib/posts-consts.ts';
import { fetcher } from '~utils/fetcher.ts';
import { PostType } from '~types/types.ts';
import { Loader } from '~components/ui/loader.tsx';

export const PostsPage = () => {
  const { data, error, isLoading } = useSWR<PostType[], unknown>(POSTS_ENDPOINT, fetcher);

  return (
    <>
      <h2 className={'font-bold text-pink-700 text-2xl'}>List of Posts</h2>
      {isLoading && <Loader />}
      {error && <h3>Error</h3>}
      {!data ? (
        <div>Nothing to render</div>
      ) : (
        <ul>
          {data.map((post) => {
            return (
              <li key={post.id}>
                <h3 className={'font-bold'}>{post.title}</h3>
                <p>{post.body}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
