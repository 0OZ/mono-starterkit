import { UserButton } from '@stackframe/stack'

import { ThemeSwitcher } from '@/components/ThemeSwitcher'
import { stackServerApp } from '@/lib/stack'

import { ShowToast } from './show-toast'
import { UploadExample } from './upload'

/**
 * Home page which is protected by authentication
 * @returns Next.js RSC page.
 */
export default async function Home() {
  const user = await stackServerApp.getUser()

  return (
    <main className='container mx-auto p-6'>
      <div className='flex min-h-[37.8px] items-center justify-between'>
        <h1>Next.js app, your user id is {user?.id}</h1>
        <ThemeSwitcher />
      </div>
      <UserButton />
      <ShowToast />
      <UploadExample />
    </main>
  )
}
