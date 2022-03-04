import * as React from 'react'

import type { Props } from './types'

import { useListKeyboardNav } from './useListKeyboardNav'

const cssClass = `autocomplete-${btoa('css-autocomplete').replaceAll('=', '')}`

const baseStyles = `
  .${cssClass} {
    position: relative;
  }

  .${cssClass} ul {
    box-sizing: border-box;
    position: absolute;
    top: calc(100% - 1px);
    width: 100%;
    border-top: 0;
    font-size: 1rem;
    list-style-type: none;
    overflow-y: auto;
  }

  .${cssClass} ul li a {
    display: block;
    text-decoration: none;
  }

  .${cssClass} ul li a:focus {
    border: 0;
    boxShadow: 0;
    font-weight: bold;
    outline: 0;
  }
`

const Autocomplete = ({
  suggestions,
  name = 'q',
  placeholder = 'Search',
  autoFocus = false,
  className = '',
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
    <>
      <style dangerouslySetInnerHTML={{ __html: baseStyles }} />
      <div className={[cssClass, className].join(' ')}>
        <input
          ref={inputSearchRef}
          type="search"
          name={name}
          placeholder={placeholder}
          autoFocus={autoFocus}
          onChange={onChange}
          onKeyDown={selectInitialResult}
          spellCheck={false}
        />
        {suggestions.length > 0 && (
          <ul ref={searchSuggestionsRef}>
            {suggestions.map(suggestion => (
              <li
                key={suggestion.label}
                onMouseOver={onResultsHover}
                onKeyDown={onResultsKeyDown}
              >
                <a href={suggestion.url}>{suggestion.label}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default Autocomplete
