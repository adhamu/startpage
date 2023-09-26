import axios from 'axios'

import { Engine, searchEngines } from '../config'

import type { SearchEngine } from '../types'
import type { Handler } from '@netlify/functions'

export const handler: Handler = async event => {
  let results: string[] = []
  const q = event.queryStringParameters?.q
  const engine: SearchEngine['label'] =
    event.queryStringParameters?.engine ?? ''

  const searchEngine = searchEngines.find(s => s.label === engine)

  if (q) {
    const { data } = await axios.get(`${searchEngine?.suggestions}${q}`)

    if (searchEngine?.label === Engine.STARTPAGE) {
      results = data.suggestions.map(
        (suggestion: { text: string }) => suggestion.text
      )
    } else {
      ;[, results] = data
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(results),
  }
}
