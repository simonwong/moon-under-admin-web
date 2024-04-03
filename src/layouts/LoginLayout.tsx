import { Authenticated } from '@refinedev/core'
import { NavigateToResource } from '@refinedev/react-router-v6'
import { Outlet } from 'react-router-dom'

const LoginLayout = () => {
  return (
    <Authenticated
      key="authenticated-outer"
      fallback={<Outlet />}
    >
      <NavigateToResource />
    </Authenticated>
  )
}

export default LoginLayout
