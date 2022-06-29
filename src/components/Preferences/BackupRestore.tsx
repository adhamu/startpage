import * as React from 'react'

import { setMany } from 'idb-keyval'

import type { Settings } from '../../context/SettingsProvider'

import { SettingsContext } from '../../context/SettingsProvider'
import Button from './Button'
import UploadInput from './UploadInput'

const downloadSettings = (settings: Settings) => {
  const j = document.createElement('a')

  j.download = `settings_${Date.now()}.json`
  j.href = URL.createObjectURL(new Blob([JSON.stringify(settings, null, 2)]))
  j.click()
}

const parseJsonFile = (file: Blob) =>
  new Promise((resolve, reject) => {
    const fileReader = new FileReader()
    fileReader.onload = event => {
      if (event.target) {
        resolve(JSON.parse(event.target.result as string))
      }
    }
    fileReader.onerror = error => reject(error)
    fileReader.readAsText(file)
  })

const BackupRestore = (): JSX.Element => {
  const { settings, setSettings, store } = React.useContext(SettingsContext)

  return (
    <>
      <label>Backup &amp; Restore</label>
      <p>Download settings</p>
      <Button onClick={() => downloadSettings(settings)} setClick={false}>
        Export
      </Button>
      <br />
      <br />
      <p>Restore settings</p>
      <UploadInput
        label="Upload"
        onChange={async (event: React.ChangeEvent<HTMLInputElement>) => {
          if (event.target.files) {
            const s = (await parseJsonFile(event.target.files[0])) as Settings

            await setMany(Object.entries(s), store)

            console.log(Object.entries(s))

            setSettings(s)
          }
        }}
      />
    </>
  )
}

export default BackupRestore
