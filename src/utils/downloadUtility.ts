export const initiateDownload = (data: BlobPart, name: string): void => {
  const link = document.createElement('a')
  const url = window.URL.createObjectURL(new Blob([data]))
  link.href = url
  link.setAttribute('download', name)
  link.click()
  link.removeAttribute('download')
  link.remove()
  window.URL.revokeObjectURL(url)
}
