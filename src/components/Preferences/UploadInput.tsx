import React from 'react'

import Button from './Button'

interface Props {
  label?: string
  accept?: string
  onChange: React.ChangeEventHandler
}

const UploadInput = ({
  label = 'Upload a file',
  accept,
  onChange,
}: Props): JSX.Element => {
  const input = React.useRef<HTMLInputElement>(null)

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
