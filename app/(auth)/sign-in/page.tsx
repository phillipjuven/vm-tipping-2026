
'use client';
import { signIn } from 'next-auth/react';
export default function SignIn(){
  return (
    <div>
      <h2>Logg inn</h2>
      <button onClick={() => signIn('google')}>Logg inn med Google</button>
    </div>
  );
}
