export const ESToASRequestAdapter = (esRequest) => ({
  query: esRequest?.query?.bool?.must[0].multi_match?.query || '',
  options: {
    sort: typeof esRequest.sort === 'string' ? [{ [esRequest.sort]: 'desc' }] : esRequest.sort,
    page: {
      size: esRequest.size,
      current: Math.ceil((esRequest.from + 1) / 10)
    },
    filters: {
      all: esRequest.post_filter?.bool?.must?.map((postFilter) => ({
        any: [
          Object.entries(postFilter.bool.must[0].term).reduce(
            (p, [k, v]) => ({
              ...p,
              [k.split('.')[0]]: v
            }),
            {}
          )
        ]
      }))
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
  }
})
