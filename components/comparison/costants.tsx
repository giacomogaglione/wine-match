export const OrganolepticSection = [
  { label: "Colour", content: (props) => props?.colour },
  { label: "Taste", content: (props) => props?.taste },
  { label: "Scent", content: (props) => props?.scent },
]

export const EnjoySection = [
  { label: "Bottle size", content: (props) => props?.bottle_size },
  { label: "Serving temp.", content: (props) => props?.serving_temp },
  { label: "Glass", content: (props) => props?.glass },
]

export const MainSection = [
  { label: "Year", content: (props) => props?.year },
  { label: "Region", content: (props) => props?.region },
  { label: "Producer", content: (props) => props?.producer },
  { label: "Category", content: (props) => props?.type },
  { label: "Grapes", content: (props) => props?.vine },
  { label: "Classification", content: (props) => props?.classification },
  { label: "Alcohol (%)", content: (props) => props?.alcohol },
  { label: "Vinification", content: (props) => props?.vinification },
  { label: "Aging", content: (props) => props?.aging },
  {
    label: "Production philosophy",
    content: (props) => props?.production_philosophy,
  },
  { label: "Note", content: (props) => props?.note },
]

export const AwardsSection = [
  {
    label: "VR",
    name: "Veronelli",
    score: (props) => props?.veronelli_score,
    baseScore: 100,
  },
  {
    label: "WE",
    name: "Wine Enthusiast",
    score: (props) => props?.wine_enthusiast_score,
    baseScore: 100,
  },
  {
    label: "LM",
    name: "Luca Maroni",
    score: (props) => props?.luca_maroni_score,
    baseScore: 100,
  },
  {
    label: "JS",
    name: "James Suckling",
    score: (props) => props?.james_suckling_score,
    baseScore: 100,
  },
  {
    label: "GR",
    name: "Gambero Rosso",
    year: (props) => props?.gambero_rosso_year,
    score: (props) => props?.gambero_rosso_score,
    baseScore: 3,
  },
  {
    label: "Bi",
    name: "Bibenda",
    score: (props) => props?.bibenda_score,
    baseScore: 5,
  },
  {
    label: "WS",
    name: "Wine Spectator",
    score: (props) => props?.wine_spectator_score,
    baseScore: 100,
  },
  {
    label: "RP",
    name: "Robert Parker",
    year: (props) => props?.robert_parker_year,
    score: (props) => props?.robert_parker_score,
    baseScore: 100,
  },
  {
    label: "SW",
    name: "Slowine",
    score: (props) => props?.slowine_score,
    baseScore: 5,
  },
  {
    label: "VA",
    name: "Vitae Ais",
    score: (props) => props?.vitae_ais_score,
    baseScore: 5,
  },
]
