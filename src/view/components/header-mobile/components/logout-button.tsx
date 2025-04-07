import { DoorOpen, LoaderCircle } from 'lucide-react'

import { Button } from '../../ui/button'

type TProps = {
  handleSignOut: () => Promise<void>
  signOutPending: boolean
}

export default function LogoutButton({
  handleSignOut,
  signOutPending,
}: TProps) {
  return (
    <Button
      type="button"
      aria-label="Sair"
      disabled={signOutPending}
      onClick={handleSignOut}
      className="flex w-full items-center gap-1 rounded-[8px] bg-gray-100 px-2 py-2 text-gray-600 hover:cursor-pointer hover:bg-gray-200"
    >
      {signOutPending ? (
        <LoaderCircle className="animate-spin" />
      ) : (
        <DoorOpen className="w-4" aria-label="Sair" />
      )}
      <span className="text-sm font-normal">Sair</span>
    </Button>
  )
}
