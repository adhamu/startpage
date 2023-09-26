import type { ChangeEventHandler } from 'react'
import { useRef } from 'react'

import Button from './Button'

interface Props {
  label?: string
  accept?: string
  onChange: ChangeEventHandler
}

const UploadInput = ({ label = 'Upload a file', accept, onChange }: Props) => {
  const input = useRef<HTMLInputElement>(null)

  const selectFiles = () => {
    if (input.current !== null) {
      input.current.click()
    }
  }

  return (
    <>
      <Button onClick={selectFiles} setClick={false}>
        {label}
      </Button>
      <input
        type="file"
        accept={accept}
        ref={input}
        onChange={onChange}
        style={{ display: 'none' }}
      />
    </>
  )
}

export default UploadInput
