'use client'

import { usePathname } from 'next/navigation'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

function generateBreadcrumbs(pathname: string) {
  const pathSegments = pathname.split('/').filter(segment => segment)

  const breadcrumbs = pathSegments.map((segment, index) => {
    const href = '/' + pathSegments.slice(0, index + 1).join('/')
    const isLast = index === pathSegments.length - 1

    return (
      <div key={href} className="flex items-center gap-2 capitalize">
        <BreadcrumbItem>
          {isLast ? (
            <BreadcrumbPage>{segment.replaceAll('-', ' ')}</BreadcrumbPage>
          ) : (
            <BreadcrumbLink href={href}>{segment.replaceAll('-', ' ')}</BreadcrumbLink>
          )}
        </BreadcrumbItem>
        {!isLast && <BreadcrumbSeparator />}
      </div>
    )
  })

  return [
    <div key="/" className="flex items-center gap-2 capitalize">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>
      {pathSegments.length > 0 && <BreadcrumbSeparator />}
    </div>,
    ...breadcrumbs
  ]
}

export function DashboardBreadcrumb() {
  const pathname = usePathname()
  const breadcrumbs = generateBreadcrumbs(pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList className="gap-1 sm:gap-1">
        {breadcrumbs}
      </BreadcrumbList>
    </Breadcrumb>
  )
}