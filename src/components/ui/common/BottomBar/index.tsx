import React from 'react'

import { Button } from '@/components/ui/core'

type Props = { onClick: React.MouseEventHandler<HTMLButtonElement>; text: string; loading?: boolean }

export const BottomBar = (props: Props) => {
  return (
    <div className="border-0 border-t border-solid border-gray-200 fixed h-[100px] items-center bg-white left-0 right-0 bottom-0 w-full flex">
      <Button
        classNames={{ root: 'w-[240px] mx-auto lg:w-auto lg:float-right' }}
        size="lg"
        onClick={props.onClick}
        loading={props.loading}
      >
        {props.text}
      </Button>
    </div>
  )
}
