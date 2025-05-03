import useSWR from 'swr';
import { POSTS_ENDPOINT } from '~config/endpoints.ts';
import { fetcher } from '~utils/fetcher.ts';
import { PostType } from '~types/types.ts';
import { Loader } from '~components/ui/loader.tsx';
import { ZodError } from 'zod';
import { useDeferredValue, useState, useTransition } from 'react';
import { Input } from '~components/ui/input.tsx';
import { Label } from '~components/ui/label.tsx';

export const PostsPage = () => {
  const { data, error, isLoading } = useSWR<PostType[], ZodError>(POSTS_ENDPOINT, fetcher);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setQuery(event.target.value);
    });
  };

  const filteredPosts =
    data?.filter((post) => {
      if (!deferredQuery) {
        return true;
      }
      return post.title.toLowerCase().includes(deferredQuery.toLowerCase());
    }) ?? [];

  return (
    <>
      <h2 className={'font-bold text-pink-700 text-2xl'}>List of Posts</h2>
      {isLoading && <Loader />}
      {error && <h3>Error</h3>}
      {!data ? (
        <div>Nothing to render</div>
      ) : (
        <>
          <Label>
            Search
            <Input value={deferredQuery} onChange={handleChange} />
          </Label>
          {isPending ? (
            <p>Loading...</p>
          ) : (
            <ul className={'max-w-150'}>
              {filteredPosts.map((post) => {
                return (
                  <li key={post.id}>
                    <h3 className={'font-bold'}>{post.userId}</h3>
                    <h4 className={'font-bold'}>{post.title}</h4>
                    <p>{post.body}</p>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </>
  );
};
