/* eslint complexity: off */

import type { UiState } from "instantsearch.js"
import { history as historyRouter } from "instantsearch.js/es/lib/routers"

type RouteState = {
  query?: string
  types?: string[]
  grapes?: string[]
  regions?: string[]
  countries?: string[]
  classifications?: string[]
  page?: string
}

const routeStateDefaultValues: RouteState = {
  query: "",
  types: undefined,
  grapes: undefined,
  regions: undefined,
  countries: undefined,
  classifications: undefined,
  page: "1",
}

const router = historyRouter<RouteState>({
  createURL({ qsModule, routeState, location }): string {
    const { protocol, hostname, port = "", pathname, hash } = location
    const portWithPrefix = port === "" ? "" : `:${port}`
    const urlParts = location.href.match(/^(.*?)\/explore/)
    const baseUrl =
      (urlParts && urlParts[0]) ||
      `${protocol}//${hostname}${portWithPrefix}${pathname}`

    const queryParameters: Partial<RouteState> = {}

    if (
      routeState.query &&
      routeState.query !== routeStateDefaultValues.query
    ) {
      queryParameters.query = encodeURIComponent(routeState.query)
    }
    if (
      routeState.types &&
      routeState.types !== routeStateDefaultValues.types
    ) {
      queryParameters.types = routeState.types.map(encodeURIComponent)
    }
    if (
      routeState.grapes &&
      routeState.grapes !== routeStateDefaultValues.grapes
    ) {
      queryParameters.grapes = routeState.grapes.map(encodeURIComponent)
    }
    if (
      routeState.regions &&
      routeState.regions !== routeStateDefaultValues.regions
    ) {
      queryParameters.regions = routeState.regions.map(encodeURIComponent)
    }
    if (
      routeState.countries &&
      routeState.countries !== routeStateDefaultValues.countries
    ) {
      queryParameters.countries = routeState.countries.map(encodeURIComponent)
    }
    if (
      routeState.classifications &&
      routeState.classifications !== routeStateDefaultValues.classifications
    ) {
      queryParameters.classifications =
        routeState.classifications.map(encodeURIComponent)
    }

    if (routeState.page && routeState.page !== routeStateDefaultValues.page) {
      queryParameters.page = routeState.page
    }

    const queryString = qsModule.stringify(queryParameters, {
      addQueryPrefix: true,
      arrayFormat: "repeat",
    })
    return `${baseUrl}${queryString}${hash}`
  },

  parseURL({ qsModule, location }): RouteState {
    const queryParameters = qsModule.parse(location.search.slice(1))
    const {
      query = "",
      types = [],
      grapes = [],
      regions = [],
      countries = [],
      classifications = [],
      page = 1,
    } = queryParameters

    // `qs` does not return an array when there's a single value.
    const allTypes = (
      Array.isArray(types) ? types : [types].filter(Boolean)
    ) as string[]
    const allGrapes = (
      Array.isArray(grapes) ? grapes : [grapes].filter(Boolean)
    ) as string[]
    const allRegions = (
      Array.isArray(regions) ? regions : [regions].filter(Boolean)
    ) as string[]
    const allCountries = (
      Array.isArray(countries) ? countries : [countries].filter(Boolean)
    ) as string[]
    const allClassifications = (
      Array.isArray(classifications)
        ? classifications
        : [classifications].filter(Boolean)
    ) as string[]
    return {
      query: decodeURIComponent(query as string),
      types: allTypes.map(decodeURIComponent),
      grapes: allGrapes.map(decodeURIComponent),
      regions: allRegions.map(decodeURIComponent),
      countries: allCountries.map(decodeURIComponent),
      classifications: allClassifications.map(decodeURIComponent),
      page: page as string,
    }
  },
})

const getStateMapping = ({ indexName }) => ({
  stateToRoute(uiState: UiState): RouteState {
    const indexUiState = uiState[indexName]
    return {
      query: indexUiState.query,
      types: indexUiState.refinementList && indexUiState.refinementList.type,
      grapes: indexUiState.refinementList && indexUiState.refinementList._tags,
      regions:
        indexUiState.refinementList && indexUiState.refinementList.region,
      classifications:
        indexUiState.refinementList &&
        indexUiState.refinementList.classification,
      countries:
        indexUiState.refinementList && indexUiState.refinementList.country,

      page: (indexUiState.page && String(indexUiState.page)) || undefined,
    }
  },

  routeToState(routeState: RouteState): UiState {
    const refinementList: { [key: string]: string[] } = {}
    if (routeState.types) {
      refinementList.type = routeState.types
    }
    if (routeState.grapes) {
      refinementList._tags = routeState.grapes
    }
    if (routeState.regions) {
      refinementList.region = routeState.regions
    }
    if (routeState.countries) {
      refinementList.country = routeState.countries
    }
    if (routeState.classifications) {
      refinementList.classification = routeState.classifications
    }

    return {
      [indexName]: {
        query: routeState.query,
        refinementList,
        page: Number(routeState.page),
      },
    }
  },
})

const getRouting = (indexName: string) => ({
  router,
  stateMapping: getStateMapping({ indexName }),
})

export default getRouting
