import { Header } from '@/components'
import { AppIcon } from '@/components/app-icon'
import { ThemedLayoutV2, ThemedSiderV2, ThemedTitleV2 } from '@refinedev/antd'
import { Authenticated } from '@refinedev/core'
import { CatchAllNavigate } from '@refinedev/react-router-v6'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Authenticated
      key="authenticated-inner"
      fallback={<CatchAllNavigate to="/login" />}
    >
      <ThemedLayoutV2
        Header={() => <Header sticky />}
        Sider={(props) => <ThemedSiderV2 {...props} fixed />}
        Title={({ collapsed }) => (
          <ThemedTitleV2
            collapsed={collapsed}
            text="Moon Under"
            icon={<AppIcon />}
          />
        )}
      >
        <Outlet />
      </ThemedLayoutV2>
    </Authenticated>
  )
}

export default MainLayout
