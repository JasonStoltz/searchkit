import { ESToASRequestAdapter } from '../ESToASRequestAdapter'

describe('ESToASRequestAdapter', () => {
  const esQuery = {
    post_filter: {
      bool: {
        must: [
          {
            bool: {
              must: [
                {
                  term: {
                    'types.keyword': 'Rock'
                  }
                },
                {
                  term: {
                    'types.keyword': 'Water'
                  }
                }
              ]
            }
          },
          {
            bool: {
              must: [
                {
                  term: {
                    legendary: 'False'
                  }
                }
              ]
            }
          }
        ]
      }
    },
    query: {
      bool: {
        must: [
          {
            multi_match: {
              query: 'pikachu',
              fields: ['name']
            }
          }
        ]
      }
    },
    sort: [
      {
        _score: 'desc'
      }
    ],
    from: 0,
    size: 10,
    aggs: {
      facet_bucket_all: {
        aggs: {
          types: {
            terms: {
              field: 'types.keyword',
              size: 5
            }
          },
          legendary: {
            terms: {
              field: 'legendary',
              size: 5
            }
          }
        },
        filter: {
          bool: {
            must: []
          }
        }
      }
    }
  }

  it('does things', () => {
    expect(ESToASRequestAdapter(esQuery)).toEqual({
      query: 'pikachu',
      options: {
        filters: {
          all: [
            {
              all: [
                {
                  types: 'Rock'
                },
                {
                  types: 'Water'
                }
              ]
            },
            {
              all: [
                {
                  legendary: 'False'
                }
              ]
            }
          ]
        },
        facets: {
          types: [
            {
              type: 'value',
              name: 'types',
              size: 5
            }
          ],
          legendary: [
            {
              type: 'value',
              name: 'legendary',
              size: 5
            }
          ]
        },
        page: {
          size: 10,
          current: 1
        },
        sort: [
          {
            _score: 'desc'
          }
        ]
      }
    })
  })

  it('wraps up sort correctly', () => {
    expect(
      ESToASRequestAdapter({
        ...esQuery,
        sort: '_score'
      })
    ).toEqual({
      query: 'pikachu',
      options: {
        filters: {
          all: [
            {
              all: [
                {
                  types: 'Rock'
                },
                {
                  types: 'Water'
                }
              ]
            },
            {
              all: [
                {
                  legendary: 'False'
                }
              ]
            }
          ]
        },
        facets: {
          types: [
            {
              type: 'value',
              name: 'types',
              size: 5
            }
          ],
          legendary: [
            {
              type: 'value',
              name: 'legendary',
              size: 5
            }
          ]
        },
        page: {
          size: 10,
          current: 1
        },
        sort: [
          {
            _score: 'desc'
          }
        ]
      }
    })
  })
})
