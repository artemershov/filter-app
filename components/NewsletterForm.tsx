import { ChangeEvent, FormEvent, useState } from 'react';

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="mb-10 font-europe text-center text-[75px] leading-none tracking-[7.5px] uppercase">
        Join our
        <br />
        newsletter
      </div>
      <form
        className="w-[360px] m-auto py-1 border-b border-black flex font-europa text-xs"
        onSubmit={handleSubmit}
      >
        <input
          className="flex-grow bg-transparent placeholder-black tracking-[2px]"
          type="text"
          placeholder="YOUR E-MAIL"
          value={email}
          onChange={handleEmailChange}
        />
        <button className="tracking-[2px] uppercase" type="submit">
          Suscribe
        </button>
      </form>
    </div>
  );
};

export default NewsletterForm;
