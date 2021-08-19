export const ASToESResponseAdapter = (asResponse) => {
  const esResponse = {
    hits: {
      total: {
        value: asResponse.meta.page.total_results
      },
      hits: asResponse.results.map((result) => ({
        _id: result._meta.id,
        _score: result._meta.score,
        _index: result._meta.engine,
        _source: Object.entries(result).reduce((acc, [key, value]) => {
          if (key === '_meta') return acc
          return {
            ...acc,
            [key]: value.raw
          }
        }, {})
      }))
    },
    aggregations: {
      facet_bucket_all: Object.entries(asResponse.facets).reduce(
        (p, [k, v]) => ({
          ...p,
          [k]: {
            buckets: v[0].data.map(d => ({
              key: d.value,
              doc_count: d.count
            }))
          }
        }),
        {}
      )
    }
  }
  return esResponse
}
