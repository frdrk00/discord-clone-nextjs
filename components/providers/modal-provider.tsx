'use client'

import { useEffect, useState } from 'react'

import {
  CreateChannel,
  CreateServer,
  DeleteChannel,
  DeleteMessage,
  DeleteServer,
  EditChannel,
  EditServer,
  Invite,
  LeaveServer,
  Members,
  MessageFile,
} from '@/components/modals'

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  return (
    <>
      <CreateServer />
      <EditServer />
      <DeleteServer />
      <CreateChannel />
      <EditChannel />
      <DeleteChannel />
      <Invite />
      <LeaveServer />
      <Members />
      <DeleteMessage />
      <MessageFile />
    </>
  )
}
