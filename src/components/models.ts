export interface CardInfo {
  url: string
  title: string
  terms: {
    info: {
      title: string
      text: string
    }
    add?: string
  }[]
  advantages: {
    info: string
    add?: string
  }[]
}
