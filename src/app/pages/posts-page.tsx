import useSWR from 'swr';
import { POSTS_ENDPOINT } from '~config/endpoints.ts';
import { fetcher } from '~utils/fetcher.ts';
import { PostType } from '~types/types.ts';
import { ZodError } from 'zod';
import { ChangeEvent, useDeferredValue, useState, useTransition } from 'react';
import { Input } from '~components/ui/input.tsx';
import { Label } from '~components/ui/label.tsx';

const PostsPage = () => {
  const { data, error } = useSWR<PostType[], ZodError>(POSTS_ENDPOINT, fetcher);
  const [query, setQuery] = useState('');
  const [isPending, startTransition] = useTransition();
  const deferredQuery = useDeferredValue(query);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
            <ul className={'max-w-250'}>
              {filteredPosts.map((post) => {
                return (
                  <li key={post.id}>
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

export default PostsPage;
