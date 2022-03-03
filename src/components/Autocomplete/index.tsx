import * as React from 'react'

import type { Props } from './types'

import { Container, Suggestions } from './styled'
import { useListKeyboardNav } from './useListKeyboardNav'

const Autocomplete = ({
  suggestions,
  colourTheme,
  name = 'q',
  placeholder = 'Search',
  autoFocus = false,
  onChange,
}: Props): JSX.Element => {
  const {
    inputSearchRef,
    searchSuggestionsRef,
    selectInitialResult,
    onResultsHover,
    onResultsKeyDown,
  } = useListKeyboardNav()

  return (
    <Container>
      <input
        ref={inputSearchRef}
        type="search"
        name={name}
        placeholder={placeholder}
        autoFocus={autoFocus}
        onChange={onChange}
        onKeyDown={selectInitialResult}
      />
      {suggestions.length > 0 && (
        <Suggestions ref={searchSuggestionsRef} colourTheme={colourTheme}>
          {suggestions.map(suggestion => (
            <li
              key={suggestion?.toString()}
              onMouseOver={onResultsHover}
              onKeyDown={onResultsKeyDown}
            >
              {suggestion}
            </li>
          ))}
        </Suggestions>
      )}
    </Container>
  )
}

export default Autocomplete
