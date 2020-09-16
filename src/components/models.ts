export interface CardInfo {
  url: string
  title: string
  terms: {
    info: string
    add?: string
  }[]
  advantages: {
    info: string
    add?: string
  }[]
}
