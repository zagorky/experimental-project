import { useState } from 'react';
import styles from './styles.module.css';
import { UserType } from '~types/types.ts';

export function UseStateForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const id = crypto.randomUUID();
  const [formData, setFormData] = useState({ name: '', email: '', id });

  console.log('Use state form render');

  return (
    <>
      <h2 className={styles.h2}>UseState Form</h2>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          setFormData({ name, email, id });
        }}
      >
        <label htmlFor={'nameUS'}>
          Your Name
          <input
            className={styles.input}
            id={'nameUS'}
            type={'text'}
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </label>
        <label htmlFor={'emailUS'} className={styles.label}>
          Email Address
          <input
            className={styles.input}
            id={'emailUS'}
            type={'email'}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </label>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
      <CurrentValue {...formData} />
    </>
  );
}

function CurrentValue({ name, email }: UserType) {
  return (
    <p>
      Текущее значение:
      <span className={styles.span}>
        {name} {email}
      </span>
    </p>
  );
}
