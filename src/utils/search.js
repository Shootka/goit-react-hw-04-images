
export const search =  (array, keyword) => {
  return array?.filter((elem) =>  elem.tags.includes(keyword.toLowerCase() || ''))
}
