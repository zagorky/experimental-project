import { withDataTestId } from '~utils/helpers.ts';

export const MainPage = () => {
  return (
    <div>
      <h1 className={'font-bold text-pink-700 text-2xl'} {...withDataTestId('main-page-header')}>
        Hello
      </h1>
      <p>This is my training ground. It's where I experiment on myself hyh</p>
    </div>
  );
};
