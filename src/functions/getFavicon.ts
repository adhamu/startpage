import axios from 'axios'

import type { Handler } from '@netlify/functions'

export const handler: Handler = async event => {
  let result = ''
  const domain = event.queryStringParameters?.domain

  if (domain) {
    const { data } = await axios.get(
      `https://s2.googleusercontent.com/s2/favicons?sz=32&domain=${domain}`,
      { responseType: 'arraybuffer' }
    )

    result = `data:image/png;base64,${Buffer.from(data).toString('base64')}`
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  }
}
