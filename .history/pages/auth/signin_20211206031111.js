import { getProviders, signIn as SignIntoProvider } from 'next-auth/react'

//Browser
function signIn(providers) {
  return (
    <div>
      <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
        </div>
      ))}
    </>
    </div>
  )
}

export async function getServerSideProps() {
  const providers = getProviders();

  return {
    props: { 
      providers}
  }
}

export default signIn
