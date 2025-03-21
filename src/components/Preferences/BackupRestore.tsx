import { useContext } from 'react'

import styled from '@emotion/styled'
import { setMany, clear } from 'idb-keyval'

import Button from './Button'
import UploadInput from './UploadInput'
import { SettingsContext } from '../../context/SettingsProvider'
import { initiateDownload } from '../../utils/downloadUtility'
import { readJsonFile } from '../../utils/readJsonFile'

import type { Settings } from '../../context/SettingsProvider'
import type { ChangeEvent } from 'react'

const Style = styled.div`
  display: grid;
  align-items: center;
  align-items: start;
  justify-content: space-between;
  margin-bottom: 1.5em;
  grid-gap: 1.5em;
  grid-template-columns: 1fr;

  @media (width >= 768px) {
    grid-template-columns: 1fr 1fr;
  }
`

const BackupRestore = () => {
  const { settings, setSettings, store } = useContext(SettingsContext)

  const onChange = async (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newSettings = (await readJsonFile(
        event.target.files[0]
      )) as Settings

      await clear(store)
      await setMany(Object.entries(newSettings), store)

      setSettings(newSettings)
    }
  }

  return (
    <Style>
      <section>
        <label>Backup</label>
        <p>Download your current preferences.</p>
        <Button
          onClick={() =>
            initiateDownload(
              JSON.stringify(settings, null, 2),
              `startpage_${Date.now()}.json`
            )
          }
          setClick={false}
        >
          Download preferences
        </Button>
      </section>
      <section>
        <label>Restore</label>
        <p>Restore your preferences from a backup.</p>
        <UploadInput
          label="Restore from backup"
          onChange={onChange}
          accept=".json,application/json"
        />
        <p>
          <small>
            Note: This operation will overwrite <b>all</b> preferences so ensure
            you backup anything important first.
          </small>
        </p>
      </section>
    </Style>
  )
}

export default BackupRestore
