export const ESToASRequestAdapter = (esRequest) => ({
  query: esRequest?.query?.bool?.must[0].multi_match?.query || '',
  options: {
    sort: typeof esRequest.sort === 'string' ? [{ [esRequest.sort]: 'desc' }] : esRequest.sort,
    page: {
      size: esRequest.size,
      current: Math.ceil((esRequest.from + 1) / 10)
    },
    facets: Object.entries(esRequest?.aggs?.facet_bucket_all?.aggs || {}).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [value.terms.field.split('.')[0]]: [
          {
            type: 'value',
            name: key,
            size: value.terms.size
          }
        ]
      }),
      {}
    )
  },
})
