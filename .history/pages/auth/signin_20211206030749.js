import { getProviders, signIn } from 'next-auth/react'

//Browser
function signIn(providers) {
  return (
    <div>
      
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
