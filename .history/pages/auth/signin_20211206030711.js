import { getProviders, signIn } from 'next-auth/react'

function signIn() {
  return (
    <div>
      
    </div>
  )
}

export async function getServerSideProps() {
  const providers = getProviders();

  return {
    pro
  }
}

export default signIn
