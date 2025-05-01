import './App.css';
import { SignalForm } from '~components/signal-form.tsx';
import { UseStateForm } from '~components/use-state-form.tsx';
import { ShadcnForm } from '~components/shadcn-form.tsx';

function App() {
  return (
    <section>
      <SignalForm />
      <UseStateForm />
      <ShadcnForm />
    </section>
  );
}

export default App;
