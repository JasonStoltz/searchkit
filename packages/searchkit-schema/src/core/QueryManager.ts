export type ValueFilter = {
  identifier: string
  value: string
}

export type RangeFilter = {
  identifier: string
  min: number
  max: number
}

export type DateRangeFilter = {
  identifier: string
  dateMin: string
  dateMax: string
}

export type GeoPoint = {
  lat: number
  lon: number
}

export type GeoBoundingBoxFilter = {
  identifier: string
  geoBoundingBox: {
    topLeft: GeoPoint
    bottomRight: GeoPoint
    topRight: GeoPoint
    bottomLeft: GeoPoint
  }
}

export type HierarchicalValueFilter = {
  identifier: string
  value: string
  level: number
}

type QueryOptions = {
  fields: Array<string>
}

export type MixedFilter =
  | ValueFilter
  | RangeFilter
  | DateRangeFilter
  | GeoBoundingBoxFilter
  | HierarchicalValueFilter

export default class QueryManager {
  constructor(
    private filters: Array<MixedFilter>,
    private query: string,
    private queryOptions: QueryOptions
  ) {}
  hasFilters(): boolean {
    return this.filters && this.filters.length > 0
  }

  hasQuery(): boolean {
    return !!(this.query && this.query.length > 0)
  }

  getQuery(): string {
    return this.query
  }

  getQueryOptions(): QueryOptions {
    return this.queryOptions
  }

  getFilters(): Array<MixedFilter> {
    return this.hasFilters() ? this.filters : []
  }

  getFiltersById(id: string): Array<MixedFilter> {
    if (!this.hasFilters()) return null
    const idFilters = this.filters.filter((filter) => filter.identifier === id)
    return idFilters.length > 0 ? idFilters : null
  }
}
