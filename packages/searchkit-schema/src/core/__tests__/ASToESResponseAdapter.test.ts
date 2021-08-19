import { ASToESResponseAdapter } from '../ASToESResponseAdapter'

describe('ASToESResponseAdapter', () => {
  const asResponse = {
    meta: {
      alerts: [],
      warnings: [],
      precision: 2,
      page: {
        current: 1,
        total_pages: 73,
        total_results: 721,
        size: 10
      },
      engine: {
        name: 'pokemon',
        type: 'default'
      },
      request_id: '1533c4aa-f241-4ce9-b6a8-145a2fb7161e'
    },
    results: [
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png'
        },
        types: {
          raw: ['Fairy']
        },
        hp: {
          raw: '95'
        },
        speed: {
          raw: '60'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/700'
        },
        number: {
          raw: '700'
        },
        total: {
          raw: '525'
        },
        defenese: {
          raw: '65'
        },
        attack: {
          raw: '65'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '130'
        },
        name: {
          raw: 'Sylveon'
        },
        sp_attack: {
          raw: '110'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '700'
        },
        id: {
          raw: '700'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/698.png'
        },
        types: {
          raw: ['Rock', 'Ice']
        },
        hp: {
          raw: '77'
        },
        speed: {
          raw: '46'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/698'
        },
        number: {
          raw: '698'
        },
        total: {
          raw: '362'
        },
        defenese: {
          raw: '50'
        },
        attack: {
          raw: '59'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '63'
        },
        name: {
          raw: 'Amaura'
        },
        sp_attack: {
          raw: '67'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '698'
        },
        id: {
          raw: '698'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/696.png'
        },
        types: {
          raw: ['Rock', 'Dragon']
        },
        hp: {
          raw: '58'
        },
        speed: {
          raw: '48'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/696'
        },
        number: {
          raw: '696'
        },
        total: {
          raw: '362'
        },
        defenese: {
          raw: '77'
        },
        attack: {
          raw: '89'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '45'
        },
        name: {
          raw: 'Tyrunt'
        },
        sp_attack: {
          raw: '45'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '696'
        },
        id: {
          raw: '696'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/691.png'
        },
        types: {
          raw: ['Poison', 'Dragon']
        },
        hp: {
          raw: '65'
        },
        speed: {
          raw: '44'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/691'
        },
        number: {
          raw: '691'
        },
        total: {
          raw: '494'
        },
        defenese: {
          raw: '90'
        },
        attack: {
          raw: '75'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '123'
        },
        name: {
          raw: 'Dragalge'
        },
        sp_attack: {
          raw: '97'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '691'
        },
        id: {
          raw: '691'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/690.png'
        },
        types: {
          raw: ['Poison', 'Water']
        },
        hp: {
          raw: '50'
        },
        speed: {
          raw: '30'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/690'
        },
        number: {
          raw: '690'
        },
        total: {
          raw: '320'
        },
        defenese: {
          raw: '60'
        },
        attack: {
          raw: '60'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '60'
        },
        name: {
          raw: 'Skrelp'
        },
        sp_attack: {
          raw: '60'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '690'
        },
        id: {
          raw: '690'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/689.png'
        },
        types: {
          raw: ['Rock', 'Water']
        },
        hp: {
          raw: '72'
        },
        speed: {
          raw: '68'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/689'
        },
        number: {
          raw: '689'
        },
        total: {
          raw: '500'
        },
        defenese: {
          raw: '115'
        },
        attack: {
          raw: '105'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '86'
        },
        name: {
          raw: 'Barbaracle'
        },
        sp_attack: {
          raw: '54'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '689'
        },
        id: {
          raw: '689'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/686.png'
        },
        types: {
          raw: ['Dark', 'Psychic']
        },
        hp: {
          raw: '53'
        },
        speed: {
          raw: '45'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/686'
        },
        number: {
          raw: '686'
        },
        total: {
          raw: '288'
        },
        defenese: {
          raw: '53'
        },
        attack: {
          raw: '54'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '46'
        },
        name: {
          raw: 'Inkay'
        },
        sp_attack: {
          raw: '37'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '686'
        },
        id: {
          raw: '686'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/684.png'
        },
        types: {
          raw: ['Fairy']
        },
        hp: {
          raw: '62'
        },
        speed: {
          raw: '49'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/684'
        },
        number: {
          raw: '684'
        },
        total: {
          raw: '341'
        },
        defenese: {
          raw: '66'
        },
        attack: {
          raw: '48'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '57'
        },
        name: {
          raw: 'Swirlix'
        },
        sp_attack: {
          raw: '59'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '684'
        },
        id: {
          raw: '684'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/679.png'
        },
        types: {
          raw: ['Steel', 'Ghost']
        },
        hp: {
          raw: '45'
        },
        speed: {
          raw: '28'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/679'
        },
        number: {
          raw: '679'
        },
        total: {
          raw: '325'
        },
        defenese: {
          raw: '100'
        },
        attack: {
          raw: '80'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '37'
        },
        name: {
          raw: 'Honedge'
        },
        sp_attack: {
          raw: '35'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '679'
        },
        id: {
          raw: '679'
        }
      },
      {
        generation: {
          raw: '6'
        },
        image: {
          raw: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png'
        },
        types: {
          raw: ['Psychic']
        },
        hp: {
          raw: '74'
        },
        speed: {
          raw: '104'
        },
        url: {
          raw: 'https://www.pokemon.com/us/pokedex/678'
        },
        number: {
          raw: '678'
        },
        total: {
          raw: '466'
        },
        defenese: {
          raw: '76'
        },
        attack: {
          raw: '48'
        },
        legendary: {
          raw: 'False'
        },
        sp_def: {
          raw: '81'
        },
        name: {
          raw: 'Meowstic'
        },
        sp_attack: {
          raw: '83'
        },
        _meta: {
          engine: 'pokemon',
          score: 1,
          id: '678'
        },
        id: {
          raw: '678'
        }
      }
    ],
    facets: {
      legendary: [
        {
          type: 'value',
          name: 'legendary',
          data: [
            {
              value: 'False',
              count: 675
            },
            {
              value: 'True',
              count: 46
            }
          ]
        }
      ],
      types: [
        {
          type: 'value',
          name: 'types',
          data: [
            {
              value: 'Water',
              count: 118
            },
            {
              value: 'Normal',
              count: 97
            },
            {
              value: 'Flying',
              count: 91
            },
            {
              value: 'Grass',
              count: 83
            },
            {
              value: 'Psychic',
              count: 75
            }
          ]
        }
      ]
    }
  }

  it('does things', () => {
    expect(ASToESResponseAdapter(asResponse)).toEqual({
      hits: {
        total: {
          value: 721
        },
        hits: [
          {
            _score: 1,
            _id: '700',
            _index: 'pokemon',
            _source: {
              attack: '65',
              defenese: '65',
              generation: '6',
              hp: '95',
              id: '700',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/700.png',
              legendary: 'False',
              name: 'Sylveon',
              number: '700',
              sp_attack: '110',
              sp_def: '130',
              speed: '60',
              total: '525',
              types: ['Fairy'],
              url: 'https://www.pokemon.com/us/pokedex/700'
            }
          },
          {
            _score: 1,
            _id: '698',
            _index: 'pokemon',
            _source: {
              attack: '59',
              defenese: '50',
              generation: '6',
              hp: '77',
              id: '698',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/698.png',
              legendary: 'False',
              name: 'Amaura',
              number: '698',
              sp_attack: '67',
              sp_def: '63',
              speed: '46',
              total: '362',
              types: ['Rock', 'Ice'],
              url: 'https://www.pokemon.com/us/pokedex/698'
            }
          },
          {
            _score: 1,
            _id: '696',
            _index: 'pokemon',
            _source: {
              attack: '89',
              defenese: '77',
              generation: '6',
              hp: '58',
              id: '696',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/696.png',
              legendary: 'False',
              name: 'Tyrunt',
              number: '696',
              sp_attack: '45',
              sp_def: '45',
              speed: '48',
              total: '362',
              types: ['Rock', 'Dragon'],
              url: 'https://www.pokemon.com/us/pokedex/696'
            }
          },
          {
            _score: 1,
            _id: '691',
            _index: 'pokemon',
            _source: {
              attack: '75',
              defenese: '90',
              generation: '6',
              hp: '65',
              id: '691',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/691.png',
              legendary: 'False',
              name: 'Dragalge',
              number: '691',
              sp_attack: '97',
              sp_def: '123',
              speed: '44',
              total: '494',
              types: ['Poison', 'Dragon'],
              url: 'https://www.pokemon.com/us/pokedex/691'
            }
          },
          {
            _score: 1,
            _id: '690',
            _index: 'pokemon',
            _source: {
              attack: '60',
              defenese: '60',
              generation: '6',
              hp: '50',
              id: '690',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/690.png',
              legendary: 'False',
              name: 'Skrelp',
              number: '690',
              sp_attack: '60',
              sp_def: '60',
              speed: '30',
              total: '320',
              types: ['Poison', 'Water'],
              url: 'https://www.pokemon.com/us/pokedex/690'
            }
          },
          {
            _score: 1,
            _id: '689',
            _index: 'pokemon',
            _source: {
              attack: '105',
              defenese: '115',
              generation: '6',
              hp: '72',
              id: '689',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/689.png',
              legendary: 'False',
              name: 'Barbaracle',
              number: '689',
              sp_attack: '54',
              sp_def: '86',
              speed: '68',
              total: '500',
              types: ['Rock', 'Water'],
              url: 'https://www.pokemon.com/us/pokedex/689'
            }
          },
          {
            _score: 1,
            _id: '686',
            _index: 'pokemon',
            _source: {
              attack: '54',
              defenese: '53',
              generation: '6',
              hp: '53',
              id: '686',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/686.png',
              legendary: 'False',
              name: 'Inkay',
              number: '686',
              sp_attack: '37',
              sp_def: '46',
              speed: '45',
              total: '288',
              types: ['Dark', 'Psychic'],
              url: 'https://www.pokemon.com/us/pokedex/686'
            }
          },
          {
            _score: 1,
            _id: '684',
            _index: 'pokemon',
            _source: {
              attack: '48',
              defenese: '66',
              generation: '6',
              hp: '62',
              id: '684',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/684.png',
              legendary: 'False',
              name: 'Swirlix',
              number: '684',
              sp_attack: '59',
              sp_def: '57',
              speed: '49',
              total: '341',
              types: ['Fairy'],
              url: 'https://www.pokemon.com/us/pokedex/684'
            }
          },
          {
            _score: 1,
            _id: '679',
            _index: 'pokemon',
            _source: {
              attack: '80',
              defenese: '100',
              generation: '6',
              hp: '45',
              id: '679',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/679.png',
              legendary: 'False',
              name: 'Honedge',
              number: '679',
              sp_attack: '35',
              sp_def: '37',
              speed: '28',
              total: '325',
              types: ['Steel', 'Ghost'],
              url: 'https://www.pokemon.com/us/pokedex/679'
            }
          },
          {
            _score: 1,
            _id: '678',
            _index: 'pokemon',
            _source: {
              attack: '48',
              defenese: '76',
              generation: '6',
              hp: '74',
              id: '678',
              image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/678.png',
              legendary: 'False',
              name: 'Meowstic',
              number: '678',
              sp_attack: '83',
              sp_def: '81',
              speed: '104',
              total: '466',
              types: ['Psychic'],
              url: 'https://www.pokemon.com/us/pokedex/678'
            }
          }
        ]
      },
      aggregations: {
        facet_bucket_all: {
          legendary: {
            buckets: [
              {
                doc_count: 675,
                key: 'False'
              },
              {
                doc_count: 46,
                key: 'True'
              }
            ]
          },
          types: {
            buckets: [
              {
                doc_count: 118,
                key: 'Water'
              },
              {
                doc_count: 97,
                key: 'Normal'
              },
              {
                doc_count: 91,
                key: 'Flying'
              },
              {
                doc_count: 83,
                key: 'Grass'
              },
              {
                doc_count: 75,
                key: 'Psychic'
              }
            ]
          }
        }
      }
    })
  })
})
